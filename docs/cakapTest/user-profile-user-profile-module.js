(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-profile-user-profile-module"],{

/***/ "/de2":
/*!********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.ts ***!
  \********************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared.service */ "r2F1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





class UserProfileComponent {
    constructor(sharedService, router) {
        this.sharedService = sharedService;
        this.router = router;
        this.userData = {
            login: '',
            id: '',
            avatar_url: '',
            bio: '',
            blog: '',
            company: '',
            email: '',
            followers: 0,
            following: 0,
            hireable: false,
            location: '',
            name: '',
            public_repos: 0,
            repos_url: '',
            twitter_username: ''
        };
        this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    ngOnInit() {
        this.sharedService.userData$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.ngUnsubscribe)).subscribe((res) => {
            if (res.id) {
                this.userData = res;
            }
            else {
                this.router.navigateByUrl('/find-users');
            }
        });
    }
    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
}
UserProfileComponent.ɵfac = function UserProfileComponent_Factory(t) { return new (t || UserProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
UserProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: UserProfileComponent, selectors: [["app-user-profile"]], decls: 37, vars: 12, consts: [[1, "container"], [1, "title"], [1, "content"], [1, "left-content"], ["width", "260", "height", "260", 1, "avatar-content", 3, "src"], [1, "navigation-content"], ["mat-button-raised", "", "color", "primary", "data-cy", "user-repository-btn", "routerLink", "/user-repositories"], ["mat-button-raised", "", "color", "primary", "data-cy", "back-btn", "routerLink", "/find-users"], [1, "right-content"], [1, "head-content"], [1, "text-box"]], template: function UserProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Github Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "My Repository");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ctx.userData.avatar_url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("public repos: ", ctx.userData.public_repos, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("following: ", ctx.userData.following, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("followers: ", ctx.userData.followers, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("username: ", ctx.userData.login, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("name: ", ctx.userData.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.userData.bio);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("location: ", ctx.userData.location, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("email: ", ctx.userData.email, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("twitter: ", ctx.userData.twitter_username, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("company: ", ctx.userData.company, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("hireable : ", ctx.userData.hireable ? "Yes" : "No", "");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]], styles: [".container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n}\n.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 30%;\n}\n.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .avatar-content[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  border: 1px solid #000;\n  margin-bottom: 10px;\n  align-self: center;\n}\n.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .navigation-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   .navigation-content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  align-self: center;\n  min-width: 100px;\n}\n.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 70%;\n  padding: 20px;\n}\n.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   .head-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  font-size: 16px;\n  font-weight: 900;\n}\n.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   .head-content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  margin-right: 20px;\n}\n.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: columns;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]   .text-box[_ngcontent-%COMP%] {\n  padding: 5px;\n  border: 1px solid #000;\n  box-sizing: border-box;\n}\n.container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-weight: 900;\n  font-size: 16px;\n  display: flex;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHVzZXItcHJvZmlsZS5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBQ0o7QUFBSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFFUjtBQURRO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtBQUdaO0FBRlk7RUFDSSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUloQjtBQUhZO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0FBS2hCO0FBSmdCO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFNcEI7QUFMUTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0FBT1o7QUFOWTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQVFoQjtBQVBnQjtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBU3BCO0FBUlk7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBVWhCO0FBVFk7RUFDSSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtBQVdoQjtBQVZJO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBWVIiLCJmaWxlIjoidXNlci1wcm9maWxlLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lclxyXG4gICAgd2lkdGg6IDEwMCVcclxuICAgIGhlaWdodDogMTAwJVxyXG4gICAgZGlzcGxheTogZmxleFxyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtblxyXG4gICAgLmNvbnRlbnRcclxuICAgICAgICBkaXNwbGF5OiBmbGV4XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvd1xyXG4gICAgICAgIHdpZHRoOiAxMDAlXHJcbiAgICAgICAgLmxlZnQtY29udGVudFxyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cclxuICAgICAgICAgICAgd2lkdGg6IDMwJVxyXG4gICAgICAgICAgICAuYXZhdGFyLWNvbnRlbnRcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJVxyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAwMFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweFxyXG4gICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyXHJcbiAgICAgICAgICAgIC5uYXZpZ2F0aW9uLWNvbnRlbnRcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXhcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cclxuICAgICAgICAgICAgICAgIGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXhcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHhcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXJcclxuICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDEwMHB4XHJcbiAgICAgICAgLnJpZ2h0LWNvbnRlbnRcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleFxyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uXHJcbiAgICAgICAgICAgIHdpZHRoOiA3MCVcclxuICAgICAgICAgICAgcGFkZGluZzoyMHB4XHJcbiAgICAgICAgICAgIC5oZWFkLWNvbnRlbnRcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXhcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3dcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweFxyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMFxyXG4gICAgICAgICAgICAgICAgZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleFxyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3dcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHhcclxuICAgICAgICAgICAgZGl2XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uc1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweFxyXG4gICAgICAgICAgICAudGV4dC1ib3hcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAwMFxyXG4gICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveFxyXG4gICAgLnRpdGxlXHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDkwMFxyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweFxyXG4gICAgICAgIGRpc3BsYXk6IGZsZXhcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlclxyXG4iXX0= */"] });


/***/ }),

/***/ "AG1G":
/*!*************************************************************!*\
  !*** ./src/app/user-profile/user-profile-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: UserProfileRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileRoutingModule", function() { return UserProfileRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _user_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-profile.component */ "/de2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _user_profile_component__WEBPACK_IMPORTED_MODULE_1__["UserProfileComponent"]
    }
];
class UserProfileRoutingModule {
}
UserProfileRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: UserProfileRoutingModule });
UserProfileRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function UserProfileRoutingModule_Factory(t) { return new (t || UserProfileRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](UserProfileRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "IQtI":
/*!*****************************************************!*\
  !*** ./src/app/user-profile/user-profile.module.ts ***!
  \*****************************************************/
/*! exports provided: UserProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileModule", function() { return UserProfileModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _user_profile_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-profile-routing.module */ "AG1G");
/* harmony import */ var _user_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-profile.component */ "/de2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class UserProfileModule {
}
UserProfileModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: UserProfileModule });
UserProfileModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function UserProfileModule_Factory(t) { return new (t || UserProfileModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _user_profile_routing_module__WEBPACK_IMPORTED_MODULE_1__["UserProfileRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](UserProfileModule, { declarations: [_user_profile_component__WEBPACK_IMPORTED_MODULE_2__["UserProfileComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _user_profile_routing_module__WEBPACK_IMPORTED_MODULE_1__["UserProfileRoutingModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=user-profile-user-profile-module.js.map