import { forwardRef } from "react";
import type { IconProps } from "../../types";
const AngleTool = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M3 21L3 3L9 3V15L21 15V21H3Z" />
			<path d="M13 19V21" />
			<path d="M9 19V21" />
			<path d="M3 7H5" />
			<path d="M3 11H5" />
			<path d="M3 15H5" />
			<path d="M17 19V21" />
		</svg>
	);
});

AngleTool.displayName = "AngleTool";
export default AngleTool;
