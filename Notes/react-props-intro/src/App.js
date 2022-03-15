import React from "react";
// Import two child components
import SayHello from "./components/SayHello/SayHello";
import SayGoodbye from "./components/SayGoodBye/SayGoodbye";

const App = () => {
    return (
        <div className="container">
            {/* Pass props to the child components */}
            <SayHello firstName="Jamie" age={35} />
            <SayHello firstName="Bob" age={77} />
            <SayHello firstName="Sarah" age={24} />
            <SayGoodbye days={3} />
            <SayGoodbye days={10} />
        </div>
    );
}

export default App;