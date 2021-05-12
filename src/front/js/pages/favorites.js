import React, { Component, useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link, Redirect } from "react-router-dom";
import { Card, CardBody, Button, CardTitle, CardText, CardImg } from "reactstrap";

export function Favorites() {
	const { store, actions } = useContext(Context); //El plantName también se almacena en el store
	const [data, setData] = useState([store.favs]); //Almacena las plantas

	useEffect(() => {
		setData(store.favs);
	});

	//array.map(function(currentValue, index, arr), thisValue)

	let counter = 0; //El contador lo utilizo para filtrar por tercios y así elegir cuál array hacer concat/push
	let cards_col1 = [];
	let cards_col2 = [];
	let cards_col3 = [];

	//Cuando se obtienen los datos del api, hay que filtrar los elementos hacia
	//tres columnas, el map va a separar cada uno y el navegador leera cada array

	data.map(function(element, index) {
		if (counter == 0) {
			//append al array 1
			cards_col1.push(data[index]);
		} else if (counter == 1) {
			//append al array 2
			cards_col2.push(data[index]);
		} else if (counter == 2) {
			//append al array 3
			cards_col3.push(data[index]);
			counter = -1;
		}
		counter++;
	});

	function moveData(name, url) {
		actions.changeInitialName(name);
		actions.changeName(name);
		actions.changeInitialURL(url);
		actions.restoreDataToModify(url);
	}

	//La siguiente función se encarga de eliminar un favorito, recibe un nombre y lo compara, si lo encuentra, elimina el favorito

	function deleteFav(name) {
		let temporal = data;
		temporal.map((item, index) => {
			if (name === item.scientific_name) {
				actions.deleteFav(index);
			}
		});
		actions.favsFetch();
	}

	//La siguiente función lo que hace es darle formato html a cada elemento de los tres array
	//Esta función es llamada por otra variable abajo, que almacena el return de esta función
	function format(array) {
		let result = array.map((item, index) => (
			<Card key={index}>
				<CardImg top width="50%" src={item.url} alt="Card image cap" />
				<div className="row d-flex justify-content-end">
					<div className="col-6 d-flex justify-content-start ">
						<Link to="/create" onClick={() => moveData(item.scientific_name, item.url)}>
							<Button className="m-1 mb-0 me-0" color="success" size="sm">
								Sembrar <i className="fas fa-seedling" />
							</Button>
						</Link>
					</div>
					<div className="col-6">
						<Button className="col-2" onClick={() => deleteFav(item.scientific_name)} close />
					</div>
				</div>
				<CardBody>
					<CardTitle tag="h5">{item.scientific_name}</CardTitle>
					<CardText>{item.data1}</CardText>
					<CardText>{item.data2}</CardText>
					<CardText>{item.data3}</CardText>
					<CardText>
						<small className="text-muted">{item.data4}</small>
					</CardText>
				</CardBody>
			</Card>
		));

		return result;
	}

	let col_1 = format(cards_col1);
	let col_2 = format(cards_col2);
	let col_3 = format(cards_col3);

	return (
		<div className="m-5">
			<div className="row mt-5">
				<div className="col-lg-4 col-md-6 col-sm-12">
					<div className="m-1">{col_1}</div>
				</div>
				<div className="col-lg-4 col-md-6 col-sm-12">
					<div className="m-1">{col_2}</div>
				</div>
				<div className="col-lg-4 col-md-6 col-sm-12">
					<div className="m-1">{col_3}</div>
				</div>
			</div>
			{store.userLogged ? console.log("auth") : <Redirect to="/login" />}
		</div>
	);
}
