import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { SharedService } from '../shared.service';

@Component({
    selector: 'app-find-users',
    templateUrl: './find-users.component.html',
    styleUrls: ['./find-users.component.sass']
})
export class FindUsersComponent implements OnInit, OnDestroy {
    userName = '';
    ngUnsubscribe = new Subject();
    constructor(
        private sharedService: SharedService,
        private router: Router
    ) { }

    ngOnInit(): void {
    }

    ngOnDestroy(): void {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }

    search_user(userName: string): void {
        if (userName) {
            // deprecated subscribe because there is an actual error with deprecation notice in typescript
            // https://github.com/ReactiveX/rxjs/issues/6060
            this.sharedService.findUser(userName).pipe(takeUntil(this.ngUnsubscribe)).subscribe(
                (res) => {
                    console.log(res)
                    if (res.id) {
                        this.sharedService.setUserData(res);
                        this.router.navigateByUrl('/user-profile');
                    }
                },
                err => {
                    if (err.status === 404) {
                        this.router.navigateByUrl('not-found');
                    }
                }
            );
        }
    }
}
