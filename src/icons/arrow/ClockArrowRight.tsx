import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ClockArrowRight = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M12 6v6l2 1" />
			<path d="M13.5 21.885A10 10 0 1 1 22 12" />
			<path d="M14 18h8" />
			<path d="m18 22 4-4-4-4" />
		</svg>
	);
});

ClockArrowRight.displayName = "ClockArrowRight";
export default ClockArrowRight;
