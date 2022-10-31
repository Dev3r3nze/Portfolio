var result = 0;
var numA,numB;
var nums=[[],[],[],[],[],[],[],[],[],[],[]];
var i = 0;


function Resultar() {

  result = eval(document.getElementById("resultInput").value);

  document.getElementById("resultInput").value = result;
  result = 0;
}


function Imprimir(char){
  document.getElementById("resultInput").value += char;
  switch (char) {
    case "+":

        i++;
      break;
    default:
      nums[i].push(char);

  }
}
function BorrarTodo(){
  document.getElementById("resultInput").value = null;
  
}

function Borrar(){
  var arr = [];
  arr =  document.getElementById("resultInput").value.split("");
  document.getElementById("resultInput").value = null;

  arr.pop();
  var i = 0;
  while (arr[i] != "," && arr[i] != null) {
    document.getElementById("resultInput").value += arr[i];
    i++;
  }
  i = 0;
}
