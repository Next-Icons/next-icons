import { forwardRef } from "react";
import type { IconProps } from "../../types";
const DeviceIpadSearch = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M11.5 21h-5.5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v6" />
			<path d="M9 18h2" />
			<path d="M15 18a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
			<path d="M20.2 20.2l1.8 1.8" />
		</svg>
	);
});

DeviceIpadSearch.displayName = "DeviceIpadSearch";
export default DeviceIpadSearch;
