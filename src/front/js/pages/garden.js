import React, { Component, useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export function Garden() {
	return (
		<div className="container">
			<div className="row">
				<div className="col-sm-8">
					<img src="https://via.placeholder.com/550x350/" className="img-responsive" alt="" />
				</div>
				<div className="col-sm-4">
					<div className="box">
						<h2>My Plants</h2>
						<h3>To Do List</h3>
					</div>
					<div className="box">
						<ul className="list-unstyled">
							<li>
								<input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
								<label className="form-check-label" htmlFor="flexCheckDefault">
									Agua
								</label>
							</li>
							<li>
								<input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
								<label className="form-check-label" htmlFor="flexCheckDefault">
									Abono
								</label>
							</li>
							<li>
								<input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
								<label className="form-check-label" htmlFor="flexCheckDefault">
									Luz
								</label>
							</li>
							<li>
								<input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
								<label className="form-check-label" htmlFor="flexCheckDefault">
									Poda
								</label>
							</li>
							<li>
								<input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
								<label className="form-check-label" htmlFor="flexCheckDefault">
									Sustrato
								</label>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
