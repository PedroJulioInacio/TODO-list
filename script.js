const button = document.querySelector('.button-add-task');
const input = document.querySelector('.input-task');
const listCompleta = document.querySelector('.list-tasks');

let myListItens = [];


function adicionarNovaTarefa() {
  const tarefaTexto = input.value.trim(); 

  if (!tarefaTexto) {
    alert("Digite uma tarefa válida!");
    return; 
  }

  myListItens.push({
    tarefa: tarefaTexto,
    concluida: false
  });

  input.value = '';
  mostrarTarefas();
}

function mostrarTarefas() {
  listCompleta.innerHTML = myListItens
    .map((item, index) => `
      <li class="task ${item.concluida ? "done" : ""}"> 
        <img class="check" src="./img/check (2).png" onclick="concluirTarefa(${index})" alt="Concluir">
        <p>${item.tarefa}</p>
        <img class="imagem-lixeira" src="./img/trash.png" onclick="deletarItem(${index})" alt="Excluir">
      </li>
    `)
    .join('');

  localStorage.setItem('lista', JSON.stringify(myListItens));
}


function concluirTarefa(index) {
  myListItens[index].concluida = !myListItens[index].concluida;
  mostrarTarefas();
    
function deletarItem(index) {
  myListItens.splice(index, 1);
  mostrarTarefas();
}

function recarregarTarefas() {
  const tarefasDoLocalStorage = localStorage.getItem('lista');
  myListItens = tarefasDoLocalStorage ? JSON.parse(tarefasDoLocalStorage) : [];
  mostrarTarefas();
}

recarregarTarefas();
button.addEventListener('click', adicionarNovaTarefa);


input.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    adicionarNovaTarefa();
  }
});

recarregarTarefas()
button.addEventListener('click', adicionarNovaTarefa)
