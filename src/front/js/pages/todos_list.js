import React, { Component, useState, useContext, useEffect, useLayoutEffect } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { ListGroupItem, Button, CardImg, Label, Input, FormGroup, Col, ButtonToggle } from "reactstrap";

export function TodosList() {
	const [plantName, setPlantName] = useState("Aquí irá el nombre de tu planta"); //Almacena el nombre de la planta
	const [plantImg, setPlantImg] = useState(
		"https://activated.org/media/images/new-beginnings_82U8Rbw.max-550x350.jpg"
	); //Almacena el URL de la planta

	const [list, setList] = useState(["Tarea"]); //Contiene los nombres de las tareas
	const [freqList, setFreqList] = useState([""]); //Contiene las frecuencias de las tareas
	const [typeList, setTypeList] = useState(["Horas"]); //Contiene los tipos de frecuencia de las tareas días/horas
	const { store, actions } = useContext(Context); //El plantName también se almacena en el store

	let genIndex = 0;

	function createTodos(allTodos, listIndex) {
		allTodos = store.todos;
		console.log("todos con index");
		console.log(store.todos);
		let prueba = allTodos[genIndex][2].tasks;

		if (allTodos == undefined) {
			console.log(allTodos);

			return <div>No hay tareas disponibles</div>;
		} else {
			let temporal = prueba.map((item, index) => (
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

	function createInfo(allTodos) {
		if (allTodos === undefined) {
			return <div>No hay tareas disponibles</div>;
		}

		let temporal = allTodos.map((item, index) => (
			<div key={index}>
				<div className="row">
					<div className="col-6">
						<CardImg top width="100%" src={item[1].plant_url} alt="Card image cap" />
						<div className="box">
							<h2>
								<p id="plant_title">{item[0].plant_name}</p>
							</h2>
							<h3>Lista de Tareas</h3>
						</div>
					</div>
					<div className="col-6">{() => createTodos(controlList, key)}</div>
				</div>
			</div>
		));
		return temporal; //Temporal es una variable de control que guarda cada elemento en formato HTML
	}

	let info = createInfo(store.todos);
	let prev_todos = createTodos();

	return (
		<div className="m-5 mt-1">
			<div>
				<div className="row d-flex justify-content-center mb-2">
					<h1>Previsualización</h1>
				</div>
				<div className="row">
					<div className="col-6">
						<CardImg top width="100%" src={plantImg} alt="Card image cap" />
						<div className="box">
							<h2>
								{store.name}
								<p id="plant_title">{plantName}</p>
							</h2>
							<h3>Lista de Tareas</h3>
						</div>
					</div>
					<div className="col-6">{prev_todos}</div>
				</div>
			</div>
		</div>
	);
}
