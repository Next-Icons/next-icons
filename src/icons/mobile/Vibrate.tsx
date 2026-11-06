import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Vibrate = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="m2 8 2 2-2 2 2 2-2 2" />
			<path d="m22 8-2 2 2 2-2 2 2 2" />
			<rect height="14" rx="1" width="8" x="8" y="5" />
		</svg>
	);
});

Vibrate.displayName = "Vibrate";
export default Vibrate;
