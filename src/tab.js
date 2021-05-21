const tabs = () => {
    const content = document.getElementById("content")

    const about_tab = document.createElement("button")
    const menu_tab = document.createElement("button")

    about_tab.innerHTML = 'About'
    about_tab.id= 'about'
    menu_tab.innerHTML = 'Menu'
    menu_tab.id= 'menu'


    content.appendChild(about_tab)
    content.appendChild(menu_tab)

}

export default tabs;