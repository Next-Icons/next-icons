import { forwardRef } from "react";
import type { IconProps } from "../../types";
const DeviceFloppy = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2" />
			<path d="M10 14a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
			<path d="M14 4l0 4l-6 0l0 -4" />
		</svg>
	);
});

DeviceFloppy.displayName = "DeviceFloppy";
export default DeviceFloppy;
