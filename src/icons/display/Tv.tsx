import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Tv = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="m17 2-5 5-5-5" />
			<rect height="15" rx="2" width="20" x="2" y="7" />
		</svg>
	);
});

Tv.displayName = "Tv";
export default Tv;
