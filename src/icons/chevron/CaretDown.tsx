import { forwardRef } from "react";
import type { IconProps } from "../../types";
const CaretDown = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M6 10l6 6l6 -6h-12" />
		</svg>
	);
});

CaretDown.displayName = "CaretDown";
export default CaretDown;
