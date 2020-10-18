//Function que se encarga de pedir el nombre de la obra
function tesla() {
//Variable que almacena el nombre de la obra
var nombrePersonaje=prompt("Ingresa el nombre del personaje historico");
/* Convierto en minuscula y guardo nuevamente el nuevo dato
en variable, usando nombreObra.tolowerCase */

nombrePersonaje=nombrePersonaje.toLowerCase();
}

if (nombrePersonaje == "nicola tesla") {
    //si es correctomuestro un mensaje que diga el nombre 
    //de la obra

    swal ({
        title: 'Correcto',
        text: "Hizo contribuciones para el descubrimiento de los rayosX, el radar o el control remoto",
        type: 'success',
        button: "Oki :)"
    });

 } else {
     swal("Oh no, no es el nombre correcto, intentalo de nuevo")
 }
    
function jobs() {
    var nombrePersonaje=prompt("Ingresa el nombre del personaje historico");

    nombrePersonaje= nombrePersonaje.toLowerCase();

    if (nombrePersonaje == "steve jobs"){
        alert("Bien! fue confundador y presidente ejecutivo de Apple");
    }else{
        alert("Oh no, no es el nombre correcto, intentalo de nuevo");
    }
    }

    function descartes() {
        //Variable que almacena el nombre de la obra
        var nombrePersonaje=prompt("Ingresa el nombre del personaje historico");
        /**
        * Convierto en minuscula y guardo nuevamente el nuevo dato en la variable
        * usando nombreObra.toUpperCase convertir todo a mayuscula
        */
       nombrePersonaje=nombrePersonaje.toLowerCase();
      
        if  (nombrePersonaje == "rene descartes" ) {
            //Si es correcto muestro un mensaje que diga el nombre de la obra
            alert(" Bien! Conocido principalmente por: Su famoso planteamiento filosófico «Pienso luego existo»");
    
        } else {
            //          //Si no es correcto, es que el nombre esta mal
           alert("Oh no, no es el nombre correcto , intentalo de nuevo");
    
        }
    }
    
    function poe() {
        //Variable que almacena el nombre de la obra
        var nombrePersonaje=prompt("Ingresa el nombre del personaje historico");
        /**
        * Convierto en minuscula y guardo nuevamente el nuevo dato en la variable
        * usando nombreObra.toUpperCase convertir todo a mayuscula
        */
       nombrePersonaje=nombrePersonaje.toLowerCase();
      
        if  (nombrePersonaje == "edgar allan poe" ) {
            //Si es correcto muestro un mensaje que diga el nombre de la obra
            alert("Bien! Fue renovador de la novela gótica, recordado especialmente por sus cuentos de terror.");
    
        } else {
            //          //Si no es correcto, es que el nombre esta mal
           alert("Oh no, no es el nombre correcto , intentalo de nuevo");
    
        }
    }

