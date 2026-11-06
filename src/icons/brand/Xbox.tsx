import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Xbox = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M6.5 5c7.72 2.266 10.037 7.597 12.5 12.5" />
			<path d="M17.5 5c-7.72 2.266 -10.037 7.597 -12.5 12.5" />
		</svg>
	);
});

Xbox.displayName = "Xbox";
export default Xbox;
