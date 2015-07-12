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
})();


