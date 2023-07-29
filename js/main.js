let carrito = []

const productoElegido = document.getElementsByClassName("card")

for (let i=0; i<productoElegido.length; i++){
    productoElegido[i].addEventListener('click', (e) =>{
        if(e.target.classList.contains('btn')){
            validarProducto(e.target.id);
        }
    })
}

/* Funcion que valida si el producto esta repetido para sumarlo */
const validarProducto = (id) =>{
    const estaRepetido = carrito.some(producto => producto.id == id ) // de cada producto, cuyo producto id sea igual al id que acaba de agregar el usuario
    if (!estaRepetido){
        const producto = productos.find(producto =>producto.id== id ) //voy a recorrer el array productos de stock.js
        carrito.push(producto)
        mostrarProductoCarrito(producto)
    }else{
        // si el producto esta repetido viene al else y  agrega la cantidad nomas
        const producto = carrito.find(producto => producto.id == id)
        const cantidad = document.getElementById(`cantidad${producto.id}`)
        const precio = document.getElementById(`precio${producto.id}`)

        producto.cantidad++
        producto.precio= producto.precioBase * producto.cantidad

        cantidad.innerText=`Cantidad: ${producto.cantidad}`
        precio.innerText=`$ ${producto.precio}\t\t`
    }
}

/* Funcion que muestra el producto en el carrito */
const mostrarProductoCarrito = (producto) =>{
    const contenedor = document.getElementById('carrito-contenedor')
    const div = document.createElement('div')
    producto.precioBase = producto.precio
    div.classList.add('productoEnCarrito')

    div.innerHTML=`
    <p style="white-space: pre"> ${producto.articulo}\t\t</p>
    <p style="white-space: pre" id=precio${producto.id}>$ ${producto.precio}\t\t</p>
    <p style="white-space: pre">Aplica Descuento: ${producto.descuento * 100}%\t\t  </p>
    <p style="white-space: pre" id=cantidad${producto.id}>Cantidad: ${producto.cantidad}\t\t</p>
    <button class="btn waves-effect waves-ligth boton-eliminar" value="${producto.id}">X</button>
    `
    contenedor.appendChild(div)
}





/*
ESTO ME SIRVE PARA EL STOCK Y DEMAS !!!!!!!!!!!!!! BUSCA EN EL ARRAY PRODUCTOS
const producto = productos.find(producto =>producto.id== id ) //voy a recorrer el array productos de stock.js
*/