function main() 
{
  let salarioDigitado             = parseFloat(document.getElementById('salario').value);
  let dataEntrada                 = document.getElementById('start_date').value;
  let dataSaida                   = document.getElementById('end_date').value;
  let totalDeMesesTrabalhados     = calculaDataMeses(dataEntrada, dataSaida);
  let recebeAvisoPrevioIndenizado = document.querySelector('input[name="aviso-previo"]:checked').value;
  let possuiFeriasVencidas        = document.querySelector('input[name="ferias-vencidas"]:checked').value;
  let motivo_recisao              = document.querySelector('input[name="motivo-rescisao"]:checked').value;

    switch (motivo_recisao) 
    {
      case "0":
          calculaDemissaoSemJustaCausa(salarioDigitado, totalDeMesesTrabalhados,
             recebeAvisoPrevioIndenizado, possuiFeriasVencidas);

          break;
    
      case "1":
          calculaDemissaoPorJustaCausa(salarioDigitado, totalDeMesesTrabalhados,
             recebeAvisoPrevioIndenizado, possuiFeriasVencidas);
    
          break;
    
      case "2":
          calculaPedidoDeDemissao(salarioDigitado, totalDeMesesTrabalhados,
             recebeAvisoPrevioIndenizado, possuiFeriasVencidas);

          break;
    
      case "3":
          calculaRescisaoPorCulpaReciproca(salarioDigitado, totalDeMesesTrabalhados,
             recebeAvisoPrevioIndenizado, possuiFeriasVencidas);
    
          break;
    
      case "4":
          calculaDemissaoPorComumAcordo(salarioDigitado, totalDeMesesTrabalhados,
             recebeAvisoPrevioIndenizado, possuiFeriasVencidas);
    
          break;
    
      default:
        break;
      }
    }

function calculaDemissaoSemJustaCausa(salarioDigitado, totalDeMesesTrabalhados,
   recebeAvisoPrevioIndenizado, possuiFeriasVencidas) 
{
    let saldoSalario               = (calculaSaldoSalario(salarioDigitado, totalDeMesesTrabalhados));
    let avisoPrevioIndenizado      = 0;
    let decimoTerceiroProporcional = (calculaDecimoTerceiroProporcional(salarioDigitado, totalDeMesesTrabalhados));
    let feriasVencidas             = 0;
    let feriasProporcionais        = 0;
    let multaRescisoria            = (calculaMultaRescisoria(salarioDigitado, totalDeMesesTrabalhados));
    let formato                    = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
    
    if (recebeAvisoPrevioIndenizado == "true") 
    {
        avisoPrevioIndenizado = (calculaAvisoPrevioIndenizado(salarioDigitado));
    }
    
    if (possuiFeriasVencidas == "true") 
    {
        feriasVencidas = calculaFeriasVencidas(salarioDigitado);
        feriasProporcionais = calculaFeriasProporcionais(totalDeMesesTrabalhados, feriasVencidas);
    }
    
      feriasVencidas = (feriasVencidas + feriasVencidas / 3);
      feriasProporcionais = (feriasProporcionais + feriasProporcionais / 3);
      multaRescisoria = multaRescisoria * 0.4;

      let demissaoSemJustaCausa = saldoSalario + avisoPrevioIndenizado + decimoTerceiroProporcional +
        (feriasVencidas) + (feriasProporcionais) + multaRescisoria;
      
      console.log(demissaoSemJustaCausa, saldoSalario, feriasVencidas, 
        feriasProporcionais, avisoPrevioIndenizado, multaRescisoria, decimoTerceiroProporcional);
    
      document.getElementById("total").innerText                        = formato.format(demissaoSemJustaCausa);
      document.getElementById("salarioProporcionalCalculado").innerText = formato.format(saldoSalario);
      document.getElementById("feriasVencidasCalculada").innerText      = formato.format(feriasVencidas);
      document.getElementById("feriasProporcionalCalculada").innerText  = formato.format(feriasProporcionais);
      document.getElementById("avisoPrevioCalculado").innerText         = formato.format(avisoPrevioIndenizado);
      document.getElementById("multaRescisoriaCalculada").innerText     = formato.format(multaRescisoria);
      document.getElementById("decimoTerceiroCalculado").innerText      = formato.format(decimoTerceiroProporcional);
}

