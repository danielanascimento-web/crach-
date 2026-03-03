// MAPEAR elementos
const inputNome = document.getElementById('nome');
const inputCargo = document.getElementById('cargo');
const selectDepartamento = document.getElementById('departamento');
const botaoGerar = document.getElementById('btn-gerar');

const badgeNome = document.getElementById('badge-nome');
const badgeCargo = document.getElementById('badge-cargo');
const badgeDepartamento = document.getElementById('badge-departamento');
const badge = document.getElementById('badge');

// ESCUTAR clique no botão
botaoGerar.addEventListener('click', gerarCraca);

// FUNÇÃO PRINCIPAL
function gerarCraca() {
    // CAPTURAR valores
    const nome = inputNome.value;
    const cargo = inputCargo.value;
    const departamento = selectDepartamento.value;

    if (!nome || !cargo || !departamento) {
        alert('Preencha todos os campos!');
        return;
    }

    // IMPRIMIR no crachá
    badgeNome.textContent = nome;
    badgeCargo.textContent = cargo;
    badgeDepartamento.textContent = departamento;

    // ESTILIZAR conforme departamento
    if (departamento === 'Design') {
        badge.style.background = 'linear-gradient(135deg, #9b59b6 0%, #8e44ad 100%)';
    } else if (departamento === 'Desenvolvimento') {
        badge.style.background = 'linear-gradient(135deg, #3498db 0%, #2980b9 100%)';
    }

    badge.style.borderColor = '#000000ff';
    badge.style.color = 'white';

    const spans = badge.querySelectorAll('span');
    spans.forEach(span => {
        span.style.color = 'white';
    });
}