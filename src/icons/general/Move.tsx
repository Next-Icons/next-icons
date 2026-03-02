import React, { forwardRef, SVGAttributes } from "react";

interface IconProps extends SVGAttributes<SVGElement> {
	color?: string;
	size?: string | number;
	strokeWidth?: string | number;
}

const Move = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 2, ...rest }, ref) => {
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
			<polyline points="5 9 2 12 5 15" />
			<polyline points="9 5 12 2 15 5" />
			<polyline points="15 19 12 22 9 19" />
			<polyline points="19 9 22 12 19 15" />
			<line x1="2" y1="12" x2="22" y2="12" />
			<line x1="12" y1="2" x2="12" y2="22" />
		</svg>
	);
});

Move.displayName = "Move";
export default Move;
