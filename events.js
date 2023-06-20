function solo_numbers(input){
    console.log(typeof(input.value));
}

function activar_fondo(input){
    input.style.backgroundColor = "red";
}

function desactivar_fondo(input){
    input.style.backgroundColor = "transparent";
}


let btnSaludar = document.querySelector('#btnSaludar');
btnSaludar.addEventListener('click', function(evento){

    let { x, y, target } = evento; // Destructuring 

    target.disabled = true;
    console.log("Haciendo Click en Saludar");
    console.log("X: ", x, ", Y: ", y);
})

let lnFace = document.getElementById('lnFace');

lnFace.addEventListener('click', function(e){
    e.preventDefault()

    console.log("Haciendo click en el enlace");
})


let form = document.querySelector('form');
form.addEventListener('submit', function(event){
    event.preventDefault();
});

let pagina = document.querySelector('.pagina');
pagina.style.width = '400px';
pagina.style.height = '400px';
pagina.style.overflow = 'scroll';
pagina.style.backgroundColor = '#cccccc';

let pa = pagina.querySelectorAll('p');
pa.forEach((p) => {
    p.addEventListener('mouseover', function(e){
        e.target.style.backgroundColor = "yellow";
        e.target.style.cursor = "pointer";
    });
    p.addEventListener('mouseout', function(e){
        e.target.style.backgroundColor = "transparent";
    });
})

let opciones = document.querySelector('.opciones');

let cks = opciones.querySelectorAll('[type=checkbox]');

cks.forEach((ck) => {
    ck.addEventListener('click', (e) => {
        if(e.target.checked){
            console.log(e.target.value);
        }
    })
})