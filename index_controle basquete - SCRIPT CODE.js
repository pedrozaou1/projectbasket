<script>

function mostra (id) {

if (document.getElementById(id).style.display == 'block'){
document.getElementById(id).style.display = 'none'; 
}else { document.getElementById(id).style.display = 'block';}

}

    let jogoLista = [1, 2, 3, 4]
    let placarLista = [12, 24, 10, 24]
    let minimodaTemporadaLista = [12, 24, 24, 24]
    let maximodaTemporadaLista = [12, 24, 24, 24]
    let quebrarecordeMinLista = [0, 0, 1, 1]
    let quebrarecordMaxLista = [0, 1, 1, 1]
    let output = document.querySelector("#idOutput")

    let contadorJogos = 5

    let menorPonto = 12
    let maiorPonto = 24

    let qtdQuebrarecordeMin = 1
    let qtdQuebrarecordMax = 1

    function adicionar() {
        let inputPlacar = document.querySelector("#idPlacar")
        let textoJogo = document.querySelector("#idJogo")

        jogoLista.push(contadorJogos)
        placarLista.push(Number(inputPlacar.value))

        if (Number(inputPlacar.value) < menorPonto) {
            menorPonto = Number(inputPlacar.value)
            qtdQuebrarecordeMin++
        }

        quebrarecordeMinLista.push(qtdQuebrarecordeMin)
        minimodaTemporadaLista.push(menorPonto)

        if (Number(inputPlacar.value) > maiorPonto) {
            maiorPonto = Number(inputPlacar.value)
            qtdQuebrarecordMax++
        }

        quebrarecordMaxLista.push(qtdQuebrarecordMax)
        maximodaTemporadaLista.push(maiorPonto)

        contadorJogos++

        textoJogo.innerHTML = `Jogo ${contadorJogos}:`
        inputPlacar.value = ""

    }

    function exibirResultado() {

        let saida = Number(document.querySelector("#idSaida").value);

        output.innerHTML = ""

        if (jogoLista.indexOf(saida) > -1) {
            output.innerHTML += `Jogo: ${jogoLista[saida - 1]} <br> Placar: ${placarLista[saida - 1]}<br> Mínimo da Temporada: ${minimodaTemporadaLista[saida - 1]}<br>  Máximo da Temporada: ${maximodaTemporadaLista[saida - 1]}<br>   Quebra de Recorde Mínima:${quebrarecordeMinLista[saida - 1]}<br> Quebra de recorde Máxima: ${quebrarecordMaxLista[saida - 1]} <br>`
        } else {
            output.innerHTML = "Número de jogo inválido"
        }

        document.querySelector("#idSaida").value = ""

    }

   



</script>