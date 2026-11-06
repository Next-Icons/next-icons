import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Doctrine = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M5 14a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
			<path d="M9 14h6" />
			<path d="M12 11l3 3l-3 3" />
			<path d="M10 3l6.9 6" />
		</svg>
	);
});

Doctrine.displayName = "Doctrine";
export default Doctrine;
