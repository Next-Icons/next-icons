import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ArrowDownRightFromCircle = forwardRef<SVGSVGElement, IconProps>(
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
				<path d="M12 22a10 10 0 1 1 10-10" />
				<path d="M22 22 12 12" />
				<path d="M22 16v6h-6" />
			</svg>
		);
	}
);

ArrowDownRightFromCircle.displayName = "ArrowDownRightFromCircle";
export default ArrowDownRightFromCircle;
