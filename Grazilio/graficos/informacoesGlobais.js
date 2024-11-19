const url = 'https://raw.githubusercontent.com/arieli393/site-pesquisa/refs/heads/main/dados.json'

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    const pessoasConectadas = (dados.total_pessoas_conectadas / 1e3)
    const pessoasNoMundo = (dados.total_pessoas_mundo / 1e3)
    const horas = parseInt(dados.tempo_medio)
    const minutos = Math.round((dados.tempo_medio - horas) * 100)
    const porcentagemConectada = ((pessoasConectadas / pessoasNoMundo ) * 100).toFixed(2)

    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `Você sabia que no Paraná tem <span>${pessoasNoMundo} milhões</span> de pessoas e que aproximadamente <span>${pessoasConectadas} milhões</span> de pessoas preferem doce ao invés de salgado.<br>Isso significa que aproximadamente <span>${porcentagemConectada}%</span> de pessoas tem preferência por doce.`

    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)
}

vizualizarInformacoesGlobais()
