# vue-rollup-boilerplate

> A simple rollup and vue-loader setup for quick prototyping.

![](screenshot.png)

## Usage

This is a project template for [vue-cli](https://github.com/vuejs/vue-cli).

```bash
$ npm install -g @vue/cli-init
$ vue init dangvanthanh/vue-rollup-boilerplate my-project
$ cd my-project
$ npm install
```

then start Rollup

```bash
$ npm run dev
```

## What's Included

| CLI             | DESCRIPTION                               |
| --------------- | ----------------------------------------- |
| `npm run dev`   | Rollup + `vue-loader` with hot-reload     |
| `npm run build` | Production build with CSS/JS minification |

For more information see the [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Customizations

You will likely need to do some tuning to suit your own needs:

- Install additional libraries that you need such as:
  - [vue-router](https://github.com/vuejs/vue-router)
  - [vuex](https://github.com/vuejs/vuex)

## Fork It And Make Your Own

You can folk this repo to create own boilerplate, and use it with `vue-cli`

```bash
vue init username/repo my-project
```

## Structure

Comming soon when support TypeScript

```
|_ public
|_ src
  |_ assets
  |_ components
  |_ config
  |_ decorators
  |_ directives
  |_ enums
  | |_ feature
  | |_ shared
  |_ filters
  |_ i18n
  |_ mixins
  |_ model
  | |_ feature
  | |_ shared
  |_ plugins
  |_ queries
  |_ router
  |_ service-worker
  |_ store
  | |_ commands
  | |_ module
  |_ views
|_ tests
  |_ e2e
  |_ helpers
  |_ unit
```
