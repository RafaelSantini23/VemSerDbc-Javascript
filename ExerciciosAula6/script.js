let id = 1;
let colaboradores = [ ];

class Colaborador {
  id;
  name;
  marcacoesPonto;

  constructor(id,name) {
    this.id = id;
    this.name = name
    this.marcacoesPonto = [];
  }

}


class Marcacao {
  dia;
  horas;

  constructor(dia,horas) {
    this.dia = dia
    this.horas = horas
  }

}

const cadastraColaborador = () => {
  let continues = true;
  let nomeColaborador;
  while (continues) {
    nomeColaborador = prompt('Digite seu nome');

    if(validador.validaNome(nomeColaborador)) {
      continues = false;
    } else {
      alert('Digite um nome válido')
    }
    
  }
  const colaborador = new Colaborador(id,nomeColaborador)
  colaboradores.push(colaborador);
  id++;
  console.log(colaboradores);
}


const marcarPonto = () => {

  let buscaColaborador;
  let continues = true;
  let dia;
  let hora;
  
  while (continues) {
    let name = prompt("Indique o nome: ")
    for (let i = 0; i < colaboradores.length; i++) {
      if(colaboradores[i].name === name ) {
        buscaColaborador = i;
        continues = false;
        break;
      } 
      
    }
    if(continues) {
      alert('Nome não encontrado!')
    }
    
  }

  continues = true
  while (continues) {
    dia = parseInt(prompt("Digite um dia: "));
    
    if(validador.validaDia(dia)) {
      continues = false;
    } else {
      alert('Digite um dia válido!')
    }
      
  }
  
  continues = true;

  while (continues) {
    hora = parseInt(prompt("Digite uma hora: "));
    
    if(validador.validaHora(hora)) {
      continues = false
    } else {
      alert('Digite um horário válido!')
    }

  }


  const marcacao = new Marcacao(dia,hora);
  colaboradores[buscaColaborador].marcacoesPonto.push(marcacao) 

  alert('Hora marcada!')
  
  console.log(colaboradores[buscaColaborador].marcacoesPonto);
  
}


class Validacoes {
  
  validaNome = (name) => {
    if(name.length > 1 && typeof name !== 'number') {
      return true;
    } else {
      return false;
    }
  }

  validaDia = (day) => {
    if(!isNaN(day) && day > 0) {
      return true;
    } 
    else {
      return false;
    }
  }

  validaHora = (hour) => {
    if(!isNaN(hour) && (hour > 0 && hour < 24)) {
      return true;
    } else {
      return false;
    }
  }

}

const employesNotFound = () => {

  let employes = [];

  for(let i = 0; i < colaboradores.length; i++) {
    if(colaboradores[i].marcacoesPonto.length === 0 ) {
      employes.push(colaboradores[i]) 
    }
  }

  let nomes = employes.map(e => e.name)

  if(employes.length < 1) {
    alert('Todos estão com os pontos marcados!')
  } else {
    alert(`nome: ${nomes}`)
  }

}

const validador = new Validacoes();
const marcacao = new Marcacao();


const callMenu = () => {
  let userAnswer;
  do {
    userAnswer = parseInt(prompt('Digite uma opção:\n1 - Cadastrar Colaborador\n2 - Marcar Ponto\n3 - Ver Lista de Colaboradores\n4 - Ver Lista de Colaboradores Que Ainda Não Marcaram o Ponto\n5 - Encerrar'))

    switch (userAnswer) {
      case 1:
        cadastraColaborador();
        break;
      case 2:
        if(colaboradores.length < 1) {
          alert('Não existem colaboradores cadastrados!')
        } else {
          marcarPonto();
        }
      break;
      case 3:
        let nomes = colaboradores.map(e => e.name);
        if(colaboradores.length < 1) {
          alert('Não existem colaboradores cadastrados!')
        } else {
          alert(`nome: ${nomes}`);
        }
      break;
      case 4:
        if(colaboradores.length < 1) {
          alert('Não existem colaboradores cadastrados!')
        } else {
          employesNotFound();
        }
      break;
      case 5:
        alert('Obrigado por utilizar nosso sistema!')
      break;
      default:
        break;
    }
  } while (userAnswer != 5);
}

callMenu();