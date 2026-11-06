import { forwardRef } from "react";
import type { IconProps } from "../../types";
const DatabaseArrowUp = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M19 22v-6" />
			<path d="M21 12.536V5" />
			<path d="m22 19-3-3-3 3" />
			<path d="M3 12A9 3 0 0 0 14.457 14.886" />
			<path d="M3 5V19A9 3 0 0 0 13.318 21.968" />
			<ellipse cx="12" cy="5" rx="9" ry="3" />
		</svg>
	);
});

DatabaseArrowUp.displayName = "DatabaseArrowUp";
export default DatabaseArrowUp;
