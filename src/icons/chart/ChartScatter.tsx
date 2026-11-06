import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ChartScatter = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<circle cx="7.5" cy="7.5" fill={color} r=".5" />
			<circle cx="18.5" cy="5.5" fill={color} r=".5" />
			<circle cx="11.5" cy="11.5" fill={color} r=".5" />
			<circle cx="7.5" cy="16.5" fill={color} r=".5" />
			<circle cx="17.5" cy="14.5" fill={color} r=".5" />
			<path d="M3 3v16a2 2 0 0 0 2 2h16" />
		</svg>
	);
});

ChartScatter.displayName = "ChartScatter";
export default ChartScatter;
