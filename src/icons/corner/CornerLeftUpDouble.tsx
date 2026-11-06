import { forwardRef } from "react";
import type { IconProps } from "../../types";
const CornerLeftUpDouble = forwardRef<SVGSVGElement, IconProps>(
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
				<path d="M18 19h-6a3 3 0 0 1 -3 -3v-7" />
				<path d="M13 13l-4 -4l-4 4m8 -5l-4 -4l-4 4" />
			</svg>
		);
	}
);

CornerLeftUpDouble.displayName = "CornerLeftUpDouble";
export default CornerLeftUpDouble;
