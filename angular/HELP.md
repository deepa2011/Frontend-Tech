# Angular

## Prerequisites

NodeJS
NPM

## Angular Client

Install Angular client (ng)
    npm install -g @angular/cli

Create new app
    ng new my-app

Run the app
    cd my-app
    ng serve --open

ng serve command launches the server, watches your files, and rebuilds the app as you make changes to those files.
--open (or just -o) option automatically opens your browser to http://localhost:4200/

## Overview
Angular is a platform and framework for building single-page client applications using HTML and TypeScript. Angular is written in TypeScript.

The basic building blocks of the Angular framework are Angular components that are organized into NgModules.

NgModules collect related code into functional sets

Angular app is defined by a set of NgModules. An app always has at least a root module that enables bootstrapping, and typically has many more feature modules.

Components define views, 

Components use services, which provide specific functionality not directly related to views. 

Angular NgModules differ from and complement JavaScript (ES2015) modules.

An NgModule can associate its components with related code, such as services, to form functional units.

Every Angular app has a root module, conventionally named AppModule, which provides the bootstrap mechanism that launches the application. An app typically contains many functional modules.

Like JavaScript modules, NgModules can import functionality from other NgModules, and allow their own functionality to be exported and used by other NgModules. 

## Components

Every Angular application has at least one component, the root component that connects a component hierarchy with the page document object model (DOM).

Each component defines a class that contains application data and logic, and is associated with an HTML template that defines a view to be displayed in a target environment.

The @Component() decorator identifies the class immediately below it as a component, and provides the template and related component-specific metadata.

Decorators are functions that modify JavaScript classes. Angular defines a number of decorators that attach specific kinds of metadata to classes, so that the system knows what those classes mean and how they should work.

## Templates

A template combines HTML with Angular markup that can modify HTML elements before they are displayed. Template directives provide program logic, and binding markup connects your application data and the DOM. There are two types of data binding:

    Event binding lets your app respond to user input in the target environment by updating your application data.
    Property binding lets you interpolate values that are computed from your application data into the HTML.

Angular supports two-way data binding, meaning that changes in the DOM, such as user choices, are also reflected in your program data.

Your templates can use pipes to improve the user experience by transforming values for display. For example, use pipes to display dates and currency values that are appropriate for a user's locale.

## Services

For data or logic that isn't associated with a specific view, and that you want to share across components, you create a service class. A service class definition is immediately preceded by the @Injectable() decorator.

Dependency injection (DI) lets you keep your component classes lean and efficient. They don't fetch data from the server, validate user input, or log directly to the console; they delegate such tasks to services.

## Routing

The Angular Router NgModule provides a service that lets you define a navigation path among the different application states and view hierarchies in your app.

The router maps URL-like paths to views instead of pages. When a user performs an action, such as clicking a link, that would load a new page in the browser, the router intercepts the browser's behavior, and shows or hides view hierarchies.

If the router determines that the current application state requires particular functionality, and the module that defines it hasn't been loaded, the router can lazy-load the module on demand.

## Views

Together, a component and template define an Angular view.

The dependency injector provides services to a component, such as the router service that lets you define navigation among views.
