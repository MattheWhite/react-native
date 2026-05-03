import * as SQLite from 'expo-sqlite'; // i will use everywhere Asyncronous execution
// The legacy openDatabese(), transaction(), executeSql() and so on... callback-based APIs are deprecated in favor of async/await methods like runAsync(), getAllAsync(), and getFirstAsync(), which offer better performance and type safety. 

/*
When you use (in _layout.tsx modern way) <SQLiteProvider databaseName="places.db" onInit={init}>, it internally manages the database connection and automatically passes the database instance to your init function as a parameter.

const database = await SQLite.openDatabaseAsync('places.db'); // create if not exists, open if it does
*/
let database;
export async function init(database) {// sends the initial base database structure, must runned at least once
    this.database = database;
    try {
        await database.withTransactionAsync( async () => { // transaction object automatically passed by expo-sqlite package, but i use the modern way, no longer needed | id column will be set automatically
            await database.execAsync(`CREATE TABLE IF NOT EXISTS places (
                id INTEGER PRIMARY KEY NOT NULL,
                title TEXT NOT NULL,
                imageUri TEXT NOT NULL,
                address TEXT NOT NULL,
                latitude REAL NOT NULL,
                longitude REAL NOT NULL
            )`);
        }); // the callbacks for success-error now deprecated! use try-catch instead
    } catch (error) {
        console.error("Failed to initialize database:", error);
    }
}

export async function insertPlace(place) {
    try {
        await this.database.withTransactionAsync( async () => {
            await this.database.execAsync(`INSERT INTO places (title, imageUri, address, latitude, longitude) VALUES (?, ?, ?, ?, ?)`,
                [place.title, place.imageUri, place.address, place.location.lat, place.location.lng] // the sequence is IMPORTANT of passed data
            ); // instead of inserting dynamic data into query directly, use ? placeholder with sqlite package
        });
    } catch (error) {
        console.error("Failed to insert places data into database:", error);
    }
}

export async function fetchPlaces() {
    try {
        await this.database.withTransactionAsync( async () => {
            await this.database.execAsync(`SELECT * FROM places`);
        });
    } catch (error) {
        console.error("Failed to fetch places from database:", error);
    }
}