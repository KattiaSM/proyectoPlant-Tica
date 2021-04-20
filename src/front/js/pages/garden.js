import React, { Component, useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export function Garden() {
	return (
		<div className="m-5">
			<h1>HOLA! TRABAJÁ ACÁ EL GARDEN</h1>
		</div>
	);
}
