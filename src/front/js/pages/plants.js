import React, { useContext } from "react";
import { Context } from "../store/appContext";
import PlantCard from "../component/plantCard";

function RenderPlants() {
	const { store } = useContext(Context);

	const plants = store.plants.map((plant, index) => {
		return (
			<div className="col-sm-4" key={index}>
				<PlantCard
					name={plant.name}
					scientName={plant.scientName}
					fullScientName={plant.full_scient}
					category={plant.category}
					year={plant.year}
					image="https://images.unsplash.com/photo-1419064642531-e575728395f2?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=76d5c793e4f8d02d7a9be27bc71256f7"
				/>
			</div>
		);
	});

	return <div className="row">{plants}</div>;
}

export const Plants = props => {
	return (
		<div className="m-5">
			<div className="row mt-5">
				<RenderPlants />
			</div>
		</div>
	);
};
