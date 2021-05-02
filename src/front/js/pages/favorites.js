import React, { Component, useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Card, CardBody, Button, CardTitle, CardText, CardImg } from "reactstrap";

export function Favorites() {
	const [data, setData] = useState([]); //Almacena las plantas

	useEffect(() => {
		setData([
			{
				scientific_name: "Quercus Rotundifolia",
				synonymous: "Roble de Hoja Perenne",
				year: "1785",
				family: "Fagaceae",
				scientific_expanded: "Quercus rotundifolia f. dolichocalyx",
				url: "https://bs.plantnet.org/image/o/1a03948baf0300da25558c2448f086d39b41ca30"
			},
			{
				scientific_name: "Urtica-diotica",
				synonymous: "Ortiga",
				year: "1753",
				family: "Urticaceae",
				scientific_expanded: "Urtica haussknechtii",
				url: "https://bs.plantnet.org/image/o/85256a1c2c098e254fefe05040626a4df49ce248"
			},
			{
				scientific_name: "Dactylis glomerata",
				synonymous: "Pastos de la huerta",
				year: "1753",
				family: "Poaceae",
				scientific_expanded: "Dactylis glomerata subsp. himalayensis",
				url: "https://bs.plantnet.org/image/o/428f40dadfa0281dc890ead17fcd07882f9efb09"
			},
			{
				scientific_name: "Festuca rubra",
				synonymous: "Festuca roja",
				year: "1753",
				family: "Fagaceae",
				scientific_expanded: "Quercus rotundifolia f. dolichocalyx",
				url: "https://bs.plantnet.org/image/o/0b932c8a275efc79f473a71bec20d6f15e9b6b90"
			},
			{
				scientific_name: "Plantago lanceolata",
				synonymous: "Plátano de hoja estrecha",
				year: "1753",
				family: "Poaceae",
				scientific_expanded: "Festuca austrodolomitica",
				url: "https://bs.plantnet.org/image/o/78a8374f009e6ed2dc71ca17d18e4271ea0a2a7b"
			},
			{
				scientific_name: "Quercus robur",
				synonymous: "Roble inglés",
				year: "1753",
				family: "Fagaceae",
				scientific_expanded: "Quercus robur subsp. broteroan",
				url: "https://bs.plantnet.org/image/o/2292b670683abdaac354389514105df0018d9ef8"
			}
		]);
	}, []);

	//array.map(function(currentValue, index, arr), thisValue)

	let counter = 0; //El contador lo utilizo para filtrar por tercios y así elegir cuál array hacer concat/push
	let cards_col1 = [];
	let cards_col2 = [];
	let cards_col3 = [];

	//Cuando se obtienen los datos del api, hay que filtrar los elementos hacia
	//tres columnas, el map va a separar cada uno y el navegador leera cada array

	data.map(function(element, index) {
		console.log(index, element);
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

	//La siguiente función se encarga de eliminar un favorito, recibe un nombre y lo compara, si lo encuentra, elimina el favorito

	function deleteFav(name) {
		let temporal = data;
		temporal.map((item, index) => {
			if (name === item.scientific_name) {
				temporal.splice(index, 1);
				console.log("Encontrado name");
			}
		});
		setData(temporal);
	}

	//La siguiente función lo que hace es darle formato html a cada elemento de los tres array
	//Esta función es llamada por otra variable abajo, que almacena el return de esta función
	function format(array) {
		let result = array.map((item, index) => (
			<Card key={index}>
				<CardImg top width="50%" src={item.url} alt="Card image cap" />
				<div className="row d-flex justify-content-end">
					<div className="col-6 d-flex justify-content-start ">
						<Button className="m-1 mb-0 me-0" color="success" size="sm">
							Sembrar <i className="fas fa-seedling" />
						</Button>
					</div>
					<div className="col-6">
						<Button className="col-2" onClick={() => deleteFav(item.scientific_name)} close />
					</div>
				</div>
				<CardBody>
					<CardTitle tag="h5">{item.scientific_name}</CardTitle>
					<CardText>{item.synonymous}</CardText>
					<CardText>{item.year}</CardText>
					<CardText>{item.family}</CardText>
					<CardText>
						<small className="text-muted">{item.scientific_expanded}</small>
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
			<div className="row">
				<div className="col-4">
					<div className="m-1">{col_1}</div>
				</div>
				<div className="col-4">
					<div className="m-1">{col_2}</div>
				</div>
				<div className="col-4">
					<div className="m-1">{col_3}</div>
				</div>
			</div>
		</div>
	);
}
