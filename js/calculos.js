// document.querySelector("#btnSomar").addEventListener("click",somarValores);

// function somarValores(){
//     var n1 = parseFloat(document.querySelector("#numero1").value);
//     var n2 = parseFloat(document.querySelector("#numero2").value);
//     var soma = n1+n2;
//     document.querySelector("#resultado").value = soma;
// }

const bSomar = document.querySelector("#btnSomar");

bSomar.addEventListener("click", ()=>{
    var n1 = parseFloat(document.querySelector("#numero1").value);
    var n2 = parseFloat(document.querySelector("#numero2").value);
    somar(n1, n2);
});

function somar(p1, p2){
    var soma = p1+p2;
    document.querySelector("#resultado").value = soma;
}