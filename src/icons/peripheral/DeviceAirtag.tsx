import { forwardRef } from "react";
import type { IconProps } from "../../types";
const DeviceAirtag = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M4 12a8 8 0 1 0 16 0a8 8 0 0 0 -16 0" />
			<path d="M9 15v.01" />
			<path d="M15 15a6 6 0 0 0 -6 -6" />
			<path d="M12 15a3 3 0 0 0 -3 -3" />
		</svg>
	);
});

DeviceAirtag.displayName = "DeviceAirtag";
export default DeviceAirtag;
