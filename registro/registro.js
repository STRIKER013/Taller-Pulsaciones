
function guardar(){
    var edad = asignarEdad("edad");
    var sexo = asignarSexo("operacionSeleccionada");
    var identificacion = asignarIdentificacion("identificacion");
    var pulsaciones = seleccion();  
    var regPulsacionesNew = { "edad": edad, "sexo": sexo, "identificacion": identificacion, "pulsaciones": pulsaciones}
    var regPulsaciones = [];
    if(JSON.parse(localStorage.getItem('dato')) != null){
        regPulsaciones = JSON.parse(localStorage.getItem('dato'));
    }
    regPulsaciones.push(regPulsacionesNew);
    localStorage.setItem('dato',JSON.stringify(regPulsaciones));
    alert("se guardo exitosamente");
}

function seleccion() {
    var operacion = asignarSexo("operacionSeleccionada");
    switch (operacion) {
        case "hombre":
            return pulsacionHombre();
            break;
        case "mujer":
            return pulsacionMujer();
            break;
        default:
            return null;
            break;
    }
}
function imprimirValor(resultado){
    alert("el resultado es: "+resultado)
    document.getElementById("resultado").value= resultado;
}
function asignarEdad(variable){
    return document.getElementById(variable).value;
}
function asignarIdentificacion(variable){
    return document.getElementById(variable).value;
}
function asignarSexo(variable){
    return document.getElementById(variable).value;
}
function pulsacionHombre() {
    var edad = asignarEdad("edad");
    var resultado = ((210 - parseInt(edad)) /10);
    imprimirValor(resultado);
    return resultado;
}
function pulsacionMujer() {
    var edad = asignarEdad("edad");
    var resultado = ((220 - parseInt(edad)) /10);
    imprimirValor(resultado);
    return resultado;
}
