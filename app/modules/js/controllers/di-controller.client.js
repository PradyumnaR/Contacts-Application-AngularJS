'use strict';

angular
	.module("diApp")
	.controller("diCtrl",['$scope','diService',function($scope,diService){
		$scope.persist = function(person){
			diService.save(person);
			$scope.person = {};
			$scope.people = diService.get()
		}
	}])
	.factory('diService',function(){
		var count = 1;
		var people = [];
		var savePerson = function(person){
			var p = angular.copy(person);
			p.id = count++;
			people.push(p);

		}
		var getPerson = function(){
			return people;
		}
		return{
			save : savePerson,
			get : getPerson
		};
	});