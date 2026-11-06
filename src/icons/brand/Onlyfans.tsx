import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Onlyfans = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M8.5 6a6.5 6.5 0 1 0 0 13a6.5 6.5 0 0 0 0 -13" />
			<path d="M8.5 15a2.5 2.5 0 1 1 0 -5a2.5 2.5 0 0 1 0 5" />
			<path d="M14 16c2.5 0 6.42 -1.467 7 -4h-6c3 -1 6.44 -3.533 7 -6h-4c-3.03 0 -3.764 -.196 -5 1.5" />
		</svg>
	);
});

Onlyfans.displayName = "Onlyfans";
export default Onlyfans;
