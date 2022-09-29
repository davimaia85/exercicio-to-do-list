
function atualizarQtde() {
    document.getElementById('numeros').innerHTML = `${buscar().length}`;
    
}

function listarTarefas() {
    let conteudo = buscar().map(function(tarefa){
    //usar o metodo de array map para atualizar a lista
   return `<div>
        <input type="checkbox"> ${tarefa.titulo} 
   
        <span class="badge ${tarefa.prioridade === 'baixa' && 'bg-primary'}
                    ${tarefa.prioridade === 'media' && 'bg-warning'}
                    ${tarefa.prioridade === 'alta' && 'bg-danger'}">
         ${tarefa.prioridade}
         </span>
   
    </div>
    `;

    });
    document.getElementById('tarefas').innerHTML += conteudo.sort().join('');
    
} 

function addTarefa(){
    let titulo = document.getElementById('input_nova_tarefa').value;
    let prioridade = document.getElementById('input_prioridade').value;
       
    //validar o que o usuario escreve no input
        if(titulo.trim() === ''){
            alert("tarefa inválida");
            return;
        }
        if(prioridade === '---prioridade---'){
            alert("selecionar uma prioridade!");
            return;
        }

        let title = buscar().map((tarefa) => {
            return tarefa ? tarefa.titulo : "";
        });
        
        let existente = false;
        title.forEach((i) => {
            if(true === i.includes(titulo)){
                existente = true;
                return;
            }
        });
        
        if(existente == false){
            salvar(titulo, input_prioridade.value);

        }else{
            alert('tarefa existente');
        }
        
    document.getElementById('input_nova_tarefa').value = '';
    
}

atualizarQtde();
listarTarefas();




