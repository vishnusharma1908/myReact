import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";



 

  // not using key (not acceptable) <<< index as key <<< unique id (best practice)




const AppLayout = () =>
{
    return (
        <div className="app">
            <Header/>
            <Body />
        </div>
    )
}

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
