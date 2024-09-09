const botao = document.getElementById('mudarCor');

const cores = ['#FF5733', '#33FF57', '#5733FF', '#FF33A1', '#33FFF6', '#FFD733'];

function mudarCorFundo() {
    const indiceAleatorio = Math.floor(Math.random() * cores.length);
    document.body.style.backgroundColor = cores[indiceAleatorio];
}

botao.addEventListener('click', mudarCorFundo);