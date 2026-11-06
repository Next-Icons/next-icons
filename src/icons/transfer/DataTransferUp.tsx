import { forwardRef } from "react";
import type { IconProps } from "../../types";
const DataTransferUp = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M7 4L7 5" />
			<path d="M7 9L7 10" />
			<path d="M17 20V4M17 4L20 7M17 4L14 7" />
			<path d="M7 14V20M7 20L10 17M7 20L4 17" />
		</svg>
	);
});

DataTransferUp.displayName = "DataTransferUp";
export default DataTransferUp;
