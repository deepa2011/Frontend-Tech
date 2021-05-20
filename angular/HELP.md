# Angular

## Prerequisites

NodeJS
NPM

## Angular Client

Install Angular client (ng)
    npm install -g @angular/cli
    ng --version

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

## Commands

Create new project 

> ng new angular-proj1

> cd angular-proj1
> ng serve --open

Create new component

> ng generate component users

Create new service

> ng generate service user

Create new module

> ng generate module my-module --routing

Refactor routing configuration into a routing module

> ng generate module app-routing --module app --flat


Creae new web worker

> ng generate web-worker app


## Directives

1. The double curly ("{{" and "}}") braces are Angular's interpolation binding syntax. This interpolation binding presents the variable value inside the HTML header tag.

2. The ngOnInit() is a lifecycle hook. Angular calls ngOnInit() shortly after creating a component. It's a good place to put initialization logic.

3. @Component is a decorator function that specifies the Angular metadata for the component.

4. <app-some_custom_component> is the element selector for some component

5. The pipe operator ( | ), activates built-in UppercasePipe. Pipes are a good way to format strings, currency amounts, dates and other display data. Angular ships with several built-in pipes and we can create our own.

    ex: <h2>{{user.name | uppercase}}</h2>

6. [(ngModel)] is Angular's two-way data binding syntax. It belongs to the optional FormsModule and you must import to using it.

    ex: <input id="name" [(ngModel)]="user.name" placeholder="name">

7. Angular needs to know how the pieces of your application fit together and what other files and libraries the app requires. This information is called metadata.

    Some of the metadata is in the @Component decorators that you added to your component classes. Other critical metadata is in @NgModule decorators.

    The most important @NgModule decorator annotates the top-level AppModule class.

8. Every component must be declared in exactly one NgModule.

9. *ngFor is Angular's repeater directive. It repeats the host element for each element in a list.

    <li *ngFor="let user of users">

10. Click event binding can be performed using "(click)". The parentheses around click tell Angular to listen for the <li> element's click event
    <li *ngFor="let user of users" (click)="onSelect(user)">

11. Angular's class binding can add and remove a CSS class conditionally. Just add [class.some-css-class]="some-condition" to the element you want to style.
    [class.selected]="user === selectedUser"

12. *ngIf is Angular's conditional directive to conditionally include or exclude a block of HTML.

13. @Input decorator to make the a property available for binding by an external component, i.e., Master-Detail components, where master components passes an object to child component.

    We can use property binding "[property_name]" to pass the value to property

    Ex: in user master component:
        <app-user-detail [user]="selectedUser"></app-user-detail>

        in user detail component:
        export class UserDetailComponent implements OnInit {
            @Input() user?: User;
            ....
        }

14. The *ngFor repeats hero objects. Notice that the *ngFor iterates over a list called users$. The $ is a convention that indicates users$ is an Observable, not an array.
    <li *ngFor="let user of users$ | async" >

15. routerLink directive connects the routes you defined to your template files.
    <nav>
        <a class="button" routerLink="/crisis-list">Crisis Center</a> |
        <a class="button" routerLink="/users-list">Users</a>
    </nav>

16. By adding the routerLinkActive directive, you inform your application to apply a specific CSS class to the active route.
    In the below example, "activebutton" is the CSS class
    <nav>
        <a class="button" routerLink="/crisis-list" routerLinkActive="activebutton">Crisis Center</a> |
        <a class="button" routerLink="/users-list" routerLinkActive="activebutton">Users</a>
    </nav>

17. ** path is how Angular identifies a wildcard route. Any route that does not match an existing route in your configuration will use this route.
    Ex., app.module.ts
    imports: [
        BrowserModule,
        RouterModule.forRoot([
            {path: 'crisis-list', component: CrisisListComponent},
            {path: 'heroes-list', component: HeroesListComponent},
            {path: '', redirectTo: '/heroes-list', pathMatch: 'full'},
            {path: '**', component: PageNotFoundComponent}
        ]),
    ],

18. The router outlet serves as a placeholder where the routed components are rendered.

    Ex., app.component.ts
    <nav>
        <a routerLink="/crisis-center" routerLinkActive="active">Crisis Center</a>
        <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
    </nav>
    <router-outlet></router-outlet>