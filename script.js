// Efecto de aparición suave al cargar la página
document.addEventListener("DOMContentLoaded", function() {
    const products = document.querySelectorAll(".producto");
    products.forEach((product, index) => {
        setTimeout(() => {
            product.style.opacity = 1;
            product.style.transform = "translateY(0)";
        }, index * 200); // Aparece uno tras otro
    });
});

// Añadir clase 'hover' al hacer clic en los productos para mantener el efecto
document.querySelectorAll(".producto").forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("hover");
    });
});
