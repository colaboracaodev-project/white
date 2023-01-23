// function main() {
//     const salarioDigitado = document.getElementById('salario').value;
//     const dataEntrada = new Date(document.getElementById('start_date').value);
//     const dataSaida = new Date(document.getElementById('end_date').value);
//     const diasMes = dataEntrada.getDate() + 1;
//     const mesesAno = dataSaida.getMonth() + 1;
//     const totalDeMesesTrabalhados = parseInt(calculaData(dataEntrada, dataSaida));
//     const recebeAvisoPrevioIndenizado = true;
//     const possuiFeriasVencidas = true;

//     const resultado = calculaDemissaoSemJustaCausa(salarioDigitado, diasMes, mesesAno, totalDeMesesTrabalhados,recebeAvisoPrevioIndenizado,possuiFeriasVencidas);
//     console.log(resultado.toFixed(2));
// }

function main() 
{
    let salarioDigitado             = document.getElementById('salario');
    let dataEntrada                 = document.getElementById('start_date');
    let dataSaida                   = document.getElementById('end_date');
    // let diasMes                     = dataEntrada.getDate() + 1;
    // let mesesAno                    = dataSaida.getMonth() + 1;
    let totalDeMesesTrabalhados     = calculaData(dataEntrada, dataSaida);
    let recebeAvisoPrevioIndenizado = document.querySelector('input[name="aviso-previo"]:checked').value;
    let possuiFeriasVencidas        = document.querySelector('input[name="ferias-vencidas"]:checked').value;
    let motivo_recisao              = document.querySelector('input[name="motivo-rescisao"]:checked').value

    switch (motivo_recisao) 
    {
        case "0":
            calculaDemissaoSemJustaCausa(salarioDigitado, diasMes, mesesAno, totalDeMesesTrabalhados,
                recebeAvisoPrevioIndenizado, possuiFeriasVencidas);

            break;

        case "1":
            calculaDemissaoPorJustaCausa(salarioDigitado, diasMes, mesesAno, totalDeMesesTrabalhados,
                recebeAvisoPrevioIndenizado, possuiFeriasVencidas);
            
            break;

        case "2":
            calculaPedidoDeDemissao(salarioDigitado, diasMes, mesesAno, totalDeMesesTrabalhados,
                recebeAvisoPrevioIndenizado, possuiFeriasVencidas);

            break;
        
        case "3":
            calculaRescisaoPorCulpaReciproca(salarioDigitado, diasMes, mesesAno, totalDeMesesTrabalhados,
                recebeAvisoPrevioIndenizado, possuiFeriasVencidas);
            
            break;
        
        case "4":
            calculaDemissaoPorComumAcordo(salarioDigitado, diasMes, mesesAno, totalDeMesesTrabalhados,
                recebeAvisoPrevioIndenizado, possuiFeriasVencidas);
                        
            break;
    
        default:
            break;
    }
} 

