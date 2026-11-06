import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Appstore = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
			<path d="M8 16l1.106 -1.99m1.4 -2.522l2.494 -4.488" />
			<path d="M7 14h5m2.9 0h2.1" />
			<path d="M16 16l-2.51 -4.518m-1.487 -2.677l-1 -1.805" />
		</svg>
	);
});

Appstore.displayName = "Appstore";
export default Appstore;
