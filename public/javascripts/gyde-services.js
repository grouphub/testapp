'use strict';

var gydeServices = angular.module('gydeServices', []);

gydeServices.factory('UserService', ['$http',
  function($http) {
    return {
      send: function(user) {
        return $http.post('/priorities.json', {
          priority: {
            priority: "Save"
          }
        });
      }
    }
  }
]);
