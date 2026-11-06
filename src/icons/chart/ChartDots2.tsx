import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ChartDots2 = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M7 15a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
			<path d="M11 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
			<path d="M16 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
			<path d="M21 3l-6 1.5" />
			<path d="M14.113 6.65l2.771 3.695" />
			<path d="M16 12.5l-5 2" />
		</svg>
	);
});

ChartDots2.displayName = "ChartDots2";
export default ChartDots2;
