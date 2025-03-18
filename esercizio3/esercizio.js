var numeri = [2, -3, 0, 5, -1, 0];
function analizzaNumeri(numeri) {
    var sommaPositivi = 0;
    var prodottoNegativi = 1;
    var contaZero = 0;
    var haNegativi = false;
    for (var _i = 0, numeri_1 = numeri; _i < numeri_1.length; _i++) {
        var numero = numeri_1[_i];
        if (numero > 0) {
            sommaPositivi += numero;
        }
        else if (numero < 0) {
            prodottoNegativi *= numero;
            haNegativi = true;
        }
        else {
            contaZero++;
        }
    }
    if (!haNegativi) {
        prodottoNegativi = 0;
    }
    console.log("Somma dei numeri positivi:", sommaPositivi);
    console.log("Prodotto dei numeri negativi:", prodottoNegativi);
    console.log("Numero di zeri:", contaZero);
}
analizzaNumeri(numeri);
//extra mio
function analizzaNumeriVarargs() {
    var numeri = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numeri[_i] = arguments[_i];
    }
    var sommaPositivi = 0;
    var prodottoNegativi = 1;
    var contaZero = 0;
    var haNegativi = false;
    for (var _a = 0, numeri_2 = numeri; _a < numeri_2.length; _a++) {
        var numero = numeri_2[_a];
        if (numero > 0) {
            sommaPositivi += numero;
        }
        else if (numero < 0) {
            prodottoNegativi *= numero;
            haNegativi = true;
        }
        else {
            contaZero++;
        }
    }
    if (!haNegativi) {
        prodottoNegativi = 0;
    }
    console.log("Somma dei numeri positivi:", sommaPositivi);
    console.log("Prodotto dei numeri negativi:", prodottoNegativi);
    console.log("Numero di zeri:", contaZero);
}
analizzaNumeriVarargs(2, -3, 0, 5, -1, 0, 8, -2);
