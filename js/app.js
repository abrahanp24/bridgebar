// Variable
const btnMenu = document.querySelector('.btn-menu');
const menu = document.querySelector('.list');
const boton = document.querySelector('.boton');
let on_off = true;


// Responsive Menu
btnMenu.addEventListener('click', () => {
     
    if (on_off) {
       menu.style.left = "0";
       boton.style.left = "0";
       menu.style.transition = "300ms";
       on_off = false;
       boton.style.transition = "300ms";
       on_off = false;
    }else{
        on_off = false;
        menu.style.left = "-100%";
        boton.style.left = "-100%";
        menu.style.transition = "300ms";
        on_off = true;
        boton.style.transition = "300ms";
        on_off = true;
    }

});


