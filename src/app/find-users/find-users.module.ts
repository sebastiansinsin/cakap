import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FindUsersRoutingModule } from './find-users-routing.module';
import { FindUsersComponent } from './find-users.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FindUsersComponent
  ],
  imports: [
    CommonModule,
    FindUsersRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FindUsersRoutingModule
  ],
})
export class FindUsersModule { }
