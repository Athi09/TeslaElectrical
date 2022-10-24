import { Injectable } from '@angular/core';
import Amplify, { Auth } from 'aws-amplify';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class CognitoServiceService {

  constructor() { 
    Amplify.configure({
      Auth: environment.cognito
    })
  }

  public signUp(user: User): Promise<any> {
    return Auth.signUp({
      username: user.email,
      password: user.password,
      attributes: {
        email: user.email,
        given_name: user.givenName,
        family_name: user.familyName
      }
    })
  }

  // we have to confirm signup with the verification code sent to the user email
  public confirmSignUp(user: User) : Promise<any> {
    return Auth.confirmSignUp(user.email, user.code);
  }

  // logged in with valid email and password
  public getUser() : Promise<any> {
    return Auth.currentUserInfo();
  }

  public signIn(user: User) : Promise<any> {
    let details = Auth.signIn(user.email, user.password);
    return details;
  }

  /*
   public signIn(user: User) : Promise<any> {
    return Auth.signIn(user.email, user.password);
  }
  */

  public signOut() : Promise<any> {
    return Auth.signOut();
  }

  // this method will sent new code to user email
  public forgetPassword(user: User) : Promise<any> {
    return Auth.forgotPassword(user.email);
  }

  // we submit the new password with email and code sent to that email
  public forgotPasswordSubmit(user: User, new_Password: string) : Promise<any> {
    return Auth.forgotPasswordSubmit(user.email, user.code, new_Password);
  }

  public get UserDetails() : Promise<any> {
    return Auth.currentUserCredentials();
  }

}


