import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Letterboxd = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M6 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
			<path d="M10 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
			<path d="M14 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
		</svg>
	);
});

Letterboxd.displayName = "Letterboxd";
export default Letterboxd;
