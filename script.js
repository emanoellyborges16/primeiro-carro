class Carro {
    constructor(modelo, cor) {
        this.modelo = modelo;
        this.cor = cor;
        this.ligado = false;
        this.velocidade = 0;
        this.imagemLigado = 'carro-ligado.png';
        this.imagemDesligado = 'carro-desligado.png';
    }

    ligarDesligar() {
        this.ligado = !this.ligado; // Inverte o estado (true vira false, false vira true)
        this.atualizarEstado();
    }

    acelerar() {
        if (this.ligado) {
            this.velocidade += 10;
            this.atualizarEstado();
        } else {
            alert("O carro está desligado! Ligue-o para acelerar.");
        }
    }

    atualizarEstado() {
        const carroStatusElement = document.getElementById('carro-status');
        const carroImagemElement = document.getElementById('carro-imagem');
        const velocidadeElement = document.getElementById('velocidade');

        if (this.ligado) {
            carroStatusElement.textContent = 'Ligado';
            carroImagemElement.src = this.imagemLigado;
        } else {
            carroStatusElement.textContent = 'Desligado';
            carroImagemElement.src = this.imagemDesligado;
        }

        velocidadeElement.textContent = `Velocidade: ${this.velocidade} km/h`;
    }
}

const meuCarro = new Carro("Fusca", "Azul");

document.getElementById('modelo').textContent = `Modelo: ${meuCarro.modelo}`;
document.getElementById('cor').textContent = `Cor: ${meuCarro.cor}`;
meuCarro.atualizarEstado(); // Define o estado inicial na tela

document.getElementById('ligar-desligar').addEventListener('click', function() {
    meuCarro.ligarDesligar();
});

document.getElementById('acelerar').addEventListener('click', function() {
    meuCarro.acelerar();
});