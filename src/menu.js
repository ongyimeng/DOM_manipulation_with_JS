const menu = () => {
    const content = document.getElementById("content")
    const body = document.querySelector("body")

    const container = document.createElement('div')
    const headline = document.createElement('h1')
    const tagline = document.createElement('p')
    const menu = document.createElement('IMG')

    container.id = 'container'

    headline.innerHTML = 'OUR MENU'
    tagline.innerHTML = 'FUN IS CHUM'
    menu.setAttribute("src", "https://static.wixstatic.com/media/81feaf_fd8de62ead460c9917c58936426f5f04.jpg/v1/fill/w_490,h_504,al_c,lg_1,q_80/81feaf_fd8de62ead460c9917c58936426f5f04.webp")

    container.appendChild(headline)
    container.appendChild(tagline)
    container.appendChild(menu)

    body.insertBefore(container, content)

}

export default menu;