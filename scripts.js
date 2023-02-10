// VARIÁVEIS
// para criar variaveis: começar com 'let'
// para criar funçoes: começar com 'function' ==> trecho de código que é executado quando é chamado
// async = a funcao vai até um servidor buscar uma informacao

let chave = "339832f4f5d090611aa2575b04ef72cb"

function colocarnatela(dados){
    console.log(dados)

    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = "Temperatura: " + Math.floor(dados.main.temp) + "ºC"
    document.querySelector(".descricao").innerHTML = "Descrição: " + dados.weather[0].description
    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%"

}

async function buscarCidade(cidade){
    let dados = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q="+cidade+"&appid="+chave+"&lang=pt_br"+"&units=metric").then( resposta => resposta.json())
        
        colocarnatela(dados)
}

function cliqueinalupa(){
    let cidade = document.querySelector(".input-cidade").value

    buscarCidade(cidade)

}