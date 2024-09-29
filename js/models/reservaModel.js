class ReservaModel {
    constructor() {
        this.reservas = [];
    }

    adicionarReserva(reserva) {
        this.reservas.push(reserva);
    }

    listarReservas() {
        return this.reservas;
    }

    vagasDisponiveis() {
        const totalVagas = 10;
        const vagasOcupadas = this.reservas.map(reserva => reserva.vaga);
        const vagasDisponiveis = [];

        for (let i = 1; i <= totalVagas; i++) {
            if (!vagasOcupadas.includes(i.toString())) {
                vagasDisponiveis.push(i);
            }
        }

        return vagasDisponiveis;
    }
}