import { forwardRef } from "react";
import type { IconProps } from "../../types";
const TopologyFullHierarchy = forwardRef<SVGSVGElement, IconProps>(
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
				<path d="M0 0h24v24H0z" fill="none" stroke="none" />
				<path d="M20 18a2 2 0 1 0 -4 0a2 2 0 0 0 4 0" />
				<path d="M8 18a2 2 0 1 0 -4 0a2 2 0 0 0 4 0" />
				<path d="M8 6a2 2 0 1 0 -4 0a2 2 0 0 0 4 0" />
				<path d="M20 6a2 2 0 1 0 -4 0a2 2 0 0 0 4 0" />
				<path d="M14 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0" />
				<path d="M6 8v8" />
				<path d="M18 16v-8" />
				<path d="M8 6h8" />
				<path d="M16 18h-8" />
				<path d="M7.5 7.5l3 3" />
				<path d="M13.5 13.5l3 3" />
				<path d="M16.5 7.5l-3 3" />
				<path d="M10.5 13.5l-3 3" />
			</svg>
		);
	}
);

TopologyFullHierarchy.displayName = "TopologyFullHierarchy";
export default TopologyFullHierarchy;
