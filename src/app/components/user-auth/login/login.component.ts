import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loading = false;
  submitted = false;
  returnUrl!: string;
  
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService : AuthService
  ) { }
  
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      role: ['', Validators.required]
    });
  }
  
  // for accessing to form fields
  get fval() { return this.loginForm.controls; }
  
  onFormSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
  
    this.loading = true;
    this.authService
      .login(this.fval['email'].value, this.fval['password'].value, this.fval['role'].value)
      .subscribe(
        data => {
        this.router.navigate(['/countries']);
      },
      error => {
        this.loading = false;
      });
  }
}
