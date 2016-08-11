var actividades = document.getElementsByClassName('mostrar_actividades')

for (var i = 0; i < actividades.length; i++) {
    actividades[i].addEventListener('click', function(evt){
        var oculto = this.parentNode.getElementsByTagName ('ul');
        if (oculto[0].className == 'actividades' ) {
            oculto[0].className = 'actividades-visible';
            this.className = 'ocultar_actividades';
            this.innerHTML = 'ocultar actividades realizadas';
        } else {
            oculto[0].className = 'actividades';
            this.className = 'mostrar_actividades';
            this.innerHTML = 'ver actividades realizadas';
        }
    })
}
