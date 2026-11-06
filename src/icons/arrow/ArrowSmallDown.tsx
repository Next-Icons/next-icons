import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ArrowSmallDown = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M12 4.5v15m0 0 6.75-6.75M12 19.5l-6.75-6.75" />
		</svg>
	);
});

ArrowSmallDown.displayName = "ArrowSmallDown";
export default ArrowSmallDown;
