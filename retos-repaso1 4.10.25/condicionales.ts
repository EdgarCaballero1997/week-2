// 1. Trabajar en la rama repaso1 .En una carpeta nueva. Ej: retos1. Guarda estos retos en un
// fichero .js Ej: condicionales.ts

// 2. Realizar una función que dada una fecha de nacimiento te devuelva el signo zodiacal.

// La fecha de nacimiento vendrá indicada por dos números: dia y mes.
// La cabecera de la función tendrá el siguiente aspecto: function zodiac(day, month)

function zodiac(dia: number, mes: string){
    let result = "";
    if((dia >= 22 && dia <= 30 && mes == "Diciembre") || dia >= 1 && dia <= 19 && mes == "Enero"){
        result = "Tu signo zodiacal es: capricornio";
    }else if((dia >= 20 && dia <= 30 && mes == "Enero") || dia >= 1 && dia <= 18 && mes == "Febrero"){
        result = "Tu signo zodiacal es: acuario";
    }else if((dia >= 19 && dia <= 30 && mes == "Febrero") || dia >= 1 && dia <= 20 && mes == "Marzo"){
        result = "Tu signo zodiacal es: piscis";
    }else if((dia >= 21 && dia <= 30 && mes == "Marzo") || dia >= 1 && dia <= 19 && mes == "Abril"){
        result = "Tu signo zodiacal es: aries";
    }else if((dia >= 20 && dia <= 30 && mes == "Abril") || dia >= 1 && dia <= 20 && mes == "Mayo"){
        result = "Tu signo zodiacal es: tauro";
    }else if((dia >= 21 && dia <= 30 && mes == "Mayo") || dia >= 1 && dia <= 20 && mes == "Junio"){
        result = "Tu signo zodiacal es: geminis";
    }else if((dia >= 21 && dia <= 30 && mes == "Junio") || dia >= 1 && dia <= 22 && mes == "Julio"){
        result = "Tu signo zodiacal es: cancer";
    }else if ((dia >= 23 && dia <= 30 && mes == "Julio") || dia >= 1 && dia <= 22 && mes == "Agosto"){
        result = "Tu signo zodiacal es: leo";
    }else if((dia >= 23 && dia <= 30 && mes == "Agosto") || dia >= 1 && dia <= 22 && mes == "Septiembre"){
        result = "Tu signo zodiacal es: virgo";
    }else if((dia >= 23 && dia <= 30 && mes == "Sepriembre") || dia >= 1 && dia <= 22 && mes == "Octubre"){
        result = "Tu signo zodiacal es: libra";
    }else if((dia >= 23 && dia <= 30 && mes == "Octubre") || dia >= 1 && dia <= 21 && mes == "Noviembre"){
        result = "Tu signo zodiacal es: escorpio";
    }else if((dia >= 22 && dia <= 30 && mes == "Noviembre") || dia >= 1 && dia <= 21 && mes == "Diciembre"){
        result = "Tu signo zodiacal es: sagitario";
    }
    return result;
}
zodiac(21, "Diciembre");
zodiac(1, "Enero");
// Realizar un procedimiento que dado el nombre de un país te imprima en que continente
// estás. (Max 5 países por continente).
// La cabecera del procedimiento tendrá el siguiente aspecto: function continent(country).
let europa = ["España", "Francia", "Portugal", "Alemania", "Liberland"];
let america = ["Estados Unidos", "Mexico", "Colombia", "Argentina", "Cuba"];
let asia = ["China", "India", "Hong Kong", "Singapur", "Taiwan"];
let oceania = ["Australia", "Nueva Zelanda", "Fiyi", "Samoa", "Tonga"];
let africa = ["Marruecos", "Guinea Ecuatorial", "Argelia", "Tunez", "Congo"];

function continent(country: string){
    if(europa.indexOf(country) !== -1){
        console.log("Estás en el continente europeo. Estos son algunos de sus países: " + europa);
    }else if(africa.indexOf(country) !== -1){
        console.log("Estás en el continente africano. Estos son algunos de sus países: " + africa);
    }else if(asia.indexOf(country) !== -1){
        console.log("Estás en el continen asiatico. Estos son algunos de sus países: " + asia);
    }else if(america.indexOf(country) !== -1){
        console.log("Estás en el continente americano. Estos son algunos de sus países: " + america);
    }else if(oceania.indexOf(country) !== -1){
        console.log("Estás en el continente oceánico. Estos son algunos de sus países: " + oceania);
    }
}
continent("Congo");
continent("España");
continent("China");
continent("Australia");
continent("Mexico");
// 4. Realizar una función que te imprima por consola el siguiente mensaje:
// - “El numero es par”, si el numero introducido como parámetro de entrada es par
// - “El numero es impar”, si el numero introducido como parámetro de entrada es impar

// 5. La cabecera de la función tendrá el siguiente aspecto: function isEven(number)
function isEven(number: number){
    if(number % 2 == 0){
        console.log(number + " es un número par.");
    }else if(number % 2 != 0){
        console.log(number + " es un número impar.");
    }
}
isEven(4);
isEven(5);
//QUIERO DORMIIIIR :(