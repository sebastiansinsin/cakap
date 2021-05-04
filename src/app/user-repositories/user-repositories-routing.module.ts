import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRepositoriesComponent } from './user-repositories.component';

const routes: Routes = [
  {
    path: '',
    component: UserRepositoriesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRepositoriesRoutingModule { }
