// import { fetch } from 'node-fetch'
window.onload = () => {
  const picker = document.getElementById("colorpicker")! as HTMLInputElement;
  const firstName = document.getElementById("firstName")! as HTMLInputElement;
  const lastName = document.getElementById("lastName")! as HTMLInputElement;
  const submit = document.getElementById("submit")!;
  picker.addEventListener("change", (event) => (
    console.log((event.target as HTMLInputElement).value)
  ));
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
