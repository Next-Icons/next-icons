import React, { forwardRef, SVGAttributes } from "react";

interface IconProps extends SVGAttributes<SVGElement> {
	color?: string;
	size?: string | number;
	strokeWidth?: string | number;
}

const AlarmOff = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M6.87 6.87a8 8 0 1 0 11.26 11.26" />
			<path d="M19.9 14.25a8 8 0 0 0-9.15-9.15" />
			<path d="m22 6-3-3" />
			<path d="M6.26 18.67 4 21" />
			<path d="m2 2 20 20" />
			<path d="M4 4 2 6" />
		</svg>
	);
});

AlarmOff.displayName = "AlarmOff";
export default AlarmOff;
