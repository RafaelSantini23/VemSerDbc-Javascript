/**
  1) Crie uma função que recebe como parâmetro uma lista com os valores [1, 'Olá', undefined, 99999, 'Texto qualquer']
   e essa função imprima no console o valor de cada elemento da lista;
 */

function callArr(list) {
  for(let i = 0; i < list.length; i++) {
    console.log(list[i]);
  }
}

callArr([1, 'Olá', undefined, 99999, 'Texto qualquer']);

/**
 2) Crie uma função que receba uma string e retorne esta string sem nenhum espaço em branco no início e no fim 
   e todos caracteres em maiúsculo;
   // ex: minhaFuncao('      Oi, essa é uma   string   qualquer   ') => deve retornar a string: 'OI, ESSA É UMA   STRING   QUALQUER'
 */

function stringCapital(strgs) {

  return strgs.trim().toUpperCase()
}

const stringNoSpace = stringCapital('      Oi, essa é uma   string   qualquer   ')

console.log(stringNoSpace);

/**
 2a) Crie uma função que, baseada no retorno da função da questão anterior, remova também os caractéres entre as palavras 
	(porém mantenha ao menos um para continuar com as palavras separadas)
	// ex: minhaFuncao('Oi,    essa    é    uma   string    qualquer') => deve retornar a string: 'Oi, essa é uma string qualquer'
 */

function removeCharacterInSpace(string) {
  
    
    let newString = string.replace('  ', ' ')
    
    if(string.includes('  ')) {
        return removeCharacterInSpace(newString)
    } else {
        return newString
    }
  

}

let phrase = removeCharacterInSpace(stringNoSpace);

console.log(phrase);


/**
 3) Crie uma função de soma que recebe como parâmetro 2 números (imprime no console a soma deles) e uma callback function que seja 
   chamada caso algum dos números informados seja inválido.
   Esta função de Callback exibe somente a msg no console 'Algum número digitado foi inválido';
 */

   function verifyNumbers(num1, num2) {
     if((isNaN(num1) && isNaN(num2)) || (typeof num1 === 'string' || typeof num2 === 'string')) {
       return 'Algum número digitado foi inválido';
     } 
   }

   function sumNumber(num1, num2) {
     if(verifyNumbers(num1, num2)) {
       return 'Algum número digitado foi inválido';
    } else {
      return num1 + num2;
     }
  
   }

   let sumNumbers = sumNumber(10, '11')

   console.log(sumNumbers);

   /**
    4) Crie uma função de busca, que recebe 2 parâmetros (um array e um elemento) e retorna uma mensagem dizendo se aquele elemento
   existe no array e também qual a posição dele (índice)
   // Ex: minhaFuncao( ['a', 'cachorro', 255], 'cachorro' ) => retorna 'O elemento existe no array e a posição dele é: 1'
   // Ex: minhaFuncao( ['a', 'cachorro', 255], 'abacate' ) => retorna 'O elemento não existe no array'
    */

   function searchElement(arr, elem) {
     if(arr.includes(elem)) {
      return `O elemento existe no array e a posição dele é: ${arr.indexOf(elem)}`
     } else {
      return 'O elemento não existe no array'
     }
   }

   console.log(searchElement(['a', 'cachorro', 255], 'a'));



