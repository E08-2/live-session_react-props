import React from "react";
import BootstrapCard from "./components/BootstrapCard";

// Define data object
const data = [
	// Object 1 - data[0]
	{
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Bob_Dylan_-_Azkena_Rock_Festival_2010_2.jpg/800px-Bob_Dylan_-_Azkena_Rock_Festival_2010_2.jpg",
		cardTitle: "Bob Dylan",
		cardDescription:
			"Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer-songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.",
		button: {
			url: "https://en.wikipedia.org/wiki/Bob_Dylan",
			label: "Go to Bob Dylan's wikipedia page"
		}
	},
	// Object 2 - data[1]
	{
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Thom_Yorke_Austin_Texas_2016_%28cropped%29.jpg/220px-Thom_Yorke_Austin_Texas_2016_%28cropped%29.jpg",
		cardTitle: "Thom Yorke",
		cardDescription: "Thomas Edward Yorke (born 7 October 1968) is an English musician and the main vocalist and songwriter of the rock band Radiohead. A multi-instrumentalist, he mainly plays guitar and keyboards and is noted for his falsetto.",
		button: {
			url: "https://en.wikipedia.org/wiki/Thom_Yorke",
			label: "Go to Thom Yorke's wikipedia page"
		}
	},
	// Object 3 - data[2]
	{
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Joanna_Newsom_%283629732573%29.jpg/800px-Joanna_Newsom_%283629732573%29.jpg",
		cardTitle: "Joanna Newsom",
		cardDescription:
			"Joanna Caroline Newsom (born January 18, 1982) is an American multi-instrumentalist, singer-songwriter, and actress. Born and raised in Northern California, Newsom was classically trained on the harp in her youth, and began her musical career as a keyboardist in the San Francisco–based indie band the Pleased.",
		button: {
			url: "https://en.wikipedia.org/wiki/Joanna_Newsom",
			label: "Go to Joanna Newsom's wikipedia page"
		}
	}
]

const App = () => {
	return (
		// The parent can pass props containing data down to the child
		<>
			<BootstrapCard
				image={data[0].image}
				cardTitle={data[0].cardTitle}
				cardDescription={data[0].cardDescription}
				button={data[0].button}
			/>
			
			<BootstrapCard
				image={data[1].image}
				cardTitle={data[1].cardTitle}
				cardDescription={data[1].cardDescription}
				button={data[1].button}
			/>

			<BootstrapCard
				image={data[2].image}
				cardTitle={data[2].cardTitle}
				cardDescription={data[2].cardDescription}
				button={data[2].button}
			/>
		</>
	);
}

export default App;