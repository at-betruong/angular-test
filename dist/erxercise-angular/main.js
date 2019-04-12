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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/account/account-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/account/account-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AccountRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountRoutingModule", function() { return AccountRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _account_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account.component */ "./src/app/account/account.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/account/profile/profile.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/account/dashboard/dashboard.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _auth_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../auth/can-deactivate.guard */ "./src/app/auth/can-deactivate.guard.ts");
/* harmony import */ var _auth_create_create_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../auth/create/create.component */ "./src/app/auth/create/create.component.ts");









var routes = [
    {
        path: '',
        component: _account_component__WEBPACK_IMPORTED_MODULE_3__["AccountComponent"],
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
        canActivateChild: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
        children: [
            {
                path: 'profile',
                component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"],
                canDeactivate: [_auth_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_7__["CanDeactivateGuard"]],
            },
            {
                path: 'dashboard',
                component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"]
            },
            {
                path: 'register',
                component: _auth_create_create_component__WEBPACK_IMPORTED_MODULE_8__["CreateComponent"]
            }
        ]
    }
];
var AccountRoutingModule = /** @class */ (function () {
    function AccountRoutingModule() {
    }
    AccountRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AccountRoutingModule);
    return AccountRoutingModule;
}());



/***/ }),

/***/ "./src/app/account/account.component.html":
/*!************************************************!*\
  !*** ./src/app/account/account.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"w3-sidebar w3-bar-block\" style=\"width:15%\"> \n  <a routerLink=\"/dashboard\" routerLinkActive=\"active\" class=\"w3-bar-item w3-button\">Dashboard</a>\n  <a routerLink=\"/profile\" routerLinkActive=\"active\" class=\"w3-bar-item w3-button\">Profile</a>\n  <a routerLink=\"/register\" routerLinkActive=\"active\" class=\"w3-bar-item w3-button\">Register</a>\n</div>\n<div style=\"margin-left:10%\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/account/account.component.scss":
/*!************************************************!*\
  !*** ./src/app/account/account.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvYWNjb3VudC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/account/account.component.ts":
/*!**********************************************!*\
  !*** ./src/app/account/account.component.ts ***!
  \**********************************************/
/*! exports provided: AccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountComponent", function() { return AccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AccountComponent = /** @class */ (function () {
    function AccountComponent() {
    }
    AccountComponent.prototype.ngOnInit = function () {
    };
    AccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-account',
            template: __webpack_require__(/*! ./account.component.html */ "./src/app/account/account.component.html"),
            styles: [__webpack_require__(/*! ./account.component.scss */ "./src/app/account/account.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AccountComponent);
    return AccountComponent;
}());



/***/ }),

/***/ "./src/app/account/account.module.ts":
/*!*******************************************!*\
  !*** ./src/app/account/account.module.ts ***!
  \*******************************************/
/*! exports provided: AccountModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountModule", function() { return AccountModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _account_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./account-routing.module */ "./src/app/account/account-routing.module.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/account/profile/profile.component.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/account/dashboard/dashboard.component.ts");



 //






var AccountModule = /** @class */ (function () {
    function AccountModule() {
    }
    AccountModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _account_routing_module__WEBPACK_IMPORTED_MODULE_5__["AccountRoutingModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_7__["CoreModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ]
        })
    ], AccountModule);
    return AccountModule;
}());



/***/ }),

