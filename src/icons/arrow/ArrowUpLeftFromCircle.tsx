import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ArrowUpLeftFromCircle = forwardRef<SVGSVGElement, IconProps>(
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
				<path d="M2 8V2h6" />
				<path d="m2 2 10 10" />
				<path d="M12 2A10 10 0 1 1 2 12" />
			</svg>
		);
	}
);

ArrowUpLeftFromCircle.displayName = "ArrowUpLeftFromCircle";
export default ArrowUpLeftFromCircle;
