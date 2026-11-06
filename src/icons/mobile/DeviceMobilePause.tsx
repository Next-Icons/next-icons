import { forwardRef } from "react";
import type { IconProps } from "../../types";
const DeviceMobilePause = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M13 21h-5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8" />
			<path d="M17 17v5" />
			<path d="M21 17v5" />
			<path d="M11 4h2" />
			<path d="M12 17v.01" />
		</svg>
	);
});

DeviceMobilePause.displayName = "DeviceMobilePause";
export default DeviceMobilePause;
