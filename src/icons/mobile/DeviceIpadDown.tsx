import { forwardRef } from "react";
import type { IconProps } from "../../types";
const DeviceIpadDown = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M12.5 21h-6.5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v7" />
			<path d="M9 18h3" />
			<path d="M19 16v6" />
			<path d="M22 19l-3 3l-3 -3" />
		</svg>
	);
});

DeviceIpadDown.displayName = "DeviceIpadDown";
export default DeviceIpadDown;
