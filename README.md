# Next-Icons

![NPM Downloads](https://img.shields.io/npm/d18m/@deemlol/next-icons)
![NPM Version](https://img.shields.io/npm/v/@deemlol/next-icons)
![NPM License](https://img.shields.io/npm/l/@deemlol/next-icons)

### What is Next-Icons?

A lightweight icon component library for React and Next.js, designed for simplicity and seamless integration. Each icon is designed on a 24x24 grid.

### Documentation

https://www.nexticons.com

### Installation

    yarn add @deemlol/next-icons@latest

or

    npm i @deemlol/next-icons@latest

### Usage

```javascript
import { Check } from "@deemlol/next-icons";

export default function Home() {
	return <Check />;
}
```

You can also include the whole icon pack:

```javascript
import * as Icon from "@deemlol/next-icons";

export default function Home() {
	return <Icon.Check />;
}
```

### Props

Our icons can be also configured with inline props.

```javascript
<Check size={40} color="#FF0000" />
```

> If you need, you can also use className="" in the props.

# Sponsor Us

Do you like our icons? You can sponsor us via [Ko-Fi](https://ko-fi.com/deemdev), it will help us a lot!
