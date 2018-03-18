webpackJsonp(["vma.module"],{

/***/ "../../../../../src/app/vma/vma-about/vma-about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/vma/vma-about/vma-about.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  TODO: Write about this app\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/vma/vma-about/vma-about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VmaAboutComponent; });
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

var VmaAboutComponent = (function () {
    function VmaAboutComponent() {
    }
    VmaAboutComponent.prototype.ngOnInit = function () {
    };
    return VmaAboutComponent;
}());
VmaAboutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-vma-about',
        template: __webpack_require__("../../../../../src/app/vma/vma-about/vma-about.component.html"),
        styles: [__webpack_require__("../../../../../src/app/vma/vma-about/vma-about.component.css")]
    }),
    __metadata("design:paramtypes", [])
], VmaAboutComponent);

//# sourceMappingURL=vma-about.component.js.map

/***/ }),

/***/ "../../../../../src/app/vma/vma-allocation/vma-allocation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/vma/vma-allocation/vma-allocation.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n\t<button *ngIf=\"loggedInUser\" class=\"btn btn-outline-info pull-right\" (click)=\"refresh()\">Refresh VM list</button>\r\n\t<button *ngIf=\"loggedInUser\" class=\"btn btn-outline-info pull-right\" (click)=\"logout()\">logout</button>\r\n\t<a *ngIf=\"!loggedInUser\" class=\"btn btn-outline-info pull-right\" href=\"/#/vma/vmal\">login please</a>\r\n\t<hr/>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-sm-2\">\r\n\t\t\t<ul class=\"nav nav-pills flex-column\">\r\n\t\t\t  <li class=\"nav-item\"><a [ngClass]=\"isActiveFor('lbu')?'nav-link active':'nav-link'\" (click)=\"setTab('lbu')\">Locked By You</a></li>\r\n\t\t\t  <li class=\"nav-item\"><a [ngClass]=\"isActiveFor('lock')?'nav-link active':'nav-link'\" (click)=\"setTab('lock')\">Locked By Others</a></li>\r\n\t\t\t  <li class=\"nav-item\"><a [ngClass]=\"isActiveFor('avail')?'nav-link active':'nav-link'\" (click)=\"setTab('avail')\">Available VMs</a></li>\r\n\t\t\t  <li class=\"nav-item\"><a [ngClass]=\"isActiveFor('admin')?'nav-link active':'nav-link'\" (click)=\"setTab('admin')\">Administrator</a></li>\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\t\t<div class=\"col-sm-10\">\r\n\t\t\t<span class=\"form-text text-muted\" *ngIf=\"!activeTab && loggedInUser\">Please select a option from menu</span>\r\n\t\t\t<app-vma-aloc-lockedbyou *ngIf=\"activeTab === 'lbu'\" [cVmList]=\"vmList\" [cLoggedInUser]=\"loggedInUser\" [cUser]=\"userId\" (cVmReleased)=\"releaseVM($event)\"></app-vma-aloc-lockedbyou>\r\n\t\t\t<app-vma-aloc-locked *ngIf=\"activeTab === 'lock'\" [cVmList]=\"vmList\" [cLoggedInUser]=\"loggedInUser\" [cUser]=\"userId\"></app-vma-aloc-locked>\r\n\t\t\t<app-vma-aloc-available *ngIf=\"activeTab === 'avail'\" [cVmList]=\"vmList\" [cLoggedInUser]=\"loggedInUser\" (cVmOccupied)=\"lockVM($event)\"></app-vma-aloc-available>\r\n\t\t\t<app-vma-aloc-admin *ngIf=\"activeTab === 'admin'\" [cVmList]=\"vmList\" [cLoggedInUser]=\"loggedInUser\" [cUser]=\"userId\" (cVmReleased)=\"releaseVM($event)\" (cVmAdd)=\"addVM($event)\" (cVmRemove)=\"removeVM($event)\"></app-vma-aloc-admin>\r\n\t\t</div>\r\n    </div>\r\n\t{{message}}\r\n\t<!-- . --> <!-- . is added so that button are encapsulated in panel       Now this dot is not required because of container-fluid -->\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/vma/vma-allocation/vma-allocation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VmaAllocationComponent; });
/* unused harmony export VM */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_share_data_service__ = __webpack_require__("../../../../../src/app/services/share-data-service.ts");
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



