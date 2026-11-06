import { forwardRef } from "react";
import type { IconProps } from "../../types";
const SignalLte = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M21 8h-4v8h4" />
			<path d="M17 12h2.5" />
			<path d="M4 8v8h4" />
			<path d="M10 8h4" />
			<path d="M12 8v8" />
		</svg>
	);
});

SignalLte.displayName = "SignalLte";
export default SignalLte;
