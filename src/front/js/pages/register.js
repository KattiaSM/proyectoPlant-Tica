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
	const { store, actions } = useContext(Context);
	const showValidation = (tag, show) => {
		if (!show) {
			tag.classList.remove("is-valid");
			tag.classList.add("is-invalid");
		} else {
			tag.classList.remove("is-invalid");
			tag.classList.add("is-valid");
		}
	};

	const validateTextInput = e => {
		//Expresion regular para la validacion
		const nameregex = /^[a-zA-Z ]+$/; // Solo letras

		const tag = e.target;

		showValidation(tag, nameregex.test(tag.value));
	};

	const validateEmailInput = e => {
		//Expresion regular para la validacion de email
		const emailregex = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;

		const tag = e.target;

		showValidation(tag, emailregex.test(tag.value));
	};
	const validatePassword = e => {
		var passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;
		const tag = e.target;
		showValidation(tag, passRegex.test(tag.value));
	};

	const samePassword = e => {
		const tag = e.target;
		if (password != tag.value) {
			showValidation(tag, false);
		} else {
			showValidation(tag, true);
		}
	};

	const handleSubmit = e => {
		e.preventDefault();
		const body = {
			name: name,
			first_surname: first_surname,
			second_surname: second_surname,
			email: email,
			password: password
		};

		let inputs = e.target.getElementsByTagName("input");
		let formValid = false;

		Array.prototype.filter.call(inputs, function(input) {
			formValid = input.classList.contains("is-valid") ? true : false;
			if (!formValid) {
				showValidation(input, false);
			}
		});
		console.log(body);
		if (formValid) {
			let url = store.api_url + "/api/register";
			fetch(url, {
				method: "POST",
				body: JSON.stringify(body),
				headers: {
					"Content-Type": "application/json"
				}
			})
				.then(res => res.json())
				.then(data => {
					console.log(data);
					alert("Registration Successful");
					setAuth(true);
				})
				.catch(err => console.log(err));
		}
	};

	return (
		// <div className="mx-auto pt-5">
		<div>
			<div className="row mt-5">
				<div className="container my-5">
					<div className="row">
						<div className="col-sm-12 col-md-6 offset-md-3">
							<h1 className="m-0">Registrarse</h1>
							<hr className="mx-0 my-1" />
							<small>Ingresa los datos para registrate</small>
							<form id="formRegister" onSubmit={handleSubmit} className="mt-3 needs-validation">
								<div className="form-group">
									<label htmlFor="inputName">Nombre</label>
									<input
										onChange={e => setName(e.target.value)}
										onBlur={validateTextInput}
										type="text"
										className="form-control"
										id="inputName"
									/>
									<div className="invalid-feedback">Ingresa un nombre válido</div>
								</div>

								<div className="form-group">
									<label htmlFor="inputFirstSurname">Primer Apellido</label>
									<input
										onChange={e => setFirst_surname(e.target.value)}
										type="text"
										className="form-control"
										id="inputFirstSurname"
										onBlur={validateTextInput}
									/>
									<div className="invalid-feedback">Ingresa un apellido válido</div>
								</div>

								<div className="form-group">
									<label htmlFor="inputSecondSurname">Segundo Apellido</label>
									<input
										onChange={e => setSecond_surname(e.target.value)}
										type="text"
										className="form-control"
										id="inputSecondSurname"
										onBlur={validateTextInput}
									/>
									<div className="invalid-feedback">Ingresa un apellido válido</div>
								</div>

								<div className="form-group">
									<label htmlFor="inputEmail">Dirección de correo electrónico</label>
									<input
										type="text"
										onChange={e => setEmail(e.target.value)}
										className="form-control"
										id="inputEmail"
										onBlur={validateEmailInput}
									/>
									<div className="invalid-feedback">Correo electrónico invalido</div>
								</div>
								<div className="row">
									<div className="col">
										<div className="form-group">
											<label htmlFor="inputPassword1">Contraseña</label>
											<input
												type="password"
												onChange={e => setPassword(e.target.value)}
												onBlur={validatePassword}
												className="form-control"
												id="inputPassword1"
											/>
											<div className="invalid-feedback">Ingresa una contraseña valida</div>
										</div>
									</div>
									<div className="col">
										<div className="form-group">
											<label htmlFor="inputPassword2">Confirmar Contraseña</label>
											<input
												type="password"
												onChange={(e => setFirst_surname(e.target.value), samePassword)}
												className="form-control"
												id="inputPassword2"
											/>
											<div className="invalid-feedback">La contraseña deben ser iguales</div>
										</div>
									</div>

									<div className="container">
										<div className="row">
											<small id="passwordHelpBlock" className="form-text text-muted">
												<ul>
													<li>Minimo 8 caracteres</li>
													<li>Maximo 15</li>
													<li>Al menos una letra mayúscula</li>
													<li>Al menos una letra minucula</li>
													<li>Al menos un dígito</li>
													<li>No espacios en blanco</li>
													<li>Al menos 1 caracter especial</li>
												</ul>
											</small>
										</div>
									</div>
								</div>
								<button type="submit" className="btn btn-block btn-info">
									Registrarse
								</button>
							</form>
						</div>
					</div>
				</div>
				{auth ? <Redirect to="/login" /> : null}
			</div>
		</div>
	);
};
