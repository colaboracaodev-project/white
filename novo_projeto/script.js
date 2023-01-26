// function main() {
//     const salarioDigitado = document.getElementById('salario').value;
//     const dataEntrada = new Date(document.getElementById('start_date').value);
//     const dataSaida = new Date(document.getElementById('end_date').value);
//     const diasMes = dataEntrada.getDate() + 1;
//     const mesesAno = dataSaida.getMonth() + 1;
//     const totalDeMesesTrabalhados = parseInt(calculaDataMeses(dataEntrada, dataSaida));
//     const recebeAvisoPrevioIndenizado = true;
//     const possuiFeriasVencidas = true;

//     const resultado = calculaDemissaoSemJustaCausa(salarioDigitado, diasMes, mesesAno, totalDeMesesTrabalhados,recebeAvisoPrevioIndenizado,possuiFeriasVencidas);
//     console.log(resultado.toFixed(2));
// }
function main() 
{
  let salarioDigitado             = document.getElementById('salario').value;
  let dataEntrada                 = document.getElementById('start_date').value;
  let dataSaida                   = document.getElementById('end_date').value;
  let totalDeMesesTrabalhados     = calculaDataMeses(dataEntrada, dataSaida);
  let totalDeDiasTrabalhados      = calculaDataDias(dataEntrada,dataSaida);
  let recebeAvisoPrevioIndenizado = document.querySelector('input[name="aviso-previo"]:checked').value;
  let possuiFeriasVencidas        = document.querySelector('input[name="ferias-vencidas"]:checked').value;
  let motivo_recisao              = document.querySelector('input[name="motivo-rescisao"]:checked').value;

  console.log(salarioDigitado, dataEntrada, dataSaida, 
    totalDeMesesTrabalhados, totalDeDiasTrabalhados, recebeAvisoPrevioIndenizado, possuiFeriasVencidas, motivo_recisao);

    switch (motivo_recisao) 
    {
      case "0":
          calculaDemissaoSemJustaCausa(salarioDigitado, totalDeMesesTrabalhados, totalDeDiasTrabalhados,
             recebeAvisoPrevioIndenizado, possuiFeriasVencidas);

          break;
    
      case "1":
          calculaDemissaoPorJustaCausa(salarioDigitado, totalDeMesesTrabalhados, totalDeDiasTrabalhados,
             recebeAvisoPrevioIndenizado, possuiFeriasVencidas);
    
          break;
    
      case "2":
          calculaPedidoDeDemissao(salarioDigitado, totalDeMesesTrabalhados, totalDeDiasTrabalhados,
             recebeAvisoPrevioIndenizado, possuiFeriasVencidas);

          break;
    
      case "3":
          calculaRescisaoPorCulpaReciproca(salarioDigitado, totalDeMesesTrabalhados, totalDeDiasTrabalhados,
             recebeAvisoPrevioIndenizado, possuiFeriasVencidas);
    
          break;
    
      case "4":
          calculaDemissaoPorComumAcordo(salarioDigitado, totalDeMesesTrabalhados, totalDeDiasTrabalhados,
             recebeAvisoPrevioIndenizado, possuiFeriasVencidas);
    
          break;
    
      default:
        break;
      }
    }

