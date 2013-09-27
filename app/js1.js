"use strict";

//global functions. do not use.
var age = 32;
var price=5.5;
var firstName = 'kumanan';
var isOnline = true;
var lastName = null;
var x = 5;

//good way
var myApp = myApp || {};
myApp.age = 52;
myApp.firstName = "William";
myApp.lastName = "Gates";


log("hello ");
log(typeof firstName);
log(typeof isOnline);
log(typeof age);
log(typeof lastName);
log(typeof price);
log(myApp);

function sayHello() {
    logToOutput("sayHello")
}

var sayHello1 = function () {
    logToOutput("sayHello1");
}

var x = {};
x.sayHello = function () {
    logToOutput("x.sayHello")
}

var person = {
    firstName: "Ram",
    lastName: "Shankar"
};


x = 10;
x = x + 1;
x = x + "1";
$(function () {
    var msg = $("#output");
    logToOutput(typeof myApp);
    logToOutput(typeof log);
    sayHello();
    sayHello1();
    logToOutput(x);
    logToOutput(person.firstName);
    // x.sayHello();
});

