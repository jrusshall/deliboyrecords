angular.module('deliApp', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: '../views/homeTmpl.html'
        })
    $urlRouterProvider.otherwise('/');
})
