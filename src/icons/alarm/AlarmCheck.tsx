import React, { forwardRef, SVGAttributes } from "react";

interface IconProps extends SVGAttributes<SVGElement> {
	color?: string;
	size?: string | number;
	strokeWidth?: string | number;
}

const AlarmCheck = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 2, ...rest }, ref) => {
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
			<circle cx="12" cy="13" r="8" />
			<path d="M5 3 2 6" />
			<path d="m22 6-3-3" />
			<path d="M6.38 18.7 4 21" />
			<path d="M17.64 18.67 20 21" />
			<path d="m9 13 2 2 4-4" />
		</svg>
	);
});

AlarmCheck.displayName = "AlarmCheck";
export default AlarmCheck;
