import React from "react";
import propTypes from "prop-types";
import styles from "../../styles/profile.scss";
import { ListGroupItem, Button, CardImg, Label, Input, FormGroup, Col, ButtonToggle, Badge } from "reactstrap";

const profile = props => {
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
														type="text"
														name="text"
														id="exampleEmail"
														placeholder="Ocupacion"
														// onChange={handleTitlePlant}
													/>
												</Col>
												<Label for="exampleEmail" className="me-2" lg={2}>
													Localización
												</Label>
												<Col lg={10}>
													<Input
														type="text"
														name="text"
														id="exampleEmail"
														placeholder="Localización"
														// onChange={handlePlantImg}
													/>
												</Col>
												<Label for="exampleEmail" className="me-2" lg={2}>
													Teléfono
												</Label>
												<Col lg={10}>
													<Input
														type="text"
														name="text"
														id="exampleEmail"
														placeholder="Telefono"
														// onChange={handlePlantImg}
													/>
												</Col>
												<Label for="exampleEmail" className="me-2" lg={2}>
													Pasatiempos - Hobbies
												</Label>
												<Col lg={10}>
													<Input
														type="text"
														name="text"
														id="exampleEmail"
														placeholder="Pasatiempos - Hobbies"
														// onChange={handlePlantImg}
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
														// onChange={() => {
														// 	uploadImg(event.target.files[0]);
														// }}
													/>
												</Col>
											</FormGroup>
										</div>
										<div className="col-sm-12 mb-2">
											<button type="button" className="btn btn-block btn-outline-info">
												Cerrar Sesión
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
