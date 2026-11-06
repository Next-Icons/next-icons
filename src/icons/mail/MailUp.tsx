import { forwardRef } from "react";
import type { IconProps } from "../../types";
const MailUp = forwardRef<SVGSVGElement, IconProps>(({ color = "currentColor", size = 24, strokeWidth = 1.5, ...rest }, ref) => {
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
			<path d="M12 19h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v5.5" />
			<path d="M19 22v-6" />
			<path d="M22 19l-3 -3l-3 3" />
			<path d="M3 7l9 6l9 -6" />
		</svg>
	);
});

MailUp.displayName = "MailUp";
export default MailUp;
