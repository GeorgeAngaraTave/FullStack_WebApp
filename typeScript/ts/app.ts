function greeter(person: string) {
    return "Hello, " + person;
}

let user = "Jane JOrge";

console.info(greeter(user));

let json = {
    v1: "uno",
    v2: "dos"
}

console.info(json.v1, json.v2);
let{v1,v2}=json;

let arrayNumber: number[] = [1, 2, 3];
let arrayString: string[] = ['1', '2', '3'];
console.info('arrayNumber', arrayNumber);
console.info('arrayString', arrayString);

let arrayNumber2: Array<number> = [1, 2, 3];
let arrayString2: Array<string> = ['1', '2', '3'];
console.info('arrayNumber2', arrayNumber2);
console.info('arrayString2', arrayString2);

let arrayMixed: any[] = [2, '5', 3];
console.info('arrayMixed', arrayMixed);

let num1:number=1;
console.info('TIPO NÚMERO', num1);
let esVerdad:boolean = true;
console.info('TIPO BOOL', esVerdad);
let hoy:Date = new Date();
console.info('TIPO Date', hoy);

let nuevaFucnion =  function (a:number){
	return a;
}

let funcion2 = (a:number) => a;

let funcion3 = function(a:number,b:number){
	return a+b;
}

let funcion4 = (a:number,b:number) => a+b;

let funcion5 = (a:number,b:number,c:number)=>{
	let d = a + b - c;
	return d;
}
console.log('funcion2', funcion2(1));
console.log('funcion2',funcion4(1,2));
console.log('funcion2',funcion5(1,2,3));

let miarreglo ={
	vt1: "mi prueba",
	vt2: "prueba 2"
}

let valt1 = miarreglo.vt1;
let valt2 = miarreglo.vt2;
console.log(valt1, valt2);

let { vt1 , vt2 } = miarreglo;

console.log(vt1,vt2);

let pruebaArreglo:string[] = ["p1","p2","p3"];
let [pos1,pos2,pos3] = pruebaArreglo;

console.log(pos1, pos2, pos3);




