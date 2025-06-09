require('dotenv').config(); //llamamos a las variables de entorno
const AWS = require('aws-sdk');
const fs = require('fs');
const path = require('path');

//configuramos objeto S3
const s3 = new AWS.S3({
    region: process.env.S3_REGION,
    credentials: {
        accessKeyId: process.env.S3_IA_USER,
        secretAccessKey: process.env.S3_IA_PASS
    }
});

const filepath = path.join(__dirname, 'test.jpg');
const fileContent = fs.readFileSync(filepath);

const params = {
    Bucket: process.env.S3_NAME,
    Key: `test/test-${Date.now()}.jpg`,
    Body: fileContent,
    ContentType: 'image/jpeg',
    ACL: 'public-read',
};

s3.upload(params, (err, data) => {
    if (err) {
        console.error('ay papaaaa tenes chamba', err);
    }
    else {
        console.log('papi ya casi');
        console.log(data.Location);
    }
});