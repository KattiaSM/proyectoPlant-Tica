"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, Blueprint
from flask_migrate import Migrate
from flask_swagger import swagger
from flask_cors import CORS
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
from api.admin import setup_admin
from api.models import db, User, Plant, Profile, Garden, Todolist, Favorites

api = Blueprint('api', __name__)


@api.route('/user', methods=['GET'])
def handle_hello():

    response_body = {
        "msg": "Hello, this is your GET /user response "
    }

    return jsonify(response_body), 200

@api.route('/register', methods=['POST'])
def register_user():
    email = request.json.get("email", None)
    password = request.json.get("password", None)

    if email is None:
        return jsonify({"msg": "No email was provided"}), 400
    if password is None:
        return jsonify({"msg": "No password was provided"}), 400
    
    user = User.query.filter_by(email=email, password=password).first()
    if user:
        # the user was not found on the database
        return jsonify({"msg": "User already exists"}), 401
    else:
        new_user = User()
        new_user.email = email
        new_user.password = password

        db.session.add(new_user)
        db.session.commit()
        return jsonify({"msg": "User created successfully"}), 200
    
@api.route('/login', methods=['POST'])
def create_token():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    
    if email is None:
        return jsonify({"msg": "No email was provided"}), 400
    if password is None:
        return jsonify({"msg": "No password was provided"}), 400

    user = User.query.filter_by(email=email, password=password).first()
    if user is None:
        # the user was not found on the database
        return jsonify({"msg": "Invalid username or password"}), 401
    else:
        print(user)
        # create a new token with the user id inside
        access_token = create_access_token(identity=user.id)
        return jsonify({ "token": access_token, "user_id": user.id }), 200

@api.route("/protected", methods=["GET"])
@jwt_required()
def protected():
    # Access the identity of the current user with get_jwt_identity
    current_user_id = get_jwt_identity()
    user = User.query.get(current_user_id)
    
    print(current_user_id, user)
    return jsonify({"id": user.id, "email": user.email }), 200
