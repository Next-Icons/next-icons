import { forwardRef } from "react";
import type { IconProps } from "../../types";
const RepeatOff = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M11.656 6H21l-4-4" />
			<path d="M17.898 17.898A4 4 0 0 1 17 18H3l4-4" />
			<path d="m2 2 20 20" />
			<path d="M21 13v1a4 4 0 0 1-.171 1.159" />
			<path d="m21 6-4 4" />
			<path d="M3 11v-1a4 4 0 0 1 3.102-3.898" />
			<path d="m7 22-4-4" />
		</svg>
	);
});

RepeatOff.displayName = "RepeatOff";
export default RepeatOff;
