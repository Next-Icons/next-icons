import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Laptop2 = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<rect height="12" rx="2" ry="2" width="18" x="3" y="4" />
			<line x1="2" x2="22" y1="20" y2="20" />
		</svg>
	);
});

Laptop2.displayName = "Laptop2";
export default Laptop2;
