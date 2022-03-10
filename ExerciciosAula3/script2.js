/**
 1) Crie uma função que recebe como parâmetros um caracter e um array de 
	caracteres e que remova todas as ocorrências daquele caracter no array; 
   // ex. funcaoRemoveCaracterDoArray('a', [ 'c', 'a', 'texto', 'a' ] )
   => deve retornar o array: [ 'c', 'texto' ] (pois removeu todos 'a');
 */

   function arrNoLetter(ele, arr) {
     let newArr = []
     
     for(valor of arr) {
       if(valor !== ele) {
         newArr.push(valor)
       }
     }
     return newArr;
   }

   console.log(arrNoLetter('A',[ 'c', 'A', 'texto', 'b' ]));

   /**
    2) Crie uma função que receba como parâmetro um array de números e retorne
 	  um array ordenado (NÃO pode usar a função array.sort());
   // ex. funcaoOrdenaArray( [4, 5, 7, 3, 0, 5, 2, 2] ) ===> retorna o array [ 0, 2, 2, 3, 4, 5, 5, 7 ] 
    */

   function sortedArray(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          let stored = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = stored;
        }
      }
    }
    return arr;
  }
  console.log(sortedArray([4, 5, 7, 3, 0, 5, 2, 2]));


   /**
    3) Crie uma função que recebe como parâmetro 2 arrays (quaisquer que sejam)
	  e retorne uma concatenação destes 2 arrays;
      */
     function twoArr(arr1, arr2) {

      return arr1.concat(arr2)
     }

     console.log(twoArr(['a'],[2]));

     /**
      4a) Tendo uma lista vazia [], crie uma função que recebe um elemento 
	    qualquer como parâmetro e que adiciona esse elemento à lista;
      */
     
      let arr = [];
      function createArr(ele) {

        arr.push(ele);

        return arr;
      }
  
      console.log(createArr('Caixa'));
      console.log(createArr('leite'));

      /**
       4b) Crie duas funções, uma para remover o último elemento da lista e outra para remover o primeiro elemento da lista;
       */
       

       function removeFirstElement(arr) {
        
        arr.shift();
        return arr
       }

       console.log(removeFirstElement([1,2,3,4,5,6]));
       

       function removeLastElement(arr) {
         arr.pop();
         return arr;
       }
       console.log(removeLastElement([1,2,3,4,5,6]));


       /**
        4c) Crie uma função para remover um elemento específico da lista;
	      // ex: Imagine que temos a lista [ 'a', 4, 'Tiago', 187 ]
        // e chamamos a função  removeElemento('Tiago')
        // deve remover o elemento 'Tiago' da lista, fazendo com que fique [ 'a', 4, 187 ]
        Obs: caso o elemento passado não exista na lista mostrar uma mensagem para o usuário informando.
        */

        function removeElement(arr,ele) {
          let newIndex = arr.indexOf(ele);

          if(newIndex > -1) {
            arr.splice(newIndex, 1)

          } else {
            return `O elemento não foi encontrado`;
          }
          

          return arr;

        }

        console.log(removeElement([ 'a', 4, 'Tiago', 187],'Tiago'));


        /**
         5) Crie uma função que gera um número aleátorio entre 0 e 100;
         */

         function randomNumbers() {

          return Math.round(Math.random() * 100);
         }
         console.log(randomNumbers());

         /**
          5b) Crie uma lista vazia [] e vá adicionando números aleatórios nesta lista até que a lista tenha 10 números inseridos nela;
           OBS: só podem ser adicionados a esta lista os seguintes números:
          - números ímpares que estão entre 14 e 50;
          - números múltiplos de 12;
          */

          
        function createAleatoriesNumbers() {
 
          
          let arr = []
          let continues = true;
          
          while(continues) {
            let random = randomNumbers();
            
            
            if(((random % 2 != 0 && random >= 14 && random <= 50) || (random % 12 === 0)) && !arr.includes(random)) {
              arr.push(random)
            }
            if(arr.length === 10) {
              continues = false;
            }
            
            }
          return arr;
        }

      console.log(createAleatoriesNumbers());