import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loading = false;
  submitted = false;
  returnUrl!: string;
  isInvalidRoleError = '';
  
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) { }
  
  ngOnInit(): void {
    // Initialize login form with validators
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      role: ['', Validators.required]
    });
  }
  
  // Getter for accessing form fields
  get fval() { return this.loginForm.controls; }

  // Handle error message for radio button selection
  handleRadioError(): void {
    const email = this.fval['email'].value;
    const role = this.fval['role'].value;

    // Check if the email and role combination is invalid
    if ((email === 'admin@example.com' && role === 'operator') || 
        (email === 'operator@example.com' && role === 'admin')) {
      // Display error message and prevent login
      this.isInvalidRoleError = 'Invalid role selection for the provided email';
      // Optionally, you can reset the form here or display a specific error message to the user
      this.loginForm.reset();
    }
  }

  // Handle form submission
  onFormSubmit(): void {
    this.submitted = true;
    
    // Call the method to handle radio button error
    this.handleRadioError();

    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    // Attempt to login using authentication service
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
          }
          // Reset loading state
          this.loading = false;
        }
      );
  }
}
