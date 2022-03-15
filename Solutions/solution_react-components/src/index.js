import React from "react";
import ReactDOM from "react-dom";

const data = {
	image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Thom_Yorke_Austin_Texas_2016_%28cropped%29.jpg/220px-Thom_Yorke_Austin_Texas_2016_%28cropped%29.jpg",
	cardTitle: "Thom Yorke",
	cardDescription: "Thomas Edward Yorke (born 7 October 1968) is an English musician and the main vocalist and songwriter of the rock band Radiohead. A multi-instrumentalist, he mainly plays guitar and keyboards and is noted for his falsetto.",
	button: {
		url: "https://en.wikipedia.org/wiki/Thom_Yorke",
		label: "Go to wikipedia"
	}
};

const BootstrapCard = () => {
	return (
		<div className="card m-5" style={ {width: "18rem"} }>
			<img className="card-img-top" src={data.image} alt="Thom Yorke" />
			<div className="card-body">
				<h5 className="card-title">{data.cardTitle}</h5>
				<p className="card-text">{data.cardDescription}</p>
				<a href={data.button.url} class="btn btn-primary">{data.button.label}</a>
			</div>
		</div>
	);
}

const content = (
	<>
		<BootstrapCard />
		<BootstrapCard />
		<BootstrapCard />
	</>
);

const root = document.querySelector("#root");

ReactDOM.render(content, root);