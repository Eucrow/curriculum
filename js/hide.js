var actividades = document.getElementsByClassName('actividades_enlace')
//var oculto = document.getElementsByClassName('oculto');


  // console.log(oculto[0]);
// console.log(actividades);

for (var i = 0; i < actividades.length; i++) {
    actividades[i].addEventListener('click', function(evt){
        var oculto = this.parentNode.getElementsByTagName ('ul');
        if (oculto[0].className == 'actividades-oculto') {
            oculto[0].className = 'actividades-visible';
        } else {
            oculto[0].className = 'actividades-oculto';
        }

        console.log(oculto[0]);
    })
}
