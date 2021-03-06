import { Component, OnInit } from '@angular/core';
import { LoginUser } from 'src/app/models/LoginUser';
import { User } from 'src/app/models/User';
import { LoginService } from '../../services/login.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { AlertService } from 'src/app/services/alert.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUser: LoginUser;
  myInput: string;
  email: string;
  password: string;
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService,
        private loginService:LoginService
    ) {
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }


    ngOnInit() {
          this.loginForm = this.formBuilder.group({
              email: ['', Validators.required],
              password: ['', Validators.required]
          });



     // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }


  onSubmit(){
    console.log(this.email);
    console.log(this.password);

    this.loginUser = {email: this.email, password: this.password};
    console.log(this.loginUser);

    this.loginService.onLogin(this.loginUser).subscribe((data)=>{
      console.log(data);
      //localStorage.setItem('token', data.email)
      this.router.navigateByUrl('adminPage');
    },
    error =>{
        alert('Username or password incorrect');
    });
  }

// onSubmit() {
        //this.submitted = true;

        // reset alerts on submit
        //this.alertService.clear();

      // stop here if form is invalid
         // if (this.loginForm.invalid) {
         //     return;
          //}

        //   //this.loading = true;
        //   this.loginUser = {email: this.email, password: this.password};
        //  console.log(this.loginUser);
        //   this.loginService.onLogin(this.loginUser)
        //       .pipe(first())
        //       .subscribe(
        //           data => {
        //               this.router.navigate([this.returnUrl]);
        //           },
        //           error => {
        //               this.alertService.error(error);
        //               this.loading = false;
        //           });
      //}


  gotoRegister(){
      this.router.navigate(['/register']);  // define your component where you want to go
  }

}
