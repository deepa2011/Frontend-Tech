# Recap / Interview Questions

What is HTML5?

HTML5 is the next major revision of the HTML standard superseding HTML 4.01, XHTML 1.0, and XHTML 1.1. HTML5 is a standard for structuring and presenting content on the World Wide Web.

Are HTML tags case sensitive?
No

Custom attributes in HTML5?

A custom data attribute starts with data- and would be named based on your requirement. You would be able to get the values of these attributes using JavaScript APIs or CSS in similar way as you get for standard attributes.

Mock Test:
https://www.tutorialspoint.com/html5/html5_online_test.htm

Attribute used to define an element as draggable?

Correct usage of html elements - <header>, <section>, <article>, <footer>?

The <header> element is used to contain introductory and navigational information about a section of the page. This can include the section heading, the author’s name, time and date of publication, table of contents, or other navigational information.

The <article> element is meant to house a self-contained composition that can logically be independently recreated outside of the page without losing it’s meaining. Individual blog posts or news stories are good examples.

The <section> element is a flexible container for holding content that shares a common informational theme or purpose.

The <footer> element is used to hold information that should appear at the end of a section of content and contain additional information about the section. Author’s name, copyright information, and related links are typical examples of such content.

What is HTML5 Web Storage? Explain localStorage and sessionStorage?

With HTML5, web pages can store data locally within the user’s browser.

Earlier, this was done with cookies. However, Web Storage is more secure and faster. The data is not included with every server request, but used ONLY when asked for.

The data is stored in name/value pairs, and a web page can only access data stored by itself. Unlike cookies, the storage limit is far larger (at least 5MB) and information is never transferred to the server.

The difference between localStorage and sessionStorage involves the lifetime and scope of the storage.

Data stored through localStorage is permanent: it does not expire and remains stored on the user’s computer until a web app deletes it or the user asks the browser to delete it. SessionStorage has the same lifetime as the top-level window or browser tab in which the script that stored it is running. When the window or tab is permanently closed, any data stored through sessionStorage is deleted.

Both forms of storage are scoped to the document origin so that documents with different origins will never share the stored objects. But sessionStorage is also scoped on a per-window basis. If a user has two browser tabs displaying documents from the same origin, those two tabs have separate sessionStorage data: the scripts running in one tab cannot read or overwrite the data written by scripts in the other tab, even if both tabs are visiting exactly the same page and are running exactly the same scripts.

What is the Geolocation API in HTML5?

HTML5’s Geolocation API lets users share their physical location with chosen web sites. JavaScript can capture a user’s latitude and longitude and can send it to the back-end web server to enable location-aware features like finding local businesses or showing their location on a map.

Today, most browsers and mobile devices support the Geolocation API. The Geolocation API works with a new property of the global navigator object.

A Geolocation object can be created as follows:

var geolocation = navigator.geolocation;
The geolocation object is a service object that allows widgets to retrieve information about the geographic location of the user’s device.

What’s the difference between the <svg> and <canvas> elements?

The <svg> element is a container for SVG graphics. SVG has several methods for drawing paths, boxes, circles, text, and even bitmap images.

SVG is a language for describing 2D graphics, but <canvas> allows you to draw 2D graphics on the fly using JavaScript.

SVG is XML-based, which means that every element is available within the SVG DOM. You can attach JavaScript event handlers for an element.

In SVG, each drawn shape is remembered as an object. If attributes of an SVG object are changed, the browser can automatically re-render the shape.

Canvas is rendered pixel by pixel. In canvas, once the graphic is drawn, it is forgotten by the browser. If its position should be changed, the entire scene needs to be redrawn, including any objects that might have been covered by the graphic.

What do you understand by web workers?
The addition of web workers brings multithreading capability to JavaScript. These are scripts running in the background that doesn't necessitate the web page to wait for their completion.

Hence, a user can interact freely with the web page while a web worker runs in the background. In order to achieve parallelism, web workers leverage thread-like message passing.

What is a <meta> tag in HTML5?
The <meta> tag offers metadata about the HTML5 document. This metadata is machine-parsable. Typically, meta elements are used for specifying:

Author name
Keywords
Page description
The metadata supplied by the <meta> tag is used by:

Web browsers to know how to display content or reload a web page
Search engines to know about keywords on a web page
Other web services

Which tag is used for representing the result of a calculation? Explain its attributes.
The <output> tag is used for representing the result of a calculation. It has three attributes:

for - Represents the relationship among the elements used in the calculation and the result.
form - Represents the form(s) the output element belongs to.
name - Represents a name for the output element.