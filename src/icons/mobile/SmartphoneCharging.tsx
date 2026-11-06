import { forwardRef } from "react";
import type { IconProps } from "../../types";
const SmartphoneCharging = forwardRef<SVGSVGElement, IconProps>(
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
				<rect height="20" rx="2" ry="2" width="14" x="5" y="2" />
				<path d="M12.667 8 10 12h4l-2.667 4" />
			</svg>
		);
	}
);

SmartphoneCharging.displayName = "SmartphoneCharging";
export default SmartphoneCharging;
