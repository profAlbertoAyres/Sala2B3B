export default function idadeMaior(campo){
    const nasc = new Date(campo.value);
    if(!maior(nasc)){
        campo.setCustomValidity('É menor');
    }else{
        campo.setCustomValidity('');
    }
}

function maior(data){
    const atual = new Date();
    const maioridade = new Date(data.getUTCFullYear()+18, data.getUTCMonth(), data.getUTCDate());
    return atual >= maioridade;
}