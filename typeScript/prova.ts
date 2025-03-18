// array
const numeri: number[] = [1, 2, 3, 4, 5];

//ciclo for
for(let i = 0; i < numeri.length; i++){
    console.log(`elemento ${i}, numero: ${numeri[i]}`)
}

//ciclo while
let j: number = 0;
while(j < numeri.length){
    console.log(`elemento ${j}, numero: ${numeri[j]}`);
    j++
}

//ciclo for....of (for each)
for(const num of numeri){
    console.log(`Numero: ${num}`)
}