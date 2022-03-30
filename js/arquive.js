//#region Variáveis Globais

//#endregion

//#region metodos Básicos
 function insert(num)
{
    var numero = document.getElementById('Resultado').innerHTML;
    document.getElementById('Resultado').innerHTML = numero+num;
}
function clean()
{
    document.getElementById('Resultado').innerHTML= "";
}
function back()
{
    var Resultado = document.getElementById('Resultado').innerHTML;
    document.getElementById('Resultado').innerHTML = Resultado.substring(0, Resultado.length -1)
}
//#endregion 

//#region metodos cálculos
function calcular()
{
    var Resultado = document.getElementById('Resultado').innerHTML;
    if(Resultado)
    {
        document.getElementById('Resultado').innerHTML = eval(Resultado)
    }
}

function calcularRaiz()
{
    var Resultado = document.getElementById('Resultado').innerHTML;
    var calculo = parseInt(Resultado);
    var raiz = (Math.sqrt(calculo));
    document.getElementById('Resultado').innerHTML = raiz
}
/*function calcularPotencia()
{
    var Resultado = document.getElementById('Resultado').innerHTML;
    var calculo = parseInt(Resultado);
    var potencia = (Math.pow(Calculo));
    document.getElementById('Resultado').innerHTML = potencia
}*/
//#endregion
