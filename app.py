# from flask import Flask, request, jsonify

# app = Flask(__name__)


# @app.route('/process_data', methods=['POST'])
# def process_data():
#     try:
#         data = request.get_json()
#         value = data.get('value')

#         # Here, you can perform any backend processing with the received value.
#         # For demonstration, let's just echo the value back.
#         response_data = {'message': f'Received: {value}'}

#         return jsonify(response_data)
#     except Exception as e:
#         return jsonify({'error': str(e)}), 500


# if __name__ == '__main__':
#     app.run(debug=True)

from flask import Flask, render_template, request, jsonify
from something import something  # Importing the function from another Python file

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/something', methods=['POST'])
def get_songs():
    song_title = request.json.get('song_title', '')
    songs = get_song_data(song_title)
    return jsonify(songs)


if __name__ == '__main__':
    app.run()
