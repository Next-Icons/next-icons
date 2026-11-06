import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ArrowDownLeftFromSquare = forwardRef<SVGSVGElement, IconProps>(
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
				<path d="M13 21h6a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6" />
				<path d="m3 21 9-9" />
				<path d="M9 21H3v-6" />
			</svg>
		);
	}
);

ArrowDownLeftFromSquare.displayName = "ArrowDownLeftFromSquare";
export default ArrowDownLeftFromSquare;
