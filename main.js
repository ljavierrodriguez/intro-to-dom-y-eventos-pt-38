/* DOM (Document Object Model) */
/* 

document

metodos:

getElementById('id') => retorna el elemento segun el id dado
getElementsByClassName('class') => devuelve una coleccion de elementos por la clase dada;
getElementsByTagName('tag') => devuelve una coleccion de elementos por el tag o etiqueta dado;
getElementsByName('name') => devuelve una coleccionde elementos por el nombre dado;


querySelector('selector')
guerySelectorAll('selector')


createElement('element');



*/

let secHome = document.getElementById('home');
//console.log(secHome);
secHome.innerHTML = "Hola desde Javascript";
secHome.style.border = '1px solid red';
secHome.style.padding = '10px';


let titulos = document.getElementsByClassName('titulo1');
console.log(titulos);
for(let i = 0; i < titulos.length; i++){
    titulos[i].style.borderBottom = '1px solid green';
}

let h4s = document.getElementsByTagName('h4');
console.log(h4s);

for(let i = 0; i < h4s.length; i++){
    /* if(i % 2 === 1){
        h4s[i].style.backgroundColor = 'gray';
    }  */

    if(h4s[i].classList.contains('titulo2')){
        h4s[i].style.borderBottom = '2px solid blue';
    }
    
    if(h4s[i].classList.contains('titulo3')){
        h4s[i].style.borderBottom = '2px solid brown';
    }

}

let generos = document.getElementsByName('genero');
console.log(generos);

let hobbies = document.getElementsByName('hobbies[]');
console.log(hobbies);

for(chkbox of hobbies){
    if(chkbox.checked){
        console.log(chkbox);
    }
}

let ckb1 = document.querySelector('[type=checkbox]');
console.log(ckb1);

let ckb2 = document.querySelectorAll('[type=checkbox]');
console.log(ckb2);


let p1 = document.createElement('p');
p1.innerHTML = "Este es mi parrafo creado desde javascript";
p1.style.fontSize = '30px';
p1.style.borderBottom = '2px solid black';
p1.style.boxShadow = '1px 1px 5px gray';

secHome.appendChild(p1);
document.body.appendChild(p1);


let p2 = document.createElement('p');
p2.innerHTML = "Este es mi parrafo creado desde javascript";
p2.style.fontSize = '30px';
p2.style.borderBottom = '2px solid black';
p2.style.boxShadow = '1px 1px 5px gray';

secHome.appendChild(p2);


for(let i = 1; i <= 3; i++){
    let p = document.createElement('p');
    p.innerHTML = "Este es mi parrafo creado desde javascript";
    p.style.fontSize = '30px';
    p.style.borderBottom = '2px solid black';
    p.style.boxShadow = '1px 1px 5px gray';
    document.body.appendChild(p);
}