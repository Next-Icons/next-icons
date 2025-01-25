[![NextIcons](https://www.nexticons.com/assets/Banner.png)](https://www.nexticons.com)

![NPM Downloads](https://img.shields.io/npm/d18m/@deemlol/next-icons)
![NPM Version](https://img.shields.io/npm/v/@deemlol/next-icons)
![NPM License](https://img.shields.io/npm/l/@deemlol/next-icons)

A lightweight icon component library for React and Next.js, designed for simplicity and seamless integration. Each icon is designed on a 24x24 grid.

## Installation (for standard modern project)

```bash
yarn add @deemlol/next-icons@latest
# or
npm install @deemlol/next-icons@latest
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

#### _You can also include the whole icon pack:_

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

## Configuration

_Our icons can be also configured with inline props_

```javascript
<Cookie size={40} color="#FF0000" className="flex items-center" />
```

## Our Website

For more information, visit our [Official Website](https://www.nexticons.com).

## Support

If you encounter any issues or have questions, feel free to reach out to our [Support Team](https://www.nexticons.com/contact).

## License

This project is licensed under the MIT License. See the [LICENSE](https://www.nexticons.com/license) for more information.
