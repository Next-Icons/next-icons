import { forwardRef } from "react";
import type { IconProps } from "../../types";
const BorderCornerRounded = forwardRef<SVGSVGElement, IconProps>(
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
				<path d="M4 20v-10a6 6 0 0 1 6 -6h10" />
			</svg>
		);
	}
);

BorderCornerRounded.displayName = "BorderCornerRounded";
export default BorderCornerRounded;