function calculaDemissaoSemJustaCausa(salarioDigitado, totalDeMesesTrabalhados, totalDeDiasTrabalhados,
   recebeAvisoPrevioIndenizado, possuiFeriasVencidas) 
{
    let saldoSalario               = (calculaSaldoSalario(salarioDigitado, totalDeMesesTrabalhados));
    let avisoPrevioIndenizado      = 0;
    let decimoTerceiroProporcional = (calculaDecimoTerceiroProporcional(salarioDigitado, totalDeMesesTrabalhados));
    let feriasVencidas             = 0;
    let feriasProporcionais        = 0;
    let multaRescisoria            = (calculaMultaRescisoria(salarioDigitado, totalDeMesesTrabalhados));
    let formato                    = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
    
    if (recebeAvisoPrevioIndenizado == true) 
    {
        avisoPrevioIndenizado = (calculaAvisoPrevioIndenizado(salarioDigitado));
    }
    
    if (possuiFeriasVencidas == true) 
    {
        feriasVencidas = calculaFeriasVencidas(salarioDigitado);
        feriasProporcionais = calculaFeriasProporcionais(totalDeMesesTrabalhados, feriasVencidas);
    }
    
      let demissaoSemJustaCausa = saldoSalario + avisoPrevioIndenizado + decimoTerceiroProporcional +
        (feriasVencidas + feriasVencidas / 3) + (feriasProporcionais + feriasProporcionais / 3) + multaRescisoria * 0.4;
    
      document.getElementById("total").innerText                        = formato.format(demissaoSemJustaCausa);
      document.getElementById("salarioProporcionalCalculado").innerText = formato.format(saldoSalario);
      document.getElementById("feriasVencidasCalculada").innerText      = formato.format(feriasVencidas);
      document.getElementById("feriasProporcionalCalculada").innerText  = formato.format(feriasProporcionais);
      document.getElementById("avisoPrevioCalculado").innerText         = formato.format(avisoPrevioIndenizado);
      document.getElementById("multaRescisoriaCalculada").innerText     = formato.format(multaRescisoria);
      document.getElementById("decimoTerceiroCalculado").innerText      = formato.format(decimoTerceiroProporcional);
}

function calculaDemissaoPorJustaCausa(salarioDigitado, totalDeMesesTrabalhados, totalDeDiasTrabalhados,
   recebeAvisoPrevioIndenizado, possuiFeriasVencidas) 
{
    let saldoSalario               = (calculaSaldoSalario(salarioDigitado, totalDeDiasTrabalhados));
    let avisoPrevioIndenizado      = 0;
    let decimoTerceiroProporcional = (calculaDecimoTerceiroProporcional(salarioDigitado, totalDeMesesTrabalhados));
    let feriasVencidas             = 0;
    let feriasProporcionais        = 0;
    let multaRescisoria            = (calculaMultaRescisoria(salarioDigitado, totalDeMesesTrabalhados));
    let formato                    = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
    
    if (recebeAvisoPrevioIndenizado == true) 
    {
        avisoPrevioIndenizado = (calculaAvisoPrevioIndenizado(salarioDigitado));
    }
    
    if (possuiFeriasVencidas == true) 
    {
        feriasVencidas = calculaFeriasVencidas(salarioDigitado);
        feriasProporcionais = calculaFeriasProporcionais(totalDeMesesTrabalhados, feriasVencidas);
      }
    
      let demissaoPorJustaCausa = saldoSalario + (feriasVencidas + feriasVencidas / 3);
    
      document.getElementById("total").innerText                        = formato.format(demissaoPorJustaCausa);
      document.getElementById("salarioProporcionalCalculado").innerText = formato.format(saldoSalario);
      document.getElementById("feriasVencidasCalculada").innerText      = formato.format(feriasVencidas);
      document.getElementById("feriasProporcionalCalculada").innerText  = formato.format(feriasProporcionais);
      document.getElementById("avisoPrevioCalculado").innerText         = formato.format(avisoPrevioIndenizado);
      document.getElementById("multaRescisoriaCalculada").innerText     = formato.format(multaRescisoria);
      document.getElementById("decimoTerceiroCalculado").innerText      = formato.format(decimoTerceiroProporcional);
}

