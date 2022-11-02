import pandas as pd
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.chrome.options import Options
import time
import gensim
import pickle
#import batt_scraper # importing batt_scraper.py so that the script runs. That file should be reformatted as a function and not a script

'''links = pd.read_csv("links.csv") # TODO: Change to correct file location

chrome_options = Options()
chrome_options.add_argument("--ignore-certificate-errors-spki-list")
chrome_options.add_argument('--ignore-ssl-errors')

s = Service(ChromeDriverManager().install()) # manages chromedriver

ser = pd.DataFrame(index=links["links"], columns=["text", "Tag Number"]) # creates a series with the links as the index
tag = 0
documents = []
for link in links["links"]:
    try:
        driver = webdriver.Chrome(service=s, chrome_options=chrome_options)
        driver.get(link)
        # paragraphs are seperated on the website by <p> tags all under the "article-body" id
        paragraphs = driver.find_elements(By.XPATH, '//div[@id="article-body"]/p')
        text = "\n".join([p.text for p in paragraphs])
        text_corpus = gensim.models.doc2vec.TaggedDocument(gensim.utils.simple_preprocess(text), [tag])
        if len(text_corpus) == 0:
            raise Exception("No text found")
        ser.loc[link] = [" ".join(text_corpus.words), tag]
        tag += 1
        ser.to_csv("text.csv")
        documents.append(text_corpus)
        driver.quit()
    except:
        ser[link] = "Error"
        time.sleep(5) # sleep for 5 seconds after an error, I think battalion is timing out the web scraper
        ser.to_csv("text.csv")

# save the documents to a pickle file
with open("documents.pkl", "wb") as f:
    pickle.dump(documents, f)'''

documents = pickle.load(open("documents.pkl", "rb"))

model = gensim.models.doc2vec.Doc2Vec(vector_size=50, min_count=2, epochs=100)
model.build_vocab(documents)
model.train(documents, total_examples=model.corpus_count, epochs=model.epochs)

vector = model.infer_vector(documents[69].words)
sims = model.dv.most_similar([vector], topn=10)
print(sims)

#key = "sFRLroe8JXPCtDJ1drv4JA"
