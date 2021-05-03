import React, { Component, useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/garden.scss";
export function Garden() {
	return (
		<div className="col-6 border border-muted rounded" style={{ display: "none" }}>
			<div className="mt-1">
				<div className="panel">
					<div className="panel-body">
						<textarea className="form-control" rows="2" placeholder="What do you want to plant?" />
						<div className="mar-top clearfix">
							<button type="button" className="btn btn-light btn-md">
								<i className="fas fa-camera" />
							</button>
							<button type="button" className="btn btn-light btn-md">
								<i className="far fa-file-image" />
							</button>
							<button type="button" className="btn btn-light btn-md">
								<a href="../home.js">
									<i className="far fa-object-group" />
								</a>
							</button>
							<button className="btn btn-primary btn-md-end" type="submit">
								Share
							</button>
						</div>
					</div>
					<div className="container">
						<div className="card">
							<div className="card-header">
								<h4 className="titulo">Preparar el suelo</h4>
								<small className="text-muted">Today 7:21 am - 25.04.2021</small>
								<div className="dropdown">
									<button
										className="dropdown-toggle btn btn-link"
										type="button"
										data-toggle="dropdown"
									/>
									<ul className="dropdown-menu m-t-xs">
										<li>
											<a href="#">
												<i className="fas fa-pencil-alt" />
												Editar
											</a>
										</li>
										<li>
											<a href="#">
												<i className="fas fa-trash-alt" />
												Borrar
											</a>
										</li>
									</ul>
								</div>
							</div>
							<img
								src="https://casaydiseno.com/wp-content/uploads/2016/05/tierra-fertil-abononatural.jpg"
								className="card-img-top"
								alt="..."
							/>
							<div className="card-body">
								<h5 className="card-title">23 Likes</h5>
								<p className="card-text">
									Preparar el suelo antes de sembrar tu huerta permitira una siembra eficiente. Quitar
									la maleza, allanar y abonar son los pasos basicos para iniciar a plantar.
									#hortalizas #organico #hechoencasa.
								</p>
								<button type="button" className="btn btn-light btn-md">
									<i className="far fa-heart" />
								</button>
								<button type="button" className="btn btn-light btn-md">
									<i className="far fa-comment-alt" />
								</button>
								<input
									type="text"
									className="form-control comentario"
									id="recipient-name"
									value="Escriba un comentario..."
								/>
								<button type="button" className="btn btn-light btn-md">
									<i className="far fa-paper-plane" />
								</button>
							</div>

							<div className="card">
								<div className="card-header">
									<h4 className="titulo">Mis chiles</h4>
									<small className="text-muted">11:12 pm - 12.11.2020</small>
									<div className="dropdown">
										<button
											className="dropdown-toggle btn btn-link"
											type="button"
											data-toggle="dropdown"
										/>
										<ul className="dropdown-menu m-t-xs">
											<li>
												<a href="#">
													<i className="fas fa-pencil-alt" />
													Editar
												</a>
											</li>
											<li>
												<a href="#">
													<i className="fas fa-trash-alt" />
													Borrar
												</a>
											</li>
										</ul>
									</div>
								</div>
								<img
									src="https://http2.mlstatic.com/D_NQ_NP_745405-MLM25008365055_082016-O.jpg"
									className="card-img-top"
									alt="..."
								/>
								<div className="card-body">
									<h5 className="card-title">23 Likes</h5>
									<p className="card-text">
										Preparar el suelo antes de sembrar tu huerta permitira una siembra eficiente.
										Quitar la maleza, allanar y abonar son los pasos basicos para iniciar a plantar.
										#hortalizas #organico #hechoencasa.
									</p>
									<button type="button" className="btn btn-light btn-md">
										<i className="far fa-heart" />
									</button>
									<button type="button" className="btn btn-light btn-md">
										<i className="far fa-comment-alt" />
									</button>
									<input
										type="text"
										className="form-control comentario"
										id="recipient-name"
										value="Escriba un comentario..."
									/>
									<button type="button" className="btn btn-light btn-md">
										<i className="far fa-paper-plane" />
									</button>
								</div>

								<div className="card">
									<div className="card-header">
										<h4 className="titulo">Suculentas</h4>
										<small className="text-muted">4:21 pm - 12.06.2014</small>
										<div className="dropdown">
											<button
												className="dropdown-toggle btn btn-link"
												type="button"
												data-toggle="dropdown"
											/>
											<ul className="dropdown-menu m-t-xs">
												<li>
													<a href="#">
														<i className="fas fa-pencil-alt" />
														Editar
													</a>
												</li>
												<li>
													<a href="#">
														<i className="fas fa-trash-alt" />
														Borrar
													</a>
												</li>
											</ul>
										</div>
									</div>
									<img
										src="https://undergreen.net/wp-content/uploads/sites/6/2019/05/sukkulenten-kakteen-pflege-2-540x540.jpg"
										className="card-img-top"
										alt="..."
									/>
									<div className="card-body">
										<h5 className="card-title">23 Likes</h5>
										<p className="card-text">
											Preparar el suelo antes de sembrar tu huerta permitira una siembra
											eficiente. Quitar la maleza, allanar y abonar son los pasos basicos para
											iniciar a plantar. #hortalizas #organico #hechoencasa.
										</p>
										<button type="button" className="btn btn-light btn-md">
											<i className="far fa-heart" />
										</button>
										<button type="button" className="btn btn-light btn-md">
											<i className="far fa-comment-alt" />
										</button>
										<input
											type="text"
											className="form-control comentario"
											id="recipient-name"
											value="Escriba un comentario..."
										/>
										<button type="button" className="btn btn-light btn-md">
											<i className="far fa-paper-plane" />
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
