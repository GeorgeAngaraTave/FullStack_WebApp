"use strict";
function greeter(person) {
    return "Hello, " + person;
}
var user = "Jane User";
console.info(greeter(user));
var json = {
    v1: "uno",
    v2: "dos"
};
console.info(json.v1, json.v2);
var v1 = json.v1, v2 = json.v2;
var arrayNumber = [1, 2, 3];
var arrayString = ['1', '2', '3'];
console.info('arrayNumber', arrayNumber);
console.info('arrayString', arrayString);
var arrayNumber2 = [1, 2, 3];
var arrayString2 = ['1', '2', '3'];
console.info('arrayNumber2', arrayNumber2);
console.info('arrayString2', arrayString2);
var arrayMixed = [2, '5', 3];
console.info('arrayMixed', arrayMixed);
var num1 = 1;
console.info('TIPO NÚMERO', num1);
var esVerdad = true;
console.info('TIPO BOOL', esVerdad);
var hoy = new Date();
console.info('TIPO Date', hoy);
