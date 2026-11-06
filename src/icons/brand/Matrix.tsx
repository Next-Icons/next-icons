import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Matrix = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M4 3h-1v18h1" />
			<path d="M20 21h1v-18h-1" />
			<path d="M7 9v6" />
			<path d="M12 15v-3.5a2.5 2.5 0 1 0 -5 0v.5" />
			<path d="M17 15v-3.5a2.5 2.5 0 1 0 -5 0v.5" />
		</svg>
	);
});

Matrix.displayName = "Matrix";
export default Matrix;
