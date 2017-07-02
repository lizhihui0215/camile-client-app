---
title: Installation Guidelines
author: vl
sort: 500
group: Quick Start
template: article.jade
---

## Prerequisites

Although camile-client-app can be run without any development experience, it would be much easier if you already have some. 
The following instructions allow you to run a local copy on your machine.

## Install tools

If you don't have any of these tools installed already, you will need to:
* Download and install [git](https://git-scm.com/)
* Download and install nodejs [https://nodejs.org](https://nodejs.org)

**Note**: Make sure you have Node version >= 6.0 and NPM >= 3
## Clone repository and install dependencies

You will need to clone the source code of camile-client-app GitHub repository:

```bash
git clone https://github.com/akveo/camile-client-app.git
```
After the repository is cloned, go inside of the repository directory and install dependencies:

```bash
cd camile-client-app
npm install
```
or
```bash
cd camile-client-app
yarn
```

This will setup a working copy of camile-client-app on your local machine.

## Running local copy

To run a local copy in development mode, execute:

```bash
npm start
```

Go to http://0.0.0.0:4200 or http://localhost:4200 in your browser.


To run the local copy in production mode and build the sources, execute:

```bash
npm run start:prod
```
or in AOT mode
```bash
npm run start:prod:aot
```

To create a bundle in production mode, execute:

```bash
npm run build:prod
```
or
```bash
npm run build:prod:aot
```

This will clear up your dist folder (where release files are located), generate a release build and start the 
built-in server.
Now you can copy the sources from the `dist` folder and use it with any backend framework or 
simply put it under a web server.
