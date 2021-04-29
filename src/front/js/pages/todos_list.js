import React, { Component, useState, useContext, useEffect, useLayoutEffect } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { ListGroupItem, Button, CardImg, Label, Input, FormGroup, Col, ButtonToggle } from "reactstrap";

export function TodosList() {
	const { store, actions } = useContext(Context); //El plantName también se almacena en el store

	let genIndex = 0;
	let all_data = store.todos;

	function createTodos() {
		if (all_data[genIndex] == undefined) {
			<div>No hay tareas en tu planta</div>;

			return <div>No hay tareas disponibles</div>;
		} else {
			let tasks_position = all_data[genIndex][2].tasks;
			let temporal = tasks_position.map((item, index) => (
				<div key={index}>
					<ListGroupItem className="justify-content-between">
						{" "}
						<div className="m-1">
							<Label check>
								<Input type="checkbox" className="ps-2" /> {item.task}
							</Label>
						</div>
					</ListGroupItem>
				</div>
			));

			genIndex++;

			return temporal; //Temporal es una variable de control que guarda cada elemento en formato HTML
		}
	}

	function createInfo() {
		if (all_data[genIndex] === undefined) {
			return <div>No hay tareas disponibles</div>;
		} else {
			let temporal = all_data[genIndex];
			return (
				<div>
					<div>
						<div>
							<CardImg top width="100%" src={temporal[1].plant_url} alt="Card image cap" />
							<div className="box">
								<h2>
									<h2>{temporal[0].plant_Name}</h2>
								</h2>
								<h3>Lista de Tareas</h3>
							</div>
						</div>
					</div>
				</div>
			); //Temporal es una variable de control que guarda cada elemento en formato HTML
		}
	}

	let todos_output = all_data.map((item, index) => (
		<div className="row" key={index}>
			<div className="col-6"> {createInfo()} </div>
			<div className="col-6"> {createTodos()} </div>
		</div>
	));

	return (
		<div className="m-5 mt-1">
			<div className="row">
				<div> {todos_output} </div>
			</div>
		</div>
	);
}
