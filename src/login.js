import {AuthService} from 'aurelia-auth';
import {inject} from 'aurelia-framework';
@inject(AuthService )

export class Login{
	constructor(auth){
		this.auth = auth;
	};

	heading = 'Login';
		
	authenticate(name){
		return this.auth.authenticate(name, false, null)
		.then((response)=>{
			console.log("auth response " + response);
		});

	}
}
