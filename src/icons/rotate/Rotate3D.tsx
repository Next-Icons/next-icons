import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Rotate3D = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="m15.194 13.707 3.814 1.86-1.86 3.814" />
			<path d="M16.47214 7.52786 A 5 10 0 1 0 13 21.79796" />
			<path d="M21.79796 11 A 10 5 0 1 0 19 15.57071" />
		</svg>
	);
});

Rotate3D.displayName = "Rotate3D";
export default Rotate3D;
