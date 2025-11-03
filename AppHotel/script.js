function calcular() {
  const dias = parseInt(document.getElementById('dias').value);
  const adultos = parseInt(document.getElementById('adultos').value);
  const criancas = parseInt(document.getElementById('criancas').value);

  if (isNaN(dias) || isNaN(adultos) || isNaN(criancas)) {
    alert('Por favor, preencha todos os campos.');
    return;
  }

  const valorAdulto = 150; // valor por adulto por dia
  const valorCrianca = 75; // valor por criança por dia
  const total = (adultos * valorAdulto + criancas * valorCrianca) * dias;

  const resultado = document.getElementById('resultado');
  resultado.innerHTML = `Valor total da estadia: <strong>R$ ${total.toFixed(2)}</strong>`;
}
