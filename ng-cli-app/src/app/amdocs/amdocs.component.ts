import { Component, OnInit } from '@angular/core';
import {NgbModal, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import {FalloutTrendAnalyzerComponent} from './fallout-trend-analyzer/fallout-trend-analyzer.component';
import { SafeDBUpdateComponent } from './safe-dbupdate/safe-dbupdate.component';
import { BpmFlowCreatorComponent } from './bpm-flow-creator/bpm-flow-creator.component';
import { EmailServerLogsComponent } from './email-server-logs/email-server-logs.component';
import { PerformanceLogAanalyzerComponent } from './performance-log-aanalyzer/performance-log-aanalyzer.component';
import { LogToHtmlComponent } from './log-to-html/log-to-html.component';
import { StatusReportingComponent } from './status-reporting/status-reporting.component';
import { ServerUpStatusComponent } from './server-up-status/server-up-status.component';

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
    }else if ( toolName === 'bfc') {
      const modalRef = this.modalService.open(BpmFlowCreatorComponent, this.option);
    }else if ( toolName === 'elfc') {
      const modalRef = this.modalService.open(EmailServerLogsComponent, this.option);
    }else if ( toolName === 'pla') {
      const modalRef = this.modalService.open(PerformanceLogAanalyzerComponent, this.option);
    }else if ( toolName === 'lth') {
      const modalRef = this.modalService.open(LogToHtmlComponent, this.option);
    }else if ( toolName === 'sr') {
      const modalRef = this.modalService.open(StatusReportingComponent, this.option);
    }else if ( toolName === 'sus') {
      const modalRef = this.modalService.open(ServerUpStatusComponent, this.option);
    }else if ( toolName === 'xyz') {
      const modalRef = this.modalService.open(FalloutTrendAnalyzerComponent, this.option);
    }else if ( toolName === 'xyz') {
      const modalRef = this.modalService.open(FalloutTrendAnalyzerComponent, this.option);
    }else if ( toolName === 'xyz') {
      const modalRef = this.modalService.open(FalloutTrendAnalyzerComponent, this.option);
    }else if ( toolName === 'xyz') {
      const modalRef = this.modalService.open(FalloutTrendAnalyzerComponent, this.option);
    }
  }

}
