import gensim
from sqlalchemy import create_engine, text

#import batt_scraper # importing batt_scraper.py so that the script runs. That file should be reformatted as a function and not a script

sql_url = "cockroachdb://AiggieNews:Kb4q6M_zb9rUOGpnHIGmyw@free-tier14.aws-us-east-1.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full&options=--cluster%3Ddamp-iguana-6369"

def train_model():
    documents = []
    with create_engine(sql_url).connect() as conn:
        for link, body in conn.execute(text("SELECT link, text FROM articles")):
            documents.append(gensim.models.doc2vec.TaggedDocument(gensim.utils.simple_preprocess(body), [link]))

    model = gensim.models.doc2vec.Doc2Vec(vector_size=50, min_count=2, epochs=100)
    model.build_vocab(documents)
    model.train(documents, total_examples=model.corpus_count, epochs=model.epochs)
    model.save("doc2vec.model")

def get_similar(text, num_articles=5):
    model = gensim.models.doc2vec.Doc2Vec.load("doc2vec.model")
    inferred_vector = model.infer_vector(gensim.utils.simple_preprocess(text))
    sims = model.docvecs.most_similar([inferred_vector], topn=num_articles)
    return [link for link, _ in sims[:num_articles]]
