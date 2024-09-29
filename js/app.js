document.addEventListener('DOMContentLoaded', () => {
    const model = new ReservaModel();
    const view = new ReservaView();
    new ReservaController(model, view);
});