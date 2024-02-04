const imagemVisualizacao = document.getElementById('imagem-visualizacao');
const tituloProduto = document.getElementById('titulo-produto');


const verdeCipreste = {
    nome: 'Verde-cipreste',
    nomePastaImagens: 'imagens-verde-cipreste',
};
const azulInverno = {
    nome: 'Azul-inverno',
    nomePastaImagens: 'imagens-azul-inverno',
};
const meiaNoite = {
    nome: 'Meia-noite',
    nomePastaImagens: 'imagens-meia-noite',
    emEstoque: false,
};
const estelar = {
    nome: 'Estelar',
    nomePastaImagens: 'imagens-estelar',
};
const rosaClaro = {
    nome: 'Rosa-claro',
    nomePastaImagens: 'imagens-rosa-claro',
};

const opcoesCores = [verdeCipreste, azulInverno,meiaNoite, estelar,rosaClaro];
const opcoesTamanho = ['41 mm', '45 mm'];

  
let corSelecionada = 1;
let tamanhoSelecionado = 1;
let imagemSelecionada = 1;

function trocarImagem(){
    const idOpcaoSelecionada = document.querySelector('[name="opcao-imagem"]:checked').id;
    imagemSelecionada = idOpcaoSelecionada.charAt(0);
    imagemVisualizacao.src = "./imagens/opcoes-cores/imagens-azul-inverno/imagem-"+ imagemSelecionada + ".jpeg";
}

function trocarTamanho(){
    // atualizar variavel de controle do tamnho da caixa 
    const idOpcaoSelecionada = document.querySelector('[name="opcao-tamanho"]:checked').id;
    tamanhoSelecionado = idOpcaoSelecionada.charAt(0)
    //mudar o tamanho da imagem de acordo com a opção
    
    if (opcoesTamanho[tamanhoSelecionado]==='41 mm' ){
        imagemVisualizacao.classList.add('caixa-pequena');
    }else{
        imagemVisualizacao.classList.remove('caixa-pequena');
    }
    // mudar o titulo do produto
    tituloProduto.innerText = "Pulseira loop esportiva azul-inverno para caixa de " + opcoesTamanho[tamanhoSelecionado];
}

function trocarCor(){
    //atualizar variavel de controle 
    const idOpcaoSelecionada = document.querySelector('[name="opcao-cor"]:checked').id;
    corSelecionada = idOpcaoSelecionada.charAt(0);
    //trocar titulo da página
    tituloProduto.innerText = "Pulseira loop esportiva" + "para caixa de " + opcoesTamanho[tamanhoSelecionado];

    //trocar nome da cor
    // trocar imagens das miniaturas exibidas
    //trocar imagem de visualização 
}