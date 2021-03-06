'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.s3Bucket = exports.s3Region = exports.s3Config = exports.url = exports.smtp = undefined;

var _s3Config = require('./s3-config.json');

var smtp = exports.smtp = {
    host: 'smtp.sendgrid.net',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: 'apikey', // generated ethereal user
        pass: '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' // generated ethereal password 'SendGridApiKey'
    }
};

var url = exports.url = 'http://localhost:3001';

var s3Config = exports.s3Config = {
    accessKeyId: _s3Config.accessKeyId,
    secretAccessKey: _s3Config.secretAccessKey
};

var s3Region = exports.s3Region = 'us-west-2';
var s3Bucket = exports.s3Bucket = 'fileapp';
//# sourceMappingURL=config.js.map