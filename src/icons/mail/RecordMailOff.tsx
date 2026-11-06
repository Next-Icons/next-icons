import { forwardRef } from "react";
import type { IconProps } from "../../types";
const RecordMailOff = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M4 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
			<path d="M18.569 14.557a3 3 0 1 0 -4.113 -4.149" />
			<path d="M7 15h8" />
			<path d="M3 3l18 18" />
		</svg>
	);
});

RecordMailOff.displayName = "RecordMailOff";
export default RecordMailOff;
