import { forwardRef } from "react";
import type { IconProps } from "../../types";
const LayoutSidebarLeftExpand = forwardRef<SVGSVGElement, IconProps>(
	({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
				<path d="M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -12" />
				<path d="M9 4v16" />
				<path d="M14 10l2 2l-2 2" />
			</svg>
		);
	}
);

LayoutSidebarLeftExpand.displayName = "LayoutSidebarLeftExpand";
export default LayoutSidebarLeftExpand;
