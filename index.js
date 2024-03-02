
let global;

let corpo = document.querySelector('#corpo')

const cpusImg = {
    i5: './img/i5-img.jpg',
    i7: './img/i7-img.jpg',
    i9: './img/i9-img.jpg'
}

const gpuImg = {
    gtx1650: './img/GTX1650-img.jpg',
    rtx2060: './img/RTX2060-img.jpg',
    RTX3050: './img/RTX3050-img.jpg'
}

const teste = [
    {id: 'block', class: 'classe'}, 
]

const createElements = (create, attr, local) => {
    const criarEl = document.createElement(create)
    const tags = Object.entries(attr)
    tags.forEach(([key, value]) => {
        criarEl.setAttribute(key, value)
        local.appendChild(criarEl)
    })
}

const blocoImagem = (varHard) => {
    const ObjImg = varHard === "cpu" ? Object.entries(cpusImg) : Object.entries(gpuImg)
    console.log(varHard)
    console.log(ObjImg)
    ObjImg.forEach(() => {
        createElements('div', 
        {id: 'blockImg', class: 'blocoImg'}, corpo)
    })
    const areaImgs = document.querySelectorAll('#blockImg')
    ObjImg.forEach(([nameHard, localImagem], index) => {
        createElements('img', {src: localImagem}, areaImgs[index])
    })
}     

function inserir(peca) {
    corpo.innerHTML = ""
    global = peca 
    blocoImagem(global)
}
