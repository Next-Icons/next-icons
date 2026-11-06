import { forwardRef } from "react";
import type { IconProps } from "../../types";
const SquareChevronsUp = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M9 16l3 -3l3 3" />
			<path d="M9 11l3 -3l3 3" />
			<path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14" />
		</svg>
	);
});

SquareChevronsUp.displayName = "SquareChevronsUp";
export default SquareChevronsUp;
