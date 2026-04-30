import * as SQLite from 'expo-sqlite'; // i will use everywhere Asyncronous execution
// The legacy openDatabese(), transaction(), executeSql() and so on... callback-based APIs are deprecated in favor of async/await methods like runAsync(), getAllAsync(), and getFirstAsync(), which offer better performance and type safety. 


const database = await SQLite.openDatabaseAsync('places.db'); // create if not exists, open if it does

export async function init() {// sends the initial base database structure, must runned at least once
    try {
        await database.withTransactionAsync( async () => { // transaction object automatically passed by expo-sqlite package, but i use the modern way, no longer needed
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