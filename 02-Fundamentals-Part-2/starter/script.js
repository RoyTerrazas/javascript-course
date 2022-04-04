'use strict'; // nos manda errores al console log para ver donde la regamos
// el modo estricto evita meter bugs en el codigo
// nos prohibe hacer cosas y nos marca los fallos

let hasDriversLicence = false;
const passTest = true;
if (passTest) hasDriversLicence = false;
//console.log(hasDriversLicence);


// FUNCTIONS---------------------------------------------------
function jugo(numManzanas, numNaranjas) {
    const tipoJugo = ` el jugo esta hecho de ${numManzanas} manzanas y ${numNaranjas} naranjas`;

    return (tipoJugo)
}
console.log(jugo(5, 2));

//FUNCTIONS ----------------------------------------------------------------------
//FUNCTION DECLARATION
function calcularEdad(anoNacimiento) {
    const annoActual = new Date().getFullYear();
    return annoActual - anoNacimiento;
}
console.log(calcularEdad(1975));

//FUNCTION EXPRESSION
//------regresar resultado como variable------------------------
// a esto se le llama ANONIMUS FUNCTION ya que no tiene nombre
const Edad = function (anoNacimiento) {
    const annoActual = new Date().getFullYear();
    return annoActual - anoNacimiento;
}
//console.log(calcularEdad(1975));

//ARROW FUNCTIONS------ son mas cortas y rapidas
const edadCalculada = birthYear => 2037 - birthYear;
//console.log(`tu edad calculada es ${edadCalculada(1975)} años`);

// para el caso que se tenga que calcular algo mas complejo dentro del arrow function
const annosFaltantesParaRetiro = AnoNacimiento => {
    const age = 2037 - AnoNacimiento;
    const retiro = 65 - age;
    return retiro
}
//console.log(`te faltan ${annosFaltantesParaRetiro(1975)} años para el retiro`);

// si son varios parametros y varios calculos usar parentesis asi:
const annosFaltantesParaRetiro2 = (AnoNacimiento, apellido) => {
    const age = 2037 - AnoNacimiento;
    const retiro = 65 - age;
    return `${apellido} te faltan ${retiro} años para el retiro`;
}
//console.log(annosFaltantesParaRetiro2(1975, 'Terrazas'));

//ARRAYS------------------------------------------------------
//LITERAL SYNTAX
let amigos = ['brenda', 'roy', 'alonso'];
//console.log(amigos);
//console.log(amigos[0]);
amigos[0] = 'roy terrazas';
//console.log(amigos[0]);
//console.log(amigos.length);// ojo nos da el numero de elementos en el arreglo no inicia en CERO
//console.log(amigos[amigos.length - 1]); // obtiene el ultimo del arreglo 

// otra forma de hacer arreglos
let annnoa = new Array(1975, 1985, 2022);
//console.log(annnoa);

// arreglos con valores mistos
const arregloMixto = ['un texto', 22 - 18];
//console.log(arregloMixto);

// se pueden poner arreglos dentro de arreglos
const arregloEnvevido = [2, 2, 4];
const arregloMixto2 = ['un texto', 22 - 18, arregloEnvevido];
//console.log(arregloMixto2);

//BASIC ARRAY OPERATIONS methods-----------------------------------
let amigos2 = ['brenda', 'roy', 'alonso'];

//ADICIONAR ELEMENTOS A ARREGLOS
//PUSH METHOD --agregar elemento al final del arreglo
const nuevaLongitud = amigos2.push('insertar al final');// el push regresa la longitud del nuevo arrglo
console.log(amigos2);
console.log(nuevaLongitud);

//UNSHIFT METHOD -- agrega al inicio del arreglo
amigos2.unshift("inicio del arreglo");// tambien regresa la longitud del nuevo arreglo 
console.log(amigos2);

// QUITAR ELEMENTOS DE ARREGLOS
// remover el ultimo elemento del arreglo
amigos2.pop(); // si lo guardo en variable regresa el tamaño del arreglo sin uno
console.log(amigos2);

//remover el p´rimero elemento del arreglo
amigos2.shift();// quita el primer elemento del arreglo si no le pongo nada, regresa el que se quedo en primer lugar
console.log(amigos2);
console.log(amigos2.shift()); // al removerlo regresa el que se quedo en primer lugar.

//INDEXOF utilizado para saber la posicion en el arreglo 
console.log(amigos2.indexOf('roy')); // si da -1 quiere decir que no lo encontro en el arreglo

//INCLUDES regresa variable boleana si lo encuentra
console.log(amigos2.includes('roy'));

//OBJETOS..................................................................
// aqui se asigna un nombre al valor, ejemplo first name, cosa que nos e puede hacer en un arreglo
//cada nombre del objeto se llama propiedad: en este caso son 5, first name, secondname, edad, job, amigos
//OBJECT LITERAL SYNTAX
const roy = {
    firstName: 'roy',
    secondName: 'terrazas',
    edad: 46,
    job: 'sw creator',
    amigos: ['brenda', 'valeria', 'megan']
};

//hay 2 formas de obtener las propiedades para el objeto
// con la notacion con punto .
console.log(roy.firstName);

// con llaves
//aqui se puede poner cualquier expresion entre las llaves que se requiera, con la notacion de punto no se puede.
console.log(roy['secondName']);

//ejemplo de como se usa una exprtesion con esto:
const keyName = 'Name';//parte que se repite
console.log(roy['first' + keyName]); // aqui se concatenan los nombres de los contenidos de las propiedades
console.log(roy['Second' + keyName]);

//para ejemplificar el bracket notation o notacion de llaves[]

const interestedIn = prompt("que quieres saber de Roy: firstName, secondName, edad, job o amigos?");// aqui debe escribit cualquiera de los campos ya definidos en  el objeto roy

if (roy[interestedIn]) { // hacer esta validacion para evitar se pongan opciones no validas ya que da undefined
    console.log(roy[interestedIn]);
}
else { console.log('Esas no son las opciones validas'); }

//ADICIONAR nuevas propiedades al objeto
//por ejemplo si requiero agregar la locacion
roy.location = 'MEXICO'; // los agrega en orden alfabetico, dot notation
roy['email'] = 'roy.terrazas@gmail.com'; //bracket
console.log(roy);

//Challange
// escribir roy tiene 3 amigos y su mejor amigo es brenda

console.log(roy.firstName + ' tiene: ' + roy.amigos.length + ' amigos y su mejor amigo es: ' + roy.amigos[0]);


