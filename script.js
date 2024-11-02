let carrito = [];
let total = 0;

function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    total += precio;
    mostrarCarrito();
}

function mostrarCarrito() {
    const carritoDiv = document.getElementById('carrito');
    carritoDiv.innerHTML = ''; 

    carrito.forEach((item, index) => {
        carritoDiv.innerHTML += `
            <div>
                ${item.nombre} - $${item.precio} 
                <button onclick="eliminarDelCarrito(${index})">Eliminar</button>
            </div>
        `;
    });

    document.getElementById('total').innerText = `Total: $${total}`;
}

function eliminarDelCarrito(index) {
    total -= carrito[index].precio;
    carrito.splice(index, 1);
    mostrarCarrito();
}
