import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Touchpad = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<rect height="16" rx="2" width="20" x="2" y="4" />
			<path d="M2 14h20" />
			<path d="M12 20v-6" />
		</svg>
	);
});

Touchpad.displayName = "Touchpad";
export default Touchpad;
