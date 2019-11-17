import { Observable, Observer } from "rxjs";

// esto es poco comun o como se hacia ante const obs$ = Observable.create();

const observer: Observer<any> = {
  next: valor => console.log("siguinte [next]:", valor),
  error: error => console.warn("error [obs]:", error),
  complete: () => console.info("completado [obs]")
};
const obs$ = new Observable<string>(subs => {
  subs.next("hola");
  subs.next("mundo");

  subs.next("hola");
  subs.next("mundo");

  //     // Forzar un error
  //   const a = undefined;
  //   a.nombre = "Darwin";

  subs.complete();

  subs.next("hola");
  subs.next("mundo");
});
// este una manera pero tambie
//  obs$.subscribe(resp => console.log(resp));
// en lo mismo y mas directo asi:
// obs$.subscribe(console.log);

obs$.subscribe(observer);
// obs$.subscribe(
//   valor => console.log("next: ", valor),
//   error => console.warn("error: ", error),
//   () => console.info("Completado")
// );
