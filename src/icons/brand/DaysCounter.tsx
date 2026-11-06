import { forwardRef } from "react";
import type { IconProps } from "../../types";
const DaysCounter = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M20.779 10.007a9 9 0 1 0 -10.77 10.772" />
			<path d="M13 21h8v-7" />
			<path d="M12 8v4l3 3" />
		</svg>
	);
});

DaysCounter.displayName = "DaysCounter";
export default DaysCounter;
