const adicionar = document.querySelector('#adicionar-tarefa');

function adicionarTarefa() {
    const inputTarefa = document.getElementById('tarefa');
    const textoTarefa = inputTarefa.value;

    if (textoTarefa.trim() !== '') {
        const listaTarefas = document.getElementById('lista-tarefas');
        const novaLi = document.createElement('li');
        const novaSpan = document.createElement('span');
        const novaDiv = document.createElement('div');
        const imgExclui = document.createElement('img');
        const imgCheck = document.createElement('img');

        novaSpan.innerText = textoTarefa;

        listaTarefas.appendChild(novaLi);
        novaLi.appendChild(novaSpan);
        novaLi.appendChild(novaDiv);
        novaDiv.appendChild(imgCheck);
        novaDiv.appendChild(imgExclui);

        novaLi.className = 'novali';
        novaSpan.className = 'novali__texto';
        novaDiv.className = 'btns';
        imgCheck.className = 'btns__icons';
        imgExclui.className = 'btns__icons lixeira';

        imgExclui.setAttribute('src', 'assets/img/excluir3.png');
        imgCheck.setAttribute('src', 'assets/img/check3.png');


        imgExclui.addEventListener('click', function () {
            novaLi.remove();
        });

        imgCheck.addEventListener('click', function () {
            novaSpan.classList.toggle('riscado');
        });

        inputTarefa.value = '';
    }
}

adicionar.addEventListener('click', adicionarTarefa);
