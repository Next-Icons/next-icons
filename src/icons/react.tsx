import React, { forwardRef, SVGAttributes } from "react";

/******************************************************************************
Copyright (c) Alexandr Virgovič.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

interface IconProps extends SVGAttributes<SVGElement> {
	color?: string;
	size?: string | number;
}

const ReactJS = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, ...rest }, ref) => {
	return (
		<svg
			ref={ref}
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			stroke={color}
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			{...rest}
		>
			<path d="M8 12C8 6.47715 9.79086 2 12 2C14.2091 2 16 6.47715 16 12C16 17.5228 14.2091 22 12 22C9.79086 22 8 17.5228 8 12Z" />
			<path d="M9.97529 8.58334C14.8173 5.85973 19.649 5.1815 20.7673 7.06847C21.8855 8.95544 18.8667 12.6931 14.0247 15.4167C9.18269 18.1403 4.35097 18.8185 3.23275 16.9315C2.11454 15.0446 5.13327 11.3069 9.97529 8.58334Z" />
			<path d="M14.0247 8.58334C18.8667 11.3069 21.8855 15.0446 20.7672 16.9315C19.649 18.8185 14.8173 18.1403 9.97529 15.4167C5.13327 12.6931 2.11454 8.95544 3.23275 7.06847C4.35097 5.18151 9.18269 5.85973 14.0247 8.58334Z" />
			<path d="M12 12V12.01" />
		</svg>
	);
});

ReactJS.displayName = "ReactJS";
export default ReactJS;
