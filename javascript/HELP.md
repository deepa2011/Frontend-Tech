# JavaScript

## What is JavaScript?

JavaScript was initially created to “make web pages alive”.

The programs in this language are called scripts. They can be written right in a web page’s HTML and run automatically as the page loads.

Scripts are provided and executed as plain text. They don’t need special preparation or compilation to run.

JavaScript became a fully independent language with its own specification called ECMAScript.

Today, JavaScript can execute not only in the browser, but also on the server, or actually on any device that has a special program called the JavaScript engine.

The browser has an embedded engine sometimes called a “JavaScript virtual machine”.

## Specification
The ECMA-262 specification contains the most in-depth, detailed and formalized information about JavaScript. It defines the language.

## Developer console
Most developers lean towards Chrome or Firefox for development because those browsers have the best developer tools.

Developer tools are potent, they have many features. 

## Script tag
JavaScript programs can be inserted almost anywhere into an HTML document using the <script> tag.

The <script> tag contains JavaScript code which is automatically executed when the browser processes the tag.


<script>
alert( 'Hello, world!' );
</script>

<script type="text/javascript"><!--
    ...
//--></script>

<script src="/path/to/script.js"></script>

The type and language attributes are not required.

## Statements

We can have as many statements in our code as we want. Statements can be separated with a semicolon.

A semicolon may be omitted in most cases when a line break exists.

## Comments

One-line comments start with two forward slash characters //.

Multiline comments start with a forward slash and an asterisk /* and end with an asterisk and a forward slash */.

Nested comments are not supported, i.e., There may not be /*...*/ inside another /*...*/.

// Hi this is my comment
// This is my second line

/*
hi
two 
lines
*/

## Use Strict

ECMAScript 5 (ES5) in 2009 added new features to the language and modified some of the existing ones. To keep the old code working, most such modifications are off by default. You need to explicitly enable them with a special directive: "use strict".

The directive looks like a string: "use strict" or 'use strict'. When it is located at the top of a script, the whole script works the “modern” way.

Please make sure that "use strict" is at the top of your scripts, otherwise strict mode may not be enabled.

Modern JavaScript supports “classes” and “modules” – advanced language structures (we’ll surely get to them), that enable use strict automatically. So we don’t need to add the "use strict" directive, if we use them.

So, for now "use strict"; is a welcome guest at the top of your scripts. Later, when your code is all in classes and modules, you may omit it.

use strict;

var salary=20

## Variable
A variable is a “named storage” for data. We can use variables to store goodies, visitors, and other data.

To create a variable in JavaScript, use the let keyword.

ex., let user = 'John', age = 25, message = 'Hello';

In older scripts, you may also find another keyword: var instead of let:

The var keyword is almost the same as let. It also declares a variable, but in a slightly different, “old-school” way.

A variable should be declared only once. A repeated declaration of the same variable is an error.

Variable naming: There are two limitations on variable names in JavaScript: The name must contain only letters, digits, or the symbols $ and _. The first character must not be a digit.

Variables named apple and AppLE are two different variables.

## Constants

To declare a constant (unchanging) variable, use const instead of let:

ex., const myBirthday = '18.04.1982';

const MGR_COLOR='orange';
const EMP_COLOR='blue';
const MGR_ROLE='MGR';
const EMP_ROLE='EMP';

Front End:
---------
if(role=MGR_ROLE)
    applyColor(MGR_COLOR);
else if(role=EMP_ROLE)
    applyColor(EMP_COLOR);

  if(role=MGR_ROLE)
    applyBackgroundColor(MGR_COLOR);
else if(role=EMP_ROLE)
    applyBackgroundColor(EMP_COLOR);  

Java Back end:
--------------
rest service (http micro service):
GET - getEmployee (id):: name | salary | role

Database:
---------
employee Table
name | salary | role |
manager > MGR
employee > EMP


## Data Types

A value in JavaScript is always of a certain type. For example, a string or a number.

There are eight basic data types in JavaScript. 

- Number: The number type represents both integer and floating point numbers.
Besides regular numbers, there are so-called “special numeric values” which also belong to this data type: Infinity, -Infinity and NaN.

    - Infinity represents the mathematical Infinity ∞. It is a special value that’s greater than any number.
    - NaN represents a computational error. It is a result of an incorrect or an undefined mathematical operation, for instance:

let value = 'hello'/10
alert(value) // NaN

Doing maths is “safe” in JavaScript. We can do anything: divide by zero, treat non-numeric strings as numbers, etc.

The script will never stop with a fatal error (“die”). At worst, we’ll get NaN as the result.

- BigInt: In JavaScript, the “number” type cannot represent integer values larger than (253-1) (that’s 9007199254740991), or less than -(253-1) for negatives. It’s a technical limitation caused by their internal representation.

