import { Injectable } from '@angular/core';
import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';

@Injectable({
    providedIn: 'root'
})
export class UploadService {

    FOLDER = 'demo-s3/';

    constructor() { }

    uploadFile(file) {
        const contentType = file.type;
        const bucket = new S3(
            {
                accessKeyId: 'AcceessKey',
                secretAccessKey: 'secretAccessKey',
                region: 'region'
            }
        );
        const params = {
            Bucket: 'demo-angular-bucket',
            Key: this.FOLDER + file.name,
            Body: file,
            ACL: 'public-read',
            ContentType: contentType
        };
        bucket.upload(params, function (err, data) {
            if (err) {
                console.log('There was an error uploading your file: ', err);
                return false;
            }
            console.log('Successfully uploaded file.', data);
            return true;
        });
//for upload progress
        /*bucket.upload(params).on('httpUploadProgress', function (evt) {
                  console.log(evt.loaded + ' of ' + evt.total + ' Bytes');
              }).send(function (err, data) {
                  if (err) {
                      console.log('There was an error uploading your file: ', err);
                      return false;
                  }
                  console.log('Successfully uploaded file.', data);
                  return true;
              });*/
    }
}
