import { forwardRef } from "react";
import type { IconProps } from "../../types";
const AlpineJs = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M3 11.5l4.5 4.5h9l-9 -9l-4.5 4.5" />
			<path d="M16.5 16l4.5 -4.5l-4.5 -4.5l-4.5 4.5" />
		</svg>
	);
});

AlpineJs.displayName = "AlpineJs";
export default AlpineJs;
