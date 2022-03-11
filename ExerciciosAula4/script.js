/**
 Atividades práticas da aula
 */

 const isPositive = number => number > 0

 const randomNumber = () => Math.round(Math.random() * 10);

 setTimeout(() => console.log('Apenas uma mensagem 5 segundos atrasada.'), 5000);

 const criarMensagem = () => 'Olá, seja bem vindo!';

 function printCombinations(str) {
  let arr = str.split('');
  let arrCombinations = [];
  let aux = '';

  for(let i = 0; i < arr.length; i++) {
    aux = arr[i];
    arrCombinations.push(aux)
    
    for(let j = 0; j < arr.length; j++) {
      if(i != j) {
        aux = arr[i] + arr[j]
        arrCombinations.push(aux)
      }
      
    }
    
  }

  return arrCombinations;
}

console.log(printCombinations("tri"));