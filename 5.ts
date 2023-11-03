// Crea una interface Database con funciones como connect, find, update, etc. Luego crea una clase 
// MySQLDatabase e SQLiteDatabase que implementen esa interface con distintas funcionalidades

interface Database {
    connect(): void;
    find(id: number): any;
    update(id: number, data: any): void;
}

class MySQLDatabase implements Database {
    connect(): void {
        console.log('Conectado a MySQL');
    }

    find(id: number): any {
        console.log(`Buscando en MySQL por id: ${id}`);
        return null;
    }

    update(id: number, data: any): void {
        console.log(`Actualizando en MySQL el registro con id: ${id}`);
    }

}

class SQLiteDatabase implements Database {
    connect(): void {
        console.log('Conectado a SQLite');
    }

    find(id: number): any {
        console.log(`Buscando en SQLite por id: ${id}`);
        return null;
    }

    update(id: number, data: any): void {
        console.log(`Actualizando en SQLite el registro con id: ${id}`);
    }

}

const mySQLDatabase = new MySQLDatabase();
mySQLDatabase.connect();
mySQLDatabase.find(1);
mySQLDatabase.update(1, { name: 'New Data' });

const sqliteDatabase = new SQLiteDatabase();
sqliteDatabase.connect();
sqliteDatabase.find(2);
sqliteDatabase.update(2, { name: 'New Data 2' });