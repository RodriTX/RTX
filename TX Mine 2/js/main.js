let btnMenu = document.querySelector('.btn-menu');
let menu = document.querySelector('.list-container');
let containerMenu = document.querySelector('.menu');
let activador = true;



//////// MENU DE NAVEGACION ////////

btnMenu.addEventListener('click', () => {

    document.querySelector('.btn-menu i').classList.toggle('fa-times');

    if(activador){

        menu.style.left = "0";
        menu.style.transition = "0.5s";

        activador = false;
        
    }else{
        activador = false;

     menu.style.left = "-100%";
     menu.style.transition = "0.5s";

     activador = true;
    }

});


//////// EFECTOS SCROLL ////////

let goTop = document.querySelector('.go-top');

window.onscroll = () => {
    
    //MOSTRAR Y OCULTAR ESTILOS

    let arriba = window.pageYOffset;

    if(arriba <= 600) {
        containerMenu.style.borderBottom = "none";

        goTop.style.right = "-100%";
    }else{
        containerMenu.style.borderBottom = "2px solid #222831";

        goTop.style.right = "8px";
    }

};

goTop.addEventListener('click', () => {
    
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

});

let verAbajo = document.querySelector('#abajo');
 verAbajo.addEventListener('click', () => {
     document.body.scrollTop = 600;
     document.documentElement.scrollTop = 600;
 })