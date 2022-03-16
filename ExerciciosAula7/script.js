let listToDo = [];
let id = 1;

const createDiv = () => {
  let container = document.getElementById('to-do');
  let containerNoText = document.getElementById('no-to-do')
  let divToDo = document.createElement('ul');
  let input = document.getElementById('task');
  let li = document.createElement('li');
  let texto = document.createTextNode(input.value);
  let apagar = removeToDo(li);
  let change = changeColor(divToDo)



  if(!input.value) {
    alert('Digite um valor!!')
  } else {

    divToDo.setAttribute('class', 'task')
    container.appendChild(divToDo);
    divToDo.appendChild(li)
    // li.appendChild(change)
    listToDo.push({
      id: id,
      description: input.value
      
    })
    
  
    li.appendChild(texto)
    li.setAttribute('class','task-text')
    li.setAttribute('task_id', id)
    id++
    console.log(listToDo);
  }

  if(listToDo.length > 0) {
    containerNoText.style.display = 'none'
  }
  
}

const removeToDo = (li) => {
  li.innerText += ' '
  let iconRemove = document.createElement('button');
  let icon = document.createElement('i');

  iconRemove.setAttribute('class', 'button-taks')
  iconRemove.appendChild(icon)
  icon.setAttribute('class', 'fa-solid fa-trash');


  li.appendChild(iconRemove)
  iconRemove.addEventListener('click', (event) => {
    let parentI = event.target.parentElement.parentElement;

    
    let idTasks =  parentI.attributes.task_id.value

    let newArr = listToDo.filter(item => parseInt(idTasks) != item.id)
    
    listToDo = newArr
    li.parentElement.remove()
    
    console.log(listToDo);
  })

}

const changeColor = (div) => {
  div.innerText += ' '

  let buttonChange = document.createElement('button')
  let icon = document.createElement('i');

  buttonChange.appendChild(icon);
  buttonChange.setAttribute('class','btn-change')
  icon.setAttribute('class', 'fa-solid fa-check')
  div.appendChild(buttonChange)

  buttonChange.addEventListener('click', () => {

    div.classList.remove('class', 'task')
    div.classList.add('class', 'div-green')

    icon.setAttribute('class', 'fa-solid fa-x')
  })
}

const createToDo = () => {
  let add = document.getElementById('add-task');
  
  add.addEventListener('click', createDiv)

}




createToDo();

