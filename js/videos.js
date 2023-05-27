function mostrarVideoSegunOrientacion() {
    if(window.innerWidth > window.innerHeight) {
        document.getElementById('horizontal').style.display = 'block';
        document.getElementById('vertical').style.display = 'none';
    } else {
        document.getElementById('horizontal').style.display = 'none';
        document.getElementById('vertical').style.display = 'block';
    }
}

// Mostrar el video adecuado cuando se carga la página y cuando se redimensiona la ventana del navegador
window.addEventListener('load', mostrarVideoSegunOrientacion);
window.addEventListener('resize', mostrarVideoSegunOrientacion);