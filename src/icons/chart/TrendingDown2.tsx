import { forwardRef } from "react";
import type { IconProps } from "../../types";
const TrendingDown2 = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M3 6h5l7 10h6" />
			<path d="M18 19l3 -3l-3 -3" />
		</svg>
	);
});

TrendingDown2.displayName = "TrendingDown2";
export default TrendingDown2;
