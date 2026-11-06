import { forwardRef } from "react";
import type { IconProps } from "../../types";
const LongArrowDownRight = forwardRef<SVGSVGElement, IconProps>(
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
				<path d="M13.25 19.25L16.75 15.75L13.25 12.25" />
				<path d="M16.75 15.75H10.75C8.54086 15.75 6.75 13.9591 6.75 11.75V4.75" />
			</svg>
		);
	}
);

LongArrowDownRight.displayName = "LongArrowDownRight";
export default LongArrowDownRight;
