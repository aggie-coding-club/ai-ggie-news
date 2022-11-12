import pandas as pd
from flask import Flask, send_from_directory
from flask_cors import CORS  # comment this on deployment
from flask_restful import Api, Resource, reqparse

from api.HelloApiHandler import HelloApiHandler

app = Flask(__name__, static_url_path='', static_folder='frontend/build')
CORS(app) #comment this on deployment
api = Api(app)

@app.route("/", defaults={'path':''})
def serve(path):
    return send_from_directory(app.static_folder,'index.html')

@app.route('/articles')
def articles():
    articles = pd.read_csv("test_info.csv")
    article_titles = articles['title'].values
    #article_title = "Hello World"
    content_body = articles['content'].values
    #content_body= "The world is happy."
    link_ref = articles['link'].values
    img_ref = articles['image'].values
    #link_ref = "https://youtube.com"
    return {"title1": article_titles[0], "content1": content_body[0], "link1": link_ref[0], "image1":img_ref[0],
    "title2": article_titles[1], "content2": content_body[1], "link2": link_ref[1], "image2":img_ref[1],
    "title3": article_titles[2], "content3": content_body[2], "link3": link_ref[2], "image3":img_ref[2],
    "title4": article_titles[3], "content4": content_body[3], "link4": link_ref[3], "image4":img_ref[3],
    "title5": article_titles[4], "content5": content_body[4], "link5": link_ref[4], "image5":img_ref[4]
    }

api.add_resource(HelloApiHandler, '/flask/hello')
