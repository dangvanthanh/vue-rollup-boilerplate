# vue-rollup-boilerplate

> A simple rollup + vue-loader setup for quick prototyping.

![](screenshot.png)

## Usage

This is a project template for [vue-cli](https://github.com/vuejs/vue-cli).

``` bash
$ npm install -g vue-cli
$ vue init dangvanthanh/vue-rollup-boilerplate my-project
$ cd my-project

# Run with yarn (recommend)
$ yarn install
$ yarn run dev

# Run with npm
$ npm install
$ npm run dev
```

## What's Included

| [yarn](https://yarnpkg.com) - recommend | [npm](https://www.npmjs.com/) | Description                               |
|-----------------------------------------|-------------------------------|-------------------------------------------|
| `yarn run dev`                          | `npm run dev`                 | Rollup + `vue-loader` with hot-reload     |
| `yarn run build`                        | `npm run build`               | Production build with CSS/JS minification |

For more information see the [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Customizations

You will likely need to do some tuning to suit your own needs:

- Install additional libraries that you need such as [vue-router](https://github.com/vuejs/vue-router), [vue-resource](https://github.com/vuejs/vue-resource), [vuex](https://github.com/vuejs/vuex), etc...
- A little development server with live reload capability with [rollup-plugin-serve](https://github.com/thgh/rollup-plugin-serve) and [rollup-plugin-livereload](https://github.com/thgh/rollup-plugin-livereload).

## Fork It And Make Your Own

You can folk this repo to create own boilerplate, and use it with `vue-cli`

``` bash
vue init username/repo my-project
```
