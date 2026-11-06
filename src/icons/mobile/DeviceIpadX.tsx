import { forwardRef } from "react";
import type { IconProps } from "../../types";
const DeviceIpadX = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M22 22l-5 -5" />
			<path d="M17 22l5 -5" />
			<path d="M13 21h-7a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v9" />
			<path d="M9 18h4" />
		</svg>
	);
});

DeviceIpadX.displayName = "DeviceIpadX";
export default DeviceIpadX;
