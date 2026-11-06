import { forwardRef } from "react";
import type { IconProps } from "../../types";
const LongArrowUpRight = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M13.25 4.75L16.75 8.25L13.25 11.75" />
			<path d="M16.75 8.25L10.75 8.25C8.54086 8.25 6.75 10.0409 6.75 12.25L6.75 19.25" />
		</svg>
	);
});

LongArrowUpRight.displayName = "LongArrowUpRight";
export default LongArrowUpRight;
