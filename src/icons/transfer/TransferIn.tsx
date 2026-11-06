import { forwardRef } from "react";
import type { IconProps } from "../../types";
const TransferIn = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M4 18v3h16v-14l-8 -4l-8 4v3" />
			<path d="M4 14h9" />
			<path d="M10 11l3 3l-3 3" />
		</svg>
	);
});

TransferIn.displayName = "TransferIn";
export default TransferIn;
