import React from "react";
import PropTypes from "prop-types";

const plantsCard = props => {
	return (
		<div className="card" style={{ width: "100%" }}>
			<img className="img-fluid" src={props.image} alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title text-truncate">{props.name}</h5>
				<p className="card-text">{props.scientName}</p>
				<div className="d-flex justify-content-end align-items-center">
					<button className="btn btn-sm btn-success mr-2">
						Sembrar <i className="fas fa-seedling ml-1"></i>
					</button>
					<button className="btn btn-sm btn-danger text-white">
						<i className="far fa-heart"></i>
					</button>
				</div>
			</div>
		</div>
	);
};

plantsCard.propTypes = {
	name: PropTypes.string,
	scientName: PropTypes.string,
	image: PropTypes.string
};

export default plantsCard;
