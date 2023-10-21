// 1. Trabajar en la rama repaso1 .En una carpeta nueva. Ej: retos1. Guarda estos retos en un
// fichero .js Ej: condicionales.ts

// 2. Realizar una función que dada una fecha de nacimiento te devuelva el signo zodiacal.

// La fecha de nacimiento vendrá indicada por dos números: dia y mes.
// La cabecera de la función tendrá el siguiente aspecto: function zodiac(day, month)
let aries = "Aries";
let tauro = "Tauro";
let geminis = "Géminis";
let cancer = "Cáncer";
let leo = "Leo";
let virgo = "Virgo";
let libra = "Libra";
let escorpio = "Escorpio";
let sagitario = "Sagitario";
let capricornio = "Capricornio";
let acuario = "Acuario";
let piscis = "Piscis";
function zodiac(dia: number, mes: string){
    if((dia >= 22 && dia <= 30 && mes == "Diciembre") || dia >= 1 && dia <= 19 && mes == "Enero"){
        console.log("Tu signo zodiacal es: " + capricornio);
    }else if((dia >= 20 && dia <= 30 && mes == "Enero") || dia >= 1 && dia <= 18 && mes == "Febrero"){
        console.log("Tu signo zodiacal es: " + acuario);
    }else if((dia >= 19 && dia <= 30 && mes == "Febrero") || dia >= 1 && dia <= 20 && mes == "Marzo"){
        console.log("Tu signo zodiacal es: " + piscis);
    }else if((dia >= 21 && dia <= 30 && mes == "Marzo") || dia >= 1 && dia <= 19 && mes == "Abril"){
        console.log("Tu signo zodiacal es: " + aries);
    }else if((dia >= 20 && dia <= 30 && mes == "Abril") || dia >= 1 && dia <= 20 && mes == "Mayo"){
        console.log("Tu signo zodiacal es: " + tauro);
    }else if((dia >= 21 && dia <= 30 && mes == "Mayo") || dia >= 1 && dia <= 20 && mes == "Junio"){
        console.log("Tu signo zodiacal es: " + geminis);
    }else if((dia >= 21 && dia <= 30 && mes == "Junio") || dia >= 1 && dia <= 22 && mes == "Julio"){
        console.log("Tu signo zodiacal es: " + cancer);
    }else if ((dia >= 23 && dia <= 30 && mes == "Julio") || dia >= 1 && dia <= 22 && mes == "Agosto"){
        console.log("Tu signo zodiacal es: " + leo);
    }else if((dia >= 23 && dia <= 30 && mes == "Agosto") || dia >= 1 && dia <= 22 && mes == "Septiembre"){
        console.log("Tu signo zodiacal es: " + virgo);
    }else if((dia >= 23 && dia <= 30 && mes == "Sepriembre") || dia >= 1 && dia <= 22 && mes == "Octubre"){
        console.log("Tu signo zodiacal es: " + libra);
    }else if((dia >= 23 && dia <= 30 && mes == "Octubre") || dia >= 1 && dia <= 21 && mes == "Noviembre"){
        console.log("Tu signo zodiacal es: " + escorpio);
    }else if((dia >= 22 && dia <= 30 && mes == "Noviembre") || dia >= 1 && dia <= 21 && mes == "Diciembre"){
        console.log("Tu signo zodiacal es: " + sagitario);
    }
}
zodiac(21, "Diciembre");
zodiac(1, "Enero");
// Realizar un procedimiento que dado el nombre de un país te imprima en que continente
// estás. (Max 5 países por continente).
// La cabecera del procedimiento tendrá el siguiente aspecto: function continent(country).
let españa = "España";
let francia = "Francia";
let portugal = "Portugal";
let alemania = "Alemania";
let liberland = "Liberland";
let europa = [españa, francia, portugal, alemania, liberland];

let eeuu = "Estados Unidos";
let mexico = "Mexico";
let colombia = "Colombia";
let argentina = "Argentina";
let cuba = "Cuba";
let america = [eeuu, mexico, colombia, argentina, cuba];

let china = "China";
let india = "India";
let hongKong = "Hong Kong";
let singapur = "Singapur";
let taiwan = "Taiwan";
let asia = [china, india, hongKong, singapur, taiwan];

let australia = "Australia";
let nuevaZelanda = "Nueva Zelanda";
let fiyi = "Fiyi";
let samoa = "Samoa";
let tonga = "Tonga";
let oceania = [australia, nuevaZelanda, fiyi, samoa, tonga];

let marruecos = "Marruecos";
let guineaEcuatorial = "Guinea Ecuatorial";
let argelia = "Argelia";
let tunez = "Tunez";
let congo = "Congo";
let africa = [marruecos, guineaEcuatorial, argelia, tunez, congo];

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