import React, { forwardRef, SVGAttributes } from "react";

interface IconProps extends SVGAttributes<SVGElement> {
	color?: string;
	size?: string | number;
	strokeWidth?: string | number;
}

const Accessibility = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 2, ...rest }, ref) => {
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
			<circle cx="16" cy="4" r="1" />
			<path d="m18 19 1-7-6 1" />
			<path d="m5 8 3-3 5.5 3-2.36 3.5" />
			<path d="M4.24 14.5a5 5 0 0 0 6.88 6" />
			<path d="M13.76 17.5a5 5 0 0 0-6.88-6" />
		</svg>
	);
});

Accessibility.displayName = "Accessibility";
export default Accessibility;
