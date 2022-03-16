let id = 1;
let colaboradores = [];

class Colaborador {
  id;
  name;
  marcacoesPonto;

  constructor(id, name) {
    this.id = id;
    this.name = name
    this.marcacoesPonto = [];
  }

}


class Marcacao {
  dia;
  horas;

  constructor(dia, horas) {
    this.dia = dia
    this.horas = horas
  }

}

const cadastraColaborador = () => {
  let continues = true;
  let nomeColaborador;
  while (continues) {
    nomeColaborador = prompt('Digite seu nome');

    if (validador.validaNome(nomeColaborador)) {
      continues = false;
    } else {
      alert('Digite um nome válido')
    }

  }
  const colaborador = new Colaborador(id, nomeColaborador)
  colaboradores.push(colaborador);
  id++;
  console.log(colaboradores);
}


const marcarPonto = () => {

  let buscaColaborador;
  let continues = true;
  let dia;
  let hora;
  let id;
  let findId;

  
  while (continues) {
    id = parseInt(prompt("Indique o ID: "))
  
    findId = colaboradores.find(e => id === e.id)


    dia = parseInt(prompt('Digite um dia: '));
    hora = parseInt(prompt('Digite uma hora válida: '))

    if((validador.validaDia(dia) && validador.validaHora(hora)) && (!isNaN(id) && find)) {
      continues = false
    } 
    else {
       alert('A hora,o dia ou o id não estão válidos!')
      }

    }

      const marcacao = new Marcacao(dia, hora);

      let arr = findId.marcacoesPonto.push(marcacao)

      return arr;

   

}


  class Validacoes {

    validaNome = (name) => {
      if (name.length > 1 && typeof name !== 'number') {
        return true;
      } else {
        return false;
      }
    }

    validaDia = (day) => {
      if ((!isNaN(day) && day > 0) && day !== null) {
        return true;
      }
      else {
        return false;
      }
    }

    validaHora = (hour) => {
      if ((!isNaN(hour) && (hour > 0 && hour < 24)) && hour !== null) {
        return true;
      } else {
        return false;
      }
    }

  }

  const employesNotFound = () => {

    let employesNo = colaboradores.filter((employ) => { return employ.marcacoesPonto.length < 1 })

    let nomes = employesNo.map(e => e.name)

    if (employesNo.length < 1) {
      alert('Todos estão com os pontos marcados!')
    } else {
      alert(`nomes: ${nomes}`)
    }

  }

  // const validador = new Validacoes();


  const callMenu = () => {
    let userAnswer;
    do {
      userAnswer = parseInt(prompt('Digite uma opção:\n1 - Cadastrar Colaborador\n2 - Marcar Ponto\n3 - Ver Lista de Colaboradores\n4 - Ver Lista de Colaboradores Que Ainda Não Marcaram o Ponto\n5 - Encerrar'))

      switch (userAnswer) {
        case 1:
          cadastraColaborador();
          break;
        case 2:
          if (colaboradores.length < 1) {
            alert('Não existem colaboradores cadastrados!')
          } else {
            marcarPonto();
          }
          break;
        case 3:
          let nomes = colaboradores.map(e => e.name);
          if (colaboradores.length < 1) {
            alert('Não existem colaboradores cadastrados!')
          } else {
            alert(`nome: ${nomes}`);
          }
          break;
        case 4:
          if (colaboradores.length < 1) {
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