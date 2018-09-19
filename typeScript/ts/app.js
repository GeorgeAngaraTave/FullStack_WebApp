"use strict";
function greeter(person) {
    return "Hello, " + person;
}
let user = "Jane JOrge";
console.info(greeter(user));
let json = {
    v1: "uno",
    v2: "dos"
};
console.info(json.v1, json.v2);
let { v1, v2 } = json;
let arrayNumber = [1, 2, 3];
let arrayString = ['1', '2', '3'];
console.info('arrayNumber', arrayNumber);
console.info('arrayString', arrayString);
let arrayNumber2 = [1, 2, 3];
let arrayString2 = ['1', '2', '3'];
console.info('arrayNumber2', arrayNumber2);
console.info('arrayString2', arrayString2);
let arrayMixed = [2, '5', 3];
console.info('arrayMixed', arrayMixed);
let num1 = 1;
console.info('TIPO NÚMERO', num1);
let esVerdad = true;
console.info('TIPO BOOL', esVerdad);
let hoy = new Date();
console.info('TIPO Date', hoy);
let nuevaFucnion = function (a) {
    return a;
};
let funcion2 = (a) => a;
let funcion3 = function (a, b) {
    return a + b;
};
let funcion4 = (a, b) => a + b;
let funcion5 = (a, b, c) => {
    let d = a + b - c;
    return d;
};
console.log('funcion2', funcion2(1));
console.log('funcion2', funcion4(1, 2));
console.log('funcion2', funcion5(1, 2, 3));
let miarreglo = {
    vt1: "mi prueba",
    vt2: "prueba 2"
};
let valt1 = miarreglo.vt1;
let valt2 = miarreglo.vt2;
console.log(valt1, valt2);
let { vt1, vt2 } = miarreglo;
console.log(vt1, vt2);
let pruebaArreglo = ["p1", "p2", "p3"];
let [pos1, pos2, pos3] = pruebaArreglo;
console.log(pos1, pos2, pos3);
