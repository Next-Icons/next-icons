import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ArrowUpToLine = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M5 3h14" />
			<path d="m18 13-6-6-6 6" />
			<path d="M12 7v14" />
		</svg>
	);
});

ArrowUpToLine.displayName = "ArrowUpToLine";
export default ArrowUpToLine;