For most purposes that’s quite enough, but sometimes we need really big numbers, e.g. for cryptography or microsecond-precision timestamps.

BigInt type was recently added to the language to represent integers of arbitrary length. A BigInt value is created by appending n to the end of an integer:

// the "n" at the end means it's a BigInt
const bigInt = 1234567890123456789012345678901234567890n;

- String: A string in JavaScript must be surrounded by quotes. There are 3 types of quotes.

Double quotes: "Hello".
Single quotes: 'Hello'.
Backticks: `Hello`.

Double and single quotes are “simple” quotes. There’s practically no difference between them in JavaScript.

Backticks are “extended functionality” quotes. They allow us to embed variables and expressions into a string by wrapping them in ${…}, for example:

let name = "John";

// embed a variable
alert( `Hello, ${name}!` ); // Hello, John!
alert(`sum: ${2+3}`); // sum: 5

- Boolean: has only two values true and false

- "null" value

In JavaScript, null is not a “reference to a non-existing object” or a “null pointer” like in some other languages.

It’s just a special value which represents “nothing”, “empty” or “value unknown”.

let name = null;

- "undefined" value

The meaning of undefined is “value is not assigned”.

If a variable is declared, but not assigned, then its value is undefined:

let age; // undefined at this step
alert(age) // displays "undefined"

- Objects

let employee = Employee('', '', 24, 10)

The object type is special.

All other types are called “primitive” because their values can contain only a single thing (be it a string or a number or whatever). In contrast, objects are used to store collections of data and more complex entities.

- Symbol
symbol for unique identifiers.

- typeof operator

The typeof operator returns the type of the argument. It supports two forms of syntax:

As an operator: typeof x
As a function: typeof(x)

Ex:
typeof 0 // "number"
typeof 10n // "bigint"
typeof true // "boolean"
typeof "foo" // "string"
typeof Math // "object", built-in object
typeof alert // "function" 

let responseObj = http.get('api url');
if(typeof(responeObj)=="Employee") {
  // do some work
} 
else {
  // not employee, do some other work
}

## Interaction: alert, prompt, confirm

alert shows a message and waits for the user to press “OK”.
  alert("hello")

prompt accepts two arguments: title and default value for input field
  result = prompt(title, [default]);
  result = prompt("How old are you?", 100);

confirm shows a modal window with a question and two buttons: OK and Cancel.
  result = confirm("Do you want to exit?");
The result is true if OK is pressed and false otherwise.


  let isBoss = confirm("Are you ok to exit?");


## Type Conversions
let random = 99;
let numStr = String(num);
let numberAgain = Number(numStr);

String(value) function to convert a value to a string:
  newStringValue = String(numericValue);

Numeric conversion happens in mathematical functions and expressions automatically.
Number(stringValue) function to explicitly convert a value to a number. If the stringValue is not a valid number, the result of such a conversion is NaN.

Boolean(value) function to explicitly convert value to a boolean.
    alert( Boolean(1) ); // true
    alert( Boolean(0) ); // false
    alert( Boolean("hello") ); // true
    alert( Boolean("") ); // false

## Operators

An operator is unary if it has a single operand. For example, the unary negation - reverses the sign of a number.

An operator is binary if it has two operands. The same minus exists in binary form as well.

Math operators: +, -, *, /, % (reminder), ** (exponential)

If the binary + is applied to strings, it merges (concatenates) them. 

If the unary + is applied to strings, it converts them to a number, just like Number() function

Operator Precedence. If the precedence is the same, the execution order is from left to right:
    unary plus / unary minus
    exponentiation
    multiplication / division
    addition / substraction
    assignment

Chaining assignment evaluate from right to left.

  let a, b, c;
  a = b = c = 2 + 2;

  let a = 5;
  a = a + 2;
  a += 2;

  a = 2 ** 3; // 2 to the power of 3 = 2 * 2 * 2

Modify values in place using shortcut operators: +=, -=, /=, *=

Increment / decrement operators only on variables: ++, --, can be placed either before or after the variable, i.e., prefix or postfix. They have highest precedence than any other operator.

## Comparisions

All comparison operators return a boolean value: >, >=, <, <=, ==, !=

Strings are compared letter by letter in dictionary order. Case matters while comparing strings. for ex., a>A becasue of ascii code of a is greater than A.

When comparing values of different types using ==, javascript converts the value to a numbers. 
For ex.,
  0 == false // true, false converted to 0
  '' == false // true, '' converted to 0, false converted to 0

  0 === false // false

A strict equality operator === checks the equality without type conversion. if a and b are different types then a===b immediately returns false.

There is also a string in-equality operator !== analogus to !=

  null === undefined // false
  null == undefined // true, null becomes 0, undefined becomes NAN

## Conditional branching

The if statement and the conditional operator ?, that’s also called a “question mark” operator, can be used for conditional branching.

