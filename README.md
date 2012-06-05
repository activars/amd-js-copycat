# AMD JS Copycat

If you prefer to develop JavaScript with AMD module, this repository helps you to setup the project and create initial file structures. The idea is to copy or fork this repository to start your own without repetitive setup.

## When should I use this?
* I only write pure javascript without template and css files
* I want to write in a modular way
* I want to use AMD
* I want the final JavaScript to be loaded on a site that may or may not have requireJS available
* I want the final JavaScript to be requirable

## Prerequisite
Almond.js is used to build smaller footprint AMD moduler JavaScript. It requires `node` and `npm`.
After the nmp is installed, run the following command to install latest `requirejs`:

```
npm install requirejs
```

## Structure
### app
The app folder is the location where the main JavaScript logic sets. By default, `applicaiton.js` is the applicaiton starting point.

### config
The config folder stores the configuraiton for this project. During development, it's not neccessary to build the JavaScript. We use the requireJS to require all the dependencies and the configuration is specified in `development_profile.js`.
Building the JavaScript will use almond.js to reduce the footprint as well as compiling to an independent JS script. The `build_profile.js` specifies the configuration when build script executes.

### lib
The lib folder contains all the third party JavaScripts. It currently include all the necessary libraries for development and build:
* release build requires r.js optimizer and almond.js
* requireJS is used during the development

