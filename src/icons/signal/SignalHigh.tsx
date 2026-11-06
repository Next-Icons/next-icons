import { forwardRef } from "react";
import type { IconProps } from "../../types";
const SignalHigh = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M2 20h.01" />
			<path d="M7 20v-4" />
			<path d="M12 20v-8" />
			<path d="M17 20V8" />
		</svg>
	);
});

SignalHigh.displayName = "SignalHigh";
export default SignalHigh;
