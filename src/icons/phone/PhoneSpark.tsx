import { forwardRef } from "react";
import type { IconProps } from "../../types";
const PhoneSpark = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M11.584 19.225a16 16 0 0 1 -8.584 -13.225a2 2 0 0 1 2 -2h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l.65 .26" />
			<path d="M19 22.5a4.75 4.75 0 0 1 3.5 -3.5a4.75 4.75 0 0 1 -3.5 -3.5a4.75 4.75 0 0 1 -3.5 3.5a4.75 4.75 0 0 1 3.5 3.5" />
		</svg>
	);
});

PhoneSpark.displayName = "PhoneSpark";
export default PhoneSpark;
