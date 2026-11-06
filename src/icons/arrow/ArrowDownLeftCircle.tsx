import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ArrowDownLeftCircle = forwardRef<SVGSVGElement, IconProps>(
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
				<path d="M15.536 8.464l-9.536 9.536" />
				<path d="M6 14v4h4" />
				<path d="M15.586 8.414a2 2 0 1 0 2.828 -2.828a2 2 0 0 0 -2.828 2.828" />
			</svg>
		);
	}
);

ArrowDownLeftCircle.displayName = "ArrowDownLeftCircle";
export default ArrowDownLeftCircle;
