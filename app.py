import pandas as pd
from flask import Flask, send_from_directory
from flask_cors import CORS  # comment this on deployment
from flask_restful import Api, Resource, reqparse

from api.HelloApiHandler import HelloApiHandler

app = Flask(__name__, static_url_path='', static_folder='frontend/build')
# CORS(app) #comment this on deployment
api = Api(app)

@app.route("/", defaults={'path':''})
def serve(path):
    return send_from_directory(app.static_folder,'index.html')

@app.route('/articles')
def articles():
    articles = pd.read_csv("articles_mock.csv")
    article_title = articles['title'].values[0]
    return {"title": article_title, "content": "football"}

api.add_resource(HelloApiHandler, '/flask/hello')