// import VM from '../vma.component';
var VmaAllocationComponent = (function () {
    function VmaAllocationComponent(sharedDataService, httpService) {
        this.sharedDataService = sharedDataService;
        this.httpService = httpService;
    }
    VmaAllocationComponent.prototype.ngOnInit = function () {
        this.getVM();
        //    this.activeTab = 'lbu';
        //    this.setTestData();
        this.loggedInUser = this.sharedDataService.sharedStr;
        this.userId = this.sharedDataService.sharedStr2;
    };
    VmaAllocationComponent.prototype.setTestData = function () {
        //    this.loggedInUser = 'sim';
        this.vmList = [{ vmName: 'simrond01v', user: 'sim' }, { vmName: 'simrond02v', user: 'sim1' }, { vmName: 'simrond03v', user: '' }];
    };
    VmaAllocationComponent.prototype.setTab = function (tabValue) {
        this.message = '';
        this.activeTab = tabValue;
    };
    VmaAllocationComponent.prototype.isActiveFor = function (tabValue) {
        if (tabValue === this.activeTab) {
            return true;
        }
        return false;
    };
    VmaAllocationComponent.prototype.getVM = function () {
        var _this = this;
        this.httpService.getAny('/vma/getAllVMs', this).subscribe(function (res) {
            _this.vmList = res;
            _this.message = ''; // clearing up API is being callled
        }, function (errRes) {
            _this.message = errRes.error.messagae;
        });
    };
    VmaAllocationComponent.prototype.lockVM = function (aVmName) {
        var _this = this;
        var _loop_1 = function (vm) {
            if (vm.vmName === aVmName) {
                // Success, Not logged in(User not logged in, so you bypassed frontend check), VM not exist, Already allocated, DB Failure
                this_1.httpService.postRetStr('/vma/allocateVM', { 'userKey': this_1.loggedInUser, 'vmName': vm.vmName }, this_1).subscribe(function (res) {
                    vm.user = _this.userId;
                    _this.message = ''; // clearing up API is being callled
                }, function (errRes) {
                    _this.message = errRes.error;
                    if (_this.message === 'Not logged in') {
                        _this.message = 'You are not logged in on backend. Click logout and trying login again';
                    }
                    else if (_this.message === 'VM not exist') {
                        _this.message = 'VM not exist. Looks like admin removed it. Click refresh to update your list.';
                    }
                    else if (_this.message === 'Already allocated') {
                        _this.message = 'Someone already allocated it. Click refresh to update your list.';
                    }
                    else if (_this.message === 'DB Failure') {
                        _this.message = 'Backend Problem A1';
                    }
                    else if (!_this.message.startsWith('Mandatory')) {
                        _this.message = 'This is weired A1';
                    }
                });
                return "break";
            }
        };
        var this_1 = this;
        for (var _i = 0, _a = this.vmList; _i < _a.length; _i++) {
            var vm = _a[_i];
            var state_1 = _loop_1(vm);
            if (state_1 === "break")
                break;
        }
    };
    VmaAllocationComponent.prototype.releaseVM = function (aVmName) {
        var _this = this;
        var _loop_2 = function (vm) {
            if (vm.vmName === aVmName) {
                // Success, Not logged in(User not logged in, so you bypassed frontend check), VM not exist, Already released, DB Failure, Locked by other
                this_2.httpService.postRetStr('/vma/freeVM', { 'userKey': this_2.loggedInUser, 'vmName': vm.vmName }, this_2).subscribe(function (res) {
                    vm.user = '';
                    _this.message = ''; // clearing up API is being callled
                }, function (errRes) {
                    _this.message = errRes.error;
                    if (_this.message === 'Not logged in') {
                        _this.message = 'You are not logged in on backend. Click logout and trying login again';
                    }
                    else if (_this.message === 'VM not exist') {
                        _this.message = 'VM not exist. Looks like admin removed it. Click refresh to update your list.';
                    }
                    else if (_this.message === 'Already released') {
                        _this.message = 'Already release. Click refersh to update your list. Strange, how you managed it';
                    }
                    else if (_this.message === 'Locked by other') {
                        _this.message = 'This is locked by someone. May be admin forcefully released it from you. Click referesh to update your list';
                    }
                    else if (_this.message === 'DB Failure') {
                        _this.message = 'Backend Problem A2';
                    }
                    else if (!_this.message.startsWith('Mandatory')) {
                        _this.message = 'This is weired A2';
                    }
                });
                return "break";
            }
        };
        var this_2 = this;
        for (var _i = 0, _a = this.vmList; _i < _a.length; _i++) {
            var vm = _a[_i];
            var state_2 = _loop_2(vm);
            if (state_2 === "break")
                break;
        }
    };
    VmaAllocationComponent.prototype.addVM = function (newVM) {
        var _this = this;
        this.httpService.postRetStr('/vma/addNewVM', { 'userKey': this.loggedInUser, 'vmName': newVM.vmName }, this).subscribe(function (res) {
            _this.vmList = _this.vmList.concat(newVM);
            _this.message = 'Added ' + newVM.vmName;
        }, function (errRes) {
            _this.message = errRes.error;
            if (_this.message === 'Not logged in') {
                _this.message = 'You are not logged in on backend. Click logout and trying login again';
            }
            else if (_this.message === 'VM exist') {
                _this.message = 'VM exist. Are you sharing admin password?.';
            }
            else if (_this.message === 'Not authorized') {
                _this.message = 'If you are not admin, how come you sent this request';
            }
            else if (_this.message === 'DB Failure') {
                _this.message = 'Backend Problem A2';
            }
            else if (_this.message === 'VM name not permitted') {
                _this.message = 'Try something better than this';
            }
            else if (!_this.message.startsWith('Mandatory')) {
                _this.message = 'This is weired A2';
            }
        });
    };
    VmaAllocationComponent.prototype.removeVM = function (newVM) {
        var _this = this;
        this.httpService.postRetStr('/vma/remVM', { 'userKey': this.loggedInUser, 'vmName': newVM.vmName }, this).subscribe(function (res) {
            var newList = _this.vmList.filter(function (obj) {
                return obj.vmName !== newVM.vmName;
            });
            _this.vmList = newList;
            _this.message = 'Removed ' + newVM.vmName;
        }, function (errRes) {
            _this.message = errRes.error;
            if (_this.message === 'Not logged in') {
                _this.message = 'You are not logged in on backend. Click logout and trying login again';
            }
            else if (_this.message === 'VM not exist') {
                _this.message = 'VM not exist. Are you sharing admin password?.';
            }
            else if (_this.message === 'Not authorized') {
                _this.message = 'If you are not admin, how come you sent this request';
            }
            else if (_this.message === 'DB Failure') {
                _this.message = 'Backend Problem A3';
            }
            else if (!_this.message.startsWith('Mandatory')) {
                _this.message = 'This is weired A3';
            }
        });
    };
    VmaAllocationComponent.prototype.logout = function () {
        var _this = this;
        this.httpService.postSRetStr('/vma/logout', this.loggedInUser, this).subscribe(function (res) {
            _this.loggedInUser = '';
            _this.sharedDataService.sharedStr = '';
            _this.userId = '';
            _this.sharedDataService.sharedStr2 = '';
            _this.message = ''; // clearing up API is being callled
        }, function (errRes) {
            _this.message = errRes.error;
            if (_this.message === 'Not logged in') {
                _this.message = 'Not logged in, how come you are able to try logout';
            }
            else if (_this.message === 'DB Failure') {
                _this.message = 'Backend problem';
            }
            else if (!_this.message.startsWith('Mandatory')) {
                _this.message = 'This is weired L2';
            }
        });
    };
    VmaAllocationComponent.prototype.refresh = function () {
        this.getVM();
    };
    return VmaAllocationComponent;
}());
VmaAllocationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-vma-allocation',
        template: __webpack_require__("../../../../../src/app/vma/vma-allocation/vma-allocation.component.html"),
        styles: [__webpack_require__("../../../../../src/app/vma/vma-allocation/vma-allocation.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_share_data_service__["a" /* ShareDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_share_data_service__["a" /* ShareDataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_http_comp__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_http_comp__["a" /* HttpService */]) === "function" && _b || Object])
], VmaAllocationComponent);

