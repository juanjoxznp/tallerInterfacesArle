// Crea una interface BaseObject con una propiedad id. Luego crea interfaces User, Product y Order que hereden de
// BaseObject. Crea una función genérica que pueda imprimir los datos

interface IBaseObject {
  id: number;

}

interface User extends IBaseObject {
  name: string;


}

interface Product extends IBaseObject {

  productName: string;

}

interface Order extends IBaseObject {

  orderId: number;

}

function imprimirDatos<T extends IBaseObject>(objeto: T): void {
  console.log("ID:", objeto.id);
}



const usuario: User = { id: 1, name: "Juan" };
imprimirDatos(usuario);

const producto: Product = { id: 2, productName: "Libro" };
imprimirDatos(producto);

const orden: Order = { id: 3, orderId: 12345 };
imprimirDatos(orden);





