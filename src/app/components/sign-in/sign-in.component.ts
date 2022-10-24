import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CognitoAttributes } from '@aws-amplify/ui';
import { User } from 'src/app/models/user';
import { CognitoServiceService } from 'src/app/services/cognito-service.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  user: User | undefined;
  alertMessage: string = '';
  showAlert: boolean = false;

  isforgotPassword: boolean = false;
  newPassword: string = '';

  
  constructor(private router: Router, 
              private cognitoService: CognitoServiceService) { }

  ngOnInit(): void {
    this.user = {} as User;
  }

  signInWithCognito() {
    if (this.user && this.user.email && this.user.password) {
      this.cognitoService.signIn(this.user)
      .then(() => {
        this.router.navigate(['/'])
      })
      .catch(( error: any) => {
        this.displayAlert(error.message);
      })

      console.log(`Current user is ${this.user.email}`);
    }
    else {
      this.displayAlert("Please enter a valid email or password");
    }
   
  }

  forgotPasswordClicked(){
    if (this.user && this.user.email) {
      this.cognitoService.forgetPassword(this.user)
      .then(() => {
        this.isforgotPassword = true;
      })
      .catch((error: any) => {
        this.displayAlert(error.message);

      })
    }else {
      this.displayAlert("Please Enter a valid email address");
    }
    
  }

  newPasswordSubmit() {
    if (this.user && this.user.code && this.newPassword.trim().length != 0) {
      this.cognitoService.forgotPasswordSubmit(this.user, this.newPassword.trim())
      .then(() => {
        this.displayAlert("Password Updated");
        this.isforgotPassword = false;
      })
      .catch((error: any) => {
        this.displayAlert(error.message);
      })
    } else {
      this.displayAlert("Please enter valid input");

    }
  }

  private displayAlert(message: string) {
    this.alertMessage = message;
    this.showAlert = true;
  }

 

}
