import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Transfer = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M20 10h-16l5.5 -6" />
			<path d="M4 14h16l-5.5 6" />
		</svg>
	);
});

Transfer.displayName = "Transfer";
export default Transfer;