The if (…) statement evaluates the expression in its parentheses and converts the result to a boolean.

format:
if() {
    . . .
}
else if() {
    . . . 
}
else {
    . . .
}

if (age<25) {
  // some code
}
 else {

 }

Question mark (ternary - ?;) operator can be used to evaluate simpler expressions:

-3 // unary operator -
2 + 3 // binary operators 
(condition) ? <stmt1 for true> : <stmt2 for false>
(age>25) ? alert('25') : alert('10');

let result = condition ? value1 : value2;

## Logical Operators

There are four logical operators: || (OR), && (AND), ! (NOT), ?? (Nullish Coalescing)

||, && operator evaluate operands from left to right. For each operand, converts it to boolean. 

Precedence: !, &&, ||, ??

true AND true = true
false AND true = false
false and false = false
true AND false = false

true OR true = true
false OR true = true
false OR false = false
true OR false = true

! true = false
! false = true

let age = 35;
if (!(age>25)) {
  alert('hello');
}
else {
  alert('world');
}

Replacing if with && is not a good practice:
let x = 1;
(x > 0) && alert( 'Greater than zero!' );


The newly introduced Nullish Coalescing operator (??) returns the first argument if it’s not null/undefined. Otherwise, the second one.
  a ?? b

ex:
  let user;
  alert(user ?? "anonymous")

We can also use a sequence of ?? to select the first value from a list that isn’t null/undefined.
  fname ?? mname ?? lname ?? "anonymous"

The OR || operator can be used in the same way as ??, it has been there from previously.
  fname || manme || lname || "anonymous"

The difference between || and ?? is: || returns first truthy value where as ?? returns first defined value

JavaScript forbids using ?? together with && and || operators without paranteses. Always use the precedence explicitly when using these operators together.

## Loops

Loops are a way to repeat the same code multiple times - while and for.

while (condition) {
  // code
}

While the condition is truthy, the code from the loop body is executed.

If the loop body has a single statement, we can omit the curly braces {…}:

The condition check can be moved below the loop body using the do..while syntax:

do {
  // loop body, executed atleast once
} while (condition);

The loop will first execute the body, then check the condition, and, while it’s truthy, execute it again and again.

The for loop is more complex, but it’s also the most commonly used loop.

for (begin; condition; step) {
  // ... loop body ...
}

ex: 
for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
  alert(i);
}

Any part of for can be skipped.

for (;;) {
  // repeats without limits, infinity loop
}

The break directive can force the exit at any time during the loop.

The continue directive is a “lighter version” of break. It doesn’t stop the loop. Instead, it stops the current iteration and forces the loop to start a new one (if the condition allows).

The ordinary break would only break the inner loop. Sometimes, that’s not sufficient – labels, come to the rescue!

A label is an identifier with a colon before a loop:

outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    let input = prompt(`Value at coords (${i},${j})`, '');
    // if an empty string or canceled, then break out of both loops
    if (!input) break outer; // (*)
    // do something with the value...
  }
}
alert('Done!');

break/continue support labels before the loop. A label is the only way for break/continue to escape a nested loop to go to an outer one.

## Switch

A switch statement can replace multiple if checks.

It gives a more descriptive way to compare a value with multiple variants.

The switch has one or more case blocks and an optional default.

switch(x) {
  case 'value1':  // if (x === 'value1')
    ...
    [break]

  case 'value2':  // if (x === 'value2')
    ...
    [break]

  default:
    ...
    [break]
}

The value of x is checked for a strict equality to the value from the first case (that is, value1) then to the second (value2) and so on.

If there is no break then the execution continues with the next case without any checks.

Both switch and case allow arbitrary expressions.

