 window.onload=inicio;

const NOMBRECORRECTO="RAMON"


function inicio(){
  //beforeend que lo ponga al final del bodi
    document.querySelector("body").insertAdjacentHTML("beforeend",
    `
    <input id="campo" type="text"/>
    <button>Aceptar</button>
    <div id="saludo"></div>`);
    //se ejecuta cuando usuario hace click en boton
    document.querySelector("button").onclick=leer;
}

// value solo para inputs y innerHTML para cajas divs
function leer(){
  //creo variable y le digo qu la variable sea igual  a lo que el usuario a escrito dentro del input id campo con .value veo valor de la caja que ha escrito usuario
  let nombre = (document.querySelector("#campo").value);//# es id   : se pone aqui esta linea no arriba sino da fallo
  let nombreMayusculas=nombre.toUpperCase();
  let nombreFormateado=nombre.substr(0,1).toUpperCase() + nombre.substr(1).toLowerCase();


  if (nombreMayusculas == NOMBRECORRECTO) {
      document.querySelector("#saludo").innerHTML = `Hola ${nombreFormateado} <button id="boton">IR A LA WEB</button>`;

      //le digo cuando nombre correcto me haga esto extra
      document.querySelector("#boton").onclick=acceder;

    }else{
      document.querySelector("#saludo").innerHTML ="";
      //escribir contenido de un input
      document.querySelector("#campo").value="";
      document.querySelector("#campo").focus();

  }


/*
  let nombre = document.querySelector("#campo").value;
  //creamos contenido :que valla ha #saludo y borre lo que hay y le añada lo que yo le ponga `Hola ${nombre}`;
  document.querySelector("#saludo").innerHTML = `Hola ${nombre}`;
  */
}


function acceder(){
    location.href="http://www.html6.es";
}
