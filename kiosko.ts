/**
 * que vende el kiosco
 * el stock
 */
class kiosco {
    private productos: Producto[];
/**
 * agrego un producto para vender
 */
    agregarProducto(producto:Producto):void{
        this.productos.push(producto);
    }
/**
 * saco un producto una ves vendido
 */
    moverProducto(productoId:number):void{
        this.productos = this.productos.filter(
            (producto) => productoId !== productoId
        )
    }

}
/**
 * una inteface para los productos que venda el kiosco saber cual es y cuantos hay
 */
interface Producto{
    id:number;
    nombre:string;
    cantidad:number
}
/**
 * ya lo vendio el kiosco
 * se deve cargar lo que ya se vendio
 */


/**
 * 
 */