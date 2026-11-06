import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ChartDots = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M3 3v18h18" />
			<path d="M7 9a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
			<path d="M17 7a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
			<path d="M12 15a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
			<path d="M10.16 10.62l2.34 2.88" />
			<path d="M15.088 13.328l2.837 -4.586" />
		</svg>
	);
});

ChartDots.displayName = "ChartDots";
export default ChartDots;
