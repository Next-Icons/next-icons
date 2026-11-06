import { forwardRef } from "react";
import type { IconProps } from "../../types";
const LongArrowDownLeft = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M10.25 19.25L6.75 15.75L10.25 12.25" />
			<path d="M6.75 15.75H12.75C14.9591 15.75 16.75 13.9591 16.75 11.75V4.75" />
		</svg>
	);
});

LongArrowDownLeft.displayName = "LongArrowDownLeft";
export default LongArrowDownLeft;
