let loadmorebtn = document.querySelector('#load__more');
let currentiten = 8;

loadmorebtn.onclick = () => {
    let boxes = [...document.querySelectorAll('.box__container .box')];
    for(var i = currentiten; i < currentiten + 4; i++){
        boxes[i].style.display = 'inline-block';
    }
    currentiten += 4;
    if(currentiten >= boxes.length){
        loadmorebtn.style.display = 'none'
    }
}

//Carrrito

const carrito = document.getElementById('Carrito');
const elemento1 = document.getElementById('lista__1');
const lista = document.querySelector('#lista__carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar__carrito');

cargarEventlisteners();

function cargarEventlisteners(){
    elemento1.addEventListener('click', comprarElemento);
    carrito.addEventListener('click', eliminarElemento);

    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
}

function comprarElemento(e){
    e.preventDefault();
    if(e.target.classList.contains('agregar__carrito')){
        const elemento = e.target.parentElement.parentElement;
        leerDatosElementos(elemento);
    }
}

function leerDatosElementos(elemento){
    const infoElemento = {
        imagen: elemento.querySelector('img').src,
        titulo: elemento.querySelector('h3').textContent,
        precio: elemento.querySelector('.Precio').textContent,
        id: elemento.querySelector('a').getAttribute('data-id')
    }
    insertarCarrito(infoElemento);
}

function insertarCarrito(elemento){
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>
            <img src="${elemento.imagen}" width=100 height=150px >
        </td>
        <td>
            ${elemento.titulo}
        </td>
        <td>
            ${elemento.precio}
        </td>
        <td>
            <a herf="#" class="borrar" data-id="${elemento.id}" >X</a>
        </td>
    `;
    lista.appendChild(row);
}

function eliminarElemento(e){
    e.preventDefault();
    let elemento,
    elementoid;
    if(e.target.classList.contains('borrar')){
        e.target.parentElement.parentElement.remove();
        elemento = e.target.parentElement.parentElement;
        elementoid = elemento.querySelector('a').getAttribute('data-id');
    }
}

function vaciarCarrito(){
    while(lista.firstChild){
        lista.removeChild(lista.firstChild);
    }
    return false;
}