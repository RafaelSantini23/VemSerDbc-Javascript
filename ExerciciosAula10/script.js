
let idColab = 0;
let listColabs = [];

class Colaborador {
  id;
  nome;
  email;
  data;
  senha

  constructor(nome,data,email,senha) {
    this.id = idColab;
    this.nome = nome
    this.data = data
    this.email = email
    this.senha = senha
  }


}


const validarNome = (event) => {

  const input = event ? event.target : document.getElementById('nome-input');
  const { value: nome } = input;
  let error = document.getElementById('nome-erro');
  
  let nomesCaracs = nome.split(' ').join('');
  let nomeSeparada = [...nomesCaracs]
  
  const naoPossuiNumero = nomeSeparada.every(c => isNaN(c));

  const naoPossuirCaracEspecial = nomeSeparada.every(c => c.toUpperCase() !== c.toLowerCase())

  const naoPossuiEspaco = nomeSeparada.some(c => c !== ' ')
  
  const eValido = naoPossuiNumero && naoPossuiEspaco && naoPossuirCaracEspecial
  
  if(!eValido) {
    error.classList.remove('d-none');
    error.classList.add('text-danger');
  } else {
    error.classList.add('d-none');
  }
  return eValido;
  
}


const validarEmail = (event) => {
  
  const input = event ? event.target : document.getElementById('email-input');
  const { value: email } = input;
  let error = document.getElementById('email-erro');
  
  let caracteresEmail = [...email];
  let primeiroCaracterLetra = caracteresEmail[0].toUpperCase() !== caracteresEmail[0].toLowerCase();
  
  let possuirUmCaracterEspecial = caracteresEmail.some(e => e === '@');
  let possuirPonto = caracteresEmail.some(c => c === '.');
  
  let naoPossuirPontoNoFinal = caracteresEmail[caracteresEmail.length - 1] !== '.';
  let possuirDuasLetrasNoFinalDoPonto = caracteresEmail.some((c,i) => c === '.' && caracteresEmail[i + 2] !== undefined && caracteresEmail[i + 2].toUpperCase() !== caracteresEmail[i + 2].toLowerCase());
  
  let naoPossuirPontoDepoisArroba = () => {
    let pontoDepoisArroba = caracteresEmail.indexOf('@') + 1;
    let pontoDepoisArrobaEhPonto = caracteresEmail[pontoDepoisArroba] === '.';
    return !pontoDepoisArrobaEhPonto;
  }

  let dominio = email.includes('@') && email.includes('dbccompany');

  const ehValido = primeiroCaracterLetra && possuirUmCaracterEspecial && naoPossuirPontoDepoisArroba() && dominio && possuirPonto && naoPossuirPontoNoFinal && possuirDuasLetrasNoFinalDoPonto
  
  if(!ehValido) {
    error.classList.remove('d-none');
    error.classList.add('text-danger');
  } else {
    error.classList.add('d-none');
  }
  return ehValido;
  
  /* 
        adicionar um eventListener para o evento "onkeyup" do input email-input que ter?? como a????o esta fun????o de validarEmail
        deve validar as seguintes regras:
        1 - obrigat??rio ter uma letra como primeiro caract??r;
        2 - obrigat??rio possuir um '@';
        3 - obrigat??rio possuir pelo menos um '.' (ponto) depois do '@' e n??o podem estar juntos, ex: email@.ig // inv??lido pois o ponto est?? junto do arroba;
        4 - n??o pode terminar com '.' (ponto), ex: "email@pessoal.";
        5 - deve ter pelo menos duas letras depois de um '.' (ponto), ex: "email@pessoal.c" // inv??lido pois tem somente o 'c' depois do '.';
        6 - deve possuir o dom??nio 'dbccompany'
        obs: caso o email (value) que est?? no input for v??lido/inv??lido dever?? alterar a span com id="email-erro" para fique com um display vis??vel ou invis??vel (dependendo da situa????o)
        */
       

      }

      
    const validarSenha = (event) => {
        /* 
        adicionar um eventListener para o evento "onkeyup" do input senha-input que ter?? como a????o esta fun????o de validarSenha
        deve validar as seguintes regras:
        1 - obrigat??rio ter ao menos uma letra min??scula;
        2 - obrigat??rio ter ao menos uma letra mai??scula;
        3 - obrigat??rio ter ao menos um n??mero;
        4 - obrigat??rio ter ao menos um car??cter especial;
        5 - obrigat??rio ter ao menos 8 caract??res;
        6 - a senha n??o pode conter espa??os em branco;
        
        obs: caso a senha (value) que est?? no input for v??lido/inv??lido dever?? alterar a span com id="senha-erro" para fique com um display vis??vel ou invis??vel (dependendo da situa????o)
        */
       const input = event ? event.target : document.getElementById('senha-input');
       const { value: senha } = input;
       let error = document.getElementById('senha-erro');

    input.value = input.value.replaceAll(' ', '');

    let caracteresSenha = [...senha];

    let possuiLetraMinuscula = caracteresSenha.some( c => c.toLowerCase() === c);
    let possuiLetraMaiuscula = caracteresSenha.some( c => c.toUpperCase() === c);

    let possuiEspecial = caracteresSenha.some( c => c.toUpperCase() === c.toLowerCase() && isNaN(c));
    let possuiNumero = caracteresSenha.some( c => c.toUpperCase() === c.toLowerCase() && !isNaN(c));

    let peloMenosOito = senha.length >= 8;

    const ehValido = possuiLetraMinuscula && possuiLetraMaiuscula && possuiEspecial && possuiNumero && peloMenosOito;
    
    if(!ehValido) {
      error.classList.remove('d-none');
      error.classList.add('text-danger');
    } else {
      error.classList.add('d-none');
    }
    return ehValido;
  }
  
  
