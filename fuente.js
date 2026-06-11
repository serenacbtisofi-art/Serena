// Función para cambiar el tamaño y guardarlo en el navegador
function setFontSize(size) {
    // Cambia el tamaño de la raíz (afecta a toda la página)
    document.documentElement.style.fontSize = size + 'px';
    
    // Lo guarda en la memoria del navegador
    localStorage.setItem("fontSize", size);
}