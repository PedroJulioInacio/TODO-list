const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const listCompleta = document.querySelector('.list-tasks')

let myListItens = []


function adicionarNovaTarefa() {
    myListItens.push({
        tarefa: input.value,
        concluida: false
    })

    input.value = ''

    mostrarTarefas()
}

function mostrarTarefas() {
    let novaLi = ''

    myListItens.forEach((item, index) => {
      novaLi =  novaLi + `
        <Li class="task ${item.concluida && "done"}"> 
            <img class= "check" src="./img/check (2).png" onclick="concluirTarefa(${index})">
            <p>${item.tarefa}</p>
            <img class="imagem-lixeira" src="./img/trash.png" onclick="deletarItem(${index})">
        </Li>
      `
    })
  
    listCompleta.innerHTML = novaLi

   localStorage.setItem('lista', JSON.stringify(myListItens))

}

function concluirTarefa(index) {
myListItens[index].concluida = !myListItens[index].concluida 


mostrarTarefas()
}

function deletarItem (index) {
    myListItens.splice(index, 1)

    mostrarTarefas()
}

function recarregarTarefas() {
    const tarefasDoLocalStorage = localStorage.getItem('lista')
   
    myListItens = tarefasDoLocalStorage ? JSON.parse(tarefasDoLocalStorage) : []

    console.log(tarefasDoLocalStorage)

    mostrarTarefas()
}

recarregarTarefas()
button.addEventListener('click', adicionarNovaTarefa)