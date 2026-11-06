import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Building2 = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M10 12h4" />
			<path d="M10 8h4" />
			<path d="M14 21v-3a2 2 0 0 0-4 0v3" />
			<path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2" />
			<path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" />
		</svg>
	);
});

Building2.displayName = "Building2";
export default Building2;
