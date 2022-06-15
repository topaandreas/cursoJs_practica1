
class Prenda {
    constructor( tipo, precio ){
        this.tipo = tipo;
        this.precio = precio;
    }
}

const prendaRemera = new Prenda ('R',500 );
const prendaPantalon = new Prenda ('P',700 );
const prendaMedias = new Prenda ('M',80 );

function calculoPedido () {
    
    let prodSelect;
    let sumaFinal = 0;
    let carrito = [];

    alert('¡Bienvenido a nuestra tienda online!')

    while(prodSelect != 0){

        prodSelect = parseInt(prompt("Ingrese número de artículo que desea comprar. Toque 0 (cero) cuando quiera completar su pedido:\r(1) Remera $500 \r(2) Pantalón $700 \r(3) Par de medias $80"));
       
        if (esValorIncorrecto(prodSelect)) {
            alert('El valor ingresado es incorrecto')
            continue;
        }
        
        if (prodSelect == 1){
            carrito.push(prendaRemera)
        } else if (prodSelect == 2){
            carrito.push(prendaPantalon)
        } else if (prodSelect==3){
            carrito.push(prendaMedias)
        }
    }

    alert('La cantidad total de prendas es ' + carrito.length + '. El precio final de tu pedido es ' + carrito.reduce( (acc, prend) => acc + prend.precio, 0  ) + '\r¡Muchas gracias!')
    alert('Tenes '+ cantidadPorPrenda(carrito, 'R') + ' Remera(s)\r Tenes '+ cantidadPorPrenda(carrito, 'P') +' Pantalon(es)\r Tenes '+cantidadPorPrenda(carrito, 'M') +' par de Medias' )
}

function esValorIncorrecto(prodSelect){
    prodSelect < 0 || prodSelect > 3 || isNaN(prodSelect)
}

function cantidadPorPrenda (carrito,tipoPrenda){
    return carrito.filter( (p)=> p.tipo == tipoPrenda).length
}
