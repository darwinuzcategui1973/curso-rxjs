import { ajax } from "rxjs/ajax";

const url = "https://httpbin.org/delay/1";

ajax
  .post(
    url,
    {
      id: 1,
      nombre: "Darwin"
    },
    {
      "mi-token": "ABC123"
    }
  )
  .subscribe(console.log);

ajax
  .put(
    url,
    {
      id: 2,
      nombre: "Darwin Felipe"
    },
    {
      "mi-token": "DEF456"
    }
  )
  .subscribe(console.log);

ajax({
  url: url,
  method: "DELETE",
  headers: {
    "mi-token": "ABD1235678"
  },
  body: {
    id: 22,
    nombre: "Darwin"
  }
}).subscribe(console.log);
