from flask import Flask, request
import json

app = Flask(__name__)

@app.route('/votes', methods=["POST"])
def votes():
    data = request.json
    return "Hello"


if __name__ == "__main__":
    app.run("0.0.0.0", port=5005, debug=True)