var VM = (function () {
    function VM() {
    }
    return VM;
}());

var _a, _b;
//# sourceMappingURL=vma-allocation.component.js.map

/***/ }),

/***/ "../../../../../src/app/vma/vma-allocation/vma-aloc-admin/vma-aloc-admin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/vma/vma-allocation/vma-aloc-admin/vma-aloc-admin.component.html":
/***/ (function(module, exports) {

module.exports = "<h3><span class=\"label label-danger\" *ngIf=\"cUser !== 'admin'\">Only admin is allowed here</span></h3>\r\n<div *ngIf=\"cUser === 'admin'\">\r\n\tEnter virtual machine name you want to add/remove\r\n\t<input [(ngModel)]=\"vmToAct\" placeholder=\"virtual machine name\"/>\r\n\t<button [disabled]=\"!vmToAct || vmToAct.length > 32 || isVMExist()\" class=\"btn btn-default\" (click)=\"onAdd()\">Add</button>\r\n\t<button [disabled]=\"!vmToAct || vmToAct.length > 32 || !isVMExist()\" class=\"btn btn-default\" (click)=\"onRemove()\">Remove</button>\r\n\t<hr/>\r\n\t<h3>Following machine are locked by users. To release lock from the machine just click on them</h3>\r\n\t<span *ngFor=\"let vm of cVmList\">\r\n\t\t<button *ngIf=\"vm.user\" class=\"btn btn-default col-sm-2\" style=\"margin:10px\" (click)=\"onRelease(vm.vmName)\">{{vm.vmName}}</button>\r\n\t</span>\r\n\t{{message}}\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/vma/vma-allocation/vma-aloc-admin/vma-aloc-admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VmaAlocAdminComponent; });
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


var VmaAlocAdminComponent = (function () {
    function VmaAlocAdminComponent(httpService) {
        this.httpService = httpService;
        this.cVmReleased = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.cVmAdd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.cVmRemove = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    VmaAlocAdminComponent.prototype.ngOnInit = function () {
        //    this.httpService.postSRetBool('/vma/admin', this.cLoggedInUser, this).subscribe(res => {
        //      this.isAdmin = res;
        //      this.message = '';
        //    }, errRes => {
        //      this.message = errRes.error.message;
        //      if (!this.message.startsWith('Mandatory')) {
        //        this.message = 'This is weired AA1';
        //      }
        //    });
    };
    VmaAlocAdminComponent.prototype.onRelease = function (aVmName) {
        this.cVmReleased.emit(aVmName);
    };
    VmaAlocAdminComponent.prototype.onAdd = function () {
        // check if it already exist
        this.cVmAdd.emit({ vmName: this.vmToAct, user: '' });
    };
    VmaAlocAdminComponent.prototype.onRemove = function () {
        this.cVmRemove.emit({ vmName: this.vmToAct, user: '' });
    };
    VmaAlocAdminComponent.prototype.isVMExist = function () {
        for (var _i = 0, _a = this.cVmList; _i < _a.length; _i++) {
            var vm = _a[_i];
            if (vm.vmName === this.vmToAct) {
                return true;
            }
        }
        return false;
    };
    return VmaAlocAdminComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Array)
], VmaAlocAdminComponent.prototype, "cVmList", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], VmaAlocAdminComponent.prototype, "cLoggedInUser", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], VmaAlocAdminComponent.prototype, "cUser", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], VmaAlocAdminComponent.prototype, "cVmReleased", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], VmaAlocAdminComponent.prototype, "cVmAdd", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], VmaAlocAdminComponent.prototype, "cVmRemove", void 0);
VmaAlocAdminComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-vma-aloc-admin',
        template: __webpack_require__("../../../../../src/app/vma/vma-allocation/vma-aloc-admin/vma-aloc-admin.component.html"),
        styles: [__webpack_require__("../../../../../src/app/vma/vma-allocation/vma-aloc-admin/vma-aloc-admin.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_http_comp__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_http_comp__["a" /* HttpService */]) === "function" && _a || Object])
], VmaAlocAdminComponent);

