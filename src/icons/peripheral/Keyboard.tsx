import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Keyboard = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M10 8h.01" />
			<path d="M12 12h.01" />
			<path d="M14 8h.01" />
			<path d="M16 12h.01" />
			<path d="M18 8h.01" />
			<path d="M6 8h.01" />
			<path d="M7 16h10" />
			<path d="M8 12h.01" />
			<rect height="16" rx="2" width="20" x="2" y="4" />
		</svg>
	);
});

Keyboard.displayName = "Keyboard";
export default Keyboard;
