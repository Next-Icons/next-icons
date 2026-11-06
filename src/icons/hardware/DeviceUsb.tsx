import { forwardRef } from "react";
import type { IconProps } from "../../types";
const DeviceUsb = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M7 8h10v8a5 5 0 0 1 -10 0l0 -8" />
			<path d="M9 8v-5h6v5" />
		</svg>
	);
});

DeviceUsb.displayName = "DeviceUsb";
export default DeviceUsb;
