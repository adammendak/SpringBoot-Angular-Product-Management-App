import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login/index';

import { userRoutes } from './userRoutes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes)
  ],
  exports: [
  ],
  declarations: [
    LoginComponent
  ],
  providers: []
})
export class UserModule { }
