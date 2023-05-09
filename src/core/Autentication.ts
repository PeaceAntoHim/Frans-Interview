type TDataAuth = {
   email: string;
   password: string;
}
import credential from '../db/credential.json'

export class Auth {
   private _email: string;
   private _password: string;

   constructor(dataAuth: TDataAuth) {
      this._email = dataAuth.email
      this._password = dataAuth.password
   }

   public login() {
      if(
         credential.email == this._email && 
         credential.password == this._password
         ) {
         return {
            status: true,
            message: 'Login success'
         }
      } else {
         return {
            status: false,
            message: 'Login failed',
         }
      }
   }
}