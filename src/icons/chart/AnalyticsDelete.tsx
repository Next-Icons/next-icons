import { forwardRef } from "react";
import type { IconProps } from "../../types";
const AnalyticsDelete = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path
				d="M8 16v-5m4 5V8m4 8v-2M13 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7m-1-6 2-2m-2 2-2-2m2 2 2 2m-2-2-2 2"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={strokeWidth}
			/>
		</svg>
	);
});

AnalyticsDelete.displayName = "AnalyticsDelete";
export default AnalyticsDelete;
