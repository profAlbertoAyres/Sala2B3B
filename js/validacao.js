import idadeMaior from "./vIdade.js";

const inputs = document.querySelectorAll("[required]");
inputs.forEach((elemento)=>{
    elemento.addEventListener("blur",(evento)=>{
       validaCampo(evento.target)
    });
    elemento.addEventListener("invalid", evento => evento.preventDefault());
});

const erros =[
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'tooShort',
    'customError'
]

const mensagensErro = {
    nome:{
        valueMissing: "O campo nome é obrigatório, deixa de preguiça e digite seu nome completo",
        patternMismatch: "Por favor, preenha um nome válido.",
        tooShort: "Por favor, preencha com um nome completo."
    },
    email:{
        valueMissing: "O campo de email é obrigatório",
        typeMismatch: "Por favor, preencha o campo de email corretamente",
        tooShort: "Por favor, preencha com um email válido."
    },
    nascimento:{
        valueMissing: "O campo de Nascimento é obrigatório",
        customError: "Você deve ser maior que 18 anos para cadastro."
    },
    celular:{
        valueMissing: "O campo Celular é obrigatório.",
        patternMismatch: "Por favor, preenha um celular válido, formato (69)99999-9999.",
        tooShort: "O campo celular não tem caracteres suficiente."
    }
}

function validaCampo(campo){
    const msnErro = campo.parentNode.querySelector("[data-erro]");
    let mensagem = "";
    if(campo.name === 'nascimento' && campo.value != ""){
        idadeMaior(campo);
    }
    console.log(campo.validity)
    erros.forEach(erro => {
        if(campo.validity[erro]){
            mensagem = mensagensErro[campo.name][erro]
        }
    });
    const inputValida = campo.checkValidity();
    if(!inputValida){
        msnErro.textContent = mensagem;
    }else{
        msnErro.textContent = "Campo Ok.";
    }
}