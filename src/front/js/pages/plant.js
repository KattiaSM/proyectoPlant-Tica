import React, { Component, useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem, Badge, CardImg, Label, Input } from "reactstrap";

export function Plant() {
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
	];

	return (
		<div className="m-5 w-50">
			<div className="row">
				<div className="col-6">
					<CardImg
						top
						width="100%"
						src="https://activated.org/media/images/new-beginnings_82U8Rbw.max-550x350.jpg"
						alt="Card image cap"
					/>
				</div>
				<div className="col-6">
					<div className="box">
						<h2>My Plants</h2>
						<h3>To Do List</h3>
					</div>
					<ListGroup>
						<ListGroupItem className="justify-content-between">
							{" "}
							<div className="m-1 mt-0 mb-0">
								<Label check>
									<Input type="checkbox" className="ps-2" /> Agua
								</Label>
							</div>
						</ListGroupItem>
						<ListGroupItem className="justify-content-between">
							{" "}
							<div className="m-1">
								<Label check>
									<Input type="checkbox" className="ps-2" /> Abono
								</Label>
							</div>
						</ListGroupItem>
						<ListGroupItem className="justify-content-between">
							{" "}
							<div className="m-1">
								<Label check>
									<Input type="checkbox" className="ps-2" /> Fertilizante
								</Label>
							</div>
						</ListGroupItem>
						<ListGroupItem className="justify-content-between">
							{" "}
							<div className="m-1">
								<Label check>
									<Input type="checkbox" className="ps-2" /> Luz
								</Label>
							</div>
						</ListGroupItem>
					</ListGroup>
				</div>
			</div>
		</div>
	);
}
