import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ShoppingCartShare = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
			<path d="M12.5 17h-6.5v-14h-2" />
			<path d="M6 5l14 1l-1 7h-13" />
			<path d="M16 22l5 -5" />
			<path d="M21 21.5v-4.5h-4.5" />
		</svg>
	);
});

ShoppingCartShare.displayName = "ShoppingCartShare";
export default ShoppingCartShare;
