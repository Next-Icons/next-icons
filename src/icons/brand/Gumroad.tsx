import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Gumroad = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M21 12a9 9 0 1 1 -18 0a9 9 0 0 1 18 0" />
			<path d="M13.5 13h2.5v3" />
			<path d="M15.024 9.382a4 4 0 1 0 -3.024 6.618c1.862 0 2.554 -1.278 3 -3" />
		</svg>
	);
});

Gumroad.displayName = "Gumroad";
export default Gumroad;
