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

# package.json

this file is configuration for npm

# npm take care the version of package

# Two type of dependency

dependencies development and normal dependency

npm i -D parcel

# tilde ~(install major version auto recommended) caret ^(install minor version auto)

# package-lock.json

1. this file has a exact erion of all the dependency.

2. keep a hash ths vrify that what is there in my machine is the same version deployed over production

# Node modules folder

Database of dependencies. All files dependencies will store here.

# RANSITIVIES DEPENDENCIES

Parcel as a project have its own dependencies, that dependences will have their own dependencies, tis is known as TRANSITIVIES DEPENDENCIES

# .gitignore

Not to put these file over git

# Why not require to put node_modules over git or server

Because it will regenerate with help of package.json

# npx executing a package

# install a package npm

# npx parcel index.html

execute the parcel
parcel goes to source index.html and build a dev build our app and host it localhost:1234

CDN links is not a preffered way to include React in our app
Because another network request is send to unpkg.com to get react from that.
If we have react already in our node_modules
from package.json easy to manage react version online

# what parcel gives

# Dev Build

# Server

# HMR - Hot Module Replacement

# File Watching Algorithm C++

# Faster Build through Caching

# Image Optimization

# Minification

# Bundeling

# Compress

# Consistent Hashing

# Code splitting

# Differencial Bundeling - App will run on older browsers, different bundles for differenr type of browser

# Diagnostic :- Error includes a syntax Highlites code frame pointing exact location of error.

# Tree shaking algo - removes unuse code

# Error Handling

# HTTPS :- parcel src/index.html --https

# <script type="module"></script> parcel automaticlly generate node modules fallback for old browsers as well.

# more optimization in production build TAKES more time.

# HOW TO MAKE PRODUCTION BUILD

npx parcel build index.html

From Local code upload over git and from git server fetch the code

Browser List :- Tell your project that what browser should your app supported

# Asignment 2

# What is NPX?

NPX stands for Node Package eXecute. It is simply an NPM package runner. It allows developers to execute any Javascript Package available on the NPM registry without even installing it.

# What is NPM?

Npm is a Package Manager
npm is the world's largest Software Registry. The registry contains over 800,000 code packages. Open-source developers use npm to share software.

# What is Parcel/Webpack?

Parcel and webpack are the open source bundlers. It supports many popular languages like Typescript and SASS, and can also handle file types like images and fonts.

Parcel comes with a few extra tools built-in:

Dev Build
Server
HMR - Hot Module Replacement
File Watching Algorithm C++
Faster Build through Caching
Image Optimization
Minification
Bundeling
Compress
Consistent Hashing
Code splitting
Differencial Bundeling - App will run on older browsers, different bundles for differenr type of browser
Diagnostic :- Error includes a syntax Highlites code frame pointing exact location of error.
Tree shaking algo - removes unuse code
Error Handling

# What is .parcel-cache

cache folder (or . parcel-cache in parcel v2) stores information about your project when parcel builds it, so that when it rebuilds, it doesn't have to re-parse and re-analyze everything from scratch. It's a key reason why parcel can be so fast in development mode.

# Diff between dependencies and dev dependencies?

Dependencies are the packages that are required for your application to run properly, devDependencies are the packages that are required for development and testing purposes only, and peerDependencies are the packages that your package expects to be installed in the user's environment.

# What is Tree Shaking?

Tree shaking is a term commonly used in the JavaScript context for dead-code elimination.

# What is Hot Module Replacement?

Hot Module Replacement (HMR) exchanges, adds, or removes modules while an application is running, without a full reload. This can significantly speed up development.

# What is .gitignore?

A gitignore file specifies intentionally untracked files that Git should ignore. The only file or folder is added to this file that will be regenerated. Like node_modules, dist

# Difference between package.json and package-lock.json?

package-lock.json is a file that is automatically generated by npm when a package is installed. It records the exact version of every installed dependency, including its sub-dependencies and their versions + has that specify the exact versio of package for dev and prod build.
package.json is afile that contain the versio of package.

# Why should i not modify package-lock.json file?

Beacuse the manually changes inn pavkage-lock.json file will make conflict in version details of package. Great chances to get error in or app. so this is not a best practice.

# What si node_modules? Is it a good idea to push it over git?

node_module is a database of packages that hold all installed packages. not good ides to push that on git beacuse it is very heay and regenerated with help of pakage.json

# what is dist folder?

The dist folder, short for distribution folder, is dynamically generated when using the npx generate command. This includes the production ready and deploy ready files.

# what is browserlists?(vite, webpack, parcel)

is a package internally used by parcel used to mension the version of browser over which our app will run

Modified

git remote add origin link
git remote -v (to verify remote)
git branch (to chack branch)
git branch -M main (to rename branch)
git push origin main