switch (+a) {
  case b + 1:
    alert("this runs, because +a is 1, exactly equals b+1");
    break;

Several variants of case which share the same code can be grouped.

  case 3: // (*) grouped two cases
  case 5:
    alert('Wrong!');
    alert("Why don't you take a math class?");
    break;

## Functions

Functions are the main “building blocks” of the program. They allow the code to be called many times without repetition.

The function keyword goes first, then goes the name of the function, then a list of parameters between the parentheses (comma-separated, empty in the example above) and finally the code of the function, also named “the function body”, between curly braces.

function name(parameters) {
  ...body...
}

### Local Variable

A variable declared inside a function is only visible inside that function.

<script lang="javascript">
let a = 2;
let b = 3;

function sum() {
  let a2 = 5;
  let b2 = 6;

  a = 4;

  let result=a+b;

  return result;
}

alert(a); // 2
alert(sum()); //7
alert(a); // 4

</script>



### Global / Outer variables

The function has full access to the outer variable. It can modify it as well.

The outer variable is only used if there’s no local one.

If a same-named variable is declared inside the function then it shadows the outer one. For instance, in the code below the function uses the local userName. The outer one is ignored:

### Parameters

We can pass arbitrary data to functions using parameters (also called function arguments) .

Function parameter values can be changed inside the function just like any local variable. 
But the change is not seen outside, because a function always gets a copy of the value.

If a parameter is not provided, then its value becomes undefined. 

for ex., 

showNames(fname, lname) {
    alert(fname + " " + lname);
}

showNames("Sri", "Y")
showNames("Sri")

We can specify default values to arguments when a value is not provide using "=" in function declaration.

We can also assign a function to a function parameter.

function showNames(fname, lname = "Yala") {
  alert(fname + " " + lname);
}

showNames("Sri", "Y"); // Sri Y
showNames("Sri"); // Sri Yala

function showNames(fname, lname = anotherFunction()) {
  // anotherFunction() only executed if no text given
  // its result becomes the value of text
  alert(fname + " " + lname);
}

function hello(name) {
  alert("Hello " + name);
}

let sayHello = hello; // assign function to a variable

hello("Sri"); // Hello Sri
sayHello("abc"); // Hello abc 

### Returning a value

A function can return a value back into the calling code as the result.

If a function does not return a value, it is the same as if it returns undefined:

An empty return is also the same as return undefined:

Never add a newline between return and the value

Functions are actions. So their name is usually a verb. 

function add(num1, num2) {
  return num1+num2;
}

function substract(num1, num2) {
  return num1-num2;
}

function multiply(num1, num2) {
  if(num1==0 || num2==0) { // false OR true = true
    return 0;
  }
  return num1*num2; // 2*3
}

let total = add(2, 3); // total=5
let diff = substract(4, 1); // diff=3

let mul1 = multiply(2, 3); // mul1=6
let mul2 = multiply(3, 0); // mul2=0

### Function expressions

A Function Expression is a function created and assigned to the variable explicitly, like any other value. No matter how the function is defined, it’s just a value stored in the variable.


function sayHi() {
  alert("Hello);
}

let sayHi = function() {
  alert( "Hello" );
};

let sayHello = sayHi;

sayHi();
sayHello();

A semicolon at the end of the line while assinging a function to a variable, is used to end the statement just like any assignment to a variable.

### Callback Functions

The idea is that we pass a function and expect it to be “called back” later if necessary. 

For ex.,

function ask(question, yes, no) {
  if (confirm(question)) 
    yes()
  else 
    no();
}

function showOk() {   // 0 parameter, showOk, alert
  alert( "You agreed." );
}

function showCancel() { // showCancel, 0 paramerters, alert
  alert( "You canceled the execution." );
}

// usage: functions showOk, showCancel are passed as arguments to ask
ask("Do you agree?", showOk, showCancel); // 3 parameters, queston="Do you agree?", yes=showOk (function), no=showCancel (function)

or

ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);

In above example, functions are declared right inside the ask(...) call. They have no name, and so are called anonymous. Such functions are not accessible outside of ask


A Function Expression is created when the execution reaches it and is usable only from that moment.

Once the execution flow passes to the right side of the assignment let sum = function… – here we go, the function is created and can be used (assigned, called, etc. ) from now on.

Function Declarations are different. A Function Declaration can be called earlier than it is defined.

For example, a global Function Declaration is visible in the whole script, no matter where it is.

That’s due to internal algorithms. When JavaScript prepares to run the script, it first looks for global Function Declarations in it and creates the functions. We can think of it as an “initialization stage”.

And after all Function Declarations are processed, the code is executed. So it has access to these functions.

In strict mode, when a Function Declaration is within a code block, it’s visible everywhere inside that block. But not outside of it.

### Arrow Functions

Another very simple and concise syntax for creating functions, that’s often better than Function Expressions, called Arrow Functions.

let func = (arg1, arg2, ..., argN) => expression

Ex., let sum = (a, b) => a + b;

is same as 

function sum(a, b) {
  return a+b;
}

function isGreater(a,b) {
  if (a>b)
    return a;
  else
    return b;
}

let isGreater = (a, b) => {
  if (a>b)
    return a;
  else
    return b;
}

function sayHello() {
  alert("Hello World");
}

let sayHello = () => alert("Hello World");

If we have only one argument, then parentheses around parameters can be omitted, making that even shorter.
If there are no arguments, parentheses will be empty (but they should be present):

We can use brackets to write multiple statements inside the function, but we need an explicit return to return something.

## Debugging in Chrome

Debugging is the process of finding and fixing errors within a script. All modern browsers and most other environments support debugging tools – a special UI in developer tools that makes debugging much easier.

Right-click on any page and open Developer Tools

Sources panel has 3 parts - File Navigator, Code Editor and JS Debuggin
Console panel - we can type the commands and execute by pressing enter

Breakpoints - In the sources code editor panel, click on any line number to add a break point

A breakpoint is a point of code where the debugger will automatically pause the JavaScript execution.

While the code is paused, we can examine current variables, execute commands in the console etc. In other words, we can debug it.

Righ click on the line to create conditional break points. It only triggers when the given condition is true

We can also pause the code by typing "debugger;" statement.

When the execution/control stops at a break point - You can look at different panels - 
    Watch: shows current value of any expression
    Call Stack: Shows nested calls chain
    Scope: current variables

Use console.log() statement to print messages into browser console.

## Code Style - Linters

Linters are tools that can automatically check the style of your code and make improving suggestions.

The great thing about them is that style-checking can also find some bugs, like typos in variable or function names.

Linting tools - JSLint, JSHint, ESLint

## Automated testing

Automated testing means that tests are written separately, in addition to the code. They run our functions in various ways and compare results with the expected.

BDD (Behavior Driven Development) is three things in one: tests, documentation and examples

describe("pow", function() {

  it("raises to n-th power", function() {
    assert.equal(pow(2, 3), 8);
  });

});

3 main blocks:

  describe("title", function() { ... })
  it("use case description", function() { ... })
  assert.equal(value1, value2)

the following JavaScript libraries are used for tests:

Mocha – the core framework: it provides common testing functions including describe and it and the main function that runs tests.
Chai – the library with many assertions. It allows to use a lot of different assertions
Sinon – a library to spy over functions, emulate built-in functions and more

We can setup before/after functions that execute before/after running tests, and also beforeEach/afterEach functions that execute before/after every it.

for ex.,

describe("test", function() {

  before(() => alert("Testing started – before all tests"));
  after(() => alert("Testing finished – after all tests"));

  beforeEach(() => alert("Before a test – enter a test"));
  afterEach(() => alert("After a test – exit a test"));

  it('test 1', () => alert(1));
  it('test 2', () => alert(2));

});


## Objects

<<<<<<< HEAD
## Prototypes, Inheritance
=======
Objects are used to store keyed collections of various data and more complex entities. 

An object can be created with figure brackets {…} with an optional list of properties. A property is a “key: value” pair, where key is a string (also called a “property name”), and value can be anything.

let user = new Object(); // "object constructor" syntax
let user = {};  // "object literal" syntax

let user = {     // an object
  name: "John",  // by key "name" store value "John"
  age: 30        // by key "age" store value 30
};

Property values are accessible using the dot notation:

// get property values of the object:
alert( user.name ); // John
alert( user.age ); // 30

To remove a property, we can use delete operator:

delete user.age;

We can also use multiword property names, but then they must be quoted:

let user = {
  name: "John",
  age: 30,
  "likes birds": true  // multiword property name must be quoted
};

The last property in the list may end with a comma:

let user = {
  name: "John",
  age: 30,
}

For multiword properties, the dot access doesn’t work:

// set
user["likes birds"] = true;

// get
alert(user["likes birds"]); // true


We can use square brackets in an object literal, when creating an object. That’s called computed properties.


let fruit = prompt("Which fruit to buy?", "apple");

let bag = {
  [fruit]: 5, // the name of the property is taken from the variable fruit
};

alert( bag.apple ); // 5 if fruit="apple"

A special operator "in" can be used to check if a property exist in an object

let user = { age: 30 };

let key = "age";
alert( key in user ); // true, property "age" exists

### For IN Loop

let user = {
  name: "John",
  age: 30,
  isAdmin: true
};

for (let key in user) {
  // keys
  alert( key );  // name, age, isAdmin
  // values for the keys
  alert( user[key] ); // John, 30, true
}

### Object References

One of the fundamental differences of objects versus primitives is that objects are stored and copied “by reference”, whereas primitive values: strings, numbers, booleans, etc – are always copied “as a whole value”.


A variable assigned to an object stores not the object itself, but its “address in memory” – in other words “a reference” to it.

When an object variable is copied, the reference is copied, but the object itself is not duplicated.

When an object variable is copied, the reference is copied, but the object itself is not duplicated.

### Comparision by reference

Two objects are equal only if they are the same object.

let a = {};
let b = a; // copy the reference

alert( a == b ); // true, both variables reference the same object
alert( a === b ); // true

let a = {};
let b = {}; // two independent objects

alert( a == b ); // false

We can clone and create a new object from existing objects using the syntax:

Object.assign(dest, [src1, src2, src3...])

let user = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// copies all properties from permissions1 and permissions2 into user
Object.assign(user, permissions1, permissions2);

// now user = { name: "John", canView: true, canEdit: true }


There are also other methods of cloning an object, i.e., using the spread syntax 
clone = {...user}.

### Memory management

There’s a background process in the JavaScript engine that is called garbage collector. It monitors all objects and removes those that have become unreachable.

Garbage collection is performed automatically. We cannot force or prevent it.

Being referenced is not the same as being reachable (from a root): a pack of interlinked objects can become unreachable as a whole.

### Object methods

Ex.
let user = {
  name: "John",
  age: 30
};

user.sayHi = function() {
  alert("Hello!");
};

user.sayHi(); // Hello!

A function that is a property of an object is called its method.

let user = {
  // ...
};

// first, declare
function sayHi() {
  alert("Hello!");
};

// then add as a method
user.sayHi = sayHi;

user.sayHi(); // Hello!

Method shorthands:

// these objects do the same

user = {
  sayHi: function() {
    alert("Hello");
  }
};

// method shorthand looks better, right?
user = {
  sayHi() { // same as "sayHi: function()"
    alert("Hello");
  }
};

### this keyword

To access the object, a method can use the this keyword.

let user = {
  name: "John",
  age: 30,

  sayHi() {
    // "this" is the "current object"
    alert(this.name); // it can also be user.name
  }

};

user.sayHi(); // John

In JavaScript, keyword this can be used in any function, even if it’s not a method of an object.

The value of this is evaluated during the run-time, depending on the context.

function sayHi() {
  alert(this);
}

sayHi(); // undefined

Arrow functions are special: they don’t have their “own” this. If we reference this from such a function, it’s taken from the outer “normal” function.

let user = {
  firstName: "Ilya",
  sayHi() {
    let arrow = () => alert(this.firstName);
    arrow();
  }
};

user.sayHi(); // Ilya


### Constructor, "new"

The regular {...} syntax allows to create one object. But often we need to create many similar objects, like multiple users or menu items and so on.

Constructor functions technically are regular functions. There are two conventions though:

  - They are named with capital letter first.
  - They should be executed only with "new" operator.

function User(name) {
  this.name = name;
  this.isAdmin = false;
}

let user = new User("Jack");

alert(user.name); // Jack
alert(user.isAdmin); // false

When a function is executed with new, it does the following steps:

  - A new empty object is created and assigned to this.
  - The function body executes. Usually it modifies this, adds new properties to it.
  - The value of this is returned.

new User(...) does something like:

function User(name) {
  // this = {};  (implicitly)

  // add properties to this
  this.name = name;
  this.isAdmin = false;

  // return this;  (implicitly)
}

So let user = new User("Jack") gives the same result as:

let user = {
  name: "Jack",
  isAdmin: false
};


#### new function() { … }
If we have many lines of code all about creation of a single complex object, we can wrap them in constructor function, like this:

let user = new function() {
  this.name = "John";
  this.isAdmin = false;

  // ...other code for user creation
  // maybe complex logic and statements
  // local variables etc
};

The constructor can’t be called again, because it is not saved anywhere, just created and called. So this trick aims to encapsulate the code that constructs the single object, without future reuse.

Inside a function, we can check whether it was called with new or without it, using a special new.target property.

function User() {
  alert(new.target);
}

// without "new":
User(); // undefined

// with "new":
new User(); // function User { ... }

#### Return from constructors
Usually, constructors do not have a return statement. Their task is to write all necessary stuff into this, and it automatically becomes the result.

But if there is a return statement, then the rule is simple:
  - If return is called with an object, then the object is returned instead of this.
  - If return is called with a primitive, it’s ignored.
  - In other words, return with an object returns that object, in all other cases this is returned.

For instance, here return overrides this by returning an object

function BigUser() {

  this.name = "John";

  return { name: "Godzilla" };  // <-- returns this object
}

alert( new BigUser().name );  // Godzilla, got that object

We can omit parentheses after new, if it has no arguments.

let user = new User; // <-- no parentheses

We can also add to this not only properties, but methods as well.

function User(name) {
  this.name = name;

  this.sayHi = function() {
    alert( "My name is: " + this.name );
  };
}

let john = new User("John");

john.sayHi(); // My name is: John

### Optional chaining

The optional chaining ?. stops the evaluation if the value before ?. is undefined or null and returns undefined.

value?.prop means:

  - works as value.prop, if value exists,
  - otherwise (when value is undefined/null) it returns undefined.

let user = {}; // user has no address

alert( user?.address?.street ); // undefined (no error)

?.() is used to call a function that may not exist.

let userAdmin = {
  admin() {
    alert("I am admin");
  }
};

let userGuest = {};
userAdmin.admin?.(); // I am admin
userGuest.admin?.(); // nothing (no such method)

The ?.[] syntax also works, if we’d like to use brackets [] to access properties instead of dot .

let key = "firstName";

let user1 = {
  firstName: "John"
};

let user2 = null;
alert( user1?.[key] ); // John
alert( user2?.[key] ); // undefined

Also we can use ?. with delete:

delete user?.name; // delete user.name if user exists

We can use ?. for safe reading and deleting, but not writing

## Symbols

A “symbol” represents a unique identifier.

A value of this type can be created using Symbol():

// id is a new symbol
let id = Symbol();

// id is a symbol with the description "id"
let id = Symbol("id");

Most values in JavaScript support implicit conversion to a string. Symbols are special. They don’t auto-convert.

alert(id); // TypeError: Cannot convert a Symbol value to a string
alert(id.toString()); // Symbol(id), now it works
alert(id.description); // id

Symbols allow us to create “hidden” properties of an object, that no other part of code can accidentally access or overwrite.

For instance, if we’re working with user objects, that belong to a third-party code. We’d like to add identifiers to them.

let user = { // belongs to another code
  name: "John"
};

let id = Symbol("id");

user[id] = 1;
alert( user[id] ); // we can access the data using the symbol as the key

### Object to Primitive conversion
>>>>>>> e4233ebd06e614d57a0ea9ea6b5098bf5da9385b

We can fine-tune string and numeric conversion, using special object methods.

For an object-to-string conversion, when we’re doing an operation on an object that expects a string, like alert:

// output
alert(obj);

// using object as a property key
anotherObj[obj] = 123;

For an object-to-number conversion, like when we’re doing maths:

// explicit conversion
let num = Number(obj);

// maths (except binary plus)
let n = +obj; // unary plus
let delta = date1 - date2;

// less/greater comparison
let greater = user1 > user2;

To do the conversion, JavaScript tries to find and call three object methods:

  - Call obj[Symbol.toPrimitive](hint) – the method with the symbolic key Symbol.toPrimitive (system symbol), if such method exists,
  - Otherwise if hint is "string"
    try obj.toString() and obj.valueOf(), whatever exists.
  - Otherwise if hint is "number" or "default"
    try obj.valueOf() and obj.toString(), whatever exists.

Ex:
let user = {
  name: "John",
  money: 1000,

  [Symbol.toPrimitive](hint) {
    alert(`hint: ${hint}`);
    return hint == "string" ? `{name: "${this.name}"}` : this.money;
  }
};

// conversions demo:
alert(user); // hint: string -> {name: "John"}
alert(+user); // hint: number -> 1000
alert(user + 500); // hint: default -> 1500

By default, a plain object has following toString and valueOf methods:

The toString method returns a string "[object Object]".
The valueOf method returns the object itself.

let user = {name: "John"};

alert(user); // [object Object]
alert(user.valueOf() === user); // true

Ex:
let user = {
  name: "John",
  money: 1000,

  // for hint="string"
  toString() {
    return `{name: "${this.name}"}`;
  },

  // for hint="number" or "default"
  valueOf() {
    return this.money;
  }

};

alert(user); // toString -> {name: "John"}
alert(+user); // valueOf -> 1000
alert(user + 500); // valueOf -> 1500

## Arrays

Objects allow you to store keyed collections of values. That’s fine.

But quite often we find that we need an ordered collection, where we have a 1st, a 2nd, a 3rd element and so on. 

There are two syntaxes for creating an empty array:

let arr = new Array();
let arr = [];

let fruits = ["Apple", "Orange", "Plum"];
alert( fruits[0] ); // Apple
alert( fruits[1] ); // Orange
alert( fruits[2] ); // Plum

fruits[2] = 'Pear'; // now ["Apple", "Orange", "Pear"]
alert( fruits.length ); // 3

// mix of values
let arr = [ 'Apple', { name: 'John' }, true, function() { alert('hello'); } ];

// get the object at index 1 and then show its name
alert( arr[1].name ); // John

// get the function at index 3 and run it
arr[3](); // hello

An array, just like an object, may end with a comma:

The “trailing comma” style makes it easier to insert/remove items, because all lines become alike.

A queue is one of the most common uses of an array. In computer science, this means an ordered collection of elements which supports two operations: 
  push appends an element to the end.
  shift get an element from the beginning, advancing the queue, so that the 2nd element becomes the 1st.

Arrays support both operations.

In practice we need it very often. For example, a queue of messages that need to be shown on-screen.

There’s another use case for arrays – the data structure named stack.

It supports two operations:

push adds an element to the end.
pop takes an element from the end.

For stacks, the latest pushed item is received first, that’s also called LIFO (Last-In-First-Out) principle. For queues, we have FIFO (First-In-First-Out).

LIFO Ex:

let fruits = ["Apple", "Orange", "Pear"];
alert( fruits.pop() ); // remove "Pear" and alert it
alert( fruits ); // Apple, Orange
fruits.push("Pear");
alert( fruits ); // Apple, Orange, Pear

fruits.push(...) is equal to fruits[fruits.length] = ...

FIFO Ex:

let fruits = ["Apple", "Orange", "Pear"];
alert( fruits.shift() ); // remove Apple and alert it
alert( fruits ); // Orange, Pear


let fruits = ["Orange", "Pear"];
fruits.unshift('Apple');
alert( fruits ); // Apple, Orange, Pear

Methods push and unshift can add multiple elements at once.

Methods push/pop run fast, while shift/unshift are slow.

Looping through the elements in array:

Older for loop:
let arr = ["Apple", "Orange", "Pear"];
for (let i = 0; i < arr.length; i++) {
  alert( arr[i] );
}

New for..of loop:

let fruits = ["Apple", "Orange", "Plum"];
// iterates over array elements
for (let fruit of fruits) {
  alert( fruit );
}

OR for..in loop:

let arr = ["Apple", "Orange", "Pear"];
for (let key in arr) {
  alert( arr[key] ); // Apple, Orange, Pear
}


The arr.splice array method can do everything: insert, remove and replace elements.

let arr = ["I", "study", "JavaScript"];
let removed = arr.splice(1, 1); // from index 1 remove 1 element
alert( arr ); // ["I", "JavaScript"]
alert( removed); // ["study"]

let arr = ["I", "study", "JavaScript", "right", "now"];
// remove 3 first elements and replace them with another
arr.splice(0, 3, "Let's", "dance");
alert( arr ) // now ["Let's", "dance", "right", "now"]

the arr.slice returns a new array copying to it all items from index start to end (not including end). Both start and end can be negative, in that case position from array end is assumed.

let arr = ["t", "e", "s", "t"];
alert( arr.slice(1, 3) ); // e,s (copy from 1 to 3)
alert( arr.slice(-2) ); // s,t (copy from -2 till the end)

## Error Handling

There’s a syntax construct try...catch that allows us to “catch” errors so the script can, instead of dying, do something more reasonable.

try {
  // code...
} catch (err) {
  // error handling
}

try {
  alert('Start of try runs');  // (1) <--
  lalala; // error, variable is not defined!
  alert('End of try (never reached)');  // (2)
} catch (err) {
  alert(`Error has occurred!`); // (3) <--
}

When an error occurs, JavaScript generates an object containing the details about it. The object is then passed as an argument to catch:

The error object has two main properties: name and message

There are other non-standard properties available in most environments. One of most widely used and supported is: stack

We can also throw error in the code using "throw" statement.

Ex:

let json = '{ "age": 30 }'; // incomplete data

try {
  let user = JSON.parse(json); // <-- no errors
  if (!user.name) {
    throw new SyntaxError("Incomplete data: no name"); // (*)
  }
  alert( user.name );
} catch (err) {
  alert( "JSON Error: " + err.message ); // JSON Error: Incomplete data: no name
}

The finally clause is often used when we start doing something and want to finalize it in any case of outcome.

try {
   ... try to execute the code ...
} catch (err) {
   ... handle errors ...
} finally {
   ... execute always ...
}

In the browser we can assign a function to the special window.onerror property, that will run in case of an uncaught error.

window.onerror = function(message, url, line, col, error) {
  // ...
};

## Multi Tasking - Promises, Async/Await

A promise is a special JavaScript object that links the “producing code” and the “consuming code” together. In terms of our analogy: this is the “subscription list”. The “producing code” takes whatever time it needs to produce the promised result, and the “promise” makes that result available to all of the subscribed code when it’s ready.

let promise = new Promise(function(resolve, reject) {
  // executor (the producing code, "singer")
});

Arguments resolve and reject are callbacks provided by JavaScript.

When the executor obtains the result, be it soon or late, doesn’t matter, it should call one of these callbacks:

resolve(value) — if the job finished successfully, with result value.
reject(error) — if an error occurred, error is the error object.

The promise object returned by the new Promise constructor has these internal properties:

state — initially "pending", then changes to either "fulfilled" when resolve is called or "rejected" when reject is called.
result — initially undefined, then changes to value when resolve(value) called or error when reject(error) is called.

Producer:

let promise = new Promise(function(resolve, reject) {
  // the function is executed automatically when the promise is constructed

  // after 1 second signal that the job is done with the result "done"
  setTimeout(() => resolve("done"), 1000);

  OR 

  // after 1 second signal that the job is finished with an error
  setTimeout(() => reject(new Error("Whoops!")), 1000);
});

Consumer:

// resolve runs the first function in .then
promise.then(
  result => alert(result), // shows "done!" after 1 second
  error => alert(error) // doesn't run
);

// .catch(f) is the same as promise.then(null, f)
promise.catch(alert); // shows "Error: Whoops!" after 1 second


The word “async” before a function means one simple thing: a function always returns a promise. Other values are wrapped in a resolved promise automatically.

async function f() {
  return 1;
}

f().then(alert); // 1

The keyword await makes JavaScript wait until that promise settles and returns its result.

async function f() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000)
  });

  let result = await promise; // wait until the promise resolves (*)

  alert(result); // "done!"
}

f();

await won’t work in the top-level code

## Modules

