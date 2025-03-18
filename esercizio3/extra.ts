import * as readline from "readline";

class AnalizzatoreNumeri {
    private numeri: number[];

    constructor(numeri: number[]) {
        this.numeri = numeri;
    }

    analizza(): void {
        let sommaPositivi: number = 0;
        let prodottoNegativi: number = 1;
        let contaZero: number = 0;
        let haNegativi: boolean = false;

        for (let numero of this.numeri) {
            if (numero > 0) {
                sommaPositivi += numero;
            } else if (numero < 0) {
                prodottoNegativi *= numero;
                haNegativi = true;
            } else {
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
    }
}

// Creazione dell'interfaccia di input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Chiedi input all'utente
rl.question("Inserisci una serie di numeri separati da spazio: ", (input) => {
    const numeri = input.split(" ").map(Number);

    // Istanzia la classe e chiama il metodo
    const analizzatore = new AnalizzatoreNumeri(numeri);
    analizzatore.analizza();

    rl.close();
});
