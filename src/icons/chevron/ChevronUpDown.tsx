import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ChevronUpDown = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
		</svg>
	);
});

ChevronUpDown.displayName = "ChevronUpDown";
export default ChevronUpDown;
