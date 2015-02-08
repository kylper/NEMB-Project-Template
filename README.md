# NEMB Project Template

This is a project template for a Node.js web application.
*Please note that this project is not yet finished. This message will no longer appear when the project is ready for development and production use.*

## Tech List

- Node.js
- Express.js Web Framework
- MongoDB (with Mongoose)
- Backbone.js (with Marionette)
- Gulp
- CoffeeScript
- Bower Package Manager
- Handlebars.js
- LESS CSS
- Bootstrap

This is everything you need to get started working on a cool Node.js web app! Everything from the project config files to the folder structure is entirely handled for you!

Just note, when going into production with a project based on this template, you should probably remove the "README.md" from every sub-directory.

## Building with Gulp

Just running `` gulp `` will run all of the scripts below.

###### Function: VendorScriptsConcat `` gulp  vendorscriptsconcat ``
- You can change the vendor sources by adding individual sources or entire folders (with *) to the `` vendscriptsources `` array towards the top of the document.

- This function will concatenate each of the sources to one document, save that to **/public/js/vendor.js** and uglify that document which is saved to **/public/js/vendor.min.js**

###### Function: ScriptsCoffee `` gulp scriptscoffee ``
- Will gather all files located at **/front_components/coffee/**
- Converts them to JS, concatenate them to the file **primary.js**
- Uglifies them and saves to **primary.min.js**

###### Function: CSSLess `` gulp cssless ``
- Grabs every LESS file located at **/front_components/less/**
- Converts to CSS, concatenates to **style.css**
- Minifies CSS and saves to **style.min.css**

More functions coming for minifying images and JSHint.
