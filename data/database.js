const dotenv = require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;

let database;

const initDb = (callback) => {
    if (database) {
        console.log('Db is already initialized.');
        return callback(null, database);
    }
    MongoClient.connect(process.env.MONGODBURI)
        .then((client) => {
            database = client;
            callback(null, database);
        })
        .catch((err) => {
            callback(err);
        });
};

const getDb = () => {
    if (!database) {
        throw Error('Database not initialized.');
    }
    return database;
}

module.exports = { initDb, getDb }