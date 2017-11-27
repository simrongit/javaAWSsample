import { Component, OnInit } from '@angular/core';
import {NgbModal, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import {FalloutTrendAnalyzerComponent} from './fallout-trend-analyzer/fallout-trend-analyzer.component';
import { SafeDBUpdateComponent } from './safe-dbupdate/safe-dbupdate.component';

@Component({
  selector: 'app-amdocs',
  templateUrl: './amdocs.component.html',
  styleUrls: ['./amdocs.component.css']
})
export class AmdocsComponent implements OnInit {

  constructor(private modalService: NgbModal) {}

  option: NgbModalOptions;

  ngOnInit() {
    this.option = {
      size: 'lg',
      windowClass: 'modal-xxl'
    };
  }

  open(toolName: string) {
    if ( toolName === 'fta') {
      const modalRef = this.modalService.open(FalloutTrendAnalyzerComponent, this.option);
      modalRef.componentInstance.name = 'fta';
    }else if ( toolName === 'sdu') {
      const modalRef = this.modalService.open(SafeDBUpdateComponent, this.option);
    }else if ( toolName === 'xyz') {
      const modalRef = this.modalService.open(FalloutTrendAnalyzerComponent, this.option);
      modalRef.componentInstance.name = 'fta';
    }else if ( toolName === 'xyz') {
      const modalRef = this.modalService.open(FalloutTrendAnalyzerComponent, this.option);
      modalRef.componentInstance.name = 'fta';
    }else if ( toolName === 'xyz') {
      const modalRef = this.modalService.open(FalloutTrendAnalyzerComponent, this.option);
      modalRef.componentInstance.name = 'fta';
    }else if ( toolName === 'xyz') {
      const modalRef = this.modalService.open(FalloutTrendAnalyzerComponent, this.option);
      modalRef.componentInstance.name = 'fta';
    }else if ( toolName === 'xyz') {
      const modalRef = this.modalService.open(FalloutTrendAnalyzerComponent, this.option);
      modalRef.componentInstance.name = 'fta';
    }
  }

}
