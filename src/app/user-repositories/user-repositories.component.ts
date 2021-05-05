import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { SharedService } from '../shared.service';
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-user-repositories',
  templateUrl: './user-repositories.component.html',
  styleUrls: ['./user-repositories.component.sass']
})
export class UserRepositoriesComponent implements OnInit {
  first = 0;
  totalRecords = 0;
  repos: any[] = [];
  faCodeBranch = faCodeBranch;
  faStar = faStar;
  faEye = faEye;
  faArrowDown = faArrowDown;
  constructor(
    private sharedService: SharedService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.sharedService.userData$.pipe(
      map(val => val.repos_url),
      switchMap(val => this.sharedService.getRepos(val))
    ).subscribe(
      res => {
        console.log(res);
        this.totalRecords = res.length;
        this.repos = res;
      },
      err => {
        console.log(err);
        this.router.navigateByUrl('/not-found');
      }
    );
  }

  paginate(event: {
    first: number,
    rows: number,
    page: number,
    pageCount: number
  }) {
    this.first = event.first;
  }
}
