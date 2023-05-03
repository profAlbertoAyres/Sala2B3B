function abrirMenu(){
    const divMenu = document.getElementById('respMenu').classList;
    divMenu.toggle('abrir');
    const ic = document.getElementById('icone');
    if(divMenu.contains('abrir')){
        ic.innerHTML = 'close';
    }else{
        ic.innerHTML = 'menu';
    }
}