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
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService
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
    this.authService.login(this.fval['email'].value, this.fval['password'].value, this.fval['role'].value)
      .subscribe(
        success => {
          if (success) {
            // Navigate to appropriate page based on user role
            if (this.fval['role'].value === 'admin') {
              this.router.navigate(['/admin']);
            } else {
              this.router.navigate(['/operator']);
            }
          } else {
            // Handle login failure
            console.log('Login failed');
            // Reset loading state
            this.loading = false;
          }
        }
      );
  }
}
