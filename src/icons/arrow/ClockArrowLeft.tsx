import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ClockArrowLeft = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M12 6v6l1.5.8" />
			<path d="M12.338 21.994a10 10 0 1 1 9.587-8.767" />
			<path d="M14 18h8" />
			<path d="m18 22-4-4 4-4" />
		</svg>
	);
});

ClockArrowLeft.displayName = "ClockArrowLeft";
export default ClockArrowLeft;
