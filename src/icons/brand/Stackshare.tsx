import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Stackshare = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M17 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
			<path d="M17 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
			<path d="M3 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
			<path d="M7 12h3l3.5 6h3.5" />
			<path d="M17 6h-3.5l-3.5 6" />
		</svg>
	);
});

Stackshare.displayName = "Stackshare";
export default Stackshare;
