import { forwardRef } from "react";
import type { IconProps } from "../../types";
const DataTransferDown = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M17 20L17 19" />
			<path d="M17 15L17 14" />
			<path d="M7 4V20M7 20L4 17M7 20L10 17" />
			<path d="M17 10V4M17 4L14 7M17 4L20 7" />
		</svg>
	);
});

DataTransferDown.displayName = "DataTransferDown";
export default DataTransferDown;
