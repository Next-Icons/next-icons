import { forwardRef } from "react";
import type { IconProps } from "../../types";
const BanknoteArrowUp = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M12 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5" />
			<path d="M18 12h.01" />
			<path d="M19 22v-6" />
			<path d="m22 19-3-3-3 3" />
			<path d="M6 12h.01" />
			<circle cx="12" cy="12" r="2" />
		</svg>
	);
});

BanknoteArrowUp.displayName = "BanknoteArrowUp";
export default BanknoteArrowUp;
