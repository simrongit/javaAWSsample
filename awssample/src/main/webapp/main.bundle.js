webpackJsonp(["main"],{

/***/ "../../../../../src lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./vma/vma.module": [
		"../../../../../src/app/vma/vma.module.ts",
		"vma.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = "../../../../../src lazy recursive";

/***/ }),

/***/ "../../../../../src/app/about-simron/about-simron.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  I consider myself as creative person but don't confuse it with artistic personality. I like to build things and gets excited with perforamnce aspect of it.\n  In my school time I thought about building mechanical machines. As I learned about electronics thought about building automatic machines.\n  As I started software industry building tools becomes the new craze. Love riding bike, gets so much adreinal.\n  People tells me that I have phylosphical personality. I see reason for that is I am quite curious about why of everything and why of why of why leads to difficult question.\n  I started my career in 2004, leaving my home town for the first time was fun. After that it become difficult to stay in town.\n  If you are inclined towards my resume then you can click <a tabindex=\"1\" (click)=\"open()\" style=\"cursor:pointer\">Resume</a> or check out <a href=\"https://www.linkedin.com/in/simrondeepsingh/\">linkedIn profile</a>. Not active on facebook left that in 2011, I think.\n</p>\n<!-- <app-resume-compressed></app-resume-compressed> -->"

/***/ }),

/***/ "../../../../../src/app/about-simron/about-simron.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about-simron/about-simron.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutSimronComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resume_compressed_resume_compressed_component__ = __webpack_require__("../../../../../src/app/about-simron/resume-compressed/resume-compressed.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutSimronComponent = (function () {
    function AboutSimronComponent(modalService) {
        this.modalService = modalService;
    }
    AboutSimronComponent.prototype.ngOnInit = function () {
        this.option = {
            size: 'lg',
            windowClass: 'modal-xxl'
        };
    };
    AboutSimronComponent.prototype.open = function () {
        this.modalService.open(__WEBPACK_IMPORTED_MODULE_2__resume_compressed_resume_compressed_component__["a" /* ResumeCompressedComponent */], this.option);
    };
    return AboutSimronComponent;
}());
AboutSimronComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-about-simron',
        template: __webpack_require__("../../../../../src/app/about-simron/about-simron.component.html"),
        styles: [__webpack_require__("../../../../../src/app/about-simron/about-simron.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]) === "function" && _a || Object])
], AboutSimronComponent);

var _a;
//# sourceMappingURL=about-simron.component.js.map

/***/ }),

/***/ "../../../../../src/app/about-simron/resume-compressed/resume-compressed.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div id=\"header\">\n    <div style=\"text-align:center; color:grey\"><h2>Simron Deep Singh</h2></div>\n    <div style=\"text-align:center; color:grey\">Address: 1012, N. Plum Grove Road, Schaumburg, IL-60173 Mobile: 630-329-3516 Email: simron.singh@gmail.com</div>\n  </div>\n  <div id=\"professionalSynopsis\" class=\"mtop40\">\n    <div><h3>Professional Synopsis</h3></div>\n    <ul>\n      <li>13 years in software development with Amdocs and Ericsson using J2EE.</li>\n      <li>I served in Telecom domain specifically with order management system.</li>\n      <li>My key personality traits are innovation and insightfulness. With these traits I have been able to exceed expectations. My innovation list includes numerous tools, quick fixes of problems and resolution of key issues.</li>\n      <li>I have been involved in every phase of development cycle solution creation, scoping, design, coding, testing, supporting, managing team, code review, and training, cross site team management.</li>\n      <li>I have had role of product owner, security leader, FOSS implementation, tools implementation, performance check.</li>\n      <li>Extensive experience of 4 years with jProfiler performance tool.</li>\n      <li>Proficient  in Java, J2EE, UML, Enterprise Architect, EJB, JMS, jProfiler, SQL, Servlets, JSP, JSF,  Hibernate, JPA, spring,  XML, HTML, JavaScript, Jquery, Perl</li>\n      <li>Well acquainted in creating tools for faster development and improve the quality.</li>\n      <li>A very good team player with the ability to work independently with minimal supervision.</li>\n      <li>Strong Communication, Interpersonal and Problem solving skills.</li>\n      <li>Currently I am working as Solution Architect for AT&T for their digital solution domain.</li>\n    </ul>\n  </div>\n  <div id=\"professionalExperience\"  class=\"mtop40\">\n    <div><h3>Professional Experience</h3></div>\n    <table class=\"table table-hover table-sm\">\n      <thead>\n        <tr>\n          <th>Period</th><th>Organization</th><th>Designation</th>\n          <th>Client</th><th>Project</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>May'2017 till Today</td><td>Amdocs Inc. USA</td><td>Solution Architect</td>\n          <td>AT&T</td><td>Digital Experience Technologies</td>\n        </tr>\n        <tr>\n          <td>Jan'2014 to Apr'2017</td><td>Amdocs Inc. USA</td><td>Application Architect</td>\n          <td>US Cellular, Telefonica, Comcast</td><td>Order management system for wireless telecom services and handsets</td>\n        </tr>\n        <tr>\n          <td>May’2006 to Dec’2014</td><td>Amdocs Development Center India Private Ltd.</td><td>Development Expert (Application Architect)</td>\n          <td>Sprint, Rogers, América Móvil</td><td>Order management system for wireless & wireline telecom services, TV, internet and equipment</td>\n        </tr>\n        <tr>\n          <td>Dec’2004 to Apr’2006</td><td>Ericsson India Pvt Ltd.</td><td>Software Developer</td>\n          <td>Dishnet, Airtel (India)</td><td>Wireline Broadband service for wireline & MMS Service for mobile</td>\n        </tr>\n        <tr>\n          <td>Jul’2004 to Nov’2004</td><td>San Industrial Automation</td><td>Project Engineer</td>\n          <td>Delhpi (India)</td><td>Industrial automation solution</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <div id=\"educationQualifcations\" class=\"mtop40\">\n    <div><h3>Eductaion Qualifications</h3></div>\n    Bachelor of technology in Electronics and Communication from GGSIPU (Guru Gobind Singh Indraprashta University), Delhi, India with 72% cpa.\n  </div>\n  <div id=\"technologicalBackground\" class=\"mtop40\">\n    <div><h3>Technological Background</h3></div>\n    <table class=\"table table-hover table-sm\">\n      <thead></thead>\n      <tbody>\n        <tr>\n          <td style=\"font-weight: bold\">Tools</td><td>Enterprise Architect, Rational Rose, Eclipse, NetBeans, Intellij, TOAD, Oracle Sql Developer, MySql Workbench/Toad,  jProfiler, \n            CC, Xtra-C, Perforce, Quality Center, JRebel, HP Fortify, PMD, Sonar, FindBugs, Ant, Maven</td>\n        </tr>\n        <tr>\n          <td style=\"font-weight: bold\">Database</td><td>Orable 12g, MySQL, H2, SQLite</td>\n        </tr>\n        <tr>\n          <td style=\"font-weight: bold\">Programming Languages</td><td>Java8, C, C++, PL/SQL, JavaScript, XSL, Bash, Perl, UML</td>\n        </tr>\n        <tr>\n          <td style=\"font-weight: bold\">Operating Systems</td><td>Windows  / Linux</td>\n        </tr>\n        <tr>\n          <td style=\"font-weight: bold\">Java/J2EE Frameworks</td><td>Spring</td>\n        </tr>\n        <tr>\n          <td style=\"font-weight: bold\">ORM</td><td>Hibernate, EJB</td>\n        </tr>\n        <tr>\n          <td style=\"font-weight: bold\">MVC</td><td>Servlet, JSP, Struts, Spring MVC, Apache MyFaces</td>\n        </tr>\n        <tr>\n          <td style=\"font-weight: bold\">Web services</td><td>JAX-WS</td>\n        </tr>\n        <tr>\n          <td style=\"font-weight: bold\">AJAX</td><td>JSON</td>\n        </tr>\n        <tr>\n          <td style=\"font-weight: bold\">AOP</td><td>AspectJ, Spring</td>\n        </tr>\n        <tr>\n          <td style=\"font-weight: bold\">JavaScript</td><td>jQuery, AngularJS, Backbone.js</td>\n        </tr>\n        <tr>\n          <td style=\"font-weight: bold\">Servers</td><td>Apache Tomcat 7, BEA Weblogic 10, Jboss 7, IBM Websphere</td>\n        </tr>\n        <tr>\n          <td style=\"font-weight: bold\">Mobile</td><td>Android Studio</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <div id=\"roleAndResponsibility\" class=\"mtop40\">\n    <div><h3>Role and Responsibility</h3></div>\n    <div *ngFor=\"let rr of rrArr\">\n      <table class=\"table table-sm\">\n        <thead></thead>\n        <tbody>\n          <tr><td style=\"font-weight: bold\">Company</td><td>{{rr.company}}</td></tr>\n          <tr><td style=\"font-weight: bold\">Client</td><td>{{rr.client}}</td></tr>\n          <tr><td style=\"font-weight: bold\">Application</td><td>{{rr.application}}</td></tr>\n          <tr><td style=\"font-weight: bold\">Duration</td><td>{{rr.duration}}</td></tr>\n          <tr><td style=\"font-weight: bold\">Software Platform</td><td>{{rr.sofwarePlatform}}</td></tr>\n          <tr><td style=\"font-weight: bold\">Designation</td><td>{{rr.designation}}</td></tr>\n          <tr><td style=\"font-weight: bold\">Responsibility</td><td>\n              <ul>\n                <li *ngFor=\"let str of rr.responsiblities\">{{str}}</li>\n              </ul>\n            </td>\n          </tr>\n          <tr *ngIf=\"rr.achievments[0]\"><td style=\"font-weight: bold\"></td>\n            <td>\n              <div style=\"font-weight: bold\"> Special Achievments</div>\n              <ul>\n                <li *ngFor=\"let str of rr.achievments\">{{str}}.</li>\n              </ul>\n            </td>\n          </tr>\n          <tr *ngIf=\"rr.tools[0]\"><td style=\"font-weight: bold\"></td>\n            <td>\n              <div style=\"font-weight: bold\"> Self Initiated Tools</div>\n              <ul>\n                <li *ngFor=\"let str of rr.tools\">{{str}}.</li>\n              </ul>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n      <hr style=\"border-top:dashed; border-width:3px\">\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/about-simron/resume-compressed/resume-compressed.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mtop40 {\n  margin-top: 40px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about-simron/resume-compressed/resume-compressed.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResumeCompressedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ResumeCompressedComponent = (function () {
    function ResumeCompressedComponent(activeModal) {
        this.activeModal = activeModal;
    }
    ResumeCompressedComponent.prototype.ngOnInit = function () {
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
                achievments: [],
                tools: []
            }
        ];
    };
    return ResumeCompressedComponent;
}());
ResumeCompressedComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-resume-compressed',
        template: __webpack_require__("../../../../../src/app/about-simron/resume-compressed/resume-compressed.component.html"),
        styles: [__webpack_require__("../../../../../src/app/about-simron/resume-compressed/resume-compressed.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */]) === "function" && _a || Object])
], ResumeCompressedComponent);

var RoleAndResp = (function () {
    function RoleAndResp() {
    }
    return RoleAndResp;
}());
var _a;
//# sourceMappingURL=resume-compressed.component.js.map

/***/ }),

/***/ "../../../../../src/app/about-simron/resume/resume.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"doc2\" class=\"yui-t7\">\n\t<div id=\"inner\">\n\t\n\t\t<div id=\"hd\">\n\t\t\t<div class=\"yui-gc\">\n\t\t\t\t<div class=\"yui-u first\">\n\t\t\t\t\t<h1>Simron Deep Singh</h1>\n\t\t\t\t\t<h2>Solution Architect</h2>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"yui-u\">\n\t\t\t\t\t<div class=\"contact-info\">\n\t\t\t\t\t\t<h3><a href=\"mailto:simron.singh@gmail.com\">simron.singh@gmail.com</a></h3>\n\t\t\t\t\t\t<h3>+1 (630) - 329-3516</h3>\n\t\t\t\t\t\t<h3>Schaumburg, IL - 60173</h3>\n\t\t\t\t\t</div><!--// .contact-info -->\n\t\t\t\t</div>\n\t\t\t</div><!--// .yui-gc -->\n\t\t</div><!--// hd -->\n\n\t\t<div id=\"bd\">\n\t\t\t<div id=\"yui-main\">\n\t\t\t\t<div class=\"yui-b\">\n\n\t\t\t\t\t<div class=\"yui-gf\">\n\t\t\t\t\t\t<div class=\"yui-u first\">\n\t\t\t\t\t\t\t<h2>Profile</h2>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"yui-u\">\n\t\t\t\t\t\t\t<p class=\"enlarge\">\n\t\t\t\t\t\t\t\tLooking for an opportunity to make difference in IT industry by automation and innovation to make better software. \n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div><!--// .yui-gf -->\n\n\t\t\t\t\t<div class=\"yui-gf\">\n\t\t\t\t\t\t<div class=\"yui-u first\">\n\t\t\t\t\t\t\t<h2>Skills</h2>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"yui-u\">\n\n\t\t\t\t\t\t\t\t<div class=\"talent\">\n\t\t\t\t\t\t\t\t\t<h3>Solution</h3>\n\t\t\t\t\t\t\t\t\t<p>Exploiting existing product features with innovation while kepping in mind futuere needs.</p>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"talent\">\n\t\t\t\t\t\t\t\t\t<h3>Development</h3>\n\t\t\t\t\t\t\t\t\t<p>Deliverying software which is robust, responsive, fast and maintenable.</p>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"talent\">\n\t\t\t\t\t\t\t\t\t<h3>Support</h3>\n\t\t\t\t\t\t\t\t\t<p>Quick workaround for immediate relief with automation capabilites</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div><!--// .yui-gf -->\n\n\t\t\t\t\t<div class=\"yui-gf\">\n\t\t\t\t\t\t<div class=\"yui-u first\">\n\t\t\t\t\t\t\t<h2>Technical</h2>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"yui-u\">\n\t\t\t\t\t\t\t<ul class=\"talent\">\n                <h3>Languages</h3>\n\t\t\t\t\t\t\t\t<li>Java(10)</li>\n\t\t\t\t\t\t\t\t<li>EJB(8)</li>\n\t\t\t\t\t\t\t\t<li>Javascript(3)</li>\n\t\t\t\t\t\t\t\t<li>jQuery(4)</li>\n\t\t\t\t\t\t\t\t<li>Spring(8)</li>\n\t\t\t\t\t\t\t\t<li>Struts(7)</li>\n\t\t\t\t\t\t\t\t<li>JMS(7)</li>\n\t\t\t\t\t\t\t\t<li class=\"last\">REST(4)</li>\n\t\t\t\t\t\t\t</ul>\n\n\t\t\t\t\t\t\t<ul class=\"talent\">\n                <h3>Framework</h3>\n\t\t\t\t\t\t\t\t<li>JSF(5)JSP(8)</li>\n\t\t\t\t\t\t\t\t<li>JAX-WS(8)</li>\n\t\t\t\t\t\t\t\t<li>Hibernate(7)JPA(5)</li>\n\t\t\t\t\t\t\t\t<li>RxJava(2)</li>\n\t\t\t\t\t\t\t\t<li>AngularJS(2)</li>\n\t\t\t\t\t\t\t\t<li>Ajax(8)</li>\n\t\t\t\t\t\t\t\t<li class=\"last\">CVS/Perfroce/XtraC</li>\n\t\t\t\t\t\t\t</ul>\n\n\t\t\t\t\t\t\t<ul class=\"talent\">\n                <h3>Tools</h3>\n\t\t\t\t\t\t\t\t<li>Perl Scripting(8)</li>\n\t\t\t\t\t\t\t\t<li>Shell Scripting(9)</li>\n\t\t\t\t\t\t\t\t<li>PL/SQL(9)</li>\n\t\t\t\t\t\t\t\t<li>ARM SDK 500(7)</li>\n\t\t\t\t\t\t\t\t<li>Windows 98 to 10</li>\n\t\t\t\t\t\t\t\t<li>Redhat Linux</li>\n\t\t\t\t\t\t\t\t<li>Sun Solaris 9</li>\n\t\t\t\t\t\t\t\t<li class=\"last\">Juniper Router/Switches</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div><!--// .yui-gf-->\n\n\t\t\t\t\t<div class=\"yui-gf\">\n\t\t\t\t\t\t<div class=\"yui-u first\">\n\t\t\t\t\t\t\t<h2>Summary</h2>\n\t\t\t\t\t\t</div><!--// .yui-u -->\n\n\t\t\t\t\t\t<div class=\"yui-u\">\n\t\t\t\t\t\t\t<ul class=\"some\">\n\t\t\t\t\t\t\t\t<li>12.5+ years in software development with Amdocs and Ericsson.</li>\n\t\t\t\t\t\t\t\t<li>I served in Telecom domain specifically  with order management</li>\n\t\t\t\t\t\t\t\t<li>Worked for clients Telefonica Chile(17-), Comcast(16-17), Telefonica Argentina(15-16), US Cellular(14-16), AMX One(11-14), Rogers Canada(9-11), Sprint.USA(6-9), Dishent(5-6), Airtel India(4-5) *2005 is written as 5</li>\n\t\t\t\t\t\t\t\t<li>My key persontality traits are innovation and insightfulness. With these traits I have been able to exceed expectations. My innovation list includes numerous tools, quick fixes of problems and resolution of key issues.</li>\n\t\t\t\t\t\t\t\t<li>I have been involved in every phase of development cycle solutions, scoping, design, coding, testing, supporting, managing team, and training, cross site team management.</li>\n\t\t\t\t\t\t\t\t<li>I have had role of product owner, security leader, FOSS implementation, tools implementation, performance check.</li>\n\t\t\t\t\t\t\t\t<li>I have worked for Rogers, Sprint, Comcast, AT&T, AMX One Columbia/Chile, Telefonica Argentina/Chile, USCellular, Vodafone NL, Telesonera Finland </li>\n\t\t\t\t\t\t\t\t<li class=\"last\">Currently I am managing “Order To Activation” service which includes providing quick production solution, automation of solutions, keeping customer informed about production status, creating tools, training team.</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div><!--// .yui-u -->\n\t\t\t\t\t</div><!--// .yui-gf -->\n\n\t\t\t\t\t<div class=\"yui-gf\">\n\t\n\t\t\t\t\t\t<div class=\"yui-u first\">\n\t\t\t\t\t\t\t<h2>Experience</h2>\n\t\t\t\t\t\t</div><!--// .yui-u -->\n\n\t\t\t\t\t\t<div class=\"yui-u\">\n\t\t\t\t\t\t\t<ul class=\"talent\">\n\t\t\t\t\t\t\t\t<li>Amdocs Inc.</li>\n\t\t\t\t\t\t\t\t<li>Business Analyst</li>\n\t\t\t\t\t\t\t\t<li class=\"last\">2014-tillToday</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t<ul class=\"talent\">\n\t\t\t\t\t\t\t\t<li>Amdocs DVCI</li>\n\t\t\t\t\t\t\t\t<li>Development Expert</li>\n\t\t\t\t\t\t\t\t<li class=\"last\">2006-2014</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t<ul class=\"talent\">\n\t\t\t\t\t\t\t\t<li>Ericsson</li>\n\t\t\t\t\t\t\t\t<li>Support Engineer</li>\n\t\t\t\t\t\t\t\t<li class=\"last\">2004-2006</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div><!--// .yui-u -->\n\t\t\t\t\t</div><!--// .yui-gf -->\n\n\n\t\t\t\t\t<div class=\"yui-gf last\">\n\t\t\t\t\t\t<div class=\"yui-u first\">\n\t\t\t\t\t\t\t<h2>Education</h2>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"yui-u\">\n\t\t\t\t\t\t\t<h3>Amity School of Engineering and Technology of G.G.S.I.P.U.(Indraprashta University) - Delhi, India</h3>\n\t\t\t\t\t\t\t<h3>Bachelor of Technology in Electronics and Communication </h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div><!--// .yui-gf -->\n\n\n\t\t\t\t</div><!--// .yui-b -->\n\t\t\t</div><!--// yui-main -->\n\t\t</div><!--// bd -->\n\n\t\t<!--div id=\"ft\">\n\t\t\t<p>Simron Deep Singh &mdash; <a href=\"mailto:simron.singh@gmail.com\">simron.singh@gmail.com</a> &mdash; +1 (630) - 329-3516</p>\n\t\t</div><!--// footer -->\n\n\t</div><!-- // inner -->\n\n\n</div><!--// doc -->\n"

/***/ }),

/***/ "../../../../../src/app/about-simron/resume/resume.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".msg {\n  padding: 10px;\n  background: #222;\n  position: relative; }\n\n.msg h1 {\n  color: #fff; }\n\n.msg a {\n  margin-left: 20px;\n  background: #408814;\n  color: white;\n  padding: 4px 8px;\n  text-decoration: none; }\n\n.msg a:hover {\n  background: #266400; }\n\n/* //-- yui-grids style overrides -- */\nbody {\n  font-family: Georgia;\n  color: #444; }\n\n/* #inner { padding: 10px 80px; margin: 80px auto; background: #f5f5f5; border: solid #666; border-width: 8px 0 2px 0; } */\n#inner {\n  padding: 10px 80px;\n  background: #f5f5f5;\n  border: solid #666;\n  border-width: 8px 0 2px 0; }\n\n.yui-gf {\n  margin-bottom: 2em;\n  padding-bottom: 2em;\n  border-bottom: 1px solid #ccc; }\n\n/* //-- header, body, footer -- */\n#hd {\n  margin: 2.5em 0 3em 0;\n  padding-bottom: 1.5em;\n  border-bottom: 1px solid #ccc; }\n\n#hd h2 {\n  text-transform: uppercase;\n  letter-spacing: 2px; }\n\n/* #bd, #ft { margin-bottom: 2em; } */\n/* //-- footer -- */\n#ft {\n  padding: 1em 0 5em 0;\n  font-size: 92%;\n  border-top: 1px solid #ccc;\n  text-align: center; }\n\n#ft p {\n  margin-bottom: 0;\n  text-align: center; }\n\n/* //-- core typography and style -- */\n#hd h1 {\n  font-size: 44px;\n  text-transform: uppercase;\n  letter-spacing: 3px; }\n\nh2 {\n  font-size: 152%; }\n\nh3, h4 {\n  font-size: 122%; }\n\nh1, h2, h3, h4 {\n  color: #333; }\n\np {\n  font-size: 100%;\n  line-height: 18px;\n  padding-right: 3em; }\n\na {\n  color: #990003; }\n\na:hover {\n  text-decoration: none; }\n\nstrong {\n  font-weight: bold; }\n\nli {\n  line-height: 24px;\n  border-bottom: 1px solid #ccc; }\n\np.enlarge {\n  font-size: 144%;\n  padding-right: 6.5em;\n  line-height: 24px; }\n\np.enlarge span {\n  color: #000; }\n\n.contact-info {\n  margin-top: 7px; }\n\n.first h2 {\n  font-style: italic; }\n\n.last {\n  border-bottom: 0; }\n\n/* //-- section styles -- */\na#pdf {\n  display: block;\n  float: left;\n  background: #666;\n  color: white;\n  padding: 6px 50px 6px 12px;\n  margin-bottom: 6px;\n  text-decoration: none; }\n\na#pdf:hover {\n  background: #222; }\n\n.job {\n  position: relative;\n  margin-bottom: 1em;\n  padding-bottom: 1em;\n  border-bottom: 1px solid #ccc; }\n\n.job h4 {\n  position: absolute;\n  top: 0.35em;\n  right: 0; }\n\n.job p {\n  margin: 0.75em 0 3em 0; }\n\n.last {\n  border: none; }\n\n.skills-list ul {\n  margin: 0; }\n\n.skills-list li {\n  margin: 3px 0;\n  padding: 3px 0; }\n\n.skills-list li span {\n  font-size: 152%;\n  display: block;\n  margin-bottom: -2px;\n  padding: 0; }\n\n.talent {\n  width: 32%;\n  float: left; }\n\n.talent h2 {\n  margin-bottom: 6px; }\n\n#srt-ttab {\n  margin-bottom: 100px;\n  text-align: center; }\n\n#srt-ttab img.last {\n  margin-top: 20px; }\n\n/* --// override to force 1/8th width grids -- */\n.yui-gf .yui-u {\n  width: 80.2%; }\n\n.yui-gf div.first {\n  width: 12.3%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about-simron/resume/resume.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResumeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ResumeComponent = (function () {
    function ResumeComponent(activeModal) {
        this.activeModal = activeModal;
    }
    ResumeComponent.prototype.ngOnInit = function () {
    };
    return ResumeComponent;
}());
ResumeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-resume',
        template: __webpack_require__("../../../../../src/app/about-simron/resume/resume.component.html"),
        styles: [__webpack_require__("../../../../../src/app/about-simron/resume/resume.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */]) === "function" && _a || Object])
], ResumeComponent);

