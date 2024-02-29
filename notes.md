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
