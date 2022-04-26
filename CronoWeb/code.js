var s = 0,
  m = 0,
  h = 0;
  
var minsActivados = false;
var pararTiempo = true;

var tiempoVerde = 0,
  tiempoRojo = 0;
var cambiarVerde = true,
  estadoVerde = true;
var tiempoVerdeInicial = 0,
  tiempoRojoInicial = 0;


var verInter, verApar, verPre;
var tituloInter, tituloApar, tituloPre, btnsPre, btnsApar, btnsInter;



addEventListener("load", function myFunction() {
  tituloInter = document.getElementById("tituloInter");
  tituloApar = document.getElementById("tituloApar");
  tituloPre = document.getElementById("tituloPre");
  btnsPre = document.getElementById("btnsPre");
  btnsApar = document.getElementById("btnsApar");
  btnsInter = document.getElementById("btnsInter");
  ComprobarTiempo();


})

function CambiarInter() {
  if (verInter) {
    btnsInter.style.display = "block";
    tituloInter.style.position = "relative";
    tituloInter.style.top = "0px";
  } else {
    btnsInter.style.display = "none";
    tituloInter.style.position = "relative";
    tituloInter.style.top = "269px";
  }
  verInter = !verInter;
}

function CambiarApar() {
  if (verApar) {
    btnsApar.style.display = "block";
    tituloApar.style.position = "relative";
    tituloApar.style.top = "0px";
  } else {
    btnsApar.style.display = "none";
    tituloApar.style.position = "relative";
    tituloApar.style.top = "269px";
  }
  verApar = !verApar;
}

function CambiarPre() {
  if (verPre) {
    btnsPre.style.display = "block";
    tituloPre.style.position = "relative";
    tituloPre.style.top = "0px";
  } else {
    btnsPre.style.display = "none";
    tituloPre.style.position = "relative";
    tituloPre.style.top = "269px";
  }
  verPre = !verPre;
}

function CambiarMinutos() {
  if (document.getElementById("rango").value == 1) {
    minsActivados = true;
  } else {
    minsActivados = false;
  }
}

let tiempo = setInterval(Tiempear, 1000);

function Tiempear() {

  if (minsActivados == false) {
    s++;

    if (s >= 0) {
      var hAux, mAux, sAux;
      if (s == 60) {
        m++;
        s = 0;
      }
      if (m == 60) {
        h++;
        m = 0;
      }

      if (s < 10) {
        sAux = "0" + s;
      } else {
        sAux = s;
      }
      if (m < 10) {
        mAux = "0" + m;
      } else {
        mAux = m;
      }
      if (h >= 1) {
        if (h < 10) {
          hAux = "0" + h;
        } else {
          hAux = h;
        }
        document.getElementById("tiempoText").innerHTML = hAux + ": " + mAux + ":" + sAux;

      } else {
        document.getElementById("tiempoText").innerHTML = mAux + ":" + sAux;
      }
    }
  } else {
    s++;
    console.log(s);
    if (s == 60) {
      m++;
      s = 0;
    }
    if (m >= 0) {
      var hAux, mAux;
      if (m == 60) {
        h++;
        m = 0;
      }

      if (m < 10) {
        mAux = "0" + m;
      } else {
        mAux = m;
      }
      if (h < 10) {
        hAux = "0" + h;
      } else {
        hAux = h;
      }
      document.getElementById("tiempoText").innerHTML = hAux + ":" + mAux;

    }
  }

  //console.log("valorV: " + document.getElementById("progreso").value+ ", " + document.getElementById("progreso").max);
  //console.log("tiempoVerde: "+ tiempoVerde + ", tiempoRojo: " + tiempoRojo + ", cambiarVerde: "+ cambiarVerde);
  //console.log(estadoVerde);
  //console.log("verde: "+ tiempoVerde+ ", rojo: "+ tiempoRojo);

  switch (estadoVerde) {
    case true:
      if (tiempoVerde > 0) {
        tiempoVerde--;
        if (tiempoVerde == 0) {
          Alerta("rojo");
          document.getElementById("progreso").style.backgroundColor = "#FF3838";
          var style = document.createElement("style");
          document.head.appendChild(style);
          sheet = style.sheet;
          sheet.addRule('.progreso::-webkit-slider-thumb', 'background: #8EFF8E');
          sheet.insertRule('.progreso::-webkit-slider-thumb { background: #FF3838 }', 0);
          tiempoRojo = tiempoRojoInicial;
          estadoVerde = false;
        }
      }
      break;
    case false:
      if (tiempoRojo > 0) {
        tiempoRojo--;
        if (tiempoRojo == 0) {
          Alerta("verde");
          document.getElementById("progreso").style.backgroundColor = "#8EFF8E";
          var style = document.createElement("style");
          document.head.appendChild(style);
          sheet = style.sheet;
          sheet.addRule('.progreso::-webkit-slider-thumb', 'background: #FF3838');
          sheet.insertRule('.progreso::-webkit-slider-thumb { background: #8EFF8E }', 0);
          tiempoVerde = tiempoVerdeInicial;
          estadoVerde = true;
        }
      }
      default:

  }
  Progresar();
}

