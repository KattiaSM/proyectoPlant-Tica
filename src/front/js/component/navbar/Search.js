import React, { Component, useState, useContext, useEffect, useLayoutEffect } from "react";
import PropTypes from "prop-types";
import { Context } from ".././../store/appContext";
import { Link, Redirect, useHistory } from "react-router-dom";

// Buscador
const Search = () => {
	const { store, actions } = useContext(Context);
	const [apiResult, setApiResult] = useState(store.search_result_api);
	const [apiResult3rd, setApiResult3rd] = useState(store.search_result_3rd_api);

	const History = useHistory();
	function handleSearchChange(event) {
		actions.changeSearchValue(event.target.value);
	}
	async function handleSearchClic() {
		actions.doSearch();
		History.push("/search");
	}
	useEffect(() => {
		setApiResult3rd(store.search_result_3rd_api);
		setApiResult(store.search_result_api);
	});

	return (
		<div className="row">
			<form className="form-inline my-2 my-lg-0">
				<input
					className="form-control mr-sm-2"
					type="text"
					placeholder="Buscar"
					aria-label="text"
					onChange={handleSearchChange}
				/>
			</form>
			<button
				className="btn btn-outline-light my-2 my-sm-0 bg-secondary border-secondary rounded rounded-pill"
				onClick={handleSearchClic}>
				<i className="fas fa-search" />
			</button>
		</div>
	);
};

export default Search;
