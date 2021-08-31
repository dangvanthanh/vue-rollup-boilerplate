# Vue Rollup Boilerplate

> A simple rollup, [vue-loader](http://vuejs.github.io/vue-loader) and [esbuild](https://github.com/evanw/esbuild) setup for quick prototyping.

Currently, this boilerplate support good for [Vue 2](https://vuejs.org/v2/guide/). For [Vue 3](https://v3.vuejs.org/), you can try [Vite](https://vitejs.dev/)

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
$ time make build and time pnpm build
```

|          | user  | system | cpu  | total |
| -------- | ----- | ------ | ---- | ----- |
| Makefile | 7.17s | 0.73s  | 102% | 7.706 |
| PNPM     | 7.35s | 0.69s  | 102% | 7.821 |

## Fork It And Make Your Own

You can folk this repo to create own boilerplate.

## License

MIT © [Dang Van Thanh](http://dangthanh.org)
