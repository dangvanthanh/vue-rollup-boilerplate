# Vue Rollup Boilerplate

> A simple rollup, [vue-loader](http://vuejs.github.io/vue-loader) and [esbuild](https://github.com/evanw/esbuild) setup for quick prototyping.

Vue 2 is nearing its [End Of Life](https://blog.vuejs.org/2022/03/01/vue-2-eol/). If you're considering upgrading to Vue 3, you might want to explore the [vue-turborepo-boilerplate](https://github.com/dangvanthanh/vue-turborepo-boilerplate). While this boilerplate currently provides robust support for Vue 2

![](screenshot.png)

## What News

-   Bring [&lt;script setup&gt;](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to Vue 2 using [unplugin-vue2-script-setup](https://github.com/antfu/unplugin-vue2-script-setup)
-   Visualize and analyze your bundle with [Rollup Plugin Visualizer](https://github.com/btd/rollup-plugin-visualizer)

## Installation

You can generate then [use this template](https://github.com/dangvanthanh/vue-rollup-boilerplate/generate)

## Usage

### PNPM

```bash
$ pnpm start
// or
$ pnpm dev
// or
$ pnpm run serve
```

### NPM

```bash
$ npm start
// or
$ npm run dev
// or
$ npm run serve
```

You can view the development server at `localhost:8080`

## Production build

```bash
$ npm run build
```

You can view the deploy by creating a server in `dist`

```bash
$ cd dist && npx serve
```

## Features

-   [Rollup](https://rollupjs.org/guide/en/)
-   [PostCSS](https://postcss.org/)
-   [ESBuild](https://github.com/evanw/esbuild)
-   [Prettier](https://prettier.io/)

## Components

Atomic design components

-   Atoms
-   Molecules
-   Organisms
-   Templates
-   Pages

## Makefile and PNPM

```shell
$ time make build && time pnpm build
```

|          | user      | system    |
| -------- | --------- | --------- |
| Makefile | 2.79 secs | 0.25 secs |
| PNPM     | 2.80 secs | 0.22 secs |

## Fork It And Make Your Own

You can folk this repo to create own boilerplate.

## License

MIT © [Dang Van Thanh](https://dangthanh.org)
