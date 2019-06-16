---
paginate: true
comments: true
author: musikele
category: English
layout: post
date: 2019-06-16 00:00:00 +0200
tags: []
title: Configuring and testing a typescript browser library, from zero to hero
header-img: "/images/1*BM_RS2-DjYk_JZUKr4uq0g.png"
description: 'In this article we''ll see how to test a complex js library with jest
  + puppeteer. '

---
Let's create a very complex test setup that we use in my company. 

First of all, I've created a new folder `jest-puppeteer-blog`. Then 

```console
$ npm init // create package.json 
```

Create file `src/sumLibrary.ts`

```typescript
export const sum = (a: number, b: number): number => a + b
```

let's add typescript, webpack, babel to the project

```console
$ npm i --save-dev typescript 
$ tsc --init # will create tsconfig.json
```

Now w have installed typescript, but it will still not work because we didn't tell typescript to compile code in `src` library. Also, default values are a bit dumb. Let's change `tsconfig.json` into something more meaningful: 

```json
{
    "compilerOptions": {
        "module": "esnext",
        "target": "esnext",
        "sourceMap": true,
        "outDir": "./build_ts/",
        "moduleResolution": "node",
        "lib": [
            "dom",
            "esnext",
            "dom.iterable",
            "scripthost"
        ],
    },
    "include": [
        "src/**/*.ts"
    ],
    "exclude": [
        "src/**/*.spec.ts",
        "src/**/*.test.ts"
    ],
    "compileOnSave": true
}
```

* **module** is one of the most important options here. This option determines the way modules (and files) express dependencies between each other. It's possible values are `None`, `CommonJS`, `AMD`, `System`, `UMD`, `ES6`, `ES2015` or `ESNext`. If you use **None** you cannot use `import`, `export`, `require`... nothing.  **AMD** and **System** are (IMHO) a thing of the past, the first came from [RequireJS](https://requirejs.org/docs/whyamd.html "RequireJS") and the second from [SystemJS](https://github.com/systemjs/systemjs "SystemJS"). Not so long ago there was no way to express dependencies across JS files, so many competing systems came out to solve this problem. AMD and System did not get enough fortune to become a standard. **CommonJS** is a spec that is very similar to what NodeJS has implemented (`require`/`exports`). However, the JS community is going towards `import/export` keyword, and node has embraced that too, and we have options `ES6` or `ES2015` for that. **UMD** stands for Universal Module Definition and tries to deliver a modul that works with every possible module definition defined before.   
  I honestly prefer to use Typescript as a superset of JS, so I choose `esnext` and let webpack decide how to bundle stuff together. 
* **target:** if _module_ determines the way your code is imported, _target_ determines what kind of EcmaScript should be targeted. If you choose `ES3` your code would be compatible with Internet Explorer 5 or Netscape Navigator, and this is the default value. There is a caveat, though: you may be tempted to use `fetch`, or `Promise`, and typescript will let you use them, BUT typescript will not add any polyfill to your code. Beware of this! That's anoter reason to use babel.   
  Similarly you can choose several different options, `ES5`, `ES6`... again I prefer `esnext` to be able to use the latest features of the language and let babel transpile everything. 
* **sourcemap** to true if you want to be able to read typescript source code in the browser. 
* **outDir** is the directory where the single `.ts` files are compiled to `.js`. This is just an  intermediate step. Webpack will take care of the final bundling in the final destination. 
* **moduleResolution**: again, [there's no need](https://www.typescriptlang.org/docs/handbook/module-resolution.html) to have a value different than `node` here. 
* **lib**: Since we are working in the browser and we are targeting a JS version greater than ES2015, I use the defaults that are `DOM,ES6,DOM.Iterable,ScriptHost`. The list of all available libraries is [here](https://www.typescriptlang.org/docs/handbook/compiler-options.html). 
* **include:**  files that must be compiled by typescript. Here I put the `src` directory.
* **exclude**: The list of files you don't want to be compiled by typescript. 
* **compileOnSave**: a hint to the IDE to compile every time we save files. VSC will honor this. 

I advise to the Typescript community to choose some "sane" defaults, since there is too much to choose and a junior dev could be scared of all of this stuff to configure. You also need to know a bit of JS history to take the right decision. I had to study a lot before choosing this minimal set of options I needed. 

Let's try to compile: 

```console
$ tsc
$ 
```

No output. that's how typescript says, "everything's good". In `build_ts` directory you'll see the file: 

```javascript
//build_ts/sumLibrary.js

export const sum = (a, b) => a + b;
//# sourceMappingURL=sumLibrary.js.map
```

## Webpack & Babel 

The first step of our toolchain has been set up: our typescript files are now converted to javascript, but it's a form of javascript so advanced that not all browsers can understand. If you target Internet Explorer, for example, you cannot use `export` nor 