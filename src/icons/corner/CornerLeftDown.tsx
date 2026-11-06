import { forwardRef } from "react";
import type { IconProps } from "../../types";
const CornerLeftDown = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="m14 15-5 5-5-5" />
			<path d="M20 4h-7a4 4 0 0 0-4 4v12" />
		</svg>
	);
});

CornerLeftDown.displayName = "CornerLeftDown";
export default CornerLeftDown;
