import React, { Component, useState, useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { MDBCol, MDBInput } from "mdbreact";

export const SearchView = () => {
	//
	return (
		// <div className="mx-auto pt-5">
		<div className="mx-auto m-5">
			<div className="mt-5">
				<form className="form-inline my-2 my-lg-0">
					<input className="form-control mr-sm-2" type="search" placeholder="Buscar" aria-label="Search" />
					<button className="btn btn-outline-light my-2 my-sm-0" type="submit">
						<i className="fas fa-search" />
					</button>
				</form>
			</div>
		</div>
	);
};
