import { forwardRef } from "react";
import type { IconProps } from "../../types";
const SquareRoundCorner = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M21 11a8 8 0 0 0-8-8" />
			<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
		</svg>
	);
});

SquareRoundCorner.displayName = "SquareRoundCorner";
export default SquareRoundCorner;
