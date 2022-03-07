import numpy as np
import pandas as pd
import os
import pickle
from sklearn.decomposition import TruncatedSVD


def joiner(file_name):
    paths = os.path.dirname(os.path.abspath(__file__))
    paths = os.path.join(paths, file_name)
    return paths


data = pd.read_csv(joiner("ratings.csv"))

recommender = None

amazon_ratings = data.dropna()
amazon_ratings.head()
amazon_ratings.shape

amazon_ratings1 = amazon_ratings.head(10000)

ratings_utility_matrix = amazon_ratings1.pivot_table(
    values="Rating", index="UserId", columns="ProductId", fill_value=0
)
ratings_utility_matrix.head()
ratings_utility_matrix.shape
X = ratings_utility_matrix.T
X.head()
X.shape
X1 = X
SVD = TruncatedSVD(n_components=10)
decomposed_matrix = SVD.fit_transform(X)
decomposed_matrix.shape
correlation_matrix = np.corrcoef(decomposed_matrix)
correlation_matrix.shape
X.index[99]
i = 672
product_names = list(X.index)
product_ID = product_names.index(i)
print(product_ID)
correlation_product_ID = correlation_matrix[product_ID]
correlation_product_ID.shape
Recommend = list(X.index[correlation_product_ID > 0.80])

# Removes the item already bought by the customer
Recommend.remove(i)


with open(joiner("historyRecommender.pkl"), "wb") as rfile:
    recommender = pickle.dump(Recommend, rfile)

with open(joiner("historyRecommender.pkl"), "rb") as rfile:
    mp = pickle.load(rfile)
# print(mp[0:9])


def historyRecommend():

    data = mp[0:9]

    return data