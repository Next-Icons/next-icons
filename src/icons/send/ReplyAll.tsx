import { forwardRef } from "react";
import type { IconProps } from "../../types";
const ReplyAll = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="m12 17-5-5 5-5" />
			<path d="M22 18v-2a4 4 0 0 0-4-4H7" />
			<path d="m7 17-5-5 5-5" />
		</svg>
	);
});

ReplyAll.displayName = "ReplyAll";
export default ReplyAll;
