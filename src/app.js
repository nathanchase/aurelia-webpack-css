import {inject} from 'aurelia-framework';
import {FetchConfig} from 'aurelia-auth';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.css';
import styles from '../styles/styles.css';

@inject(FetchConfig) 
export class App {
    constructor(fetchConfig){
        this.fetchConfig = fetchConfig;
    }

    activate(){
        this.fetchConfig.configure();
    }

    configureRouter(config, router) {
        config.title = 'Aurelia';
        config.map([
          { route: ['', 'welcome'], name: 'welcome',      moduleId: 'welcome',      nav: true, title: 'Welcome' },
          { route: 'customer',        moduleId: './customer',       nav: true, title:'CRM', auth:true },
          { route: 'identity',        moduleId: './identity',       nav: true, title:'IdentityInApi', auth:true },
          { route: 'child-router',  name: 'child-router', moduleId: 'child-router', nav: true, title: 'Child Router' },
          { route: 'login',        moduleId: './login',       nav: false, title:'Login' },
   		  { route: 'logout',        moduleId: './logout',       nav: false, title:'Logout' }

        ]);

        this.router = router;
    }

}

