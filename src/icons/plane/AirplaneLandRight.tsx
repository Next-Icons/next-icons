import React, { forwardRef, SVGAttributes } from "react";

interface IconProps extends SVGAttributes<SVGElement> {
	color?: string;
	size?: string | number;
	strokeWidth?: string | number;
}

const AirplaneLandRight = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 2, ...rest }, ref) => {
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
			<path d="M6 20L22 20" />
			<path d="M3.5 4L2 9.98552L8.74946 12.289L6 14.4747L11 15.971L13.5 13.9102L19.4344 15.9355C20.202 16.1975 21 15.6284 21 14.8192C21 11.5028 18.4934 8.72002 15.1879 8.36672L7 7.49156L6.5 4H3.5Z" />
		</svg>
	);
});

AirplaneLandRight.displayName = "AirplaneLandRight";
export default AirplaneLandRight;
