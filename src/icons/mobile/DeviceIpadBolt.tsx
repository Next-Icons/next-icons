import { forwardRef } from "react";
import type { IconProps } from "../../types";
const DeviceIpadBolt = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M13.5 21h-7.5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v7" />
			<path d="M9 18h4" />
			<path d="M19 16l-2 3h4l-2 3" />
		</svg>
	);
});

DeviceIpadBolt.displayName = "DeviceIpadBolt";
export default DeviceIpadBolt;