var _a;
//# sourceMappingURL=vma-aloc-admin.component.js.map

/***/ }),

/***/ "../../../../../src/app/vma/vma-allocation/vma-aloc-available/vma-aloc-available.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/vma/vma-allocation/vma-aloc-available/vma-aloc-available.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!cLoggedInUser\" class=\"container-fluid\">\n\t<h4>You need to login first</h4>\n</div>\n<div *ngIf=\"cLoggedInUser\" class=\"container-fluid\" >\n\t<h3>Click on button to acquire machine</h3>\n\t<hr/>\n\t<span *ngFor=\"let vm of cVmList\" >\n\t\t<button *ngIf=\"!vm.user\" class=\"btn btn-default col-sm-2\" style=\"margin:10px\" (click)=\"lockVm(vm.vmName)\">{{vm.vmName}}</button>\n\t</span>\n</div>"

/***/ }),

/***/ "../../../../../src/app/vma/vma-allocation/vma-aloc-available/vma-aloc-available.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VmaAlocAvailableComponent; });
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

var VmaAlocAvailableComponent = (function () {
    function VmaAlocAvailableComponent() {
        this.cVmOccupied = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    VmaAlocAvailableComponent.prototype.ngOnInit = function () {
    };
    VmaAlocAvailableComponent.prototype.lockVm = function (aVmName) {
        this.cVmOccupied.emit(aVmName);
    };
    return VmaAlocAvailableComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Array)
], VmaAlocAvailableComponent.prototype, "cVmList", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], VmaAlocAvailableComponent.prototype, "cLoggedInUser", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], VmaAlocAvailableComponent.prototype, "cVmOccupied", void 0);
VmaAlocAvailableComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-vma-aloc-available',
        template: __webpack_require__("../../../../../src/app/vma/vma-allocation/vma-aloc-available/vma-aloc-available.component.html"),
        styles: [__webpack_require__("../../../../../src/app/vma/vma-allocation/vma-aloc-available/vma-aloc-available.component.css")]
    }),
    __metadata("design:paramtypes", [])
], VmaAlocAvailableComponent);

