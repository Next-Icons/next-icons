import { forwardRef } from "react";
import type { IconProps } from "../../types";
const DeviceIpadOff = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M6 2h12a2 2 0 0 1 2 2v12m0 4a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-16" />
			<path d="M9 19h6" />
			<path d="M3 3l18 18" />
		</svg>
	);
});

DeviceIpadOff.displayName = "DeviceIpadOff";
export default DeviceIpadOff;
