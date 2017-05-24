angular.module('ionicApp.controllers', [])

.controller('signupCtrl', function($scope, $state, $rootScope, LoginService, $ionicPopup) {
    $scope.data = {}

    $scope.logIn = function() {
        LoginService.loginUser($scope.data.username, $scope.data.password).success(function(data) {
<<<<<<< HEAD
            $state.go('tabs');
        }).error(function(data) {
            var alertPopup = $ionicPopup.alert({
=======
            $state.go('tabs.contacts')
            console.log('Login Successfully')
        })
            .error(function(data) {
                console.log('Login Failed')
                var alertPopup = $ionicPopup.alert({
>>>>>>> a3102bdf10bf3fc9a332838fb9271c4b7348ba56
                title: 'Login failed!',
                template: '<h4 style="text-align: center">Please Try Again!!!</h4>'            
        })
      })
   }
     $scope.phone = function(data) {
        $state.go('phone')
        console.log('Enter Phone Number')
    }
})


.controller('phoneCtrl', function($scope, $state) {
    $scope.valid = function(data) {
        $state.go('validation')
        console.log('Validation Page')
    }


})

.controller('validationCtrl', function($scope, $ionicPopup, $state) {
    $scope.signup = function(data) {
        $state.go('register')
        console.log('Register Page')
        var alertPopup = $ionicPopup.alert({
                title: 'Validated',
        template: '<h4 style="text-align: center">Success!</h4>' 
    })

    }
    
})
