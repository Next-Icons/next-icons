import { forwardRef } from "react";
import type { IconProps } from "../../types";
const SmartphoneNfc = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<rect height="12" rx="1" width="7" x="2" y="6" />
			<path d="M13 8.32a7.43 7.43 0 0 1 0 7.36" />
			<path d="M16.46 6.21a11.76 11.76 0 0 1 0 11.58" />
			<path d="M19.91 4.1a15.91 15.91 0 0 1 .01 15.8" />
		</svg>
	);
});

SmartphoneNfc.displayName = "SmartphoneNfc";
export default SmartphoneNfc;
