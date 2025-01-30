document.addEventListener("DOMContentLoaded", function () {
    const sobreMi = document.querySelector(".container_sobre_mi");
    const educacion = document.querySelector(".container_educacion");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    entry.target.classList.remove("h"); // Remover si está en estado oculto
                } else {
                    entry.target.classList.remove("visible");
                    entry.target.classList.add("h"); // Agregar estado oculto para la animación de salida
                }
            });
        },
        { threshold: 0.5 } // Ajusta el porcentaje de visibilidad
    );

    observer.observe(sobreMi);
    observer.observe(educacion);
});