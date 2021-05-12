import React, { Component, useState, useContext, useEffect, useLayoutEffect } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link, Redirect } from "react-router-dom";
import { ListGroupItem, Button, CardImg, Label, Input, FormGroup, Col, ButtonToggle, Badge } from "reactstrap";
import "../../styles/todos_list.scss";

export function CreateTodo() {
	const { store, actions } = useContext(Context); //El plantName también se almacena en el store
	const [plantName, setPlantName] = useState(store.initial_plant_name); //Almacena el nombre de la planta
	const [plantImg, setPlantImg] = useState(store.initial_img_url); //Almacena el URL de la planta
	const [list, setList] = useState(store.info_create_todos[0]); //Contiene los nombres de las tareas
	const [freqList, setFreqList] = useState(store.info_create_todos[1]); //Contiene las frecuencias de las tareas
	const [typeList, setTypeList] = useState(store.info_create_todos[2]); //Contiene los tipos de frecuencia de las tareas días/horas
	const [allTodos, setallTodos] = useState(store.todos); //Contiene los tipos de frecuencia de las tareas días/horas
	//La siguiente función actualiza el nombre de la planta cada vez que es llamada por el evento onChange
	let plant_url = "url(" + plantImg + ")";
	function handleTitlePlant(event) {
		actions.changeName(event.target.value);
		setPlantName(event.target.value);
	}
	//La siguiente función actualiza el URL de la planta cada vez que es llamada por el evento onChange
	function handlePlantImg(event) {
		setPlantImg(event.target.value);
	}
	//La siguiente función crea tres nuevos valores en tres listas, las listas contienen lo siguiente
	//list: contiene el nombre de la tarea, freqList: contiene la frecuencia de la tarea, typeList : contiene el tipo de frequencia días/horas
	function createNewTask() {
		let read = list;
		let read2 = typeList;
		let read3 = freqList;
		read.push("");
		read2.push("Horas");
		read3.push("");
		setPlantName(() => {
			//Hace un append a los tres arrays existentes con valores predeterminados y se reestablecen los nuevos valores de los array
			setList(read);
			setTypeList(read2);
			setFreqList(read3);
		});
	}
	//La siguiente función obtiene un evento, cada vez que se cambia el nombre de una tarea
	//este obtiene el evento y el index para modificas el array list, que contiene el name task
	function editNameTask(event, index_internal) {
		let read = list;
		read[index_internal] = event.target.value;
		setPlantName(() => {
			setList(read);
		});
	}
	//La siguiente función obtiene un evento, cada vez que se cambia la frecuencia de una tarea
	//este obtiene el evento y el index para modificas el array freqlist, que contiene las frecuencias
	function editFreqTask(event, index_internal) {
		let read = freqList;
		read[index_internal] = event.target.value;
		setPlantName(() => setFreqList(read));
	}
	//La siguiente función obtiene un evento, cada vez que se cambia el tipo de frecuencia de una tarea
	//este obtiene el evento y el index para modificas el array typeList, que contiene días/horas
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

	//La siguiente función elimina un task, y lo hace en las tres listas que manipulan los datos
	function deleteTask(index) {
		let read = list;
		let read2 = typeList;
		let read3 = freqList;
		//Hace un splice a los tres arrays existentes con valores predeterminados y se reestablecen los nuevos valores de los array
		read.splice(index, 1);
		read2.splice(index, 1);
		read3.splice(index, 1);
		//Se establecen los nuevos arrays con la tarea eliminada
		setPlantName(() => {
			setList(read);
			setTypeList(read2);
			setFreqList(read3);
		});
	}

	//Esta función se encarga de realizar el Fetch de la imagen del usuario
	//Cuando se ingresa a la función se asigna temporalmente una imagen de carga, cuando el API retorna success, se asigna la imagen a la que se subió a la nube
	//Cuando la imagen se carga, se actualiza la imagen de la previsualización con el URL de la nube
	async function uploadImg(file) {
		//Hello
		setPlantImg("https://i.pinimg.com/originals/e8/88/d4/e888d4feff8fd5ff63a965471a94b874.gif");
		const CLOUDINARY_UPLOAD_URL = "https://api.cloudinary.com/v1_1/dubb4luoi/image/upload";
		const formData = new FormData();
		formData.append("file", file);
		formData.append("upload_preset", "ksbjpgis"); // Replace the preset name with your own

		await fetch(CLOUDINARY_UPLOAD_URL, {
			method: "POST",
			body: formData
		})
			.then(response => response.json())
			.then(data => {
				if (data.secure_url !== "") {
					setPlantImg(data.secure_url);
				}
			})
			.catch(err => console.error(err));
	}

	//Cuando se presiona el botón finalizar la siguiente función le da formato a la información
	//En caso de encontrar errores en los datos, aplica sus validaciones
	function sendData() {
		let format = [{ plant_name: store.name }, { plant_url: plantImg }, ""];
		let tasks_push = [];

		freqList.map(function(item, index) {
			//Este map revisa que si alguna frecuencia está incorrecta la reemplaza por un valor predeterminado de 24 horas
			if (item === "" || isNaN(parseInt(item))) {
				freqList[index] = "24";
			}
		});

		list.map(function(item, index) {
			//Este map da el formato de objeto necesario para enviar los datos al API
			tasks_push.push({ task: list[index], freq: parseInt(freqList[index]), type: typeList[index] });
		});

		actions.changeChargeValue();
		format[2] = { tasks: tasks_push };
		actions.modifyTodos(format);
		actions.restoreDataToModify();
	}

	//Esta función crea divs de acuerdo a la cantidad de tareas por editar
	//Se basa leyendo el array de list y le da formato HTML, con sus respectivas funciones asignadas al index correspondiente
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
								value={list[index]}
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
								value={freqList[index]}
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
			return temporal; //Temporal es una variable de control que guarda cada elemento en formato HTML
		}
	}

	//La siguiente función lee el array list y crea una simulación de cómo se verían las tareas en previsualización
	function updatePrevTodos() {
		if (list == undefined) {
			return <div>Cargando</div>;
		} else {
			let temporal = list.map((item, index) => (
				<div key={index}>
					<ListGroupItem key={index} className="justify-content-between bg-transparent">
						<div className="m-1 ">
							<Label check id="text-border2">
								<Input type="checkbox" /> {item}
							</Label>
						</div>
					</ListGroupItem>
				</div>
			));
			return temporal; //Temporal es una variable de control que guarda cada elemento en formato HTML
		}
	}

	//Las siguientes dos variables son las que contienen el editor de tareas y el previsualizador de tareas
	//Las funciones tienen return, este return contiene la información en formato HTML
	let responsive_todos = updateResponsiveTodos();
	let prev_todos = updatePrevTodos();

	//El useEffect se encarga de validar, que si el espacio de la planta ya sea su nombre o URL se encuentran vacíos
	//les da formato general y le asigna a cada variable un valor temporal y así no dejar la previsualización vacía
	useLayoutEffect(() => {
		if (plantImg == undefined || plantImg == "") {
			setPlantImg(store.initial_img_url);
		}
		if (plantName == undefined || plantName == "") {
			setPlantName(store.initial_plant_name);
		}
		plant_url = "url(" + plantImg + ")";
		setList(list);
	});

	return (
		<div className="m-5">
			<div className="mt-5">
				<div className="row d-flex justify-content-end">
					<Link to="/garden">
						<Button color="danger" className="m-1 rounded-pill">
							Salir sin salvar
						</Button>
					</Link>
				</div>
				<div className="row mt-2 d-flex justify-content-center">
					<div className="col-6 col-lg-6 col-md-12 col-sm-12 bg-light border shadow-1-strong rounded rounded-5">
						<div className="row d-flex justify-content-center">
							<h1>Inserta aquí los datos de tu planta</h1>
						</div>
						<div className="row d-flex justify-content-center m-1">
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
										placeholder="Ingresar URL de imagen de la planta"
										onChange={handlePlantImg}
									/>
								</Col>
								<Col lg={12} className="d-flex justify-content-end">
									<div>
										<Input
											type="file"
											name="file"
											id="exampleFile"
											accept=".jpg,.png,.jpeg,.gif"
											onChange={() => {
												uploadImg(event.target.files[0]);
											}}
										/>
									</div>
								</Col>
							</FormGroup>
						</div>
						<div className="row d-flex justify-content-center mb-2">
							<h1>Tareas para tu planta</h1>
						</div>
						<div className="row d-flex justify-content-center">{responsive_todos}</div>
						<div className="row d-flex justify-content-center">
							<Button color="secondary" className="m-1 rounded-pill" onClick={() => createNewTask()}>
								Crear nueva tarea
							</Button>{" "}
							<Link to="/garden" onClick={sendData}>
								<Button color="info" className="m-1 rounded-pill">
									Finalizar
								</Button>
							</Link>
						</div>
					</div>
					<div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
						<div className="row d-flex justify-content-center mb-2">
							<h1>Previsualización</h1>
						</div>
						<div className="row d-flex justify-content-center">
							<div style={{ width: "100%" }}>
								<div className="m-0 col-xl-12 col-lg-12 col-md-12 col-sm-12">
									<div className="shadow-lg">
										<div
											className="bg-image p-4 text-center shadow-1-strong rounded rounded-5 mb-5 text-white "
											id="height_todos"
											style={{
												backgroundImage: plant_url
											}}>
											<div className="row">
												<h1 id="text-border" className="col-12">
													{plantName}
												</h1>
											</div>
											<div className="row d-flex justify-content-start">
												<div className=" col-xl-6 col-lg-8 col-md-10 col-sm-12">
													{prev_todos}
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{store.userLogged ? console.log("auth") : <Redirect to="/login" />}
		</div>
	);
}
