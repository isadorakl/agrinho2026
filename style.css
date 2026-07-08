// Script para o quiz sobre economia de água na irrigação

document.getElementById('quizBtn').addEventListener('click', iniciarQuiz);

function iniciarQuiz() {
    const container = document.getElementById('quizContainer');
    container.innerHTML = '';

    const pergunta = document.createElement('p');
    pergunta.textContent = 'Qual das opções abaixo ajuda a economizar água na irrigação?';

    const opcoes = [
        { texto: 'Regar durante as horas mais quentes do dia', correta: false },
        { texto: 'Usar sistemas de irrigação por gotejamento', correta: true },
        { texto: 'Deixar o solo secar entre as irrigações', correta: false },
        { texto: 'Aumentar a quantidade de água toda vez que irrigar', correta: false }
    ];

    container.appendChild(pergunta);

    opcoes.forEach((opcao, index) => {
        const btn = document.createElement('button');
        btn.textContent = opcao.texto;
        btn.addEventListener('click', () => {
            verificarResposta(opcao.correta, container);
        });
        container.appendChild(btn);
    });
}

function verificarResposta(correta, container) {
    const resultado = document.createElement('p');
    if (correta) {
        resultado.textContent = 'Parabéns! Você conhece dicas para economizar água.';
        resultado.style.color = 'green';
    } else {
        resultado.textContent = 'Tente novamente! Veja as dicas para economizar água.';
        resultado.style.color = 'red';
    }
    // Remove botões antigos
    while (container.children.length > 1) {
        container.removeChild(container.lastChild);
    }
    container.appendChild(resultado);
}
