import { Observable, Observer, Subscriber, Subject } from "rxjs";

const observer: Observer<any> = {
  next: valor => console.log("siguiente:", valor),
  error: error => console.warn("error:", error),
  complete: () => console.info("completado")
};
const intervalo$ = new Observable<number>(subs => {
  const intervalID = setInterval(() => subs.next(Math.random()), 1000);
  // para limpiar el intervalo
  return () => {
    clearInterval(intervalID);
    console.log("intervalo destruido");
  };
});

/** EL objeto Subject caracteristica principales del subject
 * 1- Casteo múltiple
 * 2- Tambien es un observer
 * 3- Next, error, y complete
 */

const subject$ = new Subject();
const subcripcion = intervalo$.subscribe(subject$);

// const subs1 = intervalo$.subscribe(rnd => console.log("subs1", rnd));
// const subs2 = intervalo$.subscribe(rnd => console.log("subs2", rnd));

const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);

setTimeout(() => {
  subject$.next(10);
  subject$.complete();
  subcripcion.unsubscribe();
}, 3500);
