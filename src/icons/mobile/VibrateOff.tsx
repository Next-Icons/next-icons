import { forwardRef } from "react";
import type { IconProps } from "../../types";
const VibrateOff = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M8 8v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2" />
			<path d="M16 10.34V6c0-.55-.45-1-1-1h-4.34" />
			<line x1="2" x2="22" y1="2" y2="22" />
		</svg>
	);
});

VibrateOff.displayName = "VibrateOff";
export default VibrateOff;
