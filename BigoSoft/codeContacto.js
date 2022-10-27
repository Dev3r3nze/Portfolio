addEventListener("load", function functionName() {
  var titulacionName = document.getElementById("titulacionName");
});

let  arrayTitulos = ["",""];
var i = 0;

function AgregarTitulo() {
  titulacionName.value = document.getElementById("titulacionIntroducido").value;
  arrayTitulos[i] = document.getElementById("titulacionIntroducido").value.toString();
  i++;
}

function Confirmar() {
  var message = "";
  var a = 0;
  for (var i = 0; i < arrayTitulos.length; i++) {
    console.log(arrayTitulos[i]);
    message +=  "\n" + arrayTitulos[i];
    a++;
  }
  if (a > 1) {
    window.confirm("Tus titulos son: " + message);
  }
  else{
    window.confirm("Tu título es: " + message);
  }
}

function Resetear(){
  arrayTitulos = ["",""];
  i = 0;
}
