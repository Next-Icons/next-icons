import { forwardRef } from "react";
import type { IconProps } from "../../types";
const DeviceSpeaker = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M5 5a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2l0 -14" />
			<path d="M9 14a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
			<path d="M12 7l0 .01" />
		</svg>
	);
});

DeviceSpeaker.displayName = "DeviceSpeaker";
export default DeviceSpeaker;
