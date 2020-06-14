// ejercicio resuelto 1
import { from } from "rxjs";
import { map } from "rxjs/operators";

(() =>{


  const nombres = ['batman', 'joker', 'doble cara', 'pingüino', 'hiedra venenosa'];

  const capitalizar = (nombre: string) => nombre.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());

  const origenObservable$ = from(nombres)

  origenObservable$.pipe(
    //map<string, string>(nom => capitalizar(nom))
    map(capitalizar)

  )
  .subscribe(console.log);

})();
