
class Prenda {
    constructor( tipo, precio,descripcion, index ){
        this.tipo = tipo;
        this.precio = precio;
        this.descripcion = descripcion;
        this.index = index;
    }
}

let sumaFinal = 0;
let carrito = []; 

function calculoPedido () {
    
    let prodSelect;
    let productoIndex = 0;

    alert('¡Bienvenido a nuestra tienda online!')

    let carritoStorage = JSON.parse (localStorage.getItem('carrito'))
    if (carritoStorage) {
        alert ('Tenes ' + carritoStorage.length + " productos en tu carrito." )
        console.log (carritoStorage)
        carrito=carritoStorage;
    }
    while(prodSelect != 0){

        prodSelect = parseInt(prompt("Ingrese número de artículo que desea comprar. Toque 0 (cero) cuando quiera completar su pedido:\r(1) Remera $500 \r(2) Pantalón $700 \r(3) Par de medias $80"));
       
        if (esValorIncorrecto(prodSelect)) {
            alert('El valor ingresado es incorrecto')
            continue;
        }
        
        if (prodSelect == 1){
            agregarProducto(new Prenda ('R',500, "Remera",++productoIndex ))
            
        } else if (prodSelect == 2){
            agregarProducto(new Prenda ('P',700, "Pantalon",++productoIndex ))
        } else if (prodSelect==3){
            agregarProducto(new Prenda ('M',80, "Par de Medias",++productoIndex ))
        }
    }

    sumaFinal = carrito.reduce( (acc, prend) => acc + prend.precio, 0  );
    alert('La cantidad total de prendas es ' + carrito.length + '. El precio final de tu pedido es ' + sumaFinal + '\r¡Muchas gracias!')
    alert('Tenes '+ cantidadPorPrenda('R') + ' Remera(s)\r Tenes '+ cantidadPorPrenda('P') +' Pantalon(es)\r Tenes '+cantidadPorPrenda('M') +' par de Medias' )

    mostrarCompra();
    localStorage.setItem("carrito", JSON.stringify(carrito));
    
}

function esValorIncorrecto(prodSelect){
    prodSelect < 0 || prodSelect > 3 || isNaN(prodSelect)
}

function cantidadPorPrenda (tipoPrenda){
    return carrito.filter( (p)=> p.tipo == tipoPrenda).length
}

function mostrarCompra(){
    let sectionProductos = document.getElementById("productosDisponibles");
    let sectionTitulo = document.createElement("h1");
    sectionTitulo.innerText = "Tu Carrito:"
    sectionProductos.appendChild(sectionTitulo);

    for (const producto of carrito) {
        let productoDiv = document.createElement("div");
        productoDiv.innerHTML = `<div> <b>Prenda ${producto.index}</b>:  ${producto.descripcion}  <b>Precio</b>:  ${producto.precio} </div>
        <button id=boton-${producto.index} class="botonQuitar" onclick=quitarPrenda(${producto.index})>Quitar prenda</button>`
        productoDiv.id = "prenda-" + producto.index
        sectionProductos.appendChild(productoDiv);
    }

    let sectionTotal = document.createElement("div");
    sectionTotal.id = "total-compra"
    sectionTotal.innerHTML = `<h2><b>Total de la compra</b>: $${sumaFinal} </h2>` 
    sectionProductos.appendChild(sectionTotal);
}

function quitarPrenda(e){
    console.log(document.getElementById("prenda-"+e));
    let prendaHTML = document.getElementById("prenda-"+e)
    let prenda = carrito.find(p => e == p.index);
    sumaFinal -= prenda.precio; //sumaFinal = sumafinal - prenda.precio
    carrito.splice(e-1, 1);
    console.log(carrito);
    prendaHTML.remove();
    document.getElementById("total-compra").innerHTML = `<h2><b>Total de la compra</b>: $${sumaFinal} </h2>`
    actualizarStorage (carrito);

}

function agregarProducto (producto) {
    carrito.push(producto);
   // localStorage.setItem("producto-"+ producto.index, JSON.stringify(producto));
}

function actualizarStorage (carritoActualizado){
    localStorage.setItem("carrito", JSON.stringify(carritoActualizado));
}