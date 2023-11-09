'use strict';

// Seleciona o botão com a classe .btn e atribui à variável switcheraaaaaaa
const switcher = document.querySelector('.btn');
let direcao = 1;

// Adiciona um ouvinte de evento de clique no botão
switcher.addEventListener('click', function(){
    // Alterna a classe 'dark-theme' no elemento <body>aa
    document.body.classList.toggle('dark-theme');

    // Obtém a lista de classes do elemento <body>aaaaaaaaaaaaaaa
    var className = document.body.className;

    // Verifica se a classe 'light-theme' está presenteaaa
    if (className == "light-theme") {
        // Se 'light-theme' estiver presente, muda o texto do botão para 'dark'aaaaaa
        this.textContent = "dark";
    }
    else {
        // Caso contrário, muda o texto do botão para 'light' FODA -SEaaaaaaa
        this.textContent = "light";
    }
    
    // Faz o botão girar
    this.style.transform = "rotate(" + (direcao * 360) + "deg)";
    direcao *= -1;

    console.log('Nome da classe atual: ' + className);
});
