import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-screen-name',
  templateUrl: './screen-name.component.html',
  styleUrls: ['./screen-name.component.scss']
})
export class ScreenNameComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  fileChange(event) {
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      let file: File = fileList[0];
      let formData: FormData = new FormData();
      formData.append('uploadFile', file, file.name);
    }
  }

  onSubmit(flag) {

  }

}
