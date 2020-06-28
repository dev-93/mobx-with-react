import React from "react";
import Counter from "./Components/Counter";
import SuperMarket from "./Components/SuperMartket";
import DevTools from "mobx-react-devtools";

function App() {
    return (
        <div className="App">
            <Counter />
            <hr />
            <SuperMarket />
            {process.env.NODE_ENV === "development" && <DevTools />}
        </div>
    );
}

export default App;
