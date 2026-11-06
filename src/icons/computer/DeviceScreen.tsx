import { forwardRef } from "react";
import type { IconProps } from "../../types";
const DeviceScreen = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M5 5a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-14" />
			<path d="M15 7l-6 10" />
			<path d="M15 14l-1.75 3" />
			<path d="M10.75 7l-1.75 3" />
		</svg>
	);
});

DeviceScreen.displayName = "DeviceScreen";
export default DeviceScreen;
