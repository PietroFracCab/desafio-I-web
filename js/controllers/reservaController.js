class ReservaController {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        if (this.view.form) {
            this.view.form.addEventListener('submit', this.handleSubmit.bind(this));
        }

        this.atualizarListagens();
    }

    handleSubmit(event) {
        event.preventDefault();
        const dados = this.view.obterDadosFormulario();
        this.model.adicionarReserva(dados);
        console.log(`Nome: ${dados.nome}, Placa: ${dados.placa}, Apartamento: ${dados.apartamento}, Bloco: ${dados.bloco}, Modelo: ${dados.modelo}, Cor: ${dados.cor}, Vaga: ${dados.vaga}`);
        this.view.exibirMensagem('Cadastro realizado com sucesso!');
        this.atualizarListagens();
    }

    atualizarListagens() {
        const reservas = this.model.listarReservas();
        this.view.atualizarListaVagas(reservas);
        const vagas = this.model.vagasDisponiveis();
        this.view.atualizarVagasDisponiveis(vagas);
    }
}