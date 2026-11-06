import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ChartScatter3d = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M3 20l9 -7" />
			<path d="M12 3v10l9 7" />
			<path d="M17 12v.015" />
			<path d="M17 4.015v.015" />
			<path d="M21 8.015v.015" />
			<path d="M12 19.015v.015" />
			<path d="M3 12.015v.015" />
			<path d="M7 8.015v.015" />
			<path d="M3 4.015v.015" />
		</svg>
	);
});

ChartScatter3d.displayName = "ChartScatter3d";
export default ChartScatter3d;
