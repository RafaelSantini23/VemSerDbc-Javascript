let listProducts = [];

let numberPerId = 1;


const registerProductsList = () => {
  let continuesQuestion = true;
  let id = numberPerId++;
  let description;
  let price;
  let newPrice;
  let confirmed = false;
  let numberAttempts = 0;
  const minimumValue = 0;

  while (continuesQuestion) {
    description = prompt("Digite a descrição do produto: ");
    price = prompt("Digite o preço do produto: ");
    newPrice = price.replace(',','.')
    newPrice = parseFloat(newPrice)
    let validateText = description.length < 1 || description === " ";
    numberAttempts++;

    if(isNaN(newPrice) || validateText || newPrice <= minimumValue) {
      alert("Verifique se a descrição esta vazia, ou o preço possui letras")
    } else {
      alert("Produto cadastrado com sucesso!")
      continuesQuestion = false
    }

    if(numberAttempts === 3) {
      confirmed = confirm("Deseja continuar?")
      if(confirmed) {
        numberAttempts = 0;
      } else {
        continuesQuestion = false;
      }
     }
    }

    let productList = {
      id: id,
      description: description,
      price: newPrice,
    };

    return listProducts.push(productList);


};


const removeProducts = () => {
  let id;
  let continuesQuestion = true;
  let numberAttempts = 0;
  let confirmed = false;
  
  let ids = listProducts.map((e) => {
    return e.id
   })


  while (continuesQuestion) {
    let findProduct = listProducts.find((e) => id == e.id);
    id = parseInt(prompt(`Digite o ID que você deseja deletar:\nOs ids,existentes são:${ids} `));
    
    numberAttempts++;
    if(isNaN(id)) {
      alert("Digite um numero válido!")
    } else if(!findProduct) {
      alert("Este ID não existe no nosso sistema")
    } else {
      alert("Produto excluido com sucesso!")
      continuesQuestion = false
    }

    if(numberAttempts === 3) {
      confirmed = confirm('Deseja continuar?');
      if(confirmed) {
        numberAttempts = 0;
      } else {
        continuesQuestion = false;
      }
    } 

  }

  let newArr = listProducts.filter(e => id != e.id);


  return listProducts = newArr;
};

const findProduct = () => {
  let id;
  let findProduct;
  let continuesQuestion = true;  
  let confirmed = false;
  let numberAttempts = 0;

  let ids = listProducts.map((e) => {
    return e.id
   })

  while (continuesQuestion) {
    
    id = parseInt(prompt(`Digite um ID para procurar:\nOs ids,existentes são:${ids} `));
    findProduct = listProducts.find((e) => id == e.id);

    numberAttempts++
    
    if(isNaN(id)) {
      alert('Digite um numero valido!')
    } else if(!findProduct) {
      alert('Este ID não existe no sistema!!')
    } else {
      alert(`O ID do produto é:  ${findProduct.id}\nA descrição do produto é: ${findProduct.description}\nO preço do produto é: ${findProduct.price} `);
      continuesQuestion = false;
    }
    
    

    if(numberAttempts === 3) {
      confirmed = confirm("Deseja continuar?")
      if(confirmed){
        numberAttempts = 0;
      } else {
        continuesQuestion = false;
      }
    } 

  }
  return 

};

const totalAmount = () => {
  let arr = listProducts.map((e) => {
    return e.price;
  });

  let sum = arr.reduce((valueBefore, valueAfter) => {
    return valueBefore + valueAfter;
  });

  return alert(`A soma de todos os produtos é: R$${sum} `);
};

const productsDetails = () => {

  let optionsMenu = parseInt(
    prompt(
      "1)Mostrar lista de produtos cadastrados\n2)Mostrar descrições dos produtos\n3)Selecionar descrição desejada\n4)Voltar "
    )
  );

  switch (optionsMenu) {
    case 1:
      console.table(listProducts);
      break;
    case 2:
      console.table(listProducts, ['description']);
      break;
    case 3:
      let description = prompt("Digite a descrição que você deseja acessar:");
      let foundProducts = listProducts.filter(e => e.description.toLowerCase().includes(description.toLowerCase()));
      if (foundProducts.length != ' ') {
        console.table(foundProducts);
      } else {
        alert('Não existe produtos com essa descrição');
      }
      break;
    case 4, null:
      callMenu();
      break;
    default:
      break;
  }
};


const callMenu = () => {
  do {
    userQuestion = parseInt(
      prompt(
        "1)Cadastrar um produto\n2)Excluir um produto\n3)Procurar produto\n4)Detalhes dos produtos\n5)Verificar total dos produtos\n6)Verificar preços válidos\n7)Sair"
      )
    );

    switch (userQuestion) {
      case 1:
        registerProductsList();
        break;
      case 2:
        if (listProducts.length < 1) {
          alert("Essa opção não está disponivel, pois não existem produtos cadastrados!")
        } else {
          removeProducts();
        }
        break;
      case 3:
        if (listProducts.length < 1) {
          alert("Essa opção não está disponivel, pois não existem produtos cadastrados!")
        } else {
          findProduct();
        }
        break;
      case 4:
        if (listProducts.length < 1) {
          alert("Essa opção não está disponivel, pois não existem produtos cadastrados!")
        } else {
          productsDetails();
        }
        break;
      case 5:
        if (listProducts.length < 1) {
          alert("Essa opção não está disponivel, pois não existem produtos cadastrados!")
        } else {
          totalAmount();
        }
        break;
      case 6:
        let validNumbers = listProducts.every((e) => { return e.price > 0 });
        if ((listProducts.length > 0 && validNumbers)) {
          alert("Todos os produtos são validos!")
        } else {
          alert('Não existem produtos validos!')
        }
        break;
      case 7:
        alert('Obrigado por utilizar nosso sistema!');
      default:
        break;
    }
  } while (userQuestion != 7);
};

callMenu();