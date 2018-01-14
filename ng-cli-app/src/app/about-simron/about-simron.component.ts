import { Component, OnInit } from '@angular/core';
import {NgbModal, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import { ResumeComponent } from './resume/resume.component';
import { ResumeCompressedComponent } from './resume-compressed/resume-compressed.component';
@Component({
  selector: 'app-about-simron',
  templateUrl: './about-simron.component.html',
  styleUrls: ['./about-simron.component.scss']
})
export class AboutSimronComponent implements OnInit {

  constructor(private modalService: NgbModal) {}

  option: NgbModalOptions;

  ngOnInit() {
    this.option = {
      size: 'lg',
      windowClass: 'modal-xxl'
    };
  }

  open() {
    this.modalService.open(ResumeCompressedComponent, this.option);
  }

}
