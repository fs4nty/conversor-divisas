function Convertir() {
    let valor = parseFloat(document.getElementById("cantidad").value);
    let de = document.getElementById("de").value;
    let a = document.getElementById("a").value;

    //divisas.
    let dolar = 4703.95;
    let euro = 5182.91;
    let eurousd = 0.91;
    let liras = 241.83;
    let lirasusd = 19.45;
    let liraseuro = 21.64;
    let btc = 137870835.5;
    let btcusd = 0.000034;
    let btceuro = 0.000038;
    let btcliras = 0.0000018;
    let monero = 727827.47;
    let monerousd = 0.0065;
    let moneroeuro = 0.0073;
    let moneroliras = 0.00033;
    let monerobtc = 191.72;
    let resultado = 0;

    //peso a dolar
    if (de == 1 && a == 3) {
        resultado = valor / dolar;
        document.getElementById("resultado").innerHTML = resultado;
    }

    //peso a euro
    else if (de == 1 && a == 2) {
        resultado = valor * euro;
        document.getElementById("resultado").innerHTML = resultado;
    }

    //peso a liras
    else if (de == 1 && a == 4) {
        resultado = valor * liras;
        document.getElementById("resultado").innerHTML = resultado;
    }

    //peso a BTC
    else if (de == 1 && a == 5) {
        resultado = valor * btc;
        document.getElementById("resultado").innerHTML = resultado;
    }

    //peso a monero
    else if (de == 1 && a == 6) {
        resultado = valor * monero;
        document.getElementById("resultado").innerHTML = resultado;
    }

    //dolar a peso
    else if (de == 3 && a == 1) {
        resultado = valor * dolar;
        document.getElementById("resultado").innerHTML = resultado;
    }

    //dolar a euro
    else if (de == 3 && a == 2) {
        resultado = valor * eurousd;
        document.getElementById("resultado").innerHTML = resultado;
    }

    //dolar a liras
    else if (de == 3 && a == 4) {
        resultado = valor * lirasusd;
        document.getElementById("resultado").innerHTML = resultado;
    }

    //dolar a BTC
    else if (de == 3 && a == 5) {
        resultado = valor * btcusd;
        document.getElementById("resultado").innerHTML = resultado;
    }

    //dolar a monero
    else if (de == 3 && a == 6) {
        resultado = valor * monerousd;
        document.getElementById("resultado").innerHTML = resultado;
    }

    //euro a peso
    else if (de == 2 && a == 1) {
        resultado = valor * euro;
        document.getElementById("resultado").innerHTML = resultado;
    }

    //euro a dolar
    else if (de == 2 && a == 3) {
        resultado = valor / eurousd;
        document.getElementById("resultado").innerHTML = resultado;
    }

    //euro a liras
    else if (de == 2 && a == 4) {
        resultado = valor * liraseuro;
        document.getElementById("resultado").innerHTML = resultado;
    }
    //euro a BTC
    else if (de == 2 && a == 5) {
        resultado = valor * btceuro;
        document.getElementById("resultado").innerHTML = resultado;
    }

    //euro a monero
    else if (de == 2 && a == 6) {
        resultado = valor * moneroeuro;
        document.getElementById("resultado").innerHTML = resultado;
    }

    //liras a peso
    else if (de == 4 && a == 1) {
        resultado = valor * liras;
        document.getElementById("resultado").innerHTML = resultado;
    }

    //liras a euro
    else if (de == 4 && a == 2) {
        resultado = valor / liraseuro;
        document.getElementById("resultado").innerHTML = resultado;
    }

    //liras a dolar
    else if (de == 4 && a == 3) {
        resultado = valor / lirasusd;
        document.getElementById("resultado").innerHTML = resultado;
    }

    //liras a BTC
    else if (de == 4 && a == 5) {
        resultado = valor * btcliras;
        document.getElementById("resultado").innerHTML = resultado;
    }

    //liras a monero
    else if (de == 4 && a == 6) {
        resultado = valor * moneroliras;
        document.getElementById("resultado").innerHTML = resultado;
    }

    //BTC a peso
    else if (de == 5 && a == 1) {
        resultado = valor * btc;
        document.getElementById("resultado").innerHTML = resultado;
    }

    //BTC a euro
    else if (de == 5 && a == 2) {
        resultado = valor / btceuro;
        document.getElementById("resultado").innerHTML = resultado;
    }

    //BTC a dolar
    else if (de == 5 && a == 3) {
        resultado = valor / btcusd;
        document.getElementById("resultado").innerHTML = resultado;
    }

    //BTC a liras
    else if (de == 5 && a == 4) {
        resultado = valor / btcliras;
        document.getElementById("resultado").innerHTML = resultado;
    }

    //BTC a monero
    else if (de == 5 && a == 6) {
        resultado = valor * monerobtc;
        document.getElementById("resultado").innerHTML = resultado;
    }

    //monero a peso
    else if (de == 6 && a == 1) {
        resultado = valor * monero;
        document.getElementById("resultado").innerHTML = resultado;
    }

    //monero a euro
    else if (de == 6 && a == 2) {
        resultado = valor / moneroeuro;
        document.getElementById("resultado").innerHTML = resultado;
    }

    //monero a dolar
    else if (de == 6 && a == 3) {
        resultado = valor / monerousd;
        document.getElementById("resultado").innerHTML = resultado;
    }

    //monero a liras
    else if (de == 6 && a == 4) {
        resultado = valor / moneroliras;
        document.getElementById("resultado").innerHTML = resultado;
    }

    //monero a BTC
    else if (de == 6 && a == 5) {
        resultado = valor / monerobtc;
        document.getElementById("resultado").innerHTML = resultado;
    }
}