/***/ "./src/app/account/dashboard/dashboard.component.html":
/*!************************************************************!*\
  !*** ./src/app/account/dashboard/dashboard.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container my-5\">\n  <div class=\"card-body text-center\">\n    <h4 class=\"card-title\">Special title treatment</h4>\n    <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\n  </div>\n  <div class=\"card\">\n    <button id=\"add__new__list\" type=\"button\" class=\"btn btn-success position-absolute\" data-toggle=\"modal\"\n      data-target=\".bd-example-modal-lg\"><i class=\"fas fa-plus\"></i> Add a new List</button>\n    <table class=\"table table-hover\">\n      <thead>\n        <tr>\n          <th scope=\"col\">ID</th>\n          <th scope=\"col\">List Name</th>\n          <th scope=\"col\">Deadline</th>\n          <th scope=\"col\">Edit List </th>\n          <th scope=\"col\">list info</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <th scope=\"row\">1</th>\n          <td>Mark</td>\n          <td>Otto</td>\n          <td>\n            <a class=\"btn btn-sm btn-primary\" href=\"#\"><i class=\"far fa-edit\"></i> edit</a>\n            <a class=\"btn btn-sm btn-danger\" href=\"#\"><i class=\"fas fa-trash-alt\"></i> delete</a>\n          </td>\n          <td><a class=\"btn btn-sm btn-info\" href=\"#\"><i class=\"fas fa-info-circle\"></i> Details</a> </td>\n        </tr>\n        <tr>\n          <th scope=\"row\">2</th>\n          <td>Jacob</td>\n          <td>Thornton</td>\n          <td>\n            <a class=\"btn btn-sm btn-primary\" href=\"#\"><i class=\"far fa-edit\"></i> edit</a>\n            <a class=\"btn btn-sm btn-danger\" href=\"#\"><i class=\"fas fa-trash-alt\"></i> delete</a>\n          </td>\n          <td><a class=\"btn btn-sm btn-info\" href=\"#\"><i class=\"fas fa-info-circle\"></i> Details</a> </td>\n        </tr>\n        <tr>\n          <th scope=\"row\">3</th>\n          <td colspan=\"2\">Larry the Bird</td>\n          <td>\n            <a class=\"btn btn-sm btn-primary\" href=\"#\"><i class=\"far fa-edit\"></i> edit</a>\n            <a class=\"btn btn-sm btn-danger\" href=\"#\"><i class=\"fas fa-trash-alt\"></i> delete</a>\n          </td>\n          <td><a class=\"btn btn-sm btn-info\" href=\"#\"><i class=\"fas fa-info-circle\"></i> Details</a> </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <!-- Large modal -->\n\n\n  <div class=\"modal fade bd-example-modal-lg\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\"\n    aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-lg\">\n      <div class=\"modal-content\">\n        <div class=\"card-body text-center\">\n          <h4 class=\"card-title\">Special title treatment</h4>\n          <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\n        </div>\n        <div class=\" card col-8 offset-2 my-2 p-3\">\n          <form>\n            <div class=\"form-group\">\n              <label for=\"listname\">List name</label>\n              <input type=\"text\" class=\"form-control\" name=\"listname\" id=\"listname\" placeholder=\"Enter your listname\">\n            </div>\n            <div class=\"form-group\">\n              <label for=\"datepicker\">Deadline</label>\n              <input type=\"text\" class=\"form-control\" name=\"datepicker\" id=\"datepicker\" placeholder=\"Pick up a date\">\n            </div>\n            <div class=\"form-group\">\n              <label for=\"datepicker\">Add a list item</label>\n              <div class=\"input-group\">\n\n                <input type=\"text\" class=\"form-control\" placeholder=\"Add an item\" aria-label=\"Search for...\">\n                <span class=\"input-group-btn\">\n                  <button class=\"btn btn-secondary\" type=\"button\">Go!</button>\n                </span>\n              </div>\n            </div>\n            <div class=\"form-group text-center\">\n              <button type=\"submit\" class=\"btn btn-block btn-primary\">Sign in</button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/account/dashboard/dashboard.component.scss":
/*!************************************************************!*\
  !*** ./src/app/account/dashboard/dashboard.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg__card__navbar {\n  background-color: #000000; }\n\n.bg__card__footer {\n  background-color: #000000 !important; }\n\n#add__new__list {\n  top: -38px;\n  right: 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYmEwMjk2cC90cmFpbmluZy9mZS10cmFpbmluZy1hbmd1bGFyL2xlYXJuZXItd29ya3NwYWNlL0JlLVRydW9uZy1UL2NvbXBvbmVudC1hbmd1bGFyL3NyYy9hcHAvYWNjb3VudC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0EseUJBQXlCLEVBQUE7O0FBRXpCO0VBQ0Esb0NBQW9DLEVBQUE7O0FBRXBDO0VBQ0EsVUFBVTtFQUNWLFVBQVUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZ19fY2FyZF9fbmF2YmFye1xuYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbn1cbi5iZ19fY2FyZF9fZm9vdGVye1xuYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMCAhaW1wb3J0YW50O1xufVxuI2FkZF9fbmV3X19saXN0e1xudG9wOiAtMzhweDtcbnJpZ2h0OiAwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/account/dashboard/dashboard.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/account/dashboard/dashboard.component.ts ***!
  \**********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/account/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/account/dashboard/dashboard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/account/profile/profile.component.html":
/*!********************************************************!*\
  !*** ./src/app/account/profile/profile.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container emp-profile\">\n  <form method=\"post\">\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        <div class=\"profile-img\">\n          <img\n            src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog\"\n            alt=\"\" />\n          <div class=\"file btn btn-lg btn-primary\">\n            Change Photo\n            <input type=\"file\" name=\"file\" />\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"profile-head\">\n          <h5>\n            {{firstName}}\n          </h5>\n          <ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link active\" id=\"home-tab\" data-toggle=\"tab\" href=\"#home\" role=\"tab\" aria-controls=\"home\"\n                aria-selected=\"true\">About</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"col-md-2\">\n        <input type=\"submit\" class=\"profile-edit-btn\" name=\"btnAddMore\" value=\"Edit Profile\" />\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n      </div>\n      <div class=\"col-md-8\">\n        <div class=\"tab-content profile-tab\" id=\"myTabContent\">\n          <div class=\"tab-pane fade show active\" id=\"home\" role=\"tabpanel\" aria-labelledby=\"home-tab\">\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <label>User Id</label>\n              </div>\n              <div class=\"col-md-6\">\n                <p>Kshiti123</p>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <label>Name</label>\n              </div>\n              <div class=\"col-md-6\">\n                <p>{{firstName}} {{lastName}}</p>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <label>Email</label>\n              </div>\n              <div class=\"col-md-6\">\n                <p>{{email}}</p>\n              </div>\n            </div>\n          </div>\n          <div class=\"tab-pane fade\" id=\"profile\" role=\"tabpanel\" aria-labelledby=\"profile-tab\">\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <label>Experience</label>\n              </div>\n              <div class=\"col-md-6\">\n                <p>Expert</p>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <label>Hourly Rate</label>\n              </div>\n              <div class=\"col-md-6\">\n                <p>10$/hr</p>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <label>Total Projects</label>\n              </div>\n              <div class=\"col-md-6\">\n                <p>230</p>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <label>English Level</label>\n              </div>\n              <div class=\"col-md-6\">\n                <p>Expert</p>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <label>Availability</label>\n              </div>\n              <div class=\"col-md-6\">\n                <p>6 months</p>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <label>Your Bio</label><br />\n                <p>Your detail description</p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/account/profile/profile.component.scss":
/*!********************************************************!*\
  !*** ./src/app/account/profile/profile.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".emp-profile {\n  padding: 3%;\n  margin-top: 3%;\n  margin-bottom: 3%;\n  border-radius: 0.5rem;\n  background: #fff; }\n\n.profile-img {\n  text-align: center; }\n\n.profile-img img {\n  width: 70%;\n  height: 100%; }\n\n.profile-img .file {\n  position: relative;\n  overflow: hidden;\n  margin-top: -20%;\n  width: 70%;\n  border: none;\n  border-radius: 0;\n  font-size: 15px;\n  background: #212529b8; }\n\n.profile-img .file input {\n  position: absolute;\n  opacity: 0;\n  right: 0;\n  top: 0; }\n\n.profile-head h5 {\n  color: #333; }\n\n.profile-head h6 {\n  color: #0062cc; }\n\n.profile-edit-btn {\n  border: none;\n  border-radius: 1.5rem;\n  width: 70%;\n  padding: 2%;\n  font-weight: 600;\n  color: #6c757d;\n  cursor: pointer; }\n\n.proile-rating {\n  font-size: 12px;\n  color: #818182;\n  margin-top: 5%; }\n\n.proile-rating span {\n  color: #495057;\n  font-size: 15px;\n  font-weight: 600; }\n\n.profile-head .nav-tabs {\n  margin-bottom: 5%; }\n\n.profile-head .nav-tabs .nav-link {\n  font-weight: 600;\n  border: none; }\n\n.profile-head .nav-tabs .nav-link.active {\n  border: none;\n  border-bottom: 2px solid #0062cc; }\n\n.profile-work {\n  padding: 14%;\n  margin-top: -15%; }\n\n.profile-work p {\n  font-size: 12px;\n  color: #818182;\n  font-weight: 600;\n  margin-top: 10%; }\n\n.profile-work a {\n  text-decoration: none;\n  color: #495057;\n  font-weight: 600;\n  font-size: 14px; }\n\n.profile-work ul {\n  list-style: none; }\n\n.profile-tab label {\n  font-weight: 600; }\n\n.profile-tab p {\n  font-weight: 600;\n  color: #0062cc; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYmEwMjk2cC90cmFpbmluZy9mZS10cmFpbmluZy1hbmd1bGFyL2xlYXJuZXItd29ya3NwYWNlL0JlLVRydW9uZy1UL2NvbXBvbmVudC1hbmd1bGFyL3NyYy9hcHAvYWNjb3VudC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsZ0JBQWdCLEVBQUE7O0FBRWxCO0VBQ0Usa0JBQWtCLEVBQUE7O0FBRXBCO0VBQ0UsVUFBVTtFQUNWLFlBQVksRUFBQTs7QUFFZDtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixxQkFBcUIsRUFBQTs7QUFFdkI7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFFBQVE7RUFDUixNQUFNLEVBQUE7O0FBRVI7RUFDRSxXQUFXLEVBQUE7O0FBRWI7RUFDRSxjQUFjLEVBQUE7O0FBRWhCO0VBQ0UsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsZUFBZSxFQUFBOztBQUVqQjtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsY0FBYyxFQUFBOztBQUVoQjtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7O0FBRWxCO0VBQ0UsaUJBQWdCLEVBQUE7O0FBRWxCO0VBQ0UsZ0JBQWU7RUFDZixZQUFZLEVBQUE7O0FBRWQ7RUFDRSxZQUFZO0VBQ1osZ0NBQStCLEVBQUE7O0FBRWpDO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGVBQWUsRUFBQTs7QUFFakI7RUFDRSxxQkFBcUI7RUFDckIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixlQUFlLEVBQUE7O0FBRWpCO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBRWxCO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBRWxCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVtcC1wcm9maWxle1xuICBwYWRkaW5nOiAzJTtcbiAgbWFyZ2luLXRvcDogMyU7XG4gIG1hcmdpbi1ib3R0b206IDMlO1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG4ucHJvZmlsZS1pbWd7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5wcm9maWxlLWltZyBpbWd7XG4gIHdpZHRoOiA3MCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5wcm9maWxlLWltZyAuZmlsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luLXRvcDogLTIwJTtcbiAgd2lkdGg6IDcwJTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGJhY2tncm91bmQ6ICMyMTI1MjliODtcbn1cbi5wcm9maWxlLWltZyAuZmlsZSBpbnB1dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3BhY2l0eTogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbn1cbi5wcm9maWxlLWhlYWQgaDV7XG4gIGNvbG9yOiAjMzMzO1xufVxuLnByb2ZpbGUtaGVhZCBoNntcbiAgY29sb3I6ICMwMDYyY2M7XG59XG4ucHJvZmlsZS1lZGl0LWJ0bntcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAxLjVyZW07XG4gIHdpZHRoOiA3MCU7XG4gIHBhZGRpbmc6IDIlO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzZjNzU3ZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnByb2lsZS1yYXRpbmd7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM4MTgxODI7XG4gIG1hcmdpbi10b3A6IDUlO1xufVxuLnByb2lsZS1yYXRpbmcgc3BhbntcbiAgY29sb3I6ICM0OTUwNTc7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5wcm9maWxlLWhlYWQgLm5hdi10YWJze1xuICBtYXJnaW4tYm90dG9tOjUlO1xufVxuLnByb2ZpbGUtaGVhZCAubmF2LXRhYnMgLm5hdi1saW5re1xuICBmb250LXdlaWdodDo2MDA7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5wcm9maWxlLWhlYWQgLm5hdi10YWJzIC5uYXYtbGluay5hY3RpdmV7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbToycHggc29saWQgIzAwNjJjYztcbn1cbi5wcm9maWxlLXdvcmt7XG4gIHBhZGRpbmc6IDE0JTtcbiAgbWFyZ2luLXRvcDogLTE1JTtcbn1cbi5wcm9maWxlLXdvcmsgcHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzgxODE4MjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLXRvcDogMTAlO1xufVxuLnByb2ZpbGUtd29yayBhe1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjNDk1MDU3O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4ucHJvZmlsZS13b3JrIHVse1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuLnByb2ZpbGUtdGFiIGxhYmVse1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLnByb2ZpbGUtdGFiIHB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMDA2MmNjO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/account/profile/profile.component.ts":
/*!******************************************************!*\
  !*** ./src/app/account/profile/profile.component.ts ***!
  \******************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_core_sevices_deactivate_dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/sevices/deactivate-dialog.service */ "./src/app/core/sevices/deactivate-dialog.service.ts");




