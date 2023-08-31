/**
 * una interfaz para los productosEnVenta que venda el kiosco saber cuál es y cuántos hay
 */
interface Producto {
	id: number;
	nombre: string;
	cantidad: number;
	precioNeto: number;
}
/**
 * que vende el kiosco
 * el stock
 */
class Kiosco {
	private productosEnVenta: Producto[];
	private productosVendidos: Producto[];

	constructor() {
		this.productosEnVenta = [];
		this.productosVendidos = [];
	}

	/**
	 * agrego un producto para vender
	 */
	agregarProducto(producto: Producto[]): void {
		this.productosEnVenta.push(...producto);
	}

	/**
	 * disminuyo la cantidad de un producto una vez vendido
	 */
	moverProducto(productoId: number, cantidad: number): void {
		const producto = this.productosEnVenta.find((producto) => producto.id === productoId);
		const productoVendido = this.productosVendidos.find((producto) => producto.id === productoId);
		if (producto) {
			producto.cantidad -= cantidad;
			if (productoVendido) {
				productoVendido.cantidad += cantidad;
			} else {
				/** reemplazo la cantidad que tenia con la actual */
				this.productosVendidos.push({ ...producto, cantidad });
			}
			/** si llega  a cero el id se borra*/
			if (producto.cantidad <= 0) {
				this.productosEnVenta = this.productosEnVenta.filter((producto) => producto.id !== productoId);
			}
		}
	}

	getTotalVendido(): number {
		let total = 0;
		for (const producto of this.productosVendidos) {
			total += producto.cantidad * producto.precioNeto;
		}
		return total;
	}

	getProducto(productoId: number): Producto | undefined {
		return this.productosEnVenta.find((producto) => producto.id === productoId);
	}

	getProductosEnVenta(): Producto[] {
		return this.productosEnVenta;
	}
	getProductosvendido(): Producto[] {
		return this.productosVendidos;
	}
}
/**
 * agregamos la mercaderia
 */

const negocio = new Kiosco();

negocio.agregarProducto([
	{ id: 1, nombre: "chupetin", cantidad: 50, precioNeto: 50 },
	{ id: 2, nombre: "caramelo", cantidad: 90, precioNeto: 50 },
	{ id: 3, nombre: "alfajor simple", cantidad: 30, precioNeto: 50 },
	{ id: 4, nombre: "alfajor triple", cantidad: 7, precioNeto: 50 },
	{ id: 5, nombre: "agua", cantidad: 12, precioNeto: 50 },
	{ id: 6, nombre: "soda", cantidad: 30, precioNeto: 50 },
	{ id: 7, nombre: "gaseosa", cantidad: 5, precioNeto: 50 },
	{ id: 8, nombre: "galletita", cantidad: 38, precioNeto: 50 }
]);

// Aquí es donde llamas al método moverProducto con el ID del producto y la cantidad que quieres disminuir.
negocio.moverProducto(2, 10);

console.log(negocio.getProductosEnVenta());
const totalVendido = negocio.getTotalVendido();
console.log(`Total vendido: $${totalVendido}`);