import React, { Component, useState, useContext, useEffect } from "react";
import propTypes from "prop-types";
import styles from "../../styles/profile.scss";
import { Context } from ".././store/appContext";
import { ListGroupItem, Button, CardImg, Label, Input, FormGroup, Col, ButtonToggle, Badge } from "reactstrap";

const profile = props => {
	const { store, actions } = useContext(Context);
	const [ocup, setOcup] = useState(""); //Almacena las plantas
	const [local, setLocal] = useState(""); //Almacena las plantas
	const [tel, setTel] = useState(""); //Almacena las plantas
	const [hobbies, setHobbies] = useState(""); //Almacena las plantas
	const [img, setImg] = useState(""); //Almacena las plantas

	function handleOcup(event) {
		setOcup(event.target.value);
	}
	function handleLocal(event) {
		setLocal(event.target.value);
	}
	function handleTel(event) {
		setTel(event.target.value);
	}
	function handleHobbies(event) {
		setHobbies(event.target.value);
	}
	function handleImg(img) {
		let img_url = img;
		setImg(img_url);
	}
	function sumbitInfo() {
		let send_info = { ocup: ocup, local: local, tel: tel, hobbies: hobbies, img: img };
		actions.userDataUpdate(send_info);
	}
	async function uploadImg(file) {
		//Hello

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
					handleImg(data.secure_url);
				}
			})
			.catch(err => console.error(err));
	}

	return (
		<div className="page-content page-container" id="page-content">
			<div className="row mt-5">
				<div className="padding">
					<div className="row ">
						<div className=" col-sm-12">
							<div className="card user-card-full">
								<div className="row m-l-0 m-r-0">
									<div className="col-sm-4 bg-c-lite-green user-profile">
										<div className="card-block text-center text-white">
											<div className="m-b-25">
												<img
													src={props.image}
													className="img-radius"
													alt="User-Profile-Image"
													id="img_height"
												/>
											</div>
											<h3 className="f-w-600">{props.name}</h3>
											<h4>{props.profesion}</h4>{" "}
											<i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16" />
										</div>
									</div>
									<div className="col-sm-8">
										<div className="card-block">
											<h3 className="m-b-20 p-b-5 b-b-default f-w-600">Información </h3>
											<FormGroup row>
												<Label for="exampleEmail" className="me-2" lg={2}>
													Ocupación
												</Label>
												<Col lg={10}>
													<Input
														value={ocup}
														type="text"
														name="text"
														id="exampleEmail"
														placeholder="Ocupacion"
														onChange={handleOcup}
													/>
												</Col>
												<Label for="exampleEmail" className="me-2" lg={2}>
													Localización
												</Label>
												<Col lg={10}>
													<Input
														value={local}
														type="text"
														name="text"
														id="exampleEmail"
														placeholder="Localización"
														onChange={handleLocal}
													/>
												</Col>
												<Label for="exampleEmail" className="me-2" lg={2}>
													Teléfono
												</Label>
												<Col lg={10}>
													<Input
														value={tel}
														type="text"
														name="text"
														id="exampleEmail"
														placeholder="Telefono"
														onChange={handleTel}
													/>
												</Col>
												<Label for="exampleEmail" className="me-2" lg={2}>
													Pasatiempos - Hobbies
												</Label>
												<Col lg={10}>
													<Input
														value={hobbies}
														type="text"
														name="text"
														id="exampleEmail"
														placeholder="Pasatiempos - Hobbies"
														onChange={handleHobbies}
													/>
												</Col>
												<Label for="exampleEmail" className="me-2" lg={2}>
													Actualizar imagen de perfil
												</Label>
												<Col lg={12} className="d-flex justify-content-center">
													<Input
														type="file"
														name="file"
														id="exampleFile"
														accept=".jpg,.png,.jpeg,.gif"
														onChange={() => {
															uploadImg(event.target.files[0]);
														}}
													/>
												</Col>
											</FormGroup>
										</div>
										<div className="col-sm-12 mb-2">
											<button
												type="button"
												className="btn btn-block btn-outline-info"
												onClick={sumbitInfo}>
												Actualizar mi información
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

profile.propTypes = {
	name: propTypes.string,
	description: propTypes.string,
	profesion: propTypes.string,
	location: propTypes.string,
	hobbies: propTypes.string,
	image: propTypes.string,
	phone: propTypes.string
};

export default profile;
