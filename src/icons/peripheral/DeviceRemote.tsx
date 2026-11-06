import { forwardRef } from "react";
import type { IconProps } from "../../types";
const DeviceRemote = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M10 10a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
			<path d="M7 5a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2l0 -14" />
			<path d="M12 3v2" />
			<path d="M10 15v.01" />
			<path d="M10 18v.01" />
			<path d="M14 18v.01" />
			<path d="M14 15v.01" />
		</svg>
	);
});

DeviceRemote.displayName = "DeviceRemote";
export default DeviceRemote;
