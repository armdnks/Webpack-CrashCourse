# Webpack | Crash Course

> https://www.youtube.com/watch?v=IZGNcSuwBZs

<br/>

## Intro

> webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource or asset. <br/> https://webpack.js.org/

![00-intro.jpg](./_preview/00-intro.jpg)

<br/>

## Initial Files (src/dist)

- create folder dist & src on root
- create index.html in dist folder
- create index.js in src folder

```bash
_root
├── dist
│   └── index.html
└── src
    └── index.js
```

> <i>index.html</i>

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Webpack | Crash Course</title>
  </head>
  <body>
    <h1>Webpack App</h1>
    <script src="../src/index.js"></script>
  </body>
</html>
```

> <i>index.js</i>

```js
console.log(123);
```

<br/>

## Creating Modules

- create generate-joke.js in src folder
- add generateJoke() function in it and return some joke in string

> <i>generate-joke.js</i>

```js
export default function generateJoke() {
  return "The wedding was so beautiful. Even the cake was in tiers.";
}
```

- in index.js import generateJoke and console log the function

> <i>index.js</i>

```js
import generateJoke from "./generate-joke";
console.log(generateJoke());
```

```bash
# result in browser's console
Uncaught SyntaxError: Cannot use import statement outside a module (at index.js:1:1)
```

<br/>

## Webpack Install & Building

- npm init -y - initialize project without question section in terminal

```bash
npm init -y
```

- install webpack packages

```bash
npm i -D webpack webpack-cli
```

> <i>package.json</i>

```json
{
  "scripts": {
    "build": "webpack --mode production"
  },
  "devDependencies": {
    "webpack": "^5.74.0",
    "webpack-cli": "^4.10.0"
  }
}
```

- compile webpack for the first time

```bash
npm run build
```

- check dist folder and webpack create a new file called main.js

> <i>main.js</i>

```js
//  webpack combine generateJoke() function and console.log() in index.js

(() => {
  "use strict";
  console.log("The wedding was so beautiful. Even the cake was in tiers.");
})();
```

- in index.html replace source script to "./main.js"

> <i>index.html</i> <br/> \<script src="../src/index.js"></script> <br/> ↓ replace src value to main.js

```html
<script src="./main.js"></script>
```

```bash
 # result in browser console
 The wedding was so beautiful. Even the cake was in tiers.
```

<br/>

## Using NPM Modules

```js

```

<br/>

## Webpack Config File

```js

```

<br/>

## Loaders & Sass Compiling

```js

```

<br/>

## HTML Webpack Plugin

```js

```

<br/>

## HTML Template

```js

```

<br/>

## Caching & Hash Setup

```js

```

<br/>

## Webpack Dev Server

```js

```

<br/>

## Cleaning Up Hash Files

```js

```

<br/>

## Source Maps

```js

```

<br/>

## Babel Loader

```js

```

<br/>

## Asset Resource Loader

```js

```

<br/>

## Finish The Joke App

```js

```

<br/>

## Webpack Bundle Analyzer

```js

```
