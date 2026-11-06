import { forwardRef } from "react";
import type { IconProps } from "../../types";
const MoveDiagonal2 = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M19 13v6h-6" />
			<path d="M5 11V5h6" />
			<path d="m5 5 14 14" />
		</svg>
	);
});

MoveDiagonal2.displayName = "MoveDiagonal2";
export default MoveDiagonal2;
