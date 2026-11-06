import { forwardRef } from "react";
import type { IconProps } from "../../types";
const DeviceTvOld = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M3 9a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2l0 -9" />
			<path d="M16 3l-4 4l-4 -4" />
			<path d="M15 7v13" />
			<path d="M18 15v.01" />
			<path d="M18 12v.01" />
		</svg>
	);
});

DeviceTvOld.displayName = "DeviceTvOld";
export default DeviceTvOld;
