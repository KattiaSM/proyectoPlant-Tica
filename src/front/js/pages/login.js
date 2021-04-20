import React, { Component, useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = e => {
		e.preventDefault();

		const body = {
			email: email,
			password: password
		};

		fetch("https://3000-lime-mollusk-0goukxq3.ws-us03.gitpod.io/login", {
			method: "POST",
			body: JSON.stringify(body),
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(res => res.json())
			.then(data => {
				console.log(data);
				sessionStorage.setItem("my_token", data.token);
			})
			.catch(err => console.log(err));
	};

	return (
		// <div className="mx-auto pt-5">
		<div className="mx-auto pt-5 m-5">
			<h1>Login</h1>
			<form onSubmit={handleSubmit} style={{ width: "500px" }}>
				<div className="mb-3">
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
				</div>
				<button type="submit" className="btn btn-primary">
					Aplicar
				</button>
				{auth ? <Redirect to="/garden" /> : null}
			</form>
		</div>
	);
};
