function mostrar(){
    regPulsaciones = [];
    if(JSON.parse(localStorage.getItem('dato')) != null){
        regPulsaciones = JSON.parse(localStorage.getItem('dato'));
    }else{
        alert("no hay datos");
    }
    var pval = "";
    regPulsaciones.forEach(element => {
        pval += "<tr>"
        pval += "<td>" + element.edad + "</td>"
        pval += "<td>" + element.sexo + "</td>"
        pval += "<td>" + element.identificacion + "</td>"
        pval += "<td>" + element.pulsaciones + "</td>"
        pval += "</tr>"
    });
    document.getElementById("tbCuerpo").innerHTML =pval;
}

