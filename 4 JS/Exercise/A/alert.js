





/*
let user = {
  name: "John Smith",
  age: 35
};
let json = JSON.stringify(user);
alert(json);




Standard built-in objects,
JSON methods, toJSON,
Map, Set, WeakMap and WeakSet,
Array methods,
Browser environment & specs.







//  OBJECTs definition and set, delete and access!!

let user = {
  name: "John",
  age: 30,
  "likes birds": true  // multiword property name must be quoted
};
alert(user["likes birds"]);
delete user["likes birds"];
alert(user["likes birds"]);
user["likes dog"] = "yes ofcourse" ;
alert(user["likes dog"]);







function splitString(stringToSplit, separator) {
  var arrayOfStrings = stringToSplit.split(separator);

  console.log('The original string is: "' + stringToSplit + '"');
  console.log('The separator is: "' + separator + '"');
  console.log('The array has ' + arrayOfStrings.length + ' elements: ' + arrayOfStrings.join(' / '));
}

var tempestString = 'Oh brave new world that has such people in it.';
var monthString = 'Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec';

var space = ' ';
var comma = ',';


splitString(tempestString, space);
splitString(tempestString);
splitString(monthString, comma);





let message = () => {alert("Hello");};
message();


function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

function showOk() {
  alert( "You agreed." );
}

function showCancel() {
  alert( "You canceled the execution." );
}

// usage: functions showOk, showCancel are passed as arguments to ask
ask("Do you agree?", showOk, showCancel);




let sum = 0;

while (true) {

  let value = +prompt("Enter a number", '');

  if (!value) break; // (*)

  if (value !==  )

  sum += value;

}
alert( 'Sum: ' + sum );



let userName = prompt("Who is there",'');
(userName=="" || userName==null)?alert"Canceled":
(userName!="admin")?alert("I don't know you"):
( let password = (prompt("Password",'')) )
;


(password == "TheMaster")? alert("welcome"):
(password=="" || password==null)? alert("cancelled"):
alert("Wrong Password");






'use strict';
let name = prompt("What is the official name of JavaScript?",'');
if (name == "ECMAScript") 
		{alert("ECMAScript”, then output “Right!")}
	else{
		alert("Didn’t know? ECMAScript!");
	}



Ternary ? Operators
let accessAllowed = (age > 18) ? true : false;

Multiple ? Operators
let age = prompt('age?', 18);
let message = (age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';
alert( message );

Conditional Operators
let company = prompt('Which company created JavaScript?', '');
(company == 'Netscape') ?
   alert('Right!') : alert('Wrong.');


Boolean conversion
The if (…) statement evaluates the expression in parentheses and converts it to the boolean type.
Let’s recall the conversion rules from the chapter Type Conversions:
A number 0, an empty string "", null, undefined and NaN become false. Because of that they are called “falsy” values.
Other values become true, so they are called “truthy”.

let year = prompt('In which year was ECMAScript-2015 specification published?', '');

if (year == 2015) alert( 'You are right!' );


console.log( "20" > 10 ); //true, String "20" is converted to Number 20
console.log( '01' == 1 ); // true, String '01' is converted to Number 01
console.log(null < 10); //true, because null is converted to 0 in Comparision Operators, Hence 0 < 10 is true 
console.log(null > 0); //false, here null is converted to 0 in Comparision Operators, Hence 0 > 0 is false
console.log(undefined <= 0); //fasle, undefined is converted to NaN in Comparision operators hence Nan <= 0 is false
console.log(undefined == 0); //false, undefined is not converted to NaN in double Equality Comparision operators, it remains the same. Hence Undefined == 0 is false
console.log(undefined == 1); //false, undefined is not converted to NaN in double Equality Comparision operators. Hence undefined == 1 is false
console.log(null == 0); //false, null is not converted to 0 when double equality operator is used hence null == 0 is false
console.log(null == undefined); //true Sweet Couple
console.log(true == 1); //true, true is converted to a number 1,
console.log(false == 0); //true, false is converted to zero when using comparision operators
console.log( 0 == false); //true, false is converted to zero
console.log( '' == false ); //true, false is converted to zero and empty string is converted to zero always in JS
console.log( 0 === false); //false, types are different

alert( 4 ** (1/2) ); // 2 (power of 1/2 is the same as a square root, that's maths)
alert( 8 ** (1/3) ); // 2 (power of 1/3 is the same as a cubic root)

alert( 2 ** 2 ); // 4  (2 * 2)
alert( 2 ** 3 ); // 8  (2 * 2 * 2)
alert( 2 ** 4 ); // 16 (2 * 2 * 2 * 2)

let a, b, c;

a = b = c = 2 + 2;

alert( a ); // 4
alert( b ); // 4
alert( c ); // 4


let apples = "2";
let oranges = "3";

// both values converted to numbers before the binary plus
alert( +apples + +oranges ); // 5

// the longer variant
alert( Number(apples) + Number(oranges) ); // 5

// From a mathematician’s standpoint the abundance of pluses may seem strange. But from a programmer’s standpoint, there’s nothing special: unary pluses are applied first, they convert strings to numbers, and then the binary plus sums them up.
// Why are unary pluses applied to values before the binary one? As we’re going to see, that’s because of their higher precedence.

********* // There are many operators in JavaScript. Every operator has a corresponding precedence number. The one with the bigger number executes first. If the precedence is the same, the execution order is from left to right.
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence


// No effect on numbers
let x = 1;
alert( +x ); // 1

let y = -2;
alert( +y ); // -2

// Converts non-numbers
alert( +true ); // 1
alert( +"" );   // 0

let apples = "2";
let oranges = "3";

alert( apples + oranges ); // "23", the binary plus concatenates strings



alert(2 + 2 + '1' ); // "41" and not "221"

alert("1" + 2 ); // "12"
alert( 2 + '1' ); // "21"

let s = "my" + "string";
alert(s); // mystring


alert("" + 1 + 0); // 10
alert("" - 1 + 0); // -1
alert(true + false); // 1
alert(6 / "3");    // 2
alert("2" * "3");     // 6
alert(4 + 5 + "px");    // 45px NaN or Error
alert("$" + 4 + 5);    //   $45  NaN or Error
alert("4" - 2); //  2
alert("4px" - 2);  // NaN or Error
alert(7 / 0);   //Infinity
alert("  -9\n" + 5);  // undefined or NaN or Error
alert("  -9\n" - 5);  // undefined or NaN or Error
alert(null + 1);  //1
alert(undefined + 1);  // undefined or NaN or Error




alert( Boolean(1) ); // true
alert( Boolean(0) ); // false

alert( Boolean("hello") ); // true
alert( Boolean("") ); // false
alert( Boolean("0") ); // true
alert( Boolean(" ") ); // spaces=true



alert( Number("   123   ") ); // 123
alert( Number("123z") );      // NaN (error reading a number at "z")
alert( Number(true) );        // 1
alert( Number(false) );       // 0



let str = "123";
alert(typeof str); // string
let num = Number(str); // becomes a number 123
alert(typeof num); // number




let name = "Ilya";

alert( `hello ${1}` ); // ? hello 1

alert( `hello ${"name"}` ); // ? hello name

alert( `hello ${name}` ); // ? hello Ilya


alert(typeof undefined ) ; // "undefined"

alert(typeof 0); // "number"

alert(typeof true); // "boolean"

alert(typeof "foo"); // "string"

alert(typeof Symbol("id")); // "symbol"

alert(typeof Math); // "object"  (1)

alert(typeof null); // "object"  (2)  null is not an object and instead its a special value with a seperate type so, it's an error in the language.

alert(typeof alert); // "function"  (3)




alert( NaN / 2 );
alert( Infinity );
alert("Hello World");
let admin , name ;
name = "john";
admin=name;
alert(admin);
let ourPlanetName = earth ;
let currentVisitor = "john";
let x= (1/0);
alert(x);

*/