var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(route, dialogService) {
        this.route = route;
        this.dialogService = dialogService;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (data) {
            _this.firstName = data.get('firstName');
            _this.lastName = data.get('lastName');
            _this.email = data.get('email');
        });
    };
    ProfileComponent.prototype.canDeactivate = function () {
        return this.dialogService.confirm('Do you want to leave?');
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/account/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/account/profile/profile.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_core_sevices_deactivate_dialog_service__WEBPACK_IMPORTED_MODULE_3__["DeactivateDialogService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _features_features_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./features/features.component */ "./src/app/features/features.component.ts");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var _account_account_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./account/account.component */ "./src/app/account/account.component.ts");






var routers = [
    {
        path: '',
        component: _features_features_component__WEBPACK_IMPORTED_MODULE_3__["FeaturesComponent"]
    },
    {
        path: 'auth',
        component: _auth_auth_component__WEBPACK_IMPORTED_MODULE_4__["AuthComponent"],
    },
    {
        path: 'account',
        component: _account_account_component__WEBPACK_IMPORTED_MODULE_5__["AccountComponent"],
    }
    // ,
    // {
    //   path: '**',
    //   component: NotFoundComponent,
    // }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routers)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <app-header></app-header>\n  <div class=\"banner\">\n    <h1 class=\"container\">LifeCycle Hooks</h1>\n  </div>\n</header>\n\n<main class=\"page-content container\">\n\n  <!-- exercise7: angular attribute direction -->\n  <ng-template>\n    <h4>Attribute Directive</h4>\n    <h5>Pick a hover color</h5>\n    <div>\n      <input type=\"radio\" name=\"colors\" (click)=\"color='lightgreen'\">Green\n      <input type=\"radio\" name=\"colors\" (click)=\"color='yellow'\">Yellow\n      <input type=\"radio\" name=\"colors\" (click)=\"color='cyan'\">Cyan\n      <input type=\"radio\" name=\"colors\" (click)=\"color='green'\">Green\n      <input type=\"radio\" name=\"colors\" (click)=\"color='pink'\">Pink\n      <input type=\"radio\" name=\"colors\" (click)=\"color='purple'\">Purple\n    </div>\n    <button [appHoverItem]=\"color\" >konichiwa</button>\n    <button [appHoverItem]=\"color\" defaultColor=\"violet\" >sayyounara</button>\n  </ng-template>\n\n  <router-outlet></router-outlet>\n\n</main>\n\n<footer class=\"page-footer\">Footer</footer>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.banner {\n  background-image: url(\"https://js.devexpress.com/Content/ImagesNew/Overview/angular-banner.png\");\n  height: 180px;\n  width: 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover; }\n\nh1 {\n  color: white;\n  padding-top: 55px; }\n\n.container {\n  width: 1240px;\n  margin: 0 auto; }\n\n.page-content {\n  margin-top: 5%;\n  margin-bottom: 10%; }\n\n.page-footer {\n  position: fixed;\n  background-color: #f1f3f5;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 50px;\n  text-align: center;\n  line-height: 3; }\n\nbutton {\n  margin: 50px;\n  border: 1px solid gray;\n  border-radius: 15px; }\n\n.card-news > div > img {\n  width: 348px;\n  height: 200px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYmEwMjk2cC90cmFpbmluZy9mZS10cmFpbmluZy1hbmd1bGFyL2xlYXJuZXItd29ya3NwYWNlL0JlLVRydW9uZy1UL2NvbXBvbmVudC1hbmd1bGFyL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0dBQWdHO0VBQ2hHLGFBQWE7RUFDYixXQUFXO0VBQ1gsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1QixzQkFBc0IsRUFBQTs7QUFHeEI7RUFDRSxZQUFZO0VBQ1osaUJBQWlCLEVBQUE7O0FBRW5CO0VBQ0UsYUFBYTtFQUNiLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCLEVBQUE7O0FBRXBCO0VBQ0UsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixPQUFPO0VBQ1AsU0FBUztFQUNULFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGNBQWMsRUFBQTs7QUFFaEI7RUFDRSxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLG1CQUFtQixFQUFBOztBQUVyQjtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1QixzQkFBc0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdi5iYW5uZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL2pzLmRldmV4cHJlc3MuY29tL0NvbnRlbnQvSW1hZ2VzTmV3L092ZXJ2aWV3L2FuZ3VsYXItYmFubmVyLnBuZ1wiKTtcbiAgaGVpZ2h0OiAxODBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuaDEge1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmctdG9wOiA1NXB4O1xufVxuLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMjQwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4ucGFnZS1jb250ZW50IHtcbiAgbWFyZ2luLXRvcDogNSU7XG4gIG1hcmdpbi1ib3R0b206IDEwJTtcbn1cbi5wYWdlLWZvb3RlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjNmNTtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAzO1xufVxuYnV0dG9uIHtcbiAgbWFyZ2luOiA1MHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuLmNhcmQtbmV3cz5kaXY+aW1nIHtcbiAgd2lkdGg6IDM0OHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4iXX0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(api, router) {
        this.api = api;
        this.router = router;
        // descCart: any;
        this.title = 'erxercise-angular';
    }
    AppComponent.prototype.ngOnInit = function () {
        /**
         *  exercise 9: service advance
         * this.subscribe = this.api.get(END_POINT.listNews).subscribe();
         * this.news$ = this.api.getAssets(END_POINT.newsJson);
         */
        /**
         * Use Router events: load start header of page
         */
        this.router.events.subscribe(function (e) {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationStart"]) {
                window.scroll(0, 100);
            }
        });
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.subscribe.unsubscribe();
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_component_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/component/header/header.component */ "./src/app/shared/component/header/header.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_directive_hover_item_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/directive/hover-item.directive */ "./src/app/shared/directive/hover-item.directive.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _features_features_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./features/features.component */ "./src/app/features/features.component.ts");
/* harmony import */ var _features_features_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./features/features.module */ "./src/app/features/features.module.ts");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth/auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./auth/auth.module */ "./src/app/auth/auth.module.ts");
/* harmony import */ var _account_account_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./account/account.component */ "./src/app/account/account.component.ts");
/* harmony import */ var _account_account_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./account/account.module */ "./src/app/account/account.module.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _shared_component_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                _shared_directive_hover_item_directive__WEBPACK_IMPORTED_MODULE_7__["HoverItemDirective"],
                _features_features_component__WEBPACK_IMPORTED_MODULE_9__["FeaturesComponent"],
                _auth_auth_component__WEBPACK_IMPORTED_MODULE_11__["AuthComponent"],
                _account_account_component__WEBPACK_IMPORTED_MODULE_13__["AccountComponent"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_15__["NotFoundComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _features_features_module__WEBPACK_IMPORTED_MODULE_10__["FeaturesModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _auth_auth_module__WEBPACK_IMPORTED_MODULE_12__["AuthModule"],
                _account_account_module__WEBPACK_IMPORTED_MODULE_14__["AccountModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create/create.component */ "./src/app/auth/create/create.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var routes = [
    {
        path: '',
        component: _auth_component__WEBPACK_IMPORTED_MODULE_3__["AuthComponent"],
        children: [
            {
                path: 'login',
                component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
            },
            {
                path: 'register',
                component: _create_create_component__WEBPACK_IMPORTED_MODULE_4__["CreateComponent"]
            }
        ]
    }
];
var AuthRoutingModule = /** @class */ (function () {
    function AuthRoutingModule() {
    }
    AuthRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]]
        })
    ], AuthRoutingModule);
    return AuthRoutingModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.component.html":
/*!******************************************!*\
  !*** ./src/app/auth/auth.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/auth/auth.component.scss":
/*!******************************************!*\
  !*** ./src/app/auth/auth.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvYXV0aC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/auth/auth.component.ts":
/*!****************************************!*\
  !*** ./src/app/auth/auth.component.ts ***!
  \****************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AuthComponent = /** @class */ (function () {
    function AuthComponent() {
    }
    AuthComponent.prototype.ngOnInit = function () {
    };
    AuthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-auth',
            template: __webpack_require__(/*! ./auth.component.html */ "./src/app/auth/auth.component.html"),
            styles: [__webpack_require__(/*! ./auth.component.scss */ "./src/app/auth/auth.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        return this.verifyLogin(state.url);
    };
    AuthGuard.prototype.canActivateChild = function (next, state) {
        return this.canActivate(next, state);
    };
    AuthGuard.prototype.verifyLogin = function (url) {
        if (!this.isLoggedIn()) {
            this.router.navigate(['/login']);
            return false;
        }
        else if (this.isLoggedIn()) {
            return true;
        }
    };
    AuthGuard.prototype.isLoggedIn = function () {
        var status = false;
        if (localStorage.getItem('isLoggedIn') === 'true') {
            status = true;
        }
        else {
            status = false;
        }
        return status;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create/create.component */ "./src/app/auth/create/create.component.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/auth/auth-routing.module.ts");










var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
                _create_create_component__WEBPACK_IMPORTED_MODULE_4__["CreateComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _auth_routing_module__WEBPACK_IMPORTED_MODULE_8__["AuthRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
            ]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/auth/can-deactivate.guard.ts":
/*!**********************************************!*\
  !*** ./src/app/auth/can-deactivate.guard.ts ***!
  \**********************************************/
/*! exports provided: CanDeactivateGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanDeactivateGuard", function() { return CanDeactivateGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CanDeactivateGuard = /** @class */ (function () {
    function CanDeactivateGuard() {
    }
    CanDeactivateGuard.prototype.canDeactivate = function (component, route, state) {
        return component.canDeactivate ? component.canDeactivate() : true;
    };
    CanDeactivateGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        })
    ], CanDeactivateGuard);
    return CanDeactivateGuard;
}());



/***/ }),

