import { forwardRef } from "react";
import type { IconProps } from "../../types";
const TransferOut = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M4 19v2h16v-14l-8 -4l-8 4v2" />
			<path d="M13 14h-9" />
			<path d="M7 11l-3 3l3 3" />
		</svg>
	);
});

TransferOut.displayName = "TransferOut";
export default TransferOut;
