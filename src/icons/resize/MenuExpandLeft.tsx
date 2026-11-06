import { forwardRef } from "react";
import type { IconProps } from "../../types";
const MenuExpandLeft = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M20 8h-9m9 4H4m0 0 3-3m-3 3 3 3m13 1h-9" />
		</svg>
	);
});

MenuExpandLeft.displayName = "MenuExpandLeft";
export default MenuExpandLeft;
