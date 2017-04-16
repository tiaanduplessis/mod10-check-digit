<h1 align="center">mod10-check-digit</h1>
<div align="center">
  <strong>Calculate the check digit(mod10 algorithm)</strong>
</div>
<br>
<div align="center">
  <a href="https://npmjs.org/package/mod10-check-digit">
    <img src="https://img.shields.io/npm/v/mod10-check-digit.svg?style=flat-square" alt="Package version" />
  </a>
  <a href="https://npmjs.org/package/mod10-check-digit">
  <img src="https://img.shields.io/npm/dm/mod10-check-digit.svg?style=flat-square" alt="Downloads" />
  </a>
  <a href="https://github.com/feross/standard">
    <img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square" alt="Standard" />
  </a>
  <a href="https://travis-ci.org/tiaanduplessis/mod10-check-digit">
    <img src="https://img.shields.io/travis/tiaanduplessis/mod10-check-digit.svg?style=flat-square" alt="Travis Build" />
  </a>
  <a href="https://github.com/RichardLitt/standard-readme)">
    <img src="https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square" alt="Standard Readme" />
  </a>
  <a href="https://badge.fury.io/gh/tiaanduplessis%2Fmod10-check-digit">
    <img src="https://badge.fury.io/gh/tiaanduplessis%2Fmod10-check-digit.svg?style=flat-square" alt="GitHub version" />
  </a>
  <a href="https://dependencyci.com/github/tiaanduplessis/mod10-check-digit">
    <img src="https://dependencyci.com/github/tiaanduplessis/mod10-check-digit/badge?style=flat-square" alt="Dependency CI" />
  </a>
  <a href="https://github.com/tiaanduplessis/mod10-check-digit/blob/master/LICENSE">
    <img src="https://img.shields.io/npm/l/mod10-check-digit.svg?style=flat-square" alt="License" />
  </a>
  <a href="http://makeapullrequest.com">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="PRs" />
  </a>
  <a href="https://www.paypal.me/tiaanduplessis/1">
    <img src="https://img.shields.io/badge/$-support-green.svg?style=flat-square" alt="Donate" />
  </a>
</div>
<br>
<div align="center">
  <a href="https://github.com/tiaanduplessis/mod10-check-digit/watchers">
    <img src="https://img.shields.io/github/watchers/tiaanduplessis/mod10-check-digit.svg?style=social" alt="Github Watch Badge" />
  </a>
  <a href="https://github.com/tiaanduplessis/mod10-check-digit/stargazers">
    <img src="https://img.shields.io/github/stars/tiaanduplessis/mod10-check-digit.svg?style=social" alt="Github Star Badge" />
  </a>
  <a href="https://twitter.com/intent/tweet?text=Check%20out%20mod10-check-digit!%20https://github.com/tiaanduplessis/mod10-check-digit%20%F0%9F%91%8D">
    <img src="https://img.shields.io/twitter/url/https/github.com/tiaanduplessis/mod10-check-digit.svg?style=social" alt="Tweet" />
  </a>
</div>
<br>
<div align="center">
  Built with ❤︎ by <a href="tiaan.beer">Tiaan</a> and <a href="https://github.com/tiaanduplessis/mod10-check-digit/graphs/contributors">contributors</a>
</div>

<h2>Table of Contents</h2>
<details>
  <summary>Table of Contents</summary>
  <li><a href="#install">Install</a></li>
  <li><a href="#usage">Usage</a></li>
  <li><a href="#cli">CLI</a></li>
  <li><a href="#contribute">Contribute</a></li>
  <li><a href="#license">License</a></li>
</details>

## Install

```sh
$ npm install --save mod10-check-digit
# OR
$ yarn add mod10-check-digit
```

## Usage

Module exports a single function that takes a number `string` as argument and returns the check digit `number`.

```js
const mod10CheckDigit = require('mod10-check-digit')

console.log(mod10CheckDigit('9202204720082')) // 2
console.log(mod10CheckDigit('7992739871')) // 3
console.log(mod10CheckDigit('7240157335352')) // 4

```

## CLI

```sh
$ npm install --global mod10-check-digit
# OR
$ yarn global add mod10-check-digit
```

Then:

```sh
$ mod10-check-digit 9202204720082
# 2
```


## Contribute

Contributions are welcome. Please open up an issue or create PR if you would like to help out.

Note: If editing the README, please conform to the [standard-readme](https://github.com/RichardLitt/standard-readme) specification.

## License

Licensed under the MIT License.
