/* Obtener referencias al parrafo y al botton */

const color = document.getElementById("color")
const button = document.getElementById("button")

/* Manejar el Evento */

button.addEventListener( "click", cambiarColor)

/* Definimos la funcion */

function cambiarColor () {
  /* Codigo que se ejecuta */

  /* Funcion Anidada */
  function colores(){
    /* Codigo que se ejecuta */
  const opciones = "0123456789ABCDEF";
  let colorHex = "#";

  /* Recorer el string opciones */
  for (let i = 0 ; i < 6 ; i++) {
    let indiceAleatorio = Math.floor(Math.random()* 16) ;
    colorHex += opciones[indiceAleatorio];
  }

  return colorHex;
}

let colorAleratorio = colores() ;
/* Actualiza el texto */
color.textContent = colorAleratorio
/* Actualiza el color de fondo */
document.body.style.backgroundColor = colorAleratorio
}