var _a;
//# sourceMappingURL=resume.component.js.map

/***/ }),

/***/ "../../../../../src/app/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>This platform is created with two purpose.</h3>\n<br>\n<ol>\n  <li>\n    Experiment with latest technology to satisfy my curosity. This includes\n    <ul>\n      <li>AWS Deployment with .. AWS MySQL, EC2, S3</li>\n      <li>Angular 5 with .. npm, nodejs, bootstrap 4.0</li>\n      <li>Java 8</li>\n      <li>Spring Boot with .. Junit, Maven</li>\n      <li>Git repository</li>\n      <li>Android with 3.0 SDK & Gradle</li>\n    </ul>\n  </li>\n  <br>\n  <li>\n    Catalog tools which I cherish created in my spare time.\n    <ul>\n      <li>Which I can use today</li>\n      <li>Reminding myself about what all is doable</li>\n      <li>Reminder for implemented logic</li>\n    </ul>\n  </li>\n</ol>\n"

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-about',
        template: __webpack_require__("../../../../../src/app/about/about.component.html"),
        styles: [__webpack_require__("../../../../../src/app/about/about.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../src/app/amdocs/amdocs.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal-xxl .modal-lg {\r\n    max-width: 90%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/amdocs/amdocs.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  Exception finder\n</p>\n<p>\n  Product structure verification\n</p>\n<p>\n  Task emailer\n</p>\n<p>\n  Production db update validator\n</p>\n<div class=\"list-group\">\n  <a (click)=\"open('xtc')\" class=\"list-group-item list-group-item-action flex-column align-items-start\">\n    <div class=\"d-flex w-100 justify-content-between\">\n      <h5 class=\"mb-1\">Xtra-C</h5>\n      <small>Nov 2008</small>\n    </div>\n    <p class=\"mb-1\">\n    This is the most cherished tool from this set. I was given a manual boring task as part of monthly rotation in team.\n    Felt like I can't do this. Task was to let team know about their <span title=\"\n    Merge task - During development phase you save your work in a repository. \n    Your peer work will depend upon that so they need to take it and add it in their work.\n    'Take' is known as pull, 'Save' is known as check-in, 'Add' is known as merge, 'Work' is known as task.\n    There were two release running in parallel one in development phase another in production phase.\n    Development phase people check-in their requirement related task. Production phase people check-in their fixes related task.\n    Production phase task is required to be merged with development phase task which is known as merge task.\"\n    style=\"color:deepskyblue; cursor:help;\">merge task</span>.\n    If people are organized enough then this work is not required. However fact is for X reasons people don't check-in their merge task.\n    These task reviewr doesn't perform review. So all need reminder with their superior in CC to pressusrise them in reassesing their priorities.\n    Hence the requirement of this manual effort. Since the day it get created everyone life as saved.\n    I took the access of database where Xtra-C store its information. Browsed through table to figure out where is the information which I need.\n    Wrote java program which reads data compile it in html send it in email. Email was configured to\n    </p>\n    <ul>\n      <li>Send individual reminder.</li>\n      <li>After threshold individual reminder with their manager in CC</li>\n      <li>Aggregate all task with assigne, reviewer, aging information and send email to team</li>\n    </ul>\n    <small>-_-_-_-_-_-_-_-_-_-_-_-_-_</small>\n  </a>\n  <a (click)=\"open('fta')\" class=\"list-group-item list-group-item-action flex-column align-items-start\">\n    <div class=\"d-flex w-100 justify-content-between\">\n      <h3 class=\"mb-1\">Fallout Trend Analyzer</h3>\n      <small>May 2016</small>\n    </div>\n    Idea behind this tool was to give concise information which can help us in understanding fallout trend \n    thus helping in understanding pattern which cause fallout. That will lead to root cause\n    <ul>\n      <li>\n        <b><ins>Quick Scan</ins></b>\n        <ol type=\"I\">\n          <li>It offers no delay in seeing graphs for various activity. Data is cached on it is first launched.</li>\n          <li>You can switch sample size to see how exactly it behaves (15min to 6hrs)</li>\n          <li>Rest button to load data again</li>\n        </ol>\n      </li>\n      <li>\n        <b><ins>Detail Scan</ins></b>\n        <ol type=\"I\">\n          <li>It provides various filters which help in analysis. For e.g. you can find how many Change Mass orders got failed and successfully passed.</li>\n          <li>It caches result for each activity so jumping back is quick. But first load is slower as it pulls detailed information form DB.</li>\n          <li>It shows multiple lines if you want to see comparison between type. For e.g. failed orders vs non failed.</li>\n        </ol>\n      </li>\n    </ul>\n    <small>-_-_-_-_-_-_-_-_-_-_-_-_-_</small>\n  </a>\n    <a (click)=\"open('elfc')\" class=\"list-group-item list-group-item-action flex-column align-items-start\">\n      <div class=\"d-flex w-100 justify-content-between\">\n        <h3 class=\"mb-1\">Email Log from cluster</h3>\n        <small>Sep 2016</small>\n      </div>\n      <p class=\"mb-1\">\n        Fetching information from log is common practice either to share information or for easy browsing access on local.\n        For order, log tell us in which stage/activity problem exist.\n        This adds to effort of finding on which server in cluster that log would be present and finding relevant activity of your order.\n        If you have to hop many server just to reach your log then it becomes killer.\n        This tool saves all this where user just need to tell what order he is intersted in and rest is taken by the tool.\n        Also it is made specific to request/response part as 95% of time we are interested in that information only. \n      </p>\n      There are two modes.\n      <ul>\n        <li>Order Mode : You can provide order action id and it will figure out last stage and send logs for it </li>\n        <li>Stage Mode : Provide stage id and select request or enter manually if doesn’t exist. </li>\n      </ul>\n      <small>-_-_-_-_-_-_-_-_-_-_-_-_-_</small>\n    </a>\n    <a (click)=\"open('pla')\" class=\"list-group-item list-group-item-action flex-column align-items-start\">\n      <div class=\"d-flex w-100 justify-content-between\">\n        <h3 class=\"mb-1\">Performance Log Analysis</h3>\n        <small>Oct 2011</small>\n      </div>\n      <p class=\"mb-1\">\n        Performance log have execution time information for many entities. Its a time consuming effort to read log and find impacted area.\n        Performance analysis done on local machine generally doesn't help. As DB latency and API performance varies grately in local machine from production.\n        Before final performance testing which happens near UAT, we want to do it sooner so that issues can be fixed during development timeitself.\n        Development phase is cheapest time to fix performance issue. To reduce manual effort of reading performance log this tool is created.\n        It uses ordering stage and phase information to highlight performance issue. \n        Best part is grouping of information which is achieved by html and javascript. \n        And omoting very small value. Which helps in removing lots of cluster.\n        On expanding information is shown in tabular form with minimal information. So that analysis of log is matter of second.\n        30 rules were created to identify which performance impact can be ignored. Like parent-child relation, 0 value etc.\n        Anything deeper then that will require profiler for analysis.\n        Plus a bifercation of time spent on DB and API related activity.\n      </p>\n      <ul>\n        <li>Grey button shows activities which are participating in flow.</li>\n        <li>Blue button shows all the methods/API/DB calls involved during whole process</li>\n        <li>Red button shows also those methos/API/DB calls were parsed from log but not taken into consideration due to configured reasons.</li>\n      </ul>\n    </a>\n    <a (click)=\"open('lth')\" class=\"list-group-item list-group-item-action flex-column align-items-start\">\n      <div class=\"d-flex w-100 justify-content-between\">\n        <h5 class=\"mb-1\">LogToHtmlConverter </h5>\n      </div>\n      <small>Oct 2010, V2 Mar 2012</small>\n      <p class=\"mb-1\">Reading log file is a nightmare when you have multiple orders running in parallel and writing to same log.\n        And that parallel order number is huge as there are multiple servers which are running orders in parallel.\n        There is good chance that all your is not in same log file.\n        This tool comes into picture as a saviour between all this crises.\n      </p>\n      <ol>\n        <li>It groups all order related log under one button which is representing order id</li>\n        <li>In side order it groups further log into order stages </li>\n        <li>Grouping doesn't end here, in each stage it group Exception & API request/response also.</li>\n        <li>Everything expandable/colapsable at click of button. With red color for exception and blue one for request/response</li>\n        <li>It helps more by dimming log which you are not intersted in, thus further improving readablity. Configurable.</li>\n        <li>At end little summary grouped based on error, it list down order for that error</li>\n        <li>It will also get the logs from server by ftp</li>\n      </ol>\n    </a>\n    <a (click)=\"open('sr')\" class=\"list-group-item list-group-item-action flex-column align-items-start\">\n      <div class=\"d-flex w-100 justify-content-between\">\n        <h5 class=\"mb-1\">Status Reporting based on query</h5>\n      </div>\n      <small>Aug 2014</small>\n      <p class=\"mb-1\">\n        During production stage various type of information is required like daily progress items and problems items.\n        Manually fetching and sharing this information is very tedius work.\n        This tool helps in doing that work. \n        User need to provide query which fetches information, subject & email id in configuration file.\n        Then just schedule it in crontab with application and configuration file as argument.\n        It supports multiple queries as well.\n      </p>\n    </a>\n    <a (click)=\"open('sus')\" class=\"list-group-item list-group-item-action flex-column align-items-start\">\n      <div class=\"d-flex w-100 justify-content-between\">\n        <h5 class=\"mb-1\">Server Up Status</h5>\n        <small>Mar 2013</small>\n      </div>\n      <p class=\"mb-1\">Some time we need quick view of env to know status whether servers are up or not.\n          http://simrond09:8181/ProcedureSite/AMX/UnixServerStatus.jsp this tool give you same.\n          It will be most useful to us when testing team start using it and doesn’t open defect which is caused by env being down.\n          Let me know your suggestions for same.\n          </p>\n      <ul>\n        <li>Application level bean is used to </li>\n      </ul>\n      <small>/UnixServerStatus.jsp -_-_-_-_-_-_-_-_-_-_-_-_-_</small>\n    </a>\n    <a (click)=\"open('sdu')\" class=\"list-group-item list-group-item-action flex-column align-items-start\">\n      <div class=\"d-flex w-100 justify-content-between\">\n        <h3 class=\"mb-1\">Safe DB Update</h3>\n        <small>Apr 2016</small>\n      </div>\n      Human error is big threat to data when update runs on production data. This tool is created to prevent it. \n      Not good enough, consider it as POC. It works for simple query only.\n      I used it for generating tracking information with old and new value. Which we have to do.\n      <ul>\n        <li>It checks for count. Count will confirm your intention how many rows you are expecting to update.</li>\n        <li>Support basic validations</li>\n        <li>Help in creating tracking entry. Tracking changes is must for production data. \n          This tool create query which extracts new and old value to store in tracking table</li>\n      </ul>\n      <small>-_-_-_-_-_-_-_-_-_-_-_-_-_</small>\n    </a>\n    <a (click)=\"open('bfc')\" class=\"list-group-item list-group-item-action flex-column align-items-start\">\n      <div class=\"d-flex w-100 justify-content-between\">\n        <h3 class=\"mb-1\">BPM Flow creator</h3>\n        <small>Dec 2014</small>\n      </div>\n      <p class=\"mb-1\">Amdocs business process manager support GUI based flow creation and stores generated flow in xml.\n        Most of the time only xml is availble to analysis. Which was difficult to understand and impossible to create complete flow picture.\n        Created this tool to create flow which is written in xml. There are multiple ways to represent flow information.\n        Experimented with different view and found pointer/reference based presentation is more clearer. Added X indentifer at suffix to tell this is pointer.\n      </p>\n    </a>\n    <a (click)=\"open('fta')\" class=\"list-group-item list-group-item-action flex-column align-items-start\">\n      <div class=\"d-flex w-100 justify-content-between\">\n        <h5 class=\"mb-1\">Product Integrity Check</h5>\n      </div>\n      <p class=\"mb-1\">XX</p>\n    </a>\n    <a (click)=\"open('fta')\" class=\"list-group-item list-group-item-action flex-column align-items-start\">\n      <div class=\"d-flex w-100 justify-content-between\">\n        <h5 class=\"mb-1\">Product Validator</h5>\n      </div>\n      <p class=\"mb-1\">XX</p>\n    </a>\n    <a (click)=\"open('fta')\" class=\"list-group-item list-group-item-action flex-column align-items-start\">\n      <div class=\"d-flex w-100 justify-content-between\">\n        <h5 class=\"mb-1\">Stuck order error group creator</h5>\n      </div>\n      <p class=\"mb-1\">XX</p>\n    </a>\n    <a (click)=\"open('fta')\" class=\"list-group-item list-group-item-action flex-column align-items-start\">\n      <div class=\"d-flex w-100 justify-content-between\">\n        <h5 class=\"mb-1\">Jar fetcher</h5>\n      </div>\n      <p class=\"mb-1\">XX</p>\n    </a>\n    <a (click)=\"open('fta')\" class=\"list-group-item list-group-item-action flex-column align-items-start\">\n      <div class=\"d-flex w-100 justify-content-between\">\n        <h5 class=\"mb-1\">Complete order log emailing</h5>\n      </div>\n      <p class=\"mb-1\">XX</p>\n    </a>\n    <a (click)=\"open('fta')\" class=\"list-group-item list-group-item-action flex-column align-items-start\">\n      <div class=\"d-flex w-100 justify-content-between\">\n        <h5 class=\"mb-1\">Graph creator</h5>\n      </div>\n      <p class=\"mb-1\">XX</p>\n    </a>\n    <a (click)=\"open('fta')\" class=\"list-group-item list-group-item-action flex-column align-items-start\">\n      <div class=\"d-flex w-100 justify-content-between\">\n        <h5 class=\"mb-1\">SQL Validator and Tracker</h5>\n      </div>\n      <p class=\"mb-1\">XX</p>\n    </a>\n    <a (click)=\"open('fta')\" class=\"list-group-item list-group-item-action flex-column align-items-start\">\n      <div class=\"d-flex w-100 justify-content-between\">\n        <h5 class=\"mb-1\">TRB request creator</h5>\n      </div>\n      <p class=\"mb-1\">XX</p>\n    </a>\n    <a (click)=\"open('fta')\" class=\"list-group-item list-group-item-action flex-column align-items-start\">\n      <div class=\"d-flex w-100 justify-content-between\">\n        <h5 class=\"mb-1\">BPT Verification</h5>\n      </div>\n      <p class=\"mb-1\">XX</p>\n    </a>\n    <a (click)=\"open('fta')\" class=\"list-group-item list-group-item-action flex-column align-items-start\">\n      <div class=\"d-flex w-100 justify-content-between\">\n        <h5 class=\"mb-1\">Reason code reconciliation tool</h5>\n      </div>\n      <p class=\"mb-1\">We need a new section and form for collecting information about reason codes.\n          It is required to solve synching problem of reason codes among various applications.\n          If OMS creates a new entry then EPC/Invoicing/RLC/CM must update it.\n          If CRM or Collection creates a new entry then OMS/EPC/Invoicing/RLC/CM must update it.\n          Affected application will check the checkbox in the form, marking they have implemented it.\n          \n          </p>\n    </a>\n    <a (click)=\"open('fta')\" class=\"list-group-item list-group-item-action flex-column align-items-start\">\n      <div class=\"d-flex w-100 justify-content-between\">\n        <h5 class=\"mb-1\">Sonar</h5>\n      </div>\n      <p class=\"mb-1\">Hi,\n          \n          Currently Sonar report generation tool doesn’t create report in below shown format.\n          We need this format in order to distribute efforts of fixing errors. Generally we provide a developer set of classes which contain specified Critical/Major errors.\n          \n          Priority\n          Package\n          Class\n          Error\n          LineNumber\n          Tool\n          MAJOR\n          amdocs.oms.cust.aamintegration.builder,\n          EndUserCustomerPropertiesDecorator,\n          Unused private method\n          57\n          pmd\n          \n          Beside report generation it also performing filtering part.\n          It will consider only those classes which has package starting from “amdocs.oms.cust”\n          It will filter out APM auto generated classes. By looking for pattern in class name that is all characters are capital.\n          \n          Its usage\n          C:\\del>java -jar XMLParser.jar\n          Result.xls is created\n          \n          Pre-requisite\n          Need 4 files at location where jar is being run from.\n          pmd-result.xml, checkstyle-result.xml, findbugs-result.xml – These can be found in .sonar folder of Sonar Runner.\n          NOTE: In order to generate checkstyle-result.xml you need to add “sonar.checkstyle.generateXml = true” at end of the file of “sonar-project.properties” which is located in bin folder of Sonar Runner\n          rules.csv – This is generated from sonar. Below is screen shot for same.\n          </p>\n    </a>\n    <a (click)=\"open('fta')\" class=\"list-group-item list-group-item-action flex-column align-items-start\">\n      <div class=\"d-flex w-100 justify-content-between\">\n        <h5 class=\"mb-1\">HF Dependency Resolver</h5>\n      </div>\n      <p class=\"mb-1\">I have created a tool which works on the HF report generated from AMC. You need to run “run.bat” in order to execute it.\n          It includes yesterday report for which you can generate analysis.\n          \n          NOTE: It might not cover all the scenario. So suggestion is to take information from the analysis and send it to application team for confirmation. Something in a format like “HF2 exist which is same as HF1 so we should reject HF1, please confirm”. As of now Logic works on Deployed/UnDeployed/Rejected status. May be in future we can use other status in the analysis.\n          \n          Steps for getting report from AMC.\n          Login into AMC\n          Click on “Transactions Report”\n          Select OMS as application.\n          Select date range.\n          Save the report\n          Open this report\n          Remove first two rows.\n          While saving it will prompt you to save in another format. Select xls of 97-2003.\n          Update the name of report on run.bat\n          Click on run.bat\n          Analysis excel will be opened.\n          Put filter and take HF Id highlighted in grey.\n          \n          Also it can used for other applications\n          \n          2months report suggest that we need reject following. We are working on it.\n          </p>\n    </a>\n    <a (click)=\"open('fta')\" class=\"list-group-item list-group-item-action flex-column align-items-start\">\n      <div class=\"d-flex w-100 justify-content-between\">\n        <h5 class=\"mb-1\">GDD</h5>\n      </div>\n      <p class=\"mb-1\">Following are the new features which you might be looking for.\n          GDD Only : If you mark it Y in the property file then only *xml.table files will be shown. It should be used during DB path verification. Do remember to change State to AllWithCompleted. Also update BlackListEnvironment as per requirement.\n          Every user can see all GDD Only files.\n          GDD Only files will be retrieved for last 3 months. \n          Now we can also see empty tasks in the list.\n          \n          Please do send new feature requirement which can help everyone.\n          \n          NOTE: Extract the zip file then run the batch file for generating excel file. Property files resides in properties folder.\n          \n          I am also thinking of having this application as web app. Where everyone can see the results and set the custom filter. If required will click on refresh button to get latest data.\n          Major challenge is having excel like filter on data. Your suggestions are welcome.\n          </p>\n    </a>\n    <a (click)=\"open('fta')\" class=\"list-group-item list-group-item-action flex-column align-items-start\">\n      <div class=\"d-flex w-100 justify-content-between\">\n        <h5 class=\"mb-1\">More</h5>\n      </div>\n      <p class=\"mb-1\">\n          1\n          Xtra-C merge report\n          Working. Attached is associated e-mails.\n          This tool read xtra-c tables to fetch information of tasks (specifically merge task) and sends e-mail to Developer about his tasks which are in development state, sends e-mail to GLs about task which are not yet promoted to reviewer approval, sends e-mail to PMs about task which are in development state as well as in reviewer approval state also create a statistical data for PMs.\n          2\n          LogToHtml\n          Working. Attached is presentation for same with example\n          Works for OMS logs. Can fetch logs from server. Support configuration for Weblogic and Websphere based logging.\n          3\n          Performance Analyser\n          Working. Attached is presentation for same with example.\n          In OMS performance logging we print time taken by various methods/APIs/Queries/Services. This tool reads total time taken by a activity and start subtracting time from it those time which are considered as atomic e.g. API calls and DB calls. Whatever the time is left based on it reports whether there is issue or not.\n          NOTE: we heavily rely on this logging as analyzing from profiling tool (JProfiler) adds its own computation time while performing calculations. Hence performance logging is much more accurate.\n          4\n          Detail Design creator\n          POC\n          \n          \n          5\n          Database view\n          Need Breakthrough\n          \n          \n          6\n          Code and Log Sync\n          Need Breakthrough\n          \n          \n          7\n          Sonar report creator\n          Working. Attached is result.xml for it.\n          Due to absence of Sonar plugin which can provide customizable csv/xls report this tool is created. It reads xml which is generated during sonar run and generated Result.xls with only customization related package (amdocs.oms.cust) hence acting as filter also.\n          8\n          Mht to xml converter\n          Working. Attached is TCsReport.xls for it.\n          QualityCenter allows report to be created only in multimedia html format. But we require it in xml for to performance analysis. Hence this tool read mht file and create desired report.\n          9\n          CustomBufferedReader\n          Working\n          It is similar to BufferedReader class of java but with two additional functionality of stopping application security harms. 1. It will not read more than specified length line. It will not read more than specified size of file. Thus transparently implementing security feature.\n          10\n          ReadJar\n          Working\n          It can search file within jar/ear. Also in child jars. Currently set for depth level 2 only.\n          11\n          OmsDBAnalyser\n          Working\n          It calculates number of offers, products, components and attributes in OMS database. This tool is required when need such data performance estimation of OMS system.\n          12\n          CoreCaseCSVAnalyser\n          Working\n          This tool give difference of two reports which are created from productsupport site. It was required in order to monitor core case state changes and additional of new core cases\n          </p>\n    </a>\n\n    <a (click)=\"open('fta')\" class=\"list-group-item list-group-item-action flex-column align-items-start\">\n      <div class=\"d-flex w-100 justify-content-between\">\n        <h5 class=\"mb-1\">MnP Executor</h5>\n      </div>\n      <p class=\"mb-1\">\n        \n        You need to create MnP in a format so that tool can use it.\n\n          Format standard used is JSON. So you can read in depth about square braces, double quote, commas etc.\n          Anything which you see on left side of colon(:) is static. No change allowed\n          It starts with what input you need to user. Like I used order_action_id, you can give any name.\n          Its recommended to write MnP in lower case in order to avoid accidental string match between query and replaced input parameter\n          Then you write select query to validate input.\n          Same is bound with user friendly message which you want to show to user.\n          NOTE : from select query only 1 row is expected. Select items can only be String.\n          Area defines in which DB query is supposed to execute.\n        Let me know if you have any question.\n          \n        Pending items\n          Encrypted file mechanism implementation.\n          \n        Proposed enhancements\n          Use connection pool, it will result in better user experience as it will feel fast.\n          Make it smart. \n            50 %, Take only OA id as input thus minimizing input from user.\n            70%, Based on form id and error of order action it will decide what all MnPs can be applied.\n            95%, It will decide MnP and run it. If none found then it will report.\n          Extract connection management to file. Will bring flexibility of addition of when MnP require interaction with other application.\n          Auto tracking information creation. It will reduce effort of MnP developer as it he/she won’t have to write tracking sql. Also result in better consistent tracking information.\n          Addition of resend tool. For immediate movement of order.\n          Addition of cancelation tool. For support of cancelation via OMS API.\n          Detail page creation, it will be used for case when no MnP is applicable so that people can find anomalies faster.\n            OMS information.\n            OMS and CM reconciled information.\n            Error check information.\n          Tool limitation removal\n            Only 1 row will be picked from select query\n            Only String input is required from select query\n\n            <\n              \"inputs\" : [\"ORDER_ACTION_ID_X\"],\n              \n              \"queries\" : [\n                              <\n                                              \"area\" : \"PRD3OMS\",\n                                              \"query\" : \"select 1 from tbassignment where form_id = 'AltamiraResponse' and state = 'SF' and order_Action_id = 'ORDER_ACTION_ID_X'\",\n                                              \"message\" : \"Altamira activity not found\",\n                                              \"exception\" : \"\"\n                              >,\n                              <\n                                              \"area\" : \"PRD3OMS\",\n                                              \"query\" : \"select CUSTOMER_ID from tborder_action where order_unit_id = 'ORDER_ACTION_ID_X'\",\n                                              \"message\" : \"Customer not found\",\n                                              \"exception\" : \"\"\n                              >,\n                              <\n                                              \"area\" : \"PRD3CUST\",\n                                              \"query\" : \"create table o2a_tool_altamira_resend as \n                                                              select a.* from trb1_mst_log a, trb1_appl_def b \n                                                              where a.imp_member_id = 2003 and a.actv_code_id != 62 and a.entity_type = 'CUSTOMER' and a.entity_id = 'CUSTOMER_ID' and a.actv_code_id = b.actv_code_id and b.sub_appl_id = 3091 \",\n                                              \"message\" : \"\",\n                                              \"exception\" : \"Table creation failed\"\n                              >,\n                              <\n                                              \"area\" : \"PRD3CUST\",\n                                              \"query\" : \"insert into trb1_sub_log (SUB_APPL_ID,SUB_TRX_ID ,SYS_CREATION_DATE,SYS_UPDATE_DATE ,OPERATOR_ID,APPLICATION_ID ,DL_SERVICE_CODE ,DL_UPDATE_STAMP ,SOURCE_COMP_ID ,MASTER_TRX_ID \n                                                              , GROUP_TRX_SEQ_NO ,ACTV_CODE_ID ,REQ_NOTIFY_CD ,REQ_SEQ_NO ,LEN_BEFORE_COMP ,GENERAL_DATA ,GENERAL_DATA_C ,TRX_STATUS ,TREATMENT_COUNT ,ENTITY_TYPE,ENTITY_ID ,AUDIT_INTERVAL \n                                                              , UNI_LOB_ACT_SIZE ,DEPEN_IND ,PUB_TRX_ID ,BUFFER_ID ,CORRELATION_ID ,AUDIT_INDICATOR ,ORIG_MST_TRX_ID ,GENERAL_FIELD_NUM,GENERAL_FIELD_STRING , PART_DEP_ENT ,CRE_DEP_ENT,ORIG_SUB_TRX_ID \n                                                              ,QUEUE_ID ,AUDIT_SEQ_NUM ,SOURCE_CRE_DATE )select  3091 , trb1_sub_log_1sq.nextval, A.sys_creation_date, A.sys_update_date, A.OPERATOR_ID,A.APPLICATION_ID ,A.DL_SERVICE_CODE ,A.DL_UPDATE_STAMP\n                                                              , A.imp_member_id, A.mst_trx_id,  A.GROUP_TRX_SEQ_NO ,A.ACTV_CODE_ID , A.REQ_NOTIFY_CD , null, A.LEN_BEFORE_COMP ,A.GENERAL_DATA ,A.GENERAL_DATA_C , 'RD', 1, A.ENTITY_TYPE,A.ENTITY_ID \n                                                              ,A.AUDIT_INTERVAL,  A.UNI_LOB_ACT_SIZE , null, A.PUB_TRX_ID ,A.BUFFER_ID ,A.CORRELATION_ID ,A.AUDIT_INDICATOR ,A.MST_TRX_ID , A.GENERAL_FIELD_NUM,A.GENERAL_FIELD_STRING, A.PART_DEP_ENT \n                                                              ,A.CRE_DEP_ENT, trb1_sub_log_1sq.nextval ,0 ,A.AUDIT_SEQ_NUM ,A.SOURCE_CRE_DATE \n                                                              from o2a_tool_altamira_resend A\",\n                                              \"message\" : \"\",\n                                              \"exception\" : \"TRB insert failed\"\n                              >,\n                              <\n                                              \"area\" : \"PRD3CUST\",\n                                              \"query\" : \"drop table o2a_tool_altamira_resend\",\n                                              \"message\" : \"\",\n                                              \"exception\" : \"Table drop failed\"\n                              >\n              ]\n>\n\n          </p>\n      <small>mnp.xhtml-_-_-_-_-_-_-_-_-_-_-_-_-_</small>\n    </a>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/amdocs/amdocs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AmdocsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fallout_trend_analyzer_fallout_trend_analyzer_component__ = __webpack_require__("../../../../../src/app/amdocs/fallout-trend-analyzer/fallout-trend-analyzer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__safe_dbupdate_safe_dbupdate_component__ = __webpack_require__("../../../../../src/app/amdocs/safe-dbupdate/safe-dbupdate.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bpm_flow_creator_bpm_flow_creator_component__ = __webpack_require__("../../../../../src/app/amdocs/bpm-flow-creator/bpm-flow-creator.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__email_server_logs_email_server_logs_component__ = __webpack_require__("../../../../../src/app/amdocs/email-server-logs/email-server-logs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__performance_log_aanalyzer_performance_log_aanalyzer_component__ = __webpack_require__("../../../../../src/app/amdocs/performance-log-aanalyzer/performance-log-aanalyzer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__log_to_html_log_to_html_component__ = __webpack_require__("../../../../../src/app/amdocs/log-to-html/log-to-html.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__status_reporting_status_reporting_component__ = __webpack_require__("../../../../../src/app/amdocs/status-reporting/status-reporting.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__server_up_status_server_up_status_component__ = __webpack_require__("../../../../../src/app/amdocs/server-up-status/server-up-status.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AmdocsComponent = (function () {
    function AmdocsComponent(modalService) {
        this.modalService = modalService;
    }
    AmdocsComponent.prototype.ngOnInit = function () {
        this.option = {
            size: 'lg',
            windowClass: 'modal-xxl'
        };
    };
    AmdocsComponent.prototype.open = function (toolName) {
        if (toolName === 'fta') {
            var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_2__fallout_trend_analyzer_fallout_trend_analyzer_component__["a" /* FalloutTrendAnalyzerComponent */], this.option);
            modalRef.componentInstance.name = 'fta';
        }
        else if (toolName === 'sdu') {
            var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_3__safe_dbupdate_safe_dbupdate_component__["a" /* SafeDBUpdateComponent */], this.option);
        }
        else if (toolName === 'bfc') {
            var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_4__bpm_flow_creator_bpm_flow_creator_component__["a" /* BpmFlowCreatorComponent */], this.option);
        }
        else if (toolName === 'elfc') {
            var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_5__email_server_logs_email_server_logs_component__["a" /* EmailServerLogsComponent */], this.option);
        }
        else if (toolName === 'pla') {
            var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_6__performance_log_aanalyzer_performance_log_aanalyzer_component__["a" /* PerformanceLogAanalyzerComponent */], this.option);
        }
        else if (toolName === 'lth') {
            var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_7__log_to_html_log_to_html_component__["a" /* LogToHtmlComponent */], this.option);
        }
        else if (toolName === 'sr') {
            var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_8__status_reporting_status_reporting_component__["a" /* StatusReportingComponent */], this.option);
        }
        else if (toolName === 'sus') {
            var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_9__server_up_status_server_up_status_component__["a" /* ServerUpStatusComponent */], this.option);
        }
        else if (toolName === 'xyz') {
            var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_2__fallout_trend_analyzer_fallout_trend_analyzer_component__["a" /* FalloutTrendAnalyzerComponent */], this.option);
        }
        else if (toolName === 'xyz') {
            var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_2__fallout_trend_analyzer_fallout_trend_analyzer_component__["a" /* FalloutTrendAnalyzerComponent */], this.option);
        }
        else if (toolName === 'xyz') {
            var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_2__fallout_trend_analyzer_fallout_trend_analyzer_component__["a" /* FalloutTrendAnalyzerComponent */], this.option);
        }
        else if (toolName === 'xyz') {
            var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_2__fallout_trend_analyzer_fallout_trend_analyzer_component__["a" /* FalloutTrendAnalyzerComponent */], this.option);
        }
    };
    return AmdocsComponent;
}());
AmdocsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-amdocs',
        template: __webpack_require__("../../../../../src/app/amdocs/amdocs.component.html"),
        styles: [__webpack_require__("../../../../../src/app/amdocs/amdocs.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]) === "function" && _a || Object])
], AmdocsComponent);

