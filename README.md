# Next Icons

Lightweight library for React and Next.js, designed for simplicity and seamless integration.

![NPM Downloads](https://img.shields.io/npm/d18m/@deemlol/next-icons)
![NPM Version](https://img.shields.io/npm/v/@deemlol/next-icons)
![NPM License](https://img.shields.io/npm/l/@deemlol/next-icons)

## Important Information

- Website is not done yet, you can only see avaiable icons in the source code of the package, in **icons** folder.

## Installation

    yarn add @deemlol/next-icons@latest

or

    npm i @deemlol/next-icons@latest

## Usage

```jsx
import { ArrowDown } from "@deemlol/next-icons";

export default function Page() {
	return <ArrowDown />;
}
```

You can also wrap your app inside a `NextIconsProvider` component, so every icon will have the same appearance. If you set specific props for each icon the Provider will be overwritten.

```jsx
import { ArrowDown, ArrowUp, NextIconsProvider } from "@deemlol/next-icons";

export default function Page() {
	return (
		<NextIconsProvider primaryColor="blue" secondaryColor="white" size="xl" stroke="bold" set="bulk">
			<ArrowDown />
			<ArrowUp />
		</NextIconsProvider>
	);
}
```

You can also use custom style, if you want to use some effect or something...

```jsx
<ArrowDown style={{ transform: "rotate(45deg)" }} primaryColor="blue" secondaryColor="white" size="xl" stroke="bold" set="bulk" />
```

## Props

- Prop: **label** | Type: **string** | Default: **null**
- Prop: **filled** | Type: **boolean** | Default: **false**
- Prop: **primaryColor** | Type: **string** | Default: **currentColor**
- Prop: **secondaryColor** | Type: **string** | Default: **currentColor**
- Prop: **size** | Type: **string** | Options: **sm**, **md**, **lg**, **xl** | Default: **md**
- Prop: **set** | Type: **string** | Options: **light**, **bold**, **two-tone**, **bulk**, **broken**, **curved** | Default: **light**
- Prop: **stroke** | Type: **string** | Options: **light**, **regular**, **bold** | Default: **regular**
- Prop: **style** | Type: **object**

## License

MIT © [Alexandr Virgovič](https://github.com/devdeem)
