
let parrafo = document.getElementById('resul');

function mostrarEdad() {
     let caja = document.getElementById('miCaja').value;
     if (!caja) {
          return parrafo.innerText = "Ingresa una edad";
     } else {
          if(parseInt(caja) <18){
               return parrafo.innerText = "Eres menor de edad: "+ parseInt(caja) + " No puedes entrar";
          }else{
               return parrafo.innerText = "Bienvenido!!!!!!: "+ parseInt(caja);
          }
          
     }
}


