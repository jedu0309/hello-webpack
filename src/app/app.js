import 'angular';
import 'angular-mocks/angular-mocks';

import angular from 'angular';

angular.module(MODULE_NAME, [])
  .controller('AppCtrl', AppCtrl);

class AppCtrl {
  constructor() {
    this.url = 'https://github.com/preboot/angular-webpack';
  }
}


export default MODULE_NAME;