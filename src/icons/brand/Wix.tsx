import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Wix = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M3 9l1.5 6l1.379 -5.515a.64 .64 0 0 1 1.242 0l1.379 5.515l1.5 -6" />
			<path d="M13 11.5v3.5" />
			<path d="M16 9l5 6" />
			<path d="M21 9l-5 6" />
			<path d="M13 9h.01" />
		</svg>
	);
});

Wix.displayName = "Wix";
export default Wix;
