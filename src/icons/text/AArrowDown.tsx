import React, { forwardRef, SVGAttributes } from "react";

interface IconProps extends SVGAttributes<SVGElement> {
	color?: string;
	size?: string | number;
	strokeWidth?: string | number;
}

const AArrowDown = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="m14 12 4 4 4-4" />
			<path d="M18 16V7" />
			<path d="m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16" />
			<path d="M3.304 13h6.392" />
		</svg>
	);
});

AArrowDown.displayName = "AArrowDown";
export default AArrowDown;
