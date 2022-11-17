from typing import Dict, Text

import numpy as np
import tensorflow as tf # pip install tensorflow/tensorflow-cpu 
import pandas as pd

import tensorflow_datasets as tfds
#import tensorflow_recommenders as tfrs
import pprint


def init_model(get_recs = False):

  ratings = pd.read_csv('ratings_mock_links.csv')
  articles = pd.read_csv('articles_mock_links.csv')

  ratings['user_id'] = ratings['user_id'].map(str)
  articles['title'] = articles['title'].map(str)

  ratings = tf.data.Dataset.from_tensor_slices(dict(ratings))
  articles = tf.data.Dataset.from_tensor_slices(dict(articles))
  articles = articles.map(lambda x: x["title"]) # need this to stop errors from df to dataset conversion

  user_ids_vocabulary = tf.keras.layers.StringLookup(mask_token=None)
  user_ids_vocabulary.adapt(ratings.map(lambda x: x["user_id"]))

  article_titles_vocabulary = tf.keras.layers.StringLookup(mask_token=None)
  article_titles_vocabulary.adapt(articles)

  class ArticleLensModel(tfrs.Model):
    # We derive from a custom base class to help reduce boilerplate. Under the hood,
    # these are still plain Keras Models.

    def __init__(
        self,
        user_model: tf.keras.Model,
        article_model: tf.keras.Model,
        task: tfrs.tasks.Retrieval):
      super().__init__()

      # Set up user and article representations.
      self.user_model = user_model
      self.article_model = article_model

      # Set up a retrieval task.
      self.task = task

    def compute_loss(self, features: Dict[Text, tf.Tensor], training=False) -> tf.Tensor:
      # Define how the loss is computed.

      user_embeddings = self.user_model(features["user_id"])
      article_embeddings = self.article_model(features["title"])

      return self.task(user_embeddings, article_embeddings)

  # Define user and article models.
  user_model = tf.keras.Sequential([
      user_ids_vocabulary,
      tf.keras.layers.Embedding(user_ids_vocabulary.vocab_size(), 64)
  ])
  article_model = tf.keras.Sequential([
      article_titles_vocabulary,
      tf.keras.layers.Embedding(article_titles_vocabulary.vocab_size(), 64)
  ])

  # Define your objectives.
  task = tfrs.tasks.Retrieval(metrics=tfrs.metrics.FactorizedTopK(
      articles.batch(128).map(article_model)
    )
  )

  # Create a retrieval model.
  #model = ArticleLensModel(user_model, article_model, task)
  #model.compile(optimizer=tf.keras.optimizers.Adagrad(0.5))

  # Train for 3 epochs.
  # model.fit(ratings.batch(4096), epochs=3)

  model = ArticleLensModel(user_model, article_model, task)
  model.load_weights('content_model_weights')

  if get_recs:
    # Use brute-force search to set up retrieval using the trained representations.
    index = tfrs.layers.factorized_top_k.BruteForce(model.user_model)
    index.index_from_dataset(
        articles.batch(100).map(lambda title: (title, model.article_model(title))))

    # Get some recommendations.
    _, titles = index(np.array(["1"]))
    print(f"Top 3 recommendations for user 1: {titles[0, :3]}")

  return model


  