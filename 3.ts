// Crea una interface Product con name, price, etc. Crea una interface Inventory que contenga un array de Product 
// y funciones para agregar y buscar productos.

interface IProduct {
  name: string;
  price: number;
}

interface IInventory {
  products: IProduct[];
  addProduct(product: IProduct): void;
  findProduct(name: string): IProduct | undefined;
}

class BasicInventory implements IInventory {
  products: IProduct[] = [];

  addProduct(product: IProduct): void {
      this.products.push(product);
      console.log(`Producto ${product.name} agregado al inventario.`);
  }

  findProduct(name: string): IProduct | undefined {
      return this.products.find(product => product.name === name);
  }
}

const inventory: IInventory = new BasicInventory();
inventory.addProduct({ name: "Laptop", price: 1000 });
inventory.addProduct({ name: "Phone", price: 500 });

const foundProduct: IProduct | undefined = inventory.findProduct("Phone");
if (foundProduct) {
  console.log("Producto encontrado:", foundProduct);
} else {
  console.log("Producto no encontrado en el inventario.");
}


  