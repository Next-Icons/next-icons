import { forwardRef } from "react";
import type { IconProps } from "../../types";
const TrendingUpDown = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M14.828 14.828 21 21" />
			<path d="M21 16v5h-5" />
			<path d="m21 3-9 9-4-4-6 6" />
			<path d="M21 8V3h-5" />
		</svg>
	);
});

TrendingUpDown.displayName = "TrendingUpDown";
export default TrendingUpDown;
