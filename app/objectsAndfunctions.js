/**
 * Created by kmurugesan on 9/27/13.
 */

var person = {};
    person.age=32;

var person1 = {
    firstName: "Willaiam",
    lastName: "Gates"};

function Person() {
    this.firstName ="kumanan";

}

var cat;
if(cat===undefined||cat===null){
    logToOutput("cat does not have a value or it is null")
}

var dog={};
dog.bark="woof";
var x = new Person();
var foo;
var y=null;
var z=y+10;
var lastName = " Murugan";
var fullName=y +lastName;
logToOutput(fullName);
if(foo===null){
    logToOutput("its undefined");
}

if(dog.bark){
    logToOutput("yes. this dog can bark");
}

//check for equality;

var num1=10;
var num2="10";

if(num1===num2){
    logToOutput("num1 and num2 are equal");
}
logToOutput(z);
log(x.firstName);
logToOutput(person1.firstName);
logToOutput(person.age);
logToOutput(typeof Person);