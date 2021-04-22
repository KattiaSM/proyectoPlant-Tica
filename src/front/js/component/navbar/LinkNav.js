import React from "react";
import propTypes from "prop-types";
import { NavLink } from "react-router-dom";

const LinkNav = props => {
	return (
		<NavLink exact activeClassName="active" to={props.to}>
			<li className="nav-item">
				<a className="nav-link">{props.name}</a>
			</li>
		</NavLink>
	);
};

// validacion de propiedades del componente
LinkNav.propTypes = {
	name: propTypes.string,
	to: propTypes.string
};

export default LinkNav;