var _a;
//# sourceMappingURL=amdocs.component.js.map

/***/ }),

/***/ "../../../../../src/app/amdocs/bpm-flow-creator/bpm-flow-creator.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n    <h4 class=\"modal-title\">BPM Flow Creator</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n      <div class=\"container-fluid\">\n        <div>\n          <b><ins>Architecture</ins></b>\n          <ul>\n            <li>Java class encapusulated in jar file</li>\n            <li>Reads input xml from filesystem and show output on console</li>\n            <li>Flow structure is created in tree structure</li>\n          </ul>\n        </div>\n        <div>\n          <b><ins>Logic</ins></b>\n          <ul>\n              <li>XML structure divided into blocks which represent information from sourt to destination wich condition information</li>\n              <li>From, To & Condition information is extracted from these blocks</li>\n              <li>From as key and To as value is stored in map</li>\n              <li>Using this map information output is displayed</li>\n          </ul>\n        </div>\n        <div>\n          <b><ins>Enhacement</ins></b>\n          <ul>\n            <li>Export is to web tool and graphically show data. This will include uploading xml file and google word trees chart implementation</li>\n          </ul>\n        </div>\n        <br>\n        <div>\n          <ins>Image 1 <small>(to view larger image right click on it and open in new tab)</small></ins>\n          <img src=\"assets/images/amdocs/BpmMapFlow1.png\" alt=\"1\" class=\"modalimgstyle\">\n        </div>\n      </div>\n    </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click')\">Close</button>\n  </div>\n  "

/***/ }),

/***/ "../../../../../src/app/amdocs/bpm-flow-creator/bpm-flow-creator.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/amdocs/bpm-flow-creator/bpm-flow-creator.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BpmFlowCreatorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BpmFlowCreatorComponent = (function () {
    function BpmFlowCreatorComponent(activeModal) {
        this.activeModal = activeModal;
    }
    BpmFlowCreatorComponent.prototype.ngOnInit = function () {
    };
    return BpmFlowCreatorComponent;
}());
BpmFlowCreatorComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-bpm-flow-creator',
        template: __webpack_require__("../../../../../src/app/amdocs/bpm-flow-creator/bpm-flow-creator.component.html"),
        styles: [__webpack_require__("../../../../../src/app/amdocs/bpm-flow-creator/bpm-flow-creator.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */]) === "function" && _a || Object])
], BpmFlowCreatorComponent);

var _a;
//# sourceMappingURL=bpm-flow-creator.component.js.map

/***/ }),

/***/ "../../../../../src/app/amdocs/email-server-logs/email-server-logs.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n    <h4 class=\"modal-title\">Email Log from cluster</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n      <div class=\"container-fluid\">\n          <div>\n            <b><ins>Architecture</ins></b>\n            <ul>\n              <li>Front end is written in JSF(javax.faces 2.2.0[Mojarra]) with jsf/html(jsf specific html like h:selectManyListbox) jsf/core(jsf tags f:selectItems) jstl/core(for looping c:forEach) tags</li>\n              <li>Apache Tomcat 8.5 is used as web and application server</li>\n              <li>As part of JSF, Managed Bean is used for information back and forth(Session Scoped) information exchange</li>\n              <li>Bean communicates with backend service(bService) for all computation and DB related activity</li>\n              <li>Machine where this application is deployed doesn't have direct communication with DB and other server so tunnel(?MyTunnel) has been setup for it</li>\n              <li>This tool is split into 3 applications as 2 hops are required</li>\n              <li>Connection to another server is achieved with JSCH library for performing SSH</li>\n              <li>Using CLI on server standalone application is launched </li>\n              <li>Email is sent using SMTP server</li>\n              <ol>\n                <li>Application which reside on Tomcat</li>\n                <li>Standalone application as jar on middle server</li>\n                <li>Standalone application as jar on final server for sending email. This duplicated on all servers of cluster</li>\n              </ol>\n            </ul>\n          </div>\n          <div>\n            <b><ins>Logic</ins></b>\n            <ul>This program has two modes so explaining them seperately, along with common logic. This runs in 1st application.\n              <li>Order Mode\n                <ul>\n                  <li>User provide order id</li>\n                  <li>Using this id table is queried to find what stage order is in</li>\n                  <li>For that stage request is identifed</li>\n                </ul>\n              </li>\n              <li>Stage Mode\n                <ul>\n                  <li>Provided stage id is unique among order as well so as input nothing more is expected from user</li>\n                  <li>User will provide request in which is required to be emailed</li>\n                </ul>\n              </li>\n              <li>Common part\n                <ul>\n                  <li>Using stage id information of server and host is identifed.</li>\n                  <li>Few validations before moving to next step</li>\n                  <li>SSH connection is made to target server using JSCH where 2nd application resides</li>\n                  <li>2nd application is launched with required input as argument</li>\n                  <li>2nd application contact final server using same SSH technology</li>\n                  <li>3rd standalone application on final server is launched with required input as argument</li>\n                  <li>3rd application search for logs where required stage information exist</li>\n                  <li>log is parsed to extract request in which user is interested in</li>\n                  <li>Email is sent to user via SMTP server</li>\n                </ul>\n              </li>\n            </ul>\n          </div>\n          <div>\n            <b><ins>Enhacement</ins></b>\n            <ul>\n              <li>Add choice for user for getting complete log of that stage</li>\n            </ul>\n          </div>\n          <br>\n          <div>\n            <ins>Image 1 <small>(to view larger image right click on it and open in new tab)</small></ins>\n            <img src=\"assets/images/amdocs/EmailInterfaceLog1.png\" alt=\"1\" class=\"modalimgstyle\">\n          </div>\n        </div>\n      </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click')\">Close</button>\n  </div>\n  "

/***/ }),

/***/ "../../../../../src/app/amdocs/email-server-logs/email-server-logs.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/amdocs/email-server-logs/email-server-logs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailServerLogsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EmailServerLogsComponent = (function () {
    function EmailServerLogsComponent(activeModal) {
        this.activeModal = activeModal;
    }
    EmailServerLogsComponent.prototype.ngOnInit = function () {
    };
    return EmailServerLogsComponent;
}());
EmailServerLogsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-email-server-logs',
        template: __webpack_require__("../../../../../src/app/amdocs/email-server-logs/email-server-logs.component.html"),
        styles: [__webpack_require__("../../../../../src/app/amdocs/email-server-logs/email-server-logs.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */]) === "function" && _a || Object])
], EmailServerLogsComponent);

var _a;
//# sourceMappingURL=email-server-logs.component.js.map

/***/ }),

/***/ "../../../../../src/app/amdocs/fallout-trend-analyzer/fallout-trend-analyzer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title\">Fallout Trend Analyzer</h4>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n    <div class=\"container-fluid\">\n        <div>\n          <b><ins>Architecture</ins></b>\n          <ul>\n            <li>Front end is written in JSF(javax.faces 2.2.0[Mojarra]) with jsf/html(jsf specific html like h:selectManyListbox) jsf/core(jsf tags f:selectItems) jstl/core(for looping c:forEach) tags</li>\n            <li>Apache Tomcat 8.5 is used as web and application server</li>\n            <li>Google chart is used to display charts</li>\n            <li>As part of JSF Managed Bean is used for information back and forth(Session Scoped) information exchange</li>\n            <li>Bean communicates with backend service(bService) for all computation and DB related activity</li>\n            <li>Machine where this application is deployed doesn't have direct communication with DB so tunnel has been setup for it</li>\n          </ul>\n        </div>\n        <div>\n          <b><ins>Logic</ins></b>\n          <ul>\n            <li>Every 15min Fallout information is stored in table with all characterstic required like type, activity etc.</li>\n            <li>When page is requested then bean get initialized at same time call to bService goes which pull information with default values</li>\n            <li>Default value is also represented as Simple Mode. For quick view of all activity information.</li>\n            <li>If you want to dig deep then switch to detailed view which pull information per activity </li>\n            <li>Since every call to DB is time consuming hence all information is cached in bService. Whenver session timeout then cache get deleted along with bean.</li>\n            <li>Upon selecting an activity javascript method get triger which show graph only for selected activity</li>\n            <li>If you change time interval then calls goes to bean which picks up the data from bService and format it according to selected time interval.</li>\n            <li>Bean provide data required for graph along with activity information, filter information, time interval</li>\n            <li>You can put filtration criteria on graph based on categories. For e.g. you can to see graph only for sepcific type.</li>\n            <li>You can also view graph for all variants of a category using \"All filter options\"</li>\n          </ul>\n        </div>\n        <div>\n          <b><ins>Enhacement</ins></b>\n          <ul>\n            <li>Add zoom functionality to see specific time range.</li>\n            <li>Add dynamic attribute filter.</li>\n            <li>Add geographic and store filter.</li>\n          </ul>\n        </div>\n        <br>\n        <div>\n          <ins>Image 1 <small>(to view larger image right click on it and open in new tab)</small></ins>\n          <img src=\"assets/images/amdocs/FalloutTrendAanalyzer1.png\" alt=\"1\" class=\"modalimgstyle\">\n        </div>\n        <br>\n        <div>\n          <ins>Image 2 <small>(to view larger image right click on it and open in new tab)</small></ins>\n          <img src=\"assets/images/amdocs/FalloutTrendAanalyzer2.png\" alt=\"2\" class=\"modalimgstyle\">\n        </div>\n      </div>\n    </div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click')\">Close</button>\n</div>"

/***/ }),

/***/ "../../../../../src/app/amdocs/fallout-trend-analyzer/fallout-trend-analyzer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modalimgstyleworks {\n  max-height: 100%;\n  max-width: 100%;\n  border-style: solid;\n  border-width: thin;\n  border-radius: 30px;\n  border-color: lightgrey; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/amdocs/fallout-trend-analyzer/fallout-trend-analyzer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FalloutTrendAnalyzerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FalloutTrendAnalyzerComponent = (function () {
    function FalloutTrendAnalyzerComponent(activeModal) {
        this.activeModal = activeModal;
    }
    FalloutTrendAnalyzerComponent.prototype.ngOnInit = function () {
    };
    return FalloutTrendAnalyzerComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], FalloutTrendAnalyzerComponent.prototype, "name", void 0);
FalloutTrendAnalyzerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-fallout-trend-analyzer',
        template: __webpack_require__("../../../../../src/app/amdocs/fallout-trend-analyzer/fallout-trend-analyzer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/amdocs/fallout-trend-analyzer/fallout-trend-analyzer.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */]) === "function" && _a || Object])
], FalloutTrendAnalyzerComponent);

var _a;
//# sourceMappingURL=fallout-trend-analyzer.component.js.map

/***/ }),

/***/ "../../../../../src/app/amdocs/log-to-html/log-to-html.component.html":
/***/ (function(module, exports) {

module.exports = "  \nEnjoyed using this tool. As I know how many tiring hours I had spent on scanning logs.\n#Server Running text indicator\n  ServerRunning = Server started in RUNNING mode\n  \n  #List of Exceptions\n  Exceptions = amdocs.csm3g.exceptions.CMException,amdocs.epi.datamanager.ConnectorException,amdocs.epi.datamanager.ObjectNotFoundException,\n  \n  #List of Request and Response\n  RequestResponse = IServiceabilityServicesCheckServiceabilityInputs,IServiceabilityServicesCheckServiceabilityResults,\n  \n  #Logs text which you don't want to see\n  Garbage = Refreshing the logical date,Logical date retrieved\n  \n  #To fetch detials of step and order action, splitting log with '|', now need column id as it varies log to log (Id start with 0)\n  Step.time = 2\n  Step.step = 6\n  Step.orderAction = 7\n  Step.activity = 8\n  \n\nAttached zip file contains\nWeblogic configuration file LogToHtmlConverter.properties\nWebsphere configuration file LogToHtmlConverter.propertiesWES\nSample stdout_20101123_005457.log and generated html stdout_20101123_005457.log.html\nLogToHtml.jar\n<div class=\"modal-header\">\n  <h4 class=\"modal-title\">Performance Log Analysis</h4>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n    <div class=\"container-fluid\">\n        <div>\n          <b><ins>Architecture</ins></b>\n          <ul>\n            <li>Standalone application process local performance log file with predefined structure</li>\n            <li>Uses configuration file to support different type of logs. For e.g. there is little difference between Websphere and Weblogic logs</li>\n          </ul>\n        </div>\n        <div>\n          <b><ins>Logic</ins></b>\n          <ul>\n              <li>Log is created with pattern which help in identifying key information required to parse log like order id, stage id etc.</li>\n              <li>Configuration file stores information about which delimiter to use for splitting log file which index will contain time, order id etc information</li>\n              <li>It also section for exception and request/response identifers</li>\n              <li>All this configured information is used in parsing log</li>\n              <li>Log till point of server start message is grouped into server startup log</li>\n              <li>Another grouping is created till first order starts</li>\n              <li>From this point onward log is written into map as Map[OrderId,Map[StageId,List[String]]] and then printed into html file with all information</li>\n          </ul>\n        </div>\n        <div>\n          <b><ins>Enhacement</ins></b>\n          <ul>\n            <li>Make is more generic where user can define his own grouping criteria</li>\n          </ul>\n        </div>\n        <br>\n        <div>\n          <ins>Image 1 <small>(to view larger image right click on it and open in new tab)</small></ins>\n          <img src=\"assets/images/amdocs/PerformaneLogAnalyzer1.jpeg\" alt=\"1\" class=\"modalimgstyle\">\n        </div>\n      </div>\n    </div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click')\">Close</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/amdocs/log-to-html/log-to-html.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/amdocs/log-to-html/log-to-html.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogToHtmlComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LogToHtmlComponent = (function () {
    function LogToHtmlComponent(activeModal) {
        this.activeModal = activeModal;
    }
    LogToHtmlComponent.prototype.ngOnInit = function () {
    };
    return LogToHtmlComponent;
}());
LogToHtmlComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-log-to-html',
        template: __webpack_require__("../../../../../src/app/amdocs/log-to-html/log-to-html.component.html"),
        styles: [__webpack_require__("../../../../../src/app/amdocs/log-to-html/log-to-html.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */]) === "function" && _a || Object])
], LogToHtmlComponent);

var _a;
//# sourceMappingURL=log-to-html.component.js.map

/***/ }),

