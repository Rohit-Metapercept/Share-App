import {accessKeyId,secretAccessKey} from './s3-config.json'
export const smtp = {
    host: 'smtp.sendgrid.net',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: 'apikey', // generated ethereal user
        pass: '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'  // generated ethereal password 'SendGridApiKey'
    }
};



export const url = 'http://localhost:3000';

export const s3Config = {
    accessKeyId: 'AKIAITSJSRJTKW6ZTUNQ',
    secretAccessKey: '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'
};


export const s3Region = 'us-west-2'
export const s3Bucket = 'fileappp'
