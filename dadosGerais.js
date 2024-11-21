const url= 'https://raw.githubusercontent.com/nhelloa/api-2024-helloa/refs/heads/main/esportes_mais_praticados.json'

async function vizualizando(){
    const res = await fetch(url)
    const dados = await res.json()

     
    const esportes = Object.keys(dados)
    const votos = Object.values(dados)
    const esporteMaisVotado = esportes[0]
    const quantidadeDeVoto = Object.values(dados) [0]


    const data = [
        {
            x:esportes,
            y:votos,
            type: 'bar'
        }
    ]


    let paragrafo = document.createElement('p')

    paragrafo.classList.add('caixa-grafico_texto')

    paragrafo.innerHTML = `Nesta pesquisa, buscou-se compreender qual o esporte mais praticado pela população brasileira. 0 ${esporteMaisVotado} foi o esporte mais votado entre todos, com um total de ${quantidadeDeVoto} votos, em uma pesquisa que teve um total de 4350 participantes.`

    let caixa = document.getElementById('caixa-grafico')
    caixa.appendChild(paragrafo)

    const grafico = document.createElement('div')
    grafico.className = 'grafico'
    document.getElementById('caixa-grafico').appendChild(grafico)
    Plotly.newPlot(grafico, data)
}

vizualizando()