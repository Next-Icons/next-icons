import { forwardRef } from "react";
import type { IconProps } from "../../types";
const SublimeText = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M19 8l-14 4.5v-5.5l14 -4.5l0 5.5" />
			<path d="M19 17l-14 4.5v-5.5l14 -4.5l0 5.5" />
			<path d="M19 11.5l-14 -4.5" />
			<path d="M5 12.5l14 4.5" />
		</svg>
	);
});

SublimeText.displayName = "SublimeText";
export default SublimeText;