//# sourceMappingURL=vma-aloc-available.component.js.map

/***/ }),

/***/ "../../../../../src/app/vma/vma-allocation/vma-aloc-locked/vma-aloc-locked.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/vma/vma-allocation/vma-aloc-locked/vma-aloc-locked.component.html":
/***/ (function(module, exports) {

module.exports = "<span *ngFor=\"let vm of cVmList\">\n\t<span *ngIf=\"vm.user && vm.user !== cUser\" class=\"col-sm-6\">\n\t\t<button class=\"btn btn-default\" [disabled]=\"true\" style=\"margin:10px\">{{vm.vmName}}</button> Locked by {{vm.user}}\n\t</span>\n</span>\n"

/***/ }),

/***/ "../../../../../src/app/vma/vma-allocation/vma-aloc-locked/vma-aloc-locked.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VmaAlocLockedComponent; });
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

var VmaAlocLockedComponent = (function () {
    function VmaAlocLockedComponent() {
    }
    VmaAlocLockedComponent.prototype.ngOnInit = function () {
    };
    return VmaAlocLockedComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Array)
], VmaAlocLockedComponent.prototype, "cVmList", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], VmaAlocLockedComponent.prototype, "cLoggedInUser", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], VmaAlocLockedComponent.prototype, "cUser", void 0);
VmaAlocLockedComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-vma-aloc-locked',
        template: __webpack_require__("../../../../../src/app/vma/vma-allocation/vma-aloc-locked/vma-aloc-locked.component.html"),
        styles: [__webpack_require__("../../../../../src/app/vma/vma-allocation/vma-aloc-locked/vma-aloc-locked.component.css")]
    }),
    __metadata("design:paramtypes", [])
], VmaAlocLockedComponent);

//# sourceMappingURL=vma-aloc-locked.component.js.map

/***/ }),

