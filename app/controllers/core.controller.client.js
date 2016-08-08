angular
	.module("coreApp")
	.controller("coreController",function($scope){
		$scope.save = function(person){
			//console.log(person);
			localStorage.setItem(person.name,person.occupation)
			$scope.person = {};
		}
	});

angular
	.module("readApp")
	.controller("readController",function($scope){
		$scope.people = [];
		for(var key in localStorage){
			var person = {}
			person.name = key
			person.occupation = localStorage.getItem(key);
			$scope.people.push(person)
		}
	});