function calculaPedidoDeDemissao(salarioDigitado, totalDeMesesTrabalhados, totalDeDiasTrabalhados,
   recebeAvisoPrevioIndenizado, possuiFeriasVencidas) 
{
    let saldoSalario               = (calculaSaldoSalario(salarioDigitado, totalDeMesesTrabalhados));
    let avisoPrevioIndenizado      = 0;
    let decimoTerceiroProporcional = (calculaDecimoTerceiroProporcional(salarioDigitado, totalDeMesesTrabalhados));
    let feriasVencidas             = 0;
    let feriasProporcionais        = 0;
    let multaRescisoria            = (calculaMultaRescisoria(salarioDigitado, totalDeMesesTrabalhados));
    let formato                    = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
    
    if (recebeAvisoPrevioIndenizado == true) 
    {
        avisoPrevioIndenizado = (calculaAvisoPrevioIndenizado(salarioDigitado));
    }
    
    if (possuiFeriasVencidas == true) 
    {
        feriasVencidas = calculaFeriasVencidas(salarioDigitado);
        feriasProporcionais = calculaFeriasProporcionais(totalDeMesesTrabalhados, feriasVencidas);
    }
    
    let pedidoDeDemissao = saldoSalario + decimoTerceiroProporcional + (feriasVencidas + feriasVencidas / 3) +
    (feriasProporcionais + feriasProporcionais / 3);
    
      document.getElementById("total").innerText                        = formato.format(pedidoDeDemissao);
      document.getElementById("salarioProporcionalCalculado").innerText = formato.format(saldoSalario);
      document.getElementById("feriasVencidasCalculada").innerText      = formato.format(feriasVencidas);
      document.getElementById("feriasProporcionalCalculada").innerText  = formato.format(feriasProporcionais);
      document.getElementById("avisoPrevioCalculado").innerText         = formato.format(avisoPrevioIndenizado);
      document.getElementById("multaRescisoriaCalculada").innerText     = formato.format(multaRescisoria);
      document.getElementById("decimoTerceiroCalculado").innerText      = formato.format(decimoTerceiroProporcional);
}

function calculaRescisaoPorCulpaReciproca(salarioDigitado, totalDeMesesTrabalhados, totalDeDiasTrabalhados, 
  recebeAvisoPrevioIndenizado, possuiFeriasVencidas) 
{
    let saldoSalario               = (calculaSaldoSalario(salarioDigitado, totalDeMesesTrabalhados));
    let avisoPrevioIndenizado      = 0;
    let decimoTerceiroProporcional = (calculaDecimoTerceiroProporcional(salarioDigitado, totalDeMesesTrabalhados));
    let feriasVencidas             = 0;
    let feriasProporcionais        = 0;
    let multaRescisoria            = (calculaMultaRescisoria(salarioDigitado, totalDeMesesTrabalhados));
    let formato                    = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
    
    if (recebeAvisoPrevioIndenizado == true) 
    {
        avisoPrevioIndenizado = (calculaAvisoPrevioIndenizado(salarioDigitado));
    }
    
    if (possuiFeriasVencidas == true) 
    {
        feriasVencidas = calculaFeriasVencidas(salarioDigitado);
        feriasProporcionais = calculaFeriasProporcionais(totalDeMesesTrabalhados, feriasVencidas);
    }
    
    let rescisaoPorCulpaReciproca = saldoSalario + (avisoPrevioIndenizado / 2) + (decimoTerceiroProporcional / 2) +
    (feriasVencidas + feriasVencidas / 3) + (feriasProporcionais / 2 + feriasProporcionais / 3) + multaRescisoria * 0.2;

    document.getElementById("total").innerText                        = formato.format(rescisaoPorCulpaReciproca);
    document.getElementById("salarioProporcionalCalculado").innerText = formato.format(saldoSalario);
    document.getElementById("feriasVencidasCalculada").innerText      = formato.format(feriasVencidas);
    document.getElementById("feriasProporcionalCalculada").innerText  = formato.format(feriasProporcionais);
    document.getElementById("avisoPrevioCalculado").innerText         = formato.format(avisoPrevioIndenizado);
    document.getElementById("multaRescisoriaCalculada").innerText     = formato.format(multaRescisoria);
    document.getElementById("decimoTerceiroCalculado").innerText      = formato.format(decimoTerceiroProporcional);
    
}

