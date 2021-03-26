# Cascading Style Sheets

## Overview
CSS is the language we use to style an HTML document.

CSS describes how HTML elements should be displayed.

CSS saves a lot of work. It can control the layout of multiple web pages all at once

CSS is used to define styles for your web pages, including the design, layout and variations in display for different devices and screen sizes.

When tags like <font>, and color attributes were added to the HTML 3.2 specification, it started a nightmare for web developers. Development of large websites, where fonts and color information were added to every single page, became a long and expensive process.

To solve this problem, the World Wide Web Consortium (W3C) created CSS.

CSS removed the style formatting from the HTML page!

## Format

A CSS rule consists of a selector and a declaration block.

The declaration block contains one or more declarations separated by semicolons.

Each declaration includes a CSS property name and a value, separated by a colon.

Multiple CSS declarations are separated with semicolons, and declaration blocks are surrounded by curly braces.

### Selector

A CSS selector selects the HTML element(s) you want to style.

CSS selectors are used to "find" (or select) the HTML elements you want to style.

We can divide CSS selectors into five categories:

    - Simple selectors (select elements based on name, id, class)
    - Combinator selectors (select elements based on a specific relationship between them)
    - Pseudo-class selectors (select elements based on a certain state)
    - Pseudo-elements selectors (select and style a part of an element)
    - Attribute selectors (select elements based on an attribute or attribute value)

#### Element Selector

The element selector selects HTML elements based on the element name.

In below ex., all <p> elements on the page will be center-aligned, with a red text color:

p {
  text-align: center;
  color: red;
}

#### Id selector

To select an element with a specific id, write a hash (#) character, followed by the id of the element.

#para1 {
  text-align: center;
  color: red;
}

#### Class Selector

The class selector selects HTML elements with a specific class attribute.

To select elements with a specific class, write a period (.) character, followed by the class name.

.center {
  text-align: center;
  color: red;
}

In below example, only <p> elements with class="center" will be red and center-aligned: 

p.center {
  text-align: center;
  color: red;
}


In below example, <p> element had two classes center and large
<p class="center large">This paragraph refers to two classes.</p>

#### Universal selector

(*) will select all elements on HTML page

* {
  text-align: center;
  color: blue;
}

#### Grouping selector

To group selectors, separate each selector with a comma

h1, h2, p {
  text-align: center;
  color: red;
}

### Insert CSS in HTML

#### External CSS

HTML page must include a reference to the external style sheet file inside the <link> element, inside the head section.

<html>
<head>
    <link rel="stylesheet" href="mystyle.css">
</head>
<body> ...</body>
</html>

#### Internal CSS

HTML page can include an internal style, defined inside the <style> element, inside the head section.

<html>
<head>
    <style>
        body {
            background-color: linen;
        }
    </style>
</head>
<body> ... </body>
</html>

#### Inline CSS

Add the style attribute to the relevant element. The style attribute can contain any CSS property.

<html>
<body>
    <h1 style="color:blue;text-align:center;">This is a heading</h1>
    <p style="color:red;">This is a paragraph.</p>
</body>
</html>

#### Multiple CSS

If some properties have been defined for the same selector (element) in different style sheets, the value from the last read style sheet will be used.

#### Cascading Order

All the styles in a page will "cascade" into a new "virtual" style sheet by the following rules, where number one has the highest priority:

    1. Inline style (inside an HTML element)  >>  2. External and internal style sheets (in the head section) >> 3. Browser default

So, an inline style has the highest priority, and will override external and internal styles and browser defaults.

## Styles

### Color

Colors are specified using predefined color names, or RGB, HEX, HSL, RGBA, HSLA values.

For ex., Orange, rgb(11,11,11), #ffee33, hsl(9, 100%, 64%), etc

Property names: background-color, color, 

### Background

CSS background properties: background-color, background-image, background-repeat, background-attachment, background-position

Shortened property: background

