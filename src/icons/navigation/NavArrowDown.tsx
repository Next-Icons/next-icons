import { forwardRef } from "react";
import type { IconProps } from "../../types";
const NavArrowDown = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M6 9L12 15L18 9" />
		</svg>
	);
});

NavArrowDown.displayName = "NavArrowDown";
export default NavArrowDown;