/***/ "./src/app/auth/create/create.component.html":
/*!***************************************************!*\
  !*** ./src/app/auth/create/create.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"check\">\n    Please enter your mail again! Current email exists!\n  </div>\n  <form\n    class=\"form-horizontal\"\n    role=\"form\"\n    [formGroup]=\"formReactive\"\n    (ngSubmit)=\"onSubmit()\"\n  >\n    <div class=\"row\">\n      <div class=\"col-md-3\"></div>\n      <div class=\"col-md-6\">\n        <h2>Register New User</h2>\n        <hr />\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-3 field-label-responsive\">\n        <label for=\"name\">First Name</label>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n            <div class=\"input-group-addon\" style=\"width: 2.6rem\">\n              <i class=\"fa fa-user\"></i>\n            </div>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              formControlName=\"firstName\"\n            />\n          </div>\n        </div>\n      </div>\n      <div\n        class=\"col-md-3\"\n        *ngIf=\"\n          formReactive.controls.firstName.invalid &&\n          (formReactive.controls.firstName.dirty ||\n            formReactive.controls.firstName.touched)\n        \"\n      >\n        <div class=\"form-control-feedback\">\n          <span\n            class=\"text-danger align-middle\"\n            *ngIf=\"formReactive.get('firstName').errors.required\"\n          >\n            This field is required\n          </span>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-3 field-label-responsive\">\n        <label for=\"name\">Last Name</label>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n            <div class=\"input-group-addon\" style=\"width: 2.6rem\">\n              <i class=\"fa fa-user\"></i>\n            </div>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              formControlName=\"lastName\"\n            />\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-3\">\n        <div\n          class=\"form-control-feedback\"\n          *ngIf=\"\n            formReactive.controls.lastName.invalid &&\n            (formReactive.controls.lastName.dirty ||\n              formReactive.controls.lastName.touched)\n          \"\n        >\n          <span\n            class=\"text-danger align-middle\"\n            *ngIf=\"formReactive.get('lastName').errors.required\"\n          >\n            This field is required\n          </span>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-3 field-label-responsive\">\n        <label for=\"email\">E-Mail Address</label>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n            <div class=\"input-group-addon\" style=\"width: 2.6rem\">\n              <i class=\"fa fa-at\"></i>\n            </div>\n            <input type=\"text\" class=\"form-control\" formControlName=\"email\" />\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-3\">\n        <div\n          class=\"form-control-feedback\"\n          *ngIf=\"\n            formReactive.controls.email.invalid &&\n            (formReactive.controls.email.dirty ||\n              formReactive.controls.email.touched)\n          \"\n        >\n          <span\n            class=\"text-danger align-middle\"\n            *ngIf=\"formReactive.get('email').errors.required\"\n          >\n            This field is required\n          </span>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-3 field-label-responsive\">\n        <label for=\"password\">Password</label>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"form-group has-danger\">\n          <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n            <div class=\"input-group-addon\" style=\"width: 2.6rem\">\n              <i class=\"fa fa-key\"></i>\n            </div>\n            <input\n              type=\"password\"\n              class=\"form-control\"\n              formControlName=\"password\"\n            />\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-3\">\n        <div\n          class=\"form-control-feedback\"\n          *ngIf=\"\n            formReactive.controls.password.invalid &&\n            (formReactive.controls.password.dirty ||\n              formReactive.controls.password.touched)\n          \"\n        >\n          <span\n            class=\"text-danger align-middle\"\n            *ngIf=\"formReactive.get('password').errors.required\"\n          >\n            This field is required\n          </span>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-3 field-label-responsive\">\n        <label for=\"password\">Confirm Password</label>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n            <div class=\"input-group-addon\" style=\"width: 2.6rem\">\n              <i class=\"fa fa-repeat\"></i>\n            </div>\n            <input\n              type=\"password\"\n              name=\"password-confirmation\"\n              class=\"form-control\"\n              formControlName=\"confirmPassword\"\n            />\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-3\">\n        <div\n          class=\"form-control-feedback\"\n          *ngIf=\"\n            formReactive.controls.confirmPassword.invalid &&\n            (formReactive.controls.confirmPassword.dirty ||\n              formReactive.controls.confirmPassword.touched)\n          \"\n        >\n          <span\n            class=\"text-danger align-middle\"\n            *ngIf=\"formReactive.get('confirmPassword').errors.required\"\n          >\n            This field is required\n          </span>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <button\n          type=\"submit\"\n          class=\"btn btn-success\"\n          [disabled]=\"\n            formReactive.invalid ||\n            formReactive.controls.password.value !=\n              formReactive.controls.confirmPassword.value\n          \"\n        >\n          <i class=\"fa fa-user-plus\"></i> Register\n        </button>\n      </div>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/auth/create/create.component.scss":
/*!***************************************************!*\
  !*** ./src/app/auth/create/create.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form {\n  padding-bottom: 100px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYmEwMjk2cC90cmFpbmluZy9mZS10cmFpbmluZy1hbmd1bGFyL2xlYXJuZXItd29ya3NwYWNlL0JlLVRydW9uZy1UL2NvbXBvbmVudC1hbmd1bGFyL3NyYy9hcHAvYXV0aC9jcmVhdGUvY3JlYXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQXFCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hdXRoL2NyZWF0ZS9jcmVhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb3JtIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/auth/create/create.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/create/create.component.ts ***!
  \*************************************************/
/*! exports provided: CreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateComponent", function() { return CreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_services_localer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../core/services/localer.service */ "./src/app/core/services/localer.service.ts");




var CreateComponent = /** @class */ (function () {
    function CreateComponent(fb, localer) {
        this.fb = fb;
        this.localer = localer;
        this.arr = [];
    }
    CreateComponent.prototype.ngOnInit = function () {
        this.formReactive = this.fb.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        // this.formReactive.valueChanges.subscribe(
        //   data => console.log(data)
        // );
    };
    CreateComponent.prototype.onSubmit = function () {
        var param = this.formReactive.value;
        this.saveLocal('Account', this.formReactive.value);
    };
    CreateComponent.prototype.saveLocal = function (key, value) {
        if (key && value) {
            var valStorage = this.localer.getLocalStorage(key);
            if (valStorage) {
                this.check = this.arr.map(function (element) { return element.email; }).includes(value.email);
                if (!this.check) {
                    this.arr.push(value);
                    this.localer.removeLocalStorage(key);
                    this.localer.saveLocalStorage(key, this.arr);
                }
            }
            else {
                this.localer.saveLocalStorage(key, value);
                this.arr.push(value);
            }
        }
    };
    CreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create',
            template: __webpack_require__(/*! ./create.component.html */ "./src/app/auth/create/create.component.html"),
            styles: [__webpack_require__(/*! ./create.component.scss */ "./src/app/auth/create/create.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _core_services_localer_service__WEBPACK_IMPORTED_MODULE_3__["LocalerService"]])
    ], CreateComponent);
    return CreateComponent;
}());



/***/ }),

