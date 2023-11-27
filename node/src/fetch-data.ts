import { writeFileSync } from "fs";

async function fetchData() {
  const res = await fetch("http://go:8080/words");
  const data = await res.json();
  writeFileSync("./dist/output.json", JSON.stringify(data, null, 2));
}

fetchData();
