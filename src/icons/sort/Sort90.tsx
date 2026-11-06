import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Sort90 = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M4 15a1 1 0 0 0 1 1h2a1 1 0 0 0 1 -1v-6a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v2a1 1 0 0 0 1 1h3" />
			<path d="M16 10v4a2 2 0 1 0 4 0v-4a2 2 0 1 0 -4 0" />
			<path d="M11 12h2" />
		</svg>
	);
});

Sort90.displayName = "Sort90";
export default Sort90;
