import React from "react";
import ReactDOM from "react-dom";
import {App} from "./App";

document.addEventListener("DOMContentLoaded", () => {
    startApp();
}, false);

function render(Component) {
    const rootElement = document.getElementById("app");
    return new Promise((resolve) => ReactDOM.render(Component, rootElement, resolve));
}

function startApp() {
    render(
        <App/>
    );
}