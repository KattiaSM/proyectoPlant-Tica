import React, { useContext } from "react";
import { Link } from "react-router-dom";
import LinkNav from "./LinkNav";
import Search from "./Search";
import { Context } from "../../store/appContext";

const Logout = () => {
	return <LinkNav name="Cerrar Sesión" to="/" onClick={() => actions.logout()} />;
};

const LoginAndRegister = () => {
	return (
		<div className="d-flex justify-content-center align-items-center">
			<LinkNav name="Ingresar" to="/login"></LinkNav>
			<LinkNav name="Registrarse" to="/register"></LinkNav>
		</div>
	);
};

const LinksAccount = () => {
	const { store } = useContext(Context);
	return store.token ? <Logout /> : <LoginAndRegister />;
};

//Barra de navegacion de la
const Navbar = () => {
	const { store } = useContext(Context);

	const getFavorites = () => {
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

					{/* Botones condicionados */}
					<LinksAccount />
				</ul>
			</div>

			<Search />
		</nav>
	);
};

export default Navbar;
