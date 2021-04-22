import React, { Component, useState, useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";

import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Registration = () => {
	const [name, setName] = useState("");
	const [first_surname, setFirst_surname] = useState("");
	const [second_surname, setSecond_surname] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confPassword, setConfPassword] = useState("");
	const [auth, setAuth] = useState(false);

	const handleSubmit = e => {
		e.preventDefault();

		const body = {
			name: name,
			first_surname: first_surname,
			second_surname: second_surname,
			email: email,
			password: password
		};

		fetch("https://3000-lime-mollusk-0goukxq3.ws-us03.gitpod.io/register", {
			method: "POST",
			body: JSON.stringify(body),
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(res => res.json())
			.then(data => {
				console.log(data);
				setAuth(true);
			})
			.catch(err => console.log(err));
	};

	return (
		// <div className="mx-auto pt-5">
		<div className="mx-auto pt-5 m-5">
			<h1>Registro</h1>
			<form onSubmit={handleSubmit} style={{ width: "500px" }}>
				<div className="mb-3">
					<label htmlFor="exampleInputEmail1" className="form-label">
						Nombre
					</label>
					<input
						onChange={e => setName(e.target.value)}
						type="text"
						className="form-control"
						id="exampleInputName"
						aria-describedby="exampleInputName"
					/>

					<label htmlFor="exampleInputEmail1" className="form-label">
						Primer Apellido
					</label>
					<input
						onChange={e => setFirst_surname(e.target.value)}
						type="text"
						className="form-control"
						id="exampleInputFirstSurname"
						aria-describedby="exampleInputFirstSurname"
					/>

					<label htmlFor="exampleInputEmail1" className="form-label">
						Segundo Apellido
					</label>
					<input
						onChange={e => setSecond_surname(e.target.value)}
						type="text"
						className="form-control"
						id="exampleInputSecondSurname"
						aria-describedby="exampleInputSecondSurname"
					/>

					<label htmlFor="exampleInputEmail1" className="form-label">
						Dirección de correo electrónico
					</label>
					<input
						onChange={e => setEmail(e.target.value)}
						type="email"
						className="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
					/>
					{/* <div id="emailHelp" className="form-text">
						Nos tomamos en serio la privacidad y seguridad de los datos personales!
					</div> */}
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputPassword1" className="form-label">
						Contraseña
					</label>
					<input
						onChange={e => setPassword(e.target.value)}
						type="password"
						className="form-control"
						id="exampleInputPassword1"
					/>
					<label htmlFor="exampleInputPassword1" className="form-label">
						Confirmar contraseña
					</label>
					<input
						onChange={e => setConfPassword(e.target.value)}
						type="password"
						className="form-control"
						id="exampleInputPassword2"
					/>
				</div>
				<button type="submit" className="btn btn-primary">
					Aplicar
				</button>
			</form>
			{auth ? <Redirect to="/login" /> : null}
		</div>
	);
};