function calculaDemissaoPorJustaCausa(salarioDigitado, totalDeMesesTrabalhados,
   recebeAvisoPrevioIndenizado, possuiFeriasVencidas) 
{
    let saldoSalario               = (calculaSaldoSalario(salarioDigitado, totalDeMesesTrabalhados));
    let avisoPrevioIndenizado      = 0;
    let decimoTerceiroProporcional = 0;
    let feriasVencidas             = 0;
    let feriasProporcionais        = 0;
    let multaRescisoria            = 0;
    let formato                    = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
    
    
    if (possuiFeriasVencidas == "true") 
    {
        feriasVencidas = calculaFeriasVencidas(salarioDigitado);
        feriasProporcionais = calculaFeriasProporcionais(totalDeMesesTrabalhados, feriasVencidas);
    }

      feriasVencidas = (feriasVencidas + feriasVencidas / 3);

      let demissaoPorJustaCausa = saldoSalario + (feriasVencidas);
    
      document.getElementById("total").innerText                        = formato.format(demissaoPorJustaCausa);
      document.getElementById("salarioProporcionalCalculado").innerText = formato.format(saldoSalario);
      document.getElementById("feriasVencidasCalculada").innerText      = formato.format(feriasVencidas);
      document.getElementById("feriasProporcionalCalculada").innerText  = formato.format(feriasProporcionais);
      document.getElementById("avisoPrevioCalculado").innerText         = formato.format(avisoPrevioIndenizado);
      document.getElementById("multaRescisoriaCalculada").innerText     = formato.format(multaRescisoria);
      document.getElementById("decimoTerceiroCalculado").innerText      = formato.format(decimoTerceiroProporcional);
}

function calculaPedidoDeDemissao(salarioDigitado, totalDeMesesTrabalhados,
   recebeAvisoPrevioIndenizado, possuiFeriasVencidas) 
{
    let saldoSalario               = (calculaSaldoSalario(salarioDigitado, totalDeMesesTrabalhados));
    let avisoPrevioIndenizado      = 0;
    let decimoTerceiroProporcional = (calculaDecimoTerceiroProporcional(salarioDigitado, totalDeMesesTrabalhados));
    let feriasVencidas             = 0;
    let feriasProporcionais        = 0;
    let multaRescisoria            = 0;
    let formato                    = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
    
    
    if (possuiFeriasVencidas == "true") 
    {
        feriasVencidas = calculaFeriasVencidas(salarioDigitado);
        feriasProporcionais = calculaFeriasProporcionais(totalDeMesesTrabalhados, feriasVencidas);
    }
    
    feriasVencidas = (feriasVencidas + feriasVencidas / 3);
    feriasProporcionais = (feriasProporcionais + feriasProporcionais / 3);

    let pedidoDeDemissao = saldoSalario + decimoTerceiroProporcional + (feriasVencidas) +
    (feriasProporcionais);
    
      document.getElementById("total").innerText                        = formato.format(pedidoDeDemissao);
      document.getElementById("salarioProporcionalCalculado").innerText = formato.format(saldoSalario);
      document.getElementById("feriasVencidasCalculada").innerText      = formato.format(feriasVencidas);
      document.getElementById("feriasProporcionalCalculada").innerText  = formato.format(feriasProporcionais);
      document.getElementById("avisoPrevioCalculado").innerText         = formato.format(avisoPrevioIndenizado);
      document.getElementById("multaRescisoriaCalculada").innerText     = formato.format(multaRescisoria);
      document.getElementById("decimoTerceiroCalculado").innerText      = formato.format(decimoTerceiroProporcional);
}

function calculaRescisaoPorCulpaReciproca(salarioDigitado, totalDeMesesTrabalhados, 
  recebeAvisoPrevioIndenizado, possuiFeriasVencidas) 
{
    let saldoSalario               = (calculaSaldoSalario(salarioDigitado, totalDeMesesTrabalhados));
    let avisoPrevioIndenizado      = 0;
    let decimoTerceiroProporcional = (calculaDecimoTerceiroProporcional(salarioDigitado, totalDeMesesTrabalhados));
    let feriasVencidas             = 0;
    let feriasProporcionais        = 0;
    let multaRescisoria            = (calculaMultaRescisoria(salarioDigitado, totalDeMesesTrabalhados));
    let formato                    = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
    
    if (recebeAvisoPrevioIndenizado == "true") 
    {
        avisoPrevioIndenizado = (calculaAvisoPrevioIndenizado(salarioDigitado));
    }
    
    if (possuiFeriasVencidas == "true") 
    {
        feriasVencidas = calculaFeriasVencidas(salarioDigitado);
        feriasProporcionais = calculaFeriasProporcionais(totalDeMesesTrabalhados, feriasVencidas);
    }

    avisoPrevioIndenizado = (avisoPrevioIndenizado / 2);
    decimoTerceiroProporcional = (decimoTerceiroProporcional / 2);
    feriasVencidas = (feriasVencidas + feriasVencidas / 3);
    feriasProporcionais = (feriasProporcionais / 2 + feriasProporcionais / 3);
    multaRescisoria = multaRescisoria * 0.2;

    let rescisaoPorCulpaReciproca = saldoSalario + (avisoPrevioIndenizado) + (decimoTerceiroProporcional) +
    (feriasVencidas) + (feriasProporcionais) + multaRescisoria;

    document.getElementById("total").innerText                        = formato.format(rescisaoPorCulpaReciproca);
    document.getElementById("salarioProporcionalCalculado").innerText = formato.format(saldoSalario);
    document.getElementById("feriasVencidasCalculada").innerText      = formato.format(feriasVencidas);
    document.getElementById("feriasProporcionalCalculada").innerText  = formato.format(feriasProporcionais);
    document.getElementById("avisoPrevioCalculado").innerText         = formato.format(avisoPrevioIndenizado);
    document.getElementById("multaRescisoriaCalculada").innerText     = formato.format(multaRescisoria);
    document.getElementById("decimoTerceiroCalculado").innerText      = formato.format(decimoTerceiroProporcional);
    
}

