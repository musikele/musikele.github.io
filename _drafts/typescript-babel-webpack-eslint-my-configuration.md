---
paginate: true
comments: true
author: musikele
category: Italiano
layout: post
date: 2019-06-27 00:00:00 +0200
tags:
- typescript
- babel
- webpack
- eslint
title: 'Typescript, Babel, Webpack, ESLint: my configuration '
header-img: ''
description: 'Here''s a little guide on how to setup a project with Typescript, Babel,
  Webpack and ESLint. '

---
The purpose of this post is to give you, dear reader, an example of the configuration I use on some projects. Configuring the whole stack is sometimes frustrating. Here's what works for me.

## Typescript

I [just wrote an article](https://michelenasti.com/2019/06/24/typescript-why-so-complicated.html) about that and you should read it. It contains my `tsconfig.json` and why every option is configured that way.

## Babel ( 7.x )

The fun fact is, even if we use Typescript and our files end with `.ts`, to build the project we will _skip_ typescript. Let me be clearer. We will use **Babel**, that is a transpiler, and **Webpack**, that is a bundler. Webpack will bundle files that are transpiled by Babel.

But wait?! Babel transpiles what? The latest trend is that Babel will _strip out_ every Typescript interface, annotation or type inference and will just transform the file to a normal `.js` file. This output will then be given in input to Webpack.

Enough talking! Time to install babel and it's dependencies:

```bash
npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/plugin-proposal-class-properties @babel/plugin-proposal-object-rest-spread @babel/preset-typescript
```

Here's my babel setup:

```javascript
//babel.config.js
  module.exports = api => {
      const isTest = api.env('test');

      const targets = {
          browsers: "> 0.25%, not dead"
      }

      if (isTest) {
          delete targets.browsers;
          targets.node = "current";
      }

      return {
          "presets": [
              [
                  "@babel/env",
                  {
                      "useBuiltIns": "entry",
                      "corejs": "3.0.0",
                      targets
                  }
              ],
              "@babel/typescript"
          ],
          "plugins": [
              "@babel/proposal-class-properties",
              "@babel/proposal-object-rest-spread"
          ]
      };
  };
```

Quick explanation:

* I use Jest and puppeteer to test my code, and Jest requires `targets.node` to be set to `current`. If you don't use Jest and Puppeteer, just remove the `isTest`check.
* Babel works with presets, each preset will transform some pieces of code depending on some rules.
* `@babel/env` is a quasi-default rule, it will transform our js code to something that is understandable by something that is parsable by what's defined in `targets`.
* `@babel/typescript` is the king here. It will _strip off_ all Typescript specific data (interfaces, types, etc.).
* the two plugins added are already in a very advanced standardization process, but they are added because typescript allows them.

### Test that this is working

run this command:

```bash
npx babel src --out-dir build_ts --extensions ".ts,.tsx" --source-maps inline
```

Here we'll run babel on the directory `src`, the output will go in `build_ts`_._

It works? without hassles? Let's go to the next step:

### Webpack (4.x)

Installation:

```bash
$ npm i --save-dev webpack webpack-cli babel-loader
```

Here's my configuration:

```javascript
//webpack.config.js

var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/index',
  mode: 'development',
  devtool: 'false',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'dist.js',
    //library: ...,
    //libraryExport: ...,
    //libraryTarget: ...,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  module: {
    rules: [
      {
        // Include ts, tsx, js, and jsx files.
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [],
};
```

The most important part is the `rules` part. Our rule is that every file will be tested, if it ends with `.ts` it will be passed to plugin `babel-loader` that will pass the file to `babel` before assembling it with babel.