import { forwardRef } from "react";
import type { IconProps } from "../../types";
const Mail = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
			<rect height="16" rx="2" width="20" x="2" y="4" />
		</svg>
	);
});

Mail.displayName = "Mail";
export default Mail;
