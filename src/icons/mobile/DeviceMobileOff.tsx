import { forwardRef } from "react";
import type { IconProps } from "../../types";
const DeviceMobileOff = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M7.159 3.185c.256 -.119 .54 -.185 .841 -.185h8a2 2 0 0 1 2 2v9m0 4v1a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-13" />
			<path d="M11 4h2" />
			<path d="M3 3l18 18" />
			<path d="M12 17v.01" />
		</svg>
	);
});

DeviceMobileOff.displayName = "DeviceMobileOff";
export default DeviceMobileOff;
