import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-resume-compressed',
  templateUrl: './resume-compressed.component.html',
  styleUrls: ['./resume-compressed.component.scss']
})

export class ResumeCompressedComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) {}

  rrArr: RoleAndResp[];
  ngOnInit() {
    this.rrArr = [
      {
        company: 'Amdocs Inc',
        client: 'AT&T',
        application: 'Digital Experience suite of applications',
        duration: 'May 2017 to present',
        sofwarePlatform: 'Enterprise Architect, Microsoft Office applications',
        designation: 'Solution Architect',
        responsiblities: [
          'Create architectural solution for Digital Experience impacted application.',
          'Provide information and explain complication to business client to help them in taking right decision.',
          'Explain solution to development team during transition period.',
          'Create knowledge base for new team team members.'
        ],
        achievments: [
          'Appreciated for going beyond the expected lengths to help project implementation.'
        ],
        tools: [
          'Knowledge Center'
        ]
      }, {
        company: 'Amdocs Inc',
        client: 'US Cellular, Telefonica, Comcast',
        application: 'Ordering Management System (Order To Activation)',
        duration: 'Jan 2014 to Apr 2017',
        sofwarePlatform: 'Java, J2EE, Web Services, Linux, PL/SQL, Oracle, weblogic, JSF, Casandra, QlikView, Storm, JBPM, Drools, Kafka, Simba, Talend, Spark, JESI, ODO, OGW',
        designation: 'Application Architect',
        responsiblities: [
          'Create solution of customer request for Sky4.0 suite of applications which provides business intelligence, ETL, fallout management & reporting.',
          'Integrate solution for various application (ODO, ARM, MEC, OH, Teoco, OfficeTrack, Remedy, JESI, QlikView)',
          'Oversee development of Sky Applications.',
          'Transfer knowledge to team in Chile, India and US.',
          'Create tools and oversee its development.',
          'Investigate production issues.',
          'Brainstorm with customer for improvements required in production.',
          'Create best practices.'
        ],
        achievments: [
          'Appreciated by team and manager for excellent collaboration with client and developers.',
          'Created web based tool platform for easy publish and accessibility of tools',
          'Appreciated for innovation of tools.',
          'Received special thanks for work done on device issues they were having. Appreciation came from business unit and supply chain management.',
          'Improved DB Extract process from 2hrs to 10mins'
        ],
        tools: [
          'Real time trend analysis for fallout pattern detection and trigger point of fallout',
          'Request response extract and email tool based on order and its stage. It saves effort to extracting same from production unix environment.',
          'OMS data integrity validator tool to help in detection of problem faced for a customer. Its accumulation of years of OMS experience of identified pattern.',
          'Automated API caller using SOAP call for external system (ReleaseResource) and EJB call for internal system (CancelOrder).',
          'Reporting tool.',
          'Query validator, execution and audit tool.'
        ]
      }, {
        company: 'Amdocs Development Center India Private Ltd.',
        client: 'Sprint, Rogers, América Móvil, AT&T, Telia sonera Finland',
        application: 'Ordering Management System(OMS), Fulfillment Desktop(FDT, an ordering application)',
        duration: 'May 2006 to Jan 2014',
        sofwarePlatform: 'Java, J2EE, EJB2.0, Web Services, JMS, Struts, Servlet, JSP, HTML, Javascript, jQuery, HTML, Swing',
        designation: 'Application Architect',
        responsiblities: [
          'Scoping of customer request for OMS application',
          'Create high level design and impact assessment for customer request',
          'Handle nonfunctional which includes ',
          'Performance check of application using jProfiler and custom logging mechanism.',
          'Security check using HP Foritfy ',
          'Application code verification using PMD, FindBugs and Sonar tools',
          'Core product focal point for implementation of new releases and raising required fixes/enhancement in it.',
          'Introduction of new technology and tools in project',
          'FOSS focal point',
          'Train experienced and new people in team.',
          'Previously worked as full stack developer to design and implement customer requests. Lead team in development and testing cycle. Built knowledge in team.'
        ],
        achievments: [
          'Appreciated for creating performance evaluation procedure for development phase for all projects.',
          'For self initiated tools got myself in Amdocs magazine of iRock section. Awarded with Copernicus award.',
          'Virtual desktop allocation tool has reduced emails to zero for notification of allocation/release of shared desktop.',
          'ServerAliveStatus tool give one glance status of the application for ST env. It has been appreciated by testing and application teams.',
          'Awarded with excellence in work, for playing key role in delivering a major version. Awarded with letter of recognition for customer satisfactory onsite support.'
        ],
        tools: [
          'Log to HTML converter to help in faster issue detection from logs by using html features like greying out unwanted log, compressing exception and request/response, using color to highlight special areas',
          'Performance Analyzer, it tells which area of code can be problematic based on application performance logging',
          'Merge Task Report, it helps in follow up of tasks required to be performed by team',
          'Shared Resource Allocation, quick look up and allocation tool for team where resources like virtual desktop or system test server are shared'
        ]
      }, {
        company: 'Ericsson India Ltd.',
        client: 'Dishnet, MTNL',
        application: 'MMS, GPRS, Broadband',
        duration: 'Dec 2004 to May 2006',
        sofwarePlatform: 'Java, Perl, Shell, <Technologies <Juniper Router and Switches, Sun Solaris 9, Raid5, Oracle 8.>>',
        designation: 'Support Engineer',
        responsiblities: [
          'Integrate third party software via java based API with the current system.',
          'Upgrade system software and configuration & solve tier 2 problems related to application failure, configuration and network problems. ',
          'Create specialized tools for billing and MMS system support. Created CDR decoding and viewer tool to view different type of CDRs. Written scripts in shell and perl for system maintenance and upgrade. ',
          'Worked Sun Solaris 9 OS on Sun Fire and Sun Blade system in clustered environment. Along with Juniper router and switches for MMS and GPRS system.',
          'Implement HpOpenView tool for MTNL Delhi for broadband project for MTNL Delhi.'
        ],
        achievments: [
          'Appreciated by VP on behalf of customer for fixing corrupted CDRs in just 3 hours by creating CDR fixing tool which intern saved lost revenue of customer (later this tool updated to support various CDR fixing problems). ',
          'Appreciated by customer to provide special report generation script which current OSS system cannot provide them. ',
          'Specially appreciated by Director to learn and provide Delhi to Pune RSG connectivity in shortest time.',
          'Created specialized script which generate xml report for status of network element and send it to concerned person via e-mail.'
        ],
        tools: [
          'Call Data Record (CDR) parser and fixer'
        ]
      }, {
        company: 'San Industrial Automation',
        client: 'Automated Sliding Doors, Delphi',
        application: 'ARM SDK 500, MATLAB, AutoCAD',
        duration: 'Jul 2004 to May 2006',
        sofwarePlatform: 'C++, Perl, Shell',
        designation: 'Project Engineer',
        responsiblities: [
          'It was very brief time here. Just to mention this was our startup company which provides automated solution for various manufacturing line. ',
          'We had our core product as automatic sliding door. We have been awarded a quality check project for Delphi. ',
          'At here my part was to design intelligent variable speed controlled dc motor circuit, control panel for operation, PLC programming for Sensors, Autocad designs. Provide automation solution. '
        ],
        achievments: [
        ],
        tools: [
        ]
      }
    ];
  }

}
class RoleAndResp {
  company: string;
  client: string;
  application: string;
  duration: string;
  sofwarePlatform: string;
  designation: string;
  responsiblities: string[];
  achievments: string[];
  tools: string[];
}
