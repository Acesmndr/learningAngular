'use strict';
(function(){

var app=angular.module('myApp',[]);
app.controller('StoreController',function(){
	this.product=gems;
});
var gems=[{
	name:'Aashish ',
	price:2.95,
	soldOut:true,
},{
	name:'Mndr',
	price:200,
	soldOut:false,
	canPurchase:true
},{
	name:'Awesome',
	price:2300,
	canPurchase:true
}];
//simple directive
app.directive("superman",function(){
return {
	restrict:'A',
	template:"<div>Hello I'm superman</div>",
	link:function(scope,element){
		element.bind('mouseenter',function(){
		console.log("I'm inside of you");
	});
}
}
});
//directive with communication or inheritence
app.directive("superhero",function(){
return {
	restrict:'E',
	scope:{},
	controller:function($scope){
		$scope.abilities=[];
		this.addStrength=function(){
			$scope.abilities.push("strength");
		};
		this.addSpeed=function(){
		};
		this.addDeception=function(){
			$scope.abilities.push("Deception");
		};
	},
	link:function(scope,element){
		element.bind("mouseenter",function(){
			console.log(scope.abilities);
	});
	}
}
});
app.directive("batman",function(){
return{
	restrict:'A',
	require:'superhero',
	link:function(scope,element,attrs,superheroCtrl){
		superheroCtrl.addDeception();	
	}
	}
});
})();


