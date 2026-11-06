import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ChartDonut4 = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M8.848 14.667l-3.348 2.833" />
			<path d="M12 3v5m4 4h5" />
			<path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
			<path d="M14.219 15.328l2.781 4.172" />
			<path d="M8 12a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
		</svg>
	);
});

ChartDonut4.displayName = "ChartDonut4";
export default ChartDonut4;
