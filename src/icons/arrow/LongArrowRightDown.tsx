import { forwardRef } from "react";
import type { IconProps } from "../../types";
const LongArrowRightDown = forwardRef<SVGSVGElement, IconProps>(
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
				<path d="M19 13.5L15.5 17L12 13.5" />
				<path d="M15.5 17V11C15.5 8.79086 13.7091 7 11.5 7H4.5" />
			</svg>
		);
	}
);

LongArrowRightDown.displayName = "LongArrowRightDown";
export default LongArrowRightDown;
