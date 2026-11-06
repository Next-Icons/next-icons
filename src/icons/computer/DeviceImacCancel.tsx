import { forwardRef } from "react";
import type { IconProps } from "../../types";
const DeviceImacCancel = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M12.5 17h-8.5a1 1 0 0 1 -1 -1v-12a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v8" />
			<path d="M3 13h12.5" />
			<path d="M8 21h4.5" />
			<path d="M10 17l-.5 4" />
			<path d="M16 19a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
			<path d="M17 21l4 -4" />
		</svg>
	);
});

DeviceImacCancel.displayName = "DeviceImacCancel";
export default DeviceImacCancel;
