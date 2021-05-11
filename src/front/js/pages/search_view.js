import React, { Component, useState, useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { MDBCol, MDBInput } from "mdbreact";
import { Spinner } from "reactstrap";
export const SearchView = () => {
	const { store, actions } = useContext(Context);
	const [apiResult, setApiResult] = useState(store.search_result_api);
	const [apiResult3rd, setApiResult3rd] = useState(store.search_result_3rd_api);

	function create3rdApiCards() {
		if (apiResult === undefined || apiResult === "") {
			return <Spinner type="grow" color="success" />;
		} else {
			let result = apiResult.map((item, index) => (
				<div className="card col-xl-4 col-lg-6 col-md-6 col-sm-12" key={index} style={{ width: "100%" }}>
					<img
						className="img-fluid"
						src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"
						alt="Card image cap"
					/>
					<div className="card-body">
						<h5 className="card-title text-truncate">{item}</h5>
						<p className="card-text">Nombre cientifico</p>
						<div className="d-flex justify-content-end align-items-center">
							<button className="btn btn-sm btn-success mr-2">
								Sembrar <i className="fas fa-seedling ml-1"></i>
							</button>
							<button className="btn btn-sm btn-danger text-white">
								<i className="far fa-heart"></i>
							</button>
						</div>
					</div>
				</div>
			));
			return result;
		}
	}

	function createApiCards() {
		if (apiResult3rd === undefined || apiResult3rd === "") {
			return <h1>No se muestran resultados</h1>;
		} else {
			let result = apiResult.map((item, index) => (
				<div className="card col-xl-4 col-lg-6 col-md-6 col-sm-12" key={index} style={{ width: "100%" }}>
					<img
						className="img-fluid"
						src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"
						alt="Card image cap"
					/>
					<div className="card-body">
						<h5 className="card-title text-truncate">{item}</h5>
						<p className="card-text">Nombre cientifico</p>
						<div className="d-flex justify-content-end align-items-center">
							<button className="btn btn-sm btn-success mr-2">
								Sembrar <i className="fas fa-seedling ml-1"></i>
							</button>
							<button className="btn btn-sm btn-danger text-white">
								<i className="far fa-heart"></i>
							</button>
						</div>
					</div>
				</div>
			));
			console.log(apiResult3rd);
			return result;
		}
	}

	function handleSearchChange(event) {
		actions.changeSearchValue(event.target.value);
	}
	async function handleSearchClic() {
		// await actions.doSearch().then(data => {
		// 	console.log(data);
		// });
		actions.doSearch();
	}
	useEffect(() => {
		setApiResult3rd(store.search_result_3rd_api);
		setApiResult(store.search_result_api);
		console.log(apiResult3rd);
	});

	let api_cards = createApiCards();
	let api_cards_3rd = create3rdApiCards();
	return (
		<div className=" m-5">
			<div className="mt-5">
				<div className="row">
					<form className="form-inline my-2 my-lg-0">
						<input
							className="form-control mr-sm-2"
							type="search"
							placeholder="Buscar"
							aria-label="Search"
							onChange={handleSearchChange}
						/>
					</form>
					<button
						className="btn btn-outline-light my-2 my-sm-0 bg-info border-info rounded rounded-pill"
						onClick={handleSearchClic}>
						<i className="fas fa-search" />
					</button>
				</div>
			</div>
			<div>
				<div className="row"> {api_cards} </div>
			</div>
			<div>
				<div hidden="true"> {api_cards_3rd} </div>
			</div>
		</div>
	);
};
