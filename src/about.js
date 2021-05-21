const about = () => {
    const content = document.getElementById("content")
    const body = document.querySelector("body")

    const container = document.createElement('div')
    const headline = document.createElement('h1')
    const tagline = document.createElement('p')

    container.id = 'container'

    headline.innerHTML = 'CHUM BUCKET'
    tagline.innerHTML = 'By Sheldon Plankton'
    container.appendChild(headline)
    container.appendChild(tagline)

    body.insertBefore(container, content)

}

export default about;