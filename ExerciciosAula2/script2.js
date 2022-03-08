//  1) Um funcionário de uma empresa recebe aumento salarial anualmente. Sabe-se que:
//   Esse funcionário foi contratado em 2016, com salário inicial de R$1000,00;
//   A cada ano o funcionário recebe um aumento de 1,5% sobre seu salário inicial;
//   A partir de 2018, os aumentos salariais sempre passaram a ser o dobro do percentual do ano anterior
//   Faça um programa que determine imprima o salário desse funcionário com o passar dos anos até o ano atual;

const currentYear = 2022;
let salaryEmployee = 1000.00;

let salaryAfterDouble = 0.015;

let salaryYearBefore = 0;
for (let year = 2016; year <= currentYear; year++) {


  if (year < 2018) {
    salaryYearBefore = salaryEmployee += (salaryEmployee * salaryAfterDouble)
    console.log(`Seu salário no ano de ${year} mudou para R$${salaryYearBefore.toFixed(2)}`);
  }
  if (year >= 2018) {

    salaryYearBefore = salaryEmployee += (salaryEmployee * (salaryAfterDouble = salaryAfterDouble * 2))

    console.log(`Seu salário no ano de ${year} mudou para R$${salaryYearBefore.toFixed(2)}`);

  }

}

/**
 * 
 2) Faça um programa que calcule a soma dos primeiros 50 números pares; 
 
 */

let evenCounter = 0;

for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    evenCounter += i
    console.log(evenCounter);
  }
}

/**
 3) Faça um programa onde o usuário possa escolher qual a tabuada que se deseja ver. Exiba (console) a tabuada desse número de 1 a 10;

 */
let numberChosen = 4;

for (let i = 0; i <= 10; i++) {
  console.log(`A tabuada é ${numberChosen} x ${i} = ${i * numberChosen}`);
}

/**
 4) Faça um algoritmo que apresente o quadrado de cada um dos números pares entre 1 e 100;

 */

let numberEven = 1;

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    numberEven = i ** 2
    console.log(`${numberEven} metros quadrados`);
  }
}

/**
 5) Faça um algoritmo que imprima no console os valores como se fosse um relógio durante 1 minuto;
 Exemplo do console:
 00 // note que é 00 e não apenas 0
 01 // note que é 01 e não apenas 1
 02 // note que é 02 e não apenas 2
 03 // note que é 03 e não apenas 3
 ...
 58
 59
 60 (aqui é para parar de imprimir)
 */

let time = 0;


while (time <= 60) {
  time < 10 ? console.log(`0${time}`) : console.log(time);
  time++
}

/**
 6) Pergunte ao usuário se ele quer:
  Inserir número / Finalizar
  Ao selecionar inserir número solicite para o usuário um valor numérico válido
  Ao selecionar finalizar mostre um alerta para o usuário com o resultado da soma de todos os números informados
  Utilize o laço DO...WHILE;
 */


let userQuestionNumber = parseInt(prompt('1 - Inserir número /\n2 - Finalizar'))

let countUserNumbers = 0;
let arr = [];

do {
  
    while (userQuestionNumber === 1) {
      let numberSelect = parseInt(prompt('Digite um numero: '));
      userQuestionNumber = parseInt(prompt('1 - Inserir número /\n2 - Finalizar'))
    
      if (!isNaN(numberSelect)) {
        arr.push(numberSelect)
        countUserNumbers += numberSelect
      }
      else {
        alert('Digite numeros valido');
      }
    }
      
  alert(`A soma dos numeros ${arr} é : ${countUserNumbers}`);

} while (userQuestionNumber !== 2);

