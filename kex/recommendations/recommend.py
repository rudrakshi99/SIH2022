import numpy as np
import pandas as pd
import os
import pickle


def joiner(file_name):
    paths = os.path.dirname(os.path.abspath(__file__))
    paths = os.path.join(paths, file_name)
    return paths

data = pd.read_csv(joiner('ratings.csv'))

recommender = None
amazon_ratings = data.dropna()
amazon_ratings.head()
amazon_ratings.shape
popular_products = pd.DataFrame(amazon_ratings.groupby('ProductId')['Rating','ProductId'].count())

most_popular = popular_products.sort_values('Rating', ascending=False)

with open(joiner("recommender.pkl"), "wb") as rfile:
    recommender = pickle.dump(most_popular,rfile)

with open(joiner("recommender.pkl"), "rb") as rfile:
    mp = pickle.load(rfile)

def predict():
        
        data = mp.head(10)
        
        return data