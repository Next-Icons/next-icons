import { forwardRef } from "react";
import type { IconProps } from "../../types";
const MenuExpandRight = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M4 8h9m-9 4h16m0 0-3-3m3 3-3 3M4 16h9" />
		</svg>
	);
});

MenuExpandRight.displayName = "MenuExpandRight";
export default MenuExpandRight;
