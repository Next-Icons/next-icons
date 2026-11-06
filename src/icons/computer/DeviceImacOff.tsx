import { forwardRef } from "react";
import type { IconProps } from "../../types";
const DeviceImacOff = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M7 3h13a1 1 0 0 1 1 1v12c0 .28 -.115 .532 -.3 .713m-3.7 .287h-13a1 1 0 0 1 -1 -1v-12c0 -.276 .112 -.526 .293 -.707" />
			<path d="M3 13h10m4 0h4" />
			<path d="M8 21h8" />
			<path d="M10 17l-.5 4" />
			<path d="M14 17l.5 4" />
			<path d="M3 3l18 18" />
		</svg>
	);
});

DeviceImacOff.displayName = "DeviceImacOff";
export default DeviceImacOff;
