// code is the verification code that will be sent to a user email to verify email

export interface User {
    email: string;
    password: string;
    givenName: string;
    familyName: string;
    code: string;
    showPassword: boolean;
}
