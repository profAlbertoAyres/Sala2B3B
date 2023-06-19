const inputs = document.querySelectorAll("[required]");
inputs.forEach((elemento)=>{
    elemento.addEventListener("blur",(evento)=>{
       validaCampo(evento.target)
    });
});

function validaCampo(campo){
    const msnErro = campo.parentNode.querySelector("[data-erro]");
        msnErro.textContent = campo.validationMessage;
}