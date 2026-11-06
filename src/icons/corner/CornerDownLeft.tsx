import { forwardRef } from "react";
import type { IconProps } from "../../types";
const CornerDownLeft = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M20 4v7a4 4 0 0 1-4 4H4" />
			<path d="m9 10-5 5 5 5" />
		</svg>
	);
});

CornerDownLeft.displayName = "CornerDownLeft";
export default CornerDownLeft;
