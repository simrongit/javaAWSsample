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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align: center\">\n\t<h1>Welcome to {{title}}!</h1>\n</div>\n\n<hr />\n\n<div class=\"container-fluid\">\n\t<div class=\"col-sm-2\" style=\"border-right:1px solid #eee;height:700px\">\n\t\t<ul class=\"nav nav-pills nav-stacked\">\n\t\t\t<li routerLinkActive=\"active\"><a routerLink=\"/passapp\">Password App</a></li>\n\t\t\t<li routerLinkActive=\"active\"><a routerLink=\"/luhnapp\">Luhn Algorithim for CC last bit check</a></li>\n\t\t\t<li routerLinkActive=\"active\"><a routerLink=\"/ggd\">Guru Granth Darpan</a></li>\n\t\t\t<li routerLinkActive=\"active\"><a routerLink=\"/vma\">Virtual Machine(Resource) Allocation</a></li>\n\t\t\t<li routerLinkActive=\"active\"><a routerLink=\"/nufapp\">Not used feature set</a></li>\n\t\t\t<li routerLinkActive=\"active\"><a routerLink=\"/posttest\">Postman</a></li>\n\t\t\t<li routerLinkActive=\"active\"><a routerLink=\"/oa\">OAuth2</a></li>\n\t\t\t<li routerLinkActive=\"active\"><a routerLink=\"/movie\">Movies</a></li>\n\t\t</ul>\n\t</div>\n\t<div class=\"col-sm-10\">\n\t\t<div class=\"panel panel-primary\">\n\t\t\t<router-outlet></router-outlet>\n\t\t</div>\n\t</div>\n</div>\n<!-- <span class=\"label label-default\">Default</span>\n<span class=\"label label-primary\">Primary</span>\n -->"

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
            __WEBPACK_IMPORTED_MODULE_9__passwd_passwd_component__["a" /* PasswdComponent */],
            __WEBPACK_IMPORTED_MODULE_10__luhnalg_luhnalg_component__["a" /* LuhnalgComponent */],
            __WEBPACK_IMPORTED_MODULE_12__passwd_passwdgen_passwdgen_component__["a" /* PasswdgenComponent */],
            __WEBPACK_IMPORTED_MODULE_13__passwd_passwddecrypt_passwddecrypt_component__["a" /* PasswddecryptComponent */],
            __WEBPACK_IMPORTED_MODULE_14__passwd_passwd_save_passwd_save_component__["a" /* PasswdSaveComponent */],
            __WEBPACK_IMPORTED_MODULE_15__passwd_passwd_retrieve_passwd_retrieve_component__["a" /* PasswdRetrieveComponent */],
            __WEBPACK_IMPORTED_MODULE_16__passwd_passwd_about_passwd_about_component__["a" /* PasswdAboutComponent */],
            __WEBPACK_IMPORTED_MODULE_11__not_used_feature_not_used_feature_component__["a" /* NotUsedFeatureComponent */],
            __WEBPACK_IMPORTED_MODULE_20__ggd_ggd_component__["a" /* GgdComponent */],
            __WEBPACK_IMPORTED_MODULE_21__ggd_ggt_ggt_component__["a" /* GgtComponent */],
            __WEBPACK_IMPORTED_MODULE_22__ggd_ggs_ggs_component__["a" /* GgsComponent */],
            __WEBPACK_IMPORTED_MODULE_23__home_about_home_about_component__["a" /* HomeAboutComponent */],
            __WEBPACK_IMPORTED_MODULE_24__post_sim_post_sim_component__["a" /* PostSimComponent */],
            __WEBPACK_IMPORTED_MODULE_25__o_auth_o_auth_component__["a" /* OAuthComponent */],
            __WEBPACK_IMPORTED_MODULE_26__movie_movie_component__["a" /* MovieComponent */],
            __WEBPACK_IMPORTED_MODULE_27__movie_movie_info_movie_info_component__["a" /* MovieInfoComponent */],
            __WEBPACK_IMPORTED_MODULE_28__movie_movie_list_movie_list_component__["a" /* MovieListComponent */],
            __WEBPACK_IMPORTED_MODULE_29__movie_movie_parsed_movie_parsed_component__["a" /* MovieParsedComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
            //    ReactiveFormsModule,
            __WEBPACK_IMPORTED_MODULE_17_ngx_clipboard__["a" /* ClipboardModule */],
            //    VmaModule,
            //    PasswdModule,
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_19__approute__["a" /* appRoutes */])
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_8__services_http_comp__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_18__services_share_data_service__["a" /* ShareDataService */],
            __WEBPACK_IMPORTED_MODULE_6__angular_common__["f" /* Location */],
            { provide: __WEBPACK_IMPORTED_MODULE_6__angular_common__["g" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_6__angular_common__["h" /* PathLocationStrategy */] }],
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
            { path: 'pAbout', component: __WEBPACK_IMPORTED_MODULE_7__passwd_passwd_about_passwd_about_component__["a" /* PasswdAboutComponent */] }
        ]
    },
    {
        path: 'ggd', component: __WEBPACK_IMPORTED_MODULE_8__ggd_ggd_component__["a" /* GgdComponent */],
        children: [
            { path: 'ggt', component: __WEBPACK_IMPORTED_MODULE_9__ggd_ggt_ggt_component__["a" /* GgtComponent */] },
            { path: 'ggs', component: __WEBPACK_IMPORTED_MODULE_10__ggd_ggs_ggs_component__["a" /* GgsComponent */] },
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
        ]
    }
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

