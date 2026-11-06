import { forwardRef } from "react";
import type { IconProps } from "../../types";
const SortAZ = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M16 8h4l-4 8h4" />
			<path d="M4 16v-6a2 2 0 1 1 4 0v6" />
			<path d="M4 13h4" />
			<path d="M11 12h2" />
		</svg>
	);
});

SortAZ.displayName = "SortAZ";
export default SortAZ;
