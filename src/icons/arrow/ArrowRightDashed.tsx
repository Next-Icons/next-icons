import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ArrowRightDashed = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M5 12h.5m3 0h1.5m3 0h6" />
			<path d="M13 18l6 -6" />
			<path d="M13 6l6 6" />
		</svg>
	);
});

ArrowRightDashed.displayName = "ArrowRightDashed";
export default ArrowRightDashed;