module.exports = "<div>\r\n\r\n<div class=\"page-header\"><h3 align=\"center\">Guru Granth Sahib Darpan Conversion</h3></div>\r\n\r\n<ul class=\"nav nav-tabs nav-justified\">\r\n  <li routerLinkActive=\"active\"><a routerLink=\"ggt\">Guru Granth Sahib Darpan</a></li>\r\n  <li routerLinkActive=\"active\"><a routerLink=\"ggs\">Dictionary</a></li>\r\n</ul>\r\n<div>\r\n\t<router-outlet></router-outlet>\r\n</div>\r\n</div>"

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

module.exports = "<h3>Select an app from left panel</h3>\n<!-- \t<div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n      Indicators\n      <ol class=\"carousel-indicators\">\n        <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n        <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\n      </ol>\n      <div class=\"carousel-inner\" role=\"listbox\">\n        <div class=\"item active\">\n          <img class=\"first-slide\" src=\"data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==\" alt=\"First slide\">\n          <div class=\"container\">\n            <div class=\"carousel-caption\">\n              <app-passwd-about></app-passwd-about>\n            </div>\n          </div>\n        </div>\n        <div class=\"item\">\n          <img class=\"second-slide\" src=\"data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==\" alt=\"Second slide\">\n          <div class=\"container\">\n            <div class=\"carousel-caption\">\n              <app-vma-about></app-vma-about>\n            </div>\n          </div>\n        </div>\n      </div>\n      <a class=\"left carousel-control\" href=\"#myCarousel\" role=\"button\" data-slide=\"prev\">\n        <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>\n        <span class=\"sr-only\">Previous</span>\n      </a>\n      <a class=\"right carousel-control\" href=\"#myCarousel\" role=\"button\" data-slide=\"next\">\n        <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\n        <span class=\"sr-only\">Next</span>\n      </a>\n    </div> -->"

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

module.exports = "<p>\n  luhnalg works!\n</p>\n\n"

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

module.exports = "<div>\n\n<div class=\"page-header\"><h3 align=\"center\">Movie Parser</h3></div>\n\n<ul class=\"nav nav-tabs nav-justified\">\n  <li routerLinkActive=\"active\"><a routerLink=\"mi\">Movie Info</a></li>\n  <li routerLinkActive=\"active\"><a routerLink=\"ml\">Movie Filter</a></li>\n  <li routerLinkActive=\"active\"><a routerLink=\"mp\">Movie Parsed</a></li>\n</ul>\n<div>\n\t<router-outlet></router-outlet>\n</div>\n</div>"

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

