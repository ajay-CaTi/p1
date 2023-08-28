import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", {}, "I am child");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

export default App2;
