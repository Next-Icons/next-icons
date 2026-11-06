import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Wikipedia = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M3 4.984h2" />
			<path d="M8 4.984h2.5" />
			<path d="M14.5 4.984h2.5" />
			<path d="M22 4.984h-2" />
			<path d="M4 4.984l5.455 14.516l6.545 -14.516" />
			<path d="M9 4.984l6 14.516l6 -14.516" />
		</svg>
	);
});

Wikipedia.displayName = "Wikipedia";
export default Wikipedia;