module.exports = "<div class=\"container-fluid\">\n\t<div *ngIf=\"!retrieved\">\n\t\t<div class=\"form-group\">\n\t\t\t<label>User Id</label> <input type=\"text\" class=\"form-control\" required #userv=\"ngModel\" placeholder=\"user id for saving encrypted password\"\n\t\t\t\t[(ngModel)]=\"passwdSaveInfo.userId\" required>\n\t\t\t<div *ngIf=\"userv.invalid && (userv.dirty || userv.touched)\" class=\"alert alert-danger\">\n\t\t\t\t<div *ngIf=\"userv.errors.required\">User id is mandatory as this is the user against which password will be stored.</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"form-group\">\n\t\t\t<label>Passcode</label> <input type=\"text\" class=\"form-control\" required pattern=\"^[0-9]{4,4}$\" #passcodev=\"ngModel\" placeholder=\"4 digit\"\n\t\t\t\t[(ngModel)]=\"passwdSaveInfo.passCode\">\n\t\t\t<div *ngIf=\"passcodev.invalid && (passcodev.dirty || passcodev.touched)\" class=\"alert alert-danger\">\n\t\t\t\t<div *ngIf=\"passcodev.errors.pattern\">Digit only and must be 4 characters long.</div>\n\t\t\t\t<div *ngIf=\"passcodev.errors.required\">Passcode is mandatory. Its to know its really you.</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"form-group\">\n\t\t\t<button class=\"btn btn-primary\" type=\"button\" [disabled]=\"!passwdSaveInfo.userId || !passwdSaveInfo.passCode || (passwdSaveInfo.passCode && (passwdSaveInfo.passCode.match('[^0-9]') || passwdSaveInfo.passCode.length != 4))\" (click)=\"submitInput()\">Submit to get list</button>\n\t\t</div>\n\t</div>\n\t<span class=\"help-block\" [innerHTML]=\"message\"></span>\n\t<div *ngIf=\"retrieved\">\n\t\t<table class=\"table\">\n\t\t\t<tr>\n\t\t\t\t<th>Reference Text</th>\n\t\t\t\t<th>Encrypted Password</th>\n\t\t\t\t<th></th>\n\t\t\t</tr>\n\t\t\t<tr *ngFor=\"let key of objectKeys(mapObject)\">\n\t\t\t\t<td>{{key}}</td>\n\t\t\t\t<td>{{mapObject[key]}}</td>\n\t\t\t\t<td><a routerLink=\"../pdec\" class=\"btn btn-success pull-right\" (click)=\"decPasswd(mapObject[key]);\"> Decrypt it </a></td>\n\t\t\t</tr>\n\t\t</table>\n\t</div>\n</div>\n"

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

