import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRepositoriesRoutingModule } from './user-repositories-routing.module';
import { UserRepositoriesComponent } from './user-repositories.component';
import { PaginatorModule } from 'primeng/paginator';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TooltipModule } from 'primeng/tooltip';
@NgModule({
  declarations: [
    UserRepositoriesComponent
  ],
  imports: [
    CommonModule,
    UserRepositoriesRoutingModule,
    PaginatorModule,
    FontAwesomeModule,
    TooltipModule
  ]
})
export class UserRepositoriesModule { }
