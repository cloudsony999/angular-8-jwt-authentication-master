import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  userName: string = '';

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.authService.register(this.form).subscribe(
      data => {
        // console.log('SUCCESS', data);
        // this.isSuccessful = true;
        // this.isSignUpFailed = false;
      },
      err => {
        if (err.error.text === 'Registration successful.') {
          console.log('SUCCESS', err);
          this.isSuccessful = true;
          this.isSignUpFailed = false;
          this.userName = this.form.username;
        } else {
          console.log('FAILURE', err);
          this.errorMessage = err.error.message;
          this.isSignUpFailed = true;
        }
      }
    );
  }
}
