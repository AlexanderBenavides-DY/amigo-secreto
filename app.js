//1. array para guardar amigos
let amigos = [];

//capturamos el valor de los botones
let imput = document.getElementById('amigo');
let botonAñadir = document.getElementById('btn-añadir');
let listaUl = document.getElementById('listaAmigos');

//implementamos una funcion para agregar amigos
function agregarAmigo() {
    //1. capturamos valor del imput y eliminamos espacios innecesarios
    const imputValue = imput.value.trim();

    //2.Validamos que el imput no este vacio 
    if(imputValue === "" ) {
        alert('Por favor, inserta un nombre.')
        return;
    }

    //3. validamos que solo contengan letras y espacios (sin números ni simbolos)
    if (!/^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/.test(imputValue)) {
        alert('El nombre solo puede contener letras y espacios. No se permiten números ni símbolos.');
        //llamos a la funucion limpiar caja, despues que ingresaste algo incorrecto
        limpiarCaja();
        return;
    }

    //4. Validamos que el nombre no este duplicado en el array 
    if(amigos.includes(imputValue)) {
        alert('Ese nombre ya ah sido ingresado. No podemos agregar duplicados');
        //llamos a la funucion limpiar caja, despues que ingresaste algo incorrecto y limpiar el imput
        limpiarCaja();
        return;
    }

    //5. si pasas todas las validaciones, agregamos el nombre al array
    amigos.push(imputValue);

    
    //mandamos a llamar la funtion. actualizamos array y agregamos un nuevo elemento
    agregarElementos()

    //limpiamos el imput
    limpiarCaja();
}

//implementamos un funcion para actualizar la lista 
function agregarElementos() {
    
    //limpiamos listas anteriores 
    listaUl.innerHTML = "";

    //usar unu ciclo  para recorrer el array y crear un nuevo li
    amigos.forEach((imput) => {
        //crear un nuevo elemento
        const li = document.createElement('li');
        //agregamos nombre al nuevo li
        li.textContent = imput;
        //agregamos el nuevo elemento al ul
        listaUl.appendChild(li)
    });
}

//implementamos una funcion para sortear amigos
function sortearAmigo() {
    //limpiamos lista anterior
    listaUl.innerHTML = "";

    //1.validamos que el array no este vacio
    if(amigos.length === 0) {
        document.getElementById("resultado").innerHTML = "No hay amigos para sortear."
        return;
    }
    //2.generamos un indice aleatorio.
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    //3.Obtemos el nombre sorteado
    let amigoSeleccionado = amigos[indiceAleatorio]

    //4.mostramos el resultado
    document.getElementById("resultado").innerHTML = `el amigo secreto es ${amigoSeleccionado}.`
    //limpiamos el array despues del sorteo
    amigos = [];
}


//implementamos una funcion para limpiar el imput
function limpiarCaja() {
    document.getElementById('amigo').value = "";
}