module.exports = "<div class=\"container-fluid\">\r\n\r\n\t<div class=\"row\">\r\n\t    <div class=\"input-group\">\r\n\t      <span class=\"input-group-addon\">\r\n\t\t\t<input type=\"checkbox\" class=\"checkbox-primary\" [(ngModel)]=\"existingUser\">\r\n\t      </span>\r\n\t      <span *ngIf=\"existingUser\" class=\"help-block\">Existing User</span>\r\n\t      <span *ngIf=\"!existingUser\" class=\"help-block\">Create New User for saving password</span>\r\n\t    </div><!-- /input-group -->\r\n\t</div><!-- /row -->\r\n\t\r\n\t<div class=\"form-group\">\r\n\t  <label>User Id</label>\r\n\t  <input type=\"text\" class=\"form-control\" required #userv=\"ngModel\" placeholder=\"User id for saving encrypted password. This is not your vault password\" [(ngModel)]=\"passwdSaveInfo.userId\" required>\r\n\t  <div *ngIf=\"userv.invalid && (userv.dirty || userv.touched)\" class=\"alert alert-danger\">\r\n\t\t\t<div *ngIf=\"userv.errors.required\">User id is mandatory as this is the user against which password will be stored.</div>\r\n\t  </div>\r\n\t</div>\r\n\t<div class=\"form-group\">\r\n\t  <label>Passcode</label>\r\n\t  <input type=\"text\" class=\"form-control\" required pattern=\"^[0-9]{4,4}$\" #passcodev=\"ngModel\" placeholder=\"4 digit\" [(ngModel)]=\"passwdSaveInfo.passCode\">\r\n\t  <div *ngIf=\"passcodev.invalid && (passcodev.dirty || passcodev.touched)\" class=\"alert alert-danger\">\r\n\t\t\t<div *ngIf=\"passcodev.errors.pattern\">Digit only and must be 4 characters long.</div>\r\n\t\t\t<div *ngIf=\"passcodev.errors.required\">Passcode is mandatory. Its to know its really you.</div>\r\n\t  </div>\r\n\t</div>\r\n\t<br/>\r\n\t<div class=\"form-group\">\r\n\t  <label>Reference Text</label>\r\n\t  <input type=\"text\" class=\"form-control\" required #reftv=\"ngModel\" placeholder=\"Some text which can tell what this password is for, for e.g. website name\" [(ngModel)]=\"passwdSaveInfo.refText\">\r\n\t  <div *ngIf=\"reftv.invalid && (reftv.dirty || reftv.touched)\" class=\"alert alert-danger\">\r\n\t\t\t<div *ngIf=\"reftv.errors.required\">Yeah it's mandatory otherwise how will you know that what this is for</div>\r\n\t  </div>\r\n\t</div>\r\n\t<div class=\"form-group\">\r\n\t\t<label>Encrypted Password</label>\r\n\t\t<input type=\"text\" class=\"form-control\" required pattern=\"^.{64,64}$\" #encPasswdv=\"ngModel\" placeholder=\"Your encrypted password\" [(ngModel)]=\"passwdSaveInfo.encPasswd\">\r\n\t\t<div *ngIf=\"encPasswdv.invalid && (encPasswdv.dirty || encPasswdv.touched)\" class=\"alert alert-danger\">\r\n\t\t\t<div *ngIf=\"encPasswdv.errors.pattern\">Your encrypted password have to be 64 character long.</div>\r\n\t\t\t<div *ngIf=\"encPasswdv.errors.required\">This is what you are going to decrypt hence it is mandatory</div>\r\n\t  </div>\r\n\t</div>\r\n\t\r\n\t<div class=\"form-group\" > <!-- two condition like isPopulated(passwdSaveInfo) && !existingUser doesn't work for disabled property but work in *ngIf -->\r\n\t\t<button [disabled]=\"!isPopulated() || !existingUser\" class=\"btn btn-primary\" type=\"button\" (click)=\"submitInput()\">Submit to save</button> <!--  how to enable disable [disabled] didn't work -->\r\n\t\t<button [disabled]=\"!isPopulated() || existingUser\" class=\"btn btn-primary\" type=\"button\" (click)=\"createUser()\">Create New</button>\r\n\t</div>\r\n\t\r\n\t<div class=\"form-group\"  >\r\n\t<span class=\"help-block\" [innerHTML]=\"message\"></span>\r\n\t</div>\r\n\r\n\r\n\r\n</div>"

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

module.exports = "<div>\r\n\r\n<div class=\"page-header\"><h3 align=\"center\">Password App</h3></div>\r\n\r\n<ul class=\"nav nav-tabs nav-justified\">\r\n  <li routerLinkActive=\"active\"><a routerLink=\"pgen\">Generate Password</a></li>\r\n  <li routerLinkActive=\"active\"><a routerLink=\"pdec\">Decrypt Password</a></li>\r\n  <li routerLinkActive=\"active\"><a routerLink=\"pSave\">Save Password</a></li>\r\n  <li routerLinkActive=\"active\"><a routerLink=\"pRet\">Retrieve Password</a></li>\r\n  <li routerLinkActive=\"active\"><a routerLink=\"pAbout\">About</a></li>\r\n</ul>\r\n<div>\r\n\t<router-outlet></router-outlet>\r\n</div>\r\n</div>"

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

