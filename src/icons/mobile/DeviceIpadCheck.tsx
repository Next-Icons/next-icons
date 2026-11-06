import { forwardRef } from "react";
import type { IconProps } from "../../types";
const DeviceIpadCheck = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M11.5 21h-5.5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v8" />
			<path d="M9 18h2" />
			<path d="M15 19l2 2l4 -4" />
		</svg>
	);
});

DeviceIpadCheck.displayName = "DeviceIpadCheck";
export default DeviceIpadCheck;
