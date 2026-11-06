import { forwardRef } from "react";
import type { IconProps } from "../../types";
const STurnDown = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M7 5a2 2 0 1 1 -4 0a2 2 0 0 1 4 0" />
			<path d="M5 7v9.5a3.5 3.5 0 0 0 7 0v-9a3.5 3.5 0 0 1 7 0v13.5" />
			<path d="M16 18l3 3l3 -3" />
		</svg>
	);
});

STurnDown.displayName = "STurnDown";
export default STurnDown;