function calculaDemissaoSemJustaCausa(salarioDigitado, totalDeMesesTrabalhados,
    recebeAvisoPrevioIndenizado, possuiFeriasVencidas) 
{
    let saldoSalario = parseFloat(calculaSaldoSalario(salarioDigitado, totalDeMesesTrabalhados));
    let avisoPrevioIndenizado = 0;
    let decimoTerceiroProporcional = parseFloat(calculaDecimoTerceiroProporcional(salarioDigitado, totalDeMesesTrabalhados));
    let feriasVencidas = 0;
    let feriasProporcionais = 0;
    let multaRescisoria = parseFloat(calculaMultaRescisoria(salarioDigitado, totalDeMesesTrabalhados));

    if (recebeAvisoPrevioIndenizado) 
    {
        avisoPrevioIndenizado = parseFloat(calculaAvisoPrevioIndenizado(salarioDigitado));
    }

    if (possuiFeriasVencidas) 
    {
        feriasVencidas = parseFloat(calculaFeriasVencidas(salarioDigitado));
        feriasProporcionais = parseFloat(calculaFeriasProporcionais(totalDeMesesTrabalhados, feriasVencidas));
    }

    let demissaoSemJustaCausa = (saldoSalario + avisoPrevioIndenizado + decimoTerceiroProporcional + 
        (feriasVencidas + (feriasVencidas / 3)) + (feriasProporcionais + (feriasProporcionais / 3)) + multaRescisoria * 0.40);
    
    document.getElementById("total").innerHTML                        = demissaoSemJustaCausa.toFixed(2);
    document.getElementById("salarioProporcionalCalculado").innerHTML = saldoSalario.toFixed(2);
    document.getElementById("feriasVencidasCalculada").innerHTML      = feriasVencidas.toFixed(2);
    document.getElementById("feriasProporcionalCalculada").innerHTML  = feriasProporcionais.toFixed(2);
    document.getElementById("avisoPrevioCalculado").innerHTML         = avisoPrevioIndenizado.toFixed(2);
    document.getElementById("multaRescisoriaCalculada").innerHTML     = multaRescisoria.toFixed(2);
    document.getElementById("decimoTerceiroCalculado").innerHTML      = decimoTerceiroProporcional.toFixed(2);

}

function calculaDemissaoPorJustaCausa(salarioDigitado, totalDeMesesTrabalhados,
    recebeAvisoPrevioIndenizado, possuiFeriasVencidas) 
{
    let saldoSalario = parseFloat(calculaSaldoSalario(salarioDigitado, totalDeMesesTrabalhados));
    let avisoPrevioIndenizado = 0;
    let decimoTerceiroProporcional = parseFloat(calculaDecimoTerceiroProporcional(salarioDigitado, totalDeMesesTrabalhados));
    let feriasVencidas = 0;
    let feriasProporcionais = 0;
    let multaRescisoria = parseFloat(calculaMultaRescisoria(salarioDigitado, totalDeMesesTrabalhados));

    if (recebeAvisoPrevioIndenizado) 
    {
        avisoPrevioIndenizado = parseFloat(calculaAvisoPrevioIndenizado(salarioDigitado));
    }

    if (possuiFeriasVencidas) 
    {
        feriasVencidas = parseFloat(calculaFeriasVencidas(salarioDigitado));
        feriasProporcionais = parseFloat(calculaFeriasProporcionais(totalDeMesesTrabalhados, feriasVencidas));
    }

    let demissaoPorJustaCausa = saldoSalario + (feriasVencidas + (feriasVencidas / 3));
    
    document.getElementById("total").innerHTML                        = demissaoPorJustaCausa.toFixed(2);
    document.getElementById("salarioProporcionalCalculado").innerHTML = saldoSalario.toFixed(2);
    document.getElementById("feriasVencidasCalculada").innerHTML      = feriasVencidas.toFixed(2);
    document.getElementById("feriasProporcionalCalculada").innerHTML  = feriasProporcionais.toFixed(2);
    document.getElementById("avisoPrevioCalculado").innerHTML         = avisoPrevioIndenizado.toFixed(2);
    document.getElementById("multaRescisoriaCalculada").innerHTML     = multaRescisoria.toFixed(2);
    document.getElementById("decimoTerceiroCalculado").innerHTML      = decimoTerceiroProporcional.toFixed(2);

}

