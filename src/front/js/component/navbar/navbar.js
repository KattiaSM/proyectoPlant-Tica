import React, { Component, useState, useContext, useEffect, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import LinkNav from "./LinkNav";
import Search from "./Search";
import { Context } from ".././../store/appContext";
import PropTypes from "prop-types";

//Barra de navegacion de la
const Navbar = () => {
	const { store, actions } = useContext(Context);

	const getFavorites = () => {
		return "Favoritos(" + store.favs.length + ")";
	};

	const LoginAndRegister = () => {
		console.log(store.token);
		if (store.token) {
			return (
				<div className="d-flex justify-content-center align-items-center">
					<LinkNav name={getFavorites()} to="/favorites" />
					<LinkNav name="Garden" to="/garden" />
					<div onClick={() => actions.logout()}>
						<LinkNav name="Cerrar Sesión" to="/" />
					</div>
				</div>
			);
		} else {
			return (
				<div className="d-flex justify-content-center align-items-center">
					<LinkNav name="Ingresar" to="/login"></LinkNav>
					<LinkNav name="Registrarse" to="/register"></LinkNav>
				</div>
			);
		}
	};

	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-info fixed-top">
			{/* Logo? */}
			<Link to="/">
				<a className="navbar-brand" href="#">
					Plant-Tica
				</a>
			</Link>

			{/* Secciones */}
			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav mr-auto">
					<LinkNav name="Plantas" to="/plants" />
					{/* Botones condicionados */}
					<LoginAndRegister />
				</ul>
			</div>

			<Search />
		</nav>
	);
};

export default Navbar;
