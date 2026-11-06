import { forwardRef } from "react";
import type { IconProps } from "../../types";
const MenuScale = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M3 5H11" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
			<path d="M3 12H16" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
			<path d="M3 19H21" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
		</svg>
	);
});

MenuScale.displayName = "MenuScale";
export default MenuScale;
