import React, { Component, useState, useContext, useEffect, useLayoutEffect } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem, Button, CardImg, Label, Input, FormGroup, Col } from "reactstrap";

export function Plant() {
	const [plantName, setPlantName] = useState("Aquí irá el nombre de tu planta");
	const [plantImg, setPlantImg] = useState(
		"https://activated.org/media/images/new-beginnings_82U8Rbw.max-550x350.jpg"
	);

	const [editTodos, setEditTodos] = useState([]);
	const [list, setList] = useState(["Tarea"]);
	const [freqList, setFreqList] = useState(["Tarea"]);
	const { store, actions } = useContext(Context);
	const name = "";
	function handleTitlePlant(event) {
		actions.changeName(event.target.value);
		setPlantName(event.target.value);
	}
	function handlePlantImg(event) {
		setPlantImg(event.target.value);
	}
	function createNewTask() {
		let tit = plantName;
		let read = list;
		console.log(plantName);
		read.push("Tu tarea");
		setPlantName(() => {
			setList(read);
		});
	}
	function editNameTask(event, index_internal) {
		let tit = plantName;
		let read = list;
		read[index_internal] = event.target.value;
		setPlantName(() => {
			setList(read);
		});
	}

	function editFreqTask(event, index_internal) {
		let read = freqList;
		read[index_internal] = event.target.value;
		setPlantName(() => setFreqList(read));
	}

	function updateResponsiveTodos() {
		if (list == undefined) {
			return <div>Cargando</div>;
		} else {
			let temporal = list.map((item, index) => (
				<div key={index}>
					<FormGroup row>
						<Label for="exampleEmail" className="me-2" lg={2}>
							Tarea
						</Label>
						<Col lg={10}>
							<Input
								type="text"
								name="text"
								id="exampleEmail"
								placeholder="Ej: Agua"
								onChange={() => editNameTask(event, index)}
							/>
						</Col>
						<Label for="exampleEmail" className="me-2" lg={2}>
							Frecuencia
						</Label>
						<Col lg={10}>
							<Input
								type="text"
								name="text"
								id="exampleEmail"
								placeholder="Ej: 10 -- Insertar solamente horas"
								onChange={() => editFreqTask(event, index)}
							/>
						</Col>
					</FormGroup>
				</div>
			));
			return temporal;
		}
	}

	function updatePrevTodos() {
		if (list == undefined) {
			return <div>Cargando</div>;
		} else {
			let temporal = list.map((item, index) => (
				<div key={index}>
					<ListGroupItem className="justify-content-between">
						{" "}
						<div className="m-1">
							<Label check>
								<Input type="checkbox" className="ps-2" /> {item}
							</Label>
						</div>
					</ListGroupItem>
				</div>
			));
			return temporal;
		}
	}

	let responsive_todos = updateResponsiveTodos();
	let prev_todos = updatePrevTodos();

	useLayoutEffect(() => {
		if (plantImg == undefined || plantImg == "") {
			setPlantImg("https://activated.org/media/images/new-beginnings_82U8Rbw.max-550x350.jpg");
		}
		if (plantName == undefined || plantName == "") {
			setPlantName("Aquí irá el nombre de tu planta");
		}

		setList(list);
	});

	return (
		<div className="m-5">
			<div className="row">
				<div className="col-6 bg-light border border-rounded rounded-2">
					<div className="row d-flex justify-content-center mb-2">
						<h1>Inserta aquí los datos de tu planta</h1>
					</div>
					<div className="row d-flex justify-content-center">
						<FormGroup row>
							<Label for="exampleEmail" className="me-2" lg={2}>
								Nombre
							</Label>
							<Col lg={10}>
								<Input
									type="text"
									name="text"
									id="exampleEmail"
									placeholder="Nombre de la planta"
									onChange={handleTitlePlant}
								/>
							</Col>
							<Label for="exampleEmail" className="me-2" lg={2}>
								URL
							</Label>
							<Col lg={10}>
								<Input
									type="text"
									name="text"
									id="exampleEmail"
									placeholder="URL de la imagen de la planta"
									onChange={handlePlantImg}
								/>
							</Col>
						</FormGroup>
					</div>
					<div className="row d-flex justify-content-center mb-2">
						<h1>Tareas para tu planta</h1>
					</div>
					<div className="row d-flex justify-content-center">{responsive_todos}</div>
					<div className="row d-flex justify-content-center">
						<Button color="secondary" onClick={() => createNewTask()}>
							Crear nueva tarea
						</Button>{" "}
						<Button color="success">Finalizar</Button>
					</div>
				</div>
				<div className="col-6">
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
			<div className="w-50 mt-5">
				<div className="row">
					<div className="col-6">
						<CardImg
							top
							width="100%"
							src="https://activated.org/media/images/new-beginnings_82U8Rbw.max-550x350.jpg"
							alt="Card image cap"
						/>
						<div className="box">
							<h2>Prueba</h2>
							<h3>Lista de Tareas</h3>
						</div>
					</div>
					<div className="col-6">
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
							<ListGroupItem className="justify-content-between">
								{" "}
								<div className="m-1">
									<Label check>
										<Input type="checkbox" className="ps-2" /> Luz
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
		</div>
	);
}
