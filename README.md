![NextIcons](.github/assets/Banner.png)

![NPM Downloads](https://img.shields.io/npm/dm/%40deemlol%2Fnext-icons?style=flat-square&label=Downloads&labelColor=%23fafafa&color=%23BFFB4F&cacheSeconds=6000&link=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2F%40deemlol%2Fnext-icons&link=https%3A%2F%2Fwww.nexticons.com) ![GitHub Repo stars](https://img.shields.io/github/stars/Next-Icons/next-icons?style=flat-square&label=GitHub%20Stars&labelColor=%23fafafa&color=%23BFFB4F&link=https%3A%2F%2Fgithub.com%2FNext-Icons%2Fnext-icons&link=https%3A%2F%2Fwww.nexticons.com) ![NPM License](https://img.shields.io/npm/l/%40deemlol%2Fnext-icons?style=flat-square&label=Licence&labelColor=%23fafafa&color=%23BFFB4F&link=https%3A%2F%2Fwww.nexticons.com) ![NPM Version](https://img.shields.io/npm/v/%40deemlol%2Fnext-icons?style=flat-square&label=Version&labelColor=%23fafafa&color=%23BFFB4F&link=https%3A%2F%2Fwww.nexticons.com)

## What is Next Icons?

An open-source icon library for [**React**](https://react.dev/) and [**Next.js**](https://nextjs.org/) that is lightweight, designed for simplicity and seamless integration. Each icon is designed on a **24x24** pixels grid.

<a href="https://www.nexticons.com"><strong>Browse at nexticons.com &rarr;</strong></a>

## Installation

You can download any icon directly from [**nexticons.com**](https://www.nexticons.com) or get them from this repository.

The icons are also available via the [**@deemlol/next-icons**](https://www.npmjs.com/package/@deemlol/next-icons) NPM package.

```bash
npm install @deemlol/next-icons
# or
yarn add @deemlol/next-icons
# or
pnpm add @deemlol/next-icons
# or
bun add @deemlol/next-icons
```

## Example Usage

```javascript
import { Cookie } from "@deemlol/next-icons";

export default function Question() {
	return (
		<h1>
			Do you want <Cookie />?
		</h1>
	);
}
```

You can also include the whole icon pack:

```javascript
import * as Icon from "@deemlol/next-icons";

export default function Question() {
	return (
		<h1>
			Do you want <Icon.Cookie />?
		</h1>
	);
}
```

## Animated Icons

Animated icons are available from a dedicated import path:

```javascript
import { Alarm } from "@deemlol/next-icons/animated";

export default function Preview() {
	return (
		<div>
			<Alarm />
		</div>
	);
}
```

You can use the same props as regular icons (`size`, `color`, `strokeWidth`, `className`).
Some animations are interactive and run on hover/focus.

## Configuration

All our icons can be also configured with props.

```javascript
<Cookie size={40} color="#FF0000" strokeWidth={1.5} className="flex items-center" />
```

## Support

If you encounter any issues or have questions, feel free to reach out to our [**Support Team**](https://www.nexticons.com/contact) via contact form on our website. Or you can also open an issue on our [**GitHub Repository**](https://github.com/Next-Icons/next-icons/issues).

## License

This project is licensed under the MIT License. See the [**LICENSE**](https://github.com/Next-Icons/next-icons/blob/main/LICENSE) file for more information.

## Contributors

<a href="https://github.com/Next-Icons/next-icons/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Next-Icons/next-icons" />
</a>

Thanks to all our contributors for their help and support in improving **Next Icons**!
