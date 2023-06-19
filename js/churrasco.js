const formulario = document.querySelector("#meuForm")
const convidados = document.querySelector("#lista-convidados")

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault()

    novoElemento(evento.target.elements['aluno'].value, evento.target.elements['qtde'].value)
})

function novoElemento(aluno, qtde) {
    const novoItem = document.createElement('li');
    novoItem.innerHTML = aluno;
    novoItem.classList.add("item");
    const numeroItem = document.createElement('span');
    numeroItem.innerHTML = qtde;
    novoItem.appendChild(numeroItem);
    convidados.appendChild(novoItem);
}

function mudaElemento(){
    console.log(document.querySelector("[data-id='"+alunoUpdate.id+"']").innerHTML = alunoUpdate.qtde);
}

cod?ExecSeverdadeira:ExecseFalso