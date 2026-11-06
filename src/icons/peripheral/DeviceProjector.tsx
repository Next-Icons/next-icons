import { forwardRef } from "react";
import type { IconProps } from "../../types";
const DeviceProjector = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M8 9a5 5 0 1 0 10 0a5 5 0 0 0 -10 0" />
			<path d="M9 6h-4a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2 -2v-8a2 2 0 0 0 -2 -2h-2" />
			<path d="M6 15h1" />
			<path d="M7 18l-1 2" />
			<path d="M18 18l1 2" />
		</svg>
	);
});

DeviceProjector.displayName = "DeviceProjector";
export default DeviceProjector;
