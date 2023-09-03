/* CARRITO DE COMPRAS 
1- Mensaje de Bienvenida
2- Pedimos que ingrese:
- Nombre del Producto
- Marca del Producto
- Precio del Producto
- Cantidad Deseada
4- Se le pregunta si desea seguir comprando
5- Se le muestra el total
7- Se pregunta su Condición Fiscal y se le indica tipo de factura a emitir
8- Mensaje de Gracias por su Compra!*/


let nombre;
let marca;
let precio;
let cantidad;
let valor = 1;
let total = 0;
let continuar;
let condicion;
let a = `a`;
let b = `b`;
let c = `c`;


alert (`¡Bienvenido al Carrito de Compras!`);

function cargar () {
    nombre = prompt (`Ingrese el Nombre del Producto`);
    marca = prompt (`Ingrese la Marca del Producto`);
    precio = +prompt (`Ingrese el Precio Unitario`);
    cantidad= +prompt (`Ingrese la Cantidad Deseada`);
}

function saber (){
    condicion = prompt (`Escriba la opción correspondiente a su condición fiscal:`+ `\n`
        + `a) Consumidor Final` + `\n`  
        + `b) Monotributista`+ `\n`
        + `c) Responsable Inscripto` + `\n`);
    
        switch (condicion) {
            case a:
                alert (`Se emitirá Factura C`);
                break; 
            case b:
                alert (`Se emitirá Factura B`);
                break;
            case c:
                alert (`Se emitirá Factura A`);
                break;
            default:
                alert(`Opción incorrecta`);
        }
    }


do {
    cargar ();
    total = total + precio * cantidad; 
    continuar = prompt (`desea continuar agregando productos? si / no `);
    while (continuar != `no` && continuar != `si`){
        continuar = prompt ( `debe ingresar si o no`);
    }
}while (continuar == `si`);{
saber ();
}

alert (`su total es $` + total + `\n`
+ `¡Gracias por su Compra!`);


    if ( total >= valor){
    } else {
        alert (`Vuelva a ingresar para poder Comprar`);
    }
