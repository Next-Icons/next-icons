import { forwardRef } from "react";
import type { IconProps } from "../../types";
const DeviceLaptopOff = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M3 19h16" />
			<path d="M10 6h8a1 1 0 0 1 1 1v8m-3 1h-10a1 1 0 0 1 -1 -1v-8a1 1 0 0 1 1 -1" />
			<path d="M3 3l18 18" />
		</svg>
	);
});

DeviceLaptopOff.displayName = "DeviceLaptopOff";
export default DeviceLaptopOff;
