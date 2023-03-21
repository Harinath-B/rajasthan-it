from django.shortcuts import render
# Create your views here.
import torch
import nltk
from django.db import connection
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
nltk.download('wordnet') 

from scripts.MoveData import *
from scripts.Transformer import *
from scripts.TalkTrain import *

@csrf_exempt
def tChatApi(request, id=0):

    message = JSONParser().parse(request)
    message = message['request']
    opt = Options(batchsize=16, device=torch.device("cuda"), epochs=42, 
                lr=0.01, max_len = 25, save_path = './static/transformer_custom_weights.zip')

    data_iter, infield, outfield, opt = json2datatools(path = './static/data1.json', opt=opt)
    emb_dim, n_layers, heads, dropout = 32, 2, 8, 0.1 
    chloe = Transformer(len(infield.vocab), len(outfield.vocab), emb_dim, n_layers, heads, dropout)
    chloe.load_state_dict(torch.load(opt.save_path))

    tell_dole = message
    doles_reply = talk_to_chloe(tell_dole, chloe, opt, infield, outfield)
    print('Dol-E > '+ doles_reply + '\n')

    return JsonResponse(doles_reply, safe = False)