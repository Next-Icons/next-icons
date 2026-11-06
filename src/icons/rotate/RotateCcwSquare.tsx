import { forwardRef } from "react";
import type { IconProps } from "../../types";
const RotateCcwSquare = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M20 9V7a2 2 0 0 0-2-2h-6" />
			<path d="m15 2-3 3 3 3" />
			<path d="M20 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2" />
		</svg>
	);
});

RotateCcwSquare.displayName = "RotateCcwSquare";
export default RotateCcwSquare;
