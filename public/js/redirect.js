document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const producto = document.getElementById('producto').value.toLowerCase();

    // Redirecciones según el producto seleccionado
    if (producto === 'audífono') {
        window.location.href = 'Audífono.html';
    } else if (producto === 'auriculares bluetooth') {
        window.location.href = 'Auriculares.html';
    } else if (producto === 'smart watch') {
        window.location.href = 'SmartWatch.html';
    } else if (producto === 'altavoz portátil') {
        window.location.href = 'Altavoz.html';
    } else if (producto === 'cargador inalámbrico') {
        window.location.href = 'Cargador.html';
    } else {
        alert('Producto no encontrado. Intenta con otro término.');
    }
});