/***/ "./src/app/auth/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"alert alert-danger mess\" role=\"alert\" *ngIf=\"checkSuccess === false\">\n    Account doesn't exist. Enter a different account.\n  </div>\n  <div class=\"alert alert-success mess\" role=\"alert\" *ngIf=\"checkSuccess === true\">\n    Login successfully!\n  </div>\n\n  <div class=\"d-flex justify-content-center form-login\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <h3>Sign In</h3>\n        <div class=\"d-flex justify-content-end social_icon\">\n          <span><i class=\"fa fa-facebook-square\"></i></span>\n          <span><i class=\"fa fa-google-plus-square\"></i></span>\n        </div>\n      </div>\n\n      <div class=\"card-body\">\n        <form #login=\"ngForm\" (ngSubmit)=\"onSubmit(login)\">\n          <div class=\"input-group form-group\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\"><i class=\"fa fa-at\"></i></span>\n            </div>\n            <input #validEmail=\"ngModel\" type=\"text\" class=\"form-control\" placeholder=\"email\" ngModel name=\"email\" required>\n            <!-- {{validEmail?.invalid}} -->\n            <!-- {{login?.value?.email}} -->\n          </div>\n          <ng-container *ngIf=\"validEmail.invalid && (validEmail.dirty || validEmail.touched)\">\n            <p class=\"text-danger form-group\" *ngIf=\"validEmail.errors.required\">This field is required</p>\n          </ng-container>\n          <div class=\"input-group form-group\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\"><i class=\"fa fa-key\"></i></span>\n            </div>\n            <input #validPassword=\"ngModel\" type=\"password\" class=\"form-control\" placeholder=\"password\" ngModel name=\"password\" required>\n          </div>\n          <ng-container *ngIf=\"validPassword.invalid && (validPassword.dirty || validPassword.touched)\">\n            <p class=\"text-danger form-group\" *ngIf=\"validPassword.errors.required\">This field is required</p>\n          </ng-container>\n          <div class=\"d-flex justify-content-center remember\">\n            <input class=\"m-1\" type=\"checkbox\">Remember Me\n          </div>\n          <div class=\"form-group d-flex justify-content-center\">\n            <button class=\"btn btn-primary m-3\" type=\"submit\" [disabled]=\"login.invalid\">Login</button>\n          </div>\n        </form>\n      </div>\n\n      <div class=\"card-footer\">\n        <div class=\"d-flex justify-content-center links\">\n          Don't have an account?<a href=\"#\">Sign Up</a>\n        </div>\n        <div class=\"d-flex justify-content-center\">\n          <a href=\"#\">Forgot your password?</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/auth/login/login.component.scss":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mess {\n  width: 40%;\n  margin: 0 auto; }\n\n.form-login > div {\n  width: 40%;\n  margin-top: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYmEwMjk2cC90cmFpbmluZy9mZS10cmFpbmluZy1hbmd1bGFyL2xlYXJuZXItd29ya3NwYWNlL0JlLVRydW9uZy1UL2NvbXBvbmVudC1hbmd1bGFyL3NyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7RUFDVixjQUFjLEVBQUE7O0FBRWhCO0VBQ0UsVUFBVTtFQUNWLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVzcyB7XG4gIHdpZHRoOiA0MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLmZvcm0tbG9naW4+ZGl2IHtcbiAgd2lkdGg6IDQwJTtcbiAgbWFyZ2luLXRvcDogNXB4OyBcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_localer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../core/services/localer.service */ "./src/app/core/services/localer.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(localer, router) {
        this.localer = localer;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function (f) {
        console.log(f.value);
        this.checkAccount('Account', f.value);
    };
    LoginComponent.prototype.checkAccount = function (key, account) {
        if (key) {
            this.obj = JSON.parse(this.localer.getLocalStorage(key));
            this.checkMail = this.obj.find(function (element) { return element.email === account.email; });
            this.checkSuccess = this.checkMail.password.includes(account.password);
            if (this.checkSuccess && typeof this.checkMail === 'object') {
                localStorage.setItem('isLoggedIn', 'true');
                this.router.navigate(['/profile', this.checkMail]);
            }
        }
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/auth/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_localer_service__WEBPACK_IMPORTED_MODULE_2__["LocalerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/services/api.service.ts":
/*!**********************************************!*\
  !*** ./src/app/core/services/api.service.ts ***!
  \**********************************************/
/*! exports provided: ApiService, END_POINT, API_DOMAIN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "END_POINT", function() { return END_POINT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_DOMAIN", function() { return API_DOMAIN; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var ApiService = /** @class */ (function () {
    function ApiService(httpClient) {
        this.httpClient = httpClient;
    }
    ApiService.prototype.get = function (url, params) {
        return this.httpClient.get(API_DOMAIN + url, {
            // tslint:disable-next-line:object-literal-shorthand
            params: params
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    };
    ApiService.prototype.post = function (url, params) {
        return this.httpClient.post(API_DOMAIN + url, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    };
    ApiService.prototype.put = function (url, params) {
        return this.httpClient.put(API_DOMAIN + url, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    };
    ApiService.prototype.patch = function (url, params) {
        return this.httpClient.patch(API_DOMAIN + url, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    };
    ApiService.prototype.getAssets = function (url) {
        return this.httpClient.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    };
    ApiService.prototype.getConfigResponse = function (url) {
        return this.httpClient.get(API_DOMAIN + url, { observe: 'response' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    };
    ApiService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            console.error('An error occurred:', error.error.message);
        }
        else {
            console.error('Backend returned code ${error.status}, ' +
                'body was: ${error.error}');
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])('Something bad happened; please try again later.');
    };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());

var END_POINT = {
    listNews: 'news',
    newsJson: 'assets/news.json',
    users: 'profile'
};
var API_DOMAIN = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api;


/***/ }),

/***/ "./src/app/core/services/auth.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AuthService = /** @class */ (function () {
    function AuthService() {
    }
    AuthService.prototype.logout = function () {
        localStorage.setItem('isLoggedIn', 'false');
        // localStorage.removeItem('');
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/core/services/localer.service.ts":
/*!**************************************************!*\
  !*** ./src/app/core/services/localer.service.ts ***!
  \**************************************************/
/*! exports provided: LocalerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalerService", function() { return LocalerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LocalerService = /** @class */ (function () {
    function LocalerService() {
    }
    LocalerService.prototype.saveLocalStorage = function (key, value) {
        if (typeof value === 'object') {
            return localStorage.setItem(key, JSON.stringify(value));
        }
        return localStorage.setItem(key, value);
    };
    LocalerService.prototype.getLocalStorage = function (key) {
        if (typeof localStorage.getItem(key) === 'string') {
            return localStorage.getItem(key);
        }
    };
    LocalerService.prototype.removeLocalStorage = function (key) {
        return localStorage.removeItem(key);
    };
    LocalerService.prototype.saveSessionStorage = function (key, value) {
        if (typeof value === 'object') {
            return sessionStorage.setItem(key, JSON.stringify(value));
        }
        return sessionStorage.setItem(key, value);
    };
    LocalerService.prototype.getSessionStorage = function (key) {
        console.log(sessionStorage.getItem(key));
    };
    LocalerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LocalerService);
    return LocalerService;
}());



/***/ }),

/***/ "./src/app/core/sevices/deactivate-dialog.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/core/sevices/deactivate-dialog.service.ts ***!
  \***********************************************************/
/*! exports provided: DeactivateDialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeactivateDialogService", function() { return DeactivateDialogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var DeactivateDialogService = /** @class */ (function () {
    function DeactivateDialogService() {
    }
    DeactivateDialogService.prototype.confirm = function (message) {
        var confirmation = window.confirm(message || 'Is it OK?');
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (ob) {
            ob.next(confirmation);
        });
    };
    DeactivateDialogService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DeactivateDialogService);
    return DeactivateDialogService;
}());



/***/ }),

/***/ "./src/app/features/btn-localer/btn-localer.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/features/btn-localer/btn-localer.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group\">\n  <label for=\"keyInput\">Key</label>\n  <input type=\"text\" class=\"form-control\" placeholder=\"Enter your key!\" [(ngModel)]=\"keyInput\">\n  <label for=\"valueInput\">Value</label>\n  <input type=\"text\" class=\"form-control\" placeholder=\"Enter your value!\" [(ngModel)]=\"valueInput\">\n</div>\n<div class=\"btn-localer\">\n  <button type=\"button\" class=\"btn btn-primary\" (click)=\"saveLocal()\">Save LocalStorage</button>\n  <button type=\"button\" class=\"btn btn-primary\" (click)=\"getLocal()\">Get LocalStorage</button>\n  <button type=\"button\" class=\"btn btn-primary\" (click)=\"saveSession()\">Save SessionStorage</button>\n  <button type=\"button\" class=\"btn btn-primary\" (click)=\"getSession()\">Get SessionStorage</button>\n</div>"

/***/ }),

/***/ "./src/app/features/btn-localer/btn-localer.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/features/btn-localer/btn-localer.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-localer {\n  text-align: center; }\n\n.btn-localer > button {\n  margin: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYmEwMjk2cC90cmFpbmluZy9mZS10cmFpbmluZy1hbmd1bGFyL2xlYXJuZXItd29ya3NwYWNlL0JlLVRydW9uZy1UL2NvbXBvbmVudC1hbmd1bGFyL3NyYy9hcHAvZmVhdHVyZXMvYnRuLWxvY2FsZXIvYnRuLWxvY2FsZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0IsRUFBQTs7QUFFcEI7RUFDRSxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlcy9idG4tbG9jYWxlci9idG4tbG9jYWxlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4tbG9jYWxlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5idG4tbG9jYWxlcj5idXR0b24ge1xuICBtYXJnaW46IDE1cHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/features/btn-localer/btn-localer.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/features/btn-localer/btn-localer.component.ts ***!
  \***************************************************************/
/*! exports provided: BtnLocalerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BtnLocalerComponent", function() { return BtnLocalerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_core_services_localer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../app/core/services/localer.service */ "./src/app/core/services/localer.service.ts");



var BtnLocalerComponent = /** @class */ (function () {
    function BtnLocalerComponent(localerService) {
        this.localerService = localerService;
        this.keyInput = 'hello';
        this.valueInput = 'konnichiwa';
    }
    BtnLocalerComponent.prototype.ngOnInit = function () {
    };
    BtnLocalerComponent.prototype.saveLocal = function () {
        if (this.keyInput && this.valueInput) {
            this.localerService.saveLocalStorage(this.keyInput, this.valueInput);
        }
    };
    BtnLocalerComponent.prototype.getLocal = function () {
        if (this.keyInput && this.valueInput) {
            this.localerService.getLocalStorage(this.keyInput);
        }
    };
    BtnLocalerComponent.prototype.saveSession = function () {
        if (this.keyInput && this.valueInput) {
            this.localerService.saveSessionStorage(this.keyInput, this.valueInput);
        }
    };
    BtnLocalerComponent.prototype.getSession = function () {
        if (this.keyInput && this.valueInput) {
            this.localerService.getSessionStorage(this.keyInput);
        }
    };
    BtnLocalerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-btn-localer',
            template: __webpack_require__(/*! ./btn-localer.component.html */ "./src/app/features/btn-localer/btn-localer.component.html"),
            styles: [__webpack_require__(/*! ./btn-localer.component.scss */ "./src/app/features/btn-localer/btn-localer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_core_services_localer_service__WEBPACK_IMPORTED_MODULE_2__["LocalerService"]])
    ], BtnLocalerComponent);
    return BtnLocalerComponent;
}());



/***/ }),

/***/ "./src/app/features/features-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/features/features-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: FeaturesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturesRoutingModule", function() { return FeaturesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _features_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./features.component */ "./src/app/features/features.component.ts");
/* harmony import */ var _news_news_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./news/news.component */ "./src/app/features/news/news.component.ts");
/* harmony import */ var _btn_localer_btn_localer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./btn-localer/btn-localer.component */ "./src/app/features/btn-localer/btn-localer.component.ts");
/* harmony import */ var _lifecycle_hooks_lifecycle_hooks_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lifecycle-hooks/lifecycle-hooks.component */ "./src/app/features/lifecycle-hooks/lifecycle-hooks.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/features/home/home.component.ts");