const adicionarMascaraData = (input) => {
  // aqui vamos adicionar uma m??scara ao input

  let date = document.getElementById("data-input").value;
  date = date.replaceAll("/", "");
  let day = date.substring( 0, 2);
  let month = date.substring( 2, 4);
  let year = date.substring(4);

  let dateNumbers = [...date];

  if(dateNumbers.length === 2){
    document.getElementById("data-input").value = `${day}/`
  } else if(dateNumbers.length === 5){
    document.getElementById("data-input").value = `${day}/${month}/${year}`
  }
}





const validarData = (event) => {
  /* 
  adicionar um eventListener para o evento "onkeyup" do input data-input que ter?? como a????o esta fun????o de validarSenha
  deve validar as seguintes regras:
  1 - deve ser uma data v??lida;
  2 - n??o pode ser uma data futura;
  3 - deve ser uma data entre 18 e 26 anos; (idade > 18)
  obs: caso o email (value) que est?? no input for v??lido/inv??lido dever?? alterar a span com id="data-erro" para fique com um display vis??vel ou invis??vel (dependendo da situa????o)
  */
 
 const input = event ? event.target : document.getElementById('data-input');
 const { value: data } = input;
 let error = document.getElementById('data-erro');

 
 const date = moment()
 
 const dataFormatado = moment(data, 'DD/MM/YYYY')
 
 const dateValid = dataFormatado.isValid()
 const dataFuturo = date.isAfter(dataFormatado);
 
 const dezoitoAnosAtras = moment().subtract(18, 'years');
 const vinteESeisAnosAtras = moment().subtract(26, 'years');
 
 let dateBetween = dataFormatado.isBetween(vinteESeisAnosAtras, dezoitoAnosAtras)
 
 
 const ehValido = dateValid && dataFuturo && dateBetween;
    if(!ehValido) {
      error.classList.remove('d-none');
      error.classList.add('text-danger');
    } else {
      error.classList.add('d-none');
    }
    return ehValido;
}


const adicionaColab = () => {

  const inputNome = document.getElementById('nome-input');
  const { value: nome } = inputNome;

  const inputData = document.getElementById('data-input');
  const { value: data } = inputData;

  const inputEmail = document.getElementById('email-input');
  const { value: email } = inputEmail;

  const inputSenha = document.getElementById('senha-input');
  const { value: senha } = inputSenha;


  const colaborador = new Colaborador(nome,data,email,senha)
  listColabs.push(colaborador)
  idColab++;
  addList();
  return;
  
}
const validarCadastro = (event) => {
  event.preventDefault();

  const expression = validarNome() && validarData() && validarEmail() && validarSenha()

  if(expression) 
    adicionaColab()
  

}

const addList = () => {

  let div = document.getElementById('id-table')
  let body = document.getElementById('t-body');
  let divInvisivel = document.getElementById('no-colab')
  let tr = document.createElement('tr');
  div.classList.remove('d-none')
  divInvisivel.classList.add('d-none')
  body.appendChild(tr);

  let tdNome = document.createElement('td');
  let tdNascimento = document.createElement('td');
  let tdEmail = document.createElement('td');

  tr.appendChild(tdNome);
  tr.appendChild(tdNascimento);
  tr.appendChild(tdEmail);

  const inputNome = document.getElementById('nome-input');
  const { value: nomeColab } = inputNome;

  const inputData = document.getElementById('data-input');
  const { value: data } = inputData;

  const inputEmail = document.getElementById('email-input');
  const { value: emailColab } = inputEmail;

  let nome = document.createTextNode(nomeColab);
  let nascimento = document.createTextNode(data);
  let email = document.createTextNode(emailColab);

  tdNome.appendChild(nome);
  tdNascimento.appendChild(nascimento);
  tdEmail.appendChild(email);

  return;
  
  
}

const showColab = (event) => {
  event.preventDefault()
  let array = [...document.getElementById('t-body').children].map(element => element.innerText)

  let mappedArray = array.map(element => {
    let splitted = element.split('\t')
    
    return {
      Nome: splitted[0],
      Nascimento: splitted[1],
      Email: splitted[2]
    }
  })
  if(listColabs.length < 1) {

    console.log('N??o h?? itens na lista!!');
  } else {
    console.table(mappedArray)
  }
 
  
}




