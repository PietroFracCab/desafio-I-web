class ReservaView {
    constructor() {
        this.form = document.getElementById('reservaForm');
        this.listaVagas = document.getElementById('listaVagas');
        this.vagasDisponiveis = document.getElementById('vagasDisponiveis');
    }

    obterDadosFormulario() {
        const nome = document.getElementById('nome').value;
        const placa = document.getElementById('placa').value;
        const apartamento = document.getElementById('apartamento').value;
        const bloco = document.getElementById('bloco').value;
        const modelo = document.getElementById('modelo').value;
        const cor = document.getElementById('cor').value;
        const vaga = document.getElementById('vaga').value;
        return { nome, placa, apartamento, bloco, modelo, cor, vaga };
    }

    exibirMensagem(mensagem) {
        alert(mensagem);
    }

    atualizarListaVagas(reservas) {
        if (this.listaVagas) {
            this.listaVagas.innerHTML = reservas.map(reserva => 
                `<li>Vaga ${reserva.vaga} - Nome: ${reserva.nome}, Placa: ${reserva.placa}, Apartamento: ${reserva.apartamento}, Bloco: ${reserva.bloco}, Modelo: ${reserva.modelo}, Cor: ${reserva.cor}</li>`
            ).join('');
        }
    }

    atualizarVagasDisponiveis(vagas) {
        if (this.vagasDisponiveis) {
            this.vagasDisponiveis.innerHTML = vagas.map(vaga => 
                `<li>Vaga ${vaga}</li>`
            ).join('');
        }
    }
}