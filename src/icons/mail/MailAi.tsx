import { forwardRef } from "react";
import type { IconProps } from "../../types";
const MailAi = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M10 19h-5a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4" />
			<path d="M3 7l8 5.345m4 -1.345l6 -4" />
			<path d="M14 21v-4a2 2 0 1 1 4 0v4" />
			<path d="M14 19h4" />
			<path d="M21 15v6" />
		</svg>
	);
});

MailAi.displayName = "MailAi";
export default MailAi;
