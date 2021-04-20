import rigoImage from "../../img/rigo-baby.jpg";

import "../../styles/home.scss";

import React, { useState } from "react";
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from "reactstrap";

const items = [
	{
		src: "https://i0.wp.com/broadforkfarm.com/wp-content/uploads/2017/01/1-IMG_4544.jpg?resize=3000%2C500&ssl=1",
		altText: "¡Gracias por visitarnos!",
		caption: "Plant-tica es totalmente gratuito"
	},
	{
		src: "https://images.discerningassets.com/image/upload/q_auto:best/v1581391572/Columbine01_ntytbn.jpg",
		altText: "Slide 2",
		caption: "Slide 2"
	},
	{
		src:
			"https://cdn.shopify.com/s/files/1/0082/2345/7365/collections/Live_Plant_Collection_Image_3780x630.jpg?v=1580399808",
		altText: "Slide 3",
		caption: "Slide 3"
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
					<div className="col-4">
						<div className="card m-1">
							<h5 className="card-title m-1">Aprendizaje</h5>
							<img
								src="https://s1.1zoom.me/prev/579/Abstraction_Vector_Graphics_Texture_578280_600x400.jpg"
								className="card-img-top pt-1"
								alt="..."
							/>
							<div className="card-body">
								<p className="card-text">
									Utú es un banco de preguntas para las pruebas de aptitud académica de las
									universidades públicas de Costa Rica.
								</p>
							</div>
						</div>
					</div>
					<div className="col-4">
						<div className="card m-1">
							<h5 className="card-title m-1">Práctica</h5>
							<img
								src="https://s1.1zoom.me/prev/579/Abstraction_Vector_Graphics_Texture_578280_600x400.jpg"
								className="card-img-top pt-1"
								alt="..."
							/>
							<div className="card-body">
								<p className="card-text">
									Utú es una plataforma gratuita, creada con el fin de ofrecer a los costarricenses un
									medio de práctica para las pruebas.
								</p>
							</div>
						</div>
					</div>

					<div className="col-4">
						<div className="card m-1">
							<h5 className="card-title m-1">Mejora</h5>
							<img
								src="https://s1.1zoom.me/prev/579/Abstraction_Vector_Graphics_Texture_578280_600x400.jpg"
								className="card-img-top pt-1"
								alt="..."
							/>
							<div className="card-body">
								<p className="card-text">
									Utú está trabajando para ofrecer a futuro las explicaciones de los enunciados dentro
									de la plataforma.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
