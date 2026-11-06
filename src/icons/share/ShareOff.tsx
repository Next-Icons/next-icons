import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ShareOff = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M3 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
			<path d="M15 6a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
			<path d="M15.861 15.896a3 3 0 0 0 4.265 4.22m.578 -3.417a3.012 3.012 0 0 0 -1.507 -1.45" />
			<path d="M8.7 10.7l1.336 -.688m2.624 -1.352l2.64 -1.36" />
			<path d="M8.7 13.3l6.6 3.4" />
			<path d="M3 3l18 18" />
		</svg>
	);
});

ShareOff.displayName = "ShareOff";
export default ShareOff;
