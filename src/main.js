import {bootstrap} from 'aurelia-bootstrapper-webpack';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.css';
import '../styles/styles.css';
import config from './authConfig';
bootstrap(function(aurelia) {
    
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-auth', (baseConfig)=>{   //the name of plugin becomes 'paulvanbladel/aurelia-auth'
        baseConfig.configure(config);
    });

  aurelia.start().then(() => aurelia.setRoot('app', document.body));
});