var routes = [
    {
        path: '',
        component: _features_component__WEBPACK_IMPORTED_MODULE_3__["FeaturesComponent"],
        children: [
            {
                path: 'news',
                component: _news_news_component__WEBPACK_IMPORTED_MODULE_4__["NewsComponent"]
            },
            {
                path: 'btn-localer',
                component: _btn_localer_btn_localer_component__WEBPACK_IMPORTED_MODULE_5__["BtnLocalerComponent"]
            },
            {
                path: 'lifecycle-hooks',
                component: _lifecycle_hooks_lifecycle_hooks_component__WEBPACK_IMPORTED_MODULE_6__["LifecycleHooksComponent"]
            },
            {
                path: '',
                component: _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"]
            }
        ]
    }
];
var FeaturesRoutingModule = /** @class */ (function () {
    function FeaturesRoutingModule() {
    }
    FeaturesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], FeaturesRoutingModule);
    return FeaturesRoutingModule;
}());



/***/ }),

/***/ "./src/app/features/features.component.html":
/*!**************************************************!*\
  !*** ./src/app/features/features.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/features/features.component.scss":
/*!**************************************************!*\
  !*** ./src/app/features/features.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2ZlYXR1cmVzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/features/features.component.ts":
/*!************************************************!*\
  !*** ./src/app/features/features.component.ts ***!
  \************************************************/
/*! exports provided: FeaturesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturesComponent", function() { return FeaturesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FeaturesComponent = /** @class */ (function () {
    function FeaturesComponent() {
    }
    FeaturesComponent.prototype.ngOnInit = function () {
    };
    FeaturesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-features',
            template: __webpack_require__(/*! ./features.component.html */ "./src/app/features/features.component.html"),
            styles: [__webpack_require__(/*! ./features.component.scss */ "./src/app/features/features.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FeaturesComponent);
    return FeaturesComponent;
}());



/***/ }),

/***/ "./src/app/features/features.module.ts":
/*!*********************************************!*\
  !*** ./src/app/features/features.module.ts ***!
  \*********************************************/
/*! exports provided: FeaturesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturesModule", function() { return FeaturesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _features_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./features-routing.module */ "./src/app/features/features-routing.module.ts");
/* harmony import */ var _news_news_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./news/news.component */ "./src/app/features/news/news.component.ts");
/* harmony import */ var _shared_pipe_word_limit_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../shared/pipe/word-limit.pipe */ "./src/app/shared/pipe/word-limit.pipe.ts");
/* harmony import */ var _btn_localer_btn_localer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./btn-localer/btn-localer.component */ "./src/app/features/btn-localer/btn-localer.component.ts");
/* harmony import */ var _lifecycle_hooks_lifecycle_hooks_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lifecycle-hooks/lifecycle-hooks.component */ "./src/app/features/lifecycle-hooks/lifecycle-hooks.component.ts");
/* harmony import */ var _lifecycle_hooks_app_lifecycle_title_app_lifecycle_title_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lifecycle-hooks/app-lifecycle-title/app-lifecycle-title.component */ "./src/app/features/lifecycle-hooks/app-lifecycle-title/app-lifecycle-title.component.ts");
/* harmony import */ var _lifecycle_hooks_app_lifecycle_content_app_lifecycle_content_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lifecycle-hooks/app-lifecycle-content/app-lifecycle-content.component */ "./src/app/features/lifecycle-hooks/app-lifecycle-content/app-lifecycle-content.component.ts");
/* harmony import */ var _lifecycle_hooks_app_modal_app_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./lifecycle-hooks/app-modal/app-modal.component */ "./src/app/features/lifecycle-hooks/app-modal/app-modal.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/home.component */ "./src/app/features/home/home.component.ts");













var FeaturesModule = /** @class */ (function () {
    function FeaturesModule() {
    }
    FeaturesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _news_news_component__WEBPACK_IMPORTED_MODULE_5__["NewsComponent"],
                _shared_pipe_word_limit_pipe__WEBPACK_IMPORTED_MODULE_6__["WordLimitPipe"],
                _btn_localer_btn_localer_component__WEBPACK_IMPORTED_MODULE_7__["BtnLocalerComponent"],
                _lifecycle_hooks_lifecycle_hooks_component__WEBPACK_IMPORTED_MODULE_8__["LifecycleHooksComponent"],
                _lifecycle_hooks_app_lifecycle_title_app_lifecycle_title_component__WEBPACK_IMPORTED_MODULE_9__["AppLifecycleTitleComponent"],
                _lifecycle_hooks_app_lifecycle_content_app_lifecycle_content_component__WEBPACK_IMPORTED_MODULE_10__["AppLifecycleContentComponent"],
                _lifecycle_hooks_app_modal_app_modal_component__WEBPACK_IMPORTED_MODULE_11__["AppModalComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _features_routing_module__WEBPACK_IMPORTED_MODULE_4__["FeaturesRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ]
        })
    ], FeaturesModule);
    return FeaturesModule;
}());



/***/ }),

/***/ "./src/app/features/home/home.component.html":
/*!***************************************************!*\
  !*** ./src/app/features/home/home.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Heading Row -->\n<div class=\"row align-items-center my-5\">\n  <div class=\"col-lg-7\">\n    <img\n      class=\"img-fluid rounded mb-4 mb-lg-0\"\n      src=\"http://jeviensbientot.com/wp-content/uploads/2015/02/poisson-chat-900x400.jpg\"\n      alt=\"\"\n    />\n  </div>\n  <!-- /.col-lg-8 -->\n  <div class=\"col-lg-5\">\n    <h1 class=\"font-weight-light\">Business Name or Tagline</h1>\n    <p>\n      This is a template that is great for small businesses. It doesn't have too\n      much fancy flare to it, but it makes a great use of the standard Bootstrap\n      core components. Feel free to use this template for any project you want!\n    </p>\n    <a class=\"btn btn-primary\" href=\"#\">Call to Action!</a>\n  </div>\n  <!-- /.col-md-4 -->\n</div>\n<!-- /.row -->\n\n<!-- Call to Action Well -->\n<div class=\"card text-white bg-secondary my-5 py-4 text-center\">\n  <div class=\"card-body\" style=\"background-color: #169c9c;\">\n    <p class=\"text-white m-0\">\n      This call to action card is a great place to showcase some important\n      information or display a clever tagline!\n    </p>\n  </div>\n</div>\n\n<!-- Content Row -->\n<div class=\"row\">\n  <div class=\"col-md-4 mb-5\">\n    <div class=\"card h-100\">\n      <div class=\"card-body\">\n        <h2 class=\"card-title\">Card One</h2>\n        <p class=\"card-text\">\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem magni\n          quas ex numquam, maxime minus quam molestias corporis quod, ea minima\n          accusamus.\n        </p>\n      </div>\n      <div class=\"card-footer\">\n        <a href=\"#\" class=\"btn btn-primary btn-sm\">More Info</a>\n      </div>\n    </div>\n  </div>\n  <!-- /.col-md-4 -->\n  <div class=\"col-md-4 mb-5\">\n    <div class=\"card h-100\">\n      <div class=\"card-body\">\n        <h2 class=\"card-title\">Card Two</h2>\n        <p class=\"card-text\">\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod tenetur\n          ex natus at dolorem enim! Nesciunt pariatur voluptatem sunt quam\n          eaque, vel, non in id dolore voluptates quos eligendi labore.\n        </p>\n      </div>\n      <div class=\"card-footer\">\n        <a href=\"#\" class=\"btn btn-primary btn-sm\">More Info</a>\n      </div>\n    </div>\n  </div>\n  <!-- /.col-md-4 -->\n  <div class=\"col-md-4 mb-5\">\n    <div class=\"card h-100\">\n      <div class=\"card-body\">\n        <h2 class=\"card-title\">Card Three</h2>\n        <p class=\"card-text\">\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem magni\n          quas ex numquam, maxime minus quam molestias corporis quod, ea minima\n          accusamus.\n        </p>\n      </div>\n      <div class=\"card-footer\">\n        <a href=\"#\" class=\"btn btn-primary btn-sm\">More Info</a>\n      </div>\n    </div>\n  </div>\n  <!-- /.col-md-4 -->\n</div>\n<!-- /.row -->"

/***/ }),

/***/ "./src/app/features/home/home.component.scss":
/*!***************************************************!*\
  !*** ./src/app/features/home/home.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/features/home/home.component.ts":
/*!*************************************************!*\
  !*** ./src/app/features/home/home.component.ts ***!
  \*************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/features/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/features/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/features/lifecycle-hooks/app-lifecycle-content/app-lifecycle-content.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/features/lifecycle-hooks/app-lifecycle-content/app-lifecycle-content.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"elementCard.id==elementClick\" class=\"collapse show\" aria-labelledby=\"headingOne\" data-parent=\"#accordionExample\">\n  <div class=\"card-body\">\n    {{elementCard.desc}}\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/features/lifecycle-hooks/app-lifecycle-content/app-lifecycle-content.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/features/lifecycle-hooks/app-lifecycle-content/app-lifecycle-content.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2xpZmVjeWNsZS1ob29rcy9hcHAtbGlmZWN5Y2xlLWNvbnRlbnQvYXBwLWxpZmVjeWNsZS1jb250ZW50LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/features/lifecycle-hooks/app-lifecycle-content/app-lifecycle-content.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/features/lifecycle-hooks/app-lifecycle-content/app-lifecycle-content.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: AppLifecycleContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppLifecycleContentComponent", function() { return AppLifecycleContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppLifecycleContentComponent = /** @class */ (function () {
    function AppLifecycleContentComponent() {
    }
    AppLifecycleContentComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AppLifecycleContentComponent.prototype, "elementClick", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AppLifecycleContentComponent.prototype, "elementCard", void 0);
    AppLifecycleContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-lifecycle-content',
            template: __webpack_require__(/*! ./app-lifecycle-content.component.html */ "./src/app/features/lifecycle-hooks/app-lifecycle-content/app-lifecycle-content.component.html"),
            styles: [__webpack_require__(/*! ./app-lifecycle-content.component.scss */ "./src/app/features/lifecycle-hooks/app-lifecycle-content/app-lifecycle-content.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppLifecycleContentComponent);
    return AppLifecycleContentComponent;
}());



/***/ }),

