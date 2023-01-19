// selecao do tipo de acerto

const semJustaCausa = document.querySelector("#motivo_recisao_sem_justaCausa")
const comJustaCausa = document.querySelector("#motivo_recisao_com_justaCausa")
const pedidoDemissao = document.querySelector("#motivo_recisao_pedido_demissao")
const recisaoReciproca = document.querySelector("#motivo_recisao_reciproca")
const comumAcordo = document.querySelector("#motivo_recisao_comumAcordo")

if (semJustaCausa.checked == true) {
    console.log("calcula funcao sem justa causa")
}

if (comJustaCausa.checked == true) {
    console.log("calcula funcao com justa causa")
}

if (pedidoDemissao.checked == true) {
    console.log("calcula funcao pedido de demissao")
}

if (recisaoReciproca.checked == true) {
    console.log("calcula funcao recisao reciproca")
}

if (comumAcordo.checked == true) {
    console.log("calcula funcao comum acordo")
}