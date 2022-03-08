/*
1) Crie um programa que atribua à uma varíavel e imprima no console os textos: 
   'Sextou' ou 'Ainda não sextou' de acordo com a resposta de confirmação do usuário;

*/

const userDay = confirm('Sextou ou Ainda não sextou');
const dayChosed = userDay ? alert('Sextou') : alert('Ainda não sextou');

console.log(dayChosed)

/**
 2) Crie um programa que imprima no console os números de 1 até 10;

 */

 for(let i = 1; i <= 10; i++) {
   console.log(i);
 }


 /*
 3) Crie um programa que, através de laços de repetição, percorra uma determinada lista com os seguintes números: [1, 2, 7, 10, 18]
   e imprima no console a soma de todos os elementos, neste caso seria 38;
 */
   let listNumbers = [1, 2, 7, 10, 18];
   let adder = 0;

   for(let i = 0; i < listNumbers.length; i++) {

    adder += listNumbers[i];
    
   }

   console.log(adder);

   /**
    4) Crie um programa que mostre um prompt para o usuário pedindo para selecionar uma das opções: 
	  1 - Continuar perguntando / 2 - Parar de perguntar
   se ele digitar algo diferente de 1 ou de 2 deve mostrar um alerta para ele informando o erro e deve solicitar novamente que escolha uma opção.

    */

   
  //  let count = parseInt(prompt('1 - Continuar perguntando\n 2 - Parar de perguntar'))
   
   let userQuestions;

   while (userQuestions != 2) {
     userQuestions = parseInt(prompt('1 - Continuar perguntando\n 2 - Parar de perguntar '));
     if(userQuestions != 1 && userQuestions != 2 ) {
       alert('Informe um numero que seja 1 ou 2')
     }
   }
   