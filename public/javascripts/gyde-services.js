'use strict';

var gydeServices = angular.module('gydeServices', []);

gydeServices.factory('UserService', ['$http',
  function($http) {
    return {
      send: function(user) {
      	console.log("blah")
        return $http.post('/priorities', { priority: "Save" });
      }
    }
  }
]);
