/*
1) Crie um programa que, a partir de um texto que o usuário digitar (prompt), verifique:
   - Se o texto for igual à 'SIM' informe um alerta para o usuário informando o texto "Parabéns";
   - Se o texto for igual à 'Não' solicite novamente para o usuário informar algum texto e após isso mostre para ele o texto digitado em um alerta;
   - Se for digitado qualquer outra string solicite uma confirmação para o usuário com o texto: 'Você tem noções dos seus atos?'

*/

let answer = prompt('Digite algo: ')

if (answer === 'Sim' || answer === 'SIM') {
  alert("Parabéns")
} else if (answer === 'Não') {
  answer = prompt('Digite novamente: ')
  alert(answer)
} else {
  confirm('Você tem noções dos seus atos?')
}

// /*
//  Crie um programa que solicita para o usuário dois valores de texto, nome do cliente e nome do atendente;
//  Exiba um alerta para o usuário com a mensagem "Olá cliente eu me chamo atendente, em que posso ajudar?" (String interpolation)

// */

const clientName = prompt('Qual o nome do cliente? ');
const attendantName = prompt('Qual o nome do atendente?');

alert(`Olá ${clientName} eu me chamo ${attendantName}, em que posso ajudar? `)


// /*

// 3) Crie um programa que possui 3 variáveis do tipo Boolean (true / false);
//    nomes das variáveis: isFriday, isTwoGreaterThanFour e isValueEmpty;
//    Atribua à variável isFriday o resultado de uma pergunta feita para o usuário "Hoje é sexta-feira?";
//    Atribua à variável isTwoGreaterThanFour o resultado da comparação de "2 maior que 4";

//    Para a variável isValueEmpty você precisa solicitar uma informação para o usuário e armazenar na variável a verificação se essa informação é:
//    null, undefined ou um texto vazio ('')
// */


let isFriday = confirm('Hoje é sexta-feira?');
let isTwoGreaterThanFour = 2 > 4;
let answerUser = prompt('Digite algo: ')
let isValueEmpty = answerUser === null || answerUser === undefined || answerUser === '';

/**
 4) Crie um programa que recebe dois números e uma operação desejada e mostre o resultado dessa operação (operações válidas: '+', '-', '*', '/'), 
  adicione também uma validação para caso a operação escolhida não seja uma das operações válidas OU se um dos números digitados seja um valor inválido também;
  Caso a validação encontre um erro mostre um alerta informando o usuário;
  Obs: Lembrando também que não é possível dividir por zero (ou seja, tratem isso também);

 */

let num1 = parseFloat(prompt('Digite o primeiro número: '));

let operation = prompt('Digite uma operação: ');

let num2 = parseFloat(prompt('Digite o segundo número: '));

const isNumber = !isNaN(num1) && !isNaN(num2);

const isNumberInfinity = operation === '/' && num1 / num2 === Infinity;

if (!isNumber) {
  alert('Digite um valor válido');
}

if (isNumberInfinity) {
  alert('Não pode ser divisivel por zero');
}

if (isNumber && !isNumberInfinity === true) {
  switch (operation) {
    case '+':
      alert(`Os numeros somados são ${num1 + num2}`);
      break;
    case '-':
      alert(`Os numeros subtraidos são ${num1 - num2}`);
      break;
    case '*':
      alert(`Os numeros multiplicados são ${num1 * num2}`);
      break;
    case '/':
      alert(`Os numeros divididos são ${num1 / num2}`);
      break;
    default:
      alert('Operação inválida');
      break;
  }
}


/**
 5) Crie um programa que recebe 3 notas (T1, T2 e P1) como números reais (float, ex: 5.2), realize a média dessas notas e realize a seguinte verificação:
   (menor que 5 = alerta de reprovado, de 5 até 7 = alerta de recuperação e acima de 7 = alerta de parabenização)
   Obs: adicione as validações para ter certeza que os números inseridos estão certos;
   
 */

const T1 = parseFloat(prompt('Digite a primeira nota: '));
const T2 = parseFloat(prompt('Digite a segunda nota: '));
const P1 = parseFloat(prompt('Digite a terceira nota: '));

const average = (T1 + T2 + P1) / 3;

const isNumberInfinity = !isNaN(T1) && !isNaN(T2) && !isNaN(P1)

if (!isNumber) {
  alert('Digite um numero')
} else if (average < 5) {
  alert('Reprovado')
} else if (average >= 5 && average < 7) {
  alert('Recuperação')
} else {
  alert('Parabéns você passou!!!')
}

/*
6) Crie um programa que solicite para o usuário que escolha uma das opções do menu:
   1 - Fazer checkin (exibe um alert de boas vindas);
   2 - Fazer checkout (mostra uma caixa de confirmação perguntando se tem certeza e se disser que sim exibe um alerta de despedida);
   3 - Estender hospedagem (pergunta pro usuário quantos dias gostaria de estender e se for um número válido exibe um alerta de sucesso informando que a hospedagem foi estendida em X dias)
   4 - Sair (exibe alerta de "Ok")
   
   Obs: caso não seja nenhuma dessas opções exiba um alerta de opção inválida

*/

let resposta = parseInt(prompt('Selecione uma das opções: \n 1 - Fazer checkin \n 2 - Fazer checkout \n 3 - Estender hospedagem \n 4 - Sair'));


switch (resposta) {
  case 1:
    alert('Bem Vindo ao nosso hotel!!')
    break;
  case 2:
    let confirmUser = confirm('Tem certeza? ');
    if (confirmUser) {
      alert('Tenha um bom dia.')
    }
    break;
  case 3:
    let numberOfDays = parseInt(prompt('Digite a quantidade de dias: '))
    let isNumberInfinity = !isNaN(numberOfDays);

    if (!isNumberInfinity) {
      alert('Digite um numero valido!')
    } else {
      alert('Sucesso')
    }
    break;
  case 4:
    alert('Ok! ')
    break;
  default:
    alert('Opção Inválida!!')
    break;
}







