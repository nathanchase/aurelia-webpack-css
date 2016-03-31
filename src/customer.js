import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'isomorphic-fetch';
@inject(HttpClient)
export class Customer{
    heading = 'Customer management';
    customer=[];
    constructor(http){
        http.configure(config => {
            config
              .useStandardConfiguration();
              //.withBaseUrl('http://localhost:57391/api/');
        });

        this.http = http;
    }

    activate(){
        return this.http.fetch("http://localhost:57391/api/Customers")
		.then(response => {
		    return response.json();
		})
		.then(c => {
		    return this.customers = c;
		});
    }

}
