import React from "react";
import ReactDOM from "react-dom/client";

/* 
Just for Practice,Not Ideal Practice 
*/

//React.createElement => ReactElement(JS Object) => HTMLElement(render)

//Code using proper react
const heading = React.createElement("h1",{id:"heading"},"Episode 3");

//JSX  - is not HTML in JS (HTML or XML like syntax)

//JSX (transpiled before it reaches the JS Engine) - PARCEL - BABEL

//JSX =>Babel transpiles it to React.createElement => ReactElement(JS Object) => HTMLElement(render)
const jsxHeading =( 
    <h1 id="heading" className="heading" tabIndex="1">
    Jsx Heading Episode 3 
    </h1>
    );

    //React Component
    //1)class based components -Old way
    //2)functional componets -new way

    //React functional component
    const Title = () => (
        <h2>Heading under main Function</h2>
    );

    const elem = <span>React Element</span>;

    //React Element
    const elementheading = (
        <h1 id="elementHeading">
            {elem}
            Element Heading</h1>
    );

    //React functional component
    const HeadingComponent = () => (
        <div id="container">
         <h1>Function based component</h1>
         <Title />
         <Title> </Title>
         {Title()}
         <h3>{HeadingComponent.innerHTML="We can write any JS expression in this braces"}</h3>
         {elementheading}
         </div>
    );

    

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
