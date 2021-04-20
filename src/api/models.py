from flask_sqlalchemy import SQLAlchemy
import enum

db = SQLAlchemy()


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    first_surname = db.Column(db.String(100), nullable=False)
    second_surname = db.Column(db.String(100))
    user_name = db.Column(db.String(50), unique=True)
    user_image = db.Column(db.String(2000))
    email = db.Column(db.String(250), unique=True)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)


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
    commun_name = db.Column(db.String(100), unique=true, nullable=False)
    api_cientific_name = db.Column(db.String(100), nullable=False)
    local_cientific_name = db.Column(db.String(100), unique=true, nullable=False)
    category = db.Column(db.String(100), unique=False, nullable=False)
    general = db.Column(db.String(100), unique=False, nullable=False)
    utilization = db.Column(db.String(100), unique=False, nullable=False)
    seeding = db.Column(db.String(100), unique=False, nullable=False)
    caring = db.Column(db.String(100), unique=False, nullable=False)
    light = db.Column(db.String(50), unique=False, nullable=False)
    deep = db.Column(db.String(50), unique=False, nullable=False)
    distancebetween = db.Column(db.String(50), unique=False, nullable=False)
    germination = db.Column(db.String(50), unique=False, nullable=False)
    height = db.Column(db.String(50), unique=False)
    harving = db.Column(db.String(50), unique=False, nullable=False)


    def __repr__(self):
        return '<Plant %r>' % self.commun_name

    def serialize(self):
        return {
            "id": self.id,
            "commun_name": self.commun_name,
            "api_cientific_name": self.api_cientific_name,
            "local_cientific_name": self.local_cientific_name,
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
        }


class Profile(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_name = db.Column(db.String(50), ForeignKey('User.user_name'))
    personal_description = db.Column(db.String(100), nullable=False)
    profession = db.Column(db.String(100), nullable=False)
    location = db.Column(db.String(50), nullable=False)
    user_image = db.Column(db.String(2000))
    hobbies = db.Column(db.String(250))


    def __repr__(self):
        return '<Profile %r>' % self.user_name

    def serialize(self):
        return {
            "id": self.id,
            "user_name": self.user_name,
            "personal_description": self.personal_description,
            "profession": self.profession,
            "location": self.location,
            "user_image": self.user_image,
            "hobbies": self.hobbies
        }

class Garden(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_name = db.Column(db.String(50), ForeignKey('User.user_name'))
    status = db.Column(db.String(100), nullable=False)
    photo1 = db.Column(db.String(100))


    def __repr__(self):
        return '<Garden %r>' % self.user_name

    def serialize(self):
        return {
            "id": self.id,
            "user_name": self.user_name,
            "status": self.status,
            "location": self.location
        }


# class People(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     name = db.Column(db.String(250), nullable=False)
#     birth_year = db.Column(db.Date)
#     height = db.Column(db.Integer)
#     mass = db.Column(db.Integer)
#     people_image = db.Column(db.String(2000))
#     gender_cat_id = db.Column(db.Integer, db.ForeignKey('gender_cat.id'))
#     hair_color_cat_id = db.Column(db.Integer, db.ForeignKey('hair_color_cat.id'))
#     skin_color_cat_id = db.Column(db.Integer, db.ForeignKey('skin_color_cat.id'))
#     eye_color_cat_id = db.Column(db.Integer, db.ForeignKey('eye_color_cat.id'))

#     def __repr__(self):
#         return '<People %r>' % self.name

#     def serialize(self):
#         return {
#             "id": self.id,
#             "name": self.name,
#             "birth_year": self.birth_year,
#             "height": self.height,
#             "mass": self.mass,
#             "people_image": self.people_image,
#             "gender_cat_id": self.gender_cat_id,
#             "hair_color_cat_id": self.hair_color_cat_id,
#             "skin_color_cat_id": self.skin_color_cat_id,
#             "eye_color_cat_id": self.eye_color_cat_id
#         }

# # Modelo para la tabla [Planet]
# class Planet(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     name = db.Column(db.String(250), nullable=False)
#     rotation_period = db.Column(db.Integer)
#     orbital_period = db.Column(db.Integer) 
#     diameter = db.Column(db.Integer)
#     gravity = db.Column(db.String(50))
#     surface_water = db.Column(db.Integer)
#     population = db.Column(db.Integer)
#     planet_image = db.Column(db.String(2000))
#     climate_cat_id = db.Column(db.Integer, db.ForeignKey('climate_cat.id'))
#     terrain_cat_id = db.Column(db.Integer, db.ForeignKey('terrain_cat.id'))

#     def __repr__(self):
#         return '<Planet %r>' % self.name

#     def serialize(self):
#         return {
#             "id": self.id,
#             "name": self.name,
#             "rotation_period": self.rotation_period,
#             "orbital_period": self.orbital_period,
#             "diameter": self.diameter,
#             "gravity": self.gravity,
#             "surface_water": self.surface_water,
#             "population": self.population,
#             "planet_image": self.planet_image,
#             "climate_cat_id": self.climate_cat_id,
#             "terrain_cat_id": self.terrain_cat_id
#         }

# # Modelo para la tabla [Vehicle]
# class Vehicle(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     name = db.Column(db.String(250), nullable=False)
#     model = db.Column(db.String(100))
#     manufacturer = db.Column(db.String(100)) 
#     cost_in_credits = db.Column(db.Integer)
#     length = db.Column(db.Float)
#     max_atmosphering_speed = db.Column(db.Integer)
#     crew = db.Column(db.Integer)
#     passengers = db.Column(db.Integer)
#     cargo_capacity = db.Column(db.Integer)
#     consumables = db.Column(db.String(100))
#     vehicle_image = db.Column(db.String(2000))
#     vehicle_class_cat_id = db.Column(db.Integer, db.ForeignKey('vehicle_class_cat.id'))

#     def __repr__(self):
#         return '<Vehicle %r>' % self.name

#     def serialize(self):
#         return {
#             "id": self.id,
#             "name": self.name,
#             "model": self.model,
#             "manufacturer": self.manufacturer,
#             "cost_in_credits": self.cost_in_credits,
#             "length": self.length,
#             "max_atmosphering_speed": self.max_atmosphering_speed,
#             "crew": self.crew,
#             "passengers": self.passengers,
#             "cargo_capacity": self.cargo_capacity,
#             "consumables": self.consumables,
#             "vehicle_image": self.vehicle_image,
#             "vehicle_class_cat_id": self.vehicle_class_cat_id
#         }

# # Modelo para la tabla [Favorite]
# class Favorite(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     name = db.Column(db.String(250), nullable=False)
#     user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
#     favorite_id = db.Column(db.Integer, nullable=False)
#     favorite_type = db.Column(db.Integer, nullable=False)
#     # favorite_type = db.Column(db.Enum(EntityTypeEnum), nullable=False)

#     def __repr__(self):
#         return '<Favorite %r>' % self.user_id

#     def serialize(self):
#         return {
#             "id": self.id,
#             "name": self.name,
#             "user_id": self.user_id,
#             "favorite_id": self.favorite_id,
#             "favorite_type": self.favorite_type
#         }