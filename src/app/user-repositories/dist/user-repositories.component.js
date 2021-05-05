"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserRepositoriesComponent = void 0;
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var free_solid_svg_icons_2 = require("@fortawesome/free-solid-svg-icons");
var free_solid_svg_icons_3 = require("@fortawesome/free-solid-svg-icons");
var free_solid_svg_icons_4 = require("@fortawesome/free-solid-svg-icons");
var UserRepositoriesComponent = /** @class */ (function () {
    function UserRepositoriesComponent(sharedService, router) {
        this.sharedService = sharedService;
        this.router = router;
        this.first = 0;
        this.totalRecords = 0;
        this.repos = [];
        this.faCodeBranch = free_solid_svg_icons_1.faCodeBranch;
        this.faStar = free_solid_svg_icons_3.faStar;
        this.faEye = free_solid_svg_icons_2.faEye;
        this.faArrowDown = free_solid_svg_icons_4.faArrowDown;
    }
    UserRepositoriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sharedService.userData$.pipe(operators_1.map(function (val) { return val.repos_url; }), operators_1.switchMap(function (val) { return _this.sharedService.getRepos(val); })).subscribe(function (res) {
            console.log(res);
            _this.totalRecords = res.length;
            _this.repos = res;
        }, function (err) {
            console.log(err);
            _this.router.navigateByUrl('/not-found');
        });
    };
    UserRepositoriesComponent.prototype.paginate = function (event) {
        this.first = event.first;
    };
    UserRepositoriesComponent = __decorate([
        core_1.Component({
            selector: 'app-user-repositories',
            templateUrl: './user-repositories.component.html',
            styleUrls: ['./user-repositories.component.sass']
        })
    ], UserRepositoriesComponent);
    return UserRepositoriesComponent;
}());
exports.UserRepositoriesComponent = UserRepositoriesComponent;
