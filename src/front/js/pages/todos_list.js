import React, { Component, useState, useContext, useEffect, useLayoutEffect } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/todos_list.scss";
import { ListGroupItem, Button, CardImg, Label, Input, FormGroup, Col, ButtonToggle, Badge } from "reactstrap";

export function TodosList() {
	const { store, actions } = useContext(Context); //El plantName también se almacena en el store
	let genIndex = 0;
	const [all_data, setall_Data] = useState([store.todos]); //Almacena las plantas

	useEffect(() => {
		setall_Data(store.todos);
	});

	function delTodo(index) {
		actions.deleteTodo(index);
	}

	function createTodos() {
		let all_data = store.todos;
		if (all_data[genIndex] == undefined) {
			return <div>No hay tareas disponibles</div>;
		} else {
			let tasks_position = all_data[genIndex][2].tasks;
			let temporal = tasks_position.map((item, index) => (
				<ListGroupItem key={index} className="justify-content-between bg-transparent">
					<div className="m-1 ">
						<Label check id="text-border2">
							<Input type="checkbox" /> {item.task}
						</Label>
					</div>
				</ListGroupItem>
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
			console.log(temporal[0].plant_name);
			let plant_url = "url(" + temporal[1].plant_url + ")";
			return (
				<div className="m-0 col-xl-12 col-lg-12 col-md-12 col-sm-12">
					<div className="m-0 row d-flex justify-content-end">
						<div className="row m-0 p-0 ps-4 ">
							<Button className="bg-dark border-dark border-rounded-top m-0 p-0 d-flex align-items-end">
								<Badge color="dark" pill>
									Modificar
								</Badge>
							</Button>
							<Button
								className="bg-danger border-danger border-rounded-top m-0 me-2 p-0 d-flex align-items-end"
								onClick={() => delTodo(genIndex)}>
								<Badge color="danger" pill>
									X
								</Badge>
							</Button>
						</div>
					</div>
					<div className="shadow-lg">
						<div
							className="bg-image p-4 text-center shadow-1-strong rounded rounded-5 mb-5 text-white "
							id="height"
							style={{
								backgroundImage: plant_url
							}}>
							<div className="row">
								<h1 id="text-border" className="col-12">
									{temporal[0].plant_name}
								</h1>
							</div>
							<div className="row d-flex justify-content-start">
								<div className=" col-xl-6 col-lg-8 col-md-10 col-sm-12">{createTodos()}</div>
							</div>
						</div>
					</div>
				</div>
			); //Temporal es una variable de control que guarda cada elemento en formato HTML
		}
	}
	let info = all_data;
	let todos_output = "Cargando";
	if (store.charge_todos === false) {
		todos_output = <div>Cargando</div>;
	} else {
		todos_output = info.map((item, index) => (
			<div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 " key={index}>
				<div>
					<div className="row">
						<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12"> {createInfo()} </div>
					</div>
				</div>
			</div>
		));
	}
	return (
		<div className="container-fluid border border-muted rounded">
			<div className="row d-flex justify-content-start">
				<Link to="/create">
					<Button color="info" className="m-2 rounded-pill">
						Crear nueva lista de tareas
					</Button>
				</Link>
			</div>
			<div>
				<div className="row"> {todos_output} </div>
			</div>
			{/* <div className="row">
				<div className="m-0 col-xl-4 col-lg-6 col-md-6 col-sm-12">
					<div className="m-0 row d-flex justify-content-end">
						<div className="row m-0 p-0 ps-4 ">
							<Button
								className="bg-dark border-dark border-rounded-top m-0 p-0 d-flex align-items-end"
								
								<Badge color="dark" pill>
									Modificar
								</Badge>
							</Button>
							<Button className="bg-danger border-danger border-rounded-top m-0 me-2 p-0 d-flex align-items-end">
								<Badge color="danger" pill>
									X
								</Badge>
							</Button>
						</div>
					</div>
					<div className="shadow-lg">
						<div
							className="bg-image p-4 text-center shadow-1-strong rounded rounded-5 mb-5 text-white "
							style={{
								backgroundImage: `url("https://bs.plantnet.org/image/o/85256a1c2c098e254fefe05040626a4df49ce248")`
							}}>
							<div className="row">
								<h1 id="text-border" className="col-12">
									Quercus rotundifolia
								</h1>
							</div>
							<div className="row d-flex justify-content-start">
								<div className="col-xl-5 col-lg-8 col-md-8 col-sm-10 shadow m-0 p-0">
									<ListGroupItem className="justify-content-between bg-transparent">
										<div className="m-1 ">
											<Label check id="text-border2">
												<Input type="checkbox" /> Tarea de prueba
											</Label>
										</div>
									</ListGroupItem>
									<ListGroupItem className="justify-content-between bg-transparent">
										<div className="m-1 ">
											<Label check id="text-border2">
												<Input type="checkbox" /> Tarea de prueba
											</Label>
										</div>
									</ListGroupItem>
									<ListGroupItem className="justify-content-between bg-transparent">
										<div className="m-1 ">
											<Label check id="text-border2">
												<Input type="checkbox" /> Tarea de prueba
											</Label>
										</div>
									</ListGroupItem>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div> */}
		</div>
	);
}
