let menu = document.getElementById('menu-icon');
let navlist = document.querySelector('.alllist');


menu.addEventListener('click',()=>
{
    menu.classList.toggle("bx-x");
    navlist.classList.toggle("open");
}
);