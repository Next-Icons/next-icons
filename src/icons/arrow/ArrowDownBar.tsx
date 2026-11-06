import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ArrowDownBar = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M12 3v18" />
			<path d="M9 18l3 3l3 -3" />
			<path d="M9 3h6" />
		</svg>
	);
});

ArrowDownBar.displayName = "ArrowDownBar";
export default ArrowDownBar;
