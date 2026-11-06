import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ArrowUpLine = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="m12 5 6 6m-6-6-6 6m6-6v14" />
		</svg>
	);
});

ArrowUpLine.displayName = "ArrowUpLine";
export default ArrowUpLine;