/***/ "./src/app/features/lifecycle-hooks/app-lifecycle-title/app-lifecycle-title.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/features/lifecycle-hooks/app-lifecycle-title/app-lifecycle-title.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- card title -->\n<div class=\"btn-group btn-group-justified row-card\" role=\"group\">\n  <div class=\"btn-group\" role=\"group\">\n    <button [id]=\"elementCard.id\" type=\"button\" class=\"btn btn-default rounded-circle\" (click)=\"detailCard($event)\">+</button>\n  </div>\n  <div class=\"btn-group\" role=\"group\">\n    <h2 class=\"mb-0\">\n      <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseOne\" aria-expanded=\"false\" aria-controls=\"collapseTwo\">\n        {{elementCard.name}}\n      </button>\n    </h2>\n  </div>\n  <div class=\"btn-group remove-card\" role=\"group\">\n    <button type=\"button\" class=\"close\" data-toggle=\"modal\"  [attr.data-target]=\"'#hook-model-'+elementCard.id\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/features/lifecycle-hooks/app-lifecycle-title/app-lifecycle-title.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/features/lifecycle-hooks/app-lifecycle-title/app-lifecycle-title.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row-card {\n  border: 1px solid rgba(0, 0, 0, 0.075); }\n\n.remove-card {\n  border-left: 1px solid rgba(0, 0, 0, 0.075);\n  width: 50px;\n  height: auto; }\n\n.remove-card > button {\n  width: 100%;\n  height: 100%; }\n\nbutton.rounded-circle {\n  color: white;\n  background: #bb1414;\n  width: 30px;\n  height: 30px;\n  margin: 10px 5px 10px 25px;\n  padding: initial; }\n\n.btn-group > h2 > button {\n  width: 1000px;\n  text-align: left; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYmEwMjk2cC90cmFpbmluZy9mZS10cmFpbmluZy1hbmd1bGFyL2xlYXJuZXItd29ya3NwYWNlL0JlLVRydW9uZy1UL2NvbXBvbmVudC1hbmd1bGFyL3NyYy9hcHAvZmVhdHVyZXMvbGlmZWN5Y2xlLWhvb2tzL2FwcC1saWZlY3ljbGUtdGl0bGUvYXBwLWxpZmVjeWNsZS10aXRsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLHNDQUFrQyxFQUFBOztBQUVuQztFQUNDLDJDQUF1QztFQUN2QyxXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUViO0VBQ0MsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFFYjtFQUNDLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFlBQVk7RUFDWiwwQkFBMEI7RUFDMUIsZ0JBQWdCLEVBQUE7O0FBRWpCO0VBQ0MsYUFBYTtFQUNiLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZXMvbGlmZWN5Y2xlLWhvb2tzL2FwcC1saWZlY3ljbGUtdGl0bGUvYXBwLWxpZmVjeWNsZS10aXRsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3ctY2FyZCB7XG5cdGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsLjA3NSk7XG59XG4ucmVtb3ZlLWNhcmQge1xuXHRib3JkZXItbGVmdDogMXB4IHNvbGlkIHJnYmEoMCwwLDAsLjA3NSk7XG5cdHdpZHRoOiA1MHB4O1xuXHRoZWlnaHQ6IGF1dG87XG59XG4ucmVtb3ZlLWNhcmQ+YnV0dG9uIHtcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogMTAwJTtcbn1cbmJ1dHRvbi5yb3VuZGVkLWNpcmNsZSB7XG5cdGNvbG9yOiB3aGl0ZTtcblx0YmFja2dyb3VuZDogI2JiMTQxNDtcblx0d2lkdGg6IDMwcHg7XG5cdGhlaWdodDogMzBweDtcblx0bWFyZ2luOiAxMHB4IDVweCAxMHB4IDI1cHg7IFxuXHRwYWRkaW5nOiBpbml0aWFsO1xufVxuLmJ0bi1ncm91cD5oMj5idXR0b24ge1xuXHR3aWR0aDogMTAwMHB4O1xuXHR0ZXh0LWFsaWduOiBsZWZ0O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/features/lifecycle-hooks/app-lifecycle-title/app-lifecycle-title.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/features/lifecycle-hooks/app-lifecycle-title/app-lifecycle-title.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: AppLifecycleTitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppLifecycleTitleComponent", function() { return AppLifecycleTitleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppLifecycleTitleComponent = /** @class */ (function () {
    function AppLifecycleTitleComponent() {
        this.cardCurrent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    AppLifecycleTitleComponent.prototype.ngOnInit = function () {
    };
    AppLifecycleTitleComponent.prototype.detailCard = function ($event) {
        this.cardCurrent.emit($event.target.id);
        console.log('ID clicking :' + $event.target.id);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AppLifecycleTitleComponent.prototype, "elementCard", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AppLifecycleTitleComponent.prototype, "cardCurrent", void 0);
    AppLifecycleTitleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-lifecycle-title',
            template: __webpack_require__(/*! ./app-lifecycle-title.component.html */ "./src/app/features/lifecycle-hooks/app-lifecycle-title/app-lifecycle-title.component.html"),
            styles: [__webpack_require__(/*! ./app-lifecycle-title.component.scss */ "./src/app/features/lifecycle-hooks/app-lifecycle-title/app-lifecycle-title.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppLifecycleTitleComponent);
    return AppLifecycleTitleComponent;
}());



/***/ }),

/***/ "./src/app/features/lifecycle-hooks/app-modal/app-modal.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/features/lifecycle-hooks/app-modal/app-modal.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\" tabindex=\"-1\" role=\"dialog\" [id]=\"'hook-model-'+elementClick.id\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\">Modal title</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <h5>Are you sure want to delete?</h5>\n        <h6><b>{{elementClick.name}}</b></h6>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"methodRemoveHook(elementClick.id)\">OK</button>\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" aria-label=\"Close\">CANCLE</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/features/lifecycle-hooks/app-modal/app-modal.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/features/lifecycle-hooks/app-modal/app-modal.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2xpZmVjeWNsZS1ob29rcy9hcHAtbW9kYWwvYXBwLW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/features/lifecycle-hooks/app-modal/app-modal.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/features/lifecycle-hooks/app-modal/app-modal.component.ts ***!
  \***************************************************************************/
/*! exports provided: AppModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModalComponent", function() { return AppModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppModalComponent = /** @class */ (function () {
    function AppModalComponent() {
        this.removeHook = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    AppModalComponent.prototype.ngOnInit = function () {
    };
    AppModalComponent.prototype.methodRemoveHook = function (id) {
        this.removeHook.emit(id);
        console.log('Remove ID: ' + id);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], AppModalComponent.prototype, "elementClick", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AppModalComponent.prototype, "removeHook", void 0);
    AppModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-modal',
            template: __webpack_require__(/*! ./app-modal.component.html */ "./src/app/features/lifecycle-hooks/app-modal/app-modal.component.html"),
            styles: [__webpack_require__(/*! ./app-modal.component.scss */ "./src/app/features/lifecycle-hooks/app-modal/app-modal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppModalComponent);
    return AppModalComponent;
}());



/***/ }),

/***/ "./src/app/features/lifecycle-hooks/lifecycle-hooks.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/features/lifecycle-hooks/lifecycle-hooks.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"accordion\" *ngFor=\" let itemLifeCycleHooks of listLifeCycleHooks; let i=index\">\n  <app-lifecycle-title (cardCurrent)=\"getCardClicking($event)\"  [elementCard]=\"itemLifeCycleHooks\"></app-lifecycle-title>\n  <app-lifecycle-content [elementCard]=\"itemLifeCycleHooks\" [elementClick]=\"descCart\" >\n  </app-lifecycle-content>\n  <app-modal [elementClick]=\"itemLifeCycleHooks\" (removeHook)=\"removeHook($event)\"></app-modal>\n</div>"

/***/ }),

/***/ "./src/app/features/lifecycle-hooks/lifecycle-hooks.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/features/lifecycle-hooks/lifecycle-hooks.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2xpZmVjeWNsZS1ob29rcy9saWZlY3ljbGUtaG9va3MuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/features/lifecycle-hooks/lifecycle-hooks.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/features/lifecycle-hooks/lifecycle-hooks.component.ts ***!
  \***********************************************************************/
