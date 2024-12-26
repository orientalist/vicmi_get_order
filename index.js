// 引入 AWS SDK v3 的 S3 客戶端和認證提供者
const { S3Client, GetObjectCommand, PutObjectCommand } = require('@aws-sdk/client-s3');

// 指定你的 S3 桶名和檔案名
const BUCKET_NAME = '';
const FILE_NAME = '';

exports.handler = async (event) => {

    const id = event.queryStringParameters?event.queryStringParameters.id:null;

    try {
        const orders= await main(id);

        // 返回成功響應
        return {
            statusCode: 200,
            body: orders
        };
    } catch (error) {
        // 返回錯誤響應
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: "Failed to update data",
                error: error.message,
            }),
        };
    }
};

const main = async function (id) {
    try {

        const s3Client = new S3Client({
            region: '',
            credentials: {
                accessKeyId: '',
                secretAccessKey: ''
            }
        });

        const data = await s3Client.send(
            new GetObjectCommand({
                Bucket: BUCKET_NAME,
                Key: FILE_NAME
            })
        );

        const streamToString = (stream) => new Promise((resolve, reject) => {
            const chunks = [];
            stream.on('data', (chunk) => chunks.push(chunk));
            stream.on('end', () => resolve(Buffer.concat(chunks).toString('utf-8')));
            stream.on('error', reject);
        });

        let orders = JSON.parse(await streamToString(data.Body));

        if(id){
            orders.orders=orders.orders.find(o=>o.id===Number.parseInt(id));
        }

        return orders;
    } catch (e) {
        return {code:500};
    }
}

//main();