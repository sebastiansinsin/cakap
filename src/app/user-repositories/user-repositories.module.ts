import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRepositoriesRoutingModule } from './user-repositories-routing.module';
import { UserRepositoriesComponent } from './user-repositories.component';
import {PaginatorModule} from 'primeng/paginator';

@NgModule({
  declarations: [
    UserRepositoriesComponent
  ],
  imports: [
    CommonModule,
    UserRepositoriesRoutingModule,
    PaginatorModule
  ]
})
export class UserRepositoriesModule { }
