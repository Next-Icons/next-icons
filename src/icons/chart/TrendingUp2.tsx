import { forwardRef } from "react";
import type { IconProps } from "../../types";
const TrendingUp2 = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M18 5l3 3l-3 3" />
			<path d="M3 18h5l7 -10h6" />
		</svg>
	);
});

TrendingUp2.displayName = "TrendingUp2";
export default TrendingUp2;
