import React from "react";
import Counter from "./Components/Counter";
import SuperMarket from "./Components/SuperMartket";
import DevTools from "mobx-react-devtools";

function App() {
    return (
        <div className="App">
            <SuperMarket />
            {process.env.NODE_ENV === "production" && <DevTools />}
        </div>
    );
}

export default App;
