import { forwardRef } from "react";
import type { IconProps } from "../../types";
const HierarchyOff = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M0 0h24v24H0z" fill="none" stroke="none" />
			<path d="M10 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
			<path d="M3 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
			<path d="M17.585 17.587a2 2 0 0 0 2.813 2.843" />
			<path d="M6.5 17.5l5.5 -4.5l5.5 4.5" />
			<path d="M12 7v1m0 4v1" />
			<path d="M3 3l18 18" />
		</svg>
	);
});

HierarchyOff.displayName = "HierarchyOff";
export default HierarchyOff;
