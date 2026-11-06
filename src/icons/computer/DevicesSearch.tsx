import { forwardRef } from "react";
import type { IconProps } from "../../types";
const DevicesSearch = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M13 13v-4a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v2.5" />
			<path d="M18 8v-3a1 1 0 0 0 -1 -1h-13a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h7" />
			<path d="M15 18a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
			<path d="M20.2 20.2l1.8 1.8" />
			<path d="M16 9h2" />
		</svg>
	);
});

DevicesSearch.displayName = "DevicesSearch";
export default DevicesSearch;
