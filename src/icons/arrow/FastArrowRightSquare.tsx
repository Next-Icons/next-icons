import { forwardRef } from "react";
import type { IconProps } from "../../types";
const FastArrowRightSquare = forwardRef<SVGSVGElement, IconProps>(
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
				<path d="M8 8.5L11.5 12L8 15.5" />
				<path d="M14 8.5L17.5 12L14 15.5" />
				<path d="M3 20.4V3.6C3 3.26863 3.26863 3 3.6 3H20.4C20.7314 3 21 3.26863 21 3.6V20.4C21 20.7314 20.7314 21 20.4 21H3.6C3.26863 21 3 20.7314 3 20.4Z" />
			</svg>
		);
	}
);

FastArrowRightSquare.displayName = "FastArrowRightSquare";
export default FastArrowRightSquare;
