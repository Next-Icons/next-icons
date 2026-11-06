import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Vue = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M16.5 4l-4.5 8l-4.5 -8" />
			<path d="M3 4l9 16l9 -16" />
		</svg>
	);
});

Vue.displayName = "Vue";
export default Vue;
