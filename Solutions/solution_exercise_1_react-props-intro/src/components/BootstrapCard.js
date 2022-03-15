import React from "react";

// Create a functional component
const BootstrapCard = props => {
	return (
		<div className="card m-5" style={ {width: "18rem"} }>
			<img className="card-img-top" src={ props.image } alt={`${props.cardTitle} singing`}></img>
			<div className="card-body">
				<h5 className="card-title">{ props.cardTitle }</h5>
				<p className="card-text">{ props.cardDescription }</p>
				<a href={ props.button.url } className="btn btn-primary">{ props.button.label }</a>
			</div>
		</div>
	);
}

export default BootstrapCard;