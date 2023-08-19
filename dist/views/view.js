"use strict";
// import { fetch } from 'node-fetch'
window.onload = () => {
    const picker = document.getElementById("colorpicker");
    const submit = document.getElementById("submit");
    picker.addEventListener("change", (event) => (console.log(event.target.value)));
    submit.addEventListener("click", () => fetch("http://localhost:8080/add").then(async (a) => console.log(await a.text())));
};
