import pandas as pd
from flask import Flask, send_from_directory, render_template, request, json
from flask_cors import CORS  # comment this on deployment
from flask_restful import Api, Resource, reqparse
import models
from api.HelloApiHandler import HelloApiHandler
import sql

app = Flask(__name__, static_url_path='', static_folder='frontend/build')
CORS(app) #comment this on deployment
api = Api(app)


@app.route("/", defaults={'path':''})
def serve(path):
    return send_from_directory(app.static_folder,'index.html')


@app.route('/log', methods=["POST"])
def log():
    user = request.json['username']
    password = request.json['password']

    return json.dumps({'Output': str(validateUser(user,password))})


@app.route('/articles')
def articles():
    # model = models.init_model()
    # print(model)
    articles = pd.read_csv("test_info.csv")

    article_titles = articles['title'].values
    content_body = articles['content'].values
    link_ref = articles['link'].values
    img_ref = articles['image'].values
    return {"title1": article_titles[0], "content1": content_body[0], "link1": link_ref[0], "image1":img_ref[0],
    "title2": article_titles[1], "content2": content_body[1], "link2": link_ref[1], "image2":img_ref[1],
    "title3": article_titles[2], "content3": content_body[2], "link3": link_ref[2], "image3":img_ref[2],
    "title4": article_titles[3], "content4": content_body[3], "link4": link_ref[3], "image4":img_ref[3],
    "title5": article_titles[4], "content5": content_body[4], "link5": link_ref[4], "image5":img_ref[4]
    }

@app.route('/prefers', methods=["POST"]) #set methods to POST so that the only thing this route does is recieve information.
def prefers():
    #getting all json contents like a dictionary with keys and values
    basketball = request.json['basketball']
    football = request.json['football']
    baseball = request.json['baseball']
    track = request.json['trackandfield']
    golf = request.json['golf']
    swim = request.json['swim']
    column = request.json['column']
    editorial = request.json['editorial']
    guest_com = request.json['guest_commentary']
    sports_com = request.json['sports_commentary']
    silver_taps = request.json['silvertaps']
    ring_day = request.json['ringday']
    muster = request.json['muster']
    bonfire = request.json['bonfire']
    
    #attempt to write to text file
    try:
        writeInto(basketball,football,baseball,track,golf,swim)
    except:
        return "error with writing"

    return json.dumps({ #json dumps converts the json text to a stirng that is then returned to preference.js and logged to console
        'basketball':basketball,
        'football':football,
        'baseball':baseball,
        'track':track,
        'golf': golf,
        'swim' : swim,
        'column' : column,
        'editorial' : editorial,
        'geust_commentary' : guest_com,
        'sports_commentary' : sports_com,
        'silvertaps' : silver_taps,
        'ringday' : ring_day,
        'muster' : muster,
        'bonfire' : bonfire,
        })

#validation used for login/signup pages (currently not written properly)
def validateUser(username, password):
    return username + " " + password

#writes to a txt file to confirm the json contents have been recieved properly
def writeInto(basketball,football,baseball,track,golf,swim):
    selected = open('selectionGiven','w')
    stringTaken=json.dumps({
        'basketball':basketball,
        'football':football,
        'baseball':baseball,
        'track':track,
        'golf': golf,
        'swim' : swim})
    selected.write(stringTaken)
    selected.close()
api.add_resource(HelloApiHandler, '/flask/hello')
