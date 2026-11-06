import { forwardRef } from "react";
import type { IconProps } from "../../types";
const CircleArrowDown = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<circle cx="12" cy="12" r="10" />
			<path d="M12 8v8" />
			<path d="m8 12 4 4 4-4" />
		</svg>
	);
});

CircleArrowDown.displayName = "CircleArrowDown";
export default CircleArrowDown;