module.exports = "<!-- <div>\n\t<div class=\"input-group\">\n\t  <span class=\"input-group-addon\">Vault Password</span>\n\t  <input type=\"text\" class=\"form-control\" placeholder=\"vPasswd\" [(ngModel)]=\"passwdInfo.passwd\">\n\t</div>\n</div> -->\n\n\n<div class=\"container-fluid\">\n\t<div class=\"form-group\"> <!-- input group can be used but it shorten the input length -->\n\t  <label>Vault Password:</label>\n\t  <input type=\"text\" class=\"form-control\" required #passwdv=\"ngModel\" placeholder=\"Big vault password\" [(ngModel)]=\"passwdInfo.passwd\">\n\t  <div *ngIf=\"passwdv.invalid && (passwdv.dirty || passwdv.touched)\" class=\"alert alert-danger\">\n\t\t\t<div *ngIf=\"passwdv.errors.required\">Valut password is mandatory.</div>\n\t  </div>\n\t</div>\n\t<div class=\"form-group\">\n\t  <label>Salt:</label>\n\t  <input type=\"text\" class=\"form-control\" required pattern=\"^[0-9]{8,8}$\" #saltv=\"ngModel\" placeholder=\"8 digit salt\" [(ngModel)]=\"passwdInfo.salt\">\n\t  <div *ngIf=\"saltv.invalid && (saltv.dirty || saltv.touched)\" class=\"alert alert-danger\">\n\t\t\t<div *ngIf=\"saltv.errors.pattern\">Digit only and must be 8 characters long.</div>\n\t\t\t<div *ngIf=\"saltv.errors.required\">Salt is mandatory.</div>\n\t  </div>\n\t</div>\n\t<div class=\"form-group\">\n\t  <label>Encrypted Password:</label>\n\t  <input type=\"text\" class=\"form-control\" required pattern=\"^.{64,64}$\" #encv=\"ngModel\" placeholder=\"encrypted password string\" [(ngModel)]=\"passwdInfo.encryptedPasswd\">\n\t  <div *ngIf=\"encv.invalid && (encv.dirty || encv.touched)\" class=\"alert alert-danger\">\n\t\t\t<div *ngIf=\"encv.errors.pattern\">It's length has to be exact 64</div>\n\t\t\t<div *ngIf=\"encv.errors.required\">To decrypt you need to provide encrypted password.</div>\n\t  </div>\n\t</div>\n\t<div class=\"form-group\" *ngIf=\"!passwdInfo.generatedPasswd\">\n\t\t<button [disabled]=\"!passwdInfo.passwd || !passwdInfo.salt || (passwdInfo.salt && (passwdInfo.salt.length !== 8 || passwdInfo.salt.match('[^0-9]'))) || !passwdInfo.encryptedPasswd || (passwdInfo.encryptedPasswd && (passwdInfo.encryptedPasswd.length != 64)) \" \n\t\tclass=\"btn btn-primary\" type=\"button\" (click)=\"submitInput()\">Submit to get generated password</button>\n\t</div>\n\t<span class=\"help-block\" [innerHTML]=\"message\"></span>\n\t<div class=\"input-group form-group\" *ngIf=\"passwdInfo.generatedPasswd\">\n\t  <span class=\"input-group-addon\">Generated Password</span>\n\t  <span class=\"form-control\" >{{passwdInfo.generatedPasswd}}</span>\n\t  <span class=\"input-group-btn\">\n        <button class=\"btn btn-default\" [class.btn-success]= \"isCopiedE\" type=\"button\" ngxClipboard [cbContent]=\"passwdInfo.generatedPasswd\" (cbOnSuccess)=\"isCopiedE = true\">Copy to clipboard</button>\n      </span>\n\t</div>\n\t<div class=\"form-group\" *ngIf=\"passwdInfo.generatedPasswd\">\n\t\t<button class=\"btn btn-warning\" type=\"button\" (click)=\"resetInput()\">Reset</button>\n\t</div>\n</div>"

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

