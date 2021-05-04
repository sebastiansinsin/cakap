import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindUsersComponent } from './find-users.component';

const routes: Routes = [
  {
    path: '',
    component: FindUsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FindUsersRoutingModule { }
