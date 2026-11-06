import { forwardRef } from "react";
import type { IconProps } from "../../types";
const DirectionArrows = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
			<path d="M8 11l-1 1l1 1" />
			<path d="M11 8l1 -1l1 1" />
			<path d="M16 11l1 1l-1 1" />
			<path d="M11 16l1 1l1 -1" />
		</svg>
	);
});

DirectionArrows.displayName = "DirectionArrows";
export default DirectionArrows;
