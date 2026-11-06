import { forwardRef } from "react";
import type { IconProps } from "../../types";
const TrendingUp = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M16 7h6v6" />
			<path d="m22 7-8.5 8.5-5-5L2 17" />
		</svg>
	);
});

TrendingUp.displayName = "TrendingUp";
export default TrendingUp;