module.exports = "<div class=\"container-fluid\">\n\t<!-- <form [formGroup]=\"passwdGenForm\"> -->\n\t<!-- <input  formControlName=\"name\"  /> -->\n\n\t<div class=\"form-group\">\n\t\t<label>Vault Password:</label>\n\t\t<input class=\"form-control\" required #passwdv=\"ngModel\" type=\"text\" placeholder=\"Give long password, kind of sentence.\" [(ngModel)]=\"passwdInfo.passwd\">\n\t\t<div *ngIf=\"passwdv.invalid && (passwdv.dirty || passwdv.touched)\" class=\"alert alert-danger\">\n\t\t\t<div *ngIf=\"passwdv.errors.required\">Valut password is mandatory.</div>\n\t\t</div>\n\t</div>\n\t<div class=\"form-group\">\n\t\t<label>Salt:</label>\n\t\t<input class=\"form-control\" pattern=\"^[0-9]{8,8}$\" #saltv=\"ngModel\" type=\"text\" placeholder=\"8 digit\" [(ngModel)]=\"passwdInfo.salt\">\n\t\t<div *ngIf=\"saltv.invalid && (saltv.dirty || saltv.touched)\" class=\"alert alert-danger\">\n\t\t\t<div *ngIf=\"saltv.errors.pattern\">Digit only and must be 8 characters long.</div>\n\t\t</div>\n\t\t<span class=\"help-block\">If you don't provide the salt then tool can generate it for you, but you have to remember it when decrypting it. It's\n\t\t\tpreferred that you get generated one.</span>\n\t</div>\n\n\t<div class=\"form-group\" *ngIf=\"!passwdInfo.encryptedPasswd\">\n\t\t<button [disabled]=\"!passwdInfo.passwd || (passwdInfo.salt && (passwdInfo.salt.length !== 8 || passwdInfo.salt.match('[^0-9]')))\" class=\"btn btn-primary\" type=\"button\" (click)=\"submitInput()\">Submit to get generated password</button>\n\t</div>\n\t<span class=\"help-block\" [innerHTML]=\"message\"></span>\n\n\t<div class=\"input-group form-group\" *ngIf=\"passwdInfo.generatedPasswd\">\n\t\t<span class=\"input-group-addon\">Generated Password</span> <span class=\"form-control\">{{passwdInfo.generatedPasswd}}</span> <span class=\"input-group-btn\">\n\t\t\t<button class=\"btn btn-default\" [class.btn-success]=\"isCopiedG\" type=\"button\" ngxClipboard [cbContent]=\"passwdInfo.generatedPasswd\"\n\t\t\t\t(cbOnSuccess)=\"isCopiedG = true\">Copy to clipboard</button>\n\t\t</span>\n\t</div>\n\n\t<div class=\"input-group form-group\" *ngIf=\"passwdInfo.encryptedPasswd\">\n\t\t<span class=\"input-group-addon\">Encrypted Password</span> <span class=\"form-control\">{{passwdInfo.encryptedPasswd}}</span> <span class=\"input-group-btn\">\n\t\t\t<button class=\"btn btn-default\" [class.btn-success]=\"isCopiedE\" type=\"button\" ngxClipboard [cbContent]=\"passwdInfo.encryptedPasswd\"\n\t\t\t\t(cbOnSuccess)=\"isCopiedE = true\">Copy to clipboard</button>\n\t\t</span>\n\t</div>\n\t<div class=\"form-group\" *ngIf=\"passwdInfo.encryptedPasswd\">\n\t\t<a routerLink=\"../pSave\" class=\"btn btn-success pull-right\" (click)=\"savePasswd();\"> Save encrypted password </a>\n\t</div>\n\n\t<div class=\"form-group\" *ngIf=\"passwdInfo.generatedPasswd\">\n\t\t<button class=\"btn btn-warning\" type=\"button\" (click)=\"resetInput()\">Reset</button>\n\t</div>\n\t<!-- </form> -->\n</div>\n"

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