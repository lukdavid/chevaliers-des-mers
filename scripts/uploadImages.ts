import {
  S3Client,
  PutObjectCommand,
  ListObjectsCommand,
} from "@aws-sdk/client-s3";
import { readdirSync, readFileSync } from "fs";
import dotenv from "dotenv";

dotenv.config();

const s3Client = new S3Client({
  region: "fr-par",
  endpoint: "https://s3.fr-par.scw.cloud",
});

// @credits https://github.com/awsdocs/aws-doc-sdk-examples/blob/main/javascriptv3/example_code/s3/scenarios/basic.js
export const uploadFilesToBucket = async ({
  bucketName,
  sourceFolderPath,
  targetFolderPath,
}: {
  bucketName: string;
  sourceFolderPath: string;
  targetFolderPath: string;
}) => {
  console.log(`Uploading files from ${sourceFolderPath}\n`);
  const keys = readdirSync(sourceFolderPath);
  const files = keys.map((key) => {
    const filePath = `${sourceFolderPath}/${key}`;
    const fileContent = readFileSync(filePath);
    return {
      Key: `${targetFolderPath}/${key}`,
      Body: fileContent,
    };
  });

  for (const file of files) {
    await s3Client.send(
      new PutObjectCommand({
        Bucket: bucketName,
        Body: file.Body,
        Key: file.Key,
        ACL: "public-read",
      })
    );
    console.log(`${file.Key} uploaded successfully.`);
  }
};
// snippet-end:[javascript.v3.s3.scenarios.basic.PutObject]

// snippet-start:[javascript.v3.s3.scenarios.basic.ListObjects]
export const listFilesInBucket = async ({
  bucketName,
}: {
  bucketName: string;
}) => {
  const command = new ListObjectsCommand({ Bucket: bucketName });
  const { Contents } = await s3Client.send(command);
  // const contentsList = Contents?.map((c) => ` • ${c.Key}`).join("\n");
  // console.log("\nHere's a list of files in the bucket:");
  // console.log(contentsList + "\n");
  console.log(
    Contents?.slice(1)
      .map(
        (c) =>
          `{src: "https://chevaliers-des-mers-gallery.s3.fr-par.scw.cloud/${c.Key}"}`
      )
      .join(",\n")
  );
};

// uploadFilesToBucket({
//   bucketName: "chevaliers-des-mers-gallery",
//   sourceFolderPath: ".gallery",
//   targetFolderPath: "gallery",
// });

listFilesInBucket({ bucketName: "chevaliers-des-mers-gallery" });
