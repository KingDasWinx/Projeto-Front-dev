//atribuindo as variaveis
let btn = document.querySelector('#verSenha')
let btnConfirm = document.querySelector('#verConfirmSenha')


let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false

let usuario = document.querySelector('#usuario')
let labelUsuario = document.querySelector('#labelUsuario')
let validUsuario = false

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false

let confirmSenha = document.querySelector('#confirmSenha')
let labelConfirmSenha = document.querySelector('#labelConfirmSenha')
let validConfirmSenha = false
let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')
//evento aron function se tiver menos que 2 caracter fica red se nao fica green
nome.addEventListener('keyup',()=>{
  //length tamanho de caracter, definindo minimo de caracter
  if(nome.value.length <=2){
    labelNome.setAttribute('style', 'color: red')
    labelNome.innerHTML = 'insira no minimo 3 caracters'
    nome.setAttribute('style', 'border-color:red')
    validNome= false
  }else{
    labelNome.setAttribute('style', 'color: green')
    labelNome.innerHTML = 'Nome'
    nome.setAttribute('style', 'border-color:green  ')
    validNome=true
}})
  senha.addEventListener('keyup',()=>{
    //length tamanho de caracter, definindo minimo de caracter
    if(senha.value.length <=5 ){
      labelSenha.setAttribute('style', 'color: red')
      labelSenha.innerHTML = 'insira no minimo 5 caracters'
      senha.setAttribute('style', 'border-color:red')
      validSenha= false
    }else{
      labelSenha.setAttribute('style', 'color: green')
      labelSenha.innerHTML = 'senha'
      senha.setAttribute('style', 'border-color:green  ')
      validSenha = true
    }

})
confirmSenha.addEventListener('keyup',()=>{
  //sesemha for diferente de confir, senha
  if(senha.value != confirmSenha.value){
    confirmSenha.setAttribute('style', 'color: red')
    labelConfirmSenha.innerHTML = 'confirmar senha*as senhas nao conferem'
    confirmSenha.setAttribute('style', 'border-color:red')
    validConfirmSenha = false
  }else{
    labelConfirmSenha.setAttribute('style', 'color: green')
    labelConfirmSenha.innerHTML = 'confirmar senha'
    confirmSenha.setAttribute('style', 'border-color:green  ')
    validConfirmSenha= true  
  }

})

//funçao de cadastro,
function cadastrar(){
 
  if( validSenha && validNome && validConfirmSenha  ){
//criando meio q um banco de dados na local storage
    let listaUser = JSON.parse(localStorage.getItem('listaUser')||'[]')
  
    listaUser.push(
      {
        nomeCad: nome.value,
        userCad: usuario.value,
        senhaCad: senha.value,
    
      }
    )
    
    localStorage.setItem('listaUser', JSON.stringify(listaUser))
    
  

msgSuccess.setAttribute('style','display: block ')
msgSuccess.innerHTML = 'preenchendo cadastro'
msgError.setAttribute('style','display: none ')
msgError.innerHTML = ''
console.log('foi')
setTimeout(()=>{
//se tudo tiver certo vai para o login
window.location.href = 'index.html'
},2000)



 }else{

  msgError.setAttribute('style','display: block ')
  msgError.innerHTML = 'calma la pae'
  msgSuccess.innerHTML = ''
  msgSuccess.setAttribute('style','display: none ')
  console.log('n deu certo')
 }
}



//bgl do olinho mudar o type de password pra text  e vice versa
btn.addEventListener('click', ()=>{
  let inputSenha = document.querySelector('#senha')
  
  if(inputSenha.getAttribute('type') == 'password'){
    inputSenha.setAttribute('type', 'text')
  } else {
    inputSenha.setAttribute('type', 'password')
  }
})
// mesma coida do de cima so q no confirm senha
btnConfirm.addEventListener('click', ()=>{
  let inputConfirmSenha = document.querySelector('#confirmSenha')
  
  if(inputConfirmSenha.getAttribute('type') == 'password'){
    inputConfirmSenha.setAttribute('type', 'text')
  } else {
    inputConfirmSenha.setAttribute('type', 'password')
  }
})
