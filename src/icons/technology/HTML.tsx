import React, { forwardRef, SVGAttributes } from "react";

interface IconProps extends SVGAttributes<SVGElement> {
	color?: string;
	size?: string | number;
	strokeWidth?: string | number;
}

const HTML = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 2, ...rest }, ref) => {
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
			<path d="M19.5 18L21.5 2H2.5L4.5 18L12 22L19.5 18Z" />
			<path d="M16.5 6H7.5L7.99965 10.5H15.9996L15.4996 16L11.9996 17L8.49965 16L8 13.5" />
		</svg>
	);
});

HTML.displayName = "HTML";
export default HTML;
