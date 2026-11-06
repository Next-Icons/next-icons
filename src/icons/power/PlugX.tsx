import { forwardRef } from "react";
import type { IconProps } from "../../types";
const PlugX = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M13.55 17.733a5.806 5.806 0 0 1 -7.356 -4.052a5.81 5.81 0 0 1 1.537 -5.627l2.054 -2.054l7.165 7.165" />
			<path d="M4 20l3.5 -3.5" />
			<path d="M15 4l-3.5 3.5" />
			<path d="M20 9l-3.5 3.5" />
			<path d="M16 16l4 4" />
			<path d="M20 16l-4 4" />
		</svg>
	);
});

PlugX.displayName = "PlugX";
export default PlugX;
