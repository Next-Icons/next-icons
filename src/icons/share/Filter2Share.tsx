import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Filter2Share = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M4 6h16" />
			<path d="M6 12h12" />
			<path d="M9 18h3.5" />
			<path d="M16 22l5 -5" />
			<path d="M21 17v4.5" />
			<path d="M21 17h-4.5" />
		</svg>
	);
});

Filter2Share.displayName = "Filter2Share";
export default Filter2Share;
