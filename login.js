// olinho muda pra password e volta pra text
let btn = document.querySelector('.fa-eye')

btn.addEventListener('click',()=>{
  let inputSenha = document.querySelector('#senha')
  //se senha for do type password muda o tipo pra texto
  if(inputSenha.getAttribute('type')== 'password'){
    inputSenha.setAttribute('type', 'text')
  }else{
    inputSenha.setAttribute('type','password')
  }

})
//entrar 
function entrar(){
 //muittas variaveis
  let usuario = document.querySelector('#usuario')
  let userLabel = document.querySelector('#usuerLabel')

  let senha = document.querySelector('#senha')
  let senhaLabel = document.querySelector('#senhaLabel')

  let msgError = document.querySelector('#msgError')
  let listaUser = []
//criando objeto para desestruturar os dados, pegar do local storage
let userValid = {
  nome:  '',
  user:  '',
  senha: ''

}


listaUser = JSON.parse(localStorage.getItem('listaUser'))

// vai varrer a lista de user item por item, e se tiver certo vai preencher o objeto aabaixo
listaUser.forEach((item )=>{
  if(usuario.value == item.userCad && senha.value == item.senhaCad){
  userValid = {
    
    user:  item.userCad,
    senha: item.senhaCad 
  }

  }  
})

if(usuario.value == userValid.user && senha.value == userValid.senha){
// aqui vc coloca o site pra ele ir
window.location.href = 'main.html'
}else{
msgError.setAttribute('style' , 'display: block')
msgError.innerHTML = 'n deu certo'
}

}
