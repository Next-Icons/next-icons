import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Etsy = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M14 12h-5" />
			<path d="M3 8a5 5 0 0 1 5 -5h8a5 5 0 0 1 5 5v8a5 5 0 0 1 -5 5h-8a5 5 0 0 1 -5 -5l0 -8" />
			<path d="M15 16h-5a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h5" />
		</svg>
	);
});

Etsy.displayName = "Etsy";
export default Etsy;
