# Stimulus Scroll Progress

[![](https://img.shields.io/npm/dt/stimulus-scroll-progress.svg)](https://www.npmjs.com/package/stimulus-scroll-progress)
[![](https://img.shields.io/npm/v/stimulus-scroll-progress.svg)](https://www.npmjs.com/package/stimulus-scroll-progress)
[![](https://github.com/stimulus-components/stimulus-scroll-progress/workflows/Lint/badge.svg)](https://github.com/stimulus-components/stimulus-scroll-progress)
[![](https://img.shields.io/github/license/stimulus-components/stimulus-scroll-progress.svg)](https://github.com/stimulus-components/stimulus-scroll-progress)
[![Netlify Status](https://api.netlify.com/api/v1/badges/8a6c0c4d-2ff0-4da3-ba96-3a14cbad811a/deploy-status)](https://stimulus-scroll-progress.netlify.com)

## Getting started

A Stimulus controller to add a progress bar when scrolling.

## Installation

```bash
$ yarn add stimulus-scroll-progress
```

And use it in your JS file:
```js
import { Application } from "stimulus"
import ScrollProgress from "stimulus-scroll-progress"

const application = Application.start()
application.register("scroll-progress", ScrollProgress)
```

## Usage

Add a `div` just after the `body` opening tag:

In your view:
```html
<body>
  <div data-controller="scroll-progress" class="h-2 bg-indigo-400 fixed top-0"></div>
</body>
```

It's up to you to design it as you want.

## Configuration

To improve performance, the `scroll` event is [throttled](https://lodash.com/docs/4.17.15#throttle).

| Attribute | Default | Description | Optional |
| --------- | ------- | ----------- | -------- |
| `data-scroll-progress-throttle-delay` | `15` | Delay in milliseconds to update the scroll position. (`0` to disable). | ✅ |

## Extending Controller

You can use inheritance to extend the functionality of any Stimulus components.

```js
import ScrollProgress from "stimulus-scroll-progress"

export default class extends ScrollProgress {
  connect() {
    super.connect()
    console.log("Do what you want here.")
  }
}
```

This controller will automatically has access to targets defined in the parent class.

If you override the connect, disconnect or any other methods from the parent, you'll want to call `super.method()` to make sure the parent functionality is executed.

## Development

### Project setup
```bash
$ yarn install
$ yarn dev
```

### Linter
[Prettier](https://prettier.io/) and [ESLint](https://eslint.org/) are responsible to lint and format this component:
```bash
$ yarn lint
$ yarn format
```

## Contributing

Do not hesitate to contribute to the project by adapting or adding features ! Bug reports or pull requests are welcome.

## License

This project is released under the [MIT](http://opensource.org/licenses/MIT) license.
