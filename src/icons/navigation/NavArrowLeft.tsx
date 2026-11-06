import { forwardRef } from "react";
import type { IconProps } from "../../types";
const NavArrowLeft = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M15 6L9 12L15 18" />
		</svg>
	);
});

NavArrowLeft.displayName = "NavArrowLeft";
export default NavArrowLeft;
