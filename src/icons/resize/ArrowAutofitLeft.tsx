import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ArrowAutofitLeft = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M4 12v-6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v8" />
			<path d="M20 18h-17" />
			<path d="M6 15l-3 3l3 3" />
		</svg>
	);
});

ArrowAutofitLeft.displayName = "ArrowAutofitLeft";
export default ArrowAutofitLeft;
