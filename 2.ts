// Crea una interface User y otra interfaz Admin que herede de User. Crea una función para imprimir datos de
// usuario que acepte tanto User como Admin

interface IUser {
  name: string;
  age: number;
}

interface IAdmin extends IUser {
  email: string;
}

function printUserData(user: IUser | IAdmin): void {
  console.log(`Name: ${user.name}`);
  console.log(`Age: ${user.age}`);
  if ("email" in user) {
    console.log(`Email: ${user.email}`);
  }
}

const regularUser: IUser = { name: "Juan José", age: 25 };
const adminUser: IAdmin = {
  name: "Albeiro",
  age: 35,
  email: "Albeiro@example.com",
};

printUserData(regularUser);

printUserData(adminUser);
