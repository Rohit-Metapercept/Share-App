import http from 'http';																//From EP:1
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import multer from 'multer'                                             			    //From EP:1
import path from 'path';																//From EP:1

import {connect} from "./database";														//From EP:1
import AppRouter from './router'														//From EP:1
import nodemailer from 'nodemailer'
import {smtp, s3Config, s3Region,s3Bucket} from './config'

// Amazon S3 Setup
import AWS from 'aws-sdk'
import multerS3 from 'multer-s3'


AWS.config.update(s3Config);

AWS.config.region = s3Region ;

const s3 = new AWS.S3();


// Setup Email

let email = nodemailer.createTransport(smtp);


// File storage config

const storageDir = path.join(__dirname, '..', 'storage');								//From EP:1


//const upload = multer({ storage: storageConfig }); // local upload.

const upload = multer({																	//From EP:1
    storage: multerS3({
        s3: s3,
        bucket: s3Bucket,
        metadata: function (req, file, cb) {
            cb(null, {fieldName: file.fieldname});
        },
        key: function (req, file, cb) {
            const filename = `${Date.now().toString()}-${file.originalname}`;
            cb(null, filename)
        }
    })
});



// End file storage config

const PORT = 3000;
const app = express();
app.server = http.createServer(app);


app.use(morgan('dev'));


app.use(cors({
    exposedHeaders: "*"
}));

app.use(bodyParser.json({
    limit: '50mb'
}));


app.set('root', __dirname);
app.set('storageDir', storageDir);
app.upload = upload;
app.email = email;
app.s3 = s3;

//Connect to the database.    This block is from EP1

connect((err, db) => {																			//From EP:1

    if(err){
        console.log("An error connecting to the database", err);
        throw (err);
    }

    app.db = db;
    app.set('db', db);


    // init routers.
    new AppRouter(app);


    app.server.listen(process.env.PORT || PORT, () => {

        console.log(`App is running on port ${app.server.address().port}`);

    });

});



export default app;																				//From EP:1