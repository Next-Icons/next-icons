import { forwardRef } from "react";
import type { IconProps } from "../../types";
const DeviceTvOff = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M11 7h8a2 2 0 0 1 2 2v8m-1.178 2.824c-.25 .113 -.529 .176 -.822 .176h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2h2" />
			<path d="M16 3l-4 4l-4 -4" />
			<path d="M3 3l18 18" />
		</svg>
	);
});

DeviceTvOff.displayName = "DeviceTvOff";
export default DeviceTvOff;
