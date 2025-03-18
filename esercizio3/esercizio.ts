const numeri: number[] = [2, -3, 0, 5, -1, 0];

function analizzaNumeri(numeri: number[]): void {
    let sommaPositivi: number = 0;
    let prodottoNegativi: number = 1;
    let contaZero: number = 0;
    let haNegativi: boolean = false; 

    for (let numero of numeri) {
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

    console.log("Somma dei numeri positivi:", sommaPositivi);
    console.log("Prodotto dei numeri negativi:", prodottoNegativi);
    console.log("Numero di zeri:", contaZero);
}

analizzaNumeri(numeri);


//extra mio
function analizzaNumeriVarargs(...numeri: number[]): void {
    let sommaPositivi: number = 0;
    let prodottoNegativi: number = 1;
    let contaZero: number = 0;
    let haNegativi: boolean = false;

    for (let numero of numeri) {
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

    console.log("Somma dei numeri positivi:", sommaPositivi);
    console.log("Prodotto dei numeri negativi:", prodottoNegativi);
    console.log("Numero di zeri:", contaZero);
}

analizzaNumeriVarargs(2, -3, 0, 5, -1, 0, 8, -2);

