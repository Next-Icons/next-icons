import { forwardRef } from "react";
import type { IconProps } from "../../types";
const CaretLeftRight = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M14 18l6 -6l-6 -6v12" />
			<path d="M10 18l-6 -6l6 -6v12" />
		</svg>
	);
});

CaretLeftRight.displayName = "CaretLeftRight";
export default CaretLeftRight;
