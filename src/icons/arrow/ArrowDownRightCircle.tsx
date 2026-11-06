import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ArrowDownRightCircle = forwardRef<SVGSVGElement, IconProps>(
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
				<path d="M8.464 8.464l9.536 9.536" />
				<path d="M14 18h4v-4" />
				<path d="M8.414 8.414a2 2 0 1 0 -2.828 -2.828a2 2 0 0 0 2.828 2.828" />
			</svg>
		);
	}
);

ArrowDownRightCircle.displayName = "ArrowDownRightCircle";
export default ArrowDownRightCircle;
