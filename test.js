import { GetObjectCommand } from '@aws-sdk/client-s3'; // ES Modules import
import { S3Client } from '@aws-sdk/client-s3';
import { config } from 'dotenv';

config();

const REGION = 'us-east-1';

const s3Client = new S3Client({
  region: REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
  }
});

(async function () {
  const bucketParams = {
    Bucket: 'mattthorningphotography.com',
    Key: '20200624_Abstract_Sunset_e5857d3f76.jpeg'
  };

  try {
    const data = await s3Client.send(new GetObjectCommand(bucketParams));

    // console.log(data.Body.read());
    const readable = data.Body;
    const chunks = [];

    readable.on('readable', () => {
      let chunk;
      while (null !== (chunk = readable.read())) {
        chunks.push(chunk);
      }
    });

    readable.on('end', () => {
      const content = chunks.join('');
      console.log(content)
    });
  } catch (err) {
    console.error(err);
  }
})();
