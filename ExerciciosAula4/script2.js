/**
 1) Crie uma função que inverta um número; (NÃO pode usar a função revert())
   Exemplo: minhaFuncao(370914) // retorno esperado: 419073 (É o número 419073 e não a string '419073', o mesmo vale para o parâmetro passado);
 */

 function invertNumbers(number) {

  let arrNumbers = number.toString().split('')


  for(let i = 0; i < arrNumbers.length; i++) {
    for(let j = i + 1;j < arrNumbers.length; j++) {
      let aux = arrNumbers[i]
      arrNumbers[i] = arrNumbers[j]
      arrNumbers[j] = aux

    }
  }

  return arrNumbers.join('');

 }

 console.log(invertNumbers(370914))

/**
 2) Crie uma função que recebe um array de números e encontre o segundo menor e o segundo maior número do array
   e imprima eles no console (imprime somente 1 número se ele for o segundo menor e o segundo maior também);
   Exemplo: minhaFuncao( [1, 3, 5, 7, 9] ) // neste caso, imprime: 3 e imprime: 7
   Exemplo: minhaFuncao( [1, 3, 5] ) // neste caso, imprime somente o: 3

 */

   let numbers = [1, 3, 5, 7, 9];
   
   
   function maxMinNumbers() {
       for(let j = 0 ; j < numbers.length; j++){
           for(let i = 0;i < numbers.length; i++){
                   if(numbers[i] < numbers[i+1]){
                       let temp = numbers[i];
                       numbers[i] = numbers[i+1];
                       numbers[i+1] = temp;
                   }
               }
       }
       let bigger = numbers[1];
       let small = numbers[numbers.length - 2]
       if(bigger === small) {
           return `${bigger}`
       } else {
           return `${bigger} ${small}`
       }
   }
   console.log(maxMinNumbers(numbers));  


  /**
   3) Crie uma função que recebe uma string e coloca todas as primeiras letras em maiúsculo;
   Exemplo: minhaFuncao( 'hoje faremos o trabalho em dupla, que legal - sqn' )
   // neste caso retorna: 'Hoje Faremos O Trabalho Em Dupla, Que Legal - Sqn';
   */

   function firstLetterCapital(string) {
      let arr = string.split(' ');
      let temp;
      for(let i = 0; i < arr.length; i++) {
        temp = arr[i]
        arr[i] = temp[0].toUpperCase() + temp.slice(1)
      }

      return arr.join(' ');
      
      
   }


   console.log(firstLetterCapital('hoje faremos o trabalho em dupla, que legal - sqn'));

   /**
    4) Crie uma função que receba uma string e imprime uma mensagem com a quantidade de vogais e a quantidade de consoantes na string 
    da seguinte forma: 'A string [stringInformada] tem X vogas e X consoantes';
    
    // ex: contarVogaisConsoantes('Oi, tenho 5 anos de idade!!! ;D')  
    =>  imprime:  A string "Oi, tenho 5 anos de idade!!! ;D" tem 10 vogais e 9 consoantes
    */


    function countConsonant(str) {
      let vowels = ['a','e','i','o','u'];
      let consonant = ['b','c','d','f','g','j','k','l','m','n','p','q','r','s','t','v','w','x','z']
      let arr = str.toLowerCase().split('')

      let totalConsonant = 0;
      let totalVowels = 0;

      for(let i = 0; i < arr.length;i++) {
        for(let j = 0; j < vowels.length; j++) {
          if(arr[i] === vowels[j]) {
            totalVowels++;
          } 
          
        }
          for(let k = 1; k < consonant.length; k++) {
            if(arr[i] === consonant[k]) {
              totalConsonant++;
            }
          }
        
      }

     
      
      return `A string "${str}" tem ${totalVowels} vogais e ${totalConsonant} consoantes`

    }

    console.log(countConsonant('Oi, tenho 5 anos de idade!!! ;D'));


    /**
     5) Crie uma função que imprima no console todas as possíveis combinações de uma string;
      // ex: imprimirCombinacoes('tri')
      => possiveis combinações da string "tri":  
      't', 'tr', 'ti', 'tri', 'tir', 'r', 'rt', 'ri', 1 'rit', 'rti', 'i', 'ir', 'it', 2 'irt', 'itr'
     */

    
    function printCombinations(str) {
      let arr = str.split('');
      let arrCombinations = [];
      let aux = ''; // 0 = T  1 = R  2 = I

      for(let i = 0; i < arr.length; i++) {
        aux += arr[i];
        arrCombinations.push(aux)
        
        for(let j = 0; j < arr.length; j++) {
          if(i != j) {
            aux += arr[j]
            arrCombinations.push(aux)
          }
          
        }
        aux = arr[i]
        for(let k = (arr.length - 1); k >= 0; k--) {
          if(i != k) {
            aux += arr[k]
            arrCombinations.push(aux)
          }
          
        }

        aux = '';
      }

      return arrCombinations;

    }

    console.log(printCombinations("tri"));



