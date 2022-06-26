
class Prenda {
    constructor( tipo, precio,descripcion, index ){
        this.tipo = tipo;
        this.precio = precio;
        this.descripcion = descripcion;
        this.index = index;
    }
}

const prendaRemera = new Prenda ('R',500, "Remera" );
const prendaPantalon = new Prenda ('P',700, "Pantalon" );
const prendaMedias = new Prenda ('M',80, "Par de Medias" );

function calculoPedido () {
    
    let prodSelect;
    let sumaFinal = 0;
    let carrito = []; 
    let productoIndex = 0;

    alert('¡Bienvenido a nuestra tienda online!')

    while(prodSelect != 0){

        prodSelect = parseInt(prompt("Ingrese número de artículo que desea comprar. Toque 0 (cero) cuando quiera completar su pedido:\r(1) Remera $500 \r(2) Pantalón $700 \r(3) Par de medias $80"));
       
        if (esValorIncorrecto(prodSelect)) {
            alert('El valor ingresado es incorrecto')
            continue;
        }
        
        if (prodSelect == 1){
            carrito.push(new Prenda ('R',500, "Remera",++productoIndex ))
            
        } else if (prodSelect == 2){
            carrito.push(new Prenda ('P',700, "Pantalon",++productoIndex ))
        } else if (prodSelect==3){
            carrito.push(new Prenda ('M',80, "Par de Medias",++productoIndex ))
        }
    }

    sumaFinal = carrito.reduce( (acc, prend) => acc + prend.precio, 0  );
    alert('La cantidad total de prendas es ' + carrito.length + '. El precio final de tu pedido es ' + sumaFinal + '\r¡Muchas gracias!')
    alert('Tenes '+ cantidadPorPrenda(carrito, 'R') + ' Remera(s)\r Tenes '+ cantidadPorPrenda(carrito, 'P') +' Pantalon(es)\r Tenes '+cantidadPorPrenda(carrito, 'M') +' par de Medias' )

    mostrarCompra(carrito, sumaFinal);

    
}

function esValorIncorrecto(prodSelect){
    prodSelect < 0 || prodSelect > 3 || isNaN(prodSelect)
}

function cantidadPorPrenda (carrito,tipoPrenda){
    return carrito.filter( (p)=> p.tipo == tipoPrenda).length
}

function mostrarCompra(carrito, sumaFinal){
    let sectionProductos = document.getElementById("productosDisponibles");
    let sectionTitulo = document.createElement("h1");
    sectionTitulo.innerText = "Tu Carrito:"
    sectionProductos.appendChild(sectionTitulo);

    for (const producto of carrito) {
        let productoDiv = document.createElement("div");
        productoDiv.innerHTML = `<div> <b>Prenda ${producto.index}</b>:  ${producto.descripcion}  <b>Precio</b>:  ${producto.precio} </div>`
        sectionProductos.appendChild(productoDiv);
    }

    let sectionTotal = document.createElement("div");
    sectionTotal.innerHTML = `<h2><b>Total de la compra</b>: $${sumaFinal} </h2>` 
    sectionProductos.appendChild(sectionTotal);
}