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
