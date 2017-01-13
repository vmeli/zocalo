var gExecute1 = null;
var gExecute2 = null;
var gExecute3 = null;
 
function createClosure()
{
    var num = 10;
    gExecute1 = function () { alert(num); };
  
    gExecute2 = function () { alert(++num); };
  
    gClosure3 = function () { alert(num = "¡¡Toma ya!!!"); };
}
 
createClosure();
gExecute1();  // Ejecuta el código: function () { alert(num); }; 
              // --> Muestra en pantalla: 10
gExecute2();  // Ejecuta el código: function () { alert(++num); }; 
              // --> Muestra en pantalla: 11
gExecute3();  // Ejecuta el código: function () { alert(num = "¡¡Toma ya!!!"); }; 
              // --> Muestra en pantalla: ¡¡Toma ya!!!
 
//¿Qué mostrará ahora la siguiente linea de código...?
gExecute1();
















// var gExecute1 = null;
// var gExecute2 = null;
// var gExecute3 = null;
 
// function createClosure() {
//     var num = 10;
//     gExecute1 = function () { console.log(num); };
//     // gExecute1();
    
//     num++;
//     gExecute2 = function () { console.log(num);};
//     // gExecute2();
 
//     num = "¡¡Toma ya!!!";
//     gExecute3 = function () { console.log(num); };
//     // gExecute3();
// }
 
// createClosure();
// gExecute1();
// gExecute2();
// gExecute3();