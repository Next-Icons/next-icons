import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ChartCovariate = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M0 0h24v24H0z" fill="none" stroke="none" />
			<path d="M18 11h.009" />
			<path d="M14 15h.009" />
			<path d="M12 6h.009" />
			<path d="M8 10h.009" />
			<path d="M3 21l17 -17" />
			<path d="M3 3v18h18" />
		</svg>
	);
});

ChartCovariate.displayName = "ChartCovariate";
export default ChartCovariate;
