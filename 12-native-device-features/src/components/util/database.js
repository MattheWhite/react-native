import * as SQLite from 'expo-sqlite'; // i will use everywhere Asyncronous execution
// The legacy openDatabese(), transaction(), executeSql() and so on... callback-based APIs are deprecated in favor of async/await methods like runAsync(), getAllAsync(), and getFirstAsync(), which offer better performance and type safety. 

/*
When you use (in _layout.tsx modern way) <SQLiteProvider databaseName="places.db" onInit={init}>, it internally manages the database connection and automatically passes the database instance to your init function as a parameter.

const database = await SQLite.openDatabaseAsync('places.db'); // create if not exists, open if it does
*/
let db = null;
export async function init(database) {// sends the initial base database structure, must runned at least once
    db = database; // Store database reference in module scope

    // Single INSERT/SELECT operations don't need withTransactionAsync(). Transactions are for multiple operations that must all succeed or fail together.

    try {
/*      await database.withTransactionAsync( async () => { // transaction object automatically passed by expo-sqlite package, but i use the modern way, no longer needed | id column will be set automatically
         }); // the callbacks for success-error now deprecated! use try-catch instead 
*/
            await db.execAsync(`CREATE TABLE IF NOT EXISTS places (
                id INTEGER PRIMARY KEY NOT NULL,
                title TEXT NOT NULL,
                imageUri TEXT NOT NULL,
                address TEXT NOT NULL,
                latitude REAL NOT NULL,
                longitude REAL NOT NULL
            )`);

    } catch (error) {
        console.error("Failed to initialize database:", error);
        throw error;
    }
}

export async function insertPlace(place) {
    if (!db) throw new Error('Database not initialized');
    try {
        // await this.database.withTransactionAsync( async () => { });   as above i explained, here no need for withTransactionAsync and execAsync neither

            const result = await db.runAsync(`INSERT INTO places (title, imageUri, address, latitude, longitude) VALUES (?, ?, ?, ?, ?)`,
                [place.title, place.imageUri, place.address, place.location.lat, place.location.lng] // the sequence is IMPORTANT of passed data
            ); // instead of inserting dynamic data into query directly, use ? placeholder with sqlite package
            return result.lastInsertedRowId;
    } catch (error) {
        console.error("Failed to insert data into database:", error);
        throw error;
    }
}

export async function fetchPlaces() {
    if (!db) throw new Error('Database not initialized');
    try {
        // await this.database.withTransactionAsync( async () => {
        //     await this.database.execAsync(`SELECT * FROM places`);
        // });  -> Removed unnecessary transactions - Single operations don't need them
        
        /*

        Old API (Deprecated):
        Methods: transaction(), executeSql().
        Response: A complex SQLResultSet object containing rows, rows._array, insertId, rowsAffected, etc.
        Usage: Callback-based, harder to read.
        
        New API (Current Standard):
        Methods: getAllAsync(), runAsync(), getFirstAsync().
        Response:
        getAllAsync(): Returns a plain array of objects ([{ id: 1, title: "..." }, ...]) directly. No wrapper object.
        runAsync(): Returns a specific result object { lastInsertRowId, changes } for INSERT/UPDATE/DELETE.
        Usage: Promise-based (async/await), cleaner, and type-safe. 
        */
        const rows = await db.getAllAsync('SELECT * FROM places'); // Use for SELECT queries (returns actual data)
        return rows;
    } catch (error) {
        console.error("Failed to fetch data from database:", error);
        throw error;
    }
}