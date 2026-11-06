import { forwardRef } from "react";
import type { IconProps } from "../../types";
const CaretUpDown = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M18 10l-6 -6l-6 6h12" />
			<path d="M18 14l-6 6l-6 -6h12" />
		</svg>
	);
});

CaretUpDown.displayName = "CaretUpDown";
export default CaretUpDown;
