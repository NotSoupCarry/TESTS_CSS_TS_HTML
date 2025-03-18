"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var AnalizzatoreNumeri = /** @class */ (function () {
    function AnalizzatoreNumeri(numeri) {
        this.numeri = numeri;
    }
    AnalizzatoreNumeri.prototype.analizza = function () {
        var sommaPositivi = 0;
        var prodottoNegativi = 1;
        var contaZero = 0;
        var haNegativi = false;
        for (var _i = 0, _a = this.numeri; _i < _a.length; _i++) {
            var numero = _a[_i];
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
        console.log("\nRisultati:");
        console.log("Somma dei numeri positivi:", sommaPositivi);
        console.log("Prodotto dei numeri negativi:", prodottoNegativi);
        console.log("0️Numero di zeri:", contaZero);
    };
    return AnalizzatoreNumeri;
}());
// Creazione dell'interfaccia di input
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Chiedi input all'utente
rl.question("Inserisci una serie di numeri separati da spazio: ", function (input) {
    var numeri = input.split(" ").map(Number);
    // Istanzia la classe e chiama il metodo
    var analizzatore = new AnalizzatoreNumeri(numeri);
    analizzatore.analizza();
    rl.close();
});
