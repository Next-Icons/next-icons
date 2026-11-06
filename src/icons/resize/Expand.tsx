import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Expand = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="m15 15 6 6" />
			<path d="m15 9 6-6" />
			<path d="M21 16v5h-5" />
			<path d="M21 8V3h-5" />
			<path d="M3 16v5h5" />
			<path d="m3 21 6-6" />
			<path d="M3 8V3h5" />
			<path d="M9 9 3 3" />
		</svg>
	);
});

Expand.displayName = "Expand";
export default Expand;
