import {bootstrap} from 'aurelia-bootstrapper-webpack';
import config from './authConfig';
bootstrap(function(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-auth', (baseConfig)=>{ 
        baseConfig.configure(config);
    });
  aurelia.start().then(() => aurelia.setRoot('app', document.body));
});