/***/ "../../../../../src/app/vma/vma-allocation/vma-aloc-lockedbyou/vma-aloc-lockedbyou.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/vma/vma-allocation/vma-aloc-lockedbyou/vma-aloc-lockedbyou.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!cLoggedInUser\">\n\t<h4>You need to login first</h4>\n</div>\n<div *ngIf=\"cLoggedInUser\">\n\t<h4>Following virtual machines are locked by you. Click on button to release machine which is specified on button</h4>\n\t<hr/>\n\t<span *ngFor=\"let vm of cVmList\" >\n\t\t<button *ngIf=\"vm.user === cUser\" class=\"btn btn-default col-sm-2\" style=\"margin:10px\" (click)=\"onRelease(vm.vmName)\">{{vm.vmName}}</button>\n\t</span>\n</div>"

/***/ }),

/***/ "../../../../../src/app/vma/vma-allocation/vma-aloc-lockedbyou/vma-aloc-lockedbyou.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VmaAlocLockedbyouComponent; });
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

var VmaAlocLockedbyouComponent = (function () {
    function VmaAlocLockedbyouComponent() {
        this.cVmReleased = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    VmaAlocLockedbyouComponent.prototype.ngOnInit = function () {
    };
    VmaAlocLockedbyouComponent.prototype.onRelease = function (aVmName) {
        this.cVmReleased.emit(aVmName);
    };
    return VmaAlocLockedbyouComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Array)
], VmaAlocLockedbyouComponent.prototype, "cVmList", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], VmaAlocLockedbyouComponent.prototype, "cLoggedInUser", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], VmaAlocLockedbyouComponent.prototype, "cUser", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], VmaAlocLockedbyouComponent.prototype, "cVmReleased", void 0);
VmaAlocLockedbyouComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-vma-aloc-lockedbyou',
        template: __webpack_require__("../../../../../src/app/vma/vma-allocation/vma-aloc-lockedbyou/vma-aloc-lockedbyou.component.html"),
        styles: [__webpack_require__("../../../../../src/app/vma/vma-allocation/vma-aloc-lockedbyou/vma-aloc-lockedbyou.component.css")]
    }),
    __metadata("design:paramtypes", [])
], VmaAlocLockedbyouComponent);

//# sourceMappingURL=vma-aloc-lockedbyou.component.js.map

/***/ }),

