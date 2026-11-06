import { forwardRef } from "react";
import type { IconProps } from "../../types";
const TextArrowsUpDown = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M18 21V11M18 21L16 18.5M18 21L20 18.5M18 11L16 13M18 11L20 13" />
			<path d="M9 5L9 17M9 17H7M9 17H11" />
			<path d="M15 7V5L3 5L3 7" />
		</svg>
	);
});

TextArrowsUpDown.displayName = "TextArrowsUpDown";
export default TextArrowsUpDown;
