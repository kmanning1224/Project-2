from flask import Flask, Response, render_template, jsonify,redirect, url_for, send_from_directory
import pandas as pd 
from sqlalchemy import create_engine
from sqlalchemy import BigInteger, Column, JSON, Text
from config import cxnstring
from flask_cors import CORS
import psycopg2
import sys
import requests
import json
import os
app = Flask(__name__)
app._static_folder = ''
CORS(app)
engine = create_engine(cxnstring, pool_recycle=3600)


# , pool_recycle=3600
@app.route("/")
def index():
    with engine.connect() as con:
        #query result from sqlalchemy + postgres
        # year = con.execute ("""SELECT DISTINCT (totals_gender."yearOfRegistration") FROM totals_gender;""")
        # gender = con.execute (""" SELECT DISTINCT (totals_gender."gender")FROM totals_gender; """)
        # #cleaning results, removing uneeded values from tuple i.e( (,))
        # years = [y[0] for y in year]
        # gender = [g[0] for g in gender]

        return render_template("home.html")

@app.route("/geodata")
def geodata():
    SITE_ROOT = os.path.realpath(os.path.dirname(__file__))
    json_url = os.path.join(SITE_ROOT, 'static', 'us_trafficking_locations2.geojson')
    data = json.load(open(json_url))
    return render_template("home.html", data=data)


@app.route("/api/<year>/<gender>")
def apitest(years,gender):
    with engine.connect() as con:
        gender = con.execute (""" SELECT DISTINCT (totals_gender."gender") WHERE (totals_gender.yearOfRegistration") {year}, WHERE (totals_gender.gender) {gender} FROM totals_gender; """)
        year = con.execute (""" SELECT DISTINCT (totals_gender."year") WHERE (totals_gender.yearOfRegistration") {year}, WHERE (totals_gender.gender) {gender} FROM totals_gender; """)
        gender = [g[0] for g in gender]
        years = [y[0] for y in year]
        
    return render_template("home.html",years=years, gender=gender)
        
@app.route("/fulldate")
def psqltest():
    response = pd.read_sql("SELECT * FROM assault_table_db", engine)
    return Response(response.to_json(orient="records", date_format="iso"), mimetype="application/json")

@app.route("/assault_by_state")
def gender():
    response = pd.read_sql("SELECT * FROM assault_per_state", engine)
    return Response(response.to_json(orient = "records", date_format="iso"), mimetype="application/json")

@app.route("/gender")
def test():
    response = pd.read_sql("SELECT * FROM totals_gender", engine)
    return Response(response.to_json(orient = "records", date_format="iso"), mimetype="application/json")

@app.route("/fulldb_og")
def fulldb():
    response = pd.read_sql("SELECT * FROM all_totals_global", engine)
    return Response(response.to_json(orient = "records", date_format="iso"), mimetype="application/json")

@app.route('/static/<path:path>')
def send_static(path):
    return send_from_directory('static', path)


if __name__ == "__main__":
    app.run(debug=True)