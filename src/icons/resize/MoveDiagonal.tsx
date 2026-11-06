import { forwardRef } from "react";
import type { IconProps } from "../../types";
const MoveDiagonal = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M11 19H5v-6" />
			<path d="M13 5h6v6" />
			<path d="M19 5 5 19" />
		</svg>
	);
});

MoveDiagonal.displayName = "MoveDiagonal";
export default MoveDiagonal;
