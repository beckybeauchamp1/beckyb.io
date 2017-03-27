// Importing Angular
import angular from 'angular';
import 'angular-route';
import 'angular-sanitize';
import 'angular-aria';
import 'angular-animate';
import 'angular-material';

// main scss
import '../sass/app.scss';
// main portfolio app
import app from './app';
// Controllers
import IndexController from './controllers/IndexController';
// Templates
import IndexTpl from '../templates/index.tpl.html';
// Directives



app.config(function($locationProvider, $routeProvider, $compileProvider) {

    'ngInject';

    $locationProvider.html5Mode(false);
    $locationProvider.hashPrefix('');

    $routeProvider.when('/', {
        templateUrl: IndexTpl,
        controller: IndexController
    })

});

// initial run + setup
app.run(($rootScope) => {
    'ngInject';

});
