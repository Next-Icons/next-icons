import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Speedtest = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M5.636 19.364a9 9 0 1 1 12.728 0" />
			<path d="M16 9l-4 4" />
		</svg>
	);
});

Speedtest.displayName = "Speedtest";
export default Speedtest;
