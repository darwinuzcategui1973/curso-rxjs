import { Observable, Observer, Subscriber } from "rxjs";
import { setTimeout } from "timers";

const observer: Observer<any> = {
  next: valor => console.log("siguiente:", valor),
  error: error => console.warn("error:", error),
  complete: () => console.info("completado")
};

const intervalo$ = new Observable<number>(subscriber => {
  // crear un contador 1,2,3,4,5,......
  let contador: number = 0;
  const intervalo = setInterval(() => {
    // cada segundo
    contador++;
    subscriber.next(contador);
    console.log(contador);
  }, 1000);

  setTimeout(() => {
    subscriber.complete();
  }, 2500);

  // para destruir el intervalo
  return () => {
    clearInterval(intervalo);
    console.log("Intervalo destruido");
  };
});

const subs1 = intervalo$.subscribe(num => console.log("Num:", num));
const subs2 = intervalo$.subscribe(num => console.log("Num:", num));
const subs3 = intervalo$.subscribe(num => console.log("Num:", num));

setTimeout(() => {
  subs1.unsubscribe();
  subs2.unsubscribe();
  subs3.unsubscribe();
  console.log("completado el timeout");
}, 3500);

const nombre: string = "Darwin Uzcategui";
console.log(nombre);
