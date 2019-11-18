import { fromEvent } from "rxjs";
import { map, tap } from "rxjs/operators";

// vamos a crear html solo javascrips
const texto = document.createElement("div");
texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam erat felis, sollicitudin at pellentesque sed, molestie eget diam. Nulla convallis quis lectus a accumsan. Vivamus et pretium lacus. Duis lobortis at dui vel finibus. Etiam ac sollicitudin ipsum, et cursus urna. Vestibulum eget nisi vel libero aliquam accumsan in vitae diam. Curabitur hendrerit lectus at mattis condimentum. Praesent non velit quis risus pellentesque ultricies vitae eget erat. Donec maximus venenatis odio vel feugiat. Sed elementum justo diam, ac suscipit velit facilisis ac. Donec sed sollicitudin ipsum, a semper mi. Aliquam lacinia lorem non nisl vehicula, a consectetur tortor euismod. Duis sollicitudin, justo luctus pretium laoreet, dui justo sollicitudin sapien, eu feugiat lorem purus at mi. Donec fermentum ornare turpis volutpat laoreet.
<br/><br/>
Etiam ac eros tincidunt, cursus turpis vel, gravida diam. Nulla lectus purus, vulputate quis condimentum euismod, ullamcorper sed nisl. Mauris suscipit sem quis nisi bibendum, vitae malesuada erat facilisis. Sed sit amet hendrerit odio, eget imperdiet erat. Phasellus ullamcorper malesuada velit. Nullam sagittis vehicula velit, commodo lobortis ligula porttitor eu. Etiam dapibus, tortor non aliquam pretium, lorem nibh semper orci, lobortis rhoncus arcu nunc id mi. In hac habitasse platea dictumst. Maecenas vel nisl ullamcorper libero iaculis sodales vel eget neque. Aenean sodales magna non quam imperdiet, eget rhoncus turpis interdum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc neque diam, tincidunt vel imperdiet vitae, finibus id ligula. Quisque facilisis ex et faucibus euismod.
<br/><br/>
Sed ornare vehicula felis sed bibendum. Phasellus ut ligula condimentum, mollis lorem sed, ultricies mi. Nunc aliquam sem eu laoreet laoreet. Aliquam erat ex, consectetur et tellus et, dignissim porta nisi. Aliquam facilisis, purus sit amet facilisis consectetur, risus sapien imperdiet nunc, nec consequat elit sapien sit amet turpis. Donec a nunc in enim aliquam scelerisque. Phasellus vel volutpat nisl. Pellentesque pellentesque magna lacus, ullamcorper lobortis neque maximus id.
<br/><br/>
Nunc condimentum vehicula nisi, eu tincidunt purus mattis sed. Integer id blandit massa. Donec mollis efficitur ex et aliquet. Mauris quis sollicitudin lacus. Nullam nec fermentum mauris. Cras ut nisl placerat, ornare sem vitae, tempor dui. Sed nulla tortor, vestibulum fringilla turpis non, accumsan condimentum lorem.
<br/><br/>
Nulla euismod tortor eu nibh lobortis, et condimentum odio tincidunt. Quisque id neque eget nulla efficitur semper. Cras lacus urna, lacinia ut hendrerit vitae, pretium sit amet massa. Mauris faucibus lacus id sagittis posuere. Curabitur tempus justo ante, eu consectetur odio mattis eget. Etiam non rhoncus nunc. Cras sed porttitor mi, eget sodales justo. Nunc vulputate nisl sit amet ultrices ultrices. Nullam vel quam sed sem facilisis lobortis id ac urna. Praesent pellentesque ante euismod dui interdum, ut lacinia tortor tincidunt. Praesent sed consequat lectus. Ut et dolor odio.
`;
const body = document.querySelector("body");
body.append(texto);

const progressBar = document.createElement("div");
progressBar.setAttribute("class", "progress-bar");
body.append(progressBar);

// funcion que va realizar el calculo de progessbar
const calcularProcentajeScroll = evento => {
  console.log(evento);
  const {
    scrollTop,
    scrollHeight,
    clientHeight
  } = evento.target.documentElement;
  console.log({ scrollTop, scrollHeight, clientHeight });
  return (scrollTop / (scrollHeight - clientHeight)) * 100;
};

// Streams para los Obseervables
const scroll$ = fromEvent(document, "scroll");
// scroll$.subscribe(console.log);

const progresos$ = scroll$.pipe(
  // map(evento => calcularProcentajeScroll(evento))
  map(calcularProcentajeScroll),
  tap(console.log)
);
progresos$.subscribe(porcentaje => {
  progressBar.style.width = `${porcentaje}%`;
});
