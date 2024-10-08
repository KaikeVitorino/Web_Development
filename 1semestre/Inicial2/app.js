'use strict';

// Seleciona o botão com a classe .btn e atribui à variável switcher
const switcher = document.querySelector('.btn');
let direcao = 1;

// Adiciona um ouvinte de evento de clique no botão
switcher.addEventListener('click', function(){
    // Alterna a classe 'dark-theme' no elemento <body>
    document.body.classList.toggle('dark-theme');

    // Obtém a lista de classes do elemento <body>
    var className = document.body.className;

    // Verifica se a classe 'light-theme' está presente
    if (className == "light-theme") {
        // Se 'light-theme' estiver presente, muda o texto do botão para 'dark'
        this.textContent = "dark";
    }
    else {
        // Caso contrário, muda o texto do botão para 'light'
        this.textContent = "light";
    }
    
    // Faz o botão girar
    this.style.transform = "rotate(" + (direcao * 360) + "deg)";
    direcao *= -1;

    console.log('Nome da classe atual: ' + className);
});
