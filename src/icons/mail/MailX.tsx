import { forwardRef } from "react";
import type { IconProps } from "../../types";
const MailX = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M22 12.532V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8.792" />
			<path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
			<path d="m16.5 16.5 5 5" />
			<path d="m21.5 16.5-5 5" />
		</svg>
	);
});

MailX.displayName = "MailX";
export default MailX;
