import React, { useContext } from "react";
import { Link } from "react-router-dom";
import LinkNav from "./LinkNav";
import Search from "./Search";
import { Context } from "../../store/appContext";

//Barra de navegacion de la
const Navbar = () => {
	const getFavorites = () => {
		const { store } = useContext(Context);

		return "Favoritos(" + store.favs.length + ")";
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
					<LinkNav name={getFavorites()} to="/favorites" />
					<LinkNav name="Garden" to="/garden" />
					<LinkNav name="Registrarse" to="/register" />
					<LinkNav name="Ingresar" to="/login" />
				</ul>
			</div>

			<Search />

			<button type="button" className="btn btn-outline-light ml-2">
				Cerrar Sesión
			</button>
		</nav>
	);
};

export default Navbar;
