# NodeJS

## HTTP Methods

Browser -> request (URL) -> Server
Browser <- response (HTMLBody) <- Server

GET  - Gets the data from the server (pass parameters to server, but limited in size)
POST - Create Records
PUT  - Update Record
DELETE - Delete a Record
PATCH
OPTIONS

## Installation

Official packages for all the major platforms are available at https://nodejs.org/en/download/.

On macOS, Homebrew is the de-facto standard, and - once installed - allows you to install Node.js very easily, by running this command in the CLI:

brew install node

nvm is a popular way to run Node.js. It allows you to easily switch the Node.js version, and install new versions to try and easily rollback if something breaks, for example.

See https://github.com/nvm-sh/nvm for more information about this option.

When Node.js is installed you'll have access to the node executable program in the command line.

## Libraries

Express: It provides one of the most simple yet powerful ways to create a web server. Its minimalist approach, unopinionated, focused on the core features of a server, is key to its success.

## JavaScript

Both the browser and Node.js use JavaScript as their programming language.

In the browser, most of the time what you are doing is interacting with the DOM, or other Web Platform APIs like Cookies. Those do not exist in Node.js, of course. You don't have the document, window and all the other objects that are provided by the browser.


## Console

### The _ special variable
If after some code you type _, that is going to print the result of the last operation.

### Dot commands
The REPL has some special commands, all starting with a dot .. They are

.help: shows the dot commands help
.editor: enables editor mode, to write multiline JavaScript code with ease. Once you are in this mode, enter ctrl-D to run the code you wrote.
.break: when inputting a multi-line expression, entering the .break command will abort further input. Same as pressing ctrl-C.
.clear: resets the REPL context to an empty object and clears any multi-line expression currently being input.
.load: loads a JavaScript file, relative to the current working directory
.save: saves all you entered in the REPL session to a file (specify the filename)
.exit: exits the repl (same as pressing ctrl-C two times)

### Multi-line editor

The REPL knows when you are typing a multi-line statement without the need to invoke .editor.

For example if you start typing an iteration like this:

[1, 2, 3].forEach(num => {
and you press enter, the REPL will go to a new line that starts with 3 dots, indicating you can now continue to work on that block.

... console.log(num)
... })
If you type .break at the end of a line, the multiline mode will stop and the statement will not be executed.

### Arguments

node app.js joe

or 

node app.js name=joe

The way you retrieve it is using the process object built into Node.js.

It exposes an argv property, which is an array that contains all the command line invocation arguments.

The first element is the full path of the node command.

The second element is the full path of the file being executed.

All the additional arguments are present from the third position going forward.

You can iterate over all the arguments (including the node path and the file path) using a loop:

process.argv.forEach((val, index) => {
  console.log(`${index}: ${val}`)
})

You can get only the additional arguments by creating a new array that excludes the first 2 params:

> node app.js joe

app.js: const args = process.argv.slice(2)

> node app.js name=joe

args[0] is name=joe, and you need to parse it. The best way to do so is by using the minimist library, which helps dealing with arguments:

app.js: 
const args = require('minimist')(process.argv.slice(2))
args['name'] //joe

node app.js --name=joe


### Console Module

Node.js provides a console module which provides tons of very useful ways to interact with the command line.

It is basically the same as the console object you find in the browser.

he most basic and most used method is console.log(), which prints the string you pass to it to the console.

If you pass an object, it will render it as a string.

const x = 'x'
const y = 'y'
console.log(x, y)

console.log('My %s has %d years', 'cat', 2)

%s format a variable as a string
%d format a variable as a number
%i format a variable as its integer part only
%o format a variable as an object

console.clear() clears the console
console.count() will count the number of times a string is printed, and print the count next to it.

const oranges = ['orange', 'orange']
const apples = ['just one apple']
oranges.forEach(fruit => {
  console.count(fruit)
})
apples.forEach(fruit => {
  console.count(fruit)
})

console.trace() to print the call stack trace of a function

const function2 = () => console.trace()
const function1 = () => function2()
function1()

console.time() and timeEnd() can be used to calculate how much time a function takes to run

const doSomething = () => console.log('test')
const measureDoingSomething = () => {
  console.time('doSomething()')
  //do something, and measure the time it takes
  doSomething()
  console.timeEnd('doSomething()')
}
measureDoingSomething()

console.log prints to the standard output, or stdout.

console.error prints to the stderr stream.

### Progress Bar in Console

Progress is an awesome package to create a progress bar in the console.

npm install progress

const ProgressBar = require('progress')

const bar = new ProgressBar(':bar', { total: 10 })
const timer = setInterval(() => {
  bar.tick()
  if (bar.complete) {
    clearInterval(timer)
  }
}, 100)

### Accept input from console

readline module can be used to get input from a readable stream such as the process.stdin stream

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question(`What's your name?`, name => {
  console.log(`Hi ${name}!`)
  readline.close()
})

## Exports

Node.js has a built-in module system.

A Node.js file can import functionality exposed by other Node.js files.

When you want to import something you use

const library = require('./library')

In this file, functionality must be exposed before it can be imported by other files.

Any other object or variable defined in the file by default is private and not exposed to the outer world.

This is what the module.exports API offered by the module system allows us to do.

// car.js
const car = {
  brand: 'Ford',
  model: 'Fiesta'
}

module.exports = car 
(OR)
exports.car = car


// index.js
const car = require('./car')

The difference between module.exports and exports?

The first exposes the object it points to. The latter exposes the properties of the object it points to.

## NPM

npm is the standard package manager for Node.js.

npm manages downloads of dependencies of your project.

npm install
it will install everything the project needs, in the node_modules folder, creating it if it's not existing already.

npm install <package-name>

will install a single package

Below flags added to this command:

--save installs and adds the entry to the package.json file dependencies
--save-dev installs and adds the entry to the package.json file devDependencies
The difference is mainly that devDependencies are usually development tools, like a testing library, while dependencies are bundled with the app in production.

npm update
npm update package-name

will update npm packages

The package.json file supports a format for specifying command line tasks that can be run by using

npm run <task-name>

{
  "scripts": {
    "start-dev": "node lib/server-development",
    "start": "node lib/server-production"
  }
}

{
  "scripts": {
    "watch": "webpack --watch --progress --colors --config webpack.conf.js",
    "dev": "webpack --progress --colors --config webpack.conf.js",
    "prod": "NODE_ENV=production webpack -p --config webpack.conf.js",
  }
}

$ npm run watch
$ npm run dev
$ npm run prod





