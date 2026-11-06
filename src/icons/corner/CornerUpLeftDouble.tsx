import { forwardRef } from "react";
import type { IconProps } from "../../types";
const CornerUpLeftDouble = forwardRef<SVGSVGElement, IconProps>(
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
				<path d="M19 18v-6a3 3 0 0 0 -3 -3h-7" />
				<path d="M13 13l-4 -4l4 -4m-5 8l-4 -4l4 -4" />
			</svg>
		);
	}
);

CornerUpLeftDouble.displayName = "CornerUpLeftDouble";
export default CornerUpLeftDouble;
