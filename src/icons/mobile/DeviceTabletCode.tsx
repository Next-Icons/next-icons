import { forwardRef } from "react";
import type { IconProps } from "../../types";
const DeviceTabletCode = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M11.5 21h-5.5a1 1 0 0 1 -1 -1v-16a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v9" />
			<path d="M12.344 16.06a1 1 0 0 0 -1.07 1.627" />
			<path d="M20 21l2 -2l-2 -2" />
			<path d="M17 17l-2 2l2 2" />
		</svg>
	);
});

DeviceTabletCode.displayName = "DeviceTabletCode";
export default DeviceTabletCode;
