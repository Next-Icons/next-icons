import React, { forwardRef, SVGAttributes } from "react";

interface IconProps extends SVGAttributes<SVGElement> {
	color?: string;
	size?: string | number;
	strokeWidth?: string | number;
}

const AirplaneLandLeft = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M18.0516 20.0928H2.24219" />
			<path d="M19.5 4L21 9.98552L14.2505 12.289L17 14.4747L12 15.971L9.5 13.9102L3.56558 15.9355C2.79804 16.1975 2 15.6284 2 14.8192C2 11.5028 4.50658 8.72002 7.81207 8.36672L16 7.49156L16.5 4H19.5Z" />
		</svg>
	);
});

AirplaneLandLeft.displayName = "AirplaneLandLeft";
export default AirplaneLandLeft;
