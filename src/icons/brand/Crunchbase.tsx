import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Crunchbase = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M3 19v-14a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2" />
			<path d="M10.414 11.586a2 2 0 1 0 0 2.828" />
			<path d="M13 13a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
			<path d="M13 7v6" />
		</svg>
	);
});

Crunchbase.displayName = "Crunchbase";
export default Crunchbase;
