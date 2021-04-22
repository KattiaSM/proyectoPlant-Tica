import React from "react";
// Buscador
const Search = () => {
	return (
		<form className="form-inline my-2 my-lg-0">
			<input className="form-control mr-sm-2" type="search" placeholder="Buscar" aria-label="Search" />
			<button className="btn btn-outline-light my-2 my-sm-0" type="submit">
				Buscar
			</button>
		</form>
	);
};

export default Search;
