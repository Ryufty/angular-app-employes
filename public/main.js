(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _employees_employees_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employees/employees.component */ "./src/app/employees/employees.component.ts");
/* harmony import */ var _positions_positions_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./positions/positions.component */ "./src/app/positions/positions.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _employee_employee_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./employee/employee.component */ "./src/app/employee/employee.component.ts");
/* harmony import */ var _position_position_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./position/position.component */ "./src/app/position/position.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'employees', component: _employees_employees_component__WEBPACK_IMPORTED_MODULE_3__["EmployeesComponent"] },
    { path: 'employee/:_id', component: _employee_employee_component__WEBPACK_IMPORTED_MODULE_6__["EmployeeComponent"] },
    { path: 'positions', component: _positions_positions_component__WEBPACK_IMPORTED_MODULE_4__["PositionsComponent"] },
    { path: 'position/:_id', component: _position_position_component__WEBPACK_IMPORTED_MODULE_7__["PositionComponent"] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n<app-content></app-content>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _content_content_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./content/content.component */ "./src/app/content/content.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _employees_employees_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./employees/employees.component */ "./src/app/employees/employees.component.ts");
/* harmony import */ var _positions_positions_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./positions/positions.component */ "./src/app/positions/positions.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _data_employee_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./data/employee.service */ "./src/app/data/employee.service.ts");
/* harmony import */ var _data_position_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./data/position.service */ "./src/app/data/position.service.ts");
/* harmony import */ var _employee_employee_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./employee/employee.component */ "./src/app/employee/employee.component.ts");
/* harmony import */ var _position_position_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./position/position.component */ "./src/app/position/position.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_6__["NavComponent"],
                _content_content_component__WEBPACK_IMPORTED_MODULE_7__["ContentComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _employees_employees_component__WEBPACK_IMPORTED_MODULE_10__["EmployeesComponent"],
                _positions_positions_component__WEBPACK_IMPORTED_MODULE_11__["PositionsComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_12__["PageNotFoundComponent"],
                _employee_employee_component__WEBPACK_IMPORTED_MODULE_15__["EmployeeComponent"],
                _position_position_component__WEBPACK_IMPORTED_MODULE_16__["PositionComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [_data_employee_service__WEBPACK_IMPORTED_MODULE_13__["EmployeeService"], _data_position_service__WEBPACK_IMPORTED_MODULE_14__["PositionService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/content/content.component.css":
/*!***********************************************!*\
  !*** ./src/app/content/content.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/content/content.component.html":
/*!************************************************!*\
  !*** ./src/app/content/content.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/content/content.component.ts":
/*!**********************************************!*\
  !*** ./src/app/content/content.component.ts ***!
  \**********************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContentComponent = /** @class */ (function () {
    function ContentComponent() {
    }
    ContentComponent.prototype.ngOnInit = function () {
    };
    ContentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-content',
            template: __webpack_require__(/*! ./content.component.html */ "./src/app/content/content.component.html"),
            styles: [__webpack_require__(/*! ./content.component.css */ "./src/app/content/content.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContentComponent);
    return ContentComponent;
}());



/***/ }),

/***/ "./src/app/data/employee.service.ts":
/*!******************************************!*\
  !*** ./src/app/data/employee.service.ts ***!
  \******************************************/
/*! exports provided: EmployeeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeService", function() { return EmployeeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EmployeeService = /** @class */ (function () {
    function EmployeeService(http) {
        this.http = http;
        this.url = "https://team-api-web422.herokuapp.com";
    }
    EmployeeService.prototype.getEmployees = function () {
        return this.http.get(this.url + "/employees");
    };
    EmployeeService.prototype.saveEmployee = function (employee) {
        return this.http.put(this.url + "/employee/" + employee._id, employee);
    };
    EmployeeService.prototype.getEmployee = function (id) {
        return this.http.get(this.url + "/employee-raw/" + id);
    };
    EmployeeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], EmployeeService);
    return EmployeeService;
}());



/***/ }),

/***/ "./src/app/data/position.service.ts":
/*!******************************************!*\
  !*** ./src/app/data/position.service.ts ***!
  \******************************************/
