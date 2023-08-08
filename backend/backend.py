import requests
import os 
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

apikey = os.getenv('APIKEY')

def get_coord():    
    city = request.args.get('city', default='Abidjan', type=str)
    response = requests.get(f'http://api.openweathermap.org/geo/1.0/direct?q={city}&limit=1&appid={apikey}')
    data = response.json()
    return data[0]["lat"],data[0]["lon"]  
    

@app.route('/weather', methods=['GET'])
def get_weather():
    la=get_coord()[0]
    lo=get_coord()[1]
        
    response = requests.get(f'https://api.openweathermap.org/data/3.0/onecall?lat={la}&lon={lo}&exclude=daily,hourly,minutely&units=metric&appid={apikey}')
    data = response.json()    
    temperature = data['current']['temp']
    return jsonify(temperature=temperature)
    

if __name__ == '__main__':
    app.run(debug=True)
