var documentation = angular.module('documentation', []);

documentation.controller('FAQListCtrl', function ($scope) {
  $scope.faqs = [
    {'question': 'Nexus S',
     'anwser': 'Fast just got faster with Nexus S.'},
    {'question': 'Motorola XOOM™ with Wi-Fi',
     'anwser': 'The Next, Next Generation tablet.'},
    {'question': 'MOTOROLA XOOM™',
     'anwser': 'The Next, Next Generation tablet.'}
  ];
});