import { forwardRef } from "react";
import type { IconProps } from "../../types";
const DeviceAudioTape = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10" />
			<path d="M3 17l4 -3h10l4 3" />
			<path d="M7 9.5a.5 .5 0 1 0 1 0a.5 .5 0 1 0 -1 0" fill="#334155" />
			<path d="M16 9.5a.5 .5 0 1 0 1 0a.5 .5 0 1 0 -1 0" fill="#334155" />
		</svg>
	);
});

DeviceAudioTape.displayName = "DeviceAudioTape";
export default DeviceAudioTape;
