import React, { Component, useState, useContext, useEffect, useLayoutEffect } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { ListGroupItem, Button, CardImg, Label, Input, FormGroup, Col, ButtonToggle } from "reactstrap";

export function CreateTodo() {
	const { store, actions } = useContext(Context); //El plantName también se almacena en el store
	const [plantName, setPlantName] = useState("Aquí irá el nombre de tu planta"); //Almacena el nombre de la planta
	const [plantImg, setPlantImg] = useState(
		"https://activated.org/media/images/new-beginnings_82U8Rbw.max-550x350.jpg"
	); //Almacena el URL de la planta

	const [list, setList] = useState(["Tarea"]); //Contiene los nombres de las tareas
	const [freqList, setFreqList] = useState([""]); //Contiene las frecuencias de las tareas
	const [typeList, setTypeList] = useState(["Horas"]); //Contiene los tipos de frecuencia de las tareas días/horas
	const [allTodos, setallTodos] = useState(store.todos); //Contiene los tipos de frecuencia de las tareas días/horas
	//La siguiente función actualiza el nombre de la planta cada vez que es llamada por el evento onChange
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
		read.push("Tu tarea");
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
		console.log("lista de todos que se le pasa a flux");
		console.log(format);
		console.log("lista que se trae de flux");
		console.log(allTodos);
		let control = allTodos;
		control.push(format);
		actions.modifyTodos(format, control);
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
				<Link to="/garden">
					<Button color="danger" className="m-1">
						Salir sin salvar
					</Button>
				</Link>
			</div>
			<div className="row mt-2 d-flex justify-content-center">
				<div className="col-6 bg-light border border-rounded rounded-2">
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
