import {AuthService} from 'aurelia-auth';
import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'isomorphic-fetch';
@inject(AuthService, HttpClient )

export class Logout{
	constructor(authService, http){
	    this.authService = authService;
	    this.http= http;
	};
	
	activate(){
	    let endSessionUrl = 'http://localhost:22530/connect/endsession';
	   
	    this.http.fetch(endSessionUrl).then(response=>{
            this.authService.logout("#/login")
            .then(response=>{
                console.log("ok logged out on  logout.js");
            })
            .catch(err=>{
                console.log("error logged out  logout.js");

            });
	    
        }).catch(err=>{
            console.log(err);
        });


		
	}
}
