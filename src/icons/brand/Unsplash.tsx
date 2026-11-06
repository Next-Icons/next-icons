import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Unsplash = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M4 11h5v4h6v-4h5v9h-16v-9" />
			<path d="M9 4h6v4h-6l0 -4" />
		</svg>
	);
});

Unsplash.displayName = "Unsplash";
export default Unsplash;
