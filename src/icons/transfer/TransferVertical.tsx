import { forwardRef } from "react";
import type { IconProps } from "../../types";
const TransferVertical = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M10 4v16l-6 -5.5" />
			<path d="M14 20v-16l6 5.5" />
		</svg>
	);
});

TransferVertical.displayName = "TransferVertical";
export default TransferVertical;
