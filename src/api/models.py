from flask_sqlalchemy import SQLAlchemy
import enum
import os
import sys
from sqlalchemy import Column, ForeignKey, Integer, String, Boolean
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from sqlalchemy import create_engine

db = SQLAlchemy()


class Todolist(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer)
    tasks = db.Column(db.String(2000))


    def __repr__(self):
        return '<Todolist %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "tasks": self.tasks
        }

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=True)
    first_surname = db.Column(db.String(100), nullable=True)
    second_surname = db.Column(db.String(100), nullable=True)
    user_name = db.Column(db.String(50), unique=True, nullable=True)
    user_image = db.Column(db.String(2000))
    email = db.Column(db.String(250), unique=True)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=True)
    profiles = db.relationship('Profile',lazy=True)
    gardens = db.relationship('Garden',lazy=True)
    # todolists = db.relationship('Todolist',lazy=True)
    favorites = db.relationship('Favorites',lazy=True)




    def __repr__(self):
        return '<User %r>' % self.user_name

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "first_surname": self.first_surname,
            "second_surname": self.second_surname,
            "user_name": self.user_name,
            "user_image": self.user_image,
            "email": self.email,
            "is_active": self.is_active
        }


class Plant(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    commun_name = db.Column(db.String(100), unique=True, nullable=False)
    api_cientific_name = db.Column(db.String(100), nullable=False)
    local_cientific_name = db.Column(db.String(100), unique=True, nullable=False)
    plant_image = db.Column(db.String(2000))
    category = db.Column(db.String(100), unique=False, nullable=False)
    general = db.Column(db.String(500), unique=False, nullable=False)
    utilization = db.Column(db.String(150), unique=False, nullable=False)
    seeding = db.Column(db.String(500), unique=False, nullable=False)
    caring = db.Column(db.String(500), unique=False, nullable=False)
    light = db.Column(db.String(50), unique=False, nullable=False)
    deep = db.Column(db.String(50), unique=False, nullable=False)
    distancebetween = db.Column(db.String(50), unique=False, nullable=False)
    germination = db.Column(db.String(50), unique=False, nullable=False)
    height = db.Column(db.String(50), unique=False)
    harving = db.Column(db.String(50), unique=False, nullable=False)
    num_water_freq = db.Column(db.Integer)
    water_freq = db.Column(db.String(50), unique=False)
    last_water = db.Column(db.Date)
    num_fertilizer_freq	= db.Column(db.Integer)
    fertilizer_freq	= db.Column(db.String(50), unique=False)
    last_fertilizer	= db.Column(db.Date)
    num_prunning_freq= db.Column(db.Integer)
    prunning_freq= db.Column(db.String(50), unique=False)
    last_prunning= db.Column(db.Date)
    num_pesticide_freq = db.Column(db.Integer)
    pesticide_freq = db.Column(db.String(50), unique=False)
    last_pesticide = db.Column(db.Date)
    favorites = db.relationship('Favorites',lazy=True)



    def __repr__(self):
        return '<Plant %r>' % self.commun_name

    def serialize(self):
        return {
            "id": self.id,
            "commun_name": self.commun_name,
            "api_cientific_name": self.api_cientific_name,
            "local_cientific_name": self.local_cientific_name,
            "plant_image": self.plant_image,
            "general": self.general,
            "category": self.category,
            "utilization": self.utilization,
            "seeding": self.seeding,
            "caring": self.caring,
            "light": self.light,
            "deep": self.deep,
            "distancebetween": self.distancebetween,
            "germination": self.germination,
            "height": self.height,
            "harving": self.harving,
            "water_freq": self.water_freq,
            "num_water_freq": self.num_water_freq,
            "last_water": self.last_water,
            "fertilizer_freq": self.fertilizer_freq,
            "num_fertilizer_freq": self.num_fertilizer_freq,
            "last_fertilizer": self.last_fertilizer,
            "prunning_freq": self.prunning_freq,
            "num_prunning_freq": self.num_prunning_freq,
            "last_prunning": self.last_prunning,
            "pesticide_freq": self.pesticide_freq,
            "num_pesticide_freq": self.num_pesticide_freq,
            "last_pesticide": self.last_pesticide
        }


class Profile(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_name = db.Column(db.String(50), ForeignKey('user.user_name'))
    user_image = db.Column(db.String(2000))
    first_name = db.Column(db.String(100), nullable=False)
    last_name = db.Column(db.String(100), nullable=False)
    personal_description = db.Column(db.String(100), nullable=False)
    occupation = db.Column(db.String(100), nullable=False)
    location = db.Column(db.String(50), nullable=False)
    hobbies = db.Column(db.String(250))


    def __repr__(self):
        return '<Profile %r>' % self.user_name

    def serialize(self):
        return {
            "id": self.id,
            "user_name": self.user_name,
            "user_image": self.user_image,
            "first_name": self.first_name,
            "last_name": self.last_name,
            "personal_description": self.personal_description,
            "occupation": self.occupation,
            "location": self.location,
            "hobbies": self.hobbies
        }

class Garden(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_name =  db.Column(db.String(50), ForeignKey('user.user_name'))
    status = db.Column(db.String(100))
    photo1 = db.Column(db.String(100))


    def __repr__(self):
        return '<Garden %r>' % self.user_name

    def serialize(self):
        return {
            "id": self.id,
            "user_name": self.user_name,
            "status": self.status,
            "photo1": self.photo1
        }




class Favorites(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, ForeignKey('user.id'))
    plant_id = db.Column(db.Integer, ForeignKey('plant.id'))


    def __repr__(self):
        return '<Favorites %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "plant_id": self.plant_id
        }