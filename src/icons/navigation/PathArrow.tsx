import { forwardRef } from "react";
import type { IconProps } from "../../types";
const PathArrow = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M18 16.5V3M18 3L21.5 6.5M18 3L14.5 6.5" />
			<path d="M18 16.5C18 18.433 16.433 20 14.5 20C12.567 20 11 18.433 11 16.5V7.5" />
			<path d="M11 7.5C11 5.567 9.433 4 7.5 4C5.567 4 4 5.567 4 7.5V19.5" />
		</svg>
	);
});

PathArrow.displayName = "PathArrow";
export default PathArrow;
