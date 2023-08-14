# Add element through html

git remote add origin https://github.com/ajay-CaTi/p1.git

# How to add same with react

What is CDN?
Content delivey network where React Library is hosted, Where i fetch react from there and put it in our code

<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>

ABOVE link to Import only react to our project.(React Core Code)

<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

ABOVE link to Import only reactDOM to our project.(Library usefull for DOM Operations, Modify the dom)

Above Different links
Can club in single file NO!!
Because React is not only use for browser it is for Mobile also(React Native), React 3D
Act Like a bridge between React and Browsers/ connect to DOM

Above is Two super Power which is used by Developers to build Large scale web apps

# createELement is core thing of Recat so it come from React

ex:- React.createElement
createElement:- is just a normal JS Object

# When we create Root and render something inside it this is job of ReactDOM

Here Root is the place where all react code will run, Everything we will render, will render inside root

ex:- ReactDOM.createRoot

# root.render() job is to take this object create h1 tag and put it inside root element/DOM.

Cool thing of react
\_\_SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
:

WHat is crossOrigin?

# tag, Object, child/content to it

const parent = React.createElement( "div",{ id: "parent" },"parent tag")

# Nested children below

const parent = React.createElement(
"div",
{ id: "parent" },
React.createElement(
"div",
{ id: "child" },
React.createElement("h1", { id: "h1" }, "h1 tag")
)
);

# Sibling sub chield elements below

const parent = React.createElement(
"div",
{ id: "parent" },
React.createElement("div", { id: "child" }, [
React.createElement("h1", { id: "h1" }, "h1 tag"),
React.createElement("h2", { id: "h2" }, "h2 tag"),
])
);

# Sibling child elements below

const parent = React.createElement("div", { id: "parent" }, [
React.createElement("div", { id: "child" }, [
React.createElement("h1", { id: "h1" }, "h1 tag"),
React.createElement("h2", { id: "h2" }, "h2 tag"),
]),
React.createElement("div", { id: "child" }, [
React.createElement("h1", { id: "h1" }, "h1 tag"),
React.createElement("h2", { id: "h2" }, "h2 tag"),
]),
]);

# crossorigin

The crossorigin attribute specifies that the link element supports CORS.

The crossorigin attribute sets the mode of the request to an HTTP CORS Request

# content inside root id element will be replace by react content

# React can work in a very small portion of website

# React have some helper methods that use to develop faster applicaton

# Order of files matters a lot

# what is Emmit?
Emmet is a set of plug-ins for text editors that allows for high-speed coding and editing in HTML, xlm, and other structured code format

# Different between library and framework
A framework is a set of pre-written code that provides a structure for developing software applications.

A library, on the other hand, is a collection of pre-written code that can be used to perform specific tasks.

# what is CDN? why do we use it?
A content delivery network (CDN) is a group of geographically distributed servers that speed up the delivery of web content by bringing it closer to where users are

# Why is React Known as React?
React is one of many libraries and it's completely frontend and specializes in things that the user interacts with when they're using a website. This could be buttons, search bars and menus. “And it's called React because it reacts.

# WHat is crossorigin in script tag?
The crossorigin attribute sets the mode of the request to an HTTP CORS Request.

# What is the difference between React and ReactDOM
React library is responsible for creating views and ReactDOM library is responsible to actually render UI in the browser.

# What is the difference between React.development.js and React.production.js in cdn links?
In production mode, compression and minification of Javascript and other resources happens to reduce size of the code which is not the case when it comes to development mode. Performance will be much faster in production mode when compared to development mode.

# DIfference between async and defer?
Async allows your script to run as soon as it's loaded, without blocking other elements on the page. Defer means your script will only execute after the page has finished loading.
