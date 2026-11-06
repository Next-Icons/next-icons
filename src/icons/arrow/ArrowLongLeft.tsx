import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ArrowLongLeft = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
		</svg>
	);
});

ArrowLongLeft.displayName = "ArrowLongLeft";
export default ArrowLongLeft;
