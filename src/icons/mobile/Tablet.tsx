import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Tablet = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<rect height="20" rx="2" ry="2" width="16" x="4" y="2" />
			<line x1="12" x2="12.01" y1="18" y2="18" />
		</svg>
	);
});

Tablet.displayName = "Tablet";
export default Tablet;
