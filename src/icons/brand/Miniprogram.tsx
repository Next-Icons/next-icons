import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Miniprogram = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M21 12a9 9 0 1 1 -18 0a9 9 0 0 1 18 0" />
			<path d="M8 11.503a2.5 2.5 0 1 0 4 2v-3a2.5 2.5 0 1 1 4 2" />
		</svg>
	);
});

Miniprogram.displayName = "Miniprogram";
export default Miniprogram;
