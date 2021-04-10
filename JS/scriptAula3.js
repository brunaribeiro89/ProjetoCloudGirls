//Criação do Formulário, Parte Adicionar Nova Aula:
var botaoAdicionar = document.querySelector("#adicionar-conteudo");
botaoAdicionar.addEventListener("click", function(event){
event.preventDefault();
var form = document.querySelector("#form-adiciona");
// extrai informação do conteudo do formulario
var conteudo = form.conteudo.value;
// cria a Tr e a Td  da tabela de aulas
var aulaTr = document.createElement("tr");
aulaTr.classList.add("conteudo");
var conteudoTd = document.createElement("td");
conteudoTd.textContent = conteudo;
conteudoTd.classList.add("info-conteudo");
aulaTr.appendChild(conteudoTd);
// adiciona conteudo de aula na tabela
var tabela= document.querySelector("#tabela-conteudos");
tabela.appendChild(aulaTr);
// limpo o conteudo do input adicionar
form.reset();

})

//___________________________________________________________________________________________________

//Remoção de uma Tr da tabela
var conteudos = document.querySelectorAll(".conteudo");

var tabela = document.querySelector("table");
tabela.addEventListener("dblclick", function(event){
  event.target.parentNode.classList.add("fadeOut");
  setTimeout(function(){
    event.target.parentNode.remove();
},500);
  })
  
//___________________________________________________________________________________________________
//Filtrar Conteudos Adicionados
var campoFiltro= document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input",function(){
var conteudos = document.querySelectorAll(".conteudo")
if(this.value.length>0){
  for(var i =0; i < conteudos.length; i++){
    var conteudo = conteudos[i];
    var tdConteudo = conteudo.querySelector(".info-conteudo");
    var finalConteudo = tdConteudo.textContent;
    var expressao = new RegExp(this.value,"i")
    if(!expressao.test(finalConteudo)) {
      conteudo.classList.add("invisivel")
    
    }else {
      conteudo.classList.remove("invisivel");
    }
    }
}else {
  for(var i =0; i < conteudos.length; i++){
    var conteudo = conteudos[i];
    conteudo.classList.remove("invisivel");
  }
}

});
