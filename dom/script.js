const diminuir = document.querySelector('.diminuir')
const somar = document.querySelector('.somar')
const resultado = document.querySelector(".resultado");

function incrementar(){
  resultado.innerHTML = parseInt(resultado.innerHTML) + 1;
}

function decrementar() {

  if(resultado.innerHTML > 0) {
    resultado.innerHTML = parseInt(resultado.innerHTML) - 1;
  } else {
    resultado.innerHTML = 0
  }

}
somar.onClick = incrementar



