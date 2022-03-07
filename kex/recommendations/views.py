from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from kex.recommendations.recommend import predict as recommend

# from .sentiment import predict as sentiment
import json
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

# %matplotlib inline
plt.style.use("ggplot")

import sklearn
from sklearn.decomposition import TruncatedSVD
from rest_framework.permissions import (
    AllowAny,
    IsAuthenticated,
)
from kex.recommendations.historyrecommender import historyRecommend


class NewUserRecommendation(APIView):
    permission_classes = [AllowAny]

    """
        Movie Review Sentiment Analyser
    """

    def get(self, request):
        try:
            prediction = recommend()

            data = {"response": prediction}
            return Response(data)

        except:
            data = {"response": "invalid Message"}
            return Response(data)


class HistoryRecommendation(APIView):
    permission_classes = [AllowAny]

    """
        Movie Review Sentiment Analyser
    """

    def get(self, request):
        try:
            prediction = historyRecommend()

            data = {"response": prediction}
            return Response(data)

        except:
            data = {"response": "invalid Message"}
            return Response(data)
