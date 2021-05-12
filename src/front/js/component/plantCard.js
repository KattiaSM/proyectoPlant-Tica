import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from ".././store/appContext";
import PropTypes from "prop-types";

const plantsCard = props => {
	const { actions } = useContext(Context);
	const history = useHistory();

	const moveData = (name, url) => {
		actions.changeInitialName(name);
		actions.changeName(name);
		actions.changeInitialURL(url);
		actions.restoreDataToModify(url);

		history.push("/create");
	};

	const addFav = props => {
		actions.addFav({
			scientific_name: props.scientName,
			data1: props.name,
			data2: props.year,
			data3: props.category,
			data4: props.fullScientName,
			url: props.image
		});
	};

	const renderButtons = props => {
		if (store.token) {
			<div className="d-flex justify-content-end align-items-center">
				<button className="btn btn-sm btn-success mr-2" onClick={() => moveData(props.scientName, props.image)}>
					Sembrar <i className="fas fa-seedling ml-1"></i>
				</button>
				<button className="btn btn-sm btn-danger text-white" onClick={() => addFav(props)}>
					<i className="far fa-heart"></i>
				</button>
			</div>;
		}
	};

	return (
		<div className="card" style={{ width: "100%" }}>
			<img className="img-fluid" src={props.image} alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title text-truncate">{props.name}</h5>
				<p className="card-text">{props.scientName}</p>
				<renderButtons />
			</div>
		</div>
	);
};

plantsCard.propTypes = {
	name: PropTypes.string,
	scientName: PropTypes.string,
	fullScientName: PropTypes.string,
	image: PropTypes.string,
	category: PropTypes.string,
	year: PropTypes.string
};

export default plantsCard;
