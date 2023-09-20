from django.shortcuts import render
from django.db import connection
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
import os
import openai

# Create your views here.

@csrf_exempt
def chatApi(request,id=0):

    message = JSONParser().parse(request)
    message = message['request'] 

    from happytransformer import HappyTextToText, TTSettings

    happy_tt = HappyTextToText("T5", "vennify/t5-base-grammar-correction")

    args = TTSettings(num_beams=5, min_length=1)

    # Add the prefix "grammar: " before each input 
    result = happy_tt.generate_text("grammar: "+message, args=args)

    print(result.text) # This sentence has bad grammar.

    API_KEY = "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"
    openai.api_key = API_KEY

    start_sequence = "\nAI:"
    restart_sequence = "\nHuman: "

    response = openai.Completion.create(
    model = "davinci:ft-personal-2023-03-20-18-00-51",
    prompt = message+"<EOP>",
    temperature=0.9,
    max_tokens=150,
    top_p=1,
    frequency_penalty=0,
    presence_penalty=0.6,
    stop=[" Human:", " AI:"]
    )
    print(response.choices[0].text.split('<EOC>')[0])

    return JsonResponse({'response': response.choices[0].text.split('<EOC>')[0]},safe=False)
        