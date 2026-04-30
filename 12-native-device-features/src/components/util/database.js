import * as SQLite from 'expo-sqlite';

const database = SQLite.openDatabaseSync('places.db');

function init() {}