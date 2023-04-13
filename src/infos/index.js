import { data } from "./data.js"

let current_URL = window.location.search;
let url = new URLSearchParams(current_URL)

var id

for (let i of url.entries()) {
    id = i[1]
}

document.getElementById('root').innerHTML = `
    <div class="titulo">${data[id].titulo}</div>
    <div class="container">
        <img src="${data[id].imagem_1}" style="width: ${data[id].img_w}; heigth: width: ${data[id].img_h}">
        <div class="desc_1">${data[id].descricao_1}</div>
    </div>
    <div class="container">
        <div class="desc_1">${data[id].descricao_2}</div>
        <img src="${data[id].imagem_2}" width="${data[id].img_w}" height="${data[id].img_h}">
    </div>
  
`

console.log(data[id].button_event)

if (data[id].button_event != undefined){
    
    document.getElementById('root').innerHTML = `
    <div class="titulo">${data[id].titulo}</div>
    <div class="container">
        <img src="${data[id].imagem_1}" style="width: ${data[id].img_w}; heigth: width: ${data[id].img_h}">
        <div class="desc_1">${data[id].descricao_1}</div>
    </div>
    <div class="container">
        <div class="desc_1">${data[id].descricao_2}</div>
        <img src="${data[id].imagem_2}" width="${data[id].img_w}" height="${data[id].img_h}">
    </div>
    <button onclick="${data[i].button_event}">Clica aqui</button>
    `

}else{
    
    document.getElementById('root').innerHTML = `
    <div class="titulo">${data[id].titulo}</div>
    <div class="container">
        <img src="${data[id].imagem_1}" style="width: ${data[id].img_w}; heigth: width: ${data[id].img_h}">
        <div class="desc_1">${data[id].descricao_1}</div>
    </div>
    <div class="container">
        <div class="desc_1">${data[id].descricao_2}</div>
        <img src="${data[id].imagem_2}" width="${data[id].img_w}" height="${data[id].img_h}">
    </div>
    `
}