function calculaDemissaoPorComumAcordo(salarioDigitado, totalDeMesesTrabalhados, totalDeDiasTrabalhados, 
  recebeAvisoPrevioIndenizado, possuiFeriasVencidas) 
{
    let saldoSalario               = (calculaSaldoSalario(salarioDigitado, totalDeMesesTrabalhados));
    let avisoPrevioIndenizado      = 0;
    let decimoTerceiroProporcional = (calculaDecimoTerceiroProporcional(salarioDigitado, totalDeMesesTrabalhados));
    let feriasVencidas             = 0;
    let feriasProporcionais        = 0;
    let multaRescisoria            = (calculaMultaRescisoria(salarioDigitado, totalDeMesesTrabalhados));
    let formato                    = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
    
    if (recebeAvisoPrevioIndenizado == true) 
    {
        avisoPrevioIndenizado = (calculaAvisoPrevioIndenizado(salarioDigitado));
    }
    
    if (possuiFeriasVencidas == true) 
    {
        feriasVencidas = calculaFeriasVencidas(salarioDigitado);
        feriasProporcionais = calculaFeriasProporcionais(totalDeMesesTrabalhados, feriasVencidas);
    }
    
    let demissaoPorComumAcordo = saldoSalario + avisoPrevioIndenizado / 2 + decimoTerceiroProporcional +
    (feriasVencidas + feriasVencidas / 3) + (feriasProporcionais + feriasProporcionais / 3) + multaRescisoria * 0.2;

    document.getElementById("total").innerText                        = formato.format(demissaoPorComumAcordo);
    document.getElementById("salarioProporcionalCalculado").innerText = formato.format(saldoSalario);
    document.getElementById("feriasVencidasCalculada").innerText      = formato.format(feriasVencidas);
    document.getElementById("feriasProporcionalCalculada").innerText  = formato.format(feriasProporcionais);
    document.getElementById("avisoPrevioCalculado").innerText         = formato.format(avisoPrevioIndenizado);
    document.getElementById("multaRescisoriaCalculada").innerText     = formato.format(multaRescisoria);
    document.getElementById("decimoTerceiroCalculado").innerText      = formato.format(decimoTerceiroProporcional);
}

// funções auxiliares
function calculaSaldoSalario(salarioDigitado, totalDeDiasTrabalhados) 
{
    let saldoSalario = (salarioDigitado / 30) * totalDeDiasTrabalhados;
    return parseFloat(saldoSalario);
}

function calculaDecimoTerceiroProporcional(
  salarioDigitado,
  totalDeMesesTrabalhados
) {
  let decimoTerceiro = (salarioDigitado / 12) * totalDeMesesTrabalhados;
  return decimoTerceiro;
}

function calculaFeriasVencidas(salarioDigitado) {
  let feriasVencidas = salarioDigitado + salarioDigitado / 3;
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

function calculaDataMeses(date1, date2) 
{
    return Math.floor(moment(date2).diff(moment(date1),('months')))
}
function calculaDataDias(date1, date2) 
{
    return Math.floor(moment(date2).diff(moment(date1),('days')))
}

function limparCampos() {
  let formato = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
  document.getElementById("form").reset();
  document.getElementById("total").innerText                        = formato.format("0");
  document.getElementById("salarioProporcionalCalculado").innerText = formato.format("0");
  document.getElementById("feriasVencidasCalculada").innerText      = formato.format("0");
  document.getElementById("feriasProporcionalCalculada").innerText  = formato.format("0");
  document.getElementById("avisoPrevioCalculado").innerText         = formato.format("0");
  document.getElementById("multaRescisoriaCalculada").innerText     = formato.format("0");
  document.getElementById("decimoTerceiroCalculado").innerText      = formato.format("0");
}