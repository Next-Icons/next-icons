import { forwardRef } from "react";
import type { IconProps } from "../../types";
const BookHeadphones = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
			<path d="M8 12v-2a4 4 0 0 1 8 0v2" />
			<circle cx="15" cy="12" r="1" />
			<circle cx="9" cy="12" r="1" />
		</svg>
	);
});

BookHeadphones.displayName = "BookHeadphones";
export default BookHeadphones;
