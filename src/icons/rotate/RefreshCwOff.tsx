import { forwardRef } from "react";
import type { IconProps } from "../../types";
const RefreshCwOff = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M21 8L18.74 5.74A9.75 9.75 0 0 0 12 3C11 3 10.03 3.16 9.13 3.47" />
			<path d="M8 16H3v5" />
			<path d="M3 12C3 9.51 4 7.26 5.64 5.64" />
			<path d="m3 16 2.26 2.26A9.75 9.75 0 0 0 12 21c2.49 0 4.74-1 6.36-2.64" />
			<path d="M21 12c0 1-.16 1.97-.47 2.87" />
			<path d="M21 3v5h-5" />
			<path d="M22 22 2 2" />
		</svg>
	);
});

RefreshCwOff.displayName = "RefreshCwOff";
export default RefreshCwOff;
