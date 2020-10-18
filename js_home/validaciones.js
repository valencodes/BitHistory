function validarFormulario() {
    /*La propiedad value establece o devuelve el valor
    del atributo, value de un campo numerico, el atributo
    del valor especifica el valor predeterminado o el valor 
    que un usuario escribe. (o un valor establecido 
        por un script)    */
    var txtNombre = document.getElementById('nombre').value;
    var txtTelefono = document.getElementById('telefono').value;
    var txtCorreo = document.getElementById('correo').value;
    var txtMensaje = document.getElementById('mensaje').value;

}

if (txtNombre == null || txtNombre.length == 0) {
    alert('ERROR: El campo nombre no debe ir vacio ni incompleto')
    return false;
} else {

    //Todos los numeros del 0 al 9 /^([0-9])*$/
    /* El test()método ejecuta una búsqueda de 
    una coincidencia entre una expresión regular
     y una cadena especificada. Devoluciones true o false.*/
    if (/^([0-9])*$/.test(txtNombre)) {
        alert('ERROR: El campo nombre no debe tener numeros')

        return false;
    } else {
//si no son letras, negacion !
if (!(/^[A-Za-z\_\-\.\s\xF1\xD1]+$/.test(txtNombre))){

}
}
}  