function ActualizarContador(color) {
  if (color == "verde") {
    document.getElementById("numberInput").value = tiempoVerde;
  }
  if (color == "rojo") {
    document.getElementById("numberInput").value = tiempoRojo;
  }
}

addEventListener("keydown", function myFunction(key) {

  if (key.keyCode == 32) {
    pararTiempo = !pararTiempo;
    document.getElementById("tutoText").style.display = "none";
    ComprobarTiempo();
  }
})

function ComprobarTiempo() {
  if (pararTiempo) {
    clearInterval(tiempo);
    document.getElementById("tiempoText").style.opacity = 0.6;
  } else {
    tiempo = setInterval(Tiempear, 1000);
    document.getElementById("tiempoText").style.opacity = 1;

  }
}

function AñadirTiempo(t) {
  if (cambiarVerde) {
    if (t > 0) {
      tiempoVerde += t;
      ActualizarContador("verde");
      tiempoVerdeInicial += t;
    }
    if (t < 0 && tiempoVerde != 0) {
      tiempoVerde += t;
      ActualizarContador("verde");
      tiempoVerdeInicial += t;

    }
  } else {
    if (t > 0) {
      tiempoRojo += t;
      ActualizarContador("rojo");
      tiempoRojoInicial += t;

    }
    if (t < 0 && tiempoRojo != 0) {
      tiempoRojo += t;
      ActualizarContador("rojo");
      tiempoRojoInicial += t;

    }
  }
}

function CambiarColor(n) {
  if (n == 0) {
    if (cambiarVerde) {
      ActualizarContador("rojo");
      document.getElementById("btn0").style.backgroundColor = "#FF3838";
      document.getElementById("btn1").style.backgroundColor = "#FF3838";
      cambiarVerde = false;
    } else {
      ActualizarContador("verde");
      document.getElementById("btn0").style.backgroundColor = "#8EFF8E";
      document.getElementById("btn1").style.backgroundColor = "#8EFF8E";
      cambiarVerde = true;
    }
  }
  if (n == 1) {
    if (cambiarVerde) {
      ActualizarContador("rojo");
      document.getElementById("btn0").style.backgroundColor = "#FF3838";
      document.getElementById("btn1").style.backgroundColor = "#FF3838";
      cambiarVerde = false;
    } else {
      ActualizarContador("verde");
      document.getElementById("btn0").style.backgroundColor = "#8EFF8E";
      document.getElementById("btn1").style.backgroundColor = "#8EFF8E";
      cambiarVerde = true;
    }
  }
}

function Progresar() {

  if (estadoVerde) {
    document.getElementById("progreso").max = tiempoVerdeInicial;
    document.getElementById("progreso").value = tiempoVerde

    //let mueve = setInterval(Mueve,100);

  } else {
    document.getElementById("progreso").max = tiempoRojoInicial;
    document.getElementById("progreso").value = tiempoRojo;
  }
}

function Mueve() {
  console.log("mueve");
  if (document.getElementById("progreso").value != tiempoVerde) {
    document.getElementById("progreso").value -= 0.1;
    clearInterval(mueve);
  }
}

function Alerta(color) {
  if (color == "verde") {
    document.getElementById("tiempo").style.backgroundColor = "#8EFF8E";
    setTimeout(QuitarAlertaVerde, 1000);
  }
  if (color == "rojo") {
    document.getElementById("tiempo").style.backgroundColor = "#FF3838";
    setTimeout(QuitarAlertaRoja, 1000);
  }
}

function QuitarAlertaVerde() {
  document.getElementById("tiempo").style.backgroundColor = "transparent";
}

function QuitarAlertaRoja() {
  document.getElementById("tiempo").style.backgroundColor = "transparent";

}

