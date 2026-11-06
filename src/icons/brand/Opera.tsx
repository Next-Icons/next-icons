import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Opera = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M9 12a3 5 0 1 0 6 0a3 5 0 1 0 -6 0" />
		</svg>
	);
});

Opera.displayName = "Opera";
export default Opera;