/*! exports provided: PositionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionService", function() { return PositionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PositionService = /** @class */ (function () {
    function PositionService(http) {
        this.http = http;
        this.url = "https://team-api-web422.herokuapp.com";
    }
    PositionService.prototype.getPositions = function () {
        return this.http.get(this.url + "/positions");
    };
    PositionService.prototype.savePosition = function (position) {
        return this.http.put(this.url + "/position/" + position.id, position);
    };
    PositionService.prototype.getPosition = function (id) {
        return this.http.get(this.url + "/position/" + id);
    };
    PositionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PositionService);
    return PositionService;
}());



/***/ }),

/***/ "./src/app/employee/employee.component.css":
/*!*************************************************!*\
  !*** ./src/app/employee/employee.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center{ margin-top:40px; }"

/***/ }),

/***/ "./src/app/employee/employee.component.html":
/*!**************************************************!*\
  !*** ./src/app/employee/employee.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"center\" *ngIf=\"employee\">\n  <h2>Employee: {{ employeeForm.value.FirstName }} {{ employeeForm.value.LastName }}</h2>\n  <p class=\"lead\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non odio sed eros tristique bibendum.</p>\n</div>\n<div class=\"container\" *ngIf=\"employee\">\n<div class=\"row\">\n<div class=\"col-md-12\">\n  <form [formGroup]=\"employeeForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <div class=\"form-group\" [ngClass]=\"{'has-error': FirstName.errors}\">\n          <label class=\"control-label\" for=\"FirstName\">First Name:</label>\n          <input class=\"form-control\" id=\"FirstName\" formControlName=\"FirstName\" type=\"text\"  name=\"FirstName\" />\n          <div *ngIf=\"FirstName.invalid\">\n            <span class=\"help-block\">First Name is Required</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"form-group\" [ngClass]=\"{'has-error': LastName.errors}\" >\n          <label class=\"control-label\" for=\"LastName\">Last Name:</label>\n          <input class=\"form-control\" id=\"LastName\" formControlName=\"LastName\" type=\"text\" name=\"LastName\" />\n          <div *ngIf=\"LastName.invalid\">\n            <span class=\"help-block\">Last Name is Required</span>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <label class=\"control-label\" for=\"Position\">Position:</label>\n          <select class=\"form-control\" id=\"Position\" formControlName=\"Position\" name=\"Position\">\n            <option *ngFor=\"let position of positions\" [value]=\"position._id\">{{position.PositionName}}</option>\n          </select>\n        </div>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"form-group\" [ngClass]=\"{'has-error': SalaryBonus.errors}\">\n          <label class=\"control-label\" for=\"SalaryBonus\">Salary Bonus</label>\n          <div class=\"input-group\">\n            <span class=\"input-group-addon\">$</span>\n            <input class=\"form-control\" id=\"SalaryBonus\" formControlName=\"SalaryBonus\" type=\"text\" name=\"SalaryBonus\" />\n          </div>\n          <div *ngIf=\"SalaryBonus.invalid\">\n            <span class=\"help-block\">Salary is Required</span>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-3\">\n        <div class=\"form-group\" [ngClass]=\"{'has-error': AddressStreet.errors}\" >\n          <label class=\"control-label\" for=\"AddressStreet\">Address (Street):</label>\n          <input class=\"form-control\" id=\"AddressStreet\" formControlName=\"AddressStreet\" type=\"text\" name=\"AddressStreet\" />\n          <div *ngIf=\"AddressStreet.invalid\">\n            <span class=\"help-block\">Address Street is Required</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-3\">\n        <div class=\"form-group\" [ngClass]=\"{'has-error': AddressCity.errors}\" >\n          <label class=\"control-label\" for=\"AddressCity\">Address (City):</label>\n          <input class=\"form-control\" id=\"AddressCity\" formControlName=\"AddressCity\" type=\"text\" name=\"AddressCity\" />\n          <div *ngIf=\"AddressCity.invalid\">\n              <span class=\"help-block\">Address City is Required</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-3\">\n        <div class=\"form-group\" [ngClass]=\"{'has-error': AddressState.errors}\" >\n          <label class=\"control-label\" for=\"AddressState\">Address (State):</label>\n          <input class=\"form-control\" id=\"AdressState\" formControlName=\"AddressState\" type=\"text\" name=\"AddressState\" />\n          <div *ngIf=\"AddressState.invalid\">\n              <span class=\"help-block\">Address State is Required</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-3\">\n        <div class=\"form-group\" [ngClass]=\"{'has-error': AddressZip.errors}\" >\n          <label class=\"control-label\" for=\"AddressZip\">Address (Zip Code):</label>\n          <input class=\"form-control\" id=\"AdressZip\" formControlName=\"AddressZip\" type=\"text\" name=\"AddressZip\" />\n          <div *ngIf=\"AddressZip.invalid\">\n              <span class=\"help-block\">Address Zip Code is Required</span>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-3\">\n        <div class=\"form-group\" [ngClass]=\"{'has-error': PhoneNum.errors}\" >\n          <label class=\"control-label\" for=\"PhoneNum\">Phone Number:</label>\n          <input class=\"form-control\" id=\"PhoneNum\" formControlName=\"PhoneNum\" type=\"text\" name=\"PhoneNum\" />\n          <div *ngIf=\"PhoneNum.invalid\">\n              <span class=\"help-block\">Phone Number is Required</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-3\">\n        <div class=\"form-group\" [ngClass]=\"{'has-error': Extension.errors}\" >\n          <label class=\"control-label\" for=\"Extension\">Extension:</label>\n          <input class=\"form-control\" id=\"Extension\" formControlName=\"Extension\" type=\"text\" name=\"Extension\" />\n          <div *ngIf=\"Extension.invalid\">\n              <span class=\"help-block\">Extension Number is Required</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <label class=\"control-label\" for=\"HireDate\">Hire Date:</label>\n          <input class=\"form-control\" id=\"HireDate\" name=\"HireDate\" type=\"text\" value=\"{{employee.HireDate | date:'longDate'}}\" readonly />\n        </div>\n      </div>\n    </div>\n    <hr />\n    <a routerLink=\"/employees\" class=\"btn btn-warning pull-left\">Return to Employee List</a>\n    <input type=\"submit\" [disabled]=\"!employeeForm.valid\" class=\"btn btn-primary pull-right\" value=\"Update Employee\" />\n    <br />\n    <br />\n  </form>\n</div>\n</div>\n<br />\n<div class=\"alert alert-success\" *ngIf=\"successMessage\" >\n  <strong>Success!</strong> {{ employeeForm.value.FirstName }} {{ employeeForm.value.LastName }}'s information was successfully saved.\n</div>\n<div class=\"alert alert-danger\" *ngIf=\"failMessage\" >\n  <strong>Error!</strong> {{ employeeForm.value.FirstName }} {{ employeeForm.value.LastName }}'s information could not be saved.\n</div>\n</div>\n<br /><br />\n"

/***/ }),

