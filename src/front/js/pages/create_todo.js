import React, { Component, useState, useContext, useEffect, useLayoutEffect } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem, Button, CardImg, Label, Input, FormGroup, Col, ButtonToggle } from "reactstrap";

export function CreateTodo() {
	const [plantName, setPlantName] = useState("Aquí irá el nombre de tu planta");
	const [plantImg, setPlantImg] = useState(
		"https://activated.org/media/images/new-beginnings_82U8Rbw.max-550x350.jpg"
	);

	const [editTodos, setEditTodos] = useState([]);
	const [list, setList] = useState(["Tarea"]);
	const [freqList, setFreqList] = useState([""]);
	const [typeList, setTypeList] = useState(["Horas"]);
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
		let read2 = typeList;
		let read3 = freqList;
		read.push("Tu tarea");
		read2.push("Horas");
		read3.push("");
		setPlantName(() => {
			setList(read);
			setTypeList(read2);
			setFreqList(read3);
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

	function editTypeTask(type, index_internal) {
		let change = "Horas";
		if (type === "Horas") {
			change = "Días";
		} else {
			change = "Horas";
		}
		let read = typeList;
		read[index_internal] = change;
		setPlantName(() => setTypeList(read));
	}

	function deleteTask(index) {
		let read = list;
		let read2 = typeList;

		read.splice(index, 1);
		read2.splice(index, 1);

		setPlantName(() => {
			setList(read);
			setTypeList(read2);
		});
	}

	function sendData() {
		let datas = [{ plant_name: store.name }, { plant_url: plantImg }, ""];
		let data = [];

		freqList.map(function(item, index) {
			if (item === "" || isNaN(parseInt(item))) {
				freqList[index] = "24";
			}
		});

		list.map(function(item, index) {
			data.push({ task: list[index], freq: parseInt(freqList[index]), type: typeList[index] });
		});
		datas[2] = { tasks: data };
		console.log(datas);
	}

	function updateResponsiveTodos() {
		if (list == undefined) {
			return <div>Cargando</div>;
		} else {
			let temporal = list.map((item, index) => (
				<div key={index} className="w-75">
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
								placeholder="Ej: 10 horas/días"
								onChange={() => editFreqTask(event, index)}
							/>
						</Col>
						<Col lg={9} className="mt-1 d-flex justify-content-start">
							<small className="text-muted">
								Al no especificar horas/días o hacerlo incorrectamente, se asume que la tarea se realiza
								diariamente.
							</small>
						</Col>
						<Col lg={3} className="d-flex justify-content-end">
							<ButtonToggle
								className="m-1"
								color="secondary"
								onClick={() => editTypeTask(typeList[index], index)}>
								{typeList[index]}
							</ButtonToggle>{" "}
							<ButtonToggle color="danger" className="m-1" onClick={() => deleteTask(index)}>
								<i className="fas fa-trash-alt" />
							</ButtonToggle>{" "}
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
		<div className="m-5 mt-1">
			<div className="row d-flex justify-content-end">
				<Link to="/garden" onClick={sendData}>
					<Button color="danger" className="m-1">
						Salir sin salvar
					</Button>
				</Link>
			</div>
			<div className="row mt-2">
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
						<Button color="secondary" className="m-1" onClick={() => createNewTask()}>
							Crear nueva tarea
						</Button>{" "}
						<Link to="/garden" onClick={sendData}>
							<Button color="info" className="m-1">
								Finalizar
							</Button>
						</Link>
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
		</div>
	);
}
{
	/* 
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
		</div> */
}
