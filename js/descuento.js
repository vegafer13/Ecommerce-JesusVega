//Aplicar descuento por cada cierto monto de compra
// 0 - 500 = 0%
// 500 - 1500 = 5%
// 1500 - 5000 = 10%
// 5000 > = 15%

let montoDeVenta = parseInt(prompt("Ingrese la venta total"));
let descuento = 0;
let ventaText = "";

    if (montoDeVenta > 0 ) {
        if (montoDeVenta >= 0 &&  montoDeVenta < 500){
            descuento = 0;
            ventaText = `El valor de tu compra no se aplico un descuento 😪`;
        }else if (montoDeVenta >= 500 && montoDeVenta < 1500){
            descuento = 0.05;
            ventaText = `El valor de tu compra se aplico un 5% de descuento , ahorraste por tu compra $${montoDeVenta * descuento} 🤑`; 
        }else if (montoDeVenta >= 1500 && montoDeVenta <5000){
            descuento = 0.10;
            ventaText = `El valor de tu compra se aplico un 10% de descuento, ahorraste por tu compra $${montoDeVenta * descuento} 🤑`;
        }else{
            descuento = 0.15;
            ventaText = `El valor de tu compra se aplico un 15% de descuento, ahorraste por tu compra $${montoDeVenta * descuento} 🤑`; 
        }

        let montoTotal = (montoDeVenta - (montoDeVenta * descuento));
        alert(`${ventaText}, total a pagar 🏷$${montoTotal}`);

    }else{
        alert("Ingresa un valor");
    }
    
    




