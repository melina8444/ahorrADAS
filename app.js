
// Selecciono los elementos del DOM
const formulario = document.getElementById('formulario');
const input_descripcion = document.getElementById('input_descripcion');
const botonAgregar = document.getElementById('botonAgregar');
const listaOperaciones = document.getElementById('listaOperaciones');

// Creo un array para almacenar los li
let items_lista = [];

// Realizo una función para actualizar la lista en el DOM utilizando un for
function actualizarItemListas() { 
    listaOperaciones.innerText = ''; // Limpio la lista actual

    // Recorro el array con un for  
    for (let i = 0; i < items_lista.length; i++) {
        const li = document.createElement('li'); //creo elementos <li> para cada ítem de la listaOperaciones
        li.classList.add('lista'); //agrego una clase a li
        li.textContent = items_lista[i]; //agrego al array los datos que ingreso en el input

        // Creo botón de eliminar
        const botonEliminar = document.createElement('button');
        botonEliminar.classList.add('botonEliminar'); //agrego clase al boton eliminar
        botonEliminar.textContent = 'Eliminar'; //le coloco un nombre visible al boton eliminar
        li.append(botonEliminar); // agrego a cada li un boton eliminar

        // Le agrego un evento click  al boton eliminar 
        botonEliminar.addEventListener('click', function() {
            alert("Esta seguro de eliminar  🥲? " , items_lista.splice(i, 1)); // del array, me posiciono en el indice que necesito eliminar y me borra uno solo
            actualizarItemListas(); //llamo a la funcion
        });

        listaOperaciones.append(li); //agrego un item a la lista de operaciones
    }
}

// Creo una función para agregar li al array y actualizar la lista en el DOM
function agregarTarea(event) {
    event.preventDefault(); // Prevengo el comportamiento por defecto del formulario

    const itemText = input_descripcion.value.trim(); // creo una variable y guardo el valor del input, y saco los espacios vacios si llega a tener

    if (itemText !== '') {
        
        alert('Descripcion agregada con exito 👍',items_lista.push(itemText)); //agrego al array lo que le paso en el input
        input_descripcion.value = ''; // Limpio el input
        actualizarItemListas(); // Actualizo lista de operaciones en el DOM
    }
}

// Agrego un evento al botón agregar 
//para que me llame a la función agregarTarea cuando hago click
botonAgregar.addEventListener('click', agregarTarea);
