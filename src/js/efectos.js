document.addEventListener('DOMContentLoaded', () => {
    // ocultar menu cuando se hace click en link
    const navButton = document.getElementById('nav-button');
    const navBarToggle = document.getElementById('navbarToggle');

    const enlaces = document.querySelectorAll('.nav-link');
    enlaces.forEach((link) => {
        link.addEventListener('click', (e) => {
            if(e.target){
                navButton.classList.add('collapsed');
                navBarToggle.classList.remove('show');
            }
        })
    })


    const anchoViewport = window.innerWidth;

    if(anchoViewport > 992){
        const servicioBox = document.querySelectorAll('.servicios__box');
        servicioBox.forEach((box) => {
            // tomamos medidas del elemento
            const height = box.clientHeight;
            const width = box.clientWidth;
            // evento cuando se mueve el mouse por el elemento
            box.addEventListener('mousemove', (e) => {
                //tomamos cordenadas del raton
                const {layerX, layerY} = e;
                // calculo para saber la rotacion que tiene que hacer vertical y horizontalmente
                const yRotation = (
                    (layerX - width / 2) / width
                ) * 20;
                const xRotation = (
                    (layerY - height / 2) / height
                ) * 20;
                // objeto con las transformaciones que necesitamos
                const string = `
                    perspective(500px)
                    rotateX(${xRotation}deg)
                    rotateY(${yRotation}deg)
                `
                // aplicamos las transformaciones al elemento
                box.style.transform = string;
            })
            // detectamos cuando el cursor sale del elemento
            box.addEventListener('mouseout', () => {
                // aplicamos este efecto al elemento de salida
                box.style.transform = `
                    perspective(500px)
                    rotateX(0)
                    rotateY(0)
                `
            })
        })
    }
})