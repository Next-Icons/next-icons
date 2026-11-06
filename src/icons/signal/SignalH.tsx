import { forwardRef } from "react";
import type { IconProps } from "../../types";
const SignalH = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M10 16v-8" />
			<path d="M14 8v8" />
			<path d="M10 12h4" />
		</svg>
	);
});

SignalH.displayName = "SignalH";
export default SignalH;
