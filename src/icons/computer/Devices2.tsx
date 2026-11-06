import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Devices2 = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M10 15h-6a1 1 0 0 1 -1 -1v-8a1 1 0 0 1 1 -1h6" />
			<path d="M13 5a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1l0 -14" />
			<path d="M7 19l3 0" />
			<path d="M17 8l0 .01" />
			<path d="M16 16a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
			<path d="M9 15l0 4" />
		</svg>
	);
});

Devices2.displayName = "Devices2";
export default Devices2;
