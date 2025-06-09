

const AWS = require('aws-sdk');

//configuramos objeto S3
const s3 = new AWS.S3({
    region: process.env.S3_REGION,
    credentials: {
        accessKeyId: process.env.S3_IA_USER,
        secretAccessKey: process.env.S3_IA_PASS
    }
});


const uploadImage = async (file) => {
const params = {
    Bucket: process.env.S3_NAME,
    Key: `recursos/rec-${Date.now()}-${file.originalname}`,
    Body: file.buffer,
    ContentType: file.mimetype,
    ACL: 'public-read',
};

try {
    const data = await s3.upload(params).promise();
    return data.Location; // Devuelve la URL de la imagen subida
  } catch (err) {
    throw err;
  }
}

module.exports = { uploadImage }




