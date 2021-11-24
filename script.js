function recupera() {
  const recuperar = localStorage.getItem('elementos');
  const atribuir = document.getElementById('lista-tarefas');
  atribuir.innerHTML = recuperar;
}
window.onload = recupera;
const limpa = document.getElementById('apaga-tudo');
limpa.addEventListener('click', () => {
  const elementoLimpar = document.getElementById('lista-tarefas');
  elementoLimpar.innerText = '';
});

function removeClass() {
  const elementos = document.getElementsByClassName('target');
  if (elementos.length > 0) {
    elementos[0].classList.remove('target');
  }
}
const elementos = document.getElementById('lista-tarefas');
elementos.addEventListener('dblclick', (event) => {
  event.target.classList.toggle('completed');
});
function adicionaEventos() {
  const elementos2 = document.querySelectorAll('li');
  for (let index = 0; index < elementos2.length; index += 1) {
    elementos2[index].addEventListener('click', (event) => {
      removeClass();
      const evento = event.target;
      evento.classList.add('target');
    });
  }
}
const envia = document.getElementById('criar-tarefa');
envia.addEventListener('click', () => {
  const valorCriando = document.getElementById('texto-tarefa');
  const texto = valorCriando.value;
  if (texto !== '') {
    const valorPai = document.getElementById('lista-tarefas');
    const criaTarefa = document.createElement('li');
    criaTarefa.innerText = texto;
    valorPai.appendChild(criaTarefa);
    valorCriando.value = '';
    adicionaEventos();
  }
  else{alert('digite uma tarefa')}
});

const limpaFinalizados = document.getElementById('remover-finalizados');
limpaFinalizados.addEventListener('click', () => {
  const elementosRemover = document.getElementsByClassName('completed');
  const totais = elementosRemover.length - 1;
  if (totais >= 0) {
    for (let index = totais; index >= 0; index -= 1) {
      elementosRemover[index].remove();
    }
  }
});
const removeSelecionado = document.getElementById('remover-selecionado');
removeSelecionado.addEventListener('click', () => {
  const elementoRemove = document.getElementsByClassName('target')[0];
  elementoRemove.remove();
});

const salvando = document.getElementById('salvar-tarefas');
salvando.addEventListener('click', () => {
  const salvar = document.getElementById('lista-tarefas');
  localStorage.setItem('elementos', salvar.innerHTML);
});

const moverBaixo = document.getElementById('mover-baixo');
moverBaixo.addEventListener('click', () => {
  const descer = document.querySelector('.target');
  const onde = document.getElementById('lista-tarefas');
  if (descer !== null && descer.nextElementSibling !== null) {
    onde.insertBefore(descer.nextElementSibling, descer);
  }
});
const moverCima = document.getElementById('mover-cima');
moverCima.addEventListener('click', () => {
  const subir = document.querySelector('.target');
  const onde = document.getElementById('lista-tarefas');
  if (subir !== null && subir.previousElementSibling !== null) {
    onde.insertBefore(subir, subir.previousElementSibling);
  }
});