function calculaPedidoDeDemissao(salarioDigitado, totalDeMesesTrabalhados,
    recebeAvisoPrevioIndenizado, possuiFeriasVencidas) 
{
    let saldoSalario = parseFloat(calculaSaldoSalario(salarioDigitado, totalDeMesesTrabalhados));
    let avisoPrevioIndenizado = 0;
    let decimoTerceiroProporcional = parseFloat(calculaDecimoTerceiroProporcional(salarioDigitado, totalDeMesesTrabalhados));
    let feriasVencidas = 0;
    let feriasProporcionais = 0;
    let multaRescisoria = parseFloat(calculaMultaRescisoria(salarioDigitado, totalDeMesesTrabalhados));
    
    if (recebeAvisoPrevioIndenizado) 
    {
         avisoPrevioIndenizado = parseFloat(calculaAvisoPrevioIndenizado(salarioDigitado));
    }
    
    if (possuiFeriasVencidas) 
    {
        feriasVencidas = parseFloat(calculaFeriasVencidas(salarioDigitado));
        feriasProporcionais = parseFloat(calculaFeriasProporcionais(totalDeMesesTrabalhados, feriasVencidas));
    }
    
    let pedidoDeDemissao = saldoSalario + decimoTerceiroProporcional + (feriasVencidas + (feriasVencidas / 3)) +
     (feriasProporcionais + (feriasProporcionais / 3));

    document.getElementById("total").innerHTML                        = pedidoDeDemissao.toFixed(2);
    document.getElementById("salarioProporcionalCalculado").innerHTML = saldoSalario.toFixed(2);
    document.getElementById("feriasVencidasCalculada").innerHTML      = feriasVencidas.toFixed(2);
    document.getElementById("feriasProporcionalCalculada").innerHTML  = feriasProporcionais.toFixed(2);
    document.getElementById("avisoPrevioCalculado").innerHTML         = avisoPrevioIndenizado.toFixed(2);
    document.getElementById("multaRescisoriaCalculada").innerHTML     = multaRescisoria.toFixed(2);
    document.getElementById("decimoTerceiroCalculado").innerHTML      = decimoTerceiroProporcional.toFixed(2);

}


function calculaRescisaoPorCulpaReciproca(salarioDigitado, totalDeMesesTrabalhados,
    recebeAvisoPrevioIndenizado, possuiFeriasVencidas) 
{
    let saldoSalario = parseFloat(calculaSaldoSalario(salarioDigitado, totalDeMesesTrabalhados));
    let avisoPrevioIndenizado = 0;
    let decimoTerceiroProporcional = parseFloat(calculaDecimoTerceiroProporcional(salarioDigitado, totalDeMesesTrabalhados));
    let feriasVencidas = 0;
    let feriasProporcionais = 0;
    let multaRescisoria = parseFloat(calculaMultaRescisoria(salarioDigitado, totalDeMesesTrabalhados));
    
    if (recebeAvisoPrevioIndenizado) 
    {
        avisoPrevioIndenizado = parseFloat(calculaAvisoPrevioIndenizado(salarioDigitado));
    }
    
    if (possuiFeriasVencidas) 
    {
        feriasVencidas = parseFloat(calculaFeriasVencidas(salarioDigitado));
        feriasProporcionais = parseFloat(calculaFeriasProporcionais(totalDeMesesTrabalhados, feriasVencidas));
    }
    
    let rescisaoPorCulpaReciproca = saldoSalario + (avisoPrevioIndenizado / 2) + (decimoTerceiroProporcional / 2) + 
    (feriasVencidas + (feriasVencidas / 3)) + ((feriasProporcionais /2) + (feriasProporcionais / 3)) + multaRescisoria * 0.20;

    document.getElementById("total").innerHTML                        = rescisaoPorCulpaReciproca.toFixed(2);
    document.getElementById("salarioProporcionalCalculado").innerHTML = saldoSalario.toFixed(2);
    document.getElementById("feriasVencidasCalculada").innerHTML      = feriasVencidas.toFixed(2);
    document.getElementById("feriasProporcionalCalculada").innerHTML  = feriasProporcionais.toFixed(2);
    document.getElementById("avisoPrevioCalculado").innerHTML         = avisoPrevioIndenizado.toFixed(2);
    document.getElementById("multaRescisoriaCalculada").innerHTML     = multaRescisoria.toFixed(2);
    document.getElementById("decimoTerceiroCalculado").innerHTML      = decimoTerceiroProporcional.toFixed(2);

}

