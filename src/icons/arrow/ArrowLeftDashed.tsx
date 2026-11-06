import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ArrowLeftDashed = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M5 12h6m3 0h1.5m3 0h.5" />
			<path d="M5 12l6 6" />
			<path d="M5 12l6 -6" />
		</svg>
	);
});

ArrowLeftDashed.displayName = "ArrowLeftDashed";
export default ArrowLeftDashed;
