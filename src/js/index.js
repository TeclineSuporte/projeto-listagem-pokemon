/* O que precisamos fazer? - Quando o usuario clicar no botão de troca de tema, será alterada a cor do tema da página para as cores do tema claro ou escuro.

objetivo 01 - quando clicar no botão de troca de tema, adicionar a classe modo-escuro no body pra que os estilos do modo escuro sejam aplicados e mude a imagem para Lua.
  - passo 1 - pegar no JS o elemento HTML correspondente ao botão de troca de tema
  - passo 2 - pegar no JS o elemento correspondente ao body
  - passo 3 - identificar o clique do usuario no botão de troca de tema
  - passo 4 - adicionar a classe modo-escuro no body
  - passo 5 - trocar a imagem do botão que altera o tema para a imagem correspondente ao tema utilizado

objetivo 02 - quando clicar no botão de troca de tema, caso o body já tenha a classe modo-escuro, remover e mudar para classe modo claro e tambem mudar a imagem da lua para o sol
  - passo 6 - verificar se o body já tem a classe modo escuro
  - passo 7 - remover a classe modo-escuro do body
  - passo 8 - trocar a imagem do botão de alterar tema para imagem "Sol"
*/

//- passo 1 - pegar no JS o elemento HTML correspondente ao botão de troca de tema
const botaoAlterarTema = document.getElementById("botao-alterar-tema");

const imagemBotaoTrocaTema = document.querySelector(".imagem-botao");


//- passo 2 - pegar no JS o elemento correspondente ao body
const body = document.querySelector("body");

//- passo 3 - identificar o clique do usuario no botão de troca de tema
botaoAlterarTema.addEventListener("click", () => {
    
    //- passo 6 - verificar se o body já tem a classe modo escuro
    const modoEscuroAtivo = body.classList.contains("modo-escuro");
    
    body.classList.toggle("modo-escuro");//substitui body.classList.remove e o body.classList.add, ele ja cria e remove modo-escuro do body

    if(modoEscuroAtivo) {
        //- passo 7 - remover a classe modo-escuro do body
        //body.classList.remove("modo-escuro");

        //- passo 8 - trocar a imagem do botão de alterar tema para imagem "Sol"
        imagemBotaoTrocaTema.setAttribute("src", "./src/imagens/sol.png");

    }else{

        //- passo 4 - adicionar a classe modo-escuro no body
        //body.classList.add("modo-escuro");

        //- passo 5 - trocar a imagem do botão que altera o tema para a imagem correspondente ao tema utilizado (img lua)
        imagemBotaoTrocaTema.setAttribute("src", "./src/imagens/lua.png");

  }
    
    

});

