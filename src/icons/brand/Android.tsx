import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Android = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M4 10l0 6" />
			<path d="M20 10l0 6" />
			<path d="M7 9h10v8a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1v-8a5 5 0 0 1 10 0" />
			<path d="M8 3l1 2" />
			<path d="M16 3l-1 2" />
			<path d="M9 18l0 3" />
			<path d="M15 18l0 3" />
		</svg>
	);
});

Android.displayName = "Android";
export default Android;
