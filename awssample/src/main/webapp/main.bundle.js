webpackJsonp(["main"],{

/***/ "../../../../../src lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src lazy recursive";

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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{title}}!\n  </h1>\n</div>\nMessage = {{hello}}\n<button (click)=\"onClick()\">click</button>\n\n<hr/>\n\n<div class=\"container-fluid\">\n<div class=\"col-sm-2\">\n<h1>Menu</h1>\n<ul class=\"nav nav-pills nav-stacked\">\n  <li routerLinkActive=\"active\"><a routerLink=\"/passapp\">Password App</a></li>\n  <li routerLinkActive=\"active\"><a routerLink=\"/luhnapp\">Luhn Algorithim for CC last bit check</a></li>\n</ul>\n</div>\n<div class=\"col-sm-10\">\n<h1>Content</h1>\n\t<div class=\"panel panel-primary\">\n\t\t<router-outlet></router-outlet>\n\t</div>\n</div>\n</div>\n<!-- <span class=\"label label-default\">Default</span>\n<span class=\"label label-primary\">Primary</span>\n -->"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_http_comp__ = __webpack_require__("../../../../../src/app/services/http.comp.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppComponent = (function () {
    function AppComponent(http, httpService) {
        this.http = http;
        this.httpService = httpService;
        this.title = 'app';
        this.hello = 'Hello Default';
        this.url = '/greeting';
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
        var _this = this;
        //    const myHeaders = new HttpHeaders().set('Content-Type', 'text/html');
        //    myHeaders.set('Accept', 'text/plain');
        //    myHeaders.append('Content-Type', 'application/json');
        //    const myParams = new URLSearchParams();
        //    myParams.append('name', 'manveen');
        //    const options = new RequestOptions({headers: myHeaders, params: myParams});
        this.http.get(this.url).subscribe(function (data) {
            // Read the result field from the JSON response.
            _this.hello = data['content'];
        });
    };
    AppComponent.prototype.reqMapping = function (res) {
        console.log('handling request');
        var body = res.json;
        return body;
    };
    AppComponent.prototype.errorHandling = function (error) {
        console.log('error occured');
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('eeerrror');
    };
    AppComponent.prototype.onClickO = function () {
        var _this = this;
        console.log('clickingO');
        this.http
            .get(this.url)
            .map(this.reqMapping)
            .catch(this.errorHandling)
            .subscribe(function (result) {
            _this.hello = result;
        });
    };
    AppComponent.prototype.onClickN = function () {
        var _this = this;
        console.log('clickingN');
        this.httpService
            .getN(this.url)
            .subscribe(function (result) {
            _this.hello = result['content'];
        });
    };
    AppComponent.prototype.onClickS = function () {
        var _this = this;
        console.log('clicking');
        this.httpService
            .getS('/greetingstr')
            .subscribe(function (result) {
            _this.hello = result;
        });
    };
    AppComponent.prototype.onClickP = function () {
        var _this = this;
        console.log('clicking');
        this.httpService
            .getP('/greeting')
            .subscribe(function (result) {
            _this.hello = result['content'];
        });
    };
    AppComponent.prototype.onClick = function () {
        var _this = this;
        console.log('clicking');
        this.httpService
            .postN('/postgreeting')
            .subscribe(function (result) {
            _this.hello = result['content'];
            console.log(_this.hello);
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__services_http_comp__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_http_comp__["a" /* HttpService */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__passwd_passwdgen_passwdgen_component__ = __webpack_require__("../../../../../src/app/passwd/passwdgen/passwdgen.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__passwd_passwddecrypt_passwddecrypt_component__ = __webpack_require__("../../../../../src/app/passwd/passwddecrypt/passwddecrypt.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ngx_clipboard__ = __webpack_require__("../../../../ngx-clipboard/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__approute__ = __webpack_require__("../../../../../src/app/approute.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import {PasswdModule} from './passwd/passwd.module';








// import {AppRoutingModule} from './app-routing.module';


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
            __WEBPACK_IMPORTED_MODULE_9__passwd_passwd_component__["a" /* PasswdComponent */],
            __WEBPACK_IMPORTED_MODULE_10__luhnalg_luhnalg_component__["a" /* LuhnalgComponent */],
            __WEBPACK_IMPORTED_MODULE_11__passwd_passwdgen_passwdgen_component__["a" /* PasswdgenComponent */],
            __WEBPACK_IMPORTED_MODULE_12__passwd_passwddecrypt_passwddecrypt_component__["a" /* PasswddecryptComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_13_ngx_clipboard__["a" /* ClipboardModule */],
            //    PasswdModule,
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_14__approute__["a" /* appRoutes */])
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_8__services_http_comp__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_6__angular_common__["f" /* Location */],
            { provide: __WEBPACK_IMPORTED_MODULE_6__angular_common__["g" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_6__angular_common__["d" /* HashLocationStrategy */] }],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === "function" && _a || Object])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__passwd_passwdgen_passwdgen_component__ = __webpack_require__("../../../../../src/app/passwd/passwdgen/passwdgen.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__passwd_passwddecrypt_passwddecrypt_component__ = __webpack_require__("../../../../../src/app/passwd/passwddecrypt/passwddecrypt.component.ts");




var appRoutes = [
    {
        path: 'passapp', component: __WEBPACK_IMPORTED_MODULE_0__passwd_passwd_component__["a" /* PasswdComponent */],
        //    loadChildren: 'app/passwd/passwd.module#PasswdModule',
        children: [
            { path: 'pgen', component: __WEBPACK_IMPORTED_MODULE_2__passwd_passwdgen_passwdgen_component__["a" /* PasswdgenComponent */] },
            { path: 'pdec', component: __WEBPACK_IMPORTED_MODULE_3__passwd_passwddecrypt_passwddecrypt_component__["a" /* PasswddecryptComponent */] }
        ]
    },
    { path: 'luhnapp', component: __WEBPACK_IMPORTED_MODULE_1__luhnalg_luhnalg_component__["a" /* LuhnalgComponent */] }
];
//# sourceMappingURL=approute.js.map

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

module.exports = "<p>\n  luhnalg works!\n</p>\n"

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

module.exports = "<div>\r\n\r\n<div class=\"page-header\"><h3 align=\"center\">Password App</h3></div>\r\n\r\n<ul class=\"nav nav-tabs nav-justified\">\r\n  <li routerLinkActive=\"active\"><a routerLink=\"pgen\">Generate Password</a></li>\r\n  <li routerLinkActive=\"active\"><a routerLink=\"pdec\">Decrypt Password</a></li>\r\n</ul>\r\n<div>\r\n\t<router-outlet></router-outlet>\r\n</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/passwd/passwd.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswdComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PasswdInfo; });
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
            passwd: 'aa',
            salt: '93066123',
            generatedPasswd: '',
            encryptedPasswd: ''
        };
        return emptyObj;
    };
    return PasswdInfo;
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

module.exports = "<!-- <div>\n\t<div class=\"input-group\">\n\t  <span class=\"input-group-addon\">Vault Password</span>\n\t  <input type=\"text\" class=\"form-control\" placeholder=\"vPasswd\" [(ngModel)]=\"passwdInfo.passwd\">\n\t</div>\n\t<div class=\"input-group\">\n\t  <span class=\"input-group-addon\">Salt</span>\n\t  <input type=\"text\" class=\"form-control\" placeholder=\"8 digit\" [(ngModel)]=\"passwdInfo.salt\">\n\t  <span class=\"input-group-addon\">If you don't provide then tool can generate it for you, but you have to remember it when decrypting it</span>\n\t</div>\n\t<div *ngIf=\"!passwdInfo.encryptedPasswd\">\n\t\t<button class=\"btn btn-primary\" type=\"button\" (click)=\"submitInput()\">Submit to get generated password</button>\n\t</div>\n\t<h3 *ngIf=\"passwdInfo.generatedPasswd\"><span class=\"label label-default\">Genereated Password</span>{{passwdInfo.generatedPasswd}}</h3>\n\t<h3 *ngIf=\"passwdInfo.encryptedPasswd\"><span class=\"label label-default\">Encrypted Password</span>{{passwdInfo.encryptedPasswd}}</h3>\n</div> -->\n\n\n<div class=\"container-fluid\">\n\t<div class=\"form-group required\">\n\t  <label>*Vault Password:</label>\n\t  <input type=\"text\" class=\"form-control\" placeholder=\"vPasswd\" [(ngModel)]=\"passwdInfo.passwd\" required>\n\t</div>\n\t<div class=\"form-group\">\n\t  <label>*Salt:</label>\n\t  <input type=\"text\" class=\"form-control\" placeholder=\"8 digit\" [(ngModel)]=\"passwdInfo.salt\">\n\t</div>\n\t<div class=\"form-group\">\n\t  <label>*Encrypted Password:</label>\n\t  <input type=\"text\" class=\"form-control\" placeholder=\"8 digit\" [(ngModel)]=\"passwdInfo.encryptedPasswd\">\n\t</div>\n\t<div class=\"form-group\" *ngIf=\"!passwdInfo.generatedPasswd\">\n\t\t<button class=\"btn btn-success\" type=\"button\" (click)=\"submitInput()\">Submit to get generated password</button>\n\t</div>\n\t<div class=\"input-group form-group\" *ngIf=\"passwdInfo.generatedPasswd\">\n\t  <span class=\"input-group-addon\">Generated Password</span>\n\t  <span class=\"form-control\" >{{passwdInfo.generatedPasswd}}</span>\n\t  <span class=\"input-group-btn\">\n        <button class=\"btn btn-default\" [class.btn-success]= \"isCopiedE\" type=\"button\" ngxClipboard [cbContent]=\"passwdInfo.generatedPasswd\" (cbOnSuccess)=\"isCopiedE = true\">Copy to clipboard</button>\n      </span>\n\t</div>\n\t<div class=\"form-group\" *ngIf=\"passwdInfo.generatedPasswd\">\n\t\t<button class=\"btn btn-warning\" type=\"button\" (click)=\"resetInput()\">Reset</button>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/passwd/passwddecrypt/passwddecrypt.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswddecryptComponent; });
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


var PasswddecryptComponent = (function () {
    function PasswddecryptComponent(httpService) {
        this.httpService = httpService;
        this.passwdInfo = {
            passwd: '',
            salt: '',
            generatedPasswd: '',
            encryptedPasswd: ''
        };
    }
    PasswddecryptComponent.prototype.submitInput = function () {
        var _this = this;
        console.log('passwdgen http call');
        this.httpService
            .postT('/decryptPasswd', this.passwdInfo)
            .subscribe(function (result) {
            _this.passwdInfo = result;
            console.log(_this.passwdInfo);
        });
    };
    PasswddecryptComponent.prototype.resetInput = function () {
        this.passwdInfo = {
            passwd: '',
            salt: '',
            generatedPasswd: '',
            encryptedPasswd: ''
        };
    };
    PasswddecryptComponent.prototype.ngOnInit = function () {
    };
    return PasswddecryptComponent;
}());
PasswddecryptComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-passwddecrypt',
        template: __webpack_require__("../../../../../src/app/passwd/passwddecrypt/passwddecrypt.component.html"),
        styles: [__webpack_require__("../../../../../src/app/passwd/passwddecrypt/passwddecrypt.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_http_comp__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_http_comp__["a" /* HttpService */]) === "function" && _a || Object])
], PasswddecryptComponent);

var _a;
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

module.exports = "<div class=\"container-fluid\">\n\t<div class=\"form-group\">\n\t  <label>*Vault Password:</label>\n\t  <input type=\"text\" class=\"form-control\" placeholder=\"vPasswd\" [(ngModel)]=\"passwdInfo.passwd\" required>\n\t</div>\n\t<div class=\"form-group\">\n\t  <label>Salt:</label>\n\t  <!-- <div *ngIf=\"saltValidation.invalid && (saltValidation.dirty || saltValidation.touched)\" class=\"alert alert-danger\">\n\t\t<div *ngIf=\"saltValidation.errors.required\">\n    \t\tSalt is required.\n  \t\t</div>\n\t</div>\n\t  <input type=\"text\" class=\"form-control\" placeholder=\"8 digit\"  name=\"saltValidation\" id=\"saltValidation\"   [(ngModel)]=\"passwdInfo.salt\" required #saltValidation=\"ngModel\"> -->\n\t  <input type=\"text\" class=\"form-control\" placeholder=\"8 digit\" [(ngModel)]=\"passwdInfo.salt\">\n\t  <span class=\"help-block\">If you don't provide then tool can generate it for you, but you have to remember it when decrypting it</span>\n\t</div>\n\t\n\t<div class=\"form-group\" *ngIf=\"!passwdInfo.encryptedPasswd\">\n\t\t<button class=\"btn btn-primary\" type=\"button\" (click)=\"submitInput()\">Submit to get generated password</button>\n\t</div>\n\t\n\t<div class=\"input-group form-group\" *ngIf=\"passwdInfo.generatedPasswd\">\n\t  <span class=\"input-group-addon\">Generated Password</span>\n\t  <span class=\"form-control\" >{{passwdInfo.generatedPasswd}}</span>\n\t  <span class=\"input-group-btn\">\n        <button class=\"btn btn-default\" [class.btn-success]= \"isCopiedG\" type=\"button\" ngxClipboard [cbContent]=\"passwdInfo.generatedPasswd\" (cbOnSuccess)=\"isCopiedG = true\">Copy to clipboard</button>\n      </span>\n\t</div>\n\t\n\t<div class=\"input-group form-group\" *ngIf=\"passwdInfo.encryptedPasswd\">\n\t  <span class=\"input-group-addon\">Generated Password</span>\n\t  <span class=\"form-control\" >{{passwdInfo.encryptedPasswd}}</span>\n\t  <span class=\"input-group-btn\">\n        <button class=\"btn btn-default\" [class.btn-success]= \"isCopiedE\" type=\"button\" ngxClipboard [cbContent]=\"passwdInfo.encryptedPasswd\" (cbOnSuccess)=\"isCopiedE = true\">Copy to clipboard</button>\n      </span>\n\t</div>\n\t\n\t<div class=\"form-group\" *ngIf=\"passwdInfo.generatedPasswd\">\n\t\t<button class=\"btn btn-warning\" type=\"button\" (click)=\"resetInput()\">Reset</button>\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/passwd/passwdgen/passwdgen.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswdgenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__passwd_component__ = __webpack_require__("../../../../../src/app/passwd/passwd.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_http_comp__ = __webpack_require__("../../../../../src/app/services/http.comp.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PasswdgenComponent = (function () {
    function PasswdgenComponent(httpService) {
        this.httpService = httpService;
        this.isCopiedG = false;
        this.isCopiedE = false;
        this.passwdInfo = __WEBPACK_IMPORTED_MODULE_1__passwd_component__["b" /* PasswdInfo */].getEmptyInstance(); // empty object must exist as passwd need to be assigned a value, if passwdInfo doesn't exist then passwd can't be assigned
    }
    PasswdgenComponent.prototype.submitInput = function () {
        var _this = this;
        this.httpService
            .postT('/generatePasswd', this.passwdInfo)
            .subscribe(function (result) {
            _this.passwdInfo = result;
            console.log(_this.passwdInfo);
        });
    };
    PasswdgenComponent.prototype.resetInput = function () {
        this.passwdInfo = {
            passwd: '',
            salt: '',
            generatedPasswd: '',
            encryptedPasswd: ''
        };
    };
    PasswdgenComponent.prototype.ngOnInit = function () {
    };
    return PasswdgenComponent;
}());
PasswdgenComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-passwdgen',
        template: __webpack_require__("../../../../../src/app/passwd/passwdgen/passwdgen.component.html"),
        styles: [__webpack_require__("../../../../../src/app/passwd/passwdgen/passwdgen.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_http_comp__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_http_comp__["a" /* HttpService */]) === "function" && _a || Object])
], PasswdgenComponent);

var _a;
//# sourceMappingURL=passwdgen.component.js.map

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
    HttpService.prototype.getS = function (url) {
        return this.httpClient.get(url, { responseType: 'text' });
    };
    HttpService.prototype.getP = function (url) {
        var params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpParams */]().set('name', 'manveen');
        var options = { params: params };
        return this.httpClient.get(url, options); // this also works return this.httpClient.get(url, {params: params});
    };
    HttpService.prototype.postN = function (url) {
        //    const subject = new Subject<number>();
        var body = { content: 'Brad', id: 1 };
        var params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpParams */]().set('name', 'manveen');
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
    return HttpService;
}());
HttpService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], HttpService);

var _a;
//# sourceMappingURL=http.comp.js.map

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