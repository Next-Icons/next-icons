import { forwardRef } from "react";
import type { IconProps } from "../../types";
const FastArrowDownSquare = forwardRef<SVGSVGElement, IconProps>(
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
				<path d="M3 20.4V3.6C3 3.26863 3.26863 3 3.6 3H20.4C20.7314 3 21 3.26863 21 3.6V20.4C21 20.7314 20.7314 21 20.4 21H3.6C3.26863 21 3 20.7314 3 20.4Z" />
				<path d="M15.5 7.5L12 11L8.5 7.5" />
				<path d="M15.5 13.5L12 17L8.5 13.5" />
			</svg>
		);
	}
);

FastArrowDownSquare.displayName = "FastArrowDownSquare";
export default FastArrowDownSquare;
