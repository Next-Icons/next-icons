import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ArrowLeftCircle = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<circle cx="12" cy="12" r="10" />
			<path d="m12 8-4 4 4 4" />
			<path d="M16 12H8" />
		</svg>
	);
});

ArrowLeftCircle.displayName = "ArrowLeftCircle";
export default ArrowLeftCircle;
