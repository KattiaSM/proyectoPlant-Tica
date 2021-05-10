import React, { Component, useState, useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { MDBCol, MDBInput } from "mdbreact";

export const SearchView = () => {
	const { store, actions } = useContext(Context);
	function handleSearchChange(event) {
		actions.changeSearchValue(event.target.value);
		console.log(store.search_option);
		//changeSearchValue: search_item
	}
	function handleSearchClic() {
		//do search
		actions.doSearch();
	}
	return (
		// <div className="mx-auto pt-5">
		<div className="mx-auto m-5">
			<div className="mt-5">
				<div>
					<form className="form-inline my-2 my-lg-0">
						<input
							className="form-control mr-sm-2"
							type="search"
							placeholder="Buscar"
							aria-label="Search"
							onChange={handleSearchChange}
						/>
						<button
							className="btn btn-outline-light my-2 my-sm-0 bg-info border-info rounded rounded-pill"
							onClick={handleSearchClic}>
							<i className="fas fa-search" />
						</button>
					</form>
				</div>
				<div>
					<div> Aquí va el del api interno </div>
				</div>
				<div>
					<div> Aquí va el del api externo</div>
				</div>
			</div>
		</div>
	);
};