/*! exports provided: LifecycleHooksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LifecycleHooksComponent", function() { return LifecycleHooksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LifecycleHooksComponent = /** @class */ (function () {
    function LifecycleHooksComponent() {
        this.listLifeCycleHooks = [
            {
                id: 0,
                name: 'ngOnChanges()',
                desc: 'Called before ngOnInit() and whenever one or more data-bound input properties change.'
            },
            {
                id: 1,
                name: 'ngOnInit()',
                desc: 'Called once, after the first ngOnChanges().'
            },
            {
                id: 2,
                name: 'ngDoCheck()',
                desc: 'Called during every change detection run, immediately after ngOnChanges() and ngOnInit().'
            },
            {
                id: 3,
                name: 'ngAfterContentInit()',
                desc: 'Called once after the first ngDoCheck().'
            },
            {
                id: 4,
                name: 'ngAfterContentChecked()',
                desc: 'Called after the ngAfterContentInit() and every subsequent ngDoCheck().'
            },
            {
                id: 5,
                name: 'ngAfterViewInit()',
                desc: 'Called once after the first ngAfterContentChecked().'
            },
            {
                id: 6,
                name: 'ngAfterViewChecked()',
                desc: 'Called after the ngAfterViewInit() and every subsequent ngAfterContentChecked().'
            },
            {
                id: 7,
                name: 'ngOnDestroy()',
                desc: 'Called just before Angular destroys the directive/component.'
            }
        ];
    }
    LifecycleHooksComponent.prototype.ngOnInit = function () {
        console.log(this.listLifeCycleHooks);
    };
    LifecycleHooksComponent.prototype.getCardClicking = function ($event) {
        this.descCart = $event;
        console.log('Get Card Clicking in parent: ' + $event);
    };
    LifecycleHooksComponent.prototype.removeHook = function ($event) {
        this.listLifeCycleHooks = this.listLifeCycleHooks.filter(function (element) {
            return element.id !== $event;
        });
    };
    LifecycleHooksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-lifecycle-hooks',
            template: __webpack_require__(/*! ./lifecycle-hooks.component.html */ "./src/app/features/lifecycle-hooks/lifecycle-hooks.component.html"),
            styles: [__webpack_require__(/*! ./lifecycle-hooks.component.scss */ "./src/app/features/lifecycle-hooks/lifecycle-hooks.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LifecycleHooksComponent);
    return LifecycleHooksComponent;
}());



/***/ }),

/***/ "./src/app/features/news/news.component.html":
/*!***************************************************!*\
  !*** ./src/app/features/news/news.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>News card</h2>\n<div class=\"card-deck card-news\">\n  <div class=\"card\" *ngFor=\"let itemCard of news$ | async\">\n    <img src=\"{{itemCard.img}}\" class=\"card-img-top\" alt=\"...\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\" >{{itemCard.title | wordLimit:15}}</h5>\n      <p class=\"card-text\">{{itemCard.desc | wordLimit:70}}</p>\n    </div>\n    <div class=\"card-footer\">\n      <small class=\"text-muted\">Last updated 3 mins ago</small>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/features/news/news.component.scss":
/*!***************************************************!*\
  !*** ./src/app/features/news/news.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-news > div > img {\n  width: 348px;\n  height: 200px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYmEwMjk2cC90cmFpbmluZy9mZS10cmFpbmluZy1hbmd1bGFyL2xlYXJuZXItd29ya3NwYWNlL0JlLVRydW9uZy1UL2NvbXBvbmVudC1hbmd1bGFyL3NyYy9hcHAvZmVhdHVyZXMvbmV3cy9uZXdzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLHNCQUFzQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZXMvbmV3cy9uZXdzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtbmV3cz5kaXY+aW1nIHtcbiAgd2lkdGg6IDM0OHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/features/news/news.component.ts":
/*!*************************************************!*\
  !*** ./src/app/features/news/news.component.ts ***!
  \*************************************************/
/*! exports provided: NewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsComponent", function() { return NewsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../core/services/api.service */ "./src/app/core/services/api.service.ts");



var NewsComponent = /** @class */ (function () {
    function NewsComponent(api) {
        this.api = api;
    }
    NewsComponent.prototype.ngOnInit = function () {
        this.subscribe = this.api.get(_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["END_POINT"].listNews).subscribe();
        this.news$ = this.api.getAssets(_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["END_POINT"].newsJson);
    };
    NewsComponent.prototype.ngOnDestroy = function () {
        this.subscribe.unsubscribe();
    };
    NewsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-news',
            template: __webpack_require__(/*! ./news.component.html */ "./src/app/features/news/news.component.html"),
            styles: [__webpack_require__(/*! ./news.component.scss */ "./src/app/features/news/news.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], NewsComponent);
    return NewsComponent;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  not-found works!\n</p>\n"

/***/ }),

/***/ "./src/app/not-found/not-found.component.scss":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.scss */ "./src/app/not-found/not-found.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/shared/component/header/header.component.html":
/*!***************************************************************!*\
  !*** ./src/app/shared/component/header/header.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\n  <div class=\"container\">\n    <div class=\"navbar-brand\" href=\"#\">\n      <img id=\"nav-logo\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n      <span>ngular</span>\n    </div>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"\" routerLinkActive=\"active\">Home <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/news\" routerLinkActive=\"active\">News</a>\n          </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/btn-localer\" routerLinkActive=\"active\">Localer</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/lifecycle-hooks\" routerLinkActive=\"active\">Lifecycle Hooks</a>\n        </li>\n      </ul>\n    </div>\n    <div class=\"nav-item nav-left float-right\">\n      <a class=\"nav-link\" routerLink=\"/login\" routerLinkActive=\"active\">Login</a>\n    </div>\n    <div class=\"nav-item nav-left float-right\">\n      <a class=\"nav-link\" (click)=\"logout()\">Logout</a>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/shared/component/header/header.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/shared/component/header/header.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  text-transform: uppercase; }\n\nnav {\n  text-transform: uppercase; }\n\n.nav-tabs > li > a {\n  color: black; }\n\na:hover {\n  border-bottom: 2px solid white; }\n\n#nav-logo {\n  width: 30px;\n  vertical-align: bottom; }\n\n.float-right {\n  float: right; }\n\n.float-right > a {\n  color: #f1f3f5; }\n\n.container {\n  width: 1240px;\n  margin: 0 auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYmEwMjk2cC90cmFpbmluZy9mZS10cmFpbmluZy1hbmd1bGFyL2xlYXJuZXItd29ya3NwYWNlL0JlLVRydW9uZy1UL2NvbXBvbmVudC1hbmd1bGFyL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQXlCLEVBQUE7O0FBRTNCO0VBQ0UseUJBQXlCLEVBQUE7O0FBRTNCO0VBQ0UsWUFBWSxFQUFBOztBQUVkO0VBQ0UsOEJBQThCLEVBQUE7O0FBRWhDO0VBQ0UsV0FBVztFQUNYLHNCQUFzQixFQUFBOztBQUV4QjtFQUNFLFlBQVksRUFBQTs7QUFFZDtFQUNFLGNBQWMsRUFBQTs7QUFFaEI7RUFDRSxhQUFhO0VBQ2IsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIH1cbiAgbmF2IHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG4gIC5uYXYtdGFicz5saT5hIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gIH1cbiAgYTpob3ZlciB7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlO1xuICB9XG4gICNuYXYtbG9nbyB7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgfVxuICAuZmxvYXQtcmlnaHR7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICB9XG4gIC5mbG9hdC1yaWdodD5hIHtcbiAgICBjb2xvcjogI2YxZjNmNTtcbiAgfVxuICAuY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTI0MHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/shared/component/header/header.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/component/header/header.component.ts ***!
  \*************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.logout = function () {
        this.authService.logout();
        this.router.navigate(['/login']);
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/shared/component/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/shared/component/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/directive/hover-item.directive.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/directive/hover-item.directive.ts ***!
  \**********************************************************/
/*! exports provided: HoverItemDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoverItemDirective", function() { return HoverItemDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HoverItemDirective = /** @class */ (function () {
    function HoverItemDirective(el) {
        this.el = el;
        this.el.nativeElement.style.color = 'black';
    }
    HoverItemDirective.prototype.onMouseEnter = function () {
        this.changeColor(this.varChangeColor || this.defaultColor || 'red');
    };
    HoverItemDirective.prototype.onMouseLeave = function () {
        this.changeColor(null);
    };
    HoverItemDirective.prototype.changeColor = function (color) {
        this.el.nativeElement.style.color = color;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], HoverItemDirective.prototype, "defaultColor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('appHoverItem'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], HoverItemDirective.prototype, "varChangeColor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseenter'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], HoverItemDirective.prototype, "onMouseEnter", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseleave'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], HoverItemDirective.prototype, "onMouseLeave", null);
    HoverItemDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appHoverItem]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], HoverItemDirective);
    return HoverItemDirective;
}());



/***/ }),

/***/ "./src/app/shared/pipe/word-limit.pipe.ts":
/*!************************************************!*\
  !*** ./src/app/shared/pipe/word-limit.pipe.ts ***!
  \************************************************/
/*! exports provided: WordLimitPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordLimitPipe", function() { return WordLimitPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WordLimitPipe = /** @class */ (function () {
    function WordLimitPipe() {
    }
    WordLimitPipe.prototype.transform = function (value, length) {
        var rest = '...';
        var truncatedText = '';
        if (value.length <= length) {
            return value;
        }
        else {
            truncatedText = value.slice(0, length - 3);
        }
        return truncatedText + rest;
    };
    WordLimitPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'wordLimit'
        })
    ], WordLimitPipe);
    return WordLimitPipe;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    api: 'https://reqres.in/api/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mba0296p/training/fe-training-angular/learner-workspace/Be-Truong-T/component-angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map