function ReiniciarColores() {
  document.body.style.backgroundColor = "#353535";

  for (var i = 0; i < document.getElementsByTagName("p").length; i++) {
    document.getElementsByTagName("p")[i].style.color = "#EBEBEB";
  }
  for (var i = 0; i < document.getElementsByTagName("label").length; i++) {
    document.getElementsByTagName("label")[i].style.color = "#EBEBEB";
  }
  for (var i = 0; i < document.getElementsByClassName("botones").length; i++) {
    document.getElementsByClassName("botones")[i].style.backgroundColor = "#D9D9D9";
  }
  for (var i = 0; i < document.getElementsByClassName("titulo").length; i++) {
    document.getElementsByClassName("titulo")[i].style.backgroundColor = "#3C6E71";
  }
  for (var i = 0; i < document.getElementsByClassName("btnTiempo").length; i++) {
    document.getElementsByClassName("btnTiempo")[i].style.backgroundColor = "#3C6E71";
  }
  for (var i = 0; i < document.getElementsByClassName("color").length; i++) {
    document.getElementsByClassName("color")[i].style.backgroundColor = "#3C6E71";
  }
  for (var i = 0; i < document.getElementsByClassName("botonCambio").length; i++) {
    document.getElementsByClassName("botonCambio")[i].style.backgroundColor = "#3C6E71";
  }
  for (var i = 0; i < document.getElementsByClassName("rangoSegundosMinutos").length; i++) {
    document.getElementsByClassName("rangoSegundosMinutos")[i].style.backgroundColor = "#3C6E71";
  }
  for (var i = 0; i < document.getElementsByClassName("btnMas5").length; i++) {
    document.getElementsByClassName("btnMas5")[i].style.backgroundColor = "#3C6E71";
  }
  for (var i = 0; i < document.getElementsByClassName("btnMenos5").length; i++) {
    document.getElementsByClassName("btnMenos5")[i].style.backgroundColor = "#3C6E71";
  }
  for (var i = 0; i < document.getElementsByClassName("tiempoCustom").length; i++) {
    document.getElementsByClassName("tiempoCustom")[i].style.backgroundColor = "#3C6E71";
  }

  s = 0;

}

function CambiarColoreFondo(valor) {
  document.body.style.backgroundColor = valor.toString();
}

function CambiarColoreTextos(valor) {
  for (var i = 0; i < document.getElementsByTagName("p").length; i++) {
    document.getElementsByTagName("p")[i].style.color = valor.toString();
  }
  for (var i = 0; i < document.getElementsByTagName("label").length; i++) {
    document.getElementsByTagName("label")[i].style.color = valor.toString();
  }
}

function CambiarColoreFondoTarjetas(valor) {
  for (var i = 0; i < document.getElementsByClassName("botones").length; i++) {
    document.getElementsByClassName("botones")[i].style.backgroundColor = valor.toString();
  }
}

function CambiarColoresTarjetas(valor) {
  for (var i = 0; i < document.getElementsByClassName("titulo").length; i++) {
    document.getElementsByClassName("titulo")[i].style.backgroundColor = valor.toString();
  }
  for (var i = 0; i < document.getElementsByClassName("btnTiempo").length; i++) {
    document.getElementsByClassName("btnTiempo")[i].style.backgroundColor = valor.toString();
  }
  for (var i = 0; i < document.getElementsByClassName("color").length; i++) {
    document.getElementsByClassName("color")[i].style.backgroundColor = valor.toString();
  }
  for (var i = 0; i < document.getElementsByClassName("botonCambio").length; i++) {
    document.getElementsByClassName("botonCambio")[i].style.backgroundColor = valor.toString();
  }
  for (var i = 0; i < document.getElementsByClassName("rangoSegundosMinutos").length; i++) {
    document.getElementsByClassName("rangoSegundosMinutos")[i].style.backgroundColor = valor.toString();
  }
  for (var i = 0; i < document.getElementsByClassName("btnMas5").length; i++) {
    document.getElementsByClassName("btnMas5")[i].style.backgroundColor = valor.toString();
  }
  for (var i = 0; i < document.getElementsByClassName("btnMenos5").length; i++) {
    document.getElementsByClassName("btnMenos5")[i].style.backgroundColor = valor.toString();
  }
  for (var i = 0; i < document.getElementsByClassName("tiempoCustom").length; i++) {
    document.getElementsByClassName("tiempoCustom")[i].style.backgroundColor = valor.toString();
  }

}

function AñadirPredefinidos(t) {
  if (cambiarVerde) {
    tiempoVerde = t;
    tiempoVerdeInicial = t;
    ActualizarContador("verde");
  } else {
    tiempoRojo = t;
    tiempoRojoInicial = t;
    ActualizarContador("rojo");
  }
}