/***/ "../../../../../src/app/amdocs/performance-log-aanalyzer/performance-log-aanalyzer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title\">Performance Log Analysis</h4>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <div class=\"container-fluid\">\n    <div>\n      <b><ins>Architecture</ins></b>\n      <ul>\n        <li>Standalone application process local performance log file with predefined structure</li>\n      </ul>\n    </div>\n    <div>\n      <b><ins>Logic</ins></b>\n      <ul>\n          <li>String is dvided into three parts starting from update, set and where.</li>\n          <li>Few validation like these 3 must exist and one after another.</li>\n          <li>Extract table name, between update and set. some validations</li>\n          <li>Extract column to update and their value between set and where. some validations</li>\n          <li>Extract column and value after where. some validations</li>\n      </ul>\n    </div>\n    <div>\n      <b><ins>Enhacement</ins></b>\n      <ul>\n        <li>Pull logs via ftp/sftp from server</li>\n        <li>Add cluster environment performance log analysis logic</li>\n      </ul>\n    </div>\n    <br>\n    <div>\n      <ins>Image 1 <small>(to view larger image right click on it and open in new tab)</small></ins>\n      <img src=\"assets/images/amdocs/PerformaneLogAnalyzer1.jpeg\" alt=\"1\" class=\"modalimgstyle\">\n    </div>\n  </div>\n</div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click')\">Close</button>\n</div>\n  "

/***/ }),

/***/ "../../../../../src/app/amdocs/performance-log-aanalyzer/performance-log-aanalyzer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/amdocs/performance-log-aanalyzer/performance-log-aanalyzer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerformanceLogAanalyzerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PerformanceLogAanalyzerComponent = (function () {
    function PerformanceLogAanalyzerComponent(activeModal) {
        this.activeModal = activeModal;
    }
    PerformanceLogAanalyzerComponent.prototype.ngOnInit = function () {
    };
    return PerformanceLogAanalyzerComponent;
}());
PerformanceLogAanalyzerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-performance-log-aanalyzer',
        template: __webpack_require__("../../../../../src/app/amdocs/performance-log-aanalyzer/performance-log-aanalyzer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/amdocs/performance-log-aanalyzer/performance-log-aanalyzer.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */]) === "function" && _a || Object])
], PerformanceLogAanalyzerComponent);

var _a;
//# sourceMappingURL=performance-log-aanalyzer.component.js.map

/***/ }),

/***/ "../../../../../src/app/amdocs/safe-dbupdate/safe-dbupdate.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title\">Safe DB Update</h4>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <div class=\"container-fluid\">\n    <div>\n      <b><ins>Architecture</ins></b>\n      <ul>\n        <li>Front end is written in JSF(javax.faces 2.2.0[Mojarra]) with jsf/html(jsf specific html like h:selectManyListbox)\n          jsf/core(jsf tags f:selectItems) jstl/core(for looping c:forEach) tags</li>\n        <li>Apache Tomcat 8.5 is used as web and application server</li>\n        <li>As part of JSF Managed Bean is used for information back and forth(Session Scoped) information exchange</li>\n        <li>Bean communicates with backend service(bService) for all computation and DB related activity</li>\n        <li>Machine where this application is deployed doesn't have direct communication with DB so tunnel(?MyTunnel) has been\n          setup for it</li>\n      </ul>\n    </div>\n    <div>\n      <b><ins>Logic</ins></b>\n      <ul>\n        <li>String is dvided into three parts starting from update, set and where.</li>\n        <li>Few validation like these 3 must exist and one after another.</li>\n        <li>Extract table name, between update and set. some validations</li>\n        <li>Extract column to update and their value between set and where. some validations</li>\n        <li>Extract column and value after where. some validations</li>\n      </ul>\n    </div>\n    <div>\n      <b><ins>Enhacement</ins></b>\n      <ul>\n        <li>Add support to handle complex queries specially with braces.</li>\n      </ul>\n    </div>\n    <br>\n    <div>\n      <ins>Image 1\n        <small>(to view larger image right click on it and open in new tab)</small>\n      </ins>\n      <img src=\"assets/images/amdocs/SafeUpdate1.png\" alt=\"1\" class=\"modalimgstyle\">\n    </div>\n  </div>\n</div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click')\">Close</button>\n</div>"

/***/ }),

/***/ "../../../../../src/app/amdocs/safe-dbupdate/safe-dbupdate.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/amdocs/safe-dbupdate/safe-dbupdate.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafeDBUpdateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafeDBUpdateComponent = (function () {
    function SafeDBUpdateComponent(activeModal) {
        this.activeModal = activeModal;
    }
    SafeDBUpdateComponent.prototype.ngOnInit = function () {
    };
    return SafeDBUpdateComponent;
}());
SafeDBUpdateComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-safe-dbupdate',
        template: __webpack_require__("../../../../../src/app/amdocs/safe-dbupdate/safe-dbupdate.component.html"),
        styles: [__webpack_require__("../../../../../src/app/amdocs/safe-dbupdate/safe-dbupdate.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */]) === "function" && _a || Object])
], SafeDBUpdateComponent);

var _a;
//# sourceMappingURL=safe-dbupdate.component.js.map

/***/ }),

/***/ "../../../../../src/app/amdocs/server-up-status/server-up-status.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title\">Safe Up status</h4>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <div class=\"container-fluid\">\n    <div>\n      <b><ins>Architecture</ins></b>\n      <ul>\n        <li>Front end is written in JSP</li>\n        <li>Apache Tomcat 7 was used as web and application server</li>\n        <li>As part of JSP Java Bean is used for information back and forth(Session Scoped) information exchange</li>\n        <li>Bean communicates with backend service(bService) for all computation</li>\n        <li>bService read config informaiton from a file</li>\n        <li>Using Socket connection it checkes that port is up or not</li>\n      </ul>\n    </div>\n    <div>\n      <b><ins>Logic</ins></b>\n      <ul>\n        <li>Application level bean is used to String is dvided into three parts starting from update, set and where.</li>\n        <li>Few validation like these 3 must exist and one after another.</li>\n        <li>Extract table name, between update and set. some validations</li>\n        <li>Extract column to update and their value between set and where. some validations</li>\n        <li>Extract column and value after where. some validations</li>\n      </ul>\n    </div>\n    <div>\n      <b><ins>Enhacement</ins></b>\n      <ul>\n        <li>Add support to handle complex queries specially with braces.</li>\n      </ul>\n    </div>\n    <br>\n    <div>\n      <ins>Image 1\n        <small>(to view larger image right click on it and open in new tab)</small>\n      </ins>\n      <img src=\"assets/images/amdocs/ServerUpStatus1.png\" alt=\"1\" class=\"modalimgstyle\">\n    </div>\n  </div>\n</div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click')\">Close</button>\n</div>"

/***/ }),

/***/ "../../../../../src/app/amdocs/server-up-status/server-up-status.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/amdocs/server-up-status/server-up-status.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServerUpStatusComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ServerUpStatusComponent = (function () {
    function ServerUpStatusComponent(activeModal) {
        this.activeModal = activeModal;
    }
    ServerUpStatusComponent.prototype.ngOnInit = function () {
    };
    return ServerUpStatusComponent;
}());
ServerUpStatusComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-server-up-status',
        template: __webpack_require__("../../../../../src/app/amdocs/server-up-status/server-up-status.component.html"),
        styles: [__webpack_require__("../../../../../src/app/amdocs/server-up-status/server-up-status.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */]) === "function" && _a || Object])
], ServerUpStatusComponent);

var _a;
//# sourceMappingURL=server-up-status.component.js.map

/***/ }),

/***/ "../../../../../src/app/amdocs/status-reporting/status-reporting.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title\">Performance Log Analysis</h4>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <div class=\"container-fluid\">\n    <div>\n      <b><ins>Architecture</ins></b>\n      <ul>\n        <li>Standalone application kept on server as jar.process local performance log file with predefined structure</li>\n        <li>Crontab scheduler is used to schedule its run time</li>\n        <li>It interacts with DB to extract required information</li>\n        <li>This application reads required information from file which is provided as argument to it</li>\n        <li>After extracting and compiling information it sends out email in html format via SMTP</li>\n      </ul>\n    </div>\n    <div>\n      <b><ins>Logic</ins></b>\n      <ul>\n          <li>Read provided properties files and note down the information</li>\n          <li>Basic validations</li>\n          <li>Query db and fetch data</li>\n          <li>Create html fomrat table using this data with alternate color</li>\n          <li>send it in email with content type as html over smtp</li>\n      </ul>\n    </div>\n    <div>\n      <b><ins>Enhacement</ins></b>\n      <ul>\n        <li>Add logic for drawing charts</li>\n      </ul>\n    </div>\n    <br>\n  </div>\n</div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click')\">Close</button>\n</div>\n    "

/***/ }),

/***/ "../../../../../src/app/amdocs/status-reporting/status-reporting.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/amdocs/status-reporting/status-reporting.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusReportingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StatusReportingComponent = (function () {
    function StatusReportingComponent(activeModal) {
        this.activeModal = activeModal;
    }
    StatusReportingComponent.prototype.ngOnInit = function () {
    };
    return StatusReportingComponent;
}());
StatusReportingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-status-reporting',
        template: __webpack_require__("../../../../../src/app/amdocs/status-reporting/status-reporting.component.html"),
        styles: [__webpack_require__("../../../../../src/app/amdocs/status-reporting/status-reporting.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */]) === "function" && _a || Object])
], StatusReportingComponent);

var _a;
//# sourceMappingURL=status-reporting.component.js.map

/***/ }),

/***/ "../../../../../src/app/android/android.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".carousel-control-prev-icon {\r\n    background : black;\r\n    color : black;\r\n}\r\n.carousel-control-next-icon {\r\n    background : black !important;\r\n    color : black;\r\n}\r\n.abc {\r\n    color: black;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/android/android.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-sm-4\">\n      <div class=\"thumbnail\">\n        <div class=\"caption\">\n          <h3>Weight Check App</h3>\n          <p>Use this app to track your weight</p>\n          <ul><b><ins>It's features</ins></b>\n            <li>When you launch it for first time it asks for use name. After that it remebers thtat.</li>\n            <li>It allows you to upload information only once for the day. It's just to promote daily logging of information.</li>\n          </ul>\n          <ul><b><ins>Future Enhancements</ins></b>\n            <li>For missed day's automatically create entry</li>\n            <li>Allow user to modify details of any entry</li>\n          </ul>\n          <ul><b><ins>Coding Highlight</ins></b>\n            <li>SVG modification for icon, color and path changes</li>\n            <li>Async http call. Use of Shared perference persistence. Adapter(Listview) implentation</li>\n          </ul>\n          <ngb-carousel interval=5000>\n              <ng-template ngbSlide>\n                <img src=\"assets/images/WeightCheck_1.png\" alt=\"Random first slide\" style=\"margin:auto; border-radius:55px;\">\n                <div class=\"carousel-caption\">\n                  <h3>Home Page</h3>\n                  <p>Welcome page when app is launched</p>\n                </div>\n              </ng-template>\n              <ng-template ngbSlide>\n                <img src=\"assets/images/WeightCheck_2.png\" alt=\"Random second slide\" style=\"margin:auto; border-radius:55px;\">\n                <div class=\"carousel-caption\">\n                  <h3>Details</h3>\n                  <p>When you click on item</p>\n                </div>\n              </ng-template>\n              <ng-template ngbSlide>\n                <img src=\"assets/images/WeightCheck_3.png\" alt=\"Random third slide\" style=\"margin:auto; border-radius:55px;\">\n                <div class=\"carousel-caption\">\n                  <h3>Trend</h3>\n                  <p>When you swipe left on home page</p>\n                </div>\n              </ng-template>\n            </ngb-carousel>\n            <br>\n            <p><a href=\"https://s3.us-east-2.amazonaws.com/sims3bucket1/android/app-release.apk\" class=\"btn btn-primary\" role=\"button\">Download apk</a></p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-4\">\n      <div class=\"thumbnail\">\n        <div class=\"caption\">\n          <h3>Party on me</h3>\n          <p>Use this app to ..</p>\n          <p><a href=\"#\" class=\"btn btn-primary\" role=\"button\" disalbed=\"true\">Download apk</a></p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-4\">\n      <div class=\"thumbnail\">\n        <div class=\"caption\">\n          <h3>Catalog your items</h3>\n          <p>Use this app to </p>\n          <p><a href=\"#\" class=\"btn btn-primary\" role=\"button\" disalbed=\"true\">Download apk</a></p>\n        </div>\n      </div>\n    </div>\n  </div>\n  <hr>\n  <div class=\"row\">\n    <div class=\"col-sm-4\">\n      <div class=\"thumbnail\">\n        <div class=\"caption\">\n          <h3>Predict item to buy!</h3>\n          <p>Use this app to </p>\n          <p><a href=\"#\" class=\"btn btn-primary\" role=\"button\" disalbed=\"true\">Download apk</a></p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"abc\">xyz</div>"

/***/ }),

/***/ "../../../../../src/app/android/android.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AndroidComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AndroidComponent = (function () {
    function AndroidComponent() {
    }
    AndroidComponent.prototype.ngOnInit = function () {
    };
    return AndroidComponent;
}());
AndroidComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-android',
        template: __webpack_require__("../../../../../src/app/android/android.component.html"),
        styles: [__webpack_require__("../../../../../src/app/android/android.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AndroidComponent);

//# sourceMappingURL=android.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align: center\">\n\t<h1>Welcome to {{title}}!</h1>\n</div>\n\n<hr />\n\n<div class=\"container-fluid\">\n\t<div class=\"row\">\n\t<div class=\"col-sm-2\" style=\"border-right:1px solid #eee;height:700px\">\n\t\t<ul class=\"nav flex-column nav-pills \">\n\t\t\t<li class=\"nav-item\"><a routerLinkActive=\"active\" class=\"nav-link\" routerLink=\"/about\">About</a></li>\n\t\t\t<li class=\"nav-item\"><a routerLinkActive=\"active\" class=\"nav-link\" routerLink=\"/passapp\">Password App</a></li>\n\t\t\t<li class=\"nav-item\"><a routerLinkActive=\"active\" class=\"nav-link\" routerLink=\"/luhnapp\">Luhn Algorithim for CC last bit check</a></li>\n\t\t\t<li class=\"nav-item\"><a routerLinkActive=\"active\" class=\"nav-link\" routerLink=\"/ggd\">Guru Granth Darpan</a></li>\n\t\t\t<li class=\"nav-item\"><a routerLinkActive=\"active\" class=\"nav-link\" routerLink=\"/vma\">Virtual Machine(Resource) Allocation</a></li>\n\t\t\t<li class=\"nav-item\"><a routerLinkActive=\"active\" class=\"nav-link\" routerLink=\"/nufapp\">Not used feature set</a></li>\n\t\t\t<li class=\"nav-item\"><a routerLinkActive=\"active\" class=\"nav-link\" routerLink=\"/posttest\">Postman</a></li>\n\t\t\t<li class=\"nav-item\"><a routerLinkActive=\"active\" class=\"nav-link\" routerLink=\"/oa\">OAuth2</a></li>\n\t\t\t<!-- <li><a routerLinkActive=\"active\" class=\"nav-link\"routerLink=\"/movie\">Movies</a></li> -->\n\t\t\t<li class=\"nav-item\"><a routerLinkActive=\"active\" class=\"nav-link\" routerLink=\"/and\">Android Projects</a></li>\n\t\t\t<li class=\"nav-item\"><a routerLinkActive=\"active\" class=\"nav-link\" routerLink=\"/amd\">Office Tools</a></li>\n\t\t\t<li class=\"nav-item\"><a routerLinkActive=\"active\" class=\"nav-link\" routerLink=\"/asim\">About Simron</a></li>\n\t\t</ul>\n\t</div>\n\t<div class=\"col-sm-10\">\n\t\t<div>\n\t\t\t<router-outlet></router-outlet>\n\t\t</div>\n\t</div>\n</div>\n</div>\n<!-- <span class=\"label label-default\">Default</span>\n<span class=\"label label-primary\">Primary</span>\n -->\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import {Http, Response, RequestOptions, Headers} from '@angular/http';
// import {HttpClient, HttpHeaders} from '@angular/common/http';
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'ToolsBox';
    }
    //  ngOnInit(): void {
    //    this.http
    //      .get(this.url)
    //      .map(res => {
    //        return res.json;
    //      })
    //      .catch(this.errorHandling)
    //      .subscribe(result => {
    //        this.hello = result;
    //      });
    AppComponent.prototype.ngOnInit = function () {
        //    const myHeaders = new HttpHeaders().set('Content-Type', 'text/html');
        //    myHeaders.set('Accept', 'text/plain');
        //    myHeaders.append('Content-Type', 'application/json');
        //    const myParams = new URLSearchParams();
        //    myParams.append('name', 'manveen');
        //    const options = new RequestOptions({headers: myHeaders, params: myParams});
        //    this.http.get(this.url).subscribe(data => {
        // Read the result field from the JSON response.
        //      this.hello = data['content'];
        //  });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_http_comp__ = __webpack_require__("../../../../../src/app/services/http.comp.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__passwd_passwd_component__ = __webpack_require__("../../../../../src/app/passwd/passwd.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__luhnalg_luhnalg_component__ = __webpack_require__("../../../../../src/app/luhnalg/luhnalg.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__not_used_feature_not_used_feature_component__ = __webpack_require__("../../../../../src/app/not-used-feature/not-used-feature.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__passwd_passwdgen_passwdgen_component__ = __webpack_require__("../../../../../src/app/passwd/passwdgen/passwdgen.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__passwd_passwddecrypt_passwddecrypt_component__ = __webpack_require__("../../../../../src/app/passwd/passwddecrypt/passwddecrypt.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__passwd_passwd_save_passwd_save_component__ = __webpack_require__("../../../../../src/app/passwd/passwd-save/passwd-save.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__passwd_passwd_retrieve_passwd_retrieve_component__ = __webpack_require__("../../../../../src/app/passwd/passwd-retrieve/passwd-retrieve.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__passwd_passwd_about_passwd_about_component__ = __webpack_require__("../../../../../src/app/passwd/passwd-about/passwd-about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ngx_clipboard__ = __webpack_require__("../../../../ngx-clipboard/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_share_data_service__ = __webpack_require__("../../../../../src/app/services/share-data-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__approute__ = __webpack_require__("../../../../../src/app/approute.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ggd_ggd_component__ = __webpack_require__("../../../../../src/app/ggd/ggd.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ggd_ggt_ggt_component__ = __webpack_require__("../../../../../src/app/ggd/ggt/ggt.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ggd_ggs_ggs_component__ = __webpack_require__("../../../../../src/app/ggd/ggs/ggs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__home_about_home_about_component__ = __webpack_require__("../../../../../src/app/home-about/home-about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__post_sim_post_sim_component__ = __webpack_require__("../../../../../src/app/post-sim/post-sim.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__o_auth_o_auth_component__ = __webpack_require__("../../../../../src/app/o-auth/o-auth.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__movie_movie_component__ = __webpack_require__("../../../../../src/app/movie/movie.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__movie_movie_info_movie_info_component__ = __webpack_require__("../../../../../src/app/movie/movie-info/movie-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__movie_movie_list_movie_list_component__ = __webpack_require__("../../../../../src/app/movie/movie-list/movie-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__movie_movie_parsed_movie_parsed_component__ = __webpack_require__("../../../../../src/app/movie/movie-parsed/movie-parsed.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__android_android_component__ = __webpack_require__("../../../../../src/app/android/android.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__amdocs_amdocs_component__ = __webpack_require__("../../../../../src/app/amdocs/amdocs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__amdocs_fallout_trend_analyzer_fallout_trend_analyzer_component__ = __webpack_require__("../../../../../src/app/amdocs/fallout-trend-analyzer/fallout-trend-analyzer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__amdocs_safe_dbupdate_safe_dbupdate_component__ = __webpack_require__("../../../../../src/app/amdocs/safe-dbupdate/safe-dbupdate.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__amdocs_bpm_flow_creator_bpm_flow_creator_component__ = __webpack_require__("../../../../../src/app/amdocs/bpm-flow-creator/bpm-flow-creator.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__amdocs_email_server_logs_email_server_logs_component__ = __webpack_require__("../../../../../src/app/amdocs/email-server-logs/email-server-logs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__amdocs_performance_log_aanalyzer_performance_log_aanalyzer_component__ = __webpack_require__("../../../../../src/app/amdocs/performance-log-aanalyzer/performance-log-aanalyzer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__about_simron_about_simron_component__ = __webpack_require__("../../../../../src/app/about-simron/about-simron.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__amdocs_log_to_html_log_to_html_component__ = __webpack_require__("../../../../../src/app/amdocs/log-to-html/log-to-html.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__amdocs_status_reporting_status_reporting_component__ = __webpack_require__("../../../../../src/app/amdocs/status-reporting/status-reporting.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__amdocs_server_up_status_server_up_status_component__ = __webpack_require__("../../../../../src/app/amdocs/server-up-status/server-up-status.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__about_simron_resume_resume_component__ = __webpack_require__("../../../../../src/app/about-simron/resume/resume.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__about_simron_resume_compressed_resume_compressed_component__ = __webpack_require__("../../../../../src/app/about-simron/resume-compressed/resume-compressed.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// import {PasswdModule} from './passwd/passwd.module';












// import {PasswdService} from './passwd/passwd.service';

// import {AppRoutingModule} from './app-routing.module';



























// import {VmaModule} from './vma/vma.module';
var AppModule = (function () {
    // Diagnostic only: inspect router configuration
    function AppModule(router) {
        console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_10__luhnalg_luhnalg_component__["a" /* LuhnalgComponent */],
            __WEBPACK_IMPORTED_MODULE_9__passwd_passwd_component__["a" /* PasswdComponent */], __WEBPACK_IMPORTED_MODULE_12__passwd_passwdgen_passwdgen_component__["a" /* PasswdgenComponent */], __WEBPACK_IMPORTED_MODULE_13__passwd_passwddecrypt_passwddecrypt_component__["a" /* PasswddecryptComponent */], __WEBPACK_IMPORTED_MODULE_14__passwd_passwd_save_passwd_save_component__["a" /* PasswdSaveComponent */], __WEBPACK_IMPORTED_MODULE_15__passwd_passwd_retrieve_passwd_retrieve_component__["a" /* PasswdRetrieveComponent */], __WEBPACK_IMPORTED_MODULE_16__passwd_passwd_about_passwd_about_component__["a" /* PasswdAboutComponent */],
            __WEBPACK_IMPORTED_MODULE_11__not_used_feature_not_used_feature_component__["a" /* NotUsedFeatureComponent */],
            __WEBPACK_IMPORTED_MODULE_20__ggd_ggd_component__["a" /* GgdComponent */], __WEBPACK_IMPORTED_MODULE_21__ggd_ggt_ggt_component__["a" /* GgtComponent */], __WEBPACK_IMPORTED_MODULE_22__ggd_ggs_ggs_component__["a" /* GgsComponent */],
            __WEBPACK_IMPORTED_MODULE_23__home_about_home_about_component__["a" /* HomeAboutComponent */],
            __WEBPACK_IMPORTED_MODULE_24__post_sim_post_sim_component__["a" /* PostSimComponent */],
            __WEBPACK_IMPORTED_MODULE_25__o_auth_o_auth_component__["a" /* OAuthComponent */],
            __WEBPACK_IMPORTED_MODULE_26__movie_movie_component__["a" /* MovieComponent */], __WEBPACK_IMPORTED_MODULE_27__movie_movie_info_movie_info_component__["a" /* MovieInfoComponent */], __WEBPACK_IMPORTED_MODULE_28__movie_movie_list_movie_list_component__["a" /* MovieListComponent */], __WEBPACK_IMPORTED_MODULE_29__movie_movie_parsed_movie_parsed_component__["a" /* MovieParsedComponent */],
            __WEBPACK_IMPORTED_MODULE_30__android_android_component__["a" /* AndroidComponent */],
            __WEBPACK_IMPORTED_MODULE_31__amdocs_amdocs_component__["a" /* AmdocsComponent */],
            __WEBPACK_IMPORTED_MODULE_32__about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_34__amdocs_fallout_trend_analyzer_fallout_trend_analyzer_component__["a" /* FalloutTrendAnalyzerComponent */], __WEBPACK_IMPORTED_MODULE_35__amdocs_safe_dbupdate_safe_dbupdate_component__["a" /* SafeDBUpdateComponent */], __WEBPACK_IMPORTED_MODULE_36__amdocs_bpm_flow_creator_bpm_flow_creator_component__["a" /* BpmFlowCreatorComponent */], __WEBPACK_IMPORTED_MODULE_37__amdocs_email_server_logs_email_server_logs_component__["a" /* EmailServerLogsComponent */], __WEBPACK_IMPORTED_MODULE_38__amdocs_performance_log_aanalyzer_performance_log_aanalyzer_component__["a" /* PerformanceLogAanalyzerComponent */], __WEBPACK_IMPORTED_MODULE_39__about_simron_about_simron_component__["a" /* AboutSimronComponent */],
            __WEBPACK_IMPORTED_MODULE_40__amdocs_log_to_html_log_to_html_component__["a" /* LogToHtmlComponent */], __WEBPACK_IMPORTED_MODULE_41__amdocs_status_reporting_status_reporting_component__["a" /* StatusReportingComponent */], __WEBPACK_IMPORTED_MODULE_42__amdocs_server_up_status_server_up_status_component__["a" /* ServerUpStatusComponent */], __WEBPACK_IMPORTED_MODULE_43__about_simron_resume_resume_component__["a" /* ResumeComponent */], __WEBPACK_IMPORTED_MODULE_44__about_simron_resume_compressed_resume_compressed_component__["a" /* ResumeCompressedComponent */]
        ],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_34__amdocs_fallout_trend_analyzer_fallout_trend_analyzer_component__["a" /* FalloutTrendAnalyzerComponent */], __WEBPACK_IMPORTED_MODULE_35__amdocs_safe_dbupdate_safe_dbupdate_component__["a" /* SafeDBUpdateComponent */], __WEBPACK_IMPORTED_MODULE_36__amdocs_bpm_flow_creator_bpm_flow_creator_component__["a" /* BpmFlowCreatorComponent */], __WEBPACK_IMPORTED_MODULE_37__amdocs_email_server_logs_email_server_logs_component__["a" /* EmailServerLogsComponent */], __WEBPACK_IMPORTED_MODULE_38__amdocs_performance_log_aanalyzer_performance_log_aanalyzer_component__["a" /* PerformanceLogAanalyzerComponent */],
            __WEBPACK_IMPORTED_MODULE_40__amdocs_log_to_html_log_to_html_component__["a" /* LogToHtmlComponent */], __WEBPACK_IMPORTED_MODULE_41__amdocs_status_reporting_status_reporting_component__["a" /* StatusReportingComponent */], __WEBPACK_IMPORTED_MODULE_42__amdocs_server_up_status_server_up_status_component__["a" /* ServerUpStatusComponent */], __WEBPACK_IMPORTED_MODULE_43__about_simron_resume_resume_component__["a" /* ResumeComponent */], __WEBPACK_IMPORTED_MODULE_44__about_simron_resume_compressed_resume_compressed_component__["a" /* ResumeCompressedComponent */]],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
            //    ReactiveFormsModule,
            __WEBPACK_IMPORTED_MODULE_17_ngx_clipboard__["a" /* ClipboardModule */],
            //    VmaModule,
            //    PasswdModule,
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_19__approute__["a" /* appRoutes */]),
            __WEBPACK_IMPORTED_MODULE_33__ng_bootstrap_ng_bootstrap__["c" /* NgbModule */].forRoot()
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_8__services_http_comp__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_18__services_share_data_service__["a" /* ShareDataService */],
            __WEBPACK_IMPORTED_MODULE_6__angular_common__["f" /* Location */],
            { provide: __WEBPACK_IMPORTED_MODULE_6__angular_common__["g" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_6__angular_common__["d" /* HashLocationStrategy */] }],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _a || Object])
], AppModule);

