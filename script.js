// Smooth scroll
function scrollPara(id){
  document.getElementById(id).scrollIntoView({behavior:'smooth'});
}

// Quiz
function respostaQuiz(res){
  const mensagem = document.getElementById('mensagemQuiz');
  if(res==='certa'){
    mensagem.textContent = '✅ Correto! O gotejamento economiza mais água.';
    mensagem.style.color = 'green';
  } else {
    mensagem.textContent = '❌ Errado! Tente novamente.';
    mensagem.style.color = 'red';
  }
}

// Calculadora
function calcularEconomia(){
  const area = Number(document.getElementById('area').value);
  const consumo = Number(document.getElementById('consumo').value);
  if(area>0 && consumo>0){
    const economia = (consumo*0.3).toFixed(2); // 30% economia
    document.getElementById('resultadoCalculadora').textContent = `💧 Você pode economizar cerca de ${economia} litros por dia!`;
  } else{
    document.getElementById('resultadoCalculadora').textContent = 'Preencha valores válidos.';
  }
}

// Gráfico interativo
const ctx = document.getElementById('graficoSistemas').getContext('2d');
const graficoSistemas = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Gotejamento', 'Aspersão', 'Inundação'],
    datasets: [{
      label: 'Eficiência (%)',
      data: [95, 75, 55],
      backgroundColor: ['#2E7D32','#4CAF50','#81C784']
    }]
  },
  options: {
    responsive:true,
    plugins:{legend:{display:false}},
    scales:{y:{beginAtZero:true,max:100}}
  }
