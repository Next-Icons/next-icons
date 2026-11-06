import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ChartPpf = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M19 17c0 -6.075 -5.373 -11 -12 -11" />
			<path d="M3 3v18h18" />
		</svg>
	);
});

ChartPpf.displayName = "ChartPpf";
export default ChartPpf;
