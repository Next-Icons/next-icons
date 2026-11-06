import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Digg = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M6 15h-3v-4h3" />
			<path d="M15 15h-3v-4h3" />
			<path d="M9 15v-4" />
			<path d="M15 11v7h-3" />
			<path d="M6 7v8" />
			<path d="M21 15h-3v-4h3" />
			<path d="M21 11v7h-3" />
		</svg>
	);
});

Digg.displayName = "Digg";
export default Digg;
