import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ArcheryArrowLeftBottom = forwardRef<SVGSVGElement, IconProps>(
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
				<path d="M14 7v3h3l3 -3h-3v-3l-3 3" />
				<path d="M14 10l-9 9" />
				<path d="M5 15v4h4" />
			</svg>
		);
	}
);

ArcheryArrowLeftBottom.displayName = "ArcheryArrowLeftBottom";
export default ArcheryArrowLeftBottom;
