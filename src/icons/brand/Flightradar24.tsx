import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Flightradar24 = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
			<path d="M7 12a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
			<path d="M8.5 20l3.5 -8l-6.5 6" />
			<path d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
		</svg>
	);
});

Flightradar24.displayName = "Flightradar24";
export default Flightradar24;
