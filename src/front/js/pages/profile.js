import React, { Component, useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import UserProfile from "../component/profile";

export function Profile() {
	return (
		<div>
			<UserProfile
				image="https://img.icons8.com/bubbles/100/000000/user.png"
				name="Alberto"
				profesion="Jardinero"
				hobbies="Lorem ipsum dolor sit amet consectetur"
				description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet aliquam saepe illo reiciendis."
				location="Algun lugar"
				phone="3123123123123"
			/>
		</div>
	);
}
