import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ArrowAutofitDown = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M12 20h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8" />
			<path d="M18 4v17" />
			<path d="M15 18l3 3l3 -3" />
		</svg>
	);
});

ArrowAutofitDown.displayName = "ArrowAutofitDown";
export default ArrowAutofitDown;