The opacity property specifies the opacity/transparency of an element. It can take a value from 0.0 - 1.0. The lower value, the more transparent:

### Borders

CSS border properties allow you to specify the style, width, and color of an element's border.

Properties: border-style, border-width, border-color, 
Shorthand property: border (border-width border-style border-color)

Individual side properties example: border-top-style, border-right-style, border-bottom-style, border-left-style, etc
Individual side shorthand properties: boder-top, border-right, border-bottom, border-left

None of the other border properties are set unless we specify the border-style property.

border-width can be set as a specific size (in px, pt, cm, em, etc) or by using one of the three pre-defined values: thin, medium, or thick:

### Margins

Margins are used to create space around elements, outside of any defined borders.

Properties: margin-top, margin-right, margin-bottom, margin-left
Shorthand property: margin

All the margin properties can have the following values:

auto - the browser calculates the margin
length - specifies a margin in px, pt, cm, etc.
% - specifies a margin in % of the width of the containing element
inherit - specifies that the margin should be inherited from the parent element

### Padding

Padding is used to create space around an element's content, inside of any defined borders.

Properties: padding-top, padding-right, padding-bottom, padding-left
Shorthand property: padding

All the padding properties can have the following values:

length - specifies a padding in px, pt, cm, etc.
% - specifies a padding in % of the width of the containing element
inherit - specifies that the padding should be inherited from the parent element

### Height and Width

The CSS width property specifies the width of the element's content area. The content area is the portion inside the padding, border, and margin of an element

If an element has a specified width, the padding added to that element will be added to the total width of the element. This is often an undesirable result.

To keep the width fixed, no matter the amount of padding, you can use the box-sizing property.

max-width/max-height property is used to set the maximum width/height of an element.

The height and width properties do not include padding, borders, or margins. It sets the height/width of the area inside the padding, border, and margin of the element.

The height and width properties may have the following values:

auto - This is default. The browser calculates the height and width
length - Defines the height/width in px, cm etc.
% - Defines the height/width in percent of the containing block
initial - Sets the height/width to its default value
inherit - The height/width will be inherited from its parent value

The value of the max-width property overrides width.

### Box Model

The CSS box model is essentially a box that wraps around every HTML element. It consists of: margins, borders, padding, and the actual content.

Content - The content of the box, where text and images appear
Padding - Clears an area around the content. The padding is transparent
Border - A border that goes around the padding and content
Margin - Clears an area outside the border. The margin is transparent

When you set the width and height properties of an element with CSS, you just set the width and height of the content area. To calculate the full size of an element, you must also add padding, borders and margins.

###  Outline

An outline is a line that is drawn around elements, OUTSIDE the borders, to make the element "stand out".

Outline properties: outline-style, outline-color, outline-width, outline-offset
Shorthand property: outline (outline-width outline-style outline-color)

Outline differs from borders! Unlike border, the outline is drawn outside the element's border, and may overlap other content. Also, the outline is NOT a part of the element's dimensions; the element's total width and height is not affected by the width of the outline.

### Text

CSS has a lot of properties for formatting text.

Properties: color, background-color, text-align , direction, vertical-align, text-decoration

### Links

Links can be styled with any CSS property (e.g. color, font-family, background, etc.).

In addition, links can be styled differently depending on what state they are in.

The four links states are (in same order of styling):

a:link - a normal, unvisited link
a:visited - a link the user has visited
a:hover - a link when the user mouses over it
a:active - a link the moment it is clicked

### Display

The display property is the most important CSS property for controlling layout.

Every HTML element has a default display value depending on what type of element it is. The default display value for most elements is block or inline.

A block-level element always starts on a new line and takes up the full width available (stretches out to the left and right as far as it can).

The <div> element is a block-level element.
Examples of block-level elements:

<div>
<h1> - <h6>
<p>
<form>
<header>
<footer>
<section>

An inline element does not start on a new line and only takes up as much width as necessary.

