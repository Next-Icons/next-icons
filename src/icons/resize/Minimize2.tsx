import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Minimize2 = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="m14 10 7-7" />
			<path d="M20 10h-6V4" />
			<path d="m3 21 7-7" />
			<path d="M4 14h6v6" />
		</svg>
	);
});

Minimize2.displayName = "Minimize2";
export default Minimize2;