/***/ "../../../../../src/app/vma/vma-login/vma-login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/vma/vma-login/vma-login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n\t<div *ngIf=\"loggedInUser\">\r\n\t\t<br>\r\n\t\t<h4>You are logged in as {{user}}</h4>\r\n\t\t<button class=\"btn btn-default\" (click)=\"logout()\">logout</button>\r\n\t\t<br/>\r\n\t</div>\r\n\t<div *ngIf=\"!loggedInUser\">\r\n\t\t<br>\r\n\t\t<div class=\"input-group\">\r\n\t\t\t<span class=\"input-group-addon\" id=\"basic-addon1\">User</span>\r\n\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Username\" aria-describedby=\"basic-addon1\" [(ngModel)]=\"user\">\r\n\t\t</div>\r\n\t\t<span class=\"form-text text-muted\">Choose user name by which people can identify you. So that if required they can contact you.</span>\r\n\t\t<div class=\"input-group\">\r\n\t\t\t<span class=\"input-group-addon\" id=\"basic-addon1\">Password</span>\r\n\t\t\t<input type=\"password\" class=\"form-control\" placeholder=\"password\" aria-describedby=\"basic-addon1\" [(ngModel)]=\"passwd\">\r\n\t\t</div>\r\n\t\t<span class=\"form-text text-muted\">This password is just for purpose that other person can't login with your user. Its not stored so you can keep it simple.</span>\r\n\t\t<button class=\"btn btn-outline-info\" (click)=\"login()\">Login</button>\r\n\t\t<br/>\r\n\t\t<span class=\"form-text text-muted\">{{message}}</span>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/vma/vma-login/vma-login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VmaLoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_http_comp__ = __webpack_require__("../../../../../src/app/services/http.comp.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_share_data_service__ = __webpack_require__("../../../../../src/app/services/share-data-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VmaLoginComponent = (function () {
    function VmaLoginComponent(sharedDataService, httpService, router) {
        this.sharedDataService = sharedDataService;
        this.httpService = httpService;
        this.router = router;
    }
    VmaLoginComponent.prototype.ngOnInit = function () {
        this.loggedInUser = this.sharedDataService.sharedStr;
        this.user = this.sharedDataService.sharedStr2;
    };
    VmaLoginComponent.prototype.login = function () {
        var _this = this;
        this.httpService.postRetStr('/vma/login', { 'userId': this.user, 'passwd': this.passwd }, this).subscribe(function (res) {
            _this.loggedInUser = res;
            _this.sharedDataService.sharedStr = _this.loggedInUser;
            _this.sharedDataService.sharedStr2 = _this.user;
            _this.message = ''; // clearing up API is being callled
            _this.router.navigate(['vma/vmaal']);
        }, function (errRes) {
            _this.message = errRes.error;
            if (_this.message === 'User exist') {
                _this.message = 'This user id is already taken. Or you forgot your password';
            }
            else if (_this.message === 'DB Failure') {
                _this.message = 'Backend problem';
            }
            else if (!_this.message.startsWith('Mandatory')) {
                _this.message = 'This is weired L1';
            }
        });
        this.passwd = '';
    };
    VmaLoginComponent.prototype.logout = function () {
        var _this = this;
        this.httpService.postSRetStr('/vma/logout', this.loggedInUser, this).subscribe(function (res) {
            _this.loggedInUser = '';
            _this.sharedDataService.sharedStr = '';
            _this.user = '';
            _this.sharedDataService.sharedStr2 = '';
            _this.message = ''; // clearing up API is being callled
        }, function (errRes) {
            _this.message = errRes.error;
            if (_this.message === 'Not logged in') {
                _this.message = 'Not logged in, how come you are able to try logout';
            }
            else if (_this.message === 'DB Failure') {
                _this.message = 'Backend problem';
            }
            else if (!_this.message.startsWith('Mandatory')) {
                _this.message = 'This is weired L2';
            }
        });
    };
    return VmaLoginComponent;
}());
VmaLoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'app-vma-login',
        template: __webpack_require__("../../../../../src/app/vma/vma-login/vma-login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/vma/vma-login/vma-login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_share_data_service__["a" /* ShareDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_share_data_service__["a" /* ShareDataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__services_http_comp__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_http_comp__["a" /* HttpService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], VmaLoginComponent);

var _a, _b, _c;
//# sourceMappingURL=vma-login.component.js.map

/***/ }),

/***/ "../../../../../src/app/vma/vma-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VmaRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vma_allocation_vma_allocation_component__ = __webpack_require__("../../../../../src/app/vma/vma-allocation/vma-allocation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vma_about_vma_about_component__ = __webpack_require__("../../../../../src/app/vma/vma-about/vma-about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__vma_component__ = __webpack_require__("../../../../../src/app/vma/vma.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__vma_login_vma_login_component__ = __webpack_require__("../../../../../src/app/vma/vma-login/vma-login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_4__vma_component__["a" /* VmaComponent */], children: [
            { path: 'vmal', component: __WEBPACK_IMPORTED_MODULE_5__vma_login_vma_login_component__["a" /* VmaLoginComponent */] },
            { path: 'vmaal', component: __WEBPACK_IMPORTED_MODULE_2__vma_allocation_vma_allocation_component__["a" /* VmaAllocationComponent */] },
            { path: 'vmaab', component: __WEBPACK_IMPORTED_MODULE_3__vma_about_vma_about_component__["a" /* VmaAboutComponent */] },
            { path: '', redirectTo: 'vmaab', pathMatch: 'full' }
        ]
    }
];
var VmaRoutingModule = (function () {
    function VmaRoutingModule() {
    }
    return VmaRoutingModule;
}());
VmaRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], VmaRoutingModule);

