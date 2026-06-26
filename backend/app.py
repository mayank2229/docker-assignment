from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return jsonify({"message": "Flask Backend is Running!"})

@app.route('/submit', methods=['POST'])
def submit():
    data = request.json
    name = data.get('name', '')
    email = data.get('email', '')
    message = data.get('message', '')

    print(f"Received: Name={name}, Email={email}, Message={message}")

    return jsonify({
        "status": "success",
        "message": f"Hello {name}! Your message has been received.",
        "data": {
            "name": name,
            "email": email,
            "message": message
        }
    })

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
