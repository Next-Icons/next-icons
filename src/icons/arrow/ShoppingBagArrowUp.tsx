import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ShoppingBagArrowUp = forwardRef<SVGSVGElement, IconProps>(
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
				<path d="M16.5 21H18.6688C19.8945 21 20.8319 19.9074 20.6455 18.6959L19.2609 9.69589C19.1108 8.72022 18.2713 8 17.2842 8H6.71584C5.7287 8 4.8892 8.72022 4.73909 9.69589L3.35448 18.6959C3.16809 19.9074 4.10545 21 5.33122 21H7.5" />
				<path d="M12 19V12M12 12L15 15M12 12L9 15" />
				<path d="M14 5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5" />
			</svg>
		);
	}
);

ShoppingBagArrowUp.displayName = "ShoppingBagArrowUp";
export default ShoppingBagArrowUp;
