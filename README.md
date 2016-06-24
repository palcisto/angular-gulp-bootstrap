# Angular Gulp Bootstrap

Angular 1.5+, Gulp, Babel, Jasmine, Karma, Hologram (styleguide).

## Setup

### Dependencies
* [Node and npm](https://nodejs.org/)*
* [Bower](http://bower.io/) - `npm install -g bower`
* [Gulp](http://gulpjs.com/) - `npm install -g gulp`

*Node v4.3.0 and npm v3.5.0 (or higher) are required by the application, so please install those versions. Note that [npm can be updated](https://docs.npmjs.com/getting-started/installing-node#updating-npm) independently of Node.

[NVM](https://github.com/creationix/nvm) is recommended for easy management of Node versions.

### Environment
1. `git clone https://github.com/palcisto/angular-gulp-bootstrap.git`
1. `cd angular-gulp-bootstrap`
1. `npm install`

## Build Process

### Development
Run `gulp serve` to view and work with the application locally.

The `gulp serve` command will call the necessary tasks for building all application assets and moving files to a newly generated **dev** folder. Once all build-related tasks are complete, a local server will start running at **http://localhost:8000** and watch for changes made to any css, javascript, or html file under the **src** folder. When a change is saved, the browser will automatically reload.

### Production
Run `gulp build:prod` to build the application for production.

The `gulp build:prod` command will call the necessary tasks for building all application assets and moving files to a newly generated **dist** folder. You can optionally run `gulp serve:prod` to view the build locally at **http://localhost:8000**.

## Testing

### Unit tests

[Karma](https://github.com/karma-runner/karma) is the unit testing framework used for the app and it is installed via the setup steps listed above. See **karma.conf.js** in the **test** folder for karma configuration.

1. Run unit tests with `npm test`

### Test mocks

Test mocks should be placed in the **test/mocks** folder.

## Code Linting

### CSS Linting
Run ```gulp lint:css``` to lint the app's css.

### JS Linting

Run ```gulp lint:js``` to lint the app's js.

[ESLint](http://eslint.org) is the utility used for linting JS and all rules are configured in the **.eslintrc** file.


## Code Style

In an effort to maintain consistent coding styles between IDEs, the project contains an **.editorconfig** file.

To ensure that the formatting defined in the .editorconfig file is applied when writing code, please see the [EditorConfig](http://editorconfig.org/#download) site and download/install the plugin that corresponds to your IDE.

## Style Guide

### Dependencies

[Hologram](http://trulia.github.io/hologram/) is a Ruby gem that is used to generate a style guide for the application. Install Hologram by running `bundle install`.

### Generation

1. `gulp serve:styleguide`
1. View the style guide at **http://localhost:7000**

## Gulp

### Overview
All gulp tasks have been split out into separate files under the **gulp** folder. This modular approach allows for better maintainability and organization of the build process as the app matures.

The **gulpfile.js** file is intended to act as a global file and is configured to sync all task files in the gulp folder. The paths variable, as its name indicates, lists paths to directories that are used frequently in the gulp tasks. Each task file in the gulp folder has access to the paths variable.

Some code within certain tasks is run conditionally using the [gulp-if](https://github.com/robrich/gulp-if) plugin. This is so that code shared between build-related tasks (i.e. dev vs. prod) is not duplicated.

## Browser Requirements

### IE
* IE 10+ is supported
