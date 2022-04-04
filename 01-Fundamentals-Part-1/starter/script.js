

let js = 'amazing';

if (js === 'amazing') {
    // alert('is fun');
}
const nombre = "Roy";
const apellido = 'Terrazas';
const anoNacimiento = 1975;
const anoActual = 2022;

//TEMPLATE LITERALS-------------------- desde la version es6
// ojo hay que poner esta madre: ` (se llama back ticks) es altgr + llave que cierra`
const datosCompletos =
    `mi nombre es: ${nombre} ${apellido} y mi edad es: ${anoNacimiento - anoActual} años de edad`;
//console.log(datosCompletos);

// MULTI LINE LITERAL:
/*console.log(`Esta es una cadena
con multiples
lineas, solo dar enter y listo`);
*/


//-------------------------------------------------------------------------------------

//IF-----------------------------------------------------------------
// para agregar iconos es la tecla "windows + ."
const birthYear = 2010;
const today = 2022;
let annos = today - birthYear;
if (annos >= 18) {
    //console.log('tiene edad 😁');
}
else {
    //console.log(`le faltan ${annos} años`); 
}

//CASTING---------------------------------------------------------------------------
//de string a number
let inputYear = '1975';
console.log('el casting es: ' + (Number(inputYear) - 5));
// de numero a string
console.log(String(46));

//type coersion, el js hace la conversion solo;
console.log('im am' + 46 + ' years old'); //convierte el 46 a string
console.log('23' - '10' + 3);
console.log('23' * '10');

//FAULSY VALUES valores que al convertirlos a bool se van a hacer falsos
// son 5: 0,'',undefined, null,NaN
//TRUTHY VALUES valores que al convertirse se a bool se hacen true


// EQUALITY OPERATORS, =,==, ===:
let numeroFavorito = prompt('deme su numero favorito');
// con 2 == hace type coerson
if (numeroFavorito == 41) console.log('el numero es 41');
// con 3 iguales NO HACE TYPE COERSION
// aun que se ponga 46 no va a entrar por que el propmt jala los datos como string
// habria qu ehacer un casting para que funcionara
if (Number(numeroFavorito) === 46) console.log('el numero es 46');

//CON DIFERENTE ES IGUAL
//LOOSE VERSION !=
//STRICT VERSION !==
if (numeroFavorito !== 41) console.log('el numero es 41');//STRICT
if (numeroFavorito != 41) console.log('el numero es 41');//LOSE

//---------------------------------------------------------

//CONDITIONAL OPERATOR---------------------
// ES COMO UN IF PERO EN UNA SOLA LINEA para desiciones rapidas
const age = 46;

age >= 18 ? console.log('es mayor de edad') : console.log('NO es mayor de edad');

//se puede definir una variable condicional asi en una sola linea 
const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);












