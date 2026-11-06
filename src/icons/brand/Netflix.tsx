import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Netflix = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M9 3l10 18h-4l-10 -18l4 0" />
			<path d="M5 3v18h4v-10.5" />
			<path d="M19 21v-18h-4v10.5" />
		</svg>
	);
});

Netflix.displayName = "Netflix";
export default Netflix;
