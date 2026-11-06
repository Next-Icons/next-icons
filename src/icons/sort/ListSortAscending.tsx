import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ListSortAscending = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M3 19h18" />
			<path d="M15 12H3" />
			<path d="M9 5H3" />
		</svg>
	);
});

ListSortAscending.displayName = "ListSortAscending";
export default ListSortAscending;
