import { forwardRef } from "react";
import type { IconProps } from "../../types";
const MouseRight = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M12 7.318V10" />
			<path d="M19 10v5a7 7 0 0 1-14 0V9c0-3.527 2.608-6.515 6-7" />
			<circle cx="17" cy="4" r="2" />
		</svg>
	);
});

MouseRight.displayName = "MouseRight";
export default MouseRight;
