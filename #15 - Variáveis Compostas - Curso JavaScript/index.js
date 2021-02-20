let num = [5,8,2,9,3];
num.push(7);
num.sort();

console.log(`O vetor tem ${num.length} posições e são: ${num}`);

// for(let pos=0; pos<=num.length; pos++){
//     console.log(`A posição ${pos} tem o valor ${num[pos]}`);
// }

for(let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`);
}

let n = num.indexOf(7);

console.log(n);

// num.forEach(n => {
//     console.log(`${num[n]}`);
// });