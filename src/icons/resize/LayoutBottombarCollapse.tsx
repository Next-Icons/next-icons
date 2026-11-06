import { forwardRef } from "react";
import type { IconProps } from "../../types";
const LayoutBottombarCollapse = forwardRef<SVGSVGElement, IconProps>(
	({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
				<path d="M20 6v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2" />
				<path d="M20 15h-16" />
				<path d="M14 8l-2 2l-2 -2" />
			</svg>
		);
	}
);

LayoutBottombarCollapse.displayName = "LayoutBottombarCollapse";
export default LayoutBottombarCollapse;
