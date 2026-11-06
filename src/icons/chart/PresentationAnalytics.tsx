import { forwardRef } from "react";
import type { IconProps } from "../../types";
const PresentationAnalytics = forwardRef<SVGSVGElement, IconProps>(
	({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
				<path d="M9 12v-4" />
				<path d="M15 12v-2" />
				<path d="M12 12v-1" />
				<path d="M3 4h18" />
				<path d="M4 4v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-10" />
				<path d="M12 16v4" />
				<path d="M9 20h6" />
			</svg>
		);
	}
);

PresentationAnalytics.displayName = "PresentationAnalytics";
export default PresentationAnalytics;
