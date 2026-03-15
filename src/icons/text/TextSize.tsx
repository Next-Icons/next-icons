import React, { forwardRef, SVGAttributes } from "react";

interface IconProps extends SVGAttributes<SVGElement> {
	color?: string;
	size?: string | number;
	strokeWidth?: string | number;
}

const TextSize = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
	return (
		<svg
			ref={ref}
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			stroke={color}
			strokeWidth={strokeWidth}
			strokeLinecap="round"
			strokeLinejoin="round"
			{...rest}
		>
			<path d="M21 14h-5" />
			<path d="M16 16v-3.5a2.5 2.5 0 0 1 5 0V16" />
			<path d="M4.5 13h6" />
			<path d="m3 16 4.5-9 4.5 9" />
		</svg>
	);
});

TextSize.displayName = "TextSize";
export default TextSize;
