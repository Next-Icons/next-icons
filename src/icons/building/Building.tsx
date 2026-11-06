import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Building = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M12 10h.01" />
			<path d="M12 14h.01" />
			<path d="M12 6h.01" />
			<path d="M16 10h.01" />
			<path d="M16 14h.01" />
			<path d="M16 6h.01" />
			<path d="M8 10h.01" />
			<path d="M8 14h.01" />
			<path d="M8 6h.01" />
			<path d="M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3" />
			<rect height="20" rx="2" width="16" x="4" y="2" />
		</svg>
	);
});

Building.displayName = "Building";
export default Building;
