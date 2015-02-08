# /views/

This is the directory where you place all of your website views! Please be sure to use the power of Handlebars when creating templates for pages. If you need to add more logic to handle these templates and their data, add it to ``/routes/index.js``

Included is
- index.handlebars: simple "Hello World!" page
- error.handlebars: template for displaying errors that occur from the server.

Any primary templates that affect every page or every page of a certain type should go in ``/views/layouts``. Inside of layouts currently is a file entitled "main.handlebars," which controls the view of every page served. This is the document where all scripts, stylesheets, and consistent elements like Headers and Footers should go.
