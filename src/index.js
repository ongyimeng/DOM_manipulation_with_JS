import about from './about.js'
import menu from './menu.js'
import tabs from './tab.js'
import clear from './clear.js'

tabs();
about();
/*
const about_btn = document.getElementById('about')

about_btn.onclick = () => {
    clear();
    about();
    
}

const menu_btn = document.getElementById('menu')

menu_btn.onclick = () => {
    clear()
    menu();
}

*/

const about_btn = document.getElementById('about')

about_btn.addEventListener( "click", () => {
    clear();
    about();
    
})

const menu_btn = document.getElementById('menu')

menu_btn.addEventListener( "click", () => {
    clear();
    menu();
    
})