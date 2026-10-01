function crearMultiplicador(n) {
    return function (x) {
        return x * n;
    };
}

const doble = crearMultiplicador(2);
const triple = crearMultiplicador(3);

console.log(doble(5));   // 10
console.log(triple(5));  // 15