/***/ "./src/app/employee/employee.component.ts":
/*!************************************************!*\
  !*** ./src/app/employee/employee.component.ts ***!
  \************************************************/
/*! exports provided: EmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeComponent", function() { return EmployeeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _data_employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/employee.service */ "./src/app/data/employee.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_position_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/position.service */ "./src/app/data/position.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EmployeeComponent = /** @class */ (function () {
    function EmployeeComponent(es, route, ps, fb) {
        this.es = es;
        this.route = route;
        this.ps = ps;
        this.fb = fb;
        this.successMessage = false;
        this.failMessage = false;
    }
    EmployeeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.paramSubScription = this.route.params.subscribe(function (params) {
            _this.employeeSubscription = _this.es.getEmployee(params['_id']).subscribe(function (data) {
                _this.employee = data[0];
                console.log('employee:', _this.employee);
                _this.getPositionsSubscription = _this.ps.getPositions().subscribe(function (data) {
                    _this.positions = data;
                    console.log('position:', _this.positions);
                });
                _this.employeeForm = _this.fb.group({
                    _id: [_this.employee._id],
                    FirstName: [_this.employee.FirstName, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                    LastName: [_this.employee.LastName, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                    Position: [_this.employee.Position],
                    SalaryBonus: [_this.employee.SalaryBonus, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[0-9]*$')]],
                    AddressStreet: [_this.employee.AddressStreet, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                    AddressCity: [_this.employee.AddressCity, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                    AddressState: [_this.employee.AddressState, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                    AddressZip: [_this.employee.AddressZip, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                    PhoneNum: [_this.employee.PhoneNum, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                    Extension: [_this.employee.Extension, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[0-9]*$')]]
                });
            });
        });
    };
    EmployeeComponent.prototype.onSubmit = function () {
        var _this = this;
        this.saveEmployeeSubscription = this.es.saveEmployee(this.employeeForm.value).subscribe(function () {
            _this.successMessage = true;
            setTimeout(function () {
                _this.successMessage = false;
            }, 2500);
        }, function (err) {
            console.log("Subscription onSubmit failed " + err);
            _this.failMessage = true;
            setTimeout(function () {
                _this.failMessage = false;
            }, 2500);
        });
    };
    Object.defineProperty(EmployeeComponent.prototype, "FirstName", {
        get: function () { return this.employeeForm.get('FirstName'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmployeeComponent.prototype, "LastName", {
        get: function () { return this.employeeForm.get('LastName'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmployeeComponent.prototype, "SalaryBonus", {
        get: function () { return this.employeeForm.get('SalaryBonus'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmployeeComponent.prototype, "AddressStreet", {
        get: function () { return this.employeeForm.get('AddressStreet'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmployeeComponent.prototype, "AddressCity", {
        get: function () { return this.employeeForm.get('AddressCity'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmployeeComponent.prototype, "AddressState", {
        get: function () { return this.employeeForm.get('AddressState'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmployeeComponent.prototype, "AddressZip", {
        get: function () { return this.employeeForm.get('AddressZip'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmployeeComponent.prototype, "PhoneNum", {
        get: function () { return this.employeeForm.get('PhoneNum'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmployeeComponent.prototype, "Extension", {
        get: function () { return this.employeeForm.get('Extension'); },
        enumerable: true,
        configurable: true
    });
    EmployeeComponent.prototype.ngOnDestroy = function () {
        if (this.paramSubScription) {
            this.paramSubScription.unsubscribe();
        }
        if (this.employeeSubscription) {
            this.employeeSubscription.unsubscribe();
        }
        if (this.getPositionsSubscription) {
            this.getPositionsSubscription.unsubscribe();
        }
        if (this.saveEmployeeSubscription) {
            this.saveEmployeeSubscription.unsubscribe();
        }
    };
    EmployeeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-employee',
            template: __webpack_require__(/*! ./employee.component.html */ "./src/app/employee/employee.component.html"),
            styles: [__webpack_require__(/*! ./employee.component.css */ "./src/app/employee/employee.component.css")]
        }),
        __metadata("design:paramtypes", [_data_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _data_position_service__WEBPACK_IMPORTED_MODULE_4__["PositionService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], EmployeeComponent);
    return EmployeeComponent;
}());



/***/ }),

/***/ "./src/app/employees/employees.component.css":
/*!***************************************************!*\
  !*** ./src/app/employees/employees.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center { margin-top:40px; } \r\n.table-responsive{ margin-bottom:60px; }\r\n"

/***/ }),

/***/ "./src/app/employees/employees.component.html":
/*!****************************************************!*\
  !*** ./src/app/employees/employees.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"center\">\n  <h2>Employees</h2>\n  <p class=\"lead\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non odio sed eros tristique bibendum.</p>\n</div>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n        <input class=\"form-control\" id=\"EmployeeSearch\" name=\"EmployeeSearch\" type=\"text\" \n                placeholder=\"Search Employees by Full Name or Position\" (keyup)=\"onEmployeeSearchKeyUP($event)\" />\n        <br />\n      <div class=\"table-responsive\">\n        <table class=\"table table-condensed table-hover\">\n          <thead>\n            <tr>\n              <th>Full Name</th>\n              <th>Address</th>\n              <th>Phone Number</th>\n              <th>Hire Date</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor='let e of filteredEmployees' (click)=\"routeEmployee(e._id)\">\n              <td>{{e.FirstName}} {{e.LastName}}</td>\n              <td>{{e.AddressStreet}}. {{e.AddressState}}, {{e.AddressCity}}. {{e.AddressZip}}</td>\n              <td>{{e.PhoneNum}} ext: {{e.Extension}}</td>\n              <td>{{e.HireDate | date:'longDate'}}</td>\n            </tr>\n          </tbody>\n        </table>\n      </div> \n    </div>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/employees/employees.component.ts":
/*!**************************************************!*\
  !*** ./src/app/employees/employees.component.ts ***!
  \**************************************************/
/*! exports provided: EmployeesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeesComponent", function() { return EmployeesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_employee_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/employee.service */ "./src/app/data/employee.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmployeesComponent = /** @class */ (function () {
    function EmployeesComponent(e, router) {
        this.e = e;
        this.router = router;
        this.loadingError = false;
    }
    EmployeesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getEmployeeSub = this.e.getEmployees().subscribe(function (data) {
            _this.employees = data;
            _this.filteredEmployees = data;
        }, function () {
            _this.loadingError = true;
        });
    };
    EmployeesComponent.prototype.routeEmployee = function (id) {
        this.router.navigate(['/employee', id]);
    };
    EmployeesComponent.prototype.onEmployeeSearchKeyUP = function (event) {
        var value = event.target.value.toLowerCase();
        this.filteredEmployees = this.employees.filter(function (employees) {
            if (employees.FirstName.toLowerCase().includes(value) ||
                employees.LastName.toLowerCase().includes(value) ||
                employees.Position.PositionName.toLowerCase().includes(value) ||
                employees.PhoneNum.toLowerCase().includes(value)) {
                return true;
            }
        });
    };
    EmployeesComponent.prototype.ngOnDestroy = function () {
        if (this.getEmployeeSub) {
            this.getEmployeeSub.unsubscribe();
        }
    };
    EmployeesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-employees',
            template: __webpack_require__(/*! ./employees.component.html */ "./src/app/employees/employees.component.html"),
            styles: [__webpack_require__(/*! ./employees.component.css */ "./src/app/employees/employees.component.css")]
        }),
        __metadata("design:paramtypes", [_data_employee_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], EmployeesComponent);
    return EmployeesComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"color-border\"></div>\n\n<footer id=\"footer\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-sm-6\">Copyright &copy; 2018 Guozhao Liang. Design by <a href=\"http://www.templategarden.com\" rel=\"nofollow\">TemplateGarden</a></div>\n        <div class=\"col-sm-6\">\n          <div class=\"follow-us\"> <a class=\"fa fa-facebook social-icon\" href=\"#\"></a> <a class=\"fa fa-twitter social-icon\" href=\"#\"></a> <a class=\"fa fa-linkedin social-icon\" href=\"#\"></a> <a class=\"fa fa-google-plus social-icon\" href=\"#\"></a> </div>\n        </div>\n      </div>\n    </div>\n  </footer>\n  <!--/#footer--> \n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section {\r\n    padding: 70px 0;\r\n}\r\n.no-margin {\r\n    margin: 0;\r\n    padding: 0;\r\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<section id=\"main-slider\" class=\"no-margin\">\n  <div class=\"carousel slide\">\n    <ol class=\"carousel-indicators\">\n      <li data-target=\"#main-slider\" data-slide-to=\"0\" class=\"active\"></li>\n      <li data-target=\"#main-slider\" data-slide-to=\"1\"></li>\n      <li data-target=\"#main-slider\" data-slide-to=\"2\"></li>\n    </ol>\n    <div class=\"carousel-inner\">\n      <div class=\"item active\" style=\"background-image: url(/assets/images/slider/bg1.jpg)\">\n        <div class=\"container\">\n          <div class=\"row slide-margin\">\n            <div class=\"col-sm-12\">\n              <div class=\"carousel-content\">\n                <h1>Welcome to <span class=\"logo\"><i class=\"fa fa-github-alt\"></i> API Demo</span></h1>\n                <h2>Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt laoreet</h2>\n                <a class=\"btn-slide\" href=\"about-us.html\">Read More</a> </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!--/.item-->\n      \n      <div class=\"item\" style=\"background-image: url(/assets/images/slider/bg2.jpg)\">\n        <div class=\"container\">\n          <div class=\"row slide-margin\">\n            <div class=\"col-sm-12\">\n              <div class=\"carousel-content\">\n                <h1>Typi non habent claritatem insitam</h1>\n                <h2>Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt laoreet</h2>\n                <a class=\"btn-slide\" href=\"about-us.html\">Read More</a> </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!--/.item-->\n      \n      <div class=\"item\" style=\"background-image: url(/assets/images/slider/bg3.jpg)\">\n        <div class=\"container\">\n          <div class=\"row slide-margin\">\n            <div class=\"col-sm-12\">\n              <div class=\"carousel-content\">\n                <h1>Mirum est notare quam littera gothica</h1>\n                <h2>Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt laoreet</h2>\n                <a class=\"btn-slide\" href=\"about-us.html\">Read More</a> </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!--/.item--> \n    </div>\n    <!--/.carousel-inner--> \n  </div>\n  <!--/.carousel--> \n  <a class=\"prev hidden-xs\" href=\"#main-slider\" data-slide=\"prev\"> <i class=\"fa fa-chevron-left\"></i> </a> <a class=\"next hidden-xs\" href=\"#main-slider\" data-slide=\"next\"> <i class=\"fa fa-chevron-right\"></i> </a> </section>\n<!--/#main-slider-->\n<div class=\"color-border\"> </div>\n<section id=\"feature\" >\n  <div class=\"container\">\n    <div class=\"center\">\n      <h2>Featured Services</h2>\n      <p class=\"lead\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non odio sed eros tristique bibendum. Nunc quis semper sem.<br>\n        Morbi libero elit elementum quis faucibus ac, condimentum quis nibh.</p>\n    </div>\n    <div class=\"row\">\n      <div class=\"features\">\n        <div class=\"col-md-6 col-sm-6\">\n          <div class=\"feature-wrap\" > <i class=\"fa fa-desktop\" a routerLink=\"/employees\"></i>\n            <h2 a routerLink=\"/employees\">Employees</h2>\n            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non odio sed eros tristique.</h3>\n          </div>\n        </div>\n        <!--/.col-md-6-->\n        \n        <div class=\"col-md-6 col-sm-6\">\n          <div class=\"feature-wrap\" > <i class=\"fa fa-cogs\" a routerLink=\"/positions\"></i>\n            <h2 a routerLink=\"/positions\">Positions</h2>\n            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non odio sed eros tristique.</h3>\n          </div>\n        </div>\n        <!--/.col-md-6-->  \n      </div>\n      <!--/.services--> \n    </div>\n    <!--/.row--> \n  </div>\n  <!--/.container--> \n</section>\n<!--/#feature-->\n\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/*!***************************************!*\
  !*** ./src/app/nav/nav.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header id=\"header\">\n    <nav class=\"navbar navbar-inverse\" role=\"banner\">\n      <div class=\"container\">\n        <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\"> <span class=\"sr-only\">Toggle navigation</span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> </button>\n          <a class=\"navbar-brand\" routerLink=\"home\"><i class=\"fa fa-github-alt\"></i> Guozhao Liang</a></div>\n        <div class=\"collapse navbar-collapse navbar-right\">\n          <ul class=\"nav navbar-nav\">\n            <li routerLinkActive=\"active\">\n              <a routerLink=\"home\">Home</a>\n            </li>\n            <li routerLinkActive=\"active\">\n              <a routerLink=\"employees\">Employees</a>\n            </li>\n            <li routerLinkActive=\"active\">\n              <a routerLink=\"positions\">Positions</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n      <!--/.container--> \n    </nav>\n    <!--/nav--> \n  </header>\n  <!--/header-->\n\n  <div class=\"color-border\"></div>\n"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12\">\n    ERROR 404: Page Not Found!\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/position/position.component.css":
/*!*************************************************!*\
  !*** ./src/app/position/position.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center { margin-top:40px; }"

/***/ }),

/***/ "./src/app/position/position.component.html":
/*!**************************************************!*\
  !*** ./src/app/position/position.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"center\" *ngIf=\"position\">\n  <h2>Position: {{ position.PositionName }}</h2>\n  <p class=\"lead\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non odio sed eros tristique bibendum.</p>\n</div>\n<div class=\"container\" *ngIf=\"position\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <form [formGroup]=\"positionForm\" (ngSubmit)=\"onSubmit()\" >\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"form-group\">\n              <label for=\"PositionName\">Position Name:</label>\n              <input class=\"form-control\" id=\"PositionName\" formControlName=\"PositionName\" type=\"text\" name=\"PositionName\" />\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"form-group\">\n              <label for=\"PositionDescription\">Description:</label>\n              <textarea class=\"form-control\" id=\"PositionDescription\" formControlName=\"PositionDescription\" rows=\"5\" name=\"PositionDescription\"></textarea>\n            </div>\n          </div>\n        </div>\n        <hr />\n        <a routerLink=\"/positions\" class=\"btn btn-warning pull-left\">Return to Position List</a>\n        <input type=\"submit\" [disabled]=\"!positionForm.valid\" class=\"btn btn-primary pull-right\" value=\"Update Position\" />\n        <br />\n        <br />\n      </form>\n    </div>\n  </div>\n<br />\n<div class=\"alert alert-success\" *ngIf=\"successMessage\" >\n  <strong>Success!</strong> Position: \"Position Name\" was successfully saved.\n</div>\n<div class=\"alert alert-danger\" *ngIf=\"failMessage\" >\n  <strong>Error!</strong> Position: \"Position Name\" could not be saved.\n</div>\n</div>\n<br /><br />"

/***/ }),

/***/ "./src/app/position/position.component.ts":
/*!************************************************!*\
  !*** ./src/app/position/position.component.ts ***!
  \************************************************/
/*! exports provided: PositionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionComponent", function() { return PositionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_position_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/position.service */ "./src/app/data/position.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PositionComponent = /** @class */ (function () {
    function PositionComponent(ps, route, fb) {
        this.ps = ps;
        this.route = route;
        this.fb = fb;
        this.successMessage = false;
        this.failMessage = false;
    }
    PositionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.paramSubScription = this.route.params.subscribe(function (params) {
            _this.positionSubscription = _this.ps.getPosition(params['_id']).subscribe(function (data) {
                _this.position = data[0];
                _this.positionForm = _this.fb.group({
                    PositionName: [_this.position.PositionName, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
                    PositionDescription: [_this.position.PositionDescription]
                });
            });
        });
    };
    PositionComponent.prototype.onSubmit = function () {
        var _this = this;
        this.savePositionSubscription = this.ps.savePosition(this.position).subscribe(function () {
            _this.successMessage = true;
            setTimeout(function () {
                _this.successMessage = false;
            }, 2500);
        }, function (err) {
            console.log("Subscription onSubmit failed " + err);
            _this.failMessage = true;
            setTimeout(function () {
                _this.failMessage = false;
            }, 2500);
        });
    };
    PositionComponent.prototype.ngOnDestroy = function () {
        if (this.paramSubScription) {
            this.paramSubScription.unsubscribe();
        }
        if (this.positionSubscription) {
            this.positionSubscription.unsubscribe();
        }
        if (this.savePositionSubscription) {
            this.savePositionSubscription.unsubscribe();
        }
    };
    PositionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-position',
            template: __webpack_require__(/*! ./position.component.html */ "./src/app/position/position.component.html"),
            styles: [__webpack_require__(/*! ./position.component.css */ "./src/app/position/position.component.css")]
        }),
        __metadata("design:paramtypes", [_data_position_service__WEBPACK_IMPORTED_MODULE_1__["PositionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], PositionComponent);
    return PositionComponent;
}());



/***/ }),

/***/ "./src/app/positions/positions.component.css":
/*!***************************************************!*\
  !*** ./src/app/positions/positions.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center { margin-top:40px; } \r\n.table-responsive{ margin-bottom:60px; }"

/***/ }),

/***/ "./src/app/positions/positions.component.html":
/*!****************************************************!*\
  !*** ./src/app/positions/positions.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"center\">\n  <h2>Positions</h2>\n  <p class=\"lead\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non odio sed eros tristique bibendum.</p>\n</div>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"table-responsive\">\n        <table class=\"table table-condensed table-hover\">\n          <thead>\n            <tr>\n              <th>Position Title</th>\n              <th>Position Description</th>\n              <th>Salary</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor='let p of positions' (click)=\"routePosition(p._id)\">\n              <td>{{p.PositionName}}</td>\n              <td>{{p.PositionDescription}}</td>\n              <td>${{p.PositionBaseSalary | number:'4.2-5'}}</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/positions/positions.component.ts":
/*!**************************************************!*\
  !*** ./src/app/positions/positions.component.ts ***!
  \**************************************************/
/*! exports provided: PositionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionsComponent", function() { return PositionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_position_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/position.service */ "./src/app/data/position.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PositionsComponent = /** @class */ (function () {
    function PositionsComponent(s, router) {
        this.s = s;
        this.router = router;
        this.loadingError = false;
    }
    PositionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getPositionsSub = this.s.getPositions().subscribe(function (data) {
            _this.positions = data;
        }, function () {
            _this.loadingError = true;
        });
    };
    PositionsComponent.prototype.routePosition = function (id) {
        this.router.navigate(['/position', id]);
    };
    PositionsComponent.prototype.ngOnDestroy = function () {
        if (this.getPositionsSub) {
            this.getPositionsSub.unsubscribe();
        }
    };
    PositionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-positions',
            template: __webpack_require__(/*! ./positions.component.html */ "./src/app/positions/positions.component.html"),
            styles: [__webpack_require__(/*! ./positions.component.css */ "./src/app/positions/positions.component.css")]
        }),
        __metadata("design:paramtypes", [_data_position_service__WEBPACK_IMPORTED_MODULE_1__["PositionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], PositionsComponent);
    return PositionsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\chiu-_000\Desktop\projects\practice-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map