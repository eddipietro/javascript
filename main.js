

////////////EJERCICIO  CONDICIONAL ///////////////

let gustoIngresado = prompt("Ingresa tu gusto por favor");
let gusto1 = "chocolate";
let gusto2 = "dulceDeLeche";
let gusto3 = "frutilla";
let gusto4 = "bananaSplit";
let gusto5 = "tramontana";

if(gustoIngresado == gusto1){
  alert( "Te pedimos disculpas, no disponemos de ese gusto en este momento");

} else if(gustoIngresado == gusto2){
        alert( "Te pedimos disculpas, no disponemos de ese gusto en este momento");

} else if(gustoIngresado == gusto3){
    alert( "Te pedimos disculpas, no disponemos de ese gusto en este momento");

} else if(gustoIngresado == gusto4){
    alert( "Te pedimos disculpas, no disponemos de ese gusto en este momento");

} else{
    alert( "Que rico gusto, que lo disfrutes!!");
}






////////////// EJERCICIO DE CICLO ///////////////

let entrada =  prompt("SELECCIONAR HORARIO DE INGRESO AL HOTEL, SABIENDO QUE : 1 SIGNIFICA: MAÑANA, 2: MEDIO DIA, 3: MEDIA TARDE Y 4: NOCHE");
while (entrada != 'ESC') {
    switch (entrada) {
        case "1":
            alert("Te corresponde un Desayuno gratuito");
            break;
        case "2":
            alert("Te corresponde un Almuerzo gratuito");
            break;
        case "3":
            alert("Te corresponde una Merienda gratuita");
            break;
        case "4":
            alert("Te corresponde una Cena gratuita");
            break;
        default:
            alert("Error");
            break;
    }
    entrada = prompt("SELECCIONAR HORARIO DE INGRESO AL HOTEL, SABIENDO QUE : 1 SIGNIFICA: MAÑANA, 2: MEDIO DIA, 3: MEDIA TARDE Y 4: NOCHE");
}
