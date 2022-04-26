
var n = 0;
var precio = 0;

var activo1 = false,activo2 = false,activo3 = false,activo4 = false,activo5 = false,activo6 = false,activo7 = false,
activo8 = false,activo9 = false;



function CambiarPrecio(n) {
  switch (n) {
    case 1:
      if(activo1 == true){
        document.getElementById('img1').src = "Recursos/cerrar.png";
        precio -= 50;
        activo1 = false;

      }else{
        document.getElementById('img1').src = "Recursos/tick.PNG";
        precio += 50;
        activo1 = true;
      }
      break;
    case 2:
      if(activo2 == true){
        document.getElementById('img2').src = "Recursos/cerrar.PNG";
        precio -= 50;
        activo2 = false;

      }else{
        document.getElementById('img2').src = "Recursos/tick.PNG";
        precio += 50;
        activo2 = true;
      }
      break;
    case 3:
      if(activo3 == true){
        document.getElementById('img3').src = "Recursos/cerrar.png";
        precio -= 50;
        activo3 = false;

      }else{
        document.getElementById('img3').src = "Recursos/tick.PNG";
        precio += 50;
        activo3 = true;
      }
      break;
    case 4:
      if(activo4 == true){
        document.getElementById('img4').src = "Recursos/cerrar.png";
        precio -= 50;
        activo4 = false;

      }else{
        document.getElementById('img4').src = "Recursos/tick.PNG";
        precio += 50;
        activo4 = true;
      }
      break;
    case 5:
      if(activo5 == true){
        document.getElementById('img5').src = "Recursos/cerrar.png";
        precio -= 50;
        activo5 = false;

      }else{
        document.getElementById('img5').src = "Recursos/tick.PNG";
        precio += 50;
        activo5 = true;
      }
      break;
    case 6:
      if(activo6 == true){
        document.getElementById('img6').src = "Recursos/cerrar.png";
        precio -= 50;
        activo6 = false;

      }else{
        document.getElementById('img6').src = "Recursos/tick.PNG";
        precio += 50;
        activo6 = true;
      }
      break;
    case 7:
      if(activo7 == true){
        document.getElementById('img7').src = "Recursos/cerrar.png";
        precio -= 50;
        activo7 = false;

      }else{
        document.getElementById('img7').src = "Recursos/tick.PNG";
        precio += 50;
        activo7 = true;
      }
      break;
    case 8:
      if(activo8 == true){
        document.getElementById('img8').src = "Recursos/cerrar.png";
        precio -= 50;
        activo8 = false;

      }else{
        document.getElementById('img8').src = "Recursos/tick.PNG";
        precio += 50;
        activo8 = true;
      }
      break;
    case 9:
      if(activo9 == true){
        document.getElementById('img9').src = "Recursos/cerrar.png";
        precio -= 50;
        activo9 = false;

      }else{
        document.getElementById('img9').src = "Recursos/tick.PNG";
        precio += 50;
        activo9 = true;
      }
      break;
  }
  AumentarPrecio();
}


function AumentarPrecio() {
  document.getElementById("precioPlanIndividual").innerHTML = precio + "€";

}
