---
paginate: true
comments: true
author: musikele
category: Italiano
layout: post
date: 2020-12-12
title: React Native - first things to know
description: 'what is good and what''s not good when developing an app in React Native? '
header-img: ''
tags: []

---
Probably the most difficult part of using **React Native** (RN from now on) is installing all the components needed to develop and debug applications. Depending on which platform you target, instructions differ slightly.

All I can say is to [follow instructions](https://reactnative.dev/docs/environment-setup) on RN website, but click on **React Native CLI Quickstart** so you get also the instructions for emulators.

Luckily, once everything is set up, you can jump to the creation of the first react native project. You can go with

```bash
npx react-native init <project-name>
```

**npx** will download and launch `react-native` but instead of saving it globally, it will be saved locally so it will be freezed at the same version.

The downside? you have to write `npx` before every command. If you don't like it, install react-native with `npm i -g react-native`.

Once the project is installed,

```console
cd <project-name>
```

and, to run iOS simulator on Mac:

```bash
npx react-native run-ios 
```

to run Android simulator:

```console
npx react-native run-android
```

The first run may require a lot. Don't worry and wait. This command will open another terminal, that runs the JS compiler for the target platform. Don't close that window!

## A look at RN files and dirs 

The RN project comes with two directories, `/android` and `/ios`. Those dirs contain the projects that can be opened with the two IDEs. With these you can modify the target simulator, or sign the app to deploy on the stores, etc.

The first file you have to look at, in RN project, is `index.js`. It will load the AppRegistry, that is the component that will display the component on the screen; which component? well, if you see the imports, it will render `App.js`.

This `App.js` contains some default demo code, that still is useful to display some properties from RN. For example, try to change the title text. At this moment, the simulator automatically refreshes the app at every code change, if this doesn't work you can just CMD + R (or Ctrl + R). If you need to access more options, CMD + M. 