import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ArrowLeftToLine = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M3 19V5" />
			<path d="m13 6-6 6 6 6" />
			<path d="M7 12h14" />
		</svg>
	);
});

ArrowLeftToLine.displayName = "ArrowLeftToLine";
export default ArrowLeftToLine;
