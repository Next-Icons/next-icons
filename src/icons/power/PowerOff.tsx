import { forwardRef } from "react";
import type { IconProps } from "../../types";
const PowerOff = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M18.36 6.64A9 9 0 0 1 20.77 15" />
			<path d="M6.16 6.16a9 9 0 1 0 12.68 12.68" />
			<path d="M12 2v4" />
			<path d="m2 2 20 20" />
		</svg>
	);
});

PowerOff.displayName = "PowerOff";
export default PowerOff;
