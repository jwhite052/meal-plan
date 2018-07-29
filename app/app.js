var mealplanApp = angular.module('mealplanApp', []);

mealplanApp.controller('MealListController', function MealListController($scope) {
  $scope.meals = [
    {
      name: 'Peanut Thai Chicken'
    },
    {
      name: 'Red Curry Chicken'
    }
  ];

  $scope.name = "Chicken Dishes";
});
