import { forwardRef } from "react";
import type { IconProps } from "../../types";
const RadioReceiver = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M5 16v2" />
			<path d="M19 16v2" />
			<rect height="8" rx="2" width="20" x="2" y="8" />
			<path d="M18 12h.01" />
		</svg>
	);
});

RadioReceiver.displayName = "RadioReceiver";
export default RadioReceiver;
