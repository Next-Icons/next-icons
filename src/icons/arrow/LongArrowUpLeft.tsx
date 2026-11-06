import { forwardRef } from "react";
import type { IconProps } from "../../types";
const LongArrowUpLeft = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M10.25 4.75L6.75 8.25L10.25 11.75" />
			<path d="M6.75 8.25L12.75 8.25C14.9591 8.25 16.75 10.0409 16.75 12.25V19.25" />
		</svg>
	);
});

LongArrowUpLeft.displayName = "LongArrowUpLeft";
export default LongArrowUpLeft;
