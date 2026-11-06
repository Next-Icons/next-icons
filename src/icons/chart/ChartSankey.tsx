import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ChartSankey = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M4 6c6.944 0 9.056 8 16 8" />
			<path d="M4 12c6.37 0 9.63 6 16 6" />
			<path d="M20 6c-7.526 0 -7.905 12 -16 12" />
		</svg>
	);
});

ChartSankey.displayName = "ChartSankey";
export default ChartSankey;
