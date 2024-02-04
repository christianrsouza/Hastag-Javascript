const nomeCorSelecionada = document.getElementById('nome-cor-selecionada');
const tituloProduto = document.getElementById('titulo-produto');
const imagemVisualizacao = document.getElementById('imagem-visualizacao');
const opcaoImagem0 = document.getElementById('0-imagem-miniatura');
const opcaoImagem1 = document.getElementById('1-imagem-miniatura');
const opcaoImagem2 = document.getElementById('2-imagem-miniatura');


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
    tituloProduto.innerText = "Pulseira loop esportiva " + opcoesCores[corSelecionada].nome +" para caixa de " + opcoesTamanho[tamanhoSelecionado];
}

function trocarCor(){
    //atualizar variavel de controle 
    const idOpcaoSelecionada = document.querySelector('[name="opcao-cor"]:checked').id;
    corSelecionada = idOpcaoSelecionada.charAt(0);
    //trocar titulo da página
    tituloProduto.innerText = "Pulseira loop esportiva " + opcoesCores[corSelecionada].nome +" para caixa de " + opcoesTamanho[tamanhoSelecionado];

    //trocar nome da cor
    nomeCorSelecionada.innerText = `Cor - ${opcoesCores[corSelecionada].nome}`;
    
    // trocar imagens das miniaturas exibidas
    imagemVisualizacao.src = `./imagens/opcoes-cores/${opcoesCores[corSelecionada].nomePastaImagens}/imagem-${imagemSelecionada}.jpeg`;
    opcaoImagem0.src = `./imagens/opcoes-cores/${opcoesCores[corSelecionada].nomePastaImagens}/imagem-0.jpeg`;
    opcaoImagem1.src = `./imagens/opcoes-cores/${opcoesCores[corSelecionada].nomePastaImagens}/imagem-1.jpeg`;
    opcaoImagem2.src = `./imagens/opcoes-cores/${opcoesCores[corSelecionada].nomePastaImagens}/imagem-2.jpeg`;
    //trocar imagem de visualização 
}