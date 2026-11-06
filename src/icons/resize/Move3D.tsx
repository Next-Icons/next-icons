import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Move3D = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M5 3v16h16" />
			<path d="m5 19 6-6" />
			<path d="m2 6 3-3 3 3" />
			<path d="m18 16 3 3-3 3" />
		</svg>
	);
});

Move3D.displayName = "Move3D";
export default Move3D;
