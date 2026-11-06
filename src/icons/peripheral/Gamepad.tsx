import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Gamepad = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<line x1="6" x2="10" y1="12" y2="12" />
			<line x1="8" x2="8" y1="10" y2="14" />
			<line x1="15" x2="15.01" y1="13" y2="13" />
			<line x1="18" x2="18.01" y1="11" y2="11" />
			<rect height="12" rx="2" width="20" x="2" y="6" />
		</svg>
	);
});

Gamepad.displayName = "Gamepad";
export default Gamepad;