var _a;
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/approute.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__passwd_passwd_component__ = __webpack_require__("../../../../../src/app/passwd/passwd.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__luhnalg_luhnalg_component__ = __webpack_require__("../../../../../src/app/luhnalg/luhnalg.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__not_used_feature_not_used_feature_component__ = __webpack_require__("../../../../../src/app/not-used-feature/not-used-feature.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__passwd_passwdgen_passwdgen_component__ = __webpack_require__("../../../../../src/app/passwd/passwdgen/passwdgen.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__passwd_passwddecrypt_passwddecrypt_component__ = __webpack_require__("../../../../../src/app/passwd/passwddecrypt/passwddecrypt.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__passwd_passwd_save_passwd_save_component__ = __webpack_require__("../../../../../src/app/passwd/passwd-save/passwd-save.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__passwd_passwd_retrieve_passwd_retrieve_component__ = __webpack_require__("../../../../../src/app/passwd/passwd-retrieve/passwd-retrieve.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__passwd_passwd_about_passwd_about_component__ = __webpack_require__("../../../../../src/app/passwd/passwd-about/passwd-about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ggd_ggd_component__ = __webpack_require__("../../../../../src/app/ggd/ggd.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ggd_ggt_ggt_component__ = __webpack_require__("../../../../../src/app/ggd/ggt/ggt.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ggd_ggs_ggs_component__ = __webpack_require__("../../../../../src/app/ggd/ggs/ggs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__home_about_home_about_component__ = __webpack_require__("../../../../../src/app/home-about/home-about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__post_sim_post_sim_component__ = __webpack_require__("../../../../../src/app/post-sim/post-sim.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__o_auth_o_auth_component__ = __webpack_require__("../../../../../src/app/o-auth/o-auth.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__movie_movie_component__ = __webpack_require__("../../../../../src/app/movie/movie.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__movie_movie_info_movie_info_component__ = __webpack_require__("../../../../../src/app/movie/movie-info/movie-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__movie_movie_list_movie_list_component__ = __webpack_require__("../../../../../src/app/movie/movie-list/movie-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__movie_movie_parsed_movie_parsed_component__ = __webpack_require__("../../../../../src/app/movie/movie-parsed/movie-parsed.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__android_android_component__ = __webpack_require__("../../../../../src/app/android/android.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__amdocs_amdocs_component__ = __webpack_require__("../../../../../src/app/amdocs/amdocs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__about_simron_about_simron_component__ = __webpack_require__("../../../../../src/app/about-simron/about-simron.component.ts");






















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_11__home_about_home_about_component__["a" /* HomeAboutComponent */] },
    { path: 'nufapp', component: __WEBPACK_IMPORTED_MODULE_2__not_used_feature_not_used_feature_component__["a" /* NotUsedFeatureComponent */] },
    {
        path: 'passapp', component: __WEBPACK_IMPORTED_MODULE_0__passwd_passwd_component__["a" /* PasswdComponent */],
        //    loadChildren: 'app/passwd/passwd.module#PasswdModule',
        children: [
            { path: 'pgen', component: __WEBPACK_IMPORTED_MODULE_3__passwd_passwdgen_passwdgen_component__["a" /* PasswdgenComponent */] },
            { path: 'pdec', component: __WEBPACK_IMPORTED_MODULE_4__passwd_passwddecrypt_passwddecrypt_component__["a" /* PasswddecryptComponent */] },
            { path: 'pSave', component: __WEBPACK_IMPORTED_MODULE_5__passwd_passwd_save_passwd_save_component__["a" /* PasswdSaveComponent */] },
            { path: 'pRet', component: __WEBPACK_IMPORTED_MODULE_6__passwd_passwd_retrieve_passwd_retrieve_component__["a" /* PasswdRetrieveComponent */] },
            { path: 'pAbout', component: __WEBPACK_IMPORTED_MODULE_7__passwd_passwd_about_passwd_about_component__["a" /* PasswdAboutComponent */] },
            { path: '', redirectTo: 'pAbout', pathMatch: 'full' }
        ]
    },
    {
        path: 'ggd', component: __WEBPACK_IMPORTED_MODULE_8__ggd_ggd_component__["a" /* GgdComponent */],
        children: [
            { path: 'ggt', component: __WEBPACK_IMPORTED_MODULE_9__ggd_ggt_ggt_component__["a" /* GgtComponent */] },
            { path: 'ggs', component: __WEBPACK_IMPORTED_MODULE_10__ggd_ggs_ggs_component__["a" /* GgsComponent */] },
            { path: '', redirectTo: 'ggs', pathMatch: 'full' }
        ]
    },
    { path: 'luhnapp', component: __WEBPACK_IMPORTED_MODULE_1__luhnalg_luhnalg_component__["a" /* LuhnalgComponent */] },
    { path: 'posttest', component: __WEBPACK_IMPORTED_MODULE_12__post_sim_post_sim_component__["a" /* PostSimComponent */] },
    { path: 'vma', loadChildren: './vma/vma.module#VmaModule' },
    { path: 'oa', component: __WEBPACK_IMPORTED_MODULE_13__o_auth_o_auth_component__["a" /* OAuthComponent */] },
    { path: 'oauth/gitcallback', component: __WEBPACK_IMPORTED_MODULE_13__o_auth_o_auth_component__["a" /* OAuthComponent */] },
    {
        path: 'movie', component: __WEBPACK_IMPORTED_MODULE_14__movie_movie_component__["a" /* MovieComponent */],
        children: [
            { path: 'mi', component: __WEBPACK_IMPORTED_MODULE_15__movie_movie_info_movie_info_component__["a" /* MovieInfoComponent */] },
            { path: 'ml', component: __WEBPACK_IMPORTED_MODULE_16__movie_movie_list_movie_list_component__["a" /* MovieListComponent */] },
            { path: 'mp', component: __WEBPACK_IMPORTED_MODULE_17__movie_movie_parsed_movie_parsed_component__["a" /* MovieParsedComponent */] },
            { path: '', redirectTo: 'mi', pathMatch: 'full' }
        ]
    },
    { path: 'and', component: __WEBPACK_IMPORTED_MODULE_18__android_android_component__["a" /* AndroidComponent */] },
    { path: 'amd', component: __WEBPACK_IMPORTED_MODULE_19__amdocs_amdocs_component__["a" /* AmdocsComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_20__about_about_component__["a" /* AboutComponent */] },
    { path: 'asim', component: __WEBPACK_IMPORTED_MODULE_21__about_simron_about_simron_component__["a" /* AboutSimronComponent */] }
];
//# sourceMappingURL=approute.js.map

/***/ }),

/***/ "../../../../../src/app/ggd/ggd.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ggd/ggd.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n\r\n<div class=\"page-header\"><h3 align=\"center\">Guru Granth Sahib Darpan Conversion</h3></div>\r\n\r\n<ul class=\"nav nav-tabs nav-justified\">\r\n  <li class=\"nav-item\"><a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"ggt\">Guru Granth Sahib Darpan</a></li>\r\n  <li class=\"nav-item\"><a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"ggs\">Dictionary</a></li>\r\n</ul>\r\n<div>\r\n\t<router-outlet></router-outlet>\r\n</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/ggd/ggd.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GgdComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GgdComponent = (function () {
    function GgdComponent() {
    }
    GgdComponent.prototype.ngOnInit = function () {
    };
    return GgdComponent;
}());
GgdComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-ggd',
        template: __webpack_require__("../../../../../src/app/ggd/ggd.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ggd/ggd.component.css")]
    }),
    __metadata("design:paramtypes", [])
], GgdComponent);

//# sourceMappingURL=ggd.component.js.map

/***/ }),

/***/ "../../../../../src/app/ggd/ggs/ggs.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@font-face { font-family: \"GurbaniAkhar\"; src: url(" + __webpack_require__("../../../../../src/assets/fonts/GGDDictionary.ttf") + "); }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ggd/ggs/ggs.component.html":
/***/ (function(module, exports) {

module.exports = "<br/>\n<input id=\"input1\" type=\"text\" (keyup)=\"filter()\" style=\"font-family:GurbaniAkhar;font-weight:bold;font-size:160%;\" autofocus />\n<br/><br/>\n<button id=\"button65\" (click)=\"addToInput('A')\"> <font face=\"GurbaniAkhar\" size=\"3\" style=\"font-weight:bold\">A</font> <font size=\"1\" style=\"font-weight:normal\">A</font> </button>\n<button id=\"button66\" (click)=\"addToInput('B')\"> <font face=\"GurbaniAkhar\" size=\"3\" style=\"font-weight:bold\">B</font> <font size=\"1\" style=\"font-weight:normal\">B</font> </button>\n<button id=\"button67\" (click)=\"addToInput('C')\"> <font face=\"GurbaniAkhar\" size=\"3\" style=\"font-weight:bold\">C</font> <font size=\"1\" style=\"font-weight:normal\">C</font> </button>\n<button id=\"button68\" (click)=\"addToInput('D')\"> <font face=\"GurbaniAkhar\" size=\"3\" style=\"font-weight:bold\">D</font> <font size=\"1\" style=\"font-weight:normal\">D</font> </button>\n<button id=\"button69\" (click)=\"addToInput('E')\"> <font face=\"GurbaniAkhar\" size=\"3\" style=\"font-weight:bold\">E</font> <font size=\"1\" style=\"font-weight:normal\">E</font> </button>\n<button id=\"button70\" (click)=\"addToInput('F')\"> <font face=\"GurbaniAkhar\" size=\"3\" style=\"font-weight:bold\">F</font> <font size=\"1\" style=\"font-weight:normal\">F</font> </button>\n<button id=\"button71\" (click)=\"addToInput('G')\"> <font face=\"GurbaniAkhar\" size=\"3\" style=\"font-weight:bold\">G</font> <font size=\"1\" style=\"font-weight:normal\">G</font> </button>\n<button id=\"button72\" (click)=\"addToInput('H')\"> <font face=\"GurbaniAkhar\" size=\"3\" style=\"font-weight:bold\">H</font> <font size=\"1\" style=\"font-weight:normal\">H</font> </button>\n<button id=\"button73\" (click)=\"addToInput('I')\"> <font face=\"GurbaniAkhar\" size=\"3\" style=\"font-weight:bold\">I</font> <font size=\"1\" style=\"font-weight:normal\">I</font> </button>\n<button id=\"button74\" (click)=\"addToInput('J')\"> <font face=\"GurbaniAkhar\" size=\"3\" style=\"font-weight:bold\">J</font> <font size=\"1\" style=\"font-weight:normal\">J</font> </button>\n<button id=\"button75\" (click)=\"addToInput('K')\"> <font face=\"GurbaniAkhar\" size=\"3\" style=\"font-weight:bold\">K</font> <font size=\"1\" style=\"font-weight:normal\">K</font> </button>\n<button id=\"button76\" (click)=\"addToInput('L')\"> <font face=\"GurbaniAkhar\" size=\"3\" style=\"font-weight:bold\">L</font> <font size=\"1\" style=\"font-weight:normal\">L</font> </button>\n<button id=\"button77\" (click)=\"addToInput('M')\"> <font face=\"GurbaniAkhar\" size=\"3\" style=\"font-weight:bold\">M</font> <font size=\"1\" style=\"font-weight:normal\">M</font> </button>\n<button id=\"button78\" (click)=\"addToInput('N')\"> <font face=\"GurbaniAkhar\" size=\"3\" style=\"font-weight:bold\">N</font> <font size=\"1\" style=\"font-weight:normal\">N</font> </button>\n<button id=\"button79\" (click)=\"addToInput('O')\"> <font face=\"GurbaniAkhar\" size=\"3\" style=\"font-weight:bold\">O</font> <font size=\"1\" style=\"font-weight:normal\">O</font> </button>\n<button id=\"button80\" (click)=\"addToInput('P')\"> <font face=\"GurbaniAkhar\" size=\"3\" style=\"font-weight:bold\">P</font> <font size=\"1\" style=\"font-weight:normal\">P</font> </button>\n<button id=\"button81\" (click)=\"addToInput('Q')\"> <font face=\"GurbaniAkhar\" size=\"3\" style=\"font-weight:bold\">Q</font> <font size=\"1\" style=\"font-weight:normal\">Q</font> </button>\n<button id=\"button82\" (click)=\"addToInput('R')\"> <font face=\"GurbaniAkhar\" size=\"3\" style=\"font-weight:bold\">R</font> <font size=\"1\" style=\"font-weight:normal\">R</font> </button>\n<button id=\"button83\" (click)=\"addToInput('S')\"> <font face=\"GurbaniAkhar\" size=\"3\" style=\"font-weight:bold\">S</font> <font size=\"1\" style=\"font-weight:normal\">S</font> </button>\n<button id=\"button84\" (click)=\"addToInput('T')\"> <font face=\"GurbaniAkhar\" size=\"3\" style=\"font-weight:bold\">T</font> <font size=\"1\" style=\"font-weight:normal\">T</font> </button>\n<button id=\"button85\" (click)=\"addToInput('U')\"> <font face=\"GurbaniAkhar\" size=\"3\" style=\"font-weight:bold\">U</font> <font size=\"1\" style=\"font-weight:normal\">U</font> </button>\n<button id=\"button86\" (click)=\"addToInput('V')\"> <font face=\"GurbaniAkhar\" size=\"3\" style=\"font-weight:bold\">V</font> <font size=\"1\" style=\"font-weight:normal\">V</font> </button>\n<button id=\"button87\" (click)=\"addToInput('W')\"> <font face=\"GurbaniAkhar\" size=\"3\" style=\"font-weight:bold\">W</font> <font size=\"1\" style=\"font-weight:normal\">W</font> </button>\n<button id=\"button88\" (click)=\"addToInput('X')\"> <font face=\"GurbaniAkhar\" size=\"3\" style=\"font-weight:bold\">X</font> <font size=\"1\" style=\"font-weight:normal\">X</font> </button>\n<button id=\"button89\" (click)=\"addToInput('Y')\"> <font face=\"GurbaniAkhar\" size=\"3\" style=\"font-weight:bold\">Y</font> <font size=\"1\" style=\"font-weight:normal\">Y</font> </button>\n<button id=\"button90\" (click)=\"addToInput('Z')\"> <font face=\"GurbaniAkhar\" size=\"3\" style=\"font-weight:bold\">Z</font> <font size=\"1\" style=\"font-weight:normal\">Z</font> </button>\n<br/><br/>\n<button id=\"button126\" (click)=\"addToInput('~')\"> <font face=\"GurbaniAkhar\" size=\"3\" style=\"font-weight:bold\">~</font> <font size=\"1\" style=\"font-weight:normal\">~</font> </button>\n<button id=\"button64\" (click)=\"addToInput('@')\"> <font face=\"GurbaniAkhar\" size=\"3\" style=\"font-weight:bold\">@</font> <font size=\"1\" style=\"font-weight:normal\">@</font> </button>\n<button id=\"button94\" (click)=\"addToInput('^')\"> <font face=\"GurbaniAkhar\" size=\"3\" style=\"font-weight:bold\">^</font> <font size=\"1\" style=\"font-weight:normal\">^</font> </button>\n<button id=\"button38\" (click)=\"addToInput('&')\"> <font face=\"GurbaniAkhar\" size=\"3\" style=\"font-weight:bold\">&</font> <font size=\"1\" style=\"font-weight:normal\">&</font> </button>\n<button id=\"button60\" (click)=\"addToInput('<')\"> <font face=\"GurbaniAkhar\" size=\"3\" style=\"font-weight:bold\"><</font> <font size=\"1\" style=\"font-weight:normal\"><</font> </button>\n<button id=\"button92\" (click)=\"addToInput('\\\\')\"> <font face=\"GurbaniAkhar\" size=\"3\" style=\"font-weight:bold\">\\</font> <font size=\"1\" style=\"font-weight:normal\">\\</font> </button>\n<br/><br/>\n<button id=\"button97\" (click)=\"addToInput('a')\"> <font face=\"GurbaniAkhar\" size=\"3\" style=\"font-weight:bold\">a</font> <font size=\"1\" style=\"font-weight:normal\">a</font> </button>\n<button id=\"button98\" (click)=\"addToInput('b')\"> <font face=\"GurbaniAkhar\" size=\"3\" style=\"font-weight:bold\">b</font> <font size=\"1\" style=\"font-weight:normal\">b</font> </button>\n<button id=\"button99\" (click)=\"addToInput('c')\"> <font face=\"GurbaniAkhar\" size=\"3\" style=\"font-weight:bold\">c</font> <font size=\"1\" style=\"font-weight:normal\">c</font> </button>\n<button id=\"button100\" (click)=\"addToInput('d')\"> <font face=\"GurbaniAkhar\" size=\"3\" style=\"font-weight:bold\">d</font> <font size=\"1\" style=\"font-weight:normal\">d</font> </button>\n<button id=\"button101\" (click)=\"addToInput('e')\"> <font face=\"GurbaniAkhar\" size=\"3\" style=\"font-weight:bold\">e</font> <font size=\"1\" style=\"font-weight:normal\">e</font> </button>\n<button id=\"button102\" (click)=\"addToInput('f')\"> <font face=\"GurbaniAkhar\" size=\"3\" style=\"font-weight:bold\">f</font> <font size=\"1\" style=\"font-weight:normal\">f</font> </button>\n<button id=\"button103\" (click)=\"addToInput('g')\"> <font face=\"GurbaniAkhar\" size=\"3\" style=\"font-weight:bold\">g</font> <font size=\"1\" style=\"font-weight:normal\">g</font> </button>\n<button id=\"button104\" (click)=\"addToInput('h')\"> <font face=\"GurbaniAkhar\" size=\"3\" style=\"font-weight:bold\">h</font> <font size=\"1\" style=\"font-weight:normal\">h</font> </button>\n<button id=\"button105\" (click)=\"addToInput('i')\"> <font face=\"GurbaniAkhar\" size=\"3\" style=\"font-weight:bold\">i</font> <font size=\"1\" style=\"font-weight:normal\">i</font> </button>\n<button id=\"button106\" (click)=\"addToInput('j')\"> <font face=\"GurbaniAkhar\" size=\"3\" style=\"font-weight:bold\">j</font> <font size=\"1\" style=\"font-weight:normal\">j</font> </button>\n<button id=\"button107\" (click)=\"addToInput('k')\"> <font face=\"GurbaniAkhar\" size=\"3\" style=\"font-weight:bold\">k</font> <font size=\"1\" style=\"font-weight:normal\">k</font> </button>\n<button id=\"button108\" (click)=\"addToInput('l')\"> <font face=\"GurbaniAkhar\" size=\"3\" style=\"font-weight:bold\">l</font> <font size=\"1\" style=\"font-weight:normal\">l</font> </button>\n<button id=\"button109\" (click)=\"addToInput('m')\"> <font face=\"GurbaniAkhar\" size=\"3\" style=\"font-weight:bold\">m</font> <font size=\"1\" style=\"font-weight:normal\">m</font> </button>\n<button id=\"button110\" (click)=\"addToInput('n')\"> <font face=\"GurbaniAkhar\" size=\"3\" style=\"font-weight:bold\">n</font> <font size=\"1\" style=\"font-weight:normal\">n</font> </button>\n<button id=\"button111\" (click)=\"addToInput('o')\"> <font face=\"GurbaniAkhar\" size=\"3\" style=\"font-weight:bold\">o</font> <font size=\"1\" style=\"font-weight:normal\">o</font> </button>\n<button id=\"button112\" (click)=\"addToInput('p')\"> <font face=\"GurbaniAkhar\" size=\"3\" style=\"font-weight:bold\">p</font> <font size=\"1\" style=\"font-weight:normal\">p</font> </button>\n<button id=\"button113\" (click)=\"addToInput('q')\"> <font face=\"GurbaniAkhar\" size=\"3\" style=\"font-weight:bold\">q</font> <font size=\"1\" style=\"font-weight:normal\">q</font> </button>\n<button id=\"button114\" (click)=\"addToInput('r')\"> <font face=\"GurbaniAkhar\" size=\"3\" style=\"font-weight:bold\">r</font> <font size=\"1\" style=\"font-weight:normal\">r</font> </button>\n<button id=\"button115\" (click)=\"addToInput('s')\"> <font face=\"GurbaniAkhar\" size=\"3\" style=\"font-weight:bold\">s</font> <font size=\"1\" style=\"font-weight:normal\">s</font> </button>\n<button id=\"button116\" (click)=\"addToInput('t')\"> <font face=\"GurbaniAkhar\" size=\"3\" style=\"font-weight:bold\">t</font> <font size=\"1\" style=\"font-weight:normal\">t</font> </button>\n<button id=\"button117\" (click)=\"addToInput('u')\"> <font face=\"GurbaniAkhar\" size=\"3\" style=\"font-weight:bold\">u</font> <font size=\"1\" style=\"font-weight:normal\">u</font> </button>\n<button id=\"button118\" (click)=\"addToInput('v')\"> <font face=\"GurbaniAkhar\" size=\"3\" style=\"font-weight:bold\">v</font> <font size=\"1\" style=\"font-weight:normal\">v</font> </button>\n<button id=\"button119\" (click)=\"addToInput('w')\"> <font face=\"GurbaniAkhar\" size=\"3\" style=\"font-weight:bold\">w</font> <font size=\"1\" style=\"font-weight:normal\">w</font> </button>\n<button id=\"button120\" (click)=\"addToInput('x')\"> <font face=\"GurbaniAkhar\" size=\"3\" style=\"font-weight:bold\">x</font> <font size=\"1\" style=\"font-weight:normal\">x</font> </button>\n<button id=\"button121\" (click)=\"addToInput('y')\"> <font face=\"GurbaniAkhar\" size=\"3\" style=\"font-weight:bold\">y</font> <font size=\"1\" style=\"font-weight:normal\">y</font> </button>\n<button id=\"button122\" (click)=\"addToInput('z')\"> <font face=\"GurbaniAkhar\" size=\"3\" style=\"font-weight:bold\">z</font> <font size=\"1\" style=\"font-weight:normal\">z</font> </button>\n<p id=\"thePara\" style=\"font-family:GurbaniAkhar;font-weight:bold\">\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/ggd/ggs/ggs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GgsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_http_comp__ = __webpack_require__("../../../../../src/app/services/http.comp.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GgsComponent = (function () {
    function GgsComponent(httpService) {
        this.httpService = httpService;
    }
    GgsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpService.getN('assets/json/ggd/ggsAscii.json').subscribe(function (data) {
            _this.ascis = data;
        }, function (error) { return console.log(error); });
        this.httpService.getN('assets/json/ggd/ggsData.json').subscribe(function (data) {
            _this.ggdata = data;
            _this.filter(); // expecting ggsAscii.json to load first as its shorter
        }, function (error) { return console.log(error); });
    };
    GgsComponent.prototype.addToInput = function (chr) {
        document.getElementById('input1').value += chr;
        this.filter();
    };
    GgsComponent.prototype.filter = function () {
        for (var i = 0; i < this.ascis.length; i++) {
            document.getElementById('button' + this.ascis[i][0]).style.color = 'black';
            this.ascis[i][1] = 0;
        }
        var input1 = document.getElementById('input1').value;
        console.log(input1);
        var thePara = document.getElementById('thePara');
        thePara.innerHTML = '';
        var countOfResult = 0;
        for (var i = 0; i < this.ggdata.length; i++) {
            if (this.ggdata[i].substr(0, input1.length) === input1) {
                ++countOfResult;
                if (countOfResult < 20) {
                    thePara.innerHTML += this.ggdata[i] + '<br/>' + '\n';
                }
                var index2d = this.indexOf2d(this.ggdata[i].charCodeAt(input1.length));
                if (index2d !== 100) {
                    this.ascis[index2d][1] = this.ascis[index2d][1] + 1;
                }
            }
        }
        if (input1 === '') {
            for (var i = 0; i < 20; i++) {
                thePara.innerHTML += this.ggdata[i] + '<br/>' + '\n';
            }
        }
        for (var i = 0; i < this.ascis.length; i++) {
            if (this.ascis[i][1] > 0) {
                document.getElementById('button' + this.ascis[i][0]).style.color = 'red';
            }
        }
    };
    GgsComponent.prototype.indexOf2d = function (chrAscii) {
        for (var i = 0; i < this.ascis.length; i++) {
            if (chrAscii === this.ascis[i][0]) {
                return i;
            }
        }
        return 100;
    };
    return GgsComponent;
}());
GgsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-ggs',
        template: __webpack_require__("../../../../../src/app/ggd/ggs/ggs.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ggd/ggs/ggs.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_http_comp__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_http_comp__["a" /* HttpService */]) === "function" && _a || Object])
], GgsComponent);

