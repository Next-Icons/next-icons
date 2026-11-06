import { forwardRef } from "react";
import type { IconProps } from "../../types";
const DevicesPcOff = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M9 9v10h-6v-14h2" />
			<path d="M13 9h9v7h-2m-4 0h-4v-4" />
			<path d="M14 19h5" />
			<path d="M17 17v2" />
			<path d="M6 13v.01" />
			<path d="M6 16v.01" />
			<path d="M3 3l18 18" />
		</svg>
	);
});

DevicesPcOff.displayName = "DevicesPcOff";
export default DevicesPcOff;
