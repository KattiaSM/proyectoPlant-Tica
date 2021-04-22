import React, { Component, useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Card, CardBody, Button, CardTitle, CardText, CardImg } from "reactstrap";

export function Favorites() {
	let data = [
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
			scientific_name: "Quercus Rotundifolia",
			synonymous: "Roble de Hoja Perenne",
			year: "1785",
			family: "Fagaceae",
			scientific_expanded: "Quercus rotundifolia f. dolichocalyx",
			url: "https://bs.plantnet.org/image/o/1a03948baf0300da25558c2448f086d39b41ca30"
		},
		{
			scientific_name: "Plantago lanceolata",
			synonymous: "Plátano de hoja estrecha",
			year: "1753",
			family: "Plantaginaceae",
			scientific_expanded: "Plantago lanceolata var. sphaerostachya",
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
	];

	//array.map(function(currentValue, index, arr), thisValue)

	console.log(data[0]);

	return (
		<div className="m-5">
			<div className="row">
				<div className="col-4">
					<div className="m-1">
						<Card>
							<CardImg
								top
								width="50%"
								src="https://bs.plantnet.org/image/o/1a03948baf0300da25558c2448f086d39b41ca30"
								alt="Card image cap"
							/>
							<div className="row d-flex justify-content-end">
								<Button className="col-2" close />
							</div>
							<CardBody>
								<CardTitle tag="h5">Quercus rotundifolia</CardTitle>
								<CardText>Sinónimo: Roble de Hoja Perenne</CardText>
								<CardText>Año de registro: 1785</CardText>
								<CardText>Familia: Fagaceae</CardText>
								<CardText>
									<small className="text-muted">Quercus rotundifolia f. dolichocalyx</small>
								</CardText>
							</CardBody>
						</Card>
						<Card>
							<CardImg
								top
								width="100%"
								src="https://bs.plantnet.org/image/o/85256a1c2c098e254fefe05040626a4df49ce248"
								alt="Card image cap"
							/>
							<div className="row d-flex justify-content-end">
								<Button className="col-2" close />
							</div>
							<CardBody>
								<CardTitle tag="h5">Quercus rotundifolia</CardTitle>
								<CardText>Sinónimo: Roble de Hoja Perenne</CardText>
								<CardText>Año de registro: 1785</CardText>
								<CardText>Familia: Fagaceae</CardText>
								<CardText>
									<small className="text-muted">Quercus rotundifolia f. dolichocalyx</small>
								</CardText>
							</CardBody>
						</Card>
					</div>
				</div>
				<div className="col-4">
					<div className="m-1">
						<Card>
							<CardImg
								top
								width="100%"
								src="https://bs.plantnet.org/image/o/85256a1c2c098e254fefe05040626a4df49ce248"
								alt="Card image cap"
							/>
							<div className="row d-flex justify-content-end">
								<Button className="col-2" close />
							</div>
							<CardBody>
								<CardTitle tag="h5">Quercus rotundifolia</CardTitle>
								<CardText>Sinónimo: Roble de Hoja Perenne</CardText>
								<CardText>Año de registro: 1785</CardText>
								<CardText>Familia: Fagaceae</CardText>
								<CardText>
									<small className="text-muted">Quercus rotundifolia f. dolichocalyx</small>
								</CardText>
							</CardBody>
						</Card>
						<Card>
							<CardImg
								top
								width="100%"
								src="https://bs.plantnet.org/image/o/2292b670683abdaac354389514105df0018d9ef8"
								alt="Card image cap"
							/>
							<div className="row d-flex justify-content-end">
								<Button className="col-2" close />
							</div>
							<CardBody>
								<CardTitle tag="h5">Quercus rotundifolia</CardTitle>
								<CardText>Sinónimo: Roble de Hoja Perenne</CardText>
								<CardText>Año de registro: 1785</CardText>
								<CardText>Familia: Fagaceae</CardText>
								<CardText>
									<small className="text-muted">Quercus rotundifolia f. dolichocalyx</small>
								</CardText>
							</CardBody>
						</Card>
					</div>
				</div>
				<div className="col-4">
					<div className="m-1">
						<Card>
							<CardImg
								top
								width="100%"
								src="https://bs.plantnet.org/image/o/78a8374f009e6ed2dc71ca17d18e4271ea0a2a7b"
								alt="Card image cap"
							/>
							<div className="row d-flex justify-content-end">
								<Button className="col-2" close />
							</div>
							<CardBody>
								<CardTitle tag="h5">Quercus rotundifolia</CardTitle>
								<CardText>Sinónimo: Roble de Hoja Perenne</CardText>
								<CardText>Año de registro: 1785</CardText>
								<CardText>Familia: Fagaceae</CardText>
								<CardText>
									<small className="text-muted">Quercus rotundifolia f. dolichocalyx</small>
								</CardText>
							</CardBody>
						</Card>
						<Card>
							<CardImg
								top
								width="100%"
								src="https://bs.plantnet.org/image/o/0b932c8a275efc79f473a71bec20d6f15e9b6b90"
								alt="Card image cap"
							/>
							<div className="row d-flex justify-content-end">
								<Button className="col-2" close />
							</div>
							<CardBody>
								<CardTitle tag="h5">Quercus rotundifolia</CardTitle>
								<CardText>Sinónimo: Roble de Hoja Perenne</CardText>
								<CardText>Año de registro: 1785</CardText>
								<CardText>Familia: Fagaceaeeee</CardText>
								<CardText>
									<small className="text-muted">Quercus rotundifolia f. dolichocalyx</small>
								</CardText>
							</CardBody>
						</Card>
					</div>
				</div>
			</div>
		</div>
	);
}
