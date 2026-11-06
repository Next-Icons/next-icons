import { forwardRef } from "react";
import type { IconProps } from "../../types";
const STurnRight = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M3 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
			<path d="M7 5h9.5a3.5 3.5 0 0 1 0 7h-9a3.5 3.5 0 0 0 0 7h13.5" />
			<path d="M18 16l3 3l-3 3" />
		</svg>
	);
});

STurnRight.displayName = "STurnRight";
export default STurnRight;
