
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

    alert('¡Bienvenido a nuestra tienda online!')

    while(prodSelect != 0){

        prodSelect = parseInt(prompt("Ingrese número de artículo que desea comprar. Toque 0 (cero) cuando quiera completar su pedido:\r(1) Remera $500 \r(2) Pantalón $700 \r(3) Par de medias $80"));
       
        if (prodSelect < 0 || prodSelect > 3 || isNaN(prodSelect)) {
            alert('El valor ingresado es incorrecto')
            continue;
        }
        
        if (prodSelect == 1){
            sumaFinal += prendaRemera.precio
        } else if (prodSelect == 2){
            sumaFinal += prendaPantalon.precio
        } else if (prodSelect==3){
            sumaFinal += prendaMedias.precio
        }
    }

    alert('El total de su pedido es de $' + sumaFinal + '\r¡Muchas gracias!')
}