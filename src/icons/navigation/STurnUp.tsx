import { forwardRef } from "react";
import type { IconProps } from "../../types";
const STurnUp = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M7 19a2 2 0 1 0 -4 0a2 2 0 0 0 4 0" />
			<path d="M5 17v-9.5a3.5 3.5 0 0 1 7 0v9a3.5 3.5 0 0 0 7 0v-13.5" />
			<path d="M16 6l3 -3l3 3" />
		</svg>
	);
});

STurnUp.displayName = "STurnUp";
export default STurnUp;
