import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ChartDonut2 = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M12 3v5m4 4h5" />
			<path d="M8 12a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
			<path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
		</svg>
	);
});

ChartDonut2.displayName = "ChartDonut2";
export default ChartDonut2;
