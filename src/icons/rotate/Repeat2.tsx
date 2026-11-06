import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Repeat2 = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="m2 9 3-3 3 3" />
			<path d="M13 18H7a2 2 0 0 1-2-2V6" />
			<path d="m22 15-3 3-3-3" />
			<path d="M11 6h6a2 2 0 0 1 2 2v10" />
		</svg>
	);
});

Repeat2.displayName = "Repeat2";
export default Repeat2;
