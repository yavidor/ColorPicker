// import { fetch } from 'node-fetch'
window.onload = () => {
  const picker = document.getElementById("colorpicker")!;
  const submit = document.getElementById("submit")!;
  picker.addEventListener("change", (event) => (
    console.log((event.target as HTMLInputElement).value)
  ));
  submit.addEventListener("click", () => fetch("http://localhost:8080/db/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      foo: "bar",
    }),
  }).then(
    async (a: Response) => console.log(await a.text()),
  ));
};
