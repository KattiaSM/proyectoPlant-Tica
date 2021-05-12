import React, { Component, useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link, Redirect } from "react-router-dom";
import UserProfile from "../component/profile";

export function Profile() {
	const { store, actions } = useContext(Context);
	actions.userDataFetch();
	return (
		<div>
			<UserProfile
				image="https://img.icons8.com/bubbles/100/000000/user.png"
				name="Alberto Rivera"
				profesion="Jardinero"
				hobbies="Hidroponía - Jardines Verticales"
				description="Mantenimiento de zonas verdes y tecnicas de cuidado de plantas"
				location="La Union, Cartago"
				phone="8888-8888"
			/>
			{store.userLogged ? console.log("auth") : <Redirect to="/login" />}
		</div>
	);
}
