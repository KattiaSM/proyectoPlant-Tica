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
					image="https://s3.amazonaws.com/lahora.prod/file/2018/04/10071951/SAL12_1-1.jpg"
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
