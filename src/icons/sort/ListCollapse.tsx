import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ListCollapse = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M10 5h11" />
			<path d="M10 12h11" />
			<path d="M10 19h11" />
			<path d="m3 10 3-3-3-3" />
			<path d="m3 20 3-3-3-3" />
		</svg>
	);
});

ListCollapse.displayName = "ListCollapse";
export default ListCollapse;
