import { forwardRef } from "react";
import type { IconProps } from "../../types";
const BracketsAngleOff = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M8 4h.01" />
			<path d="M6.453 6.474l-3.453 5.526l5 8" />
			<path d="M16 4l5 8l-1.917 3.067" />
			<path d="M17.535 17.544l-1.535 2.456" />
			<path d="M3 3l18 18" />
		</svg>
	);
});

BracketsAngleOff.displayName = "BracketsAngleOff";
export default BracketsAngleOff;
