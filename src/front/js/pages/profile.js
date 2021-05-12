import React, { Component, useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link, Redirect } from "react-router-dom";
import UserProfile from "../component/profile";

export function Profile() {
	const { store, actions } = useContext(Context);
	const [internal_info, setInternalInfo] = useState(store.user_data);
	useEffect(() => {
		actions.userDataFetch();
	}, []);
	useEffect(() => {
		setInternalInfo(store.user_data);
	});

	let internal_name = "Cargando tus datos";
	let internal_image = "https://img.icons8.com/bubbles/100/000000/user.png";
	let internal_profesion = "Jardinero";
	let internal_hobbies = "Hidroponía - Jardines Verticales";
	let internal_description = "Mantenimiento de zonas verdes y tecnicas de cuidado de plantas";
	let internal_location = "La Union, Cartago";
	let internal_phone = "8888-8888";

	if (internal_info != "" && internal_info != undefined && internal_info[0] != undefined) {
		if (internal_info[0].name != "" && internal_info[0].name != undefined) {
			internal_name = internal_info[0].name + " " + internal_info[0].first_surname;
		}
		if (internal_info[0].user_image != "" && internal_info[0].user_image != null) {
			internal_image = internal_info[0].user_image;
		}
		if (
			internal_info[0].user_image === "" ||
			internal_info[0].user_image === null ||
			internal_info[0].user_image === undefined
		) {
			internal_image = "https://img.pikbest.com/58pic/35/39/61/62K58PICb88i68HEwVnm5_PIC2018.gif!w340";
		}
	}

	return (
		<div>
			<UserProfile
				image={internal_image}
				name={internal_name}
				profesion={internal_profesion}
				hobbies={internal_hobbies}
				description={internal_description}
				location={internal_location}
				phone={internal_phone}
			/>
			{store.userLogged ? console.log("auth") : <Redirect to="/login" />}
		</div>
	);
}
