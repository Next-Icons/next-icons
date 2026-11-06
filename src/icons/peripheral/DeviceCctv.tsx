import { forwardRef } from "react";
import type { IconProps } from "../../types";
const DeviceCctv = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M3 4a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1l0 -2" />
			<path d="M8 14a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
			<path d="M19 7v7a7 7 0 0 1 -14 0v-7" />
			<path d="M12 14l.01 0" />
		</svg>
	);
});

DeviceCctv.displayName = "DeviceCctv";
export default DeviceCctv;
