import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ArrowDownToDot = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M12 2v14" />
			<path d="m19 9-7 7-7-7" />
			<circle cx="12" cy="21" r="1" />
		</svg>
	);
});

ArrowDownToDot.displayName = "ArrowDownToDot";
export default ArrowDownToDot;
