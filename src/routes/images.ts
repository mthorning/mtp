import { ListObjectsCommand } from '@aws-sdk/client-s3'; // ES Modules import
import { s3Client } from '../utils/s3Client.js';

export async function get() {
  const bucketParams = { Bucket: 'mattthorningphotography.com' };

  try {
    // const data = await s3Client.send(new ListObjectsCommand(bucketParams));

    return {
      status: 200,
      body: process.env
    };
  } catch (err) {
    console.log(err);
    return {
      status: 500,
      body: err
    };
  }
}
