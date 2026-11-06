import { forwardRef } from "react";
import type { IconProps } from "../../types";
const DeviceSpeakerOff = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M7 3h10a2 2 0 0 1 2 2v10m0 4a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-14" />
			<path d="M11.114 11.133a3 3 0 1 0 3.754 3.751" />
			<path d="M12 7v.01" />
			<path d="M3 3l18 18" />
		</svg>
	);
});

DeviceSpeakerOff.displayName = "DeviceSpeakerOff";
export default DeviceSpeakerOff;
