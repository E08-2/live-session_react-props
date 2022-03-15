import React from "react";

// Now use props parameter to access props from the parent component
const SayHello = props => {
    return <p>Hello {props.firstName}, you are {props.age} years old!</p>;
}

export default SayHello;