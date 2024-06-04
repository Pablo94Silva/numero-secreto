let listaNumeroSorteado = [];
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


mostrarMensagem();

function mostrarMensagem(){
    exibirMensagem('h1', 'Jogo do Número Secreto');
    exibirMensagem('p', 'Escolha um número de 1 à 10');
}

function verificarChute(){
    let chute = document.querySelector('input').value;
    
    if(chute == numeroSecreto){
        let palavraTentativa = tentativas == 1 ? 'tentativa' : 'tentativas';             
        exibirMensagem('h1', 'ACERTOU!!!');
        exibirMensagem('p', `Parabéns você acertou o número secreto em ${tentativas} ${palavraTentativa}`);
        document.getElementById('reiniciar').removeAttribute('disabled');

    }else{
        if(chute > numeroSecreto){
            exibirMensagem('h1', 'ERROOOOOUUUU!!!');
            exibirMensagem('p', `O número secreto é menor que o ${chute}`);
        }else{
            exibirMensagem('h1', 'ERROOOOOUUUU!!!');
            exibirMensagem('p', `O número secreto é maior que o ${chute}`);
        }
        tentativas++;
        limparCampo();
    }    
}

function exibirMensagem(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function limparCampo(){
    let limpar = document.querySelector('input');
    limpar.value = '';
}

function gerarNumeroAleatorio(){
    let limiteMaximo = 4;
    let numeroAleatorio = parseInt(Math.random() * limiteMaximo + 1);
    let listaDeNumerosGerados = listaNumeroSorteado.length;

    if(listaDeNumerosGerados == limiteMaximo){
        listaNumeroSorteado = [];
    }

    if(listaNumeroSorteado.includes(numeroAleatorio)){
        return gerarNumeroAleatorio();
    }else{
        listaNumeroSorteado.push(numeroAleatorio);
        console.log(listaNumeroSorteado);
        return numeroAleatorio;
    }
    
}

function reiniciarJogo(){
    tentativas = 1;
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    mostrarMensagem();
}