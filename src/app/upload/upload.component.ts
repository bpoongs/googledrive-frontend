import { Component, OnInit } from '@angular/core';
import { UploadService } from '../_services/upload.service';

@Component({
    selector: 'app-form-upload',
    templateUrl: './upload.component.html',
})
export class UploadComponent implements OnInit {

    selectedFiles: FileList;

    constructor(private uploadService: UploadService) { }

    ngOnInit() {
    }

    upload() {
        const file = this.selectedFiles.item(0);
        this.uploadService.uploadFile(file);
    }

    selectFile(event) {
        this.selectedFiles = event.target.files;
    }
}
