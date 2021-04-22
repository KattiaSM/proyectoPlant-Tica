import React from "react";
import { Link } from "react-router-dom";
import LinkNav from "./LinkNav";
import Search from "./Search";

//Barra de navegacion de la
const navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-info">
			{/* Logo? */}
			<Link to="/">
				<a className="navbar-brand" href="#">
					Plant-Tica
				</a>
			</Link>

			{/* Secciones */}
			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav mr-auto">
					<LinkNav name="Favoritos(5)" to="/favorites" />
					<LinkNav name="Garden" to="/garden" />
					<LinkNav name="Registrarse" to="/register" />
					<LinkNav name="Ingresar" to="/login" />
				</ul>
			</div>

			<Search />
		</nav>
	);
};

export default navbar;