This is an inline <span> element inside a paragraph.

Examples of inline elements:

<span>
<a>
<img>

display: none; is commonly used with JavaScript to hide and show elements without deleting and recreating them.

### Position

The position property specifies the type of positioning method used for an element.

There are five different position values:

static
relative
fixed
absolute
sticky

### Overflow

The overflow property specifies whether to clip the content or to add scrollbars when the content of an element is too big to fit in the specified area.

The overflow property has the following values:

visible - Default. The overflow is not clipped. The content renders outside the element's box
hidden - The overflow is clipped, and the rest of the content will be invisible
scroll - The overflow is clipped, and a scrollbar is added to see the rest of the content
auto - Similar to scroll, but it adds scrollbars only when necessary

### Display Inline Block

Compared to display: inline, the major difference is that display: inline-block allows to set a width and height on the element.

Also, with display: inline-block, the top and bottom margins/paddings are respected, but with display: inline they are not.

Compared to display: block, the major difference is that display: inline-block does not add a line-break after the element, so the element can sit next to other elements.

### Combinators

A combinator is something that explains the relationship between the selectors.

A CSS selector can contain more than one simple selector. Between the simple selectors, we can include a combinator.

There are four different combinators in CSS:

descendant selector (space)
child selector (>)
adjacent sibling selector (+)
general sibling selector (~)

### Pseudo-classes

A pseudo-class is used to define a special state of an element.

Syntax:

selector:pseudo-class {
  property: value;
}

### Pseudo-elements

A CSS pseudo-element is used to style specified parts of an element.

For example, it can be used to:

Style the first letter, or line, of an element
Insert content before, or after, the content of an element

syntax:

selector::pseudo-element {
  property: value;
}

### Rounder Corners

With the CSS border-radius property, you can give any element "rounded corners".

### @font-face Rule
Web fonts allow Web designers to use fonts that are not installed on the user's computer.

When you have found/bought the font you wish to use, just include the font file on your web server, and it will be automatically downloaded to the user when needed.

Your "own" fonts are defined within the CSS @font-face rule.

### 2D Transforms
CSS transforms allow you to move, rotate, scale, and skew elements.

Mouse over the element below to see a 2D transformation:

### Transition

CSS transitions allows you to change property values smoothly, over a given duration.

Mouse over the element below to see a CSS transition effect:

### Animations @keyframes Rule

When you specify CSS styles inside the @keyframes rule, the animation will gradually change from the current style to the new style at certain times.

An animation lets an element gradually change from one style to another.

You can change as many CSS properties you want, as many times you want.

To use CSS animation, you must first specify some keyframes for the animation.

Keyframes hold what styles the element will have at certain times.

### Variables

The var() function is used to insert the value of a CSS variable.

CSS variables have access to the DOM, which means that you can create variables with local or global scope, change the variables with JavaScript, and change the variables based on media queries.

A good way to use CSS variables is when it comes to the colors of your design. Instead of copy and paste the same colors over and over again, you can place them in variables.

The variable name must begin with two dashes (--) and it is case sensitive!

CSS variables can have a global or local scope.

Global variables can be accessed/used through the entire document, while local variables can be used only inside the selector where it is declared.

To create a variable with global scope, declare it inside the :root selector. The :root selector matches the document's root element.

To create a variable with local scope, declare it inside the selector that is going to use it.

### @Media rule

The @media rule, introduced in CSS2, made it possible to define different style rules for different media types.

Examples: You could have one set of style rules for computer screens, one for printers, one for handheld devices, one for television-type devices, and so on.

Media queries can be used to check many things, such as:

width and height of the viewport
width and height of the device
orientation (is the tablet/phone in landscape or portrait mode?)
resolution

syntax:

@media not|only mediatype and (expressions) {
  CSS-Code;
}

Also in <link> element

<link rel="stylesheet" media="mediatype and|not|only (expressions)" href="print.css">
