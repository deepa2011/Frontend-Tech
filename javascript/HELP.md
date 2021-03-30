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