import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Hierarchy3 = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M0 0h24v24H0z" fill="none" stroke="none" />
			<path d="M10 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
			<path d="M6 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
			<path d="M10 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
			<path d="M18 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
			<path d="M2 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
			<path d="M14 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
			<path d="M5 17l2 -3" />
			<path d="M9 10l2 -3" />
			<path d="M13 7l2 3" />
			<path d="M17 14l2 3" />
			<path d="M15 14l-2 3" />
			<path d="M9 14l2 3" />
		</svg>
	);
});

Hierarchy3.displayName = "Hierarchy3";
export default Hierarchy3;
