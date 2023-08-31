/**
 * que vende el kiosco
 * el stock
 */
class Kiosco {
	private productos: Producto[];

	constructor() {
		this.productos = [];
	}

	/**
	 * agrego un producto para vender
	 */
	agregarProducto(producto: Producto): void {
		this.productos.push(producto);
	}

	/**
	 * disminuyo la cantidad de un producto una vez vendido
	 */
	moverProducto(productoId: number, cantidad: number): void {
		const producto = this.productos.find((producto) => producto.id === productoId);
		if (producto) {
			producto.cantidad -= cantidad;
			if (producto.cantidad <= 0) {
				this.productos = this.productos.filter((producto) => producto.id !== productoId);
			}
		}
	}

	getProducto(productoId: number): Producto | undefined {
		return this.productos.find((producto) => producto.id === productoId);
	}

	getProductos(): Producto[] {
		return this.productos;
	}
}

/**
 * una interfaz para los productos que venda el kiosco saber cuál es y cuántos hay
 */
interface Producto {
	id: number;
	nombre: string;
	cantidad: number;
}

/**
 * agregamos la mercaderia
 */

const negocio = new Kiosco();

negocio.agregarProducto({ id: 1, nombre: "chupetin", cantidad: 50 });
negocio.agregarProducto({ id: 2, nombre: "caramelo", cantidad: 90 });
negocio.agregarProducto({ id: 3, nombre: "alfajor simple", cantidad: 30 });
negocio.agregarProducto({ id: 4, nombre: "alfajor triple", cantidad: 7 });
negocio.agregarProducto({ id: 5, nombre: "agua", cantidad: 12 });
negocio.agregarProducto({ id: 6, nombre: "soda", cantidad: 30 });
negocio.agregarProducto({ id: 7, nombre: "gaseosa", cantidad: 5 });
negocio.agregarProducto({ id: 8, nombre: "galletita", cantidad: 38 });

// Aquí es donde llamas al método moverProducto con el ID del producto y la cantidad que quieres disminuir.
negocio.moverProducto(2, 10);

console.log(negocio.getProductos());
/**
 * 
 */