//# sourceMappingURL=vma-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/vma/vma.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/vma/vma.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n\n<div class=\"page-header\"><h3 align=\"center\">Virtual Machine Allocation App</h3></div>\n\n<ul class=\"nav nav-tabs nav-justified\">\n  <li class=\"nav-item\"><a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"vmal\">VM App Login</a></li>\n  <li class=\"nav-item\"><a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"vmaal\">Virtual Machine Allocation</a></li>\n  <li class=\"nav-item\"><a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"vmaab\">About it</a></li>\n</ul>\n<div>\n\t<router-outlet></router-outlet>\n</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/vma/vma.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VmaComponent; });
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

// https://github.com/AngularClass/angular-starter/wiki/Routing-and-Lazy-loading-@NgModules
// https://github.com/Meligy/routing-angular-cli/tree/master/src/app/lazy
var VmaComponent = (function () {
    function VmaComponent() {
    }
    VmaComponent.prototype.ngOnInit = function () {
    };
    return VmaComponent;
}());
VmaComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-vma',
        template: __webpack_require__("../../../../../src/app/vma/vma.component.html"),
        styles: [__webpack_require__("../../../../../src/app/vma/vma.component.css")]
    }),
    __metadata("design:paramtypes", [])
], VmaComponent);

//# sourceMappingURL=vma.component.js.map

/***/ }),

/***/ "../../../../../src/app/vma/vma.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VmaModule", function() { return VmaModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vma_routing_module__ = __webpack_require__("../../../../../src/app/vma/vma-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__vma_component__ = __webpack_require__("../../../../../src/app/vma/vma.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__vma_allocation_vma_allocation_component__ = __webpack_require__("../../../../../src/app/vma/vma-allocation/vma-allocation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__vma_about_vma_about_component__ = __webpack_require__("../../../../../src/app/vma/vma-about/vma-about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__vma_login_vma_login_component__ = __webpack_require__("../../../../../src/app/vma/vma-login/vma-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__vma_allocation_vma_aloc_lockedbyou_vma_aloc_lockedbyou_component__ = __webpack_require__("../../../../../src/app/vma/vma-allocation/vma-aloc-lockedbyou/vma-aloc-lockedbyou.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__vma_allocation_vma_aloc_locked_vma_aloc_locked_component__ = __webpack_require__("../../../../../src/app/vma/vma-allocation/vma-aloc-locked/vma-aloc-locked.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__vma_allocation_vma_aloc_available_vma_aloc_available_component__ = __webpack_require__("../../../../../src/app/vma/vma-allocation/vma-aloc-available/vma-aloc-available.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__vma_allocation_vma_aloc_admin_vma_aloc_admin_component__ = __webpack_require__("../../../../../src/app/vma/vma-allocation/vma-aloc-admin/vma-aloc-admin.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var VmaModule = (function () {
    function VmaModule() {
    }
    return VmaModule;
}());
VmaModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__vma_routing_module__["a" /* VmaRoutingModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_4__vma_component__["a" /* VmaComponent */], __WEBPACK_IMPORTED_MODULE_5__vma_allocation_vma_allocation_component__["a" /* VmaAllocationComponent */], __WEBPACK_IMPORTED_MODULE_6__vma_about_vma_about_component__["a" /* VmaAboutComponent */], __WEBPACK_IMPORTED_MODULE_7__vma_login_vma_login_component__["a" /* VmaLoginComponent */], __WEBPACK_IMPORTED_MODULE_8__vma_allocation_vma_aloc_lockedbyou_vma_aloc_lockedbyou_component__["a" /* VmaAlocLockedbyouComponent */], __WEBPACK_IMPORTED_MODULE_9__vma_allocation_vma_aloc_locked_vma_aloc_locked_component__["a" /* VmaAlocLockedComponent */], __WEBPACK_IMPORTED_MODULE_10__vma_allocation_vma_aloc_available_vma_aloc_available_component__["a" /* VmaAlocAvailableComponent */], __WEBPACK_IMPORTED_MODULE_11__vma_allocation_vma_aloc_admin_vma_aloc_admin_component__["a" /* VmaAlocAdminComponent */]]
    })
], VmaModule);

//# sourceMappingURL=vma.module.js.map

/***/ })

});
//# sourceMappingURL=vma.module.chunk.js.map