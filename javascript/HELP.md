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

## Interaction: alert, prompt, confirm

alert shows a message and waits for the user to press “OK”.
  alert("hello")

prompt accepts two arguments: title and default value for input field
  result = prompt(title, [default]);
  result = prompt("How old are you?", 100);

confirm shows a modal window with a question and two buttons: OK and Cancel.
  result = confirm(question);
The result is true if OK is pressed and false otherwise.


  let isBoss = confirm("Are you ok to exit?");


## Type Conversions

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

Modify values in place using shortcut operators: +=, -=, /=, *=

Increment / decrement operators only on variables: ++, --, can be placed either before or after the variable, i.e., prefix or postfix. They have highest precedence than any other operator.

## Comparisions

All comparison operators return a boolean value: >, >=, <, <=, ==, !=

Strings are compared letter by letter in dictionary order. Case matters while comparing strings. for ex., a>A becasue of ascii code of a is greater than A.

When comparing values of different types using ==, javascript converts the value to a numbers. 
For ex.,
  0 == false // true, false converted to 0
  '' == false // true, '' converted to 0, false converted to 0

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

Question mark (ternary) operator can be used to evaluate simpler expressions:

let result = condition ? value1 : value2;

## Logical Operators

There are four logical operators: || (OR), && (AND), ! (NOT), ?? (Nullish Coalescing)

||, && operator evaluate operands from left to right. For each operand, converts it to boolean. 

Precedence: !, &&, ||, ??

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

function showNames(fname, lname = anotherFunction()) {
  // anotherFunction() only executed if no text given
  // its result becomes the value of text
  alert(fname + " " + lname);
}

### Returning a value

A function can return a value back into the calling code as the result.

If a function does not return a value, it is the same as if it returns undefined:

An empty return is also the same as return undefined:

Never add a newline between return and the value

Functions are actions. So their name is usually a verb. 

### Function expressions

A Function Expression is a function created and assigned to the variable explicitly, like any other value. No matter how the function is defined, it’s just a value stored in the variable.

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

function showOk() {
  alert( "You agreed." );
}

function showCancel() {
  alert( "You canceled the execution." );
}

// usage: functions showOk, showCancel are passed as arguments to ask
ask("Do you agree?", showOk, showCancel);

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



## Prototypes, Inheritance

## Classes

## Error Handling

## Multi Tasking - Promises, Async/Await

## Modules

