import rigoImage from "../../img/rigo-baby.jpg";

import "../../styles/home.scss";

import React, { useState } from "react";
import {
	Carousel,
	CarouselItem,
	CarouselControl,
	CarouselIndicators,
	CarouselCaption,
	Toast,
	ToastBody,
	ToastHeader,
	Jumbotron,
	Button
} from "reactstrap";
import { Link } from "react-router-dom";

const items = [
	{
		src: "https://i0.wp.com/broadforkfarm.com/wp-content/uploads/2017/01/1-IMG_4544.jpg?resize=3000%2C500&ssl=1",
		altText: "¡Gracias por visitarnos!",
		caption: "Plant-tica es totalmente gratuito"
	},
	{
		src: "https://images.discerningassets.com/image/upload/q_auto:best/v1581391572/Columbine01_ntytbn.jpg",
		altText: "Descubrí con Plant-Tica",
		caption: "tu pasión por las plantas"
	},
	{
		src:
			"https://cdn.shopify.com/s/files/1/0082/2345/7365/collections/Live_Plant_Collection_Image_3780x630.jpg?v=1580399808",
		altText: "Organiza con Plant-Tica",
		caption: "tu huerta o jardín"
	}
];

export function Home() {
	const [activeIndex, setActiveIndex] = useState(0);
	const [animating, setAnimating] = useState(false);

	const next = () => {
		if (animating) return;
		const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
		setActiveIndex(nextIndex);
	};

	const previous = () => {
		if (animating) return;
		const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
		setActiveIndex(nextIndex);
	};

	const goToIndex = newIndex => {
		if (animating) return;
		setActiveIndex(newIndex);
	};

	const slides = items.map(item => {
		return (
			<CarouselItem onExiting={() => setAnimating(true)} onExited={() => setAnimating(false)} key={item.src}>
				<img src={item.src} alt={item.altText} />
				<CarouselCaption captionText={item.caption} captionHeader={item.altText} />
			</CarouselItem>
		);
	});

	return (
		<div className="text-center m-5">
			<div className="w-100 mb-3">
				<Carousel activeIndex={activeIndex} next={next} previous={previous}>
					<CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
					{slides}
					<CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
					<CarouselControl direction="next" directionText="Next" onClickHandler={next} />
				</Carousel>
			</div>
			<div className="container d-flex justify-content-center pt-3">
				<div className="row d-flex justify-content-center">
					<div className="col-12">
						<Jumbotron>
							<h1 className="display-3">Gracias por visitar Plant-Tica</h1>
							<p className="lead">
								Un espacio para aprender y compartir sobre plantas de Costa Rica... y ¿por qué no?
								empezar a tener tu propio jardín con esas planticas 🇨🇷 que siempre has querido.
							</p>
							<p className="lead">
								<strong>¿Ya tenés tu huerta o jardín?</strong>
							</p>
							<hr className="my-2" />
							<p className="mt-3">
								<h5>
									En plant-tica te ayudamos y motivamos a seguir cuidándolo y además mostrarlo para
									que
								</h5>
								<h4>más gente lo pueda apreciar</h4>
							</p>
							<Button color="success" className="mt-3 text-light">
								<Link to="/register" className="text-light">
									¡Registrarme!
								</Link>
							</Button>
						</Jumbotron>
					</div>
				</div>
			</div>
		</div>
	);
}
