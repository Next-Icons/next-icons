import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ArrowUnionVertical = forwardRef<SVGSVGElement, IconProps>(
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
				<path d="M17 4L12 9L7 4" />
				<path d="M17 20L12 15L7 20" />
			</svg>
		);
	}
);

ArrowUnionVertical.displayName = "ArrowUnionVertical";
export default ArrowUnionVertical;
