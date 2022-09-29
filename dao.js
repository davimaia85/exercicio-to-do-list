
let lista_tarefas = [];

//funcao para receber os dados e escrever na lista
function salvar(titulo, prioridade){
    let dados = buscar();
    dados.push({
        titulo: titulo,
        prioridade: prioridade,
    });

   localStorage.setItem('tarefas', JSON.stringify(dados)) //usando stringfy
}

//buscar os arquivos no navegador (application > local storage >)
function buscar(){
    return JSON.parse(localStorage.getItem('tarefas') || '[]'); //usando o parse
}