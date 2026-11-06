import { forwardRef } from "react";
import type { IconProps } from "../../types";
const AnalyticsRestricted = forwardRef<SVGSVGElement, IconProps>(
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
				<path
					d="M8 16v-5m4 5V8m4 8v-2M12 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6"
					stroke={color}
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={strokeWidth}
				/>
				<path
					d="M20.975 7.975a3.5 3.5 0 1 0-4.95-4.95m4.95 4.95a3.5 3.5 0 1 1-4.95-4.95m4.95 4.95L18.5 5.5l-2.475-2.475"
					stroke={color}
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={strokeWidth}
				/>
			</svg>
		);
	}
);

AnalyticsRestricted.displayName = "AnalyticsRestricted";
export default AnalyticsRestricted;
