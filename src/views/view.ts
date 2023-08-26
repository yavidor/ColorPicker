import { Get, Entity } from "../types/returnTypes";

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
    // const tableContainer = document.getElementById("table-container")!;
    const table = document.getElementById("myTable")!;
    const headersRow = document.createElement("tr")!;
    const idHeader = document.createElement("th");
    idHeader.innerText = "_id";
    const firstNameHeader = document.createElement("th");
    firstNameHeader.innerText = "first_name";
    const lastNameHeader = document.createElement("th");
    lastNameHeader.innerText = "last_name";
    const colorHeader = document.createElement("th");
    colorHeader.innerText = "color";
    headersRow.appendChild(idHeader);
    headersRow.appendChild(firstNameHeader);
    headersRow.appendChild(lastNameHeader);
    headersRow.appendChild(colorHeader);
    table.appendChild(headersRow);
    (message as Array<Entity>).forEach((entity) => {
      console.log(table, headersRow, entity);
      const row = document.createElement("tr");
      const idCell = document.createElement("td");
      // eslint-disable-next-line no-underscore-dangle
      idCell.innerText = entity._id;
      const firstNameCell = document.createElement("td");
      firstNameCell.innerText = entity.first_name;
      const lastNameCell = document.createElement("td");
      lastNameCell.innerText = entity.last_name;
      const colorCell = document.createElement("td");
      colorCell.innerText = entity.color;
      row.appendChild(idCell);
      row.appendChild(firstNameCell);
      row.appendChild(lastNameCell);
      row.appendChild(colorCell);
      table.appendChild(row);

      // headersRow.
    });
  };
  buttonGet.addEventListener("click", () => fetch("http://localhost:8080/db/read").then((res: Response) => res.json()).then(drawTable));
  // buttonDelete.addEventListener("click", () => fetch("http://localhost:8080/db/delete", {
  //   method: "DELETE",
  // }).then((res: Response) => res.json()).then(console.log));
  submit.addEventListener("click", () => fetch("http://localhost:8080/db/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(
      { first_name: firstName.value, last_name: lastName.value, color: picker.value },
    ),
  }).then(
    async (res: Response) => console.log(await res.text()),
  ));
};
