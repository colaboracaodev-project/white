
// função principal
function manipulaDOM() {
    let salarioDigitado = parseFloat(document.getElementById("salario").value);
    let diasMes = parseFloat(document.getElementById("dias-trabalhados").value);
    let mesesAno = parseFloat(document.getElementById("meses-trabalhados-ano").value);
    let totalMesesTrabalhados = parseFloat(document.getElementById("total-de-meses-trabalhados").value);
    
    let saldoSalario = calculaSaldoSalario(salarioDigitado, diasMes);
    console.log("saldoSalario: " + saldoSalario);
    
    let feriasVencidas = calculaFeriasVencidas(salarioDigitado);
    console.log("feriasVencidas: " + feriasVencidas);

    let feriasProporcionais = calculaFeriasProporcionais(mesesAno, feriasVencidas); 
    console.log("feriasProporcionais: " + feriasProporcionais);

    let decimoTerceiroProporcional = calculaDecimoTerceiroProporcional(salarioDigitado, mesesAno);
    console.log("decimoTerceiro: " + decimoTerceiroProporcional);

    let avisoPrevioIndenizado = calculaAvisoPrevioIndenizado(salarioDigitado);
    console.log("avisoPrevio: " + avisoPrevioIndenizado);
    
    let multaRescisoria = calculaMultaRescisoria(salarioDigitado, totalMesesTrabalhados); 
    console.log("multaRescisoria: " + multaRescisoria);
    
    let total = calculaTotal(saldoSalario, feriasVencidas, feriasProporcionais, decimoTerceiroProporcional,avisoPrevioIndenizado, multaRescisoria);
    console.log("Total: " + total);

    document.getElementById('resultado').innerHTML = total;

    // funções auxiliares
    function calculaSaldoSalario(salarioDigitado, diasMes) {
        let saldoSalario = (salarioDigitado/30) * diasMes; 
        return saldoSalario; 
    }
    
    function calculaDecimoTerceiroProporcional(salarioDigitado, mesesAno) {
        let decimoTerceiro = (salarioDigitado/12) * mesesAno; 
        return decimoTerceiro; 
    }
    
    function calculaFeriasVencidas(salarioDigitado) {
        let feriasVencidas = salarioDigitado + (salarioDigitado / 3); 
        return feriasVencidas;  
    }
    
    function calculaFeriasProporcionais(mesesAno, feriasVencidas) {
        let feriasProporcionais = (feriasVencidas/12) * mesesAno; 
        return feriasProporcionais; 
    }
    
    function calculaAvisoPrevioIndenizado(salario) {
        let avisoPrevioIndenizado = (salario / 30) * 33;
        return avisoPrevioIndenizado;
    }
    
    function calculaMultaRescisoria(salario, totalDeMesesTrabalhados) {
        let depositoMensalFGTS = salario * 0.08;
        let totalContribuicaoFGTS = depositoMensalFGTS * totalDeMesesTrabalhados;
        let multaRescisoria = totalContribuicaoFGTS * 0.4;
        return multaRescisoria;
    }
    
    function calculaTotal(saldoSalario, feriasVencidas, feriasProporcionais, decimoTerceiroProporcional, avisoPrevioIdenizado, multaRescisoria) {
        let total = saldoSalario + feriasVencidas + feriasProporcionais + decimoTerceiroProporcional + avisoPrevioIdenizado + multaRescisoria;
        console.log(typeof(total));
        return total.toFixed(2);  
    }
}