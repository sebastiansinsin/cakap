import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { SharedService, User } from '../shared.service';

@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.sass']
})
export class UserProfileComponent implements OnInit,OnDestroy {
    userData: User = {
        login: '',
        id: '',
        avatar_url: '',
        bio : '',
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
    ngUnsubscribe = new Subject();
    constructor(
        private sharedService: SharedService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.sharedService.userData$.pipe(takeUntil(this.ngUnsubscribe)).subscribe(
            (res) => {
                if (res.id) {
                    this.userData = res;
                }
                else {
                    this.router.navigateByUrl('/find-users');
                }
            }
        );
    }

    ngOnDestroy(): void {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }

}
