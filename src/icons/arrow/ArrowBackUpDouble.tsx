import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ArrowBackUpDouble = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M13 14l-4 -4l4 -4" />
			<path d="M8 14l-4 -4l4 -4" />
			<path d="M9 10h7a4 4 0 1 1 0 8h-1" />
		</svg>
	);
});

ArrowBackUpDouble.displayName = "ArrowBackUpDouble";
export default ArrowBackUpDouble;
