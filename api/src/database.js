//this code is for connecting to Mongo Database. 27017 is port provided by mongodb.

import {MongoClient} from 'mongodb'


const url = 'mongodb://localhost:27017/fileapp';


export const connect = (callback) => {

    MongoClient.connect(url, (err, db) => {
        return callback(err, db);
    });
};

