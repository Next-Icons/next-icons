import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ArrowRightLeft = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="m16 3 4 4-4 4" />
			<path d="M20 7H4" />
			<path d="m8 21-4-4 4-4" />
			<path d="M4 17h16" />
		</svg>
	);
});

ArrowRightLeft.displayName = "ArrowRightLeft";
export default ArrowRightLeft;
