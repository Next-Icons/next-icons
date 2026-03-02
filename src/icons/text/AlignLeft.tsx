import React, { forwardRef, SVGAttributes } from "react";

interface IconProps extends SVGAttributes<SVGElement> {
	color?: string;
	size?: string | number;
	strokeWidth?: string | number;
}

const AlignLeft = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 2, ...rest }, ref) => {
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
			<line x1="17" y1="10" x2="3" y2="10" />
			<line x1="21" y1="6" x2="3" y2="6" />
			<line x1="21" y1="14" x2="3" y2="14" />
			<line x1="17" y1="18" x2="3" y2="18" />
		</svg>
	);
});

AlignLeft.displayName = "AlignLeft";
export default AlignLeft;
