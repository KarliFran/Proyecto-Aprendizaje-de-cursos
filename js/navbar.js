AOS.init();
function accion(){
    console.log('funciona');
    let ancla = document.getElementsByClassName('nav-item');
    for (var i = 0; i < ancla.length; i++ ){
        ancla[i].classList.toggle('desaparece');
    }
}

