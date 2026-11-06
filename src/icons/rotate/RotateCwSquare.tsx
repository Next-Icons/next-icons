import { forwardRef } from "react";
import type { IconProps } from "../../types";
const RotateCwSquare = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M12 5H6a2 2 0 0 0-2 2v3" />
			<path d="m9 8 3-3-3-3" />
			<path d="M4 14v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
		</svg>
	);
});

RotateCwSquare.displayName = "RotateCwSquare";
export default RotateCwSquare;