function calculaDemissaoPorComumAcordo(salarioDigitado, totalDeMesesTrabalhados, 
  recebeAvisoPrevioIndenizado, possuiFeriasVencidas) 
{
    let saldoSalario               = (calculaSaldoSalario(salarioDigitado, totalDeMesesTrabalhados));
    let avisoPrevioIndenizado      = 0;
    let decimoTerceiroProporcional = (calculaDecimoTerceiroProporcional(salarioDigitado, totalDeMesesTrabalhados));
    let feriasVencidas             = 0;
    let feriasProporcionais        = 0;
    let multaRescisoria            = (calculaMultaRescisoria(salarioDigitado, totalDeMesesTrabalhados));
    let formato                    = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
    
    if (recebeAvisoPrevioIndenizado == "true") 
    {
        avisoPrevioIndenizado = (calculaAvisoPrevioIndenizado(salarioDigitado));
    }
    
    if (possuiFeriasVencidas == "true") 
    {
        feriasVencidas = calculaFeriasVencidas(salarioDigitado);
        feriasProporcionais = calculaFeriasProporcionais(totalDeMesesTrabalhados, feriasVencidas);
    }
    
    avisoPrevioIndenizado = avisoPrevioIndenizado / 2;
    feriasVencidas = (feriasVencidas + feriasVencidas / 3);
    feriasProporcionais = (feriasProporcionais + feriasProporcionais / 3);
    multaRescisoria = multaRescisoria * 0.2;

    let demissaoPorComumAcordo = saldoSalario + (avisoPrevioIndenizado) + decimoTerceiroProporcional +
    (feriasVencidas) + (feriasProporcionais) + multaRescisoria;

    document.getElementById("total").innerText                        = formato.format(demissaoPorComumAcordo);
    document.getElementById("salarioProporcionalCalculado").innerText = formato.format(saldoSalario);
    document.getElementById("feriasVencidasCalculada").innerText      = formato.format(feriasVencidas);
    document.getElementById("feriasProporcionalCalculada").innerText  = formato.format(feriasProporcionais);
    document.getElementById("avisoPrevioCalculado").innerText         = formato.format(avisoPrevioIndenizado);
    document.getElementById("multaRescisoriaCalculada").innerText     = formato.format(multaRescisoria);
    document.getElementById("decimoTerceiroCalculado").innerText      = formato.format(decimoTerceiroProporcional);
}

// funções auxiliares
function calculaSaldoSalario(salarioDigitado, totalDeMesesTrabalhados) 
{
    let saldoSalario = (salarioDigitado / 30) * totalDeMesesTrabalhados;
    return parseFloat(saldoSalario);
}

function calculaDecimoTerceiroProporcional(salarioDigitado,totalDeMesesTrabalhados)
{
  let decimoTerceiro = (salarioDigitado / 12) * totalDeMesesTrabalhados;
  return parseFloat(decimoTerceiro);
}

function calculaFeriasVencidas(salarioDigitado) 
{
  let feriasVencidas = (salarioDigitado) + (salarioDigitado / 3);
  return parseFloat(feriasVencidas);
}

function calculaFeriasProporcionais(totalDeMesesTrabalhados, feriasVencidas) 
{
  let feriasProporcionais = (feriasVencidas / 12) * totalDeMesesTrabalhados;
  return parseFloat(feriasProporcionais);
}

function calculaAvisoPrevioIndenizado(salarioDigitado) 
{
  let avisoPrevioIndenizado = (salarioDigitado / 30) * 33;
  return parseFloat(avisoPrevioIndenizado);
}

function calculaMultaRescisoria(salarioDigitado, totalDeMesesTrabalhados) 
{
  let depositoMensalFGTS = salarioDigitado * 0.08;
  let totalContribuicaoFGTS = depositoMensalFGTS * totalDeMesesTrabalhados;
  let multaRescisoria = totalContribuicaoFGTS;
  return parseFloat(multaRescisoria);
}

function calculaDataMeses(date1, date2) 
{
    return Math.floor(moment(date2).diff(moment(date1),('months')))
}


function limparCampos() 
{
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