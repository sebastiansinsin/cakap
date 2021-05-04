import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-user-repositories',
  templateUrl: './user-repositories.component.html',
  styleUrls: ['./user-repositories.component.sass']
})
export class UserRepositoriesComponent implements OnInit {

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
      },
      err => {
        console.log(err);
        this.router.navigateByUrl('/not-found');
      }
    );
  }

}
