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
    name = request.json.get("name", None)
    first_surname = request.json.get("first_surname", None)
    second_surname = request.json.get("second_surname", None)
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
        new_user.name = name
        new_user.email = email
        new_user.password = password
        new_user.first_surname = first_surname
        new_user.second_surname = second_surname





        db.session.add(new_user)
        db.session.commit()
        return jsonify({"msg": "User created successfully"}), 200
    
@api.route('/login', methods=['POST', 'GET'])
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
        todos= Todolist.query.filter_by(user_id=user.id).first()

        if todos is None:
            new_todolist = Todolist()
            new_todolist.tasks = [""]
            new_todolist.user_id = user.id
            db.session.add(new_todolist)
            db.session.commit()
            print(new_todolist)
        else:
            pass

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

# [PUT] - Ruta para modificar un [user]
@api.route('/users/<int:id>', methods=['PUT'])
@jwt_required()
def update(id):
    user = User.query.get(id)

    if user is None:
        raise APIException('El usuario con el id especificado, no fue encontrado.',status_code=403)

    data_request = request.get_json()

    user.name = data_request["name"]
    user.first_surname = data_request["first_surname"]
    user.second_surname = data_request["second_surname"]
    user.user_image = data_request["user_image"]
    user.password = data_request["password"]

    try: 
        db.session.commit()
        
        return jsonify(User.serialize(user)), 200
    
    except AssertionError as exception_message: 
        return jsonify(msg='Error: {}. '.format(exception_message)), 400


# [GET] - Ruta para obtener todos los [Plants]
@api.route('/plants', methods=['GET'])
# @jwt_required()
def index():
    results = Plant.query.all()

    return jsonify(list(map(lambda x: x.serialize(), results))), 200



# [POST] - Ruta para modificar un [todolist]
@api.route('/todolist/<int:id>', methods=['POST'])
# @jwt_required()
def updatetodo(id):
    todos= Todolist.query.filter_by(user_id=id).first()
    data_request = request.get_json()
    todos.tasks=data_request["tasks"]
    try: 
        db.session.commit()
        return jsonify({"user_id":id, "tasks": todos.tasks}), 200
    
    except AssertionError as exception_message: 
        return jsonify(msg='Error: {}. '.format(exception_message)), 400

