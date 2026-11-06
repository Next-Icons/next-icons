import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ArrowBearLeft = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M13 3h-5v5" />
			<path d="M8 3l7.536 7.536a5 5 0 0 1 1.464 3.534v6.93" />
		</svg>
	);
});

ArrowBearLeft.displayName = "ArrowBearLeft";
export default ArrowBearLeft;
