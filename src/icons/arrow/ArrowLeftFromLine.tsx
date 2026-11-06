import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ArrowLeftFromLine = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="m9 6-6 6 6 6" />
			<path d="M3 12h14" />
			<path d="M21 19V5" />
		</svg>
	);
});

ArrowLeftFromLine.displayName = "ArrowLeftFromLine";
export default ArrowLeftFromLine;