var _a;
//# sourceMappingURL=ggs.component.js.map

/***/ }),

/***/ "../../../../../src/app/ggd/ggt/ggt.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@font-face { font-family: \"GurbaniAkhar\"; src: url(" + __webpack_require__("../../../../../src/assets/fonts/GGDDictionary.ttf") + "); }\r\nh1 {\r\n    font-family: GurbaniAkhar;\r\n}\r\n\r\na {\r\n  color: #900;\r\n  text-decoration: none;\r\n}\r\n\r\na:hover {\r\n  color: red;\r\n  position: relative;\r\n  font-family:GurbaniAkhar;\r\n}\r\n.someId:hover{\r\n\tfont-family:GurbaniAkhar;\r\n}\r\na[abc]:hover:after {\r\n  content: attr(abc);\r\n  padding: 3px 8px;\r\n  color: #333;\r\n  position: absolute;\r\n  left: 10px;\r\n  bottom: 30px;\r\n  z-index: 20;\r\n  white-space: nowrap;\r\n  border-radius: 5px;\r\n  box-shadow: 0px 0px 4px #222;\r\n  background-image: -o-linear-gradient(top, #eeeeee, #cccccc);\r\n}\r\n.scrollbar\r\n{\r\n/* \tmargin-left: 30px; */\r\n/* \tfloat: left; */\r\n/* \theight: 300px; */\r\n/* \twidth: 65px; */\r\n/* \tbackground: #F5F5F5; */\r\n\toverflow-x: scroll;\r\n\toverflow-y: hidden;\r\n/* \tmargin-bottom: 25px; */\r\n\twhite-space: nowrap;\r\n\tpadding-top: 5px;\r\n}\r\n.force-overflow\r\n{\r\n/* \tmin-height: 450px; */\r\n}\r\n\r\n#style-3::-webkit-scrollbar-track\r\n{\r\n/* \t-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); */\r\n/* \tbackground-color: #F5F5F5; */\r\n}\r\n\r\n#style-3::-webkit-scrollbar\r\n{\r\n\theight: 6px;\r\n/* \tbackground-color: #F5F5F5; */\r\n}\r\n\r\n#style-3::-webkit-scrollbar-thumb\r\n{\r\n\tbackground-color: #000000;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ggd/ggt/ggt.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"some\">\n\t<div id=\"someId\"></div>\n</div>\n<div (mouseup)=\"myFunction()\" style=\"height: 600px; overflow-x: hidden; overflow-y: scroll;\">\n\t<div id=\"pp\" style=\"font-family: GurbaniAkhar\">\n \t\t<span *ngIf=\"printGGInfo\">\n \t\t<button class=\"btn btn-default\" [disabled]=\"count === 1\" (click)=\"prev()\">prIivXs</button>\n \t\t\t<button class=\"btn btn-default\" [disabled]=\"fileFetchIndex === 31 && count === listGGInfo.length - 2\" (click)=\"next()\">nYkst</button> \n \t\t\t\tSbd kwEt \n \t\t\t\t\t<input type=\"text\" (keyup)=\"jumpTo()\" [(ngModel)]=\"iIndex\" /> \n \t\t\t\t\t\t<span *ngIf=\"!(iIndex > 0 && iIndex < listGGInfo.length)\">Awut AOF rynj</span>\n\t\t\n    \t\t<div class=\"scrollbar\" id=\"style-3\">\n      \t\t\t<div class=\"force-overflow container-fluid\">\n      \t\t\t\t{{message}}\n      \t\t\t</div>\n    \t\t</div>\n \t\t\n \t\t<font color='black'> rwg : {{printGGInfo.raag}}</font><br/>\n\t\t<font color='black'> &nbsp;&nbsp; Gru : {{printGGInfo.ghar}}</font><br/>\n\t\t<font color='black'> &nbsp;&nbsp; &nbsp;&nbsp; Sbd : {{printGGInfo.index}}</font><br/>\n\t\t<font color='black'> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; pMnw : {{printGGInfo.page}}</font><br/>\n\t\t<span *ngFor=\"let pand of printGGInfo.shabadPands; let i = index\">\n\t\t\t<font color='black'> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; pMd : {{printGGInfo.shabadPands[i].number}}</font><br/>\n\t\t\t<font color='#cc0000' size='4' style='font-weight: bold'>{{printGGInfo.shabadPands[i].str}}</font><br/>\n\t\t\t<font *ngIf=\"i > 1 && printGGInfo.arthPands[i]\" color='blue'>{{printGGInfo.arthPands[i].str}}<br/></font>\n\t\t\t<font *ngIf=\"i === 0\" color='blue'>{{printGGInfo.arthPands[1].str}}<br/></font>\n\t\t\t<font *ngIf=\"i === 1\" color='blue'>{{printGGInfo.arthPands[0].str}}<br/></font>\n\t\t</span>\n\t\t</span>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/ggd/ggt/ggt.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GgtComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_http_comp__ = __webpack_require__("../../../../../src/app/services/http.comp.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import * as Lzw from 'lzwcompress'; keeping it just for syntax part
var GgtComponent = (function () {
    function GgtComponent(httpService) {
        this.httpService = httpService;
        this.count = 1; // internal counter for shabad count
        this.iIndex = 1; // user input for shabad count
        this.fileFetchIndex = 0;
    }
    GgtComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpService.getN('assets/json/ggInfo' + this.fileFetchIndex + '.json').subscribe(function (data) {
            _this.listGGInfo = data;
            _this.printGGInfo = _this.listGGInfo[_this.count];
        }, function (error) { return console.log(error); });
        this.httpService.getN('assets/json/ggd/ggsData.json').subscribe(function (data) {
            _this.ggdata = data;
        }, function (error) { return console.log(error); });
    };
    GgtComponent.prototype.next = function () {
        var _this = this;
        if (this.count < this.listGGInfo.length - 1) {
            this.count += 1;
        }
        else {
            ++this.fileFetchIndex;
            this.httpService.getN('assets/json/ggInfo' + this.fileFetchIndex + '.json').subscribe(function (data) {
                _this.listGGInfo = _this.listGGInfo.concat(data);
                _this.count += 1;
                _this.printGGInfo = _this.listGGInfo[_this.count];
            }, function (error) {
                console.log(error);
                --_this.fileFetchIndex;
            });
        }
        this.iIndex = this.count;
        this.printGGInfo = this.listGGInfo[this.count];
    };
    GgtComponent.prototype.prev = function () {
        if (this.count > 1) {
            this.count -= 1;
        }
        this.iIndex = this.count;
        this.printGGInfo = this.listGGInfo[this.count];
    };
    GgtComponent.prototype.jumpTo = function () {
        if (this.iIndex > 0 && this.iIndex < this.listGGInfo.length) {
            this.count = parseInt('' + this.iIndex, 10); // on runtime javascript assign string value to iIndex, which changes count from number to string hence this forceful casting
            this.printGGInfo = this.listGGInfo[this.count];
        }
    };
    /*
      isRaag(ggInfo: GGInfo): boolean {
        if (ggInfo.raag !== this.prevGGInfo.raag) {
          this.prevGGInfo.raag = ggInfo.raag;
          return true;
        }
        return false;
      }
  
      isGhar(ggInfo: GGInfo): boolean {
        if (ggInfo.ghar !== this.prevGGInfo.ghar) {
          this.prevGGInfo.ghar = ggInfo.ghar;
          return true;
        }
        return false;
      }
  
        isIndex(ggInfo: GGInfo): boolean {
          if (ggInfo.index && ggInfo.index !== this.prevGGInfo.index) {
            this.prevGGInfo.index = ggInfo.index;
            return true;
          }
          return false;
        }
  
      isPage(ggInfo: GGInfo): boolean {
        if (ggInfo.page && ggInfo.page !== this.prevGGInfo.page) {
          this.prevGGInfo.page = ggInfo.page;
          return true;
        }
        return false;
      }
  
      isPand(ggInfo: GGInfo): boolean {
        if (ggInfo.pand !== this.prevGGInfo.pand) {
          this.prevGGInfo.pand = ggInfo.pand;
          return true;
        }
        return false;
      }
       * */
    GgtComponent.prototype.myFunction = function () {
        var sel = window.getSelection(); // get the selection then
        if (!sel || !sel.toString()) {
            return;
        }
        var range = sel.getRangeAt(0); // the range at first selection group
        var rect = range.getBoundingClientRect(); // and convert this to useful data
        // document.getElementById('demo').innerHTML = sel;
        var someIdVar = document.getElementById('someId');
        // document.body.removeChild(someIdVar);
        someIdVar.parentNode.removeChild(someIdVar);
        var div = document.createElement('a'); // make box
        div.style.position = 'fixed'; // fixed positioning = easy mode
        div.style.top = rect.top + 'px'; // set coordinates
        div.style.left = rect.left + 'px';
        div.style.height = rect.height + 'px'; // and size
        div.style.width = rect.width + 'px';
        div.id = 'someId';
        div.href = '#';
        var att = document.createAttribute('title');
        att.value = this.getMeaning(sel.toString());
        this.message = this.getMeaning(sel.toString());
        div.setAttributeNode(att);
        document.getElementById('some').appendChild(div); // finally append
    };
    GgtComponent.prototype.getMeaning = function (input1) {
        for (var i = 0; i < this.ggdata.length; i++) {
            if (this.ggdata[i].substr(0, input1.length) === input1) {
                return this.ggdata[i];
            }
        }
    };
    return GgtComponent;
}());
GgtComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-ggt',
        template: __webpack_require__("../../../../../src/app/ggd/ggt/ggt.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ggd/ggt/ggt.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_http_comp__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_http_comp__["a" /* HttpService */]) === "function" && _a || Object])
], GgtComponent);

var _a;
//# sourceMappingURL=ggt.component.js.map

/***/ }),

/***/ "../../../../../src/app/home-about/home-about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home-about/home-about.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\n<h1>Select an app from left panel</h1>\n<br>\n<br>\n<app-about></app-about>\n"

/***/ }),

/***/ "../../../../../src/app/home-about/home-about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeAboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import {PasswdAboutComponent} from '../passwd/passwd-about/passwd-about.component';
var HomeAboutComponent = (function () {
    function HomeAboutComponent() {
    }
    HomeAboutComponent.prototype.ngOnInit = function () {
    };
    return HomeAboutComponent;
}());
HomeAboutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home-about',
        template: __webpack_require__("../../../../../src/app/home-about/home-about.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home-about/home-about.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeAboutComponent);

//# sourceMappingURL=home-about.component.js.map

/***/ }),

/***/ "../../../../../src/app/luhnalg/luhnalg.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/luhnalg/luhnalg.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  TODO Item of Luhn Algo\n</p>\n\n"

/***/ }),

/***/ "../../../../../src/app/luhnalg/luhnalg.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LuhnalgComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LuhnalgComponent = (function () {
    function LuhnalgComponent() {
    }
    LuhnalgComponent.prototype.ngOnInit = function () {
    };
    return LuhnalgComponent;
}());
LuhnalgComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-luhnalg',
        template: __webpack_require__("../../../../../src/app/luhnalg/luhnalg.component.html"),
        styles: [__webpack_require__("../../../../../src/app/luhnalg/luhnalg.component.css")]
    }),
    __metadata("design:paramtypes", [])
], LuhnalgComponent);

//# sourceMappingURL=luhnalg.component.js.map

/***/ }),

/***/ "../../../../../src/app/movie/movie-info/movie-info.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/movie/movie-info/movie-info.component.html":
/***/ (function(module, exports) {

module.exports = "<br/>\r\n<div class=\"panel panel-default\">\r\n  <div class=\"panel-heading\">Moves to watch</div>\r\n  <div class=\"panel-body\">\r\n    <p>Everything here</p>\r\n  </div>\r\n  <!-- Table -->\r\n  <table class=\"table\">\r\n  \t<tr>\r\n  \t\t<th>Move Name</th>\r\n  \t\t<th>Trailer</th>\r\n  \t\t<th>Download link</th>\r\n  \t\t<th>Subtitles</th>\r\n  \t\t<th>Click to add filter</th>\r\n  \t</tr>\r\n  \t<tr *ngFor=\"let movieInfo of movieInfos\">\r\n  \t\t<td>{{movieInfo.filter}}</td>\r\n  \t\t<td><button class=\"btn btn-default\" (click)=\"updateUrl(movieInfo.youtube)\">Show Trailer</button></td>\r\n  \t\t<td><button class=\"btn btn-default\" ngxClipboard [cbContent]=\"movieInfo.magnet\">Copy Download Link</button></td>\r\n  \t\t<!-- <td><button class=\"btn btn-default\" [class.btn-success]=\"isCopiedM\" ngxClipboard [cbContent]=\"movieInfo.magnet\"\t(cbOnSuccess)=\"isCopiedM = true\">Copy Download Link</button></td> -->\r\n  \t\t<td><a href=\"{{movieInfo.subscene}}\">Download SubTitle</a></td>\r\n  \t\t<td><button class=\"btn btn-default\" (click)=\"addFilter(movieInfo.filter)\">Add to Filter</button></td>\r\n  \t</tr>\r\n  </table>\r\n  \r\n  <!-- 16:9 aspect ratio -->\r\n\t<div class=\"embed-responsive embed-responsive-16by9\">\r\n\t  <iframe class=\"embed-responsive-item\" [src]=\"trailerUrl\"></iframe>\r\n\t</div>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/movie/movie-info/movie-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_http_comp__ = __webpack_require__("../../../../../src/app/services/http.comp.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MovieInfoComponent = (function () {
    function MovieInfoComponent(httpService, sanitizer) {
        this.httpService = httpService;
        this.sanitizer = sanitizer;
        this.isCopiedM = false;
    }
    MovieInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        //    this.httpService.getAny('assets/json/movies/movieInfos.json', this).subscribe(
        this.httpService.getAny('/mov/movieg', this).subscribe(function (data) {
            _this.movieInfos = data;
        }, function (error) { return console.log(error); });
        this.trailerUrl = this.sanitizer.bypassSecurityTrustResourceUrl(''); // to avoid error
    };
    //  ngOnInit() {
    //    this.movieInfo = MovieInfo.getEmptyInstance();
    //    this.movieInfo.movie = 'The+Nice+Guys+2016+1080p+BluRay+x264+DTSJYK';
    //    this.movieInfo.magnet = 'magnet:?xt=urn:btih:03d8bd2ebc1e98938ac723733361f3e6237f8bf3&dn=The+Nice+Guys+2016+1080p+BluRay+x264+DTS-JYK&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Fzer0day.ch%3A1337&tr=udp%3A%2F%2Fopen.demonii.com%3A1337&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Fexodus.desync.com%3A6969';
    //    this.movieInfo.filter = '';
    //    this.movieInfo.youtube = 'https://www.youtube.com/watch?v=WVd-EuoEf3U';
    //    this.movieInfo.subscene = 'https://subscene.com/subtitle/download?mac=xDf75kLZe73KxoZlXPu6Pv_BOAf_F91JK1-U76wj4q4B7_M90iSSJJTO1hszxAm2LP84lqJvNqdVbPEZi8exeBfgWhaWtyZmOVjh9n7xLvK5JcNwc1X4Wum9D2hlrNg50';
    //  }
    MovieInfoComponent.prototype.updateUrl = function (url) {
        this.trailerUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url.replace('watch?v=', 'embed/'));
    };
    MovieInfoComponent.prototype.addFilter = function (movie) {
        var _this = this;
        this.httpService.postSRetStr('/mov/addMovie', movie, this).subscribe(function (data) {
            _this.message = data;
            if (data === 'Success') {
                _this.message = 'API call was success';
                var newList = _this.movieInfos.filter(function (obj) {
                    return obj.filter !== movie;
                });
                _this.movieInfos = newList;
            }
            else if (data === 'Failed') {
                _this.message = 'Persistence Failed';
            }
            else {
                _this.message = 'Not expected flow M1';
            }
        }, function (error) {
            console.log(error);
            _this.message = 'Problem occurred';
        });
    };
    return MovieInfoComponent;
}());
MovieInfoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-movie-info',
        template: __webpack_require__("../../../../../src/app/movie/movie-info/movie-info.component.html"),
        styles: [__webpack_require__("../../../../../src/app/movie/movie-info/movie-info.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_http_comp__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_http_comp__["a" /* HttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _b || Object])
], MovieInfoComponent);

var _a, _b;
//# sourceMappingURL=movie-info.component.js.map

/***/ }),

/***/ "../../../../../src/app/movie/movie-list/movie-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/movie/movie-list/movie-list.component.html":
/***/ (function(module, exports) {

module.exports = "<ul *ngFor=\"let movie of movieFilters\">\n\t<li>{{movie}}</li>\n</ul>"

/***/ }),

/***/ "../../../../../src/app/movie/movie-list/movie-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_http_comp__ = __webpack_require__("../../../../../src/app/services/http.comp.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MovieListComponent = (function () {
    function MovieListComponent(httpService) {
        this.httpService = httpService;
    }
    MovieListComponent.prototype.ngOnInit = function () {
        var _this = this;
        //    this.httpService.getAny('assets/json/movies/movieFilter.json', this).subscribe(
        this.httpService.getAny('/mov/mlg', this).subscribe(function (data) {
            _this.movieFilters = data;
        }, function (error) { return console.log(error); });
    };
    return MovieListComponent;
}());
MovieListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-movie-list',
        template: __webpack_require__("../../../../../src/app/movie/movie-list/movie-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/movie/movie-list/movie-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_http_comp__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_http_comp__["a" /* HttpService */]) === "function" && _a || Object])
], MovieListComponent);

var _a;
//# sourceMappingURL=movie-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/movie/movie-parsed/movie-parsed.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/movie/movie-parsed/movie-parsed.component.html":
/***/ (function(module, exports) {

module.exports = "<ul *ngFor=\"let movieList of movieLists; let i = index\">\r\n\t<li>Page {{i}}\r\n\t\t<ul *ngFor=\"let moviee of movieList\">\r\n\t\t\t<li>{{moviee.movie}} -> {{moviee.filter}}</li>\r\n\t\t</ul>\r\n\t</li>\r\n</ul>"

/***/ }),

/***/ "../../../../../src/app/movie/movie-parsed/movie-parsed.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieParsedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_http_comp__ = __webpack_require__("../../../../../src/app/services/http.comp.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MovieParsedComponent = (function () {
    function MovieParsedComponent(httpService) {
        this.httpService = httpService;
    }
    MovieParsedComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.httpService.getAny('assets/json/movies/parsedMovies.json', this).subscribe(
        this.httpService.getAny('/mov/mpg', this).subscribe(function (data) {
            _this.movieLists = data;
        }, function (error) { return console.log(error); });
    };
    return MovieParsedComponent;
}());
MovieParsedComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-movie-parsed',
        template: __webpack_require__("../../../../../src/app/movie/movie-parsed/movie-parsed.component.html"),
        styles: [__webpack_require__("../../../../../src/app/movie/movie-parsed/movie-parsed.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_http_comp__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_http_comp__["a" /* HttpService */]) === "function" && _a || Object])
], MovieParsedComponent);

var _a;
//# sourceMappingURL=movie-parsed.component.js.map

/***/ }),

