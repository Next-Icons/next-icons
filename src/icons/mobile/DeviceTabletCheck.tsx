import { forwardRef } from "react";
import type { IconProps } from "../../types";
const DeviceTabletCheck = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M11.5 21h-5.5a1 1 0 0 1 -1 -1v-16a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v9.5" />
			<path d="M12.314 16.05a1 1 0 0 0 -1.042 1.635" />
			<path d="M15 19l2 2l4 -4" />
		</svg>
	);
});

DeviceTabletCheck.displayName = "DeviceTabletCheck";
export default DeviceTabletCheck;
