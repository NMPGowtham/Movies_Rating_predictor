# Importing the necessary libraries
from flask import Flask, request, jsonify
import joblib
from utlil import DataPreprocessor, File_Formater
from flask_cors import CORS

# Load the model
model = joblib.load('models/movies_predictor.joblib')

# Create the app
app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
    return '''
        <form action="/predict_html" method="POST">
            <label for="vote_average">Vote Average:</label>
            <input type="number" id="vote_average" name="vote_average" step="0.1" required><br><br>

            <label for="vote_count">Vote Count:</label>
            <input type="number" id="vote_count" name="vote_count" required><br><br>

            <label for="runtime">Runtime (minutes):</label>
            <input type="number" id="runtime" name="runtime" required><br><br>

            <label for="budget">Revenue ($):</label>
            <input type="number" id="budget" name="budget" required><br><br>

            <label for="popularity">Popularity:</label>
            <input type="number" id="popularity" name="popularity" step="0.01" required><br><br>

            <label for="genres">Genres:</label>
            <input type="text" id="genres" name="genres" required><br><br>

            <label for="spoken_languages">Spoken Languages:</label>
            <input type="text" id="spoken_languages" name="spoken_languages" required><br><br>

            <input type="submit" value="Submit">
        </form>
    '''

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    data = DataPreprocessor(data)
    data = data.Transform()
    prediction = model.predict(data)
    dictonary = File_Formater(prediction)
    return jsonify(dictonary.To_Dict())

@app.route('/predict_html',methods=['POST'])
def predict_html():
    data = request.get_json()
    data = DataPreprocessor(data)
    data = data.Transform()
    predict = model.predict(data)
    html = File_Formater(predict)
    return html.To_Html()


if __name__ == '__main__':
    app.run(port=5000, debug=True)


# Sample Post call body
# {
#   "vote_average":8.364,
#   "vote_count":34495,
#   "runtime":125,
#   "adult": 0,
#   "budget": 10000000,
#   "popularity": 83.952,
#   "genres": "Action, Science Fiction, Adventure",
#   "spoken_languages": "English",
#   "numVotes":2615046
# }