/***/ "../../../../../src/app/movie/movie.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/movie/movie.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n\n<div class=\"page-header\"><h3 align=\"center\">Movie Parser</h3></div>\n\n<ul class=\"nav nav-tabs nav-justified\">\n  <li class=\"nav-item\"><a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"mi\">Movie Info</a></li>\n  <li class=\"nav-item\"><a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"ml\">Movie Filter</a></li>\n  <li class=\"nav-item\"><a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"mp\">Movie Parsed</a></li>\n</ul>\n<div>\n\t<router-outlet></router-outlet>\n</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/movie/movie.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieComponent; });
/* unused harmony export MovieInfo */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MovieComponent = (function () {
    function MovieComponent() {
    }
    MovieComponent.prototype.ngOnInit = function () {
    };
    return MovieComponent;
}());
MovieComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-movie',
        template: __webpack_require__("../../../../../src/app/movie/movie.component.html"),
        styles: [__webpack_require__("../../../../../src/app/movie/movie.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MovieComponent);

var MovieInfo = (function () {
    function MovieInfo() {
    }
    MovieInfo.getEmptyInstance = function () {
        var emptyObj = {
            movie: '',
            magnet: '',
            filter: '',
            youtube: '',
            subscene: ''
        };
        return emptyObj;
    };
    return MovieInfo;
}());

//# sourceMappingURL=movie.component.js.map

/***/ }),

/***/ "../../../../../src/app/not-used-feature/not-used-feature.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/not-used-feature/not-used-feature.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n\t<div class=\"form-group\">\r\n\t\tMessage = {{hello}}\r\n\t</div>\r\n\t<div class=\"form-group\">\r\n\t\t<button (click)=\"onClickGet()\">get</button>\r\n\t</div>\r\n\t<div class=\"form-group\">\r\n\t\t<button (click)=\"onClickGetS()\">get with contnet type text</button>\r\n\t</div>\r\n\t<div class=\"form-group\">\r\n\t\t<button (click)=\"onClickGetCM()\">get with catch and map</button>\r\n\t</div>\r\n\t<div class=\"form-group\">\r\n\t\t<button (click)=\"onClickGetP()\">get with parameter</button>\r\n\t</div>\r\n<!-- \t<div class=\"form-group\">\r\n\t\t<button (click)=\"onClickGetI()\">get with id</button>\r\n\t</div> -->\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/not-used-feature/not-used-feature.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotUsedFeatureComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_http_comp__ = __webpack_require__("../../../../../src/app/services/http.comp.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NotUsedFeatureComponent = (function () {
    function NotUsedFeatureComponent(http, httpService) {
        this.http = http;
        this.httpService = httpService;
        this.hello = 'Hello Default';
    }
    NotUsedFeatureComponent.prototype.ngOnInit = function () {
        console.log('init called');
    };
    NotUsedFeatureComponent.prototype.ngOnDestroy = function () {
        console.log('destroy called');
    };
    NotUsedFeatureComponent.prototype.onClickGet = function () {
        var _this = this;
        this.httpService.getN('/greeting').subscribe(function (result) {
            _this.hello = result['content'];
        }, function (errorRes) {
            console.log('error occured');
        });
    };
    NotUsedFeatureComponent.prototype.onClickGetS = function () {
        var _this = this;
        this.httpService.getS('/greetingstr').subscribe(function (result) {
            _this.hello = result;
        });
    };
    NotUsedFeatureComponent.prototype.onClickGetP = function () {
        var _this = this;
        console.log('clicking');
        this.httpService.getP('/greeting', { 'name': 'SomeName' }).subscribe(function (result) {
            _this.hello = result['content'];
        });
    };
    NotUsedFeatureComponent.prototype.onClickI = function () {
        var _this = this;
        console.log('clicking');
        this.httpService.getN('/greeting/5').subscribe(function (result) {
            _this.hello = result['content'];
        });
    };
    NotUsedFeatureComponent.prototype.onClick = function () {
        var _this = this;
        console.log('clicking');
        this.httpService
            .postN('/postgreeting')
            .subscribe(function (result) {
            _this.hello = result['content'];
            console.log(_this.hello);
        });
    };
    NotUsedFeatureComponent.prototype.onClickGetCM = function () {
        var _this = this;
        this.http.get('/greeting').map(this.reqMapping).catch(this.errorHandling).subscribe(function (result) {
            console.log('subscriber being executed');
            _this.hello = result;
        }, function (errorRes) {
            console.log('subscriber error part being executed');
        });
    };
    NotUsedFeatureComponent.prototype.reqMapping = function (res) {
        console.log('map part for request');
        var body = res.json;
        return body;
    };
    NotUsedFeatureComponent.prototype.errorHandling = function (error) {
        console.log('error occured');
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw('eeerrror');
    };
    return NotUsedFeatureComponent;
}());
NotUsedFeatureComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-not-used-feature',
        template: __webpack_require__("../../../../../src/app/not-used-feature/not-used-feature.component.html"),
        styles: [__webpack_require__("../../../../../src/app/not-used-feature/not-used-feature.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_http_comp__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_http_comp__["a" /* HttpService */]) === "function" && _b || Object])
], NotUsedFeatureComponent);

var _a, _b;
//# sourceMappingURL=not-used-feature.component.js.map

/***/ }),

/***/ "../../../../../src/app/o-auth/o-auth.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/o-auth/o-auth.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\t<div class=\"form-group\">\n\t\t<button class=\"btn btn-primary\" type=\"button\" [disabled]=\"false\" (click)=\"gitCodeGeneration()\">Submit to login via git</button>\n\t</div>\n\t<div class=\"form-group\">\n\t\t<button class=\"btn btn-primary\" type=\"button\" [disabled]=\"false\" (click)=\"gitGeneratedCode()\">Check level 1 authentication passed</button>\n\t</div>\n\t<div class=\"form-group\">\n\t\t<button class=\"btn btn-primary\" type=\"button\" [disabled]=\"!this.code\" (click)=\"gitGetBearer()\">Perform level 2 authentication</button>\n\t</div>\n</div>\n{{message}}"

/***/ }),

/***/ "../../../../../src/app/o-auth/o-auth.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OAuthComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_http_comp__ = __webpack_require__("../../../../../src/app/services/http.comp.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OAuthComponent = (function () {
    function OAuthComponent(httpService, activatedRoute, location) {
        this.httpService = httpService;
        this.activatedRoute = activatedRoute;
        this.location = location;
        this.clientId = '66e7f15d28f2db6af2fe';
        this.clientSecret = 'd2e4fc7dfce452639e117d31ecf569a5a95b61ef';
        this.redirectUri = 'http://localhost:4200/oa';
        this.generalUri = 'http://sim.io';
    }
    OAuthComponent.prototype.gitCodeGeneration = function () {
        window.location.href = 'http://github.com/login/oauth/authorize' + '?client_id=' + this.clientId + '&scope=repo&redirect_uri=' + this.redirectUri;
        //    this.httpService.getAny('http://github.com/login/oauth/authorize' + '?client_id=' + this.clientId + '&scope=repo&redirect_uri=' + this.redirectUri, this).subscribe(res => {
        //      this.message = res;
        //    }
        //      , errRes => {
        //        this.message = 'Call to git failed';
        //      });
    };
    OAuthComponent.prototype.gitGeneratedCode = function () {
        var _this = this;
        this.httpService.getAny('oauth/gitcode', this).subscribe(function (res) {
            _this.code = res;
            _this.message = res;
        }, function (errRes) {
            _this.message = 'Call to get code failed';
        });
    };
    OAuthComponent.prototype.gitGetBearer = function () {
        //    window.location.href = 'http://github.com/login/oauth/access_token' + '?client_id=' + this.clientId + '&client_secret=' + this.clientSecret + '&code=' + this.code + '&redirect_uri=' + this.redirectUri;
        var _this = this;
        //    this.httpService.postRetStr('https://github.com/login/oauth/access_token', {client_id: this.clientId, client_secret: this.clientSecret, code: this.code}, this).subscribe(res => {
        //      this.anyObj = res;
        ////      this.token = res.security_token;
        ////      this.type = res.type;
        //    }
        //      , errRes => {
        //        this.message = 'Call to get code failed';
        //      });
        this.httpService.getAny('http://github.com/login/oauth/access_token' + '?client_id=' + this.clientId + '&client_secret=' + this.clientSecret + '&code=' + this.code + '&redirect_uri=' + this.redirectUri, this).subscribe(function (res) {
            _this.token = res;
            _this.message = res;
            console.log(res);
        }, function (errRes) {
            _this.message = 'Call to get code failed';
        });
    };
    OAuthComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.queryParams.subscribe(function (params) {
            console.log(JSON.stringify(params));
            console.log(params['code']);
            _this.code = params['code'];
            console.log(JSON.stringify(params));
            console.log(params['access_token']);
            _this.token = params['access_token'];
            console.log(params['token_type']);
            _this.tokenType = params['token_type'];
        });
        this.location.replaceState('oa');
    };
    return OAuthComponent;
}());
OAuthComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'app-o-auth',
        template: __webpack_require__("../../../../../src/app/o-auth/o-auth.component.html"),
        styles: [__webpack_require__("../../../../../src/app/o-auth/o-auth.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_http_comp__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_http_comp__["a" /* HttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */]) === "function" && _c || Object])
], OAuthComponent);

var _a, _b, _c;
//# sourceMappingURL=o-auth.component.js.map

/***/ }),

/***/ "../../../../../src/app/passwd/passwd-about/passwd-about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/passwd/passwd-about/passwd-about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\tThis tool is created to solve purpose of having different password for each login and to keep these safely. A person create his/her login into many websites\n\twith pattern of same user name (generally email id) and same password so that it can be remembered.\n\t<ul>\n\t\t<li>If one website get hacked in a manner that hacker have both your user name and password then it can be assumed all your accounts can now be easily\n\t\t\thacked.</li>\n\t\t<li>Even if you create different password for each site then you have to store it somewhere(ofcourse there will be pattern in it as well). Now storage\n\t\t\tlocation is another source of problem to manage.</li>\n\t</ul>\n\tUsing this tool you can\n\t<ul>\n\t\t<li>Generate very strong password. ASSUMING password stored by browser is very very safe, so you can save it there so that you don't have to retrieve it\n\t\t\talways.</li>\n\t\t<li>Get encrypted text of your password. You can save it safely anywhere (online as well) as no one will be able to decrypt it. It is using AES 256bit\n\t\t\tencryption</li>\n\t\t<li>Only you can decrypt it with combination of your valut password and salt. NOTE: create very big vault password like sentence, never share it with\n\t\t\tanyone, for first time get generated salt and remember it for future uses</li>\n\t\t<li>This tool can save your encrypted password for you. You need to provide user id against which this will be saved. So if you want retrieve it\n\t\t\tlater then just provide user id. This tool will look up stored encrypted password with you. NOTE: it doesn't store decrypted password so you have to decrypt\n\t\t\tit if you need that. Your user id should be enough but duplicate user id can happen hence 4 digit passcode is also expected with it</li>\n\t</ul>\n</div>"

/***/ }),

/***/ "../../../../../src/app/passwd/passwd-about/passwd-about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswdAboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PasswdAboutComponent = (function () {
    function PasswdAboutComponent() {
    }
    PasswdAboutComponent.prototype.ngOnInit = function () {
    };
    return PasswdAboutComponent;
}());
PasswdAboutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-passwd-about',
        template: __webpack_require__("../../../../../src/app/passwd/passwd-about/passwd-about.component.html"),
        styles: [__webpack_require__("../../../../../src/app/passwd/passwd-about/passwd-about.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PasswdAboutComponent);

//# sourceMappingURL=passwd-about.component.js.map

/***/ }),

/***/ "../../../../../src/app/passwd/passwd-retrieve/passwd-retrieve.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/passwd/passwd-retrieve/passwd-retrieve.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\t<div *ngIf=\"!retrieved\">\n\t\t<div class=\"form-group\">\n\t\t\t<label>User Id</label> <input type=\"text\" class=\"form-control\" required #userv=\"ngModel\" placeholder=\"user id for saving encrypted password\"\n\t\t\t\t[(ngModel)]=\"passwdSaveInfo.userId\" required>\n\t\t\t<div *ngIf=\"userv.invalid && (userv.dirty || userv.touched)\" class=\"alert alert-danger\">\n\t\t\t\t<div *ngIf=\"userv.errors.required\">User id is mandatory as this is the user against which password will be stored.</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"form-group\">\n\t\t\t<label>Passcode</label> <input type=\"text\" class=\"form-control\" required pattern=\"^[0-9]{4,4}$\" #passcodev=\"ngModel\" placeholder=\"4 digit\"\n\t\t\t\t[(ngModel)]=\"passwdSaveInfo.passCode\">\n\t\t\t<div *ngIf=\"passcodev.invalid && (passcodev.dirty || passcodev.touched)\" class=\"alert alert-danger\">\n\t\t\t\t<div *ngIf=\"passcodev.errors.pattern\">Digit only and must be 4 characters long.</div>\n\t\t\t\t<div *ngIf=\"passcodev.errors.required\">Passcode is mandatory. Its to know its really you.</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"form-group\">\n\t\t\t<button class=\"btn btn-primary\" type=\"button\" [disabled]=\"!passwdSaveInfo.userId || !passwdSaveInfo.passCode || (passwdSaveInfo.passCode && (passwdSaveInfo.passCode.match('[^0-9]') || passwdSaveInfo.passCode.length != 4))\" (click)=\"submitInput()\">Submit to get list</button>\n\t\t</div>\n\t</div>\n\t<span class=\"form-text text-muted\" [innerHTML]=\"message\"></span>\n\t<div *ngIf=\"retrieved\">\n\t\t<table class=\"table\">\n\t\t\t<tr>\n\t\t\t\t<th>Reference Text</th>\n\t\t\t\t<th>Encrypted Password</th>\n\t\t\t\t<th></th>\n\t\t\t</tr>\n\t\t\t<tr *ngFor=\"let key of objectKeys(mapObject)\">\n\t\t\t\t<td>{{key}}</td>\n\t\t\t\t<td>{{mapObject[key]}}</td>\n\t\t\t\t<td><a routerLink=\"../pdec\" class=\"btn btn-success pull-right\" (click)=\"decPasswd(mapObject[key]);\"> Decrypt it </a></td>\n\t\t\t</tr>\n\t\t</table>\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/passwd/passwd-retrieve/passwd-retrieve.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswdRetrieveComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__passwd_component__ = __webpack_require__("../../../../../src/app/passwd/passwd.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_http_comp__ = __webpack_require__("../../../../../src/app/services/http.comp.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_share_data_service__ = __webpack_require__("../../../../../src/app/services/share-data-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PasswdRetrieveComponent = (function () {
    function PasswdRetrieveComponent(httpService, shareDataService) {
        this.httpService = httpService;
        this.shareDataService = shareDataService;
        this.passwdSaveInfo = __WEBPACK_IMPORTED_MODULE_1__passwd_component__["c" /* PasswdSaveInfo */].getEmptyInstance();
        this.objectKeys = Object.keys;
    }
    PasswdRetrieveComponent.prototype.ngOnInit = function () {
    };
    PasswdRetrieveComponent.prototype.submitInput = function () {
        var _this = this;
        this.httpService.postRetObj('/retPasswd', this.passwdSaveInfo, this).subscribe(function (result2) {
            _this.mapObject = result2;
            for (var key in _this.mapObject) {
                if (_this.mapObject.hasOwnProperty(key)) {
                    console.log(key + ' ' + _this.mapObject[key]);
                }
            }
            _this.retrieved = true; // need to move this set after setting mapOjbect otherwise we get of rendering null mapObject because as soon as retrieved becomes true mapObject is rendered
            if (!_this.mapObject) {
                _this.message = 'Not expected flow R2';
            }
            else {
                _this.message = '';
            }
        }, function (errorRes) {
            _this.message = errorRes.error.message;
            if (_this.message === 'User not found') {
                _this.message = 'There is no stored password for this user';
            }
            else if (_this.message === 'User not authenticated') {
                _this.message = 'For this usere passcode didn\'t matched. Try again.';
            }
            else if (_this.message === 'Failed') {
                _this.message = 'Backend problem R3';
            }
            else if (_this.message) {
                _this.message = 'Strange, you bypassed frontend validation<br/>' + _this.message;
            }
            else {
                _this.message = 'Not expected flow R1';
            }
            if (!errorRes.error) {
                _this.message = 'User and/or passcode didn\'t matched'; // can't get error response from backcend because response type is not string hence this workaround
            }
        });
    };
    PasswdRetrieveComponent.prototype.decPasswd = function (encPasswd) {
        this.shareDataService.sharedEncPasswd = encPasswd;
    };
    return PasswdRetrieveComponent;
}());
PasswdRetrieveComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-passwd-retrieve',
        template: __webpack_require__("../../../../../src/app/passwd/passwd-retrieve/passwd-retrieve.component.html"),
        styles: [__webpack_require__("../../../../../src/app/passwd/passwd-retrieve/passwd-retrieve.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_http_comp__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_http_comp__["a" /* HttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_share_data_service__["a" /* ShareDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_share_data_service__["a" /* ShareDataService */]) === "function" && _b || Object])
], PasswdRetrieveComponent);

var _a, _b;
//# sourceMappingURL=passwd-retrieve.component.js.map

/***/ }),

/***/ "../../../../../src/app/passwd/passwd-save/passwd-save.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/passwd/passwd-save/passwd-save.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n\r\n\t<div class=\"row\">\r\n\t    <div class=\"input-group\">\r\n\t      <span class=\"input-group-addon\">\r\n\t\t\t<input type=\"checkbox\" class=\"checkbox-primary\" [(ngModel)]=\"existingUser\">\r\n\t      </span>\r\n\t      <span *ngIf=\"existingUser\" class=\"form-text text-muted\">Existing User</span>\r\n\t      <span *ngIf=\"!existingUser\" class=\"form-text text-muted\">Create New User for saving password</span>\r\n\t    </div><!-- /input-group -->\r\n\t</div><!-- /row -->\r\n\t\r\n\t<div class=\"form-group\">\r\n\t  <label>User Id</label>\r\n\t  <input type=\"text\" class=\"form-control\" required #userv=\"ngModel\" placeholder=\"User id for saving encrypted password. This is not your vault password\" [(ngModel)]=\"passwdSaveInfo.userId\" required>\r\n\t  <div *ngIf=\"userv.invalid && (userv.dirty || userv.touched)\" class=\"alert alert-danger\">\r\n\t\t\t<div *ngIf=\"userv.errors.required\">User id is mandatory as this is the user against which password will be stored.</div>\r\n\t  </div>\r\n\t</div>\r\n\t<div class=\"form-group\">\r\n\t  <label>Passcode</label>\r\n\t  <input type=\"text\" class=\"form-control\" required pattern=\"^[0-9]{4,4}$\" #passcodev=\"ngModel\" placeholder=\"4 digit\" [(ngModel)]=\"passwdSaveInfo.passCode\">\r\n\t  <div *ngIf=\"passcodev.invalid && (passcodev.dirty || passcodev.touched)\" class=\"alert alert-danger\">\r\n\t\t\t<div *ngIf=\"passcodev.errors.pattern\">Digit only and must be 4 characters long.</div>\r\n\t\t\t<div *ngIf=\"passcodev.errors.required\">Passcode is mandatory. Its to know its really you.</div>\r\n\t  </div>\r\n\t</div>\r\n\t<br/>\r\n\t<div class=\"form-group\">\r\n\t  <label>Reference Text</label>\r\n\t  <input type=\"text\" class=\"form-control\" required #reftv=\"ngModel\" placeholder=\"Some text which can tell what this password is for, for e.g. website name\" [(ngModel)]=\"passwdSaveInfo.refText\">\r\n\t  <div *ngIf=\"reftv.invalid && (reftv.dirty || reftv.touched)\" class=\"alert alert-danger\">\r\n\t\t\t<div *ngIf=\"reftv.errors.required\">Yeah it's mandatory otherwise how will you know that what this is for</div>\r\n\t  </div>\r\n\t</div>\r\n\t<div class=\"form-group\">\r\n\t\t<label>Encrypted Password</label>\r\n\t\t<input type=\"text\" class=\"form-control\" required pattern=\"^.{64,64}$\" #encPasswdv=\"ngModel\" placeholder=\"Your encrypted password\" [(ngModel)]=\"passwdSaveInfo.encPasswd\">\r\n\t\t<div *ngIf=\"encPasswdv.invalid && (encPasswdv.dirty || encPasswdv.touched)\" class=\"alert alert-danger\">\r\n\t\t\t<div *ngIf=\"encPasswdv.errors.pattern\">Your encrypted password have to be 64 character long.</div>\r\n\t\t\t<div *ngIf=\"encPasswdv.errors.required\">This is what you are going to decrypt hence it is mandatory</div>\r\n\t  </div>\r\n\t</div>\r\n\t\r\n\t<div class=\"form-group\" > <!-- two condition like isPopulated(passwdSaveInfo) && !existingUser doesn't work for disabled property but work in *ngIf -->\r\n\t\t<button [disabled]=\"!isPopulated() || !existingUser\" class=\"btn btn-primary\" type=\"button\" (click)=\"submitInput()\">Submit to save</button> <!--  how to enable disable [disabled] didn't work -->\r\n\t\t<button [disabled]=\"!isPopulated() || existingUser\" class=\"btn btn-primary\" type=\"button\" (click)=\"createUser()\">Create New</button>\r\n\t</div>\r\n\t\r\n\t<div class=\"form-group\"  >\r\n\t<span class=\"form-text text-muted\" [innerHTML]=\"message\"></span>\r\n\t</div>\r\n\r\n\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/passwd/passwd-save/passwd-save.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswdSaveComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__passwd_component__ = __webpack_require__("../../../../../src/app/passwd/passwd.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_http_comp__ = __webpack_require__("../../../../../src/app/services/http.comp.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_share_data_service__ = __webpack_require__("../../../../../src/app/services/share-data-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PasswdSaveComponent = (function () {
    function PasswdSaveComponent(httpService, shareDataService) {
        this.httpService = httpService;
        this.shareDataService = shareDataService;
        this.existingUser = true;
        this.message = '';
        this.passwdSaveInfo = __WEBPACK_IMPORTED_MODULE_1__passwd_component__["c" /* PasswdSaveInfo */].getEmptyInstance();
    }
    PasswdSaveComponent.prototype.ngOnInit = function () {
        this.passwdSaveInfo.encPasswd = this.shareDataService.sharedEncPasswd;
    };
    PasswdSaveComponent.prototype.submitInput = function () {
        var _this = this;
        this.httpService.postRetVoid('/savePasswd', this.passwdSaveInfo, this).subscribe(function (nullRes) {
            _this.message = 'Saved';
        }, function (errorRes) {
            _this.message = errorRes.error.message;
            if (_this.message === 'User not found') {
                _this.message = 'This user doesn\'t exist. For creating new user uncheck the checkbox';
                console.log(_this.message.endsWith('button'));
            }
            else if (_this.message === 'User not authenticated') {
                _this.message = 'Passcode didn\'t matched. If you intend to create new user then select different user id';
            }
            else if (_this.message.endsWith('DB failed')) {
                _this.message = 'Transaction to database call failed';
            }
            else if (_this.message) {
                _this.message = 'Strange, you bypassed frontend validation<br/>' + _this.message;
            }
            else {
                _this.message = 'Not expected flow S1';
            }
        });
    };
    PasswdSaveComponent.prototype.isPopulated = function () {
        return __WEBPACK_IMPORTED_MODULE_1__passwd_component__["c" /* PasswdSaveInfo */].isPopulated(this.passwdSaveInfo);
    };
    PasswdSaveComponent.prototype.createUser = function () {
        var _this = this;
        this.httpService.postRetVoid('/newUser', this.passwdSaveInfo, this).subscribe(function (nullRes) {
            _this.message = 'Saved';
        }, function (errorRes) {
            _this.message = errorRes.error.message;
            if (_this.message === 'User exist') {
                _this.message = 'This user id already taken please provide new';
            }
            else if (_this.message.endsWith('DB failed')) {
                _this.message = 'Transaction to database call failed';
            }
            else if (_this.message) {
                _this.message = 'Strange, you bypassed frontend validation<br/>' + _this.message;
            }
            else {
                _this.message = 'Not expected flow S1';
            }
        });
    };
    PasswdSaveComponent.prototype.ngOnDestroy = function () {
        this.shareDataService.sharedEncPasswd = undefined; // this is for case when user jumped from generate to save, in this case this value get shown in retrieve screen as well
    };
    return PasswdSaveComponent;
}());
PasswdSaveComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-passwd-save',
        template: __webpack_require__("../../../../../src/app/passwd/passwd-save/passwd-save.component.html"),
        styles: [__webpack_require__("../../../../../src/app/passwd/passwd-save/passwd-save.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_http_comp__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_http_comp__["a" /* HttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_share_data_service__["a" /* ShareDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_share_data_service__["a" /* ShareDataService */]) === "function" && _b || Object])
], PasswdSaveComponent);

var _a, _b;
//# sourceMappingURL=passwd-save.component.js.map

/***/ }),

