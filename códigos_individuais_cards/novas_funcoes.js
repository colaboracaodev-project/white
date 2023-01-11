/*
Criar novas funções para somar os valores de acordo com o tipo de rescisão selecionada pelo usuário;

Cada função será chamada separadamente de acordo com a opção de tipo de recisão selecionada pelo usuário.

As funções a serem criadas receberão como parêmetro os valores de acordo com as regras abaixo e deverão apenas somar os valores e retornar o resultado.

Obs.: os items a serem somados já possuem cada um uma função que o retorna.
*/
const saldoSalario  = 4000;
const feriasVencidas = null;
const decimoTerceiroProporcional = 1000;
const feriasProporcionais = 1000;
const avisoPrevioIndenizado = 1000;
const depositoMensalFGTS = 1000;
const multaRescisoria = 1000;


function calcula_demissao_com_JustaCausa(saldoSalario, feriasVencidas) {
    let demissao_com_JustaCausa = saldoSalario + feriasVencidas + (feriasVencidas/3);

    return demissao_com_JustaCausa.toFixed(2);
}

function calcula_pedido_Demissao(saldoSalario,decimoTerceiroProporcional,feriasVencidas,feriasProporcionais) {
    let pedido_Demissao = saldoSalario + decimoTerceiroProporcional + (feriasVencidas + feriasVencidas/3)
     + (feriasProporcionais + feriasProporcionais/3);

     return pedido_Demissao.toFixed(2);
}

function calcula_Recisao_Culpa_Reciproca(saldoSalario, avisoPrevioIndenizado,decimoTerceiroProporcional,
    feriasVencidas,feriasProporcionais,depositoMensalFGTS) {
        if (feriasVencidas != null) {
            let recisao_culpa_reciproca  = saldoSalario + (avisoPrevioIndenizado/2) + (decimoTerceiroProporcional/2)
            + (feriasVencidas + feriasVencidas/3) + (feriasProporcionais * 0.833) + (depositoMensalFGTS * 0.20);

            return recisao_culpa_reciproca.toFixed(2); 
        }
        else{
            let recisao_culpa_reciproca  = saldoSalario + (avisoPrevioIndenizado/2) + (decimoTerceiroProporcional/2)
            + (feriasProporcionais * 0.833) + (depositoMensalFGTS * 0.2);

            return recisao_culpa_reciproca.toFixed(2); 
        }

}

function calcula_Demissao_Comum_Acordo(saldoSalario, avisoPrevioIndenizado,decimoTerceiroProporcional,
    feriasVencidas,feriasProporcionais,multaRescisoria) {
    let demissao_comum_acordo = saldoSalario + (avisoPrevioIndenizado/2) + decimoTerceiroProporcional +
    feriasVencidas + (feriasVencidas/3) + feriasProporcionais + (feriasProporcionais/3) +
    (multaRescisoria * 0.20);

    return demissao_comum_acordo.toFixed(2);
}

let demissao_com_JustaCausa = calcula_demissao_com_JustaCausa(saldoSalario, feriasVencidas);
console.log("Demissao com justa causa: " + demissao_com_JustaCausa); 

let pedido_Demissao = calcula_pedido_Demissao(saldoSalario, decimoTerceiroProporcional, feriasVencidas, feriasProporcionais);
console.log("Pedido de demissao: " + pedido_Demissao);

let recisao_culpa_reciproca = calcula_Recisao_Culpa_Reciproca(saldoSalario, avisoPrevioIndenizado,decimoTerceiroProporcional,
    feriasVencidas, feriasProporcionais, depositoMensalFGTS);
console.log("Recisao por culpa reciproca: " + recisao_culpa_reciproca);

let demissao_comum_acordo = calcula_Demissao_Comum_Acordo(saldoSalario, avisoPrevioIndenizado,decimoTerceiroProporcional,
    feriasVencidas, feriasProporcionais, multaRescisoria);
console.log("Demissao de comum acordo: " + demissao_comum_acordo);