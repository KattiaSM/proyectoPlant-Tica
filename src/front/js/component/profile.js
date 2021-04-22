import React from "react";
import propTypes from "prop-types";
import styles from "../../styles/profile.scss";

const profile = props => {
	return (
		<div className="page-content page-container" id="page-content">
			<div className="padding">
				<div className="row ">
					<div className=" col-sm-12">
						<div className="card user-card-full">
							<div className="row m-l-0 m-r-0">
								<div className="col-sm-4 bg-c-lite-green user-profile">
									<div className="card-block text-center text-white">
										<div className="m-b-25">
											<img src={props.image} className="img-radius" alt="User-Profile-Image" />
										</div>
										<h3 className="f-w-600">{props.name}</h3>
										<p>{props.profesion}</p>{" "}
										<i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16" />
									</div>
								</div>
								<div className="col-sm-8">
									<div className="card-block">
										<h3 className="m-b-20 p-b-5 b-b-default f-w-600">Información </h3>
										<div className="row">
											<div className="col-sm-12 mb-2">
												<p className="f-w-600 mb-1">Descripción personal</p>
												<h6 className="text-muted f-w-400">{props.description}</h6>
											</div>
											<div className="col-sm-12 mb-2">
												<p className="f-w-600 mb-1">Localización</p>
												<h6 className="text-muted f-w-400">{props.location}</h6>
											</div>
											<div className="col-sm-12 mb-2">
												<p className="f-w-600 mb-1">Teléfono</p>
												<h6 className="text-muted f-w-400">{props.phone}</h6>
											</div>
											<div className="col-sm-12 mb-2">
												<p className="f-w-600 mb-1">Hobbies</p>
												<h6 className="text-muted f-w-400">{props.hobbies}</h6>
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
