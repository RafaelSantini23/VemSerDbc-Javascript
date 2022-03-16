

class Validacoes {
  valorEstaPresente(valor) {
   return (valor !== '' && valor != null && valor !== undefined ) 

  }
}
const MENSAGEM_MENU = `  1 - Cadastrar Colaborador;\n
2 - Marcar Ponto;\n
3 - Ver Lista de Colaboradores;\n
4 - Ver Lista de Colaboradores Que Ainda Não Marcaram o Ponto;\n
9 - Encerrar;`

const validador = new Validacoes();

let idSistema = 1;

let colaboradores = [];

class Colaborador {
  id = 0;
  nome = '';
  marcacoesPonto = [];

  constructor(nome) {

    this.id = idSistema++;
    this.nome = nome;

  }

  marcarPonto(dia,hora) {
    const marcacao = new Marcacao(dia, hora)
    this.marcacoesPonto.push(new Marcacao( dia, hora ))
  }

}

const listarColaboradores = () => {
  console.log('Lista de colaboradores => ');
  colaboradores.forEach(c => {
    console.log(c);
  })
  console.log('Lista de colaboradores => ');
}

const listarSemPonto = () => {
  const colaboradoresSemPonto = colaboradores.filter(c => c.marcacoesPonto.length === 0);

  console.log('Lista de colaboradores sem ponto =>');
  colaboradoresSemPonto.forEach(c => {
    console.log(c);
  })

}

class Marcacao {
  dia;
  horas;

  constructor(dia,horas) {
    this.dia = dia
    this.horas = horas
  }
 
}


const marcarPonto = () => {
  const idColab = parseInt(prompt('Informe o id do colaborador: '));
  const dia = parseInt(prompt('Informe o dia: '));
  const hora = parseInt(prompt('Informe a hora: '));

  const colaborador = colaboradores.find(c => c.id === idColab)

  colaborador.marcarPonto(dia,hora)

}

const cadastraColaborador = () => {
  const nome = prompt('Informe o nome do colaborador: ');

  if(!validador.valorEstaPresente(nome)) {
    alert('Nome inválido, digite alguma coisa.')
    cadastraColaborador()
  }

  const colab = new Colaborador(nome)
  colaboradores.push(colab)
  console.log('Sucesso');
}

const verificaMarcacaoInvalida = (valor) => {
  if(!validador.valorEstaPresente(valor)) {
    alert('Nome inválido, digite alguma coisa.')
    return true;
  }
}

const menu = () => {
  let opcao = prompt(MENSAGEM_MENU)

  switch (opcao) {
    case 1:
      cadastraColaborador();
    break;
    case 2:
      marcarPonto();
    break;
    case 3:
      // listarColaboradores();
    break;
    case 4:
      listarSemPonto();
    break;
    case 9:

    break;
  
    default:
      alert('Opção invalida!')
      menu()
      break;
  }
}

// inicio o sistema
menu();