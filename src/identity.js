import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'isomorphic-fetch';
@inject(HttpClient)
export class Identity{
    heading = 'Identity as known in the web api';
    identityInApi="waiting for identity information";
    constructor(http){
        http.configure(config => {
            config
              .useStandardConfiguration();
        });

        this.http = http;
    }

    activate(){
        return this.http.fetch("http://localhost:57391/api/Identity")
		.then(response => {
		    return response.json();
		})
		.then(c => {
		    return this.identityInApi = c;
		});
    }

}
