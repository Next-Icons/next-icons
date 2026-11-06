import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Signal4gPlus = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M17 12h4" />
			<path d="M3 8v3a1 1 0 0 0 1 1h3" />
			<path d="M7 8v8" />
			<path d="M19 10v4" />
			<path d="M14 8h-2a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2v-4h-1" />
		</svg>
	);
});

Signal4gPlus.displayName = "Signal4gPlus";
export default Signal4gPlus;
