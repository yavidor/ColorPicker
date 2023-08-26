import { Entity, Get } from "../types/returnTypes";

window.onload = () => {
  const picker = document.getElementById("colorpicker")! as HTMLInputElement;
  const firstName = document.getElementById("firstName")! as HTMLInputElement;
  const lastName = document.getElementById("lastName")! as HTMLInputElement;
  const submit = document.getElementById("submit")!;

  const buttonGet = document.getElementById("get") as HTMLButtonElement;
  // const buttonDelete = document.getElementById("delete") as HTMLButtonElement;

  picker.addEventListener("change", (event) => (
    console.log((event.target as HTMLInputElement).value)
  ));

  const drawTable = ({ message }: Get) => {
    console.log(message);
    console.log(typeof message);
    const tableContainer = document.getElementById("table-container")!;
    const table = document.createElement("table")!;
    const headersRow = document.createElement("tr")!;
    (message as Array<Entity>).forEach((entity) => {
      console.log(tableContainer, table, headersRow, entity);
    });
  };
  buttonGet.addEventListener("click", () => fetch("/db/read").then((res: Response) => res.json()).then(drawTable));
  // buttonDelete.addEventListener("click", () => fetch("http://localhost:8080/db/delete", {
  //   method: "DELETE",
  // }).then((res: Response) => res.json()).then(console.log));
  submit.addEventListener("click", () => fetch("/db/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(
      { first_name: firstName.value, last_name: lastName.value, color: picker.value },
    ),
  }).then(
    async (res: Response) => console.log(await res.text()),
  ));
};
