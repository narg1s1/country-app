import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AuthService } from '../../services/authentication.service';
import { UserAuthRoutingModule } from './user-auth-routing.module';

@NgModule({
  declarations: [LoginComponent],
  exports: [LoginComponent],
  imports: [
    CommonModule,
    UserAuthRoutingModule
  ],
  providers: [AuthService]
})
export class UserAuthModule { }
