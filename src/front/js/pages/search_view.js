import React, { Component, useState, useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link, useHistory } from "react-router-dom";
import { MDBCol, MDBInput } from "mdbreact";
import { Spinner } from "reactstrap";
import "../../styles/search_imgs.scss";
export const SearchView = () => {
	const { store, actions } = useContext(Context);
	const [apiResult, setApiResult] = useState(store.search_result_api);
	const [apiResult3rd, setApiResult3rd] = useState(store.search_result_3rd_api);
	const History = useHistory();
	function moveData(name, url) {
		actions.changeInitialName(name);
		actions.changeName(name);
		actions.changeInitialURL(url);
		actions.restoreDataToModify(url);
		History.push("/create");
	}
	function sendtoFav(object, url) {
		let temporal = object;
		let temporal_url = url;
		let send_object = {
			scientific_name: temporal.record.name,
			data1: temporal.record.type,
			data2: temporal.record.iconic_taxon_name,
			data3: temporal.record.preferred_common_name,
			data4: temporal.record.matched_term,
			url: temporal_url
		};
		actions.addFav(send_object);
	}
	function createApiCards() {
		if (apiResult === undefined || apiResult === "") {
			return <h1 className="m-3">No se muestran resultados {"   "}</h1>;
		} else {
			let result = apiResult.map((item, index) => (
				<div className="card col-xl-2 col-lg-4 col-md-6 col-sm-12 m-1" key={index} style={{ width: "100%" }}>
					<img
						id="height"
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

	function create3rdApiCards() {
		if (apiResult3rd === undefined || apiResult3rd === "") {
			return (
				<h1>
					<Spinner size="xl" type="grow" color="success" />
				</h1>
			);
		} else {
			let temporal = [];
			let types = [];
			apiResult3rd.map((item, index) => {
				if (item.record.default_photo === null) {
					temporal.push(
						"https://www.avesco-cat.fi/fileadmin/avescoused/1c896e831b6901db113e66976bd87d4b.jpg"
					);
				} else if (item.record.default_photo.medium_url != undefined) {
					temporal.push(item.record.default_photo.medium_url);
				} else if (item.record.default_photo.square_url != undefined) {
					temporal.push(item.record.default_photo.square_url);
				} else if (item.record.default_photo.url != undefined) {
					temporal.push(item.record.default_photo.url);
				} else if (item.record.default_photo === undefined) {
					temporal.push(
						"https://www.avesco-cat.fi/fileadmin/avescoused/1c896e831b6901db113e66976bd87d4b.jpg"
					);
				} else {
					temporal.push(
						"https://www.avesco-cat.fi/fileadmin/avescoused/1c896e831b6901db113e66976bd87d4b.jpg"
					);
				}
			});

			let result = apiResult3rd.map((item, index) => (
				<div className="card col-xl-2 col-lg-4 col-md-6 col-sm-12 m-1" key={index}>
					<img className="img-fluid" id="height" src={temporal[index]} alt="Card image cap" />
					<div className="card-body">
						<h5 className="card-title text-truncate">{item.record.name}</h5>
						<p className="card-text">{item.record.matched_term}</p>
						<div className="d-flex justify-content-end align-items-center">
							<button
								className="btn btn-sm btn-success mr-2"
								onClick={() => moveData(item.record.name, temporal[index])}>
								Sembrar <i className="fas fa-seedling ml-1"></i>
							</button>
							<button
								className="btn btn-sm btn-danger text-white"
								onClick={() => sendtoFav(item, temporal[index])}>
								<i className="far fa-heart"></i>
							</button>
						</div>
					</div>
				</div>
			));
			return result;
		}
	}

	function handleSearchChange(event) {
		actions.changeSearchValue(event.target.value);
	}
	async function handleSearchClic() {
		actions.doSearch();
	}
	useEffect(() => {
		setApiResult3rd(store.search_result_3rd_api);
		setApiResult(store.search_result_api);
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
							type="text"
							placeholder="Buscar"
							aria-label="text"
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
				<div className="row d-flex justify-content-center align-items-center"> {api_cards_3rd} </div>
			</div>
			<div>
				<div className="row d-flex justify-content-center"> </div>
			</div>
		</div>
	);
};