/***/ "../../../../../src/app/passwd/passwd.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/passwd/passwd.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n\r\n<div class=\"page-header\"><h3 align=\"center\">Password App</h3></div>\r\n\r\n<ul class=\"nav nav-tabs nav-justified\">\r\n  <li class=\"nav-item\"><a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"pgen\">Generate Password</a></li>\r\n  <li class=\"nav-item\"><a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"pdec\">Decrypt Password</a></li>\r\n  <li class=\"nav-item\"><a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"pSave\">Save Password</a></li>\r\n  <li class=\"nav-item\"><a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"pRet\">Retrieve Password</a></li>\r\n  <li class=\"nav-item\"><a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"pAbout\">About</a></li>\r\n</ul>\r\n<div>\r\n\t<router-outlet></router-outlet>\r\n</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/passwd/passwd.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswdComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PasswdInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return PasswdSaveInfo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PasswdComponent = (function () {
    function PasswdComponent() {
    }
    PasswdComponent.prototype.ngOnInit = function () {
    };
    return PasswdComponent;
}());
PasswdComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-passwd',
        template: __webpack_require__("../../../../../src/app/passwd/passwd.component.html"),
        styles: [__webpack_require__("../../../../../src/app/passwd/passwd.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PasswdComponent);

var PasswdInfo = (function () {
    function PasswdInfo() {
    }
    PasswdInfo.getEmptyInstance = function () {
        var emptyObj = {
            passwd: '',
            salt: '',
            generatedPasswd: '',
            encryptedPasswd: ''
        };
        return emptyObj;
    };
    return PasswdInfo;
}());

var PasswdSaveInfo = (function () {
    function PasswdSaveInfo() {
    }
    PasswdSaveInfo.getEmptyInstance = function () {
        var emptyObj = {
            userId: '',
            passCode: '',
            refText: '',
            encPasswd: ''
        };
        return emptyObj;
    };
    PasswdSaveInfo.isPopulated = function (obj) {
        return obj !== undefined
            && obj.userId
            && obj.passCode !== undefined && obj.passCode.match('^[0-9]{4}$')
            && obj.refText
            && obj.encPasswd !== undefined && obj.encPasswd.length === 64;
    };
    return PasswdSaveInfo;
}());

//# sourceMappingURL=passwd.component.js.map

/***/ }),

/***/ "../../../../../src/app/passwd/passwddecrypt/passwddecrypt.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/passwd/passwddecrypt/passwddecrypt.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div>\n\t<div class=\"input-group\">\n\t  <span class=\"input-group-addon\">Vault Password</span>\n\t  <input type=\"text\" class=\"form-control\" placeholder=\"vPasswd\" [(ngModel)]=\"passwdInfo.passwd\">\n\t</div>\n</div> -->\n\n\n<div class=\"container-fluid\">\n\t<div class=\"form-group\"> <!-- input group can be used but it shorten the input length -->\n\t  <label>Vault Password:</label>\n\t  <input type=\"text\" class=\"form-control\" required #passwdv=\"ngModel\" placeholder=\"Big vault password\" [(ngModel)]=\"passwdInfo.passwd\">\n\t  <div *ngIf=\"passwdv.invalid && (passwdv.dirty || passwdv.touched)\" class=\"alert alert-danger\">\n\t\t\t<div *ngIf=\"passwdv.errors.required\">Valut password is mandatory.</div>\n\t  </div>\n\t</div>\n\t<div class=\"form-group\">\n\t  <label>Salt:</label>\n\t  <input type=\"text\" class=\"form-control\" required pattern=\"^[0-9]{8,8}$\" #saltv=\"ngModel\" placeholder=\"8 digit salt\" [(ngModel)]=\"passwdInfo.salt\">\n\t  <div *ngIf=\"saltv.invalid && (saltv.dirty || saltv.touched)\" class=\"alert alert-danger\">\n\t\t\t<div *ngIf=\"saltv.errors.pattern\">Digit only and must be 8 characters long.</div>\n\t\t\t<div *ngIf=\"saltv.errors.required\">Salt is mandatory.</div>\n\t  </div>\n\t</div>\n\t<div class=\"form-group\">\n\t  <label>Encrypted Password:</label>\n\t  <input type=\"text\" class=\"form-control\" required pattern=\"^.{64,64}$\" #encv=\"ngModel\" placeholder=\"encrypted password string\" [(ngModel)]=\"passwdInfo.encryptedPasswd\">\n\t  <div *ngIf=\"encv.invalid && (encv.dirty || encv.touched)\" class=\"alert alert-danger\">\n\t\t\t<div *ngIf=\"encv.errors.pattern\">It's length has to be exact 64</div>\n\t\t\t<div *ngIf=\"encv.errors.required\">To decrypt you need to provide encrypted password.</div>\n\t  </div>\n\t</div>\n\t<div class=\"form-group\" *ngIf=\"!passwdInfo.generatedPasswd\">\n\t\t<button [disabled]=\"!passwdInfo.passwd || !passwdInfo.salt || (passwdInfo.salt && (passwdInfo.salt.length !== 8 || passwdInfo.salt.match('[^0-9]'))) || !passwdInfo.encryptedPasswd || (passwdInfo.encryptedPasswd && (passwdInfo.encryptedPasswd.length != 64)) \" \n\t\tclass=\"btn btn-primary\" type=\"button\" (click)=\"submitInput()\">Submit to get generated password</button>\n\t</div>\n\t<span class=\"form-text text-muted\" [innerHTML]=\"message\"></span>\n\t<div class=\"input-group form-group\" *ngIf=\"passwdInfo.generatedPasswd\">\n\t  <span class=\"input-group-addon\">Generated Password</span>\n\t  <span class=\"form-control\" >{{passwdInfo.generatedPasswd}}</span>\n\t  <span class=\"input-group-btn\">\n        <button class=\"btn btn-default\" [class.btn-success]= \"isCopiedE\" type=\"button\" ngxClipboard [cbContent]=\"passwdInfo.generatedPasswd\" (cbOnSuccess)=\"isCopiedE = true\">Copy to clipboard</button>\n      </span>\n\t</div>\n\t<div class=\"form-group\" *ngIf=\"passwdInfo.generatedPasswd\">\n\t\t<button class=\"btn btn-warning\" type=\"button\" (click)=\"resetInput()\">Reset</button>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/passwd/passwddecrypt/passwddecrypt.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswddecryptComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__passwd_component__ = __webpack_require__("../../../../../src/app/passwd/passwd.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_http_comp__ = __webpack_require__("../../../../../src/app/services/http.comp.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_share_data_service__ = __webpack_require__("../../../../../src/app/services/share-data-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PasswddecryptComponent = (function () {
    function PasswddecryptComponent(httpService, shareDataService) {
        this.httpService = httpService;
        this.shareDataService = shareDataService;
        this.message = '';
        this.passwdInfo = __WEBPACK_IMPORTED_MODULE_1__passwd_component__["b" /* PasswdInfo */].getEmptyInstance();
    }
    PasswddecryptComponent.prototype.submitInput = function () {
        var _this = this;
        this.httpService.postRetAny('/decryptPasswd', this.passwdInfo, this).subscribe(function (res) {
            _this.passwdInfo = res;
            if (!_this.passwdInfo.generatedPasswd) {
                _this.message = 'Decryption was unsuccesful. Check your vault password and salt or provided encrypted password is incorrect.';
            }
            else if (_this.passwdInfo.generatedPasswd === 'Failed') {
                _this.passwdInfo.generatedPasswd = '';
                _this.message = 'Backend error occured E1';
            }
            else {
                _this.message = '';
            }
        }, function (eres) {
            _this.message = eres.error.message;
            if (_this.message) {
                _this.message = 'Strange, you bypassed frontend validation<br/>' + _this.message;
            }
            else {
                _this.message = 'Not expected flow E1';
            }
        });
    };
    PasswddecryptComponent.prototype.resetInput = function () {
        this.passwdInfo = __WEBPACK_IMPORTED_MODULE_1__passwd_component__["b" /* PasswdInfo */].getEmptyInstance();
    };
    PasswddecryptComponent.prototype.ngOnInit = function () {
        this.passwdInfo.encryptedPasswd = this.shareDataService.sharedEncPasswd;
    };
    PasswddecryptComponent.prototype.ngOnDestroy = function () {
        this.shareDataService.sharedEncPasswd = undefined; // this is for case when user jumped from retrieve to decrypt, in this case this value get shown in save screen as well
    };
    return PasswddecryptComponent;
}());
PasswddecryptComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-passwddecrypt',
        template: __webpack_require__("../../../../../src/app/passwd/passwddecrypt/passwddecrypt.component.html"),
        styles: [__webpack_require__("../../../../../src/app/passwd/passwddecrypt/passwddecrypt.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_http_comp__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_http_comp__["a" /* HttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_share_data_service__["a" /* ShareDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_share_data_service__["a" /* ShareDataService */]) === "function" && _b || Object])
], PasswddecryptComponent);

var _a, _b;
//# sourceMappingURL=passwddecrypt.component.js.map

/***/ }),

/***/ "../../../../../src/app/passwd/passwdgen/passwdgen.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/passwd/passwdgen/passwdgen.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\t<!-- <form [formGroup]=\"passwdGenForm\"> -->\n\t<!-- <input  formControlName=\"name\"  /> -->\n\n\t<div class=\"form-group\">\n\t\t<label>Vault Password:</label>\n\t\t<input class=\"form-control\" required #passwdv=\"ngModel\" type=\"text\" placeholder=\"Give long password, kind of sentence.\" [(ngModel)]=\"passwdInfo.passwd\">\n\t\t<div *ngIf=\"passwdv.invalid && (passwdv.dirty || passwdv.touched)\" class=\"alert alert-danger\">\n\t\t\t<div *ngIf=\"passwdv.errors.required\">Valut password is mandatory.</div>\n\t\t</div>\n\t</div>\n\t<div class=\"form-group\">\n\t\t<label>Salt:</label>\n\t\t<input class=\"form-control\" pattern=\"^[0-9]{8,8}$\" #saltv=\"ngModel\" type=\"text\" placeholder=\"8 digit\" [(ngModel)]=\"passwdInfo.salt\">\n\t\t<div *ngIf=\"saltv.invalid && (saltv.dirty || saltv.touched)\" class=\"alert alert-danger\">\n\t\t\t<div *ngIf=\"saltv.errors.pattern\">Digit only and must be 8 characters long.</div>\n\t\t</div>\n\t\t<span class=\"form-text text-muted\">If you don't provide the salt then tool can generate it for you, but you have to remember it when decrypting it. It's\n\t\t\tpreferred that you get generated one.</span>\n\t</div>\n\n\t<div class=\"form-group\" *ngIf=\"!passwdInfo.encryptedPasswd\">\n\t\t<button [disabled]=\"!passwdInfo.passwd || (passwdInfo.salt && (passwdInfo.salt.length !== 8 || passwdInfo.salt.match('[^0-9]')))\" class=\"btn btn-primary\" type=\"button\" (click)=\"submitInput()\">Submit to get generated password</button>\n\t</div>\n\t<span class=\"form-text text-muted\" [innerHTML]=\"message\"></span>\n\n\t<div class=\"input-group form-group\" *ngIf=\"passwdInfo.generatedPasswd\">\n\t\t<span class=\"input-group-addon\">Generated Password</span> <span class=\"form-control\">{{passwdInfo.generatedPasswd}}</span> <span class=\"input-group-btn\">\n\t\t\t<button class=\"btn btn-default\" [class.btn-success]=\"isCopiedG\" type=\"button\" ngxClipboard [cbContent]=\"passwdInfo.generatedPasswd\"\n\t\t\t\t(cbOnSuccess)=\"isCopiedG = true\">Copy to clipboard</button>\n\t\t</span>\n\t</div>\n\n\t<div class=\"input-group form-group\" *ngIf=\"passwdInfo.encryptedPasswd\">\n\t\t<span class=\"input-group-addon\">Encrypted Password</span> <span class=\"form-control\">{{passwdInfo.encryptedPasswd}}</span> <span class=\"input-group-btn\">\n\t\t\t<button class=\"btn btn-default\" [class.btn-success]=\"isCopiedE\" type=\"button\" ngxClipboard [cbContent]=\"passwdInfo.encryptedPasswd\"\n\t\t\t\t(cbOnSuccess)=\"isCopiedE = true\">Copy to clipboard</button>\n\t\t</span>\n\t</div>\n\t<div class=\"form-group\" *ngIf=\"passwdInfo.encryptedPasswd\">\n\t\t<a routerLink=\"../pSave\" class=\"btn btn-success pull-right\" (click)=\"savePasswd();\"> Save encrypted password </a>\n\t</div>\n\n\t<div class=\"form-group\" *ngIf=\"passwdInfo.generatedPasswd\">\n\t\t<button class=\"btn btn-warning\" type=\"button\" (click)=\"resetInput()\">Reset</button>\n\t</div>\n\t<!-- </form> -->\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/passwd/passwdgen/passwdgen.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswdgenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__passwd_component__ = __webpack_require__("../../../../../src/app/passwd/passwd.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_http_comp__ = __webpack_require__("../../../../../src/app/services/http.comp.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_share_data_service__ = __webpack_require__("../../../../../src/app/services/share-data-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import {Subscription} from 'rxjs';

// import { FormControl, FormGroup, Validators } from '@angular/forms';
var PasswdgenComponent = (function () {
    function PasswdgenComponent(httpService, shareDataService, router) {
        this.httpService = httpService;
        this.shareDataService = shareDataService;
        this.router = router;
        this.isCopiedG = false;
        this.isCopiedE = false;
        this.passwdInfo = __WEBPACK_IMPORTED_MODULE_1__passwd_component__["b" /* PasswdInfo */].getEmptyInstance(); // empty object must exist as passwd need to be assigned a value, if passwdInfo doesn't exist then passwd can't be assigned
    }
    //  validationForm: FormGroup;
    PasswdgenComponent.prototype.submitInput = function () {
        var _this = this;
        this.httpService.postRetAny('/generatePasswd', this.passwdInfo, this).subscribe(function (res) {
            _this.passwdInfo = res;
            if (!_this.passwdInfo.generatedPasswd || !_this.passwdInfo.encryptedPasswd || !_this.passwdInfo.salt) {
                _this.message = 'Backend issue G2';
            }
            else {
                _this.message = '';
            }
        }, function (eres) {
            _this.message = eres.error.message;
            if (_this.message) {
                _this.message = 'Strange, you bypassed frontend validation\n' + _this.message;
            }
            else {
                _this.message = 'Not expected flow G1';
            }
        });
    };
    PasswdgenComponent.prototype.resetInput = function () {
        this.passwdInfo = __WEBPACK_IMPORTED_MODULE_1__passwd_component__["b" /* PasswdInfo */].getEmptyInstance();
        this.shareDataService.sharedEncPasswd = ''; // reseting shared information as well
    };
    PasswdgenComponent.prototype.savePasswd = function () {
        this.shareDataService.sharedEncPasswd = this.passwdInfo.encryptedPasswd;
    };
    PasswdgenComponent.prototype.changeRoute = function (routeValue) {
        this.router.navigate([routeValue]);
    };
    PasswdgenComponent.prototype.ngOnInit = function () {
        //    this.validationForm = new FormGroup({
        //      'salt': new FormControl(this.passwdInfo.salt, [
        //        Validators.required,
        //        Validators.minLength(8),
        ////        forbiddenNameValidator(/bob/i) // <-- Here's how you pass in the custom validator.
        //      ])
        ////      ,
        ////      'alterEgo': new FormControl(this.passwdInfo.alterEgo),
        ////      'power': new FormControl(this.hero.power, Validators.required)
        //    });
    };
    return PasswdgenComponent;
}());
PasswdgenComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-passwdgen',
        template: __webpack_require__("../../../../../src/app/passwd/passwdgen/passwdgen.component.html"),
        styles: [__webpack_require__("../../../../../src/app/passwd/passwdgen/passwdgen.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_http_comp__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_http_comp__["a" /* HttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_share_data_service__["a" /* ShareDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_share_data_service__["a" /* ShareDataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _c || Object])
], PasswdgenComponent);

var _a, _b, _c;
//# sourceMappingURL=passwdgen.component.js.map

/***/ }),

/***/ "../../../../../src/app/post-sim/post-sim.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/post-sim/post-sim.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\t\t<div class=\"form-group\">\n\t\t\t<label>Url</label> <input type=\"text\" class=\"form-control\" placeholder=\"http://abc:8080\" [(ngModel)]=\"aUrl\">\n\t\t</div>\n\t\t<div class=\"form-group\">\n\t\t\t<label>String</label> <input type=\"text\" class=\"form-control\" placeholder=\"abc\" [(ngModel)]=\"aText\">\n\t\t</div>\n\t\t<div class=\"form-group\">\n\t\t\t<button class=\"btn btn-primary\" type=\"button\" [disabled]=\"!aUrl || !aText\" (click)=\"submitInput()\">Post</button>\n\t\t</div>\n\t\t<div>{{aRes}}</div>\n\t\t<div>{{aErrRes}}</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/post-sim/post-sim.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostSimComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_http_comp__ = __webpack_require__("../../../../../src/app/services/http.comp.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PostSimComponent = (function () {
    function PostSimComponent(httpService) {
        this.httpService = httpService;
    }
    PostSimComponent.prototype.ngOnInit = function () {
    };
    PostSimComponent.prototype.submitInput = function () {
        var _this = this;
        this.httpService.postRetObjStr(this.aUrl, this.aText, this).subscribe(function (res) {
            _this.aRes = JSON.stringify(res);
            _this.message = '';
            _this.aErrRes = '';
        }, function (errorRes) {
            _this.aErrRes = errorRes.message;
        });
    };
    return PostSimComponent;
}());
PostSimComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-post-sim',
        template: __webpack_require__("../../../../../src/app/post-sim/post-sim.component.html"),
        styles: [__webpack_require__("../../../../../src/app/post-sim/post-sim.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_http_comp__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_http_comp__["a" /* HttpService */]) === "function" && _a || Object])
], PostSimComponent);

var _a;
//# sourceMappingURL=post-sim.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/http.comp.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpService = (function () {
    function HttpService(httpClient) {
        this.httpClient = httpClient;
    }
    HttpService.prototype.getN = function (url) {
        return this.httpClient.get(url);
    };
    HttpService.prototype.getAny = function (url, caller) {
        caller.message = 'API is bieng called ...';
        //    const httpHeaders = new HttpHeaders();
        //    httpHeaders.set('Access-Control-Allow-Origin', '*');
        //    httpHeaders.set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
        //    return this.httpClient.get(url, {'headers': httpHeaders});
        return this.httpClient.get(url);
    };
    HttpService.prototype.getS = function (url) {
        return this.httpClient.get(url, { responseType: 'text' });
    };
    HttpService.prototype.getP = function (url, obj) {
        var params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]();
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                console.log(key + ' ' + obj[key]);
                params = params.append(key, obj[key]); // .append returns clone hence need to recapture it
            }
        }
        var options = { params: params };
        return this.httpClient.get(url, options); // this also works return this.httpClient.get(url, {params: params});
    };
    HttpService.prototype.postN = function (url) {
        //    const subject = new Subject<number>();
        var body = { content: 'Brad', id: 1 };
        var params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]().set('name', 'manveen');
        //    const req = new HttpRequest('POST', url, body, {
        //      params: params,
        //      reportProgress: true,
        //    });
        //    this.httpClient.request(req).subscribe(event => {
        //      if (event.type === HttpEventType.UploadProgress) {
        //        const percentDone = Math.round(100 * event.loaded / event.total);
        //        subject.next(percentDone);
        //      } else if (event instanceof HttpResponse) {
        //        subject.complete();
        //      }
        //    });
        //    return subject.asObservable();
        //    return this.httpClient.request(req);
        return this.httpClient.post(url, body, { params: params });
    };
    HttpService.prototype.postT = function (url, passwdInfo) {
        return this.httpClient.post(url, passwdInfo);
    };
    HttpService.prototype.postS = function (url, passwdInfo) {
        return this.httpClient.post(url, passwdInfo);
    };
    HttpService.prototype.postR = function (url, passwdInfo) {
        return this.httpClient.post(url, passwdInfo);
    };
    HttpService.prototype.postV = function (url, passwdInfo) {
        return this.httpClient.post(url, passwdInfo, { responseType: 'text' });
    };
    HttpService.prototype.postNew = function (url, passwdInfo) {
        return this.httpClient.post(url, passwdInfo);
    };
    HttpService.prototype.postRetVoid = function (url, objToPost, caller) {
        caller.message = 'API is bieng called ...';
        return this.httpClient.post(url, objToPost); // for error handling use errorResponse.error.message
    };
    HttpService.prototype.postRetVoidStr = function (url, objToPost, caller) {
        caller.message = 'API is beign called ...';
        return this.httpClient.post(url, objToPost, { responseType: 'text' }); // return media type should be text you can access  error as errorResponse.error
    };
    HttpService.prototype.postRetAny = function (url, objToPost, caller) {
        caller.message = 'API is bieng called ...';
        var httpHeaders = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]();
        httpHeaders = httpHeaders.set('Access-Control-Allow-Origin', '*');
        httpHeaders = httpHeaders.set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
        console.log(httpHeaders.get('Access-Control-Allow-Origin'));
        return this.httpClient.post(url, objToPost, { headers: httpHeaders });
    };
    HttpService.prototype.postRetObj = function (url, objToPost, caller) {
        caller.message = 'API is bieng called ...';
        return this.httpClient.post(url, objToPost);
    };
    HttpService.prototype.postRetObjStr = function (url, str, caller) {
        caller.message = 'API is bieng called ...';
        return this.httpClient.post(url, str);
    };
    HttpService.prototype.postRetBool = function (url, objToPost) {
        return this.httpClient.post(url, objToPost);
    };
    HttpService.prototype.postSRetBool = function (url, str, caller) {
        caller.message = 'API is bieng called ...';
        return this.httpClient.post(url, str);
    };
    HttpService.prototype.postRetStr = function (url, objToPost, caller) {
        caller.message = 'API is bieng called ...';
        var httpHeaders = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]();
        httpHeaders = httpHeaders.set('Access-Control-Allow-Origin', '*');
        httpHeaders = httpHeaders.set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
        httpHeaders = httpHeaders.set('Access-Control-Allow-Headers', 'Content-Type');
        return this.httpClient.post(url, objToPost, { headers: httpHeaders, responseType: 'text' });
    };
    HttpService.prototype.postSRetStr = function (url, str, caller) {
        caller.message = 'API is bieng called ...';
        return this.httpClient.post(url, str, { responseType: 'text' });
    };
    return HttpService;
}());
HttpService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], HttpService);

var _a;
//# sourceMappingURL=http.comp.js.map

/***/ }),

/***/ "../../../../../src/app/services/share-data-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShareDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ShareDataService = (function () {
    function ShareDataService() {
    }
    ShareDataService.prototype.reset = function () {
        this.sharedEncPasswd = undefined;
    };
    return ShareDataService;
}());
ShareDataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], ShareDataService);

//# sourceMappingURL=share-data-service.js.map

/***/ }),

/***/ "../../../../../src/assets/fonts/GGDDictionary.ttf":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "GGDDictionary.92ffab686438db440846.ttf";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map