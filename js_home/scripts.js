

var login1 = document.getElementById("login1")
var login2 = document.getElementById("login2")
var loginUser = document.getElementById("loginUser")
var element = document.getElementById('text');
element.style.visibility = 'hidden';

var element2 = document.getElementById('text2');
element2.style.visibility = 'hidden';
function show() {

  
    if(element.style.visibility == 'hidden') {
        element.style.visibility = 'visible';
    }else {
        element.style.visibility = 'hidden'
    }



}


function show2() {

  


    if(element2.style.visibility == 'hidden') {
        element2.style.visibility = 'visible';
    }else {
        element2.style.visibility = 'hidden'
    }


}


if(localStorage.getItem('name')){
    loginUser.innerHTML = localStorage.getItem('name');
}



function iniciarSesion(){
    var usuario = prompt("ingresa tu nombre")

    //la propiedad de solo lectura localStorage te permite
    //acceder al objeto local Storage;los datos persisten almacenados
    //entre las diferentes sesiones de navegacion.

    //Un objeto Storage que se puede utilizar para acceder al espacio de
    //alamacenamiento local del origen actual.



    localStorage.setItem('name', usuario)

    //innerHTML sirve para "escribir dentro de un elemento HTML"
//DOMString
    loginUser.innerHTML = usuario;

}

function cerraSesion() {
    loginUser.innerHTML= " ";
    localStorage.clear();
}


login1.onclick= function() {
    iniciarSesion();
}


login2.onclick=function(){
    cerraSesion();
}