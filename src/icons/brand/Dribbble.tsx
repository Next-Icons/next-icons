import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Dribbble = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M9 3.6c5 6 7 10.5 7.5 16.2" />
			<path d="M6.4 19c3.5 -3.5 6 -6.5 14.5 -6.4" />
			<path d="M3.1 10.75c5 0 9.814 -.38 15.314 -5" />
		</svg>
	);
});

Dribbble.displayName = "Dribbble";
export default Dribbble;
