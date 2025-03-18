function moltiplica(a: number, b: number): number {
    return a * b;
}

const risultato: number = moltiplica(4, 5)
console.log("Risultato della moltiplicazione: ", risultato);

//arrow function
const somma = (a: number, b: number): number => a + b;
console.log("Risultato somma: ", somma(3, 7));

//funzioni con parametri definiti
function moltiplicaFisso(a: number, b: number = 2): number {
    return a * b;
}
console.log("Risultato moltiplicazione con b fisso: ", moltiplicaFisso(5));

//funzione con rest parameters per un numero indefinito di argomenti
function sommaTutti(...numeri : number[]): number{
    return numeri.reduce((acc, curr) => acc + curr, 0);
}
console.log("Somma totale: ", sommaTutti(1, 2, 3, 4, 5, 6))

//funzione generica
function identita<T>(arg: T): T{
    return arg;
}
console.log("identità: ",identita<string>("Testo"));
console.log("Identità: ", identita<number>(123));

//overload di funzioni
function descrivi(valore: number): string;
function descrivi(valore: string): string;
function descrivi(valore: any): string{
    if(typeof valore === "number"){
        return `il numero è ${valore}`;
    }
    else if(typeof valore === "string"){
        return `la stringa è ${valore}`;
    }
    else{
        return "tipo non supportato"
    }
}

console.log(descrivi(42));
console.log(descrivi("CIAOOOO"));
