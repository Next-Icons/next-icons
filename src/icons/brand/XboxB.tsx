import { forwardRef } from "react";
import type { IconProps } from "../../types";
const XboxB = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M12 21a9 9 0 0 0 9 -9a9 9 0 0 0 -9 -9a9 9 0 0 0 -9 9a9 9 0 0 0 9 9" />
			<path d="M13 12a2 2 0 1 1 0 4h-3v-4" />
			<path d="M13 12h-3" />
			<path d="M13 12a2 2 0 1 0 0 -4h-3v4" />
		</svg>
	);
});

XboxB.displayName = "XboxB";
export default XboxB;
