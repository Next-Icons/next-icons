import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Vite = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M10 4.5l6 -1.5l-2 6.5l2 -.5l-4 7v-5l-3 1l1 -7.5" />
			<path d="M15 6.5l7 -1.5l-10 17l-10 -17l7.741 1.5" />
		</svg>
	);
});

Vite.displayName = "Vite";
export default Vite;