function calculaDemissaoPorComumAcordo(salarioDigitado, totalDeMesesTrabalhados,
    recebeAvisoPrevioIndenizado, possuiFeriasVencidas) 
{

    let saldoSalario = parseFloat(calculaSaldoSalario(salarioDigitado, totalDeMesesTrabalhados));
    let avisoPrevioIndenizado = 0;
    let decimoTerceiroProporcional = parseFloat(calculaDecimoTerceiroProporcional(salarioDigitado, totalDeMesesTrabalhados));
    let feriasVencidas = 0;
    let feriasProporcionais = 0;
    let multaRescisoria = parseFloat(calculaMultaRescisoria(salarioDigitado, totalDeMesesTrabalhados));

    if (recebeAvisoPrevioIndenizado) 
    {
        avisoPrevioIndenizado = parseFloat(calculaAvisoPrevioIndenizado(salarioDigitado));
    }

    if (possuiFeriasVencidas) 
    {
        feriasVencidas = parseFloat(calculaFeriasVencidas(salarioDigitado));
        feriasProporcionais = parseFloat(calculaFeriasProporcionais(totalDeMesesTrabalhados, feriasVencidas));
    }

    let demissaoPorComumAcordo = saldoSalario + (avisoPrevioIndenizado / 2) + decimoTerceiroProporcional +
     (feriasVencidas + (feriasVencidas / 3))+ (feriasProporcionais + (feriasProporcionais / 3)) + (multaRescisoria * 0.20);

    document.getElementById("total").innerHTML                        = demissaoPorComumAcordo.toFixed(2);
    document.getElementById("salarioProporcionalCalculado").innerHTML = saldoSalario.toFixed(2);
    document.getElementById("feriasVencidasCalculada").innerHTML      = feriasVencidas.toFixed(2);
    document.getElementById("feriasProporcionalCalculada").innerHTML  = feriasProporcionais.toFixed(2);
    document.getElementById("avisoPrevioCalculado").innerHTML         = avisoPrevioIndenizado.toFixed(2);
    document.getElementById("multaRescisoriaCalculada").innerHTML     = multaRescisoria.toFixed(2);
    document.getElementById("decimoTerceiroCalculado").innerHTML      = decimoTerceiroProporcional.toFixed(2);

}

// funções auxiliares
function calculaSaldoSalario(salarioDigitado, totalDeMesesTrabalhados) {
    let saldoSalario = (salarioDigitado / 30) * totalDeMesesTrabalhados;
    return saldoSalario;
}

function calculaDecimoTerceiroProporcional(salarioDigitado, totalDeMesesTrabalhados) {
    let decimoTerceiro = (salarioDigitado / 12) * totalDeMesesTrabalhados;
    return decimoTerceiro;
}

function calculaFeriasVencidas(salarioDigitado) {
    let feriasVencidas = salarioDigitado + (salarioDigitado / 3);
    return feriasVencidas;
}

function calculaFeriasProporcionais(totalDeMesesTrabalhados, feriasVencidas) {
    let feriasProporcionais = (feriasVencidas / 12) * totalDeMesesTrabalhados;
    return feriasProporcionais;
}

function calculaAvisoPrevioIndenizado(salarioDigitado) {
    let avisoPrevioIndenizado = (salarioDigitado / 30) * 33;
    return avisoPrevioIndenizado;
}

function calculaMultaRescisoria(salarioDigitado, totalDeMesesTrabalhados) {
    let depositoMensalFGTS = salarioDigitado * 0.08;
    let totalContribuicaoFGTS = depositoMensalFGTS * totalDeMesesTrabalhados;
    let multaRescisoria = totalContribuicaoFGTS;
    return multaRescisoria;
}

function calculaData(date1, date2) 
{
    return moment(date2).diff(moment(date1), 'months');

}

function limparCampos() {
    document.getElementById("form").reset();
    document.getElementById("total").innerHTML = "";
}
