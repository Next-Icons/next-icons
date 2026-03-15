import React, { forwardRef, SVGAttributes } from "react";

interface IconProps extends SVGAttributes<SVGElement> {
	color?: string;
	size?: string | number;
	strokeWidth?: string | number;
}

const Crosshair = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<circle cx="12" cy="12" r="10" />
			<line x1="22" y1="12" x2="18" y2="12" />
			<line x1="6" y1="12" x2="2" y2="12" />
			<line x1="12" y1="6" x2="12" y2="2" />
			<line x1="12" y1="22" x2="12" y2="18" />
		</svg>
	);
});

Crosshair.displayName = "Crosshair";
export